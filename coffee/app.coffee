$canvas = null
perkCircleRadius = 3
hoveredPerk = null
activePerkTreeView = null
workspace = null

TREE_COLS = 3
TREE_PADDING = 5
TREE_WIDTH = 100
TREE_HEIGHT = 127

activePerkLevels = {}

perkTrees = window.perkTrees
perkTreeViews = []

perkTreeId = (perkTree) ->
  i = 0
  for pt in perkTrees
    if pt == perkTree
      return i
    i++
  return 0


perkId = (perk) ->
  i = 0
  for perkTree in perkTrees
    j = 0
    for p in perkTree.perks
      if p == perk
        return "perk#{(i * 100) + j}"
      j++
    i++
  return ''


forEachParentOfPerk = (thePerk, func) ->
  if thePerk and thePerk.deps
    for perkTree in perkTrees
      for perk in perkTree.perks
        if perk == thePerk
          for dep in perk.deps
            func(perkTree.perks[dep])
          return
  return


isPerkChildOfParentWithIndex = (perk, parentIndex) ->
  if perk and perk.deps
    for dep in perk.deps
      if dep == parentIndex
        return true
  return false


forEachChildOfPerk = (thePerk, func) ->
  for perkTree in perkTrees
    for perk, i in perkTree.perks
      if perk == thePerk
        for perk in perkTree.perks
          if isPerkChildOfParentWithIndex(perk, i)
            forEachChildOfPerk(perk, func)
            func(perk)
        return
  return


getPerkLevel = (perk) ->
  id = perkId perk
  activePerkLevels[id] ? 0

countActivePerks = ->
  result = 0
  for own key, value of activePerkLevels
    result += value
  return result

activeData = ->
  bitArray = new BitArray(255)
  i = 0
  for perkTree in perkTrees
    for perk in perkTree.perks
      maxLevels = perk.levels || 1
      activeLevel = getPerkLevel(perk)
      j = 0
      while j < maxLevels
        bitArray.set i++, activeLevel-1 == j++
  return bitArray.toString()


readActiveData = (str) ->
  activePerkLevels = {}
  bitArray = new BitArray(255)
  bitArray.parse(str)
  i = 0
  for perkTree in perkTrees
    for perk in perkTree.perks
      maxLevels = perk.levels || 1
      j = 0
      while j < maxLevels
        if bitArray.get i++
          activePerkLevels[perkId(perk)] = j+1
        j++


getPerkDisplayName = (perk, level = 0) ->
  maxLevels = perk.levels || 1
  return perk.name if maxLevels == 1
  activeLevel = if level > 0 then level else getPerkLevel(perk)
  "#{perk.name} (#{activeLevel}/#{maxLevels})"


getPerkInfos = (perkTree) ->
  result =
    active: 0
    max: 0
    req: 0
  for perk in perkTree.perks
    maxLevels = perk.levels || 1
    req = perk.req || [0]
    level = getPerkLevel(perk)
    result.active += level
    result.max += maxLevels
    result.req = Math.max(result.req, req[level-1]) if level > 0
  result

changePerkLevel = (perk, inc) ->
  ok = true

  maxLevels = perk.levels || 1
  activeLevel = getPerkLevel(perk)
  newLevel = Math.max(0, Math.min(activeLevel+inc, maxLevels))

  if inc > 0
    parentOk = false
    forEachParentOfPerk perk, (parent) ->
      parentOk = true if getPerkLevel(parent) > 0
    if not parentOk
      forEachParentOfPerk perk, (parent) ->
        if not parentOk
          changePerkLevel(parent, inc)
          parentOk = true
  else if newLevel == 0
    forEachChildOfPerk perk, (child) ->
      changePerkLevel(child, inc*100)

  activePerkLevels[perkId(perk)] = newLevel


