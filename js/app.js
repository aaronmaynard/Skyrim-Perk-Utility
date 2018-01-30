(function() {
  var $canvas, PerkTreeView, TREE_COLS, TREE_HEIGHT, TREE_PADDING, TREE_WIDTH, Workspace, activeData, activePerkLevels, activePerkTreeView, changePerkLevel, countActivePerks, downHandler, forEachChildOfPerk, forEachParentOfPerk, getAddPerksCode, getPerkDisplayName, getPerkInfos, getPerkLevel, getResetCode, hoveredPerk, isPerkChildOfParentWithIndex, moveHandler, perkCircleRadius, perkId, perkTreeId, perkTreeViews, perkTrees, readActiveData, redraw, setCursor, workspace,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  $canvas = null;
  perkCircleRadius = 3;
  hoveredPerk = null;
  activePerkTreeView = null;
  workspace = null;
  TREE_COLS = 3;
  TREE_PADDING = 5;
  TREE_WIDTH = 100;
  TREE_HEIGHT = 127;
  activePerkLevels = {};
  perkTrees = window.perkTrees;
  perkTreeViews = [];
  perkTreeId = function(perkTree) {
    var i, pt, _i, _len;
    i = 0;
    for (_i = 0, _len = perkTrees.length; _i < _len; _i++) {
      pt = perkTrees[_i];
      if (pt === perkTree) return i;
      i++;
    }
    return 0;
  };
  perkId = function(perk) {
    var i, j, p, perkTree, _i, _j, _len, _len2, _ref;
    i = 0;
    for (_i = 0, _len = perkTrees.length; _i < _len; _i++) {
      perkTree = perkTrees[_i];
      j = 0;
      _ref = perkTree.perks;
      for (_j = 0, _len2 = _ref.length; _j < _len2; _j++) {
        p = _ref[_j];
        if (p === perk) return "perk" + ((i * 100) + j);
        j++;
      }
      i++;
    }
    return '';
  };
  forEachParentOfPerk = function(thePerk, func) {
    var dep, perk, perkTree, _i, _j, _k, _len, _len2, _len3, _ref, _ref2;
    if (thePerk && thePerk.deps) {
      for (_i = 0, _len = perkTrees.length; _i < _len; _i++) {
        perkTree = perkTrees[_i];
        _ref = perkTree.perks;
        for (_j = 0, _len2 = _ref.length; _j < _len2; _j++) {
          perk = _ref[_j];
          if (perk === thePerk) {
            _ref2 = perk.deps;
            for (_k = 0, _len3 = _ref2.length; _k < _len3; _k++) {
              dep = _ref2[_k];
              func(perkTree.perks[dep]);
            }
            return;
          }
        }
      }
    }
  };
  isPerkChildOfParentWithIndex = function(perk, parentIndex) {
    var dep, _i, _len, _ref;
    if (perk && perk.deps) {
      _ref = perk.deps;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        dep = _ref[_i];
        if (dep === parentIndex) return true;
      }
    }
    return false;
  };
  forEachChildOfPerk = function(thePerk, func) {
    var i, perk, perkTree, _i, _j, _len, _len2, _len3, _ref, _ref2;
    for (_i = 0, _len = perkTrees.length; _i < _len; _i++) {
      perkTree = perkTrees[_i];
      _ref = perkTree.perks;
      for (i = 0, _len2 = _ref.length; i < _len2; i++) {
        perk = _ref[i];
        if (perk === thePerk) {
          _ref2 = perkTree.perks;
          for (_j = 0, _len3 = _ref2.length; _j < _len3; _j++) {
            perk = _ref2[_j];
            if (isPerkChildOfParentWithIndex(perk, i)) {
              forEachChildOfPerk(perk, func);
              func(perk);
            }
          }
          return;
        }
      }
    }
  };
  getPerkLevel = function(perk) {
    var id, _ref;
    id = perkId(perk);
    return (_ref = activePerkLevels[id]) != null ? _ref : 0;
  };
  countActivePerks = function() {
    var key, result, value;
    result = 0;
    for (key in activePerkLevels) {
      if (!__hasProp.call(activePerkLevels, key)) continue;
      value = activePerkLevels[key];
      result += value;
    }
    return result;
  };
  activeData = function() {
    var activeLevel, bitArray, i, j, maxLevels, perk, perkTree, _i, _j, _len, _len2, _ref;
    bitArray = new BitArray(255);
    i = 0;
    for (_i = 0, _len = perkTrees.length; _i < _len; _i++) {
      perkTree = perkTrees[_i];
      _ref = perkTree.perks;
      for (_j = 0, _len2 = _ref.length; _j < _len2; _j++) {
        perk = _ref[_j];
        maxLevels = perk.levels || 1;
        activeLevel = getPerkLevel(perk);
        j = 0;
        while (j < maxLevels) {
          bitArray.set(i++, activeLevel - 1 === j++);
        }
      }
    }
    return bitArray.toString();
  };
  readActiveData = function(str) {
    var bitArray, i, j, maxLevels, perk, perkTree, _i, _len, _results;
    activePerkLevels = {};
    bitArray = new BitArray(255);
    bitArray.parse(str);
    i = 0;
    _results = [];
    for (_i = 0, _len = perkTrees.length; _i < _len; _i++) {
      perkTree = perkTrees[_i];
      _results.push((function() {
        var _j, _len2, _ref, _results2;
        _ref = perkTree.perks;
        _results2 = [];
        for (_j = 0, _len2 = _ref.length; _j < _len2; _j++) {
          perk = _ref[_j];
          maxLevels = perk.levels || 1;
          j = 0;
          _results2.push((function() {
            var _results3;
            _results3 = [];
            while (j < maxLevels) {
              if (bitArray.get(i++)) activePerkLevels[perkId(perk)] = j + 1;
              _results3.push(j++);
            }
            return _results3;
          })());
        }
        return _results2;
      })());
    }
    return _results;
  };
  getPerkDisplayName = function(perk, level) {
    var activeLevel, maxLevels;
    if (level == null) level = 0;
    maxLevels = perk.levels || 1;
    if (maxLevels === 1) return perk.name;
    activeLevel = level > 0 ? level : getPerkLevel(perk);
    return "" + perk.name + " (" + activeLevel + "/" + maxLevels + ")";
  };
  getPerkInfos = function(perkTree) {
    var level, maxLevels, perk, req, result, _i, _len, _ref;
    result = {
      active: 0,
      max: 0,
      req: 0
    };
    _ref = perkTree.perks;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      perk = _ref[_i];
      maxLevels = perk.levels || 1;
      req = perk.req || [0];
      level = getPerkLevel(perk);
      result.active += level;
      result.max += maxLevels;
      if (level > 0) result.req = Math.max(result.req, req[level - 1]);
    }
    return result;
  };
  changePerkLevel = function(perk, inc) {
    var activeLevel, maxLevels, newLevel, ok, parentOk;
    ok = true;
    maxLevels = perk.levels || 1;
    activeLevel = getPerkLevel(perk);
    newLevel = Math.max(0, Math.min(activeLevel + inc, maxLevels));
    if (inc > 0) {
      parentOk = false;
      forEachParentOfPerk(perk, function(parent) {
        if (getPerkLevel(parent) > 0) return parentOk = true;
      });
      if (!parentOk) {
        forEachParentOfPerk(perk, function(parent) {
          if (!parentOk) {
            changePerkLevel(parent, inc);
            return parentOk = true;
          }
        });
      }
    } else if (newLevel === 0) {
      forEachChildOfPerk(perk, function(child) {
        return changePerkLevel(child, inc * 100);
      });
    }
    return activePerkLevels[perkId(perk)] = newLevel;
  };
  PerkTreeView = (function() {

    function PerkTreeView(model, frame, scale) {
      this.model = model;
      this.frame = frame;
      this.scale = scale;
    }

    PerkTreeView.prototype.perkTreeFrame = function() {
      var maxx, maxy, minx, miny, perk, _i, _len, _ref;
      minx = maxx = miny = maxy = 0;
      _ref = this.model.perks;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        perk = _ref[_i];
        if (perk.pos[0] < minx) minx = perk.pos[0];
        if (perk.pos[0] > maxx) maxx = perk.pos[0];
        if (perk.pos[1] < miny) miny = perk.pos[1];
        if (perk.pos[1] > maxy) maxy = perk.pos[1];
      }
      return [Math.abs(minx) * this.scale, Math.abs(miny) * this.scale, Math.abs(minx - maxx) * this.scale, Math.abs(miny - maxy) * this.scale];
    };

    PerkTreeView.prototype.hitFrame = function(x, y) {
      return (x >= this.frame[0]) && (x <= this.frame[0] + this.frame[2]) && (y >= this.frame[1]) && (y <= this.frame[1] + this.frame[3]);
    };

    PerkTreeView.prototype.perkAtPosition = function(x, y) {
      var perk, perkSize, perkX, perkY, result, root, _i, _len, _ref;
      if (!this.model) return null;
      result = null;
      perkSize = perkCircleRadius * this.scale;
      root = this.root();
      _ref = this.model.perks;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        perk = _ref[_i];
        perkX = perk.pos[0] * this.scale + root[0];
        perkY = perk.pos[1] * this.scale + root[1];
        if (x >= (perkX - perkSize) && x <= (perkX + perkSize) && y >= (perkY - perkSize) && y <= (perkY + perkSize)) {
          result = perk;
          break;
        }
      }
      return result;
    };

    PerkTreeView.prototype.root = function() {
      var perkTreeFrame, x, y;
      perkTreeFrame = this.perkTreeFrame();
      x = this.frame[0] + this.frame[2] / 2 - perkTreeFrame[2] / 2 + perkTreeFrame[0];
      y = this.frame[1] + ((this.frame[3] / 2 + perkTreeFrame[3] / 2) * 0.98);
      return [x, y];
    };

    PerkTreeView.prototype.draw = function(ctx, captions, title) {
      var activeLevel, captionOffset, connected, dep, depPerk, displayName, isActivePerkTree, level, maxLevels, perk, perkInfos, perkName, radius, root, t, w, _i, _j, _k, _len, _len2, _len3, _ref, _ref2, _ref3;
      ctx.save();
      isActivePerkTree = activePerkTreeView && activePerkTreeView.model === this.model;
      ctx.fillStyle = isActivePerkTree ? 'rgba(0,0,0,0.5)' : 'rgba(30,30,30,0.5)';
      ctx.fillRect(this.frame[0], this.frame[1], this.frame[2], this.frame[3]);
      if (!this.model) {
        ctx.restore();
        return;
      }
      root = this.root();
      ctx.translate(root[0], root[1]);
      ctx.scale(this.scale, this.scale);
      _ref = this.model.perks;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        perk = _ref[_i];
        if (perk.deps) {
          level = getPerkLevel(perk);
          _ref2 = perk.deps;
          for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
            dep = _ref2[_j];
            depPerk = this.model.perks[dep];
            connected = (level > 0) && (getPerkLevel(depPerk) > 0);
            ctx.beginPath();
            ctx.lineWidth = connected ? 1.5 : 0.5;
            ctx.strokeStyle = connected ? 'rgba(100, 150, 230, 1.0)' : 'rgba(100, 150, 230, 0.5)';
            ctx.moveTo(depPerk.pos[0], depPerk.pos[1]);
            ctx.lineTo(perk.pos[0], perk.pos[1]);
            ctx.stroke();
          }
        }
      }
      _ref3 = this.model.perks;
      for (_k = 0, _len3 = _ref3.length; _k < _len3; _k++) {
        perk = _ref3[_k];
        level = getPerkLevel(perk);
        ctx.beginPath();
        if (perk === hoveredPerk) {
          ctx.fillStyle = 'rgb(255, 0, 0)';
        } else {
          ctx.fillStyle = level > 0 ? 'rgba(230, 230, 150, 1.0)' : 'rgba(230, 100, 150, 0.5)';
        }
        radius = perkCircleRadius * (level > 0 ? 1 : 0.5);
        ctx.arc(perk.pos[0], perk.pos[1], radius, 0, Math.PI * 2, true);
        ctx.fill();
        if (captions) {
          ctx.save();
          perkName = getPerkDisplayName(perk);
          ctx.font = "4px Arial";
          w = ctx.measureText(perkName).width;
          captionOffset = perk.captionOffset || [0, 0];
          ctx.translate(perk.pos[0] + captionOffset[0], perk.pos[1] + 8 + captionOffset[1]);
          ctx.translate(-w / 2, 0);
          ctx.fillStyle = level > 0 ? 'rgba(255, 255, 255, 1.0)' : 'rgba(200, 200, 200, 0.5)';
          ctx.shadowColor = 'rgb(0,0,0)';
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
          ctx.shadowBlur = 2;
          ctx.fillText(perkName, 0, 0);
          ctx.restore();
        }
      }
      ctx.restore();
      if (title) {
        perkInfos = getPerkInfos(this.model);
        ctx.save();
        if (perkInfos.active > 0) {
          ctx.shadowColor = 'rgb(10,10,10)';
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
          ctx.shadowBlur = 2;
          ctx.fillStyle = 'rgba(100,100,100,0.8)';
          ctx.font = 'bold 30px Arial';
          ctx.fillText(perkInfos.active, this.frame[0] + 8, this.frame[1] + 30);
        }
        if (perkInfos.active > 0) {
          ctx.fillStyle = 'rgb(100,150,230)';
        } else {
          ctx.fillStyle = 'rgb(200,200,200)';
        }
        ctx.shadowColor = 'rgb(10,10,10)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.font = '12px Arial';
        w = ctx.measureText(this.model.name).width;
        ctx.fillText(this.model.name, this.frame[0] + this.frame[2] / 2 - w / 2, this.frame[1] + this.frame[3] - 5);
        ctx.restore();
      }
      if (hoveredPerk && (!title)) {
        ctx.save();
        maxLevels = hoveredPerk.levels || 1;
        activeLevel = getPerkLevel(hoveredPerk);
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        displayName = getPerkDisplayName(hoveredPerk);
        w = ctx.measureText(displayName).width;
        ctx.fillText(displayName, 335, 743);
        if (hoveredPerk.req) {
          ctx.font = '12px Arial';
          ctx.fillStyle = 'rgba(200,200,200,0.7)';
          ctx.fillText("Requires: " + hoveredPerk.req[Math.max(0, activeLevel - 1)], 345 + w, 743);
        }
        ctx.font = '12px Arial';
        ctx.fillText(hoveredPerk.desc[Math.max(0, activeLevel - 1)], 335, 760);
        if (activeLevel > 0 && activeLevel < maxLevels) {
          t = "Next Rank: " + hoveredPerk.desc[Math.max(0, activeLevel)];
          w = ctx.measureText(t).width;
          ctx.fillText(t, 335, 777);
          if (hoveredPerk.req) {
            t = "Requires: " + hoveredPerk.req[Math.max(0, activeLevel)];
            ctx.fillText(t, 340 + w, 777);
          }
        }
        return ctx.restore();
      }
    };

    return PerkTreeView;

  })();
  redraw = function() {
    var activePerks, ctx, i, perkInfos, perkTreeView, _i, _len;
    if (!$canvas) return;
    ctx = $canvas[0].getContext("2d");
    ctx.save();
    ctx.fillStyle = 'rgb(20,20,20)';
    ctx.fillRect(0, 0, $canvas.width(), $canvas.height());
    i = 0;
    for (_i = 0, _len = perkTreeViews.length; _i < _len; _i++) {
      perkTreeView = perkTreeViews[_i];
      if ((0 < i && i < 7)) {
        ctx.fillStyle = 'rgba(20,83,112,0.5)';
      } else if ((6 < i && i < 13)) {
        ctx.fillStyle = 'rgba(102,63,32,0.5)';
      } else {
        ctx.fillStyle = 'rgba(35,81,45,0.5)';
      }
      ctx.fillRect(perkTreeView.frame[0] - 1, perkTreeView.frame[1] - 1, perkTreeView.frame[2] + 2, perkTreeView.frame[3] + 2);
      perkTreeView.draw(ctx, false, true);
      i++;
    }
    if (activePerkTreeView) {
      ctx.fillStyle = 'rgb(0,0,0)';
      ctx.fillRect(activePerkTreeView.frame[0] - 1, activePerkTreeView.frame[1] - 1, activePerkTreeView.frame[2] + 2, activePerkTreeView.frame[3] + 2);
      activePerkTreeView.draw(ctx, true, false);
      if (activePerkTreeView.model) {
        perkInfos = getPerkInfos(activePerkTreeView.model);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.font = 'bold 20px Arial';
        ctx.fillText(activePerkTreeView.model.name, 335, 40);
        ctx.font = 'bold 10px Arial';
        ctx.fillText("Active perks: " + perkInfos.active + " of " + perkInfos.max, 335, 60);
        ctx.fillText("Required skill level: " + perkInfos.req, 335, 75);
      }
    }
    ctx.restore();
    activePerks = countActivePerks();
    $('#active-perks').html(activePerks);
    if (activePerks === 0) {
      return $('.clear-perks').fadeOut('fast');
    } else {
      return $('.clear-perks').fadeIn('fast');
    }
  };
  getResetCode = function() {
    var id, level, perk, perkTree, perks, r, result, _i, _j, _k, _len, _len2, _len3;
    result = [];
    for (_i = 0, _len = perkTrees.length; _i < _len; _i++) {
      perkTree = perkTrees[_i];
      result.push("; Remove all perks from '" + perkTree.name + "'");
      perks = _.clone(perkTree.perks);
      perks.reverse();
      for (_j = 0, _len2 = perks.length; _j < _len2; _j++) {
        perk = perks[_j];
        if (perk.id) {
          r = _.clone(perk.id);
          r.reverse();
          level = perk.levels || 1;
          for (_k = 0, _len3 = r.length; _k < _len3; _k++) {
            id = r[_k];
            result.push("player.removeperk " + id + " ; " + (getPerkDisplayName(perk, level--)));
          }
        }
      }
      result.push("");
    }
    return result.join("\r\n");
  };
  getAddPerksCode = function() {
    var activeLevel, id, level, perk, perkInfos, perkTree, result, _i, _j, _k, _len, _len2, _len3, _ref, _ref2;
    result = [];
    result.push("player.setlevel " + (Math.max(1, countActivePerks())));
    for (_i = 0, _len = perkTrees.length; _i < _len; _i++) {
      perkTree = perkTrees[_i];
      perkInfos = getPerkInfos(perkTree);
      result.push("");
      result.push("; Add perks to '" + perkTree.name + "'");
      result.push("player.setav " + perkTree.cname + " " + (Math.max(15, perkInfos.req)));
      _ref = perkTree.perks;
      for (_j = 0, _len2 = _ref.length; _j < _len2; _j++) {
        perk = _ref[_j];
        if (perk.id) {
          activeLevel = getPerkLevel(perk);
          level = 1;
          _ref2 = perk.id;
          for (_k = 0, _len3 = _ref2.length; _k < _len3; _k++) {
            id = _ref2[_k];
            if (level <= activeLevel) {
              result.push("player.addperk " + id + " ; " + (getPerkDisplayName(perk, level++)));
            } else {
              break;
            }
          }
        }
      }
    }
    return result.join("\r\n");
  };
  downHandler = function(e) {
    var offset, perk, perkTreeView, x, y, _i, _len, _results;
    e.originalEvent.preventDefault();
    offset = $canvas.offset();
    x = e.pageX - offset.left;
    y = e.pageY - offset.top;
    if (activePerkTreeView && activePerkTreeView.hitFrame(x, y)) {
      perk = activePerkTreeView.perkAtPosition(x, y);
      if (perk) {
        changePerkLevel(perk, e.button === 2 ? -1 : 1);
        workspace.navigate("t/" + (perkTreeId(activePerkTreeView.model)) + "/" + (activeData()));
        return redraw();
      }
    } else {
      _results = [];
      for (_i = 0, _len = perkTreeViews.length; _i < _len; _i++) {
        perkTreeView = perkTreeViews[_i];
        if (perkTreeView.hitFrame(x, y)) {
          activePerkTreeView.model = perkTreeView.model;
          workspace.navigate("t/" + (perkTreeId(activePerkTreeView.model)) + "/" + (activeData()));
          redraw();
          break;
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    }
  };
  setCursor = function(crosshair) {
    return document.body.style.cursor = crosshair ? 'url(https://aaronmaynard.github.io/Skyrim-Perk-Utility/cursor/crosshair.cur), crosshair' : 'url(https://aaronmaynard.github.io/Skyrim-Perk-Utility/cursor/default.cur), default';
  };
  moveHandler = function(e) {
    var offset, perk, perkTreeView, x, y, _i, _len, _results;
    offset = $canvas.offset();
    x = e.pageX - offset.left;
    y = e.pageY - offset.top;
    if (activePerkTreeView && activePerkTreeView.hitFrame(x, y)) {
      perk = activePerkTreeView.perkAtPosition(x, y);
      if (perk) {
        setCursor(true);
        hoveredPerk = perk;
        return redraw();
      } else if (hoveredPerk) {
        setCursor(false);
        hoveredPerk = null;
        return redraw();
      }
    } else {
      setCursor(false);
      _results = [];
      for (_i = 0, _len = perkTreeViews.length; _i < _len; _i++) {
        perkTreeView = perkTreeViews[_i];
        if (perkTreeView.hitFrame(x, y)) {
          return document.body.style.cursor = 'pointer';
          setCursor(true);
          break;
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    }
  };
  Workspace = (function(_super) {

    __extends(Workspace, _super);

    function Workspace() {
      Workspace.__super__.constructor.apply(this, arguments);
    }

    Workspace.prototype.routes = {
      't/:tree/:data': 'tree',
      't/:tree': 'tree',
      '': 'tree'
    };

    Workspace.prototype.tree = function(tree, data) {
      var i;
      if (tree == null) tree = '1';
      if (data == null) data = '';
      i = Math.min(Math.max(0, parseInt(tree, 10)), perkTrees.length - 1);
      activePerkTreeView.model = perkTrees[i];
      if (data !== '') readActiveData(data);
      return redraw();
    };

    return Workspace;

  })(Backbone.Router);
  $(function() {
    var i, perkTree, x, y, _i, _len;
    $canvas = $('#canvas');
    if (!$canvas[0].getContext) {
      $canvas = null;
      return;
    }
    perkTreeViews = [];
    x = TREE_PADDING + (TREE_WIDTH + TREE_PADDING) * 2;
    y = TREE_PADDING + (TREE_HEIGHT + TREE_PADDING) * 5;
    i = 0;
    activePerkTreeView = new PerkTreeView(null, [320, TREE_PADDING, 675, 787], 2.8);
    for (_i = 0, _len = perkTrees.length; _i < _len; _i++) {
      perkTree = perkTrees[_i];
      perkTreeViews.push(new PerkTreeView(perkTree, [x, y, TREE_WIDTH, TREE_HEIGHT], 0.4));
      i++;
      x += TREE_WIDTH + TREE_PADDING;
      if (i === 1) {
        x = TREE_PADDING;
        y = TREE_PADDING;
      } else if (((i - 1) % TREE_COLS) === 0) {
        x = TREE_PADDING;
        y += TREE_HEIGHT + TREE_PADDING;
      }
    }
    $('.clear-perks').click(function() {
      if (confirm('Really clear all perks?')) {
        activePerkLevels = {};
        return workspace.navigate("t/" + (perkTreeId(activePerkTreeView.model)) + "/" + (activeData()), true);
      }
    });
    $('#download-reset').click(function() {
      download("resetperk.txt", getResetCode());
    });
    $('#download-addperks').click(function() {
      download("addperk.txt", getAddPerksCode());
    });
    $('#help').click(function() {
      return window.open("help.html");
    });
    $canvas.mousemove(moveHandler).mousedown(downHandler).contextmenu(function(e) {
      return e.originalEvent.preventDefault();
    });
    redraw();
    workspace = new Workspace;
    return Backbone.history.start();
  });
}).call(this);

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