class PerkTreeView
  constructor: (@model, @frame, @scale) ->

  perkTreeFrame: ->
    minx = maxx = miny = maxy = 0
    for perk in @model.perks
      minx = perk.pos[0] if perk.pos[0] < minx
      maxx = perk.pos[0] if perk.pos[0] > maxx
      miny = perk.pos[1] if perk.pos[1] < miny
      maxy = perk.pos[1] if perk.pos[1] > maxy
    return [Math.abs(minx)*@scale, Math.abs(miny)*@scale,
            Math.abs(minx-maxx)*@scale, Math.abs(miny-maxy)*@scale]

  hitFrame: (x, y) ->
    (x >= @frame[0]) &&
    (x <= @frame[0]+@frame[2]) &&
    (y >= @frame[1]) &&
    (y <= @frame[1]+@frame[3])

  perkAtPosition: (x, y) ->
    return null if not @model
    result = null
    perkSize = perkCircleRadius * @scale
    root = @root()
    for perk in @model.perks
      perkX = perk.pos[0]*@scale+root[0]
      perkY = perk.pos[1]*@scale+root[1]

      if x >= (perkX-perkSize) &&
         x <= (perkX+perkSize) &&
         y >= (perkY-perkSize) &&
         y <= (perkY+perkSize)
        result = perk
        break

    return result

  root: ->
    perkTreeFrame = @perkTreeFrame()
    x = @frame[0] + @frame[2]/2 - perkTreeFrame[2]/2 + perkTreeFrame[0]
    y = @frame[1] + ((@frame[3]/2 + perkTreeFrame[3]/2) * 0.98)
    return [x, y]

  draw: (ctx, captions, title) ->
    ctx.save()

    isActivePerkTree = activePerkTreeView && activePerkTreeView.model == @model

    ctx.fillStyle = if isActivePerkTree then 'rgba(0,0,0,0.5)' else 'rgba(30,30,30,0.5)'
    ctx.fillRect(@frame[0], @frame[1], @frame[2], @frame[3])

    if not @model
      ctx.restore()
      return

    root = @root()
    ctx.translate(root[0], root[1])
    ctx.scale(@scale, @scale)

    # Draw dependency lines...
    for perk in @model.perks
      if perk.deps
        level = getPerkLevel(perk)
        for dep in perk.deps
          depPerk = @model.perks[dep]
          connected = (level > 0) and (getPerkLevel(depPerk) > 0)
          ctx.beginPath()
          ctx.lineWidth = if connected then 1.5 else 0.5
          ctx.strokeStyle = if connected then 'rgba(100, 150, 230, 1.0)' else 'rgba(100, 150, 230, 0.5)'
          ctx.moveTo(depPerk.pos[0], depPerk.pos[1])
          ctx.lineTo(perk.pos[0], perk.pos[1])
          ctx.stroke()

    # Draw perks ...
    for perk in @model.perks
      level = getPerkLevel(perk)

      ctx.beginPath()
      if perk == hoveredPerk
        ctx.fillStyle = 'rgb(255, 0, 0)'
      else
        ctx.fillStyle = if level > 0 then 'rgba(230, 230, 150, 1.0)' else 'rgba(230, 100, 150, 0.5)'

      radius = perkCircleRadius * if level > 0 then 1 else 0.5
      ctx.arc(perk.pos[0], perk.pos[1], radius, 0, Math.PI*2, true)
      ctx.fill()

      if captions
        ctx.save()

        perkName = getPerkDisplayName(perk)

        ctx.font = "4px Arial"
        w = ctx.measureText(perkName).width

        captionOffset = perk.captionOffset || [0, 0]

        ctx.translate(perk.pos[0]+captionOffset[0], perk.pos[1]+8+captionOffset[1])
        #ctx.rotate(Math.PI/4-0.2)
        #ctx.rotate(0.2)
        ctx.translate(-w/2, 0)

        ctx.fillStyle = if level > 0 then 'rgba(255, 255, 255, 1.0)' else 'rgba(200, 200, 200, 0.5)'

        ctx.shadowColor = 'rgb(0,0,0)'
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 2
        ctx.shadowBlur = 2

        ctx.fillText(perkName, 0, 0)
        ctx.restore()

    ctx.restore()
  
    if title
      perkInfos = getPerkInfos(@model)

      ctx.save()
      if perkInfos.active > 0
        ctx.shadowColor = 'rgb(10,10,10)'
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 2
        ctx.shadowBlur = 2
        ctx.fillStyle = 'rgba(100,100,100,0.8)'
        ctx.font = 'bold 30px Arial'
        ctx.fillText(perkInfos.active, @frame[0]+8, @frame[1]+30)

      if perkInfos.active > 0
        ctx.fillStyle = 'rgb(100,150,230)'
      else
        ctx.fillStyle = 'rgb(200,200,200)'

      ctx.shadowColor = 'rgb(10,10,10)'
      ctx.shadowOffsetX = 2
      ctx.shadowOffsetY = 2
      ctx.shadowBlur = 2

      ctx.font = '12px Arial'
      w = ctx.measureText(@model.name).width
      ctx.fillText(@model.name, @frame[0]+@frame[2]/2-w/2, @frame[1]+@frame[3]-5)

      ctx.restore()
    if hoveredPerk and (not title)
      ctx.save()

      maxLevels = hoveredPerk.levels || 1
      activeLevel = getPerkLevel(hoveredPerk)

      # Perk Name
      ctx.font = 'bold 14px Arial'
      ctx.fillStyle = 'rgba(255,255,255,0.7)'
      displayName = getPerkDisplayName(hoveredPerk)
      w = ctx.measureText(displayName).width
      ctx.fillText(displayName, 335, 743)

      # Requires
      if hoveredPerk.req
        ctx.font = '12px Arial'
        ctx.fillStyle = 'rgba(200,200,200,0.7)'
        ctx.fillText("Requires: #{hoveredPerk.req[Math.max(0, activeLevel-1)]}", 345+w, 743)

      # Perk Description
      ctx.font = '12px Arial'
      ctx.fillText(hoveredPerk.desc[Math.max(0, activeLevel-1)], 335, 760)

      # Next Level Description
      if activeLevel > 0 and activeLevel < maxLevels
        t = "Next Rank: #{hoveredPerk.desc[Math.max(0, activeLevel)]}"
        w = ctx.measureText(t).width
        ctx.fillText(t, 335, 777)
        if hoveredPerk.req
          t = "Requires: #{hoveredPerk.req[Math.max(0, activeLevel)]}"
          ctx.fillText(t, 340+w, 777)

      ctx.restore()


redraw = ->
  if !$canvas then return

  ctx = $canvas[0].getContext("2d")
  ctx.save()
  ctx.fillStyle = 'rgb(20,20,20)'
  ctx.fillRect(0, 0, $canvas.width(), $canvas.height())

  i = 0
  for perkTreeView in perkTreeViews
    # colored borders...
    if 0 < i < 7
        ctx.fillStyle = 'rgba(20,83,112,0.5)'
    else if 6 < i < 13
        ctx.fillStyle = 'rgba(102,63,32,0.5)'
    else
        ctx.fillStyle = 'rgba(35,81,45,0.5)'
    ctx.fillRect(perkTreeView.frame[0]-1,
                 perkTreeView.frame[1]-1,
                 perkTreeView.frame[2]+2,
                 perkTreeView.frame[3]+2)
    perkTreeView.draw ctx, false, true
    i++

  if activePerkTreeView
    ctx.fillStyle = 'rgb(0,0,0)'
    ctx.fillRect(activePerkTreeView.frame[0]-1,
                 activePerkTreeView.frame[1]-1,
                 activePerkTreeView.frame[2]+2,
                 activePerkTreeView.frame[3]+2)

    activePerkTreeView.draw ctx, true, false

    if activePerkTreeView.model
      perkInfos = getPerkInfos(activePerkTreeView.model)

      ctx.fillStyle = 'rgba(255,255,255,0.7)'
      ctx.font = 'bold 20px Arial'
      ctx.fillText(activePerkTreeView.model.name, 335, 40)
      ctx.font = 'bold 10px Arial'
      ctx.fillText("Active perks: #{perkInfos.active} of #{perkInfos.max}", 335, 60)
      ctx.fillText("Required skill level: #{perkInfos.req}", 335, 75)

  ctx.restore()

  activePerks = countActivePerks()
  $('#active-perks').html(activePerks)
  if activePerks == 0
    $('.clear-perks').fadeOut('fast')
  else
    $('.clear-perks').fadeIn('fast')


getResetCode = () ->
  result = []
  for perkTree in perkTrees
    result.push "; Remove all perks from '#{perkTree.name}'"
    perks = _.clone(perkTree.perks)
    perks.reverse()
    for perk in perks
      if perk.id
        r = _.clone(perk.id)
        r.reverse()
        level = perk.levels || 1
        for id in r
          result.push "player.removeperk #{id} ; #{getPerkDisplayName(perk, level--)}"
    result.push ""
  return result.join("\r\n")

getAddPerksCode = () ->
  result = []
  result.push "player.setlevel #{Math.max(1, countActivePerks())}"

  for perkTree in perkTrees
    perkInfos = getPerkInfos(perkTree)
    result.push ""
    result.push "; Add perks to '#{perkTree.name}'"
    result.push "player.setav #{perkTree.cname} #{Math.max(15, perkInfos.req)}"
    for perk in perkTree.perks
      if perk.id
        activeLevel = getPerkLevel(perk)
        level = 1
        for id in perk.id
          if level <= activeLevel
            result.push "player.addperk #{id} ; #{getPerkDisplayName(perk, level++)}"
          else
            break
  return result.join("\r\n")


downHandler = (e) ->
  e.originalEvent.preventDefault()
  offset = $canvas.offset()
  x = e.pageX - offset.left
  y = e.pageY - offset.top

  if activePerkTreeView && activePerkTreeView.hitFrame(x, y)
    perk = activePerkTreeView.perkAtPosition(x, y)
    if perk
      changePerkLevel(perk, if e.button == 2 then -1 else 1)
      workspace.navigate "t/#{perkTreeId(activePerkTreeView.model)}/#{activeData()}"
      redraw()
  else
    for perkTreeView in perkTreeViews
      if perkTreeView.hitFrame(x, y)
        activePerkTreeView.model = perkTreeView.model
        workspace.navigate "t/#{perkTreeId(activePerkTreeView.model)}/#{activeData()}"
        redraw()
        break


setCursor = (pointer) ->
  document.body.style.cursor = if pointer then 'pointer' else 'default'


moveHandler = (e) ->
  offset = $canvas.offset()
  x = e.pageX - offset.left
  y = e.pageY - offset.top

  if activePerkTreeView && activePerkTreeView.hitFrame(x, y)
    perk = activePerkTreeView.perkAtPosition(x, y)
    if perk
      setCursor true
      hoveredPerk = perk
      redraw()
    else if hoveredPerk
      setCursor false
      hoveredPerk = null
      redraw()
  else
    setCursor false
    for perkTreeView in perkTreeViews
      if perkTreeView.hitFrame(x, y)
        document.body.style.cursor = 'pointer'
        setCursor true
        break


class Workspace extends Backbone.Router
  routes:
    't/:tree/:data':  'tree'
    't/:tree':        'tree'
    '':               'tree'

  tree: (tree = '1', data = '') ->
    i = Math.min(Math.max(0, parseInt(tree, 10)), perkTrees.length-1)
    activePerkTreeView.model = perkTrees[i]
    if data != ''
      readActiveData(data)
    redraw()


$ ->
  $canvas = $('#canvas')
  if !$canvas[0].getContext
    $canvas = null
    return

  perkTreeViews = []
  x = TREE_PADDING + (TREE_WIDTH + TREE_PADDING) * 2
  y = TREE_PADDING + (TREE_HEIGHT + TREE_PADDING) * 5
  i = 0
  activePerkTreeView = new PerkTreeView(null, [320, TREE_PADDING, 675, 787], 2.8)
  for perkTree in perkTrees
    perkTreeViews.push new PerkTreeView(perkTree, [x, y, TREE_WIDTH, TREE_HEIGHT], 0.4)
    i++
    x += TREE_WIDTH + TREE_PADDING
    if i == 1
      x = TREE_PADDING
      y = TREE_PADDING
    else if ((i - 1) % TREE_COLS) == 0
      x = TREE_PADDING
      y += TREE_HEIGHT + TREE_PADDING

  $('.clear-perks').click ->
    if confirm('Really clear all perks?')
      activePerkLevels = {}
      workspace.navigate "t/#{perkTreeId(activePerkTreeView.model)}/#{activeData()}", true

  $('#download-reset').click ->
    window.open("data:application/octet-stream,#{encodeURI(getResetCode())}")
  $('#download-addperks').click ->
    window.open("data:application/octet-stream,#{encodeURI(getAddPerksCode())}")
  $('#help').click ->
    window.open("respec.html")

  $canvas
    .mousemove(moveHandler)
    .mousedown(downHandler)
    .contextmenu (e) -> e.originalEvent.preventDefault()
  redraw()

  workspace = new Workspace
  Backbone.history.start()
