var _STRINGS = {
    'Ad': {
      'Mobile': {
        'Preroll': {
          'ReadyIn': "The game is ready in ",
          'Loading': "Your game is loading...",
          'Close': 'Close'
        },
        'Header': {
          'ReadyIn': "The game is ready in ",
          'Loading': "Your game is loading...",
          'Close': 'Close'
        },
        'End': {
          'ReadyIn': "Advertisement ends in ",
          'Loading': "Please wait ...",
          'Close': 'Close'
        }
      }
    },
    'Splash': {
      'Loading': "Loading ...",
      'LogoLine1': "Some text here",
      'LogoLine2': "powered by MarketJS",
      'LogoLine3': 'none',
      'TapToStart': "TAP TO START"
    },
    'Game': {
      'Settings': 'Settings',
      'Pause': 'Pause',
      'LevelSelect': "Select Level",
      'Level': 'Level',
      'Tutorial': {
        'Device': ['Tap', 'Click'],
        'Info1': ", hold and drag the",
        'Info2': "screen to move the camera"
      },
      'Ready': 'Ready',
      'Timer': 'secs',
      'Tower': {
        'Upgrade': 'Upgrade',
        'Sell': 'Sell',
        'Priority': 'Priority',
        'TargetingSystem': {
          'nearest': {
            'info1': "Target that",
            'info2': "is nearest",
            'info3': "to myself"
          },
          'farthest': {
            'info1': "Target that",
            'info2': "is farthest",
            'info3': "to myself"
          },
          'youngest': {
            'info1': "Target that",
            'info2': "has lived",
            'info3': "the shortest"
          },
          'oldest': {
            'info1': "Target that",
            'info2': "has lived",
            'info3': "the oldest"
          },
          'unknown': {
            'info1': 'Unknown',
            'info2': 'target',
            'info3': 'priority'
          }
        }
      },
      'GameWin': "Level Complete",
      'GameOver': {
        'Title': "Game Over",
        'Info1': "Zombies are rampaging",
        'Info2': "inside your base.",
        'Score': 'Score'
      },
      'Defeated': {
        'Title': 'Defeated',
        'Info1': "You have no lives left.",
        'Info2': "Get more free lives?"
      },
      'FailedRV': "Ad failed, try again"
    }
  },
  _SETTINGS = {
    'API': {
      'Enabled': !0x0,
      'Log': {
        'Events': {
          'InitializeGame': !0x0,
          'EndGame': !0x0,
          'Level': {
            'Begin': !0x0,
            'End': !0x0,
            'Win': !0x0,
            'Lose': !0x0,
            'Draw': !0x0
          }
        }
      }
    },
    'Ad': {
      'Mobile': {
        'Preroll': {
          'Enabled': !0x1,
          'Duration': 0x5,
          'Width': 0x12c,
          'Height': 0xfa,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGamePreroll': 0x28,
              'MobileAdInGamePreroll2': 0x28,
              'MobileAdInGamePreroll3': 0x14
            }
          }
        },
        'Header': {
          'Enabled': !0x1,
          'Duration': 0x5,
          'Width': 0x140,
          'Height': 0x32,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGameHeader': 0x28,
              'MobileAdInGameHeader2': 0x28,
              'MobileAdInGameHeader3': 0x14
            }
          }
        },
        'Footer': {
          'Enabled': !0x1,
          'Duration': 0x5,
          'Width': 0x140,
          'Height': 0x32,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGameFooter': 0x28,
              'MobileAdInGameFooter2': 0x28,
              'MobileAdInGameFooter3': 0x14
            }
          }
        },
        'End': {
          'Enabled': !0x1,
          'Duration': 0x1,
          'Width': 0x12c,
          'Height': 0xfa,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGameEnd': 0x28,
              'MobileAdInGameEnd2': 0x28,
              'MobileAdInGameEnd3': 0x14
            }
          }
        }
      }
    },
    'Language': {
      'Default': 'en'
    },
    'DeveloperBranding': {
      'Splash': {
        'Enabled': !0x1
      },
      'Logo': {
        'Enabled': !0x0,
        'Link': 'http://marketjs.com',
        'LinkEnabled': !0x1,
        'NewWindow': !0x0,
        'Width': 0xa6,
        'Height': 0x3d
      }
    },
    'Branding': {
      'Splash': {
        'Enabled': !0x1
      },
      'Logo': {
        'Enabled': !0x1,
        'Link': 'http://google.com',
        'LinkEnabled': !0x0,
        'NewWindow': !0x0,
        'Width': 0x118,
        'Height': 0x22
      }
    },
    'MoreGames': {
      'Enabled': !0x1,
      'Link': '',
      'NewWindow': !0x1
    },
    'Gamecenter': {
      'Enabled': !0x0
    },
    'TapToStartAudioUnlock': {
      'Enabled': !0x1
    },
    'RewardedVideo': {
      'Enabled': !0x0,
      'Revives': 0x1,
      'Recover': 0x3
    },
    'Versioning': {
      'Version': '1.0.0',
      'Build': '5',
      'DisplayLog': !0x0,
      'DrawVersion': !0x0,
      'FontSize': '16px',
      'FontFamily': 'Arial',
      'FillStyle': '#000000'
    }
  };
'undefined' !== typeof _SETTINGS.Versioning && null !== _SETTINGS.Versioning && !0x0 === _SETTINGS.Versioning.DisplayLog && console.log("Release: v" + _SETTINGS.Versioning.Version + '+build.' + _SETTINGS.Versioning.Build);
var MobileAdInGamePreroll = {
    'ad_duration': _SETTINGS.Ad.Mobile.Preroll.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.Preroll.Width,
    'ad_height': _SETTINGS.Ad.Mobile.Preroll.Height,
    'ready_in': _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    'loading': _STRINGS.Ad.Mobile.Preroll.Loading,
    'close': _STRINGS.Ad.Mobile.Preroll.Close + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
        var _0x5975c6 = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
          _0x3be689 = _0x5975c6.MobileAdInGamePreroll,
          _0xee4f36 = _0x3be689 + _0x5975c6.MobileAdInGamePreroll2,
          _0x5975c6 = _0xee4f36 + _0x5975c6.MobileAdInGamePreroll3,
          _0x541736 = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0x541736), _0x541736 <= _0x3be689 ? this.selectedOverlayName = 'MobileAdInGamePreroll' : _0x541736 <= _0xee4f36 ? this.selectedOverlayName = 'MobileAdInGamePreroll2' : _0x541736 <= _0x5975c6 && (this.selectedOverlayName = 'MobileAdInGamePreroll3'), console.log("Ad rotating preroll enabled");
      } else this.selectedOverlayName = 'MobileAdInGamePreroll', console.log("Ad rotating preroll disabled");
      console.log('selected:', this.selectedOverlayName), this.overlay = $('#' + this.selectedOverlayName), this.box = $('#' + this.selectedOverlayName + '-Box'), this.game = $('#game'), this.boxContents = {
        'footer': $('#' + this.selectedOverlayName + '-Box-Footer'),
        'header': $('#' + this.selectedOverlayName + '-Box-Header'),
        'close': $('#' + this.selectedOverlayName + '-Box-Close'),
        'body': $('#' + this.selectedOverlayName + '-Box-Body')
      }, this.box.width(this.ad_width), this.box.height(this.ad_height), this.box.css('left', (this.overlay.width() - this.box.width()) / 0x2), this.box.css('top', (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 0x2), this.overlay.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x5a7d1f) {
      var _0x3c99ec = _0x5a7d1f,
        _0x317c2b = setInterval(function () {
          MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + _0x3c99ec + '...'), MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading), _0x3c99ec--, 0x0 > _0x3c99ec && (clearInterval(_0x317c2b), MobileAdInGamePreroll.boxContents.close.css('left', MobileAdInGamePreroll.boxContents.body.width() - 0x17), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close), MobileAdInGamePreroll.boxContents.footer.text(''));
        }, 0x3e8);
    },
    'Close': function () {
      this.boxContents.close.hide(), this.overlay.hide();
    }
  },
  MobileAdInGameHeader = {
    'ad_duration': _SETTINGS.Ad.Mobile.Header.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.Header.Width,
    'ad_height': _SETTINGS.Ad.Mobile.Header.Height,
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
        var _0x3b9942 = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
          _0x13e1ef = _0x3b9942.MobileAdInGameHeader,
          _0x26105e = _0x13e1ef + _0x3b9942.MobileAdInGameHeader2,
          _0x3b9942 = _0x26105e + _0x3b9942.MobileAdInGameHeader3,
          _0x4a29b5 = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0x4a29b5), _0x4a29b5 <= _0x13e1ef ? this.selectedOverlayName = 'MobileAdInGameHeader' : _0x4a29b5 <= _0x26105e ? this.selectedOverlayName = 'MobileAdInGameHeader2' : _0x4a29b5 <= _0x3b9942 && (this.selectedOverlayName = 'MobileAdInGameHeader3'), console.log("Ad rotating header enabled");
      } else this.selectedOverlayName = 'MobileAdInGameHeader', console.log("Ad rotating header disabled");
      this.div = $('#' + this.selectedOverlayName), this.game = $('#game'), this.div.width(this.ad_width), this.div.height(this.ad_height), this.div.css('left', this.game.position().left + (this.game.width() - this.div.width()) / 0x2), this.div.css('top', 0x0), this.div.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x5f32eb) {
      var _0x42094e = setInterval(function () {
        _0x5f32eb--, 0x0 > _0x5f32eb && (MobileAdInGameHeader.div.hide(), clearInterval(_0x42094e));
      }, 0x3e8);
    }
  },
  MobileAdInGameFooter = {
    'ad_duration': _SETTINGS.Ad.Mobile.Footer.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.Footer.Width,
    'ad_height': _SETTINGS.Ad.Mobile.Footer.Height,
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
        var _0x277fd3 = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
          _0x57c82b = _0x277fd3.MobileAdInGameFooter,
          _0xea537f = _0x57c82b + _0x277fd3.MobileAdInGameFooter2,
          _0x277fd3 = _0xea537f + _0x277fd3.MobileAdInGameFooter3,
          _0x414ef8 = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0x414ef8), _0x414ef8 <= _0x57c82b ? this.selectedOverlayName = 'MobileAdInGameFooter' : _0x414ef8 <= _0xea537f ? this.selectedOverlayName = 'MobileAdInGameFooter2' : _0x414ef8 <= _0x277fd3 && (this.selectedOverlayName = 'MobileAdInGameFooter3'), console.log("Ad rotating footer enabled");
      } else this.selectedOverlayName = 'MobileAdInGameFooter', console.log("Ad rotating footer disabled");
      this.div = $('#' + this.selectedOverlayName), this.game = $('#game'), this.div.width(this.ad_width), this.div.height(this.ad_height), this.div.css('left', this.game.position().left + (this.game.width() - this.div.width()) / 0x2), this.div.css('top', this.game.height() - this.div.height() - 0x5), this.div.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x402e5f) {
      var _0x360052 = setInterval(function () {
        _0x402e5f--, 0x0 > _0x402e5f && (MobileAdInGameFooter.div.hide(), clearInterval(_0x360052));
      }, 0x3e8);
    }
  },
  MobileAdInGameEnd = {
    'ad_duration': _SETTINGS.Ad.Mobile.End.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.End.Width,
    'ad_height': _SETTINGS.Ad.Mobile.End.Height,
    'ready_in': _STRINGS.Ad.Mobile.End.ReadyIn,
    'loading': _STRINGS.Ad.Mobile.End.Loading,
    'close': _STRINGS.Ad.Mobile.End.Close + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
        var _0x58e8b5 = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
          _0x5445ea = _0x58e8b5.MobileAdInGameEnd,
          _0x1b75d6 = _0x5445ea + _0x58e8b5.MobileAdInGameEnd2,
          _0x58e8b5 = _0x1b75d6 + _0x58e8b5.MobileAdInGameEnd3,
          _0x5882c6 = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0x5882c6), _0x5882c6 <= _0x5445ea ? this.selectedOverlayName = 'MobileAdInGameEnd' : _0x5882c6 <= _0x1b75d6 ? this.selectedOverlayName = 'MobileAdInGameEnd2' : _0x5882c6 <= _0x58e8b5 && (this.selectedOverlayName = 'MobileAdInGameEnd3'), console.log("Ad rotating end enabled");
      } else this.selectedOverlayName = 'MobileAdInGameEnd', console.log("Ad rotating end disabled");
      console.log('selected:', this.selectedOverlayName), this.overlay = $('#' + this.selectedOverlayName), this.box = $('#' + this.selectedOverlayName + '-Box'), this.game = $('#game'), this.boxContents = {
        'footer': $('#' + this.selectedOverlayName + '-Box-Footer'),
        'header': $('#' + this.selectedOverlayName + '-Box-Header'),
        'close': $('#' + this.selectedOverlayName + '-Box-Close'),
        'body': $('#' + this.selectedOverlayName + '-Box-Body')
      }, this.box.width(this.ad_width), this.box.height(this.ad_height), this.box.css('left', (this.overlay.width() - this.box.width()) / 0x2), this.box.css('top', (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 0x2), this.overlay.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x42e0dd) {
      var _0x1794f9 = _0x42e0dd,
        _0x16c5ce = setInterval(function () {
          MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + _0x1794f9 + '...'), MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading), _0x1794f9--, 0x0 > _0x1794f9 && (clearInterval(_0x16c5ce), MobileAdInGameEnd.boxContents.close.css('left', MobileAdInGameEnd.boxContents.body.width() - 0x17), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(''));
        }, 0x3e8);
    },
    'Close': function () {
      this.boxContents.close.hide(), this.overlay.hide();
    }
  };
!function (_0x2f0436, _0x25fb2d) {
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = _0x2f0436.document ? _0x25fb2d(_0x2f0436, !0x0) : function (_0x574557) {
    if (!_0x574557.document) throw Error("jQuery requires a window with a document");
    return _0x25fb2d(_0x574557);
  } : _0x25fb2d(_0x2f0436);
}('undefined' != typeof window ? window : this, function (_0x30aa88, _0x7d00f5) {
  function _0x246a3a(_0x3167b6, _0x5522da) {
    _0x5522da = _0x5522da || _0x35e050;
    var _0x257dd5 = _0x5522da.createElement('script');
    _0x257dd5.text = _0x3167b6, _0x5522da.head.appendChild(_0x257dd5).parentNode.removeChild(_0x257dd5);
  }
  function _0x57d320(_0x1f3e64) {
    var _0x5700b7 = !!_0x1f3e64 && 'length' in _0x1f3e64 && _0x1f3e64.length,
      _0x4f6d1f = _0xec6372.type(_0x1f3e64);
    return 'function' !== _0x4f6d1f && !_0xec6372.isWindow(_0x1f3e64) && ('array' === _0x4f6d1f || 0x0 === _0x5700b7 || 'number' == typeof _0x5700b7 && 0x0 < _0x5700b7 && _0x5700b7 - 0x1 in _0x1f3e64);
  }
  function _0xa2643(_0xa83c18, _0x31927e) {
    return _0xa83c18.nodeName && _0xa83c18.nodeName.toLowerCase() === _0x31927e.toLowerCase();
  }
  function _0x99998f(_0x143c9d, _0x410c2d, _0x6bdc88) {
    return _0xec6372.isFunction(_0x410c2d) ? _0xec6372.grep(_0x143c9d, function (_0x56c5df, _0x3aa186) {
      return !!_0x410c2d.call(_0x56c5df, _0x3aa186, _0x56c5df) !== _0x6bdc88;
    }) : _0x410c2d.nodeType ? _0xec6372.grep(_0x143c9d, function (_0x86b5fd) {
      return _0x86b5fd === _0x410c2d !== _0x6bdc88;
    }) : 'string' != typeof _0x410c2d ? _0xec6372.grep(_0x143c9d, function (_0x1c5730) {
      return -0x1 < _0xabb96e.call(_0x410c2d, _0x1c5730) !== _0x6bdc88;
    }) : _0x2441c8.test(_0x410c2d) ? _0xec6372.filter(_0x410c2d, _0x143c9d, _0x6bdc88) : (_0x410c2d = _0xec6372.filter(_0x410c2d, _0x143c9d), _0xec6372.grep(_0x143c9d, function (_0x55b96d) {
      return -0x1 < _0xabb96e.call(_0x410c2d, _0x55b96d) !== _0x6bdc88 && 0x1 === _0x55b96d.nodeType;
    }));
  }
  function _0x448b57(_0x47d47d, _0x2d35e9) {
    for (; (_0x47d47d = _0x47d47d[_0x2d35e9]) && 0x1 !== _0x47d47d.nodeType;);
    return _0x47d47d;
  }
  function _0x4b70f2(_0x4bfb57) {
    return _0x4bfb57;
  }
  function _0x59df50(_0x581b82) {
    throw _0x581b82;
  }
  function _0x13e07f(_0x3d4960, _0x42064a, _0x17712a, _0x3a1ec) {
    var _0x618b5c;
    try {
      _0x3d4960 && _0xec6372.isFunction(_0x618b5c = _0x3d4960.promise) ? _0x618b5c.call(_0x3d4960).done(_0x42064a).fail(_0x17712a) : _0x3d4960 && _0xec6372.isFunction(_0x618b5c = _0x3d4960.then) ? _0x618b5c.call(_0x3d4960, _0x42064a, _0x17712a) : _0x42064a.apply(void 0x0, [_0x3d4960].slice(_0x3a1ec));
    } catch (_0x36d096) {
      _0x17712a.apply(void 0x0, [_0x36d096]);
    }
  }
  function _0x3843f2() {
    _0x35e050.removeEventListener('DOMContentLoaded', _0x3843f2), _0x30aa88.removeEventListener('load', _0x3843f2), _0xec6372.ready();
  }
  function _0x21f933() {
    this.expando = _0xec6372.expando + _0x21f933.uid++;
  }
  function _0x50c285(_0x4d53ee, _0x5aa069, _0x43757b) {
    var _0x40a885;
    if (void 0x0 === _0x43757b && 0x1 === _0x4d53ee.nodeType) {
      if (_0x40a885 = 'data-' + _0x5aa069.replace(_0x34664a, '-$&').toLowerCase(), _0x43757b = _0x4d53ee.getAttribute(_0x40a885), 'string' == typeof _0x43757b) {
        try {
          _0x43757b = 'true' === _0x43757b || 'false' !== _0x43757b && ('null' === _0x43757b ? null : _0x43757b === +_0x43757b + '' ? +_0x43757b : _0xf25850.test(_0x43757b) ? JSON.parse(_0x43757b) : _0x43757b);
        } catch (_0xd71fc) {}
        _0x4f7e80.set(_0x4d53ee, _0x5aa069, _0x43757b);
      } else _0x43757b = void 0x0;
    }
    return _0x43757b;
  }
  function _0x52ef00(_0x3309d9, _0x59357b, _0x5e73f9, _0x376aa3) {
    var _0x1c8511,
      _0x822046 = 0x1,
      _0xed62c4 = 0x14,
      _0x322ab8 = _0x376aa3 ? function () {
        return _0x376aa3.cur();
      } : function () {
        return _0xec6372.css(_0x3309d9, _0x59357b, '');
      },
      _0x19b89e = _0x322ab8(),
      _0x3f60a2 = _0x5e73f9 && _0x5e73f9[0x3] || (_0xec6372.cssNumber[_0x59357b] ? '' : 'px'),
      _0x1e0969 = (_0xec6372.cssNumber[_0x59357b] || 'px' !== _0x3f60a2 && +_0x19b89e) && _0x111f46.exec(_0xec6372.css(_0x3309d9, _0x59357b));
    if (_0x1e0969 && _0x1e0969[0x3] !== _0x3f60a2) {
      _0x3f60a2 = _0x3f60a2 || _0x1e0969[0x3], _0x5e73f9 = _0x5e73f9 || [], _0x1e0969 = +_0x19b89e || 0x1;
      do _0x822046 = _0x822046 || '.5', _0x1e0969 /= _0x822046, _0xec6372.style(_0x3309d9, _0x59357b, _0x1e0969 + _0x3f60a2); while (_0x822046 !== (_0x822046 = _0x322ab8() / _0x19b89e) && 0x1 !== _0x822046 && --_0xed62c4);
    }
    return _0x5e73f9 && (_0x1e0969 = +_0x1e0969 || +_0x19b89e || 0x0, _0x1c8511 = _0x5e73f9[0x1] ? _0x1e0969 + (_0x5e73f9[0x1] + 0x1) * _0x5e73f9[0x2] : +_0x5e73f9[0x2], _0x376aa3 && (_0x376aa3.unit = _0x3f60a2, _0x376aa3.start = _0x1e0969, _0x376aa3.end = _0x1c8511)), _0x1c8511;
  }
  function _0x50d8ff(_0x59b235, _0x3a5d69) {
    for (var _0x3c8545, _0x206b4e, _0x262422 = [], _0x536908 = 0x0, _0x532e42 = _0x59b235.length; _0x536908 < _0x532e42; _0x536908++) if (_0x206b4e = _0x59b235[_0x536908], _0x206b4e.style) {
      if (_0x3c8545 = _0x206b4e.style.display, _0x3a5d69) {
        if ('none' === _0x3c8545 && (_0x262422[_0x536908] = _0x254586.get(_0x206b4e, 'display') || null, _0x262422[_0x536908] || (_0x206b4e.style.display = '')), '' === _0x206b4e.style.display && _0x107752(_0x206b4e)) {
          _0x3c8545 = _0x262422;
          var _0x1159d5 = _0x536908,
            _0x3d0f0e,
            _0x1cd577 = void 0x0;
          _0x3d0f0e = _0x206b4e.ownerDocument;
          var _0x17e55b = _0x206b4e.nodeName;
          _0x3d0f0e = (_0x206b4e = _0x5c1dde[_0x17e55b]) ? _0x206b4e : (_0x1cd577 = _0x3d0f0e.body.appendChild(_0x3d0f0e.createElement(_0x17e55b)), _0x206b4e = _0xec6372.css(_0x1cd577, 'display'), _0x1cd577.parentNode.removeChild(_0x1cd577), 'none' === _0x206b4e && (_0x206b4e = 'block'), _0x5c1dde[_0x17e55b] = _0x206b4e, _0x206b4e), _0x3c8545[_0x1159d5] = _0x3d0f0e;
        }
      } else 'none' !== _0x3c8545 && (_0x262422[_0x536908] = 'none', _0x254586.set(_0x206b4e, 'display', _0x3c8545));
    }
    for (_0x536908 = 0x0; _0x536908 < _0x532e42; _0x536908++) null != _0x262422[_0x536908] && (_0x59b235[_0x536908].style.display = _0x262422[_0x536908]);
    return _0x59b235;
  }
  function _0x556081(_0x382a70, _0x3eca09) {
    var _0x24f5ca;
    return _0x24f5ca = 'undefined' != typeof _0x382a70.getElementsByTagName ? _0x382a70.getElementsByTagName(_0x3eca09 || '*') : 'undefined' != typeof _0x382a70.querySelectorAll ? _0x382a70.querySelectorAll(_0x3eca09 || '*') : [], void 0x0 === _0x3eca09 || _0x3eca09 && _0xa2643(_0x382a70, _0x3eca09) ? _0xec6372.merge([_0x382a70], _0x24f5ca) : _0x24f5ca;
  }
  function _0x370583(_0x385ac9, _0x237a40) {
    for (var _0x281ccb = 0x0, _0x4503f0 = _0x385ac9.length; _0x281ccb < _0x4503f0; _0x281ccb++) _0x254586.set(_0x385ac9[_0x281ccb], 'globalEval', !_0x237a40 || _0x254586.get(_0x237a40[_0x281ccb], 'globalEval'));
  }
  function _0xdf7ab(_0x64406e, _0x3c9dd1, _0x29e76d, _0x49c73e, _0x35ebf0) {
    for (var _0x5940e4, _0x4fea45, _0x126c24, _0x568abf, _0x211f16 = _0x3c9dd1.createDocumentFragment(), _0x43cf03 = [], _0x2d9853 = 0x0, _0x2f3ce8 = _0x64406e.length; _0x2d9853 < _0x2f3ce8; _0x2d9853++) if (_0x5940e4 = _0x64406e[_0x2d9853], _0x5940e4 || 0x0 === _0x5940e4) {
      if ('object' === _0xec6372.type(_0x5940e4)) _0xec6372.merge(_0x43cf03, _0x5940e4.nodeType ? [_0x5940e4] : _0x5940e4);else {
        if (_0x282dde.test(_0x5940e4)) {
          _0x4fea45 = _0x4fea45 || _0x211f16.appendChild(_0x3c9dd1.createElement('div')), _0x126c24 = (_0x140809.exec(_0x5940e4) || ['', ''])[0x1].toLowerCase(), _0x126c24 = _0x2c4b9e[_0x126c24] || _0x2c4b9e._default, _0x4fea45.innerHTML = _0x126c24[0x1] + _0xec6372.htmlPrefilter(_0x5940e4) + _0x126c24[0x2];
          for (_0x126c24 = _0x126c24[0x0]; _0x126c24--;) _0x4fea45 = _0x4fea45.lastChild;
          _0xec6372.merge(_0x43cf03, _0x4fea45.childNodes), _0x4fea45 = _0x211f16.firstChild, _0x4fea45.textContent = '';
        } else _0x43cf03.push(_0x3c9dd1.createTextNode(_0x5940e4));
      }
    }
    _0x211f16.textContent = '';
    for (_0x2d9853 = 0x0; _0x5940e4 = _0x43cf03[_0x2d9853++];) if (_0x49c73e && -0x1 < _0xec6372.inArray(_0x5940e4, _0x49c73e)) _0x35ebf0 && _0x35ebf0.push(_0x5940e4);else {
      if (_0x568abf = _0xec6372.contains(_0x5940e4.ownerDocument, _0x5940e4), _0x4fea45 = _0x556081(_0x211f16.appendChild(_0x5940e4), 'script'), _0x568abf && _0x370583(_0x4fea45), _0x29e76d) {
        for (_0x126c24 = 0x0; _0x5940e4 = _0x4fea45[_0x126c24++];) _0x2493f7.test(_0x5940e4.type || '') && _0x29e76d.push(_0x5940e4);
      }
    }
    return _0x211f16;
  }
  function _0x50763c() {
    return !0x0;
  }
  function _0x2f508c() {
    return !0x1;
  }
  function _0x43531c() {
    try {
      return _0x35e050.activeElement;
    } catch (_0x5c4790) {}
  }
  function _0x321366(_0x4459e1, _0x2719e2, _0x355f53, _0x1b9e9a, _0x58cd04, _0x456a7f) {
    var _0xd10bff, _0xbc261;
    if ('object' == typeof _0x2719e2) {
      'string' != typeof _0x355f53 && (_0x1b9e9a = _0x1b9e9a || _0x355f53, _0x355f53 = void 0x0);
      for (_0xbc261 in _0x2719e2) _0x321366(_0x4459e1, _0xbc261, _0x355f53, _0x1b9e9a, _0x2719e2[_0xbc261], _0x456a7f);
      return _0x4459e1;
    }
    if (null == _0x1b9e9a && null == _0x58cd04 ? (_0x58cd04 = _0x355f53, _0x1b9e9a = _0x355f53 = void 0x0) : null == _0x58cd04 && ('string' == typeof _0x355f53 ? (_0x58cd04 = _0x1b9e9a, _0x1b9e9a = void 0x0) : (_0x58cd04 = _0x1b9e9a, _0x1b9e9a = _0x355f53, _0x355f53 = void 0x0)), !0x1 === _0x58cd04) _0x58cd04 = _0x2f508c;else {
      if (!_0x58cd04) return _0x4459e1;
    }
    return 0x1 === _0x456a7f && (_0xd10bff = _0x58cd04, _0x58cd04 = function (_0x44391c) {
      return _0xec6372().off(_0x44391c), _0xd10bff.apply(this, arguments);
    }, _0x58cd04.guid = _0xd10bff.guid || (_0xd10bff.guid = _0xec6372.guid++)), _0x4459e1.each(function () {
      _0xec6372.event.add(this, _0x2719e2, _0x58cd04, _0x1b9e9a, _0x355f53);
    });
  }
  function _0x59ad9e(_0x3080f7, _0x232bc9) {
    return _0xa2643(_0x3080f7, 'table') && _0xa2643(0xb !== _0x232bc9.nodeType ? _0x232bc9 : _0x232bc9.firstChild, 'tr') ? _0xec6372('>tbody', _0x3080f7)[0x0] || _0x3080f7 : _0x3080f7;
  }
  function _0xc21381(_0x5602b1) {
    return _0x5602b1.type = (null !== _0x5602b1.getAttribute('type')) + '/' + _0x5602b1.type, _0x5602b1;
  }
  function _0x5e0ab4(_0x3db1eb) {
    var _0xbe143c = _0x496b11.exec(_0x3db1eb.type);
    return _0xbe143c ? _0x3db1eb.type = _0xbe143c[0x1] : _0x3db1eb.removeAttribute('type'), _0x3db1eb;
  }
  function _0x127fa4(_0x253c35, _0x4876e4) {
    var _0x56821c, _0x1976cb, _0x352771, _0x145309, _0x1266ab, _0x2a25aa;
    if (0x1 === _0x4876e4.nodeType) {
      if (_0x254586.hasData(_0x253c35) && (_0x56821c = _0x254586.access(_0x253c35), _0x1976cb = _0x254586.set(_0x4876e4, _0x56821c), _0x2a25aa = _0x56821c.events)) for (_0x352771 in delete _0x1976cb.handle, _0x1976cb.events = {}, _0x2a25aa) {
        _0x56821c = 0x0;
        for (_0x1976cb = _0x2a25aa[_0x352771].length; _0x56821c < _0x1976cb; _0x56821c++) _0xec6372.event.add(_0x4876e4, _0x352771, _0x2a25aa[_0x352771][_0x56821c]);
      }
      _0x4f7e80.hasData(_0x253c35) && (_0x145309 = _0x4f7e80.access(_0x253c35), _0x1266ab = _0xec6372.extend({}, _0x145309), _0x4f7e80.set(_0x4876e4, _0x1266ab));
    }
  }
  function _0xc19c12(_0x18d217, _0xae102b, _0x2be7f7, _0x25f5e3) {
    _0xae102b = _0xafe1f.apply([], _0xae102b);
    var _0x3a6238,
      _0x7e691e,
      _0x510f3b,
      _0x4e3d95,
      _0x2b846d = 0x0,
      _0x38d21a = _0x18d217.length,
      _0x391d2 = _0x38d21a - 0x1,
      _0x28f31f = _0xae102b[0x0],
      _0x2a52b8 = _0xec6372.isFunction(_0x28f31f);
    if (_0x2a52b8 || 0x1 < _0x38d21a && 'string' == typeof _0x28f31f && !_0x566ba2.checkClone && _0x50af19.test(_0x28f31f)) return _0x18d217.each(function (_0x14e643) {
      var _0x11573f = _0x18d217.eq(_0x14e643);
      _0x2a52b8 && (_0xae102b[0x0] = _0x28f31f.call(this, _0x14e643, _0x11573f.html())), _0xc19c12(_0x11573f, _0xae102b, _0x2be7f7, _0x25f5e3);
    });
    if (_0x38d21a && (_0x3a6238 = _0xdf7ab(_0xae102b, _0x18d217[0x0].ownerDocument, !0x1, _0x18d217, _0x25f5e3), _0x7e691e = _0x3a6238.firstChild, 0x1 === _0x3a6238.childNodes.length && (_0x3a6238 = _0x7e691e), _0x7e691e || _0x25f5e3)) {
      _0x7e691e = _0xec6372.map(_0x556081(_0x3a6238, 'script'), _0xc21381);
      for (_0x510f3b = _0x7e691e.length; _0x2b846d < _0x38d21a; _0x2b846d++) _0x4e3d95 = _0x3a6238, _0x2b846d !== _0x391d2 && (_0x4e3d95 = _0xec6372.clone(_0x4e3d95, !0x0, !0x0), _0x510f3b && _0xec6372.merge(_0x7e691e, _0x556081(_0x4e3d95, 'script'))), _0x2be7f7.call(_0x18d217[_0x2b846d], _0x4e3d95, _0x2b846d);
      if (_0x510f3b) {
        _0x3a6238 = _0x7e691e[_0x7e691e.length - 0x1].ownerDocument, _0xec6372.map(_0x7e691e, _0x5e0ab4);
        for (_0x2b846d = 0x0; _0x2b846d < _0x510f3b; _0x2b846d++) _0x4e3d95 = _0x7e691e[_0x2b846d], _0x2493f7.test(_0x4e3d95.type || '') && !_0x254586.access(_0x4e3d95, 'globalEval') && _0xec6372.contains(_0x3a6238, _0x4e3d95) && (_0x4e3d95.src ? _0xec6372._evalUrl && _0xec6372._evalUrl(_0x4e3d95.src) : _0x246a3a(_0x4e3d95.textContent.replace(_0x650e6f, ''), _0x3a6238));
      }
    }
    return _0x18d217;
  }
  function _0x9f34b8(_0x122cad, _0x4dbeb4, _0x34f484) {
    for (var _0x17c06d = _0x4dbeb4 ? _0xec6372.filter(_0x4dbeb4, _0x122cad) : _0x122cad, _0x1e3302 = 0x0; null != (_0x4dbeb4 = _0x17c06d[_0x1e3302]); _0x1e3302++) _0x34f484 || 0x1 !== _0x4dbeb4.nodeType || _0xec6372.cleanData(_0x556081(_0x4dbeb4)), _0x4dbeb4.parentNode && (_0x34f484 && _0xec6372.contains(_0x4dbeb4.ownerDocument, _0x4dbeb4) && _0x370583(_0x556081(_0x4dbeb4, 'script')), _0x4dbeb4.parentNode.removeChild(_0x4dbeb4));
    return _0x122cad;
  }
  function _0x374336(_0x46488f, _0x542269, _0x31f330) {
    var _0x3b98a4,
      _0x5aad49,
      _0x457f52,
      _0x321130,
      _0x41c168 = _0x46488f.style;
    return _0x31f330 = _0x31f330 || _0x262d49(_0x46488f), _0x31f330 && (_0x321130 = _0x31f330.getPropertyValue(_0x542269) || _0x31f330[_0x542269], '' !== _0x321130 || _0xec6372.contains(_0x46488f.ownerDocument, _0x46488f) || (_0x321130 = _0xec6372.style(_0x46488f, _0x542269)), !_0x566ba2.pixelMarginRight() && _0x3c693b.test(_0x321130) && _0xc5a250.test(_0x542269) && (_0x3b98a4 = _0x41c168.width, _0x5aad49 = _0x41c168.minWidth, _0x457f52 = _0x41c168.maxWidth, _0x41c168.minWidth = _0x41c168.maxWidth = _0x41c168.width = _0x321130, _0x321130 = _0x31f330.width, _0x41c168.width = _0x3b98a4, _0x41c168.minWidth = _0x5aad49, _0x41c168.maxWidth = _0x457f52)), void 0x0 !== _0x321130 ? _0x321130 + '' : _0x321130;
  }
  function _0x5181a6(_0x52bd93, _0x156614) {
    return {
      'get': function () {
        return _0x52bd93() ? void delete this.get : (this.get = _0x156614).apply(this, arguments);
      }
    };
  }
  function _0x60e5f1(_0x367c54) {
    var _0x3fa282 = _0xec6372.cssProps[_0x367c54];
    if (!_0x3fa282) {
      var _0x3fa282 = _0xec6372.cssProps,
        _0x2bb65e;
      _0x4398fc: if (_0x2bb65e = _0x367c54, !(_0x2bb65e in _0x28ae7a)) {
        for (var _0x43a0a7 = _0x2bb65e[0x0].toUpperCase() + _0x2bb65e.slice(0x1), _0x1b5037 = _0x1c9afd.length; _0x1b5037--;) if (_0x2bb65e = _0x1c9afd[_0x1b5037] + _0x43a0a7, _0x2bb65e in _0x28ae7a) break _0x4398fc;
        _0x2bb65e = void 0x0;
      }
      _0x3fa282 = _0x3fa282[_0x367c54] = _0x2bb65e || _0x367c54;
    }
    return _0x3fa282;
  }
  function _0xbbe018(_0x3a263d, _0x59191e, _0x4ab93b) {
    return (_0x3a263d = _0x111f46.exec(_0x59191e)) ? Math.max(0x0, _0x3a263d[0x2] - (_0x4ab93b || 0x0)) + (_0x3a263d[0x3] || 'px') : _0x59191e;
  }
  function _0x5d8c98(_0x3a6caa, _0xd8fbd1, _0x4a2a78, _0x426feb, _0x45786c) {
    var _0x3bcf8f = 0x0;
    for (_0xd8fbd1 = _0x4a2a78 === (_0x426feb ? 'border' : 'content') ? 0x4 : 'width' === _0xd8fbd1 ? 0x1 : 0x0; 0x4 > _0xd8fbd1; _0xd8fbd1 += 0x2) 'margin' === _0x4a2a78 && (_0x3bcf8f += _0xec6372.css(_0x3a6caa, _0x4a2a78 + _0x4d6f41[_0xd8fbd1], !0x0, _0x45786c)), _0x426feb ? ('content' === _0x4a2a78 && (_0x3bcf8f -= _0xec6372.css(_0x3a6caa, 'padding' + _0x4d6f41[_0xd8fbd1], !0x0, _0x45786c)), 'margin' !== _0x4a2a78 && (_0x3bcf8f -= _0xec6372.css(_0x3a6caa, 'border' + _0x4d6f41[_0xd8fbd1] + 'Width', !0x0, _0x45786c))) : (_0x3bcf8f += _0xec6372.css(_0x3a6caa, 'padding' + _0x4d6f41[_0xd8fbd1], !0x0, _0x45786c), 'padding' !== _0x4a2a78 && (_0x3bcf8f += _0xec6372.css(_0x3a6caa, 'border' + _0x4d6f41[_0xd8fbd1] + 'Width', !0x0, _0x45786c)));
    return _0x3bcf8f;
  }
  function _0x2bee46(_0x41bb67, _0x187001, _0x3d5f66) {
    var _0x2ba26f,
      _0x1a7b2d = _0x262d49(_0x41bb67),
      _0x1f39b2 = _0x374336(_0x41bb67, _0x187001, _0x1a7b2d),
      _0x155691 = 'border-box' === _0xec6372.css(_0x41bb67, 'boxSizing', !0x1, _0x1a7b2d);
    return _0x3c693b.test(_0x1f39b2) ? _0x1f39b2 : (_0x2ba26f = _0x155691 && (_0x566ba2.boxSizingReliable() || _0x1f39b2 === _0x41bb67.style[_0x187001]), 'auto' === _0x1f39b2 && (_0x1f39b2 = _0x41bb67['offset' + _0x187001[0x0].toUpperCase() + _0x187001.slice(0x1)]), _0x1f39b2 = parseFloat(_0x1f39b2) || 0x0, _0x1f39b2 + _0x5d8c98(_0x41bb67, _0x187001, _0x3d5f66 || (_0x155691 ? 'border' : 'content'), _0x2ba26f, _0x1a7b2d) + 'px');
  }
  function _0x2f4d52(_0x1d4c17, _0x497bda, _0x4b89f2, _0x452494, _0x592cac) {
    return new _0x2f4d52.prototype.init(_0x1d4c17, _0x497bda, _0x4b89f2, _0x452494, _0x592cac);
  }
  function _0x55e2f1() {
    _0xe67fc3 && (!0x1 === _0x35e050.hidden && _0x30aa88.requestAnimationFrame ? _0x30aa88.requestAnimationFrame(_0x55e2f1) : _0x30aa88.setTimeout(_0x55e2f1, _0xec6372.fx.interval), _0xec6372.fx.tick());
  }
  function _0x3a71ac() {
    return _0x30aa88.setTimeout(function () {
      _0x318939 = void 0x0;
    }), _0x318939 = _0xec6372.now();
  }
  function _0x3b5655(_0x34fba8, _0x338616) {
    var _0x238a80,
      _0x1b0490 = 0x0,
      _0x3a5b06 = {
        'height': _0x34fba8
      };
    for (_0x338616 = _0x338616 ? 0x1 : 0x0; 0x4 > _0x1b0490; _0x1b0490 += 0x2 - _0x338616) _0x238a80 = _0x4d6f41[_0x1b0490], _0x3a5b06['margin' + _0x238a80] = _0x3a5b06['padding' + _0x238a80] = _0x34fba8;
    return _0x338616 && (_0x3a5b06.opacity = _0x3a5b06.width = _0x34fba8), _0x3a5b06;
  }
  function _0x58c79d(_0x47f842, _0x9eb4a, _0x40b667) {
    for (var _0x8f6856, _0x4f7e19 = (_0x52f62.tweeners[_0x9eb4a] || []).concat(_0x52f62.tweeners['*']), _0x23d0ea = 0x0, _0x36174f = _0x4f7e19.length; _0x23d0ea < _0x36174f; _0x23d0ea++) if (_0x8f6856 = _0x4f7e19[_0x23d0ea].call(_0x40b667, _0x9eb4a, _0x47f842)) return _0x8f6856;
  }
  function _0x52f62(_0x48276f, _0x352926, _0x96e2bd) {
    var _0x44af7f,
      _0x128556,
      _0x5adfa0 = 0x0,
      _0x596cd0 = _0x52f62.prefilters.length,
      _0x287a7a = _0xec6372.Deferred().always(function () {
        delete _0xf5a6dc.elem;
      }),
      _0xf5a6dc = function () {
        if (_0x128556) return !0x1;
        for (var _0x44ae37 = _0x318939 || _0x3a71ac(), _0x44ae37 = Math.max(0x0, _0x13041a.startTime + _0x13041a.duration - _0x44ae37), _0x357880 = 0x1 - (_0x44ae37 / _0x13041a.duration || 0x0), _0x201dec = 0x0, _0x2e3152 = _0x13041a.tweens.length; _0x201dec < _0x2e3152; _0x201dec++) _0x13041a.tweens[_0x201dec].run(_0x357880);
        return _0x287a7a.notifyWith(_0x48276f, [_0x13041a, _0x357880, _0x44ae37]), 0x1 > _0x357880 && _0x2e3152 ? _0x44ae37 : (_0x2e3152 || _0x287a7a.notifyWith(_0x48276f, [_0x13041a, 0x1, 0x0]), _0x287a7a.resolveWith(_0x48276f, [_0x13041a]), !0x1);
      },
      _0x13041a = _0x287a7a.promise({
        'elem': _0x48276f,
        'props': _0xec6372.extend({}, _0x352926),
        'opts': _0xec6372.extend(!0x0, {
          'specialEasing': {},
          'easing': _0xec6372.easing._default
        }, _0x96e2bd),
        'originalProperties': _0x352926,
        'originalOptions': _0x96e2bd,
        'startTime': _0x318939 || _0x3a71ac(),
        'duration': _0x96e2bd.duration,
        'tweens': [],
        'createTween': function (_0x531a8e, _0x729d50) {
          var _0x25bc98 = _0xec6372.Tween(_0x48276f, _0x13041a.opts, _0x531a8e, _0x729d50, _0x13041a.opts.specialEasing[_0x531a8e] || _0x13041a.opts.easing);
          return _0x13041a.tweens.push(_0x25bc98), _0x25bc98;
        },
        'stop': function (_0x15a4a8) {
          var _0x4c00f7 = 0x0,
            _0x2c7684 = _0x15a4a8 ? _0x13041a.tweens.length : 0x0;
          if (_0x128556) return this;
          for (_0x128556 = !0x0; _0x4c00f7 < _0x2c7684; _0x4c00f7++) _0x13041a.tweens[_0x4c00f7].run(0x1);
          return _0x15a4a8 ? (_0x287a7a.notifyWith(_0x48276f, [_0x13041a, 0x1, 0x0]), _0x287a7a.resolveWith(_0x48276f, [_0x13041a, _0x15a4a8])) : _0x287a7a.rejectWith(_0x48276f, [_0x13041a, _0x15a4a8]), this;
        }
      });
    _0x352926 = _0x13041a.props, _0x96e2bd = _0x13041a.opts.specialEasing;
    var _0x5a4c03, _0xfa85e2, _0x40827e, _0xc6bf4a;
    for (_0x44af7f in _0x352926) if (_0x5a4c03 = _0xec6372.camelCase(_0x44af7f), _0xfa85e2 = _0x96e2bd[_0x5a4c03], _0x40827e = _0x352926[_0x44af7f], Array.isArray(_0x40827e) && (_0xfa85e2 = _0x40827e[0x1], _0x40827e = _0x352926[_0x44af7f] = _0x40827e[0x0]), _0x44af7f !== _0x5a4c03 && (_0x352926[_0x5a4c03] = _0x40827e, delete _0x352926[_0x44af7f]), _0xc6bf4a = _0xec6372.cssHooks[_0x5a4c03], _0xc6bf4a && 'expand' in _0xc6bf4a) {
      for (_0x44af7f in _0x40827e = _0xc6bf4a.expand(_0x40827e), delete _0x352926[_0x5a4c03], _0x40827e) _0x44af7f in _0x352926 || (_0x352926[_0x44af7f] = _0x40827e[_0x44af7f], _0x96e2bd[_0x44af7f] = _0xfa85e2);
    } else _0x96e2bd[_0x5a4c03] = _0xfa85e2;
    for (; _0x5adfa0 < _0x596cd0; _0x5adfa0++) if (_0x44af7f = _0x52f62.prefilters[_0x5adfa0].call(_0x13041a, _0x48276f, _0x352926, _0x13041a.opts)) return _0xec6372.isFunction(_0x44af7f.stop) && (_0xec6372._queueHooks(_0x13041a.elem, _0x13041a.opts.queue).stop = _0xec6372.proxy(_0x44af7f.stop, _0x44af7f)), _0x44af7f;
    return _0xec6372.map(_0x352926, _0x58c79d, _0x13041a), _0xec6372.isFunction(_0x13041a.opts.start) && _0x13041a.opts.start.call(_0x48276f, _0x13041a), _0x13041a.progress(_0x13041a.opts.progress).done(_0x13041a.opts.done, _0x13041a.opts.complete).fail(_0x13041a.opts.fail).always(_0x13041a.opts.always), _0xec6372.fx.timer(_0xec6372.extend(_0xf5a6dc, {
      'elem': _0x48276f,
      'anim': _0x13041a,
      'queue': _0x13041a.opts.queue
    })), _0x13041a;
  }
  function _0x47a3e4(_0x74ba17) {
    return (_0x74ba17.match(_0x55cd20) || []).join(" ");
  }
  function _0x197be8(_0xd03e3f) {
    return _0xd03e3f.getAttribute && _0xd03e3f.getAttribute('class') || '';
  }
  function _0x9cfd2e(_0x442f9, _0x553d3c, _0x49d6a8, _0x2742e7) {
    var _0x3f19c6;
    if (Array.isArray(_0x553d3c)) _0xec6372.each(_0x553d3c, function (_0x551c0e, _0x26d8b1) {
      _0x49d6a8 || _0x30e73a.test(_0x442f9) ? _0x2742e7(_0x442f9, _0x26d8b1) : _0x9cfd2e(_0x442f9 + '[' + ('object' == typeof _0x26d8b1 && null != _0x26d8b1 ? _0x551c0e : '') + ']', _0x26d8b1, _0x49d6a8, _0x2742e7);
    });else {
      if (_0x49d6a8 || 'object' !== _0xec6372.type(_0x553d3c)) _0x2742e7(_0x442f9, _0x553d3c);else {
        for (_0x3f19c6 in _0x553d3c) _0x9cfd2e(_0x442f9 + '[' + _0x3f19c6 + ']', _0x553d3c[_0x3f19c6], _0x49d6a8, _0x2742e7);
      }
    }
  }
  function _0x3dd131(_0xf1aed8) {
    return function (_0xe64d30, _0x1401e6) {
      'string' != typeof _0xe64d30 && (_0x1401e6 = _0xe64d30, _0xe64d30 = '*');
      var _0x5b9367,
        _0x5ce9aa = 0x0,
        _0x1b1a30 = _0xe64d30.toLowerCase().match(_0x55cd20) || [];
      if (_0xec6372.isFunction(_0x1401e6)) {
        for (; _0x5b9367 = _0x1b1a30[_0x5ce9aa++];) '+' === _0x5b9367[0x0] ? (_0x5b9367 = _0x5b9367.slice(0x1) || '*', (_0xf1aed8[_0x5b9367] = _0xf1aed8[_0x5b9367] || []).unshift(_0x1401e6)) : (_0xf1aed8[_0x5b9367] = _0xf1aed8[_0x5b9367] || []).push(_0x1401e6);
      }
    };
  }
  function _0x2f3a21(_0x343a93, _0x4466b3, _0x4f0383, _0x5308ae) {
    function _0x786cb8(_0x38d55e) {
      var _0x3bc325;
      return _0x56dd7a[_0x38d55e] = !0x0, _0xec6372.each(_0x343a93[_0x38d55e] || [], function (_0x4ec0e9, _0x47dd7d) {
        var _0x431bc6 = _0x47dd7d(_0x4466b3, _0x4f0383, _0x5308ae);
        return 'string' != typeof _0x431bc6 || _0x56633c || _0x56dd7a[_0x431bc6] ? _0x56633c ? !(_0x3bc325 = _0x431bc6) : void 0x0 : (_0x4466b3.dataTypes.unshift(_0x431bc6), _0x786cb8(_0x431bc6), !0x1);
      }), _0x3bc325;
    }
    var _0x56dd7a = {},
      _0x56633c = _0x343a93 === _0x1a6dd3;
    return _0x786cb8(_0x4466b3.dataTypes[0x0]) || !_0x56dd7a['*'] && _0x786cb8('*');
  }
  function _0x54c706(_0x3b4eec, _0x402777) {
    var _0x3f8a50,
      _0x31934d,
      _0x113ae8 = _0xec6372.ajaxSettings.flatOptions || {};
    for (_0x3f8a50 in _0x402777) void 0x0 !== _0x402777[_0x3f8a50] && ((_0x113ae8[_0x3f8a50] ? _0x3b4eec : _0x31934d || (_0x31934d = {}))[_0x3f8a50] = _0x402777[_0x3f8a50]);
    return _0x31934d && _0xec6372.extend(!0x0, _0x3b4eec, _0x31934d), _0x3b4eec;
  }
  var _0x202689 = [],
    _0x35e050 = _0x30aa88.document,
    _0x185fe4 = Object.getPrototypeOf,
    _0x25af69 = _0x202689.slice,
    _0xafe1f = _0x202689.concat,
    _0x1b4ecd = _0x202689.push,
    _0xabb96e = _0x202689.indexOf,
    _0x2f1f63 = {},
    _0x301b7c = _0x2f1f63.toString,
    _0x5b7500 = _0x2f1f63.hasOwnProperty,
    _0x1003d7 = _0x5b7500.toString,
    _0x310d62 = _0x1003d7.call(Object),
    _0x566ba2 = {},
    _0xec6372 = function (_0x108cf, _0x43f1a7) {
      return new _0xec6372.fn.init(_0x108cf, _0x43f1a7);
    },
    _0x3e57f2 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    _0x31a0af = /^-ms-/,
    _0x4b4348 = /-([a-z])/g,
    _0x48c32b = function (_0x55baab, _0x46a440) {
      return _0x46a440.toUpperCase();
    };
  _0xec6372.fn = _0xec6372.prototype = {
    'jquery': '3.2.1',
    'constructor': _0xec6372,
    'length': 0x0,
    'toArray': function () {
      return _0x25af69.call(this);
    },
    'get': function (_0x5467ed) {
      return null == _0x5467ed ? _0x25af69.call(this) : 0x0 > _0x5467ed ? this[_0x5467ed + this.length] : this[_0x5467ed];
    },
    'pushStack': function (_0x4cf927) {
      return _0x4cf927 = _0xec6372.merge(this.constructor(), _0x4cf927), _0x4cf927.prevObject = this, _0x4cf927;
    },
    'each': function (_0x3f93dd) {
      return _0xec6372.each(this, _0x3f93dd);
    },
    'map': function (_0xc22985) {
      return this.pushStack(_0xec6372.map(this, function (_0x1dd5de, _0x4e235c) {
        return _0xc22985.call(_0x1dd5de, _0x4e235c, _0x1dd5de);
      }));
    },
    'slice': function () {
      return this.pushStack(_0x25af69.apply(this, arguments));
    },
    'first': function () {
      return this.eq(0x0);
    },
    'last': function () {
      return this.eq(-0x1);
    },
    'eq': function (_0xb79c3d) {
      var _0x4dd080 = this.length;
      return _0xb79c3d = +_0xb79c3d + (0x0 > _0xb79c3d ? _0x4dd080 : 0x0), this.pushStack(0x0 <= _0xb79c3d && _0xb79c3d < _0x4dd080 ? [this[_0xb79c3d]] : []);
    },
    'end': function () {
      return this.prevObject || this.constructor();
    },
    'push': _0x1b4ecd,
    'sort': _0x202689.sort,
    'splice': _0x202689.splice
  }, _0xec6372.extend = _0xec6372.fn.extend = function () {
    var _0x369868,
      _0x1d5101,
      _0x2c3c87,
      _0x160cbb,
      _0x3bf96a,
      _0x569d1a,
      _0x499964 = arguments[0x0] || {},
      _0x3ae6b2 = 0x1,
      _0x14614d = arguments.length,
      _0xdd236b = !0x1;
    'boolean' == typeof _0x499964 && (_0xdd236b = _0x499964, _0x499964 = arguments[_0x3ae6b2] || {}, _0x3ae6b2++), 'object' == typeof _0x499964 || _0xec6372.isFunction(_0x499964) || (_0x499964 = {});
    for (_0x3ae6b2 === _0x14614d && (_0x499964 = this, _0x3ae6b2--); _0x3ae6b2 < _0x14614d; _0x3ae6b2++) if (null != (_0x369868 = arguments[_0x3ae6b2])) {
      for (_0x1d5101 in _0x369868) _0x2c3c87 = _0x499964[_0x1d5101], _0x160cbb = _0x369868[_0x1d5101], _0x499964 !== _0x160cbb && (_0xdd236b && _0x160cbb && (_0xec6372.isPlainObject(_0x160cbb) || (_0x3bf96a = Array.isArray(_0x160cbb))) ? (_0x3bf96a ? (_0x3bf96a = !0x1, _0x569d1a = _0x2c3c87 && Array.isArray(_0x2c3c87) ? _0x2c3c87 : []) : _0x569d1a = _0x2c3c87 && _0xec6372.isPlainObject(_0x2c3c87) ? _0x2c3c87 : {}, _0x499964[_0x1d5101] = _0xec6372.extend(_0xdd236b, _0x569d1a, _0x160cbb)) : void 0x0 !== _0x160cbb && (_0x499964[_0x1d5101] = _0x160cbb));
    }
    return _0x499964;
  }, _0xec6372.extend({
    'expando': 'jQuery' + ('3.2.1' + Math.random()).replace(/\D/g, ''),
    'isReady': !0x0,
    'error': function (_0x5a1bd8) {
      throw Error(_0x5a1bd8);
    },
    'noop': function () {},
    'isFunction': function (_0x56ebe2) {
      return 'function' === _0xec6372.type(_0x56ebe2);
    },
    'isWindow': function (_0x3ba0b5) {
      return null != _0x3ba0b5 && _0x3ba0b5 === _0x3ba0b5.window;
    },
    'isNumeric': function (_0x9bb0cf) {
      var _0x5d10f4 = _0xec6372.type(_0x9bb0cf);
      return ('number' === _0x5d10f4 || 'string' === _0x5d10f4) && !isNaN(_0x9bb0cf - parseFloat(_0x9bb0cf));
    },
    'isPlainObject': function (_0x1eccee) {
      var _0xb89cc, _0x485fa2;
      return !(!_0x1eccee || "[object Object]" !== _0x301b7c.call(_0x1eccee)) && (!(_0xb89cc = _0x185fe4(_0x1eccee)) || (_0x485fa2 = _0x5b7500.call(_0xb89cc, 'constructor') && _0xb89cc.constructor, 'function' == typeof _0x485fa2 && _0x1003d7.call(_0x485fa2) === _0x310d62));
    },
    'isEmptyObject': function (_0x1fd581) {
      for (var _0x26faea in _0x1fd581) return !0x1;
      return !0x0;
    },
    'type': function (_0x3ab613) {
      return null == _0x3ab613 ? _0x3ab613 + '' : 'object' == typeof _0x3ab613 || 'function' == typeof _0x3ab613 ? _0x2f1f63[_0x301b7c.call(_0x3ab613)] || 'object' : typeof _0x3ab613;
    },
    'globalEval': function (_0x4204d0) {
      _0x246a3a(_0x4204d0);
    },
    'camelCase': function (_0x49b983) {
      return _0x49b983.replace(_0x31a0af, 'ms-').replace(_0x4b4348, _0x48c32b);
    },
    'each': function (_0x1e0fac, _0x1c03e2) {
      var _0x30ecc7,
        _0x423623 = 0x0;
      if (_0x57d320(_0x1e0fac)) {
        for (_0x30ecc7 = _0x1e0fac.length; _0x423623 < _0x30ecc7 && !0x1 !== _0x1c03e2.call(_0x1e0fac[_0x423623], _0x423623, _0x1e0fac[_0x423623]); _0x423623++);
      } else {
        for (_0x423623 in _0x1e0fac) if (!0x1 === _0x1c03e2.call(_0x1e0fac[_0x423623], _0x423623, _0x1e0fac[_0x423623])) break;
      }
      return _0x1e0fac;
    },
    'trim': function (_0xbc56aa) {
      return null == _0xbc56aa ? '' : (_0xbc56aa + '').replace(_0x3e57f2, '');
    },
    'makeArray': function (_0x5a8039, _0x43ca72) {
      var _0xa792a = _0x43ca72 || [];
      return null != _0x5a8039 && (_0x57d320(Object(_0x5a8039)) ? _0xec6372.merge(_0xa792a, 'string' == typeof _0x5a8039 ? [_0x5a8039] : _0x5a8039) : _0x1b4ecd.call(_0xa792a, _0x5a8039)), _0xa792a;
    },
    'inArray': function (_0x36dc5b, _0x703509, _0x17b966) {
      return null == _0x703509 ? -0x1 : _0xabb96e.call(_0x703509, _0x36dc5b, _0x17b966);
    },
    'merge': function (_0x15c645, _0x3c99f0) {
      for (var _0x2105e5 = +_0x3c99f0.length, _0x3f6a66 = 0x0, _0x7759b1 = _0x15c645.length; _0x3f6a66 < _0x2105e5; _0x3f6a66++) _0x15c645[_0x7759b1++] = _0x3c99f0[_0x3f6a66];
      return _0x15c645.length = _0x7759b1, _0x15c645;
    },
    'grep': function (_0xec989e, _0x23660e, _0x353a28) {
      for (var _0x409db6 = [], _0xc33300 = 0x0, _0x26da03 = _0xec989e.length, _0x5f54f6 = !_0x353a28; _0xc33300 < _0x26da03; _0xc33300++) _0x353a28 = !_0x23660e(_0xec989e[_0xc33300], _0xc33300), _0x353a28 !== _0x5f54f6 && _0x409db6.push(_0xec989e[_0xc33300]);
      return _0x409db6;
    },
    'map': function (_0x10762d, _0x4d09aa, _0x1dcf47) {
      var _0x311433,
        _0x51dc86,
        _0x41b0b4 = 0x0,
        _0x5fbe9a = [];
      if (_0x57d320(_0x10762d)) {
        for (_0x311433 = _0x10762d.length; _0x41b0b4 < _0x311433; _0x41b0b4++) _0x51dc86 = _0x4d09aa(_0x10762d[_0x41b0b4], _0x41b0b4, _0x1dcf47), null != _0x51dc86 && _0x5fbe9a.push(_0x51dc86);
      } else {
        for (_0x41b0b4 in _0x10762d) _0x51dc86 = _0x4d09aa(_0x10762d[_0x41b0b4], _0x41b0b4, _0x1dcf47), null != _0x51dc86 && _0x5fbe9a.push(_0x51dc86);
      }
      return _0xafe1f.apply([], _0x5fbe9a);
    },
    'guid': 0x1,
    'proxy': function (_0x10f029, _0x1021ed) {
      var _0x310dc9, _0x4f00e7, _0x4cf8e7;
      if ('string' == typeof _0x1021ed && (_0x310dc9 = _0x10f029[_0x1021ed], _0x1021ed = _0x10f029, _0x10f029 = _0x310dc9), _0xec6372.isFunction(_0x10f029)) return _0x4f00e7 = _0x25af69.call(arguments, 0x2), _0x4cf8e7 = function () {
        return _0x10f029.apply(_0x1021ed || this, _0x4f00e7.concat(_0x25af69.call(arguments)));
      }, _0x4cf8e7.guid = _0x10f029.guid = _0x10f029.guid || _0xec6372.guid++, _0x4cf8e7;
    },
    'now': Date.now,
    'support': _0x566ba2
  }), 'function' == typeof Symbol && (_0xec6372.fn[Symbol.iterator] = _0x202689[Symbol.iterator]), _0xec6372.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_0x562941, _0x4da8a4) {
    _0x2f1f63["[object " + _0x4da8a4 + ']'] = _0x4da8a4.toLowerCase();
  });
  var _0xf536f7,
    _0x18b61e = _0x30aa88,
    _0x1866a3 = function (_0xcf26c, _0x3b66a7, _0x2a3d66, _0x13268a) {
      var _0x5bdc35,
        _0x414ad9,
        _0x5a7384,
        _0x406f35,
        _0x2fa28e,
        _0x1d44f1 = _0x3b66a7 && _0x3b66a7.ownerDocument,
        _0x24770f = _0x3b66a7 ? _0x3b66a7.nodeType : 0x9;
      if (_0x2a3d66 = _0x2a3d66 || [], 'string' != typeof _0xcf26c || !_0xcf26c || 0x1 !== _0x24770f && 0x9 !== _0x24770f && 0xb !== _0x24770f) return _0x2a3d66;
      if (!_0x13268a && ((_0x3b66a7 ? _0x3b66a7.ownerDocument || _0x3b66a7 : _0xc68eb9) !== _0x362672 && _0x266dbd(_0x3b66a7), _0x3b66a7 = _0x3b66a7 || _0x362672, _0x2f6f0b)) {
        if (0xb !== _0x24770f && (_0x406f35 = _0x9e68f.exec(_0xcf26c))) {
          if (_0x5bdc35 = _0x406f35[0x1]) {
            if (0x9 === _0x24770f) {
              if (!(_0x414ad9 = _0x3b66a7.getElementById(_0x5bdc35))) return _0x2a3d66;
              if (_0x414ad9.id === _0x5bdc35) return _0x2a3d66.push(_0x414ad9), _0x2a3d66;
            } else {
              if (_0x1d44f1 && (_0x414ad9 = _0x1d44f1.getElementById(_0x5bdc35)) && _0x26d600(_0x3b66a7, _0x414ad9) && _0x414ad9.id === _0x5bdc35) return _0x2a3d66.push(_0x414ad9), _0x2a3d66;
            }
          } else {
            if (_0x406f35[0x2]) return _0x150425.apply(_0x2a3d66, _0x3b66a7.getElementsByTagName(_0xcf26c)), _0x2a3d66;
            if ((_0x5bdc35 = _0x406f35[0x3]) && _0xd8563b.getElementsByClassName && _0x3b66a7.getElementsByClassName) return _0x150425.apply(_0x2a3d66, _0x3b66a7.getElementsByClassName(_0x5bdc35)), _0x2a3d66;
          }
        }
        if (_0xd8563b.qsa && !_0x4f6d32[_0xcf26c + " "] && (!_0x2968e4 || !_0x2968e4.test(_0xcf26c))) {
          if (0x1 !== _0x24770f) _0x1d44f1 = _0x3b66a7, _0x2fa28e = _0xcf26c;else {
            if ('object' !== _0x3b66a7.nodeName.toLowerCase()) {
              (_0x5a7384 = _0x3b66a7.getAttribute('id')) ? _0x5a7384 = _0x5a7384.replace(_0x2e7e77, _0x26946c) : _0x3b66a7.setAttribute('id', _0x5a7384 = _0x5834e0), _0x414ad9 = _0x1e0f52(_0xcf26c);
              for (_0x5bdc35 = _0x414ad9.length; _0x5bdc35--;) _0x414ad9[_0x5bdc35] = '#' + _0x5a7384 + " " + _0x595b25(_0x414ad9[_0x5bdc35]);
              _0x2fa28e = _0x414ad9.join(','), _0x1d44f1 = _0x5e7c17.test(_0xcf26c) && _0x1a6597(_0x3b66a7.parentNode) || _0x3b66a7;
            }
          }
          if (_0x2fa28e) try {
            return _0x150425.apply(_0x2a3d66, _0x1d44f1.querySelectorAll(_0x2fa28e)), _0x2a3d66;
          } catch (_0x4ccc9e) {} finally {
            _0x5a7384 === _0x5834e0 && _0x3b66a7.removeAttribute('id');
          }
        }
      }
      return _0x336f2e(_0xcf26c.replace(_0x29a222, '$1'), _0x3b66a7, _0x2a3d66, _0x13268a);
    },
    _0x3d0949 = function () {
      function _0x5cdfef(_0x3823b0, _0x170338) {
        return _0x440dd4.push(_0x3823b0 + " ") > _0xd30b60.cacheLength && delete _0x5cdfef[_0x440dd4.shift()], _0x5cdfef[_0x3823b0 + " "] = _0x170338;
      }
      var _0x440dd4 = [];
      return _0x5cdfef;
    },
    _0x2355e2 = function (_0xcaf917) {
      return _0xcaf917[_0x5834e0] = !0x0, _0xcaf917;
    },
    _0x3be5e8 = function (_0x35ed42) {
      var _0x1a4483 = _0x362672.createElement('fieldset');
      try {
        return !!_0x35ed42(_0x1a4483);
      } catch (_0x4fdece) {
        return !0x1;
      } finally {
        _0x1a4483.parentNode && _0x1a4483.parentNode.removeChild(_0x1a4483);
      }
    },
    _0x3744c9 = function (_0x3524ba, _0x3388e3) {
      for (var _0x196576 = _0x3524ba.split('|'), _0x17ac5c = _0x196576.length; _0x17ac5c--;) _0xd30b60.attrHandle[_0x196576[_0x17ac5c]] = _0x3388e3;
    },
    _0x43a658 = function (_0x24bd74, _0x1fe9e3) {
      var _0x5fb683 = _0x1fe9e3 && _0x24bd74,
        _0x4141d3 = _0x5fb683 && 0x1 === _0x24bd74.nodeType && 0x1 === _0x1fe9e3.nodeType && _0x24bd74.sourceIndex - _0x1fe9e3.sourceIndex;
      if (_0x4141d3) return _0x4141d3;
      if (_0x5fb683) {
        for (; _0x5fb683 = _0x5fb683.nextSibling;) if (_0x5fb683 === _0x1fe9e3) return -0x1;
      }
      return _0x24bd74 ? 0x1 : -0x1;
    },
    _0x2b653e = function (_0x19900d) {
      return function (_0x334f23) {
        return 'input' === _0x334f23.nodeName.toLowerCase() && _0x334f23.type === _0x19900d;
      };
    },
    _0x5b540e = function (_0x1ce8c0) {
      return function (_0x2986f3) {
        var _0xdf3737 = _0x2986f3.nodeName.toLowerCase();
        return ('input' === _0xdf3737 || 'button' === _0xdf3737) && _0x2986f3.type === _0x1ce8c0;
      };
    },
    _0x51c5d8 = function (_0x2c1f81) {
      return function (_0x3a11ed) {
        return 'form' in _0x3a11ed ? _0x3a11ed.parentNode && !0x1 === _0x3a11ed.disabled ? 'label' in _0x3a11ed ? 'label' in _0x3a11ed.parentNode ? _0x3a11ed.parentNode.disabled === _0x2c1f81 : _0x3a11ed.disabled === _0x2c1f81 : _0x3a11ed.isDisabled === _0x2c1f81 || _0x3a11ed.isDisabled !== !_0x2c1f81 && _0x41e234(_0x3a11ed) === _0x2c1f81 : _0x3a11ed.disabled === _0x2c1f81 : 'label' in _0x3a11ed && _0x3a11ed.disabled === _0x2c1f81;
      };
    },
    _0x4a5e49 = function (_0x7cb1c9) {
      return _0x2355e2(function (_0x4c188d) {
        return _0x4c188d = +_0x4c188d, _0x2355e2(function (_0x58efd9, _0x2740d4) {
          for (var _0xa8ff2b, _0x554035 = _0x7cb1c9([], _0x58efd9.length, _0x4c188d), _0x3b1f9c = _0x554035.length; _0x3b1f9c--;) _0x58efd9[_0xa8ff2b = _0x554035[_0x3b1f9c]] && (_0x58efd9[_0xa8ff2b] = !(_0x2740d4[_0xa8ff2b] = _0x58efd9[_0xa8ff2b]));
        });
      });
    },
    _0x1a6597 = function (_0x30a449) {
      return _0x30a449 && 'undefined' != typeof _0x30a449.getElementsByTagName && _0x30a449;
    },
    _0x3cf3e9 = function () {},
    _0x595b25 = function (_0x2b85ab) {
      for (var _0x4c5f10 = 0x0, _0x221584 = _0x2b85ab.length, _0x1a153a = ''; _0x4c5f10 < _0x221584; _0x4c5f10++) _0x1a153a += _0x2b85ab[_0x4c5f10].value;
      return _0x1a153a;
    },
    _0xc52378 = function (_0x138aa8, _0x44a582, _0x1fe977) {
      var _0x266108 = _0x44a582.dir,
        _0x36a410 = _0x44a582.next,
        _0x5d1742 = _0x36a410 || _0x266108,
        _0x1215c1 = _0x1fe977 && 'parentNode' === _0x5d1742,
        _0x36b0d6 = _0x1957d8++;
      return _0x44a582.first ? function (_0x5a8bb9, _0x1a97fc, _0x8f8648) {
        for (; _0x5a8bb9 = _0x5a8bb9[_0x266108];) if (0x1 === _0x5a8bb9.nodeType || _0x1215c1) return _0x138aa8(_0x5a8bb9, _0x1a97fc, _0x8f8648);
        return !0x1;
      } : function (_0x5162a7, _0x16fb0c, _0x509b65) {
        var _0x1b7dff,
          _0x480f9e,
          _0x5495e1,
          _0x54d657 = [_0x270a78, _0x36b0d6];
        if (_0x509b65) for (; _0x5162a7 = _0x5162a7[_0x266108];) {
          if ((0x1 === _0x5162a7.nodeType || _0x1215c1) && _0x138aa8(_0x5162a7, _0x16fb0c, _0x509b65)) return !0x0;
        } else {
          for (; _0x5162a7 = _0x5162a7[_0x266108];) if (0x1 === _0x5162a7.nodeType || _0x1215c1) {
            if (_0x5495e1 = _0x5162a7[_0x5834e0] || (_0x5162a7[_0x5834e0] = {}), _0x480f9e = _0x5495e1[_0x5162a7.uniqueID] || (_0x5495e1[_0x5162a7.uniqueID] = {}), _0x36a410 && _0x36a410 === _0x5162a7.nodeName.toLowerCase()) _0x5162a7 = _0x5162a7[_0x266108] || _0x5162a7;else {
              if ((_0x1b7dff = _0x480f9e[_0x5d1742]) && _0x1b7dff[0x0] === _0x270a78 && _0x1b7dff[0x1] === _0x36b0d6) return _0x54d657[0x2] = _0x1b7dff[0x2];
              if (_0x480f9e[_0x5d1742] = _0x54d657, _0x54d657[0x2] = _0x138aa8(_0x5162a7, _0x16fb0c, _0x509b65)) return !0x0;
            }
          }
        }
        return !0x1;
      };
    },
    _0x38bf1a = function (_0x26edd8) {
      return 0x1 < _0x26edd8.length ? function (_0x2500df, _0x48e70b, _0x5ef0f2) {
        for (var _0x541d1f = _0x26edd8.length; _0x541d1f--;) if (!_0x26edd8[_0x541d1f](_0x2500df, _0x48e70b, _0x5ef0f2)) return !0x1;
        return !0x0;
      } : _0x26edd8[0x0];
    },
    _0x49e560 = function (_0x557424, _0x578bcb, _0x28fcef, _0x37ccb3, _0x491bdd) {
      for (var _0x25c45a, _0x127b7a = [], _0xea6098 = 0x0, _0x234513 = _0x557424.length, _0xe00ba6 = null != _0x578bcb; _0xea6098 < _0x234513; _0xea6098++) (_0x25c45a = _0x557424[_0xea6098]) && (_0x28fcef && !_0x28fcef(_0x25c45a, _0x37ccb3, _0x491bdd) || (_0x127b7a.push(_0x25c45a), _0xe00ba6 && _0x578bcb.push(_0xea6098)));
      return _0x127b7a;
    },
    _0x24de6d = function (_0x344b19, _0x263205, _0x35d9d6, _0x2cb930, _0x36ae5a, _0x3a3691) {
      return _0x2cb930 && !_0x2cb930[_0x5834e0] && (_0x2cb930 = _0x24de6d(_0x2cb930)), _0x36ae5a && !_0x36ae5a[_0x5834e0] && (_0x36ae5a = _0x24de6d(_0x36ae5a, _0x3a3691)), _0x2355e2(function (_0x4a00dc, _0x90994f, _0xe69560, _0x2a8aca) {
        var _0x11cdd3,
          _0x27fa27,
          _0x3b5108 = [],
          _0x4ff151 = [],
          _0x3b9d4a = _0x90994f.length,
          _0x35d00e;
        if (!(_0x35d00e = _0x4a00dc)) {
          _0x35d00e = _0x263205 || '*';
          for (var _0x135de6 = _0xe69560.nodeType ? [_0xe69560] : _0xe69560, _0x49b144 = [], _0x4d6765 = 0x0, _0x173610 = _0x135de6.length; _0x4d6765 < _0x173610; _0x4d6765++) _0x1866a3(_0x35d00e, _0x135de6[_0x4d6765], _0x49b144);
          _0x35d00e = _0x49b144;
        }
        _0x35d00e = !_0x344b19 || !_0x4a00dc && _0x263205 ? _0x35d00e : _0x49e560(_0x35d00e, _0x3b5108, _0x344b19, _0xe69560, _0x2a8aca), _0x135de6 = _0x35d9d6 ? _0x36ae5a || (_0x4a00dc ? _0x344b19 : _0x3b9d4a || _0x2cb930) ? [] : _0x90994f : _0x35d00e;
        if (_0x35d9d6 && _0x35d9d6(_0x35d00e, _0x135de6, _0xe69560, _0x2a8aca), _0x2cb930) {
          _0x11cdd3 = _0x49e560(_0x135de6, _0x4ff151), _0x2cb930(_0x11cdd3, [], _0xe69560, _0x2a8aca);
          for (_0xe69560 = _0x11cdd3.length; _0xe69560--;) (_0x27fa27 = _0x11cdd3[_0xe69560]) && (_0x135de6[_0x4ff151[_0xe69560]] = !(_0x35d00e[_0x4ff151[_0xe69560]] = _0x27fa27));
        }
        if (_0x4a00dc) {
          if (_0x36ae5a || _0x344b19) {
            if (_0x36ae5a) {
              _0x11cdd3 = [];
              for (_0xe69560 = _0x135de6.length; _0xe69560--;) (_0x27fa27 = _0x135de6[_0xe69560]) && _0x11cdd3.push(_0x35d00e[_0xe69560] = _0x27fa27);
              _0x36ae5a(null, _0x135de6 = [], _0x11cdd3, _0x2a8aca);
            }
            for (_0xe69560 = _0x135de6.length; _0xe69560--;) (_0x27fa27 = _0x135de6[_0xe69560]) && -0x1 < (_0x11cdd3 = _0x36ae5a ? _0x52c6e8(_0x4a00dc, _0x27fa27) : _0x3b5108[_0xe69560]) && (_0x4a00dc[_0x11cdd3] = !(_0x90994f[_0x11cdd3] = _0x27fa27));
          }
        } else _0x135de6 = _0x49e560(_0x135de6 === _0x90994f ? _0x135de6.splice(_0x3b9d4a, _0x135de6.length) : _0x135de6), _0x36ae5a ? _0x36ae5a(null, _0x90994f, _0x135de6, _0x2a8aca) : _0x150425.apply(_0x90994f, _0x135de6);
      });
    },
    _0x51e126 = function (_0x2110f7) {
      var _0x2b8310,
        _0x1964f3,
        _0x1e0cca,
        _0x56598f = _0x2110f7.length,
        _0x3ffece = _0xd30b60.relative[_0x2110f7[0x0].type];
      _0x1964f3 = _0x3ffece || _0xd30b60.relative[" "];
      for (var _0x3a0c09 = _0x3ffece ? 0x1 : 0x0, _0x4e5168 = _0xc52378(function (_0x50f5cf) {
          return _0x50f5cf === _0x2b8310;
        }, _0x1964f3, !0x0), _0x3b548c = _0xc52378(function (_0x210b8e) {
          return -0x1 < _0x52c6e8(_0x2b8310, _0x210b8e);
        }, _0x1964f3, !0x0), _0x3304a1 = [function (_0x16d93a, _0x31c283, _0xcb1eba) {
          return _0x16d93a = !_0x3ffece && (_0xcb1eba || _0x31c283 !== _0x268cf4) || ((_0x2b8310 = _0x31c283).nodeType ? _0x4e5168(_0x16d93a, _0x31c283, _0xcb1eba) : _0x3b548c(_0x16d93a, _0x31c283, _0xcb1eba)), _0x2b8310 = null, _0x16d93a;
        }]; _0x3a0c09 < _0x56598f; _0x3a0c09++) if (_0x1964f3 = _0xd30b60.relative[_0x2110f7[_0x3a0c09].type]) _0x3304a1 = [_0xc52378(_0x38bf1a(_0x3304a1), _0x1964f3)];else {
        if (_0x1964f3 = _0xd30b60.filter[_0x2110f7[_0x3a0c09].type].apply(null, _0x2110f7[_0x3a0c09].matches), _0x1964f3[_0x5834e0]) {
          for (_0x1e0cca = ++_0x3a0c09; _0x1e0cca < _0x56598f && !_0xd30b60.relative[_0x2110f7[_0x1e0cca].type]; _0x1e0cca++);
          return _0x24de6d(0x1 < _0x3a0c09 && _0x38bf1a(_0x3304a1), 0x1 < _0x3a0c09 && _0x595b25(_0x2110f7.slice(0x0, _0x3a0c09 - 0x1).concat({
            'value': " " === _0x2110f7[_0x3a0c09 - 0x2].type ? '*' : ''
          })).replace(_0x29a222, '$1'), _0x1964f3, _0x3a0c09 < _0x1e0cca && _0x51e126(_0x2110f7.slice(_0x3a0c09, _0x1e0cca)), _0x1e0cca < _0x56598f && _0x51e126(_0x2110f7 = _0x2110f7.slice(_0x1e0cca)), _0x1e0cca < _0x56598f && _0x595b25(_0x2110f7));
        }
        _0x3304a1.push(_0x1964f3);
      }
      return _0x38bf1a(_0x3304a1);
    },
    _0x275265,
    _0xd8563b,
    _0xd30b60,
    _0x4628f3,
    _0x4f021b,
    _0x1e0f52,
    _0xd1153a,
    _0x336f2e,
    _0x268cf4,
    _0x2ede94,
    _0x17fdaf,
    _0x266dbd,
    _0x362672,
    _0x1c1ec3,
    _0x2f6f0b,
    _0x2968e4,
    _0x201888,
    _0x46a52f,
    _0x26d600,
    _0x5834e0 = 'sizzle' + 0x1 * new Date(),
    _0xc68eb9 = _0x18b61e.document,
    _0x270a78 = 0x0,
    _0x1957d8 = 0x0,
    _0x5618aa = _0x3d0949(),
    _0x46bfaf = _0x3d0949(),
    _0x4f6d32 = _0x3d0949(),
    _0x53240d = function (_0x4d772c, _0x48ec8d) {
      return _0x4d772c === _0x48ec8d && (_0x17fdaf = !0x0), 0x0;
    },
    _0x2735a9 = {}.hasOwnProperty,
    _0x2b4729 = [],
    _0x57548b = _0x2b4729.pop,
    _0x3536c3 = _0x2b4729.push,
    _0x150425 = _0x2b4729.push,
    _0x471142 = _0x2b4729.slice,
    _0x52c6e8 = function (_0x574e35, _0x1b4fe3) {
      for (var _0x3f515b = 0x0, _0x5a06d7 = _0x574e35.length; _0x3f515b < _0x5a06d7; _0x3f515b++) if (_0x574e35[_0x3f515b] === _0x1b4fe3) return _0x3f515b;
      return -0x1;
    },
    _0x1f37a7 = /[\x20\t\r\n\f]+/g,
    _0x29a222 = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
    _0x5d53cb = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
    _0x25263f = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
    _0x77973d = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
    _0x3688a6 = RegExp(":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
    _0x37ebfa = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
    _0x389fbc = {
      'ID': /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      'CLASS': /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      'TAG': /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
      'ATTR': RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
      'PSEUDO': RegExp("^:((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
      'CHILD': RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", 'i'),
      'bool': RegExp('^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$', 'i'),
      'needsContext': RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", 'i')
    },
    _0x2d44ab = /^(?:input|select|textarea|button)$/i,
    _0x588a98 = /^h\d$/i,
    _0x3a491b = /^[^{]+\{\s*\[native \w/,
    _0x9e68f = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    _0x5e7c17 = /[+~]/,
    _0x10f3e3 = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
    _0x4bfee1 = function (_0x5ac76c, _0xefeb2e, _0xf22d5b) {
      return _0x5ac76c = '0x' + _0xefeb2e - 0x10000, _0x5ac76c !== _0x5ac76c || _0xf22d5b ? _0xefeb2e : 0x0 > _0x5ac76c ? String.fromCharCode(_0x5ac76c + 0x10000) : String.fromCharCode(_0x5ac76c >> 0xa | 0xd800, 0x3ff & _0x5ac76c | 0xdc00);
    },
    _0x2e7e77 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
    _0x26946c = function (_0x192c07, _0x42f197) {
      return _0x42f197 ? "\0" === _0x192c07 ? '�' : _0x192c07.slice(0x0, -0x1) + "\\" + _0x192c07.charCodeAt(_0x192c07.length - 0x1).toString(0x10) + " " : "\\" + _0x192c07;
    },
    _0x535ef8 = function () {
      _0x266dbd();
    },
    _0x41e234 = _0xc52378(function (_0x55788e) {
      return !0x0 === _0x55788e.disabled && ('form' in _0x55788e || 'label' in _0x55788e);
    }, {
      'dir': 'parentNode',
      'next': 'legend'
    });
  try {
    _0x150425.apply(_0x2b4729 = _0x471142.call(_0xc68eb9.childNodes), _0xc68eb9.childNodes), _0x2b4729[_0xc68eb9.childNodes.length].nodeType;
  } catch (_0x52032d) {
    _0x150425 = {
      'apply': _0x2b4729.length ? function (_0xdbf4c3, _0x331512) {
        _0x3536c3.apply(_0xdbf4c3, _0x471142.call(_0x331512));
      } : function (_0x28c704, _0x4f1ce8) {
        for (var _0x5a9e64 = _0x28c704.length, _0x501efb = 0x0; _0x28c704[_0x5a9e64++] = _0x4f1ce8[_0x501efb++];);
        _0x28c704.length = _0x5a9e64 - 0x1;
      }
    };
  }
  _0xd8563b = _0x1866a3.support = {}, _0x4f021b = _0x1866a3.isXML = function (_0x4ff109) {
    return _0x4ff109 = _0x4ff109 && (_0x4ff109.ownerDocument || _0x4ff109).documentElement, !!_0x4ff109 && 'HTML' !== _0x4ff109.nodeName;
  }, _0x266dbd = _0x1866a3.setDocument = function (_0x418191) {
    var _0x21ed33, _0x20296e;
    return _0x418191 = _0x418191 ? _0x418191.ownerDocument || _0x418191 : _0xc68eb9, _0x418191 !== _0x362672 && 0x9 === _0x418191.nodeType && _0x418191.documentElement ? (_0x362672 = _0x418191, _0x1c1ec3 = _0x362672.documentElement, _0x2f6f0b = !_0x4f021b(_0x362672), _0xc68eb9 !== _0x362672 && (_0x20296e = _0x362672.defaultView) && _0x20296e.top !== _0x20296e && (_0x20296e.addEventListener ? _0x20296e.addEventListener('unload', _0x535ef8, !0x1) : _0x20296e.attachEvent && _0x20296e.attachEvent('onunload', _0x535ef8)), _0xd8563b.attributes = _0x3be5e8(function (_0x938492) {
      return _0x938492.className = 'i', !_0x938492.getAttribute('className');
    }), _0xd8563b.getElementsByTagName = _0x3be5e8(function (_0x47930c) {
      return _0x47930c.appendChild(_0x362672.createComment('')), !_0x47930c.getElementsByTagName('*').length;
    }), _0xd8563b.getElementsByClassName = _0x3a491b.test(_0x362672.getElementsByClassName), _0xd8563b.getById = _0x3be5e8(function (_0x30d1cf) {
      return _0x1c1ec3.appendChild(_0x30d1cf).id = _0x5834e0, !_0x362672.getElementsByName || !_0x362672.getElementsByName(_0x5834e0).length;
    }), _0xd8563b.getById ? (_0xd30b60.filter.ID = function (_0x3eaa0c) {
      var _0x3555a2 = _0x3eaa0c.replace(_0x10f3e3, _0x4bfee1);
      return function (_0x2ebb6c) {
        return _0x2ebb6c.getAttribute('id') === _0x3555a2;
      };
    }, _0xd30b60.find.ID = function (_0x39d1e6, _0x586681) {
      if ('undefined' != typeof _0x586681.getElementById && _0x2f6f0b) {
        var _0x38c93a = _0x586681.getElementById(_0x39d1e6);
        return _0x38c93a ? [_0x38c93a] : [];
      }
    }) : (_0xd30b60.filter.ID = function (_0x95b96d) {
      var _0x2ece80 = _0x95b96d.replace(_0x10f3e3, _0x4bfee1);
      return function (_0x56181f) {
        return (_0x56181f = 'undefined' != typeof _0x56181f.getAttributeNode && _0x56181f.getAttributeNode('id')) && _0x56181f.value === _0x2ece80;
      };
    }, _0xd30b60.find.ID = function (_0x5f5182, _0x350a0d) {
      if ('undefined' != typeof _0x350a0d.getElementById && _0x2f6f0b) {
        var _0xa04bd1,
          _0x2f3ecb,
          _0x352fa6,
          _0x3fd6ee = _0x350a0d.getElementById(_0x5f5182);
        if (_0x3fd6ee) {
          if (_0xa04bd1 = _0x3fd6ee.getAttributeNode('id'), _0xa04bd1 && _0xa04bd1.value === _0x5f5182) return [_0x3fd6ee];
          _0x352fa6 = _0x350a0d.getElementsByName(_0x5f5182);
          for (_0x2f3ecb = 0x0; _0x3fd6ee = _0x352fa6[_0x2f3ecb++];) if (_0xa04bd1 = _0x3fd6ee.getAttributeNode('id'), _0xa04bd1 && _0xa04bd1.value === _0x5f5182) return [_0x3fd6ee];
        }
        return [];
      }
    }), _0xd30b60.find.TAG = _0xd8563b.getElementsByTagName ? function (_0x4aa208, _0x425e9a) {
      return 'undefined' != typeof _0x425e9a.getElementsByTagName ? _0x425e9a.getElementsByTagName(_0x4aa208) : _0xd8563b.qsa ? _0x425e9a.querySelectorAll(_0x4aa208) : void 0x0;
    } : function (_0xb0e93d, _0x48907d) {
      var _0x4e01e2,
        _0x48e343 = [],
        _0x31954e = 0x0,
        _0x5ca9fc = _0x48907d.getElementsByTagName(_0xb0e93d);
      if ('*' === _0xb0e93d) {
        for (; _0x4e01e2 = _0x5ca9fc[_0x31954e++];) 0x1 === _0x4e01e2.nodeType && _0x48e343.push(_0x4e01e2);
        return _0x48e343;
      }
      return _0x5ca9fc;
    }, _0xd30b60.find.CLASS = _0xd8563b.getElementsByClassName && function (_0x281930, _0x4c8c71) {
      if ('undefined' != typeof _0x4c8c71.getElementsByClassName && _0x2f6f0b) return _0x4c8c71.getElementsByClassName(_0x281930);
    }, _0x201888 = [], _0x2968e4 = [], (_0xd8563b.qsa = _0x3a491b.test(_0x362672.querySelectorAll)) && (_0x3be5e8(function (_0x37bd1d) {
      _0x1c1ec3.appendChild(_0x37bd1d).innerHTML = "<a id='" + _0x5834e0 + "'></a><select id='" + _0x5834e0 + "-\r\\' msallowcapture=''><option selected=''></option></select>", _0x37bd1d.querySelectorAll("[msallowcapture^='']").length && _0x2968e4.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), _0x37bd1d.querySelectorAll('[selected]').length || _0x2968e4.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"), _0x37bd1d.querySelectorAll('[id~=' + _0x5834e0 + '-]').length || _0x2968e4.push('~='), _0x37bd1d.querySelectorAll(':checked').length || _0x2968e4.push(':checked'), _0x37bd1d.querySelectorAll('a#' + _0x5834e0 + '+*').length || _0x2968e4.push('.#.+[+~]');
    }), _0x3be5e8(function (_0x20d124) {
      _0x20d124.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
      var _0xca83d1 = _0x362672.createElement('input');
      _0xca83d1.setAttribute('type', 'hidden'), _0x20d124.appendChild(_0xca83d1).setAttribute('name', 'D'), _0x20d124.querySelectorAll('[name=d]').length && _0x2968e4.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 0x2 !== _0x20d124.querySelectorAll(':enabled').length && _0x2968e4.push(':enabled', ':disabled'), _0x1c1ec3.appendChild(_0x20d124).disabled = !0x0, 0x2 !== _0x20d124.querySelectorAll(':disabled').length && _0x2968e4.push(':enabled', ':disabled'), _0x20d124.querySelectorAll('*,:x'), _0x2968e4.push(',.*:');
    })), (_0xd8563b.matchesSelector = _0x3a491b.test(_0x46a52f = _0x1c1ec3.matches || _0x1c1ec3.webkitMatchesSelector || _0x1c1ec3.mozMatchesSelector || _0x1c1ec3.oMatchesSelector || _0x1c1ec3.msMatchesSelector)) && _0x3be5e8(function (_0x3fcaad) {
      _0xd8563b.disconnectedMatch = _0x46a52f.call(_0x3fcaad, '*'), _0x46a52f.call(_0x3fcaad, "[s!='']:x"), _0x201888.push('!=', ":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");
    }), _0x2968e4 = _0x2968e4.length && RegExp(_0x2968e4.join('|')), _0x201888 = _0x201888.length && RegExp(_0x201888.join('|')), _0x21ed33 = _0x3a491b.test(_0x1c1ec3.compareDocumentPosition), _0x26d600 = _0x21ed33 || _0x3a491b.test(_0x1c1ec3.contains) ? function (_0x56b7e2, _0x2cecda) {
      var _0x19c51b = 0x9 === _0x56b7e2.nodeType ? _0x56b7e2.documentElement : _0x56b7e2,
        _0x581e86 = _0x2cecda && _0x2cecda.parentNode;
      return _0x56b7e2 === _0x581e86 || !(!_0x581e86 || 0x1 !== _0x581e86.nodeType || !(_0x19c51b.contains ? _0x19c51b.contains(_0x581e86) : _0x56b7e2.compareDocumentPosition && 0x10 & _0x56b7e2.compareDocumentPosition(_0x581e86)));
    } : function (_0x3d7784, _0x36f0ae) {
      if (_0x36f0ae) {
        for (; _0x36f0ae = _0x36f0ae.parentNode;) if (_0x36f0ae === _0x3d7784) return !0x0;
      }
      return !0x1;
    }, _0x53240d = _0x21ed33 ? function (_0x8b29e3, _0x1a4c45) {
      if (_0x8b29e3 === _0x1a4c45) return _0x17fdaf = !0x0, 0x0;
      var _0x22b15e = !_0x8b29e3.compareDocumentPosition - !_0x1a4c45.compareDocumentPosition;
      return _0x22b15e ? _0x22b15e : (_0x22b15e = (_0x8b29e3.ownerDocument || _0x8b29e3) === (_0x1a4c45.ownerDocument || _0x1a4c45) ? _0x8b29e3.compareDocumentPosition(_0x1a4c45) : 0x1, 0x1 & _0x22b15e || !_0xd8563b.sortDetached && _0x1a4c45.compareDocumentPosition(_0x8b29e3) === _0x22b15e ? _0x8b29e3 === _0x362672 || _0x8b29e3.ownerDocument === _0xc68eb9 && _0x26d600(_0xc68eb9, _0x8b29e3) ? -0x1 : _0x1a4c45 === _0x362672 || _0x1a4c45.ownerDocument === _0xc68eb9 && _0x26d600(_0xc68eb9, _0x1a4c45) ? 0x1 : _0x2ede94 ? _0x52c6e8(_0x2ede94, _0x8b29e3) - _0x52c6e8(_0x2ede94, _0x1a4c45) : 0x0 : 0x4 & _0x22b15e ? -0x1 : 0x1);
    } : function (_0xa13c3a, _0x5efddb) {
      if (_0xa13c3a === _0x5efddb) return _0x17fdaf = !0x0, 0x0;
      var _0x2c1a3f,
        _0x37f9ba = 0x0;
      _0x2c1a3f = _0xa13c3a.parentNode;
      var _0x13d172 = _0x5efddb.parentNode,
        _0x4dcc0a = [_0xa13c3a],
        _0x12006e = [_0x5efddb];
      if (!_0x2c1a3f || !_0x13d172) return _0xa13c3a === _0x362672 ? -0x1 : _0x5efddb === _0x362672 ? 0x1 : _0x2c1a3f ? -0x1 : _0x13d172 ? 0x1 : _0x2ede94 ? _0x52c6e8(_0x2ede94, _0xa13c3a) - _0x52c6e8(_0x2ede94, _0x5efddb) : 0x0;
      if (_0x2c1a3f === _0x13d172) return _0x43a658(_0xa13c3a, _0x5efddb);
      for (_0x2c1a3f = _0xa13c3a; _0x2c1a3f = _0x2c1a3f.parentNode;) _0x4dcc0a.unshift(_0x2c1a3f);
      for (_0x2c1a3f = _0x5efddb; _0x2c1a3f = _0x2c1a3f.parentNode;) _0x12006e.unshift(_0x2c1a3f);
      for (; _0x4dcc0a[_0x37f9ba] === _0x12006e[_0x37f9ba];) _0x37f9ba++;
      return _0x37f9ba ? _0x43a658(_0x4dcc0a[_0x37f9ba], _0x12006e[_0x37f9ba]) : _0x4dcc0a[_0x37f9ba] === _0xc68eb9 ? -0x1 : _0x12006e[_0x37f9ba] === _0xc68eb9 ? 0x1 : 0x0;
    }, _0x362672) : _0x362672;
  }, _0x1866a3.matches = function (_0x1c0292, _0x19b646) {
    return _0x1866a3(_0x1c0292, null, null, _0x19b646);
  }, _0x1866a3.matchesSelector = function (_0x4a67ff, _0x198d15) {
    if ((_0x4a67ff.ownerDocument || _0x4a67ff) !== _0x362672 && _0x266dbd(_0x4a67ff), _0x198d15 = _0x198d15.replace(_0x77973d, "='$1']"), _0xd8563b.matchesSelector && _0x2f6f0b && !_0x4f6d32[_0x198d15 + " "] && (!_0x201888 || !_0x201888.test(_0x198d15)) && (!_0x2968e4 || !_0x2968e4.test(_0x198d15))) try {
      var _0xc7e7e9 = _0x46a52f.call(_0x4a67ff, _0x198d15);
      if (_0xc7e7e9 || _0xd8563b.disconnectedMatch || _0x4a67ff.document && 0xb !== _0x4a67ff.document.nodeType) return _0xc7e7e9;
    } catch (_0x5d3e6e) {}
    return 0x0 < _0x1866a3(_0x198d15, _0x362672, null, [_0x4a67ff]).length;
  }, _0x1866a3.contains = function (_0x58186b, _0x39b6c5) {
    return (_0x58186b.ownerDocument || _0x58186b) !== _0x362672 && _0x266dbd(_0x58186b), _0x26d600(_0x58186b, _0x39b6c5);
  }, _0x1866a3.attr = function (_0x2db45e, _0x217ee9) {
    (_0x2db45e.ownerDocument || _0x2db45e) !== _0x362672 && _0x266dbd(_0x2db45e);
    var _0x51857f = _0xd30b60.attrHandle[_0x217ee9.toLowerCase()],
      _0x51857f = _0x51857f && _0x2735a9.call(_0xd30b60.attrHandle, _0x217ee9.toLowerCase()) ? _0x51857f(_0x2db45e, _0x217ee9, !_0x2f6f0b) : void 0x0;
    return void 0x0 !== _0x51857f ? _0x51857f : _0xd8563b.attributes || !_0x2f6f0b ? _0x2db45e.getAttribute(_0x217ee9) : (_0x51857f = _0x2db45e.getAttributeNode(_0x217ee9)) && _0x51857f.specified ? _0x51857f.value : null;
  }, _0x1866a3.escape = function (_0x12411a) {
    return (_0x12411a + '').replace(_0x2e7e77, _0x26946c);
  }, _0x1866a3.error = function (_0x1f3401) {
    throw Error("Syntax error, unrecognized expression: " + _0x1f3401);
  }, _0x1866a3.uniqueSort = function (_0x234189) {
    var _0x26cda8,
      _0x4b2b55 = [],
      _0x35a180 = 0x0,
      _0xadc733 = 0x0;
    if (_0x17fdaf = !_0xd8563b.detectDuplicates, _0x2ede94 = !_0xd8563b.sortStable && _0x234189.slice(0x0), _0x234189.sort(_0x53240d), _0x17fdaf) {
      for (; _0x26cda8 = _0x234189[_0xadc733++];) _0x26cda8 === _0x234189[_0xadc733] && (_0x35a180 = _0x4b2b55.push(_0xadc733));
      for (; _0x35a180--;) _0x234189.splice(_0x4b2b55[_0x35a180], 0x1);
    }
    return _0x2ede94 = null, _0x234189;
  }, _0x4628f3 = _0x1866a3.getText = function (_0x130806) {
    var _0x52a241,
      _0x41403e = '',
      _0x3fcd14 = 0x0;
    if (_0x52a241 = _0x130806.nodeType) {
      if (0x1 === _0x52a241 || 0x9 === _0x52a241 || 0xb === _0x52a241) {
        if ('string' == typeof _0x130806.textContent) return _0x130806.textContent;
        for (_0x130806 = _0x130806.firstChild; _0x130806; _0x130806 = _0x130806.nextSibling) _0x41403e += _0x4628f3(_0x130806);
      } else {
        if (0x3 === _0x52a241 || 0x4 === _0x52a241) return _0x130806.nodeValue;
      }
    } else {
      for (; _0x52a241 = _0x130806[_0x3fcd14++];) _0x41403e += _0x4628f3(_0x52a241);
    }
    return _0x41403e;
  }, _0xd30b60 = _0x1866a3.selectors = {
    'cacheLength': 0x32,
    'createPseudo': _0x2355e2,
    'match': _0x389fbc,
    'attrHandle': {},
    'find': {},
    'relative': {
      '>': {
        'dir': 'parentNode',
        'first': !0x0
      },
      " ": {
        'dir': 'parentNode'
      },
      '+': {
        'dir': 'previousSibling',
        'first': !0x0
      },
      '~': {
        'dir': 'previousSibling'
      }
    },
    'preFilter': {
      'ATTR': function (_0x53ae62) {
        return _0x53ae62[0x1] = _0x53ae62[0x1].replace(_0x10f3e3, _0x4bfee1), _0x53ae62[0x3] = (_0x53ae62[0x3] || _0x53ae62[0x4] || _0x53ae62[0x5] || '').replace(_0x10f3e3, _0x4bfee1), '~=' === _0x53ae62[0x2] && (_0x53ae62[0x3] = " " + _0x53ae62[0x3] + " "), _0x53ae62.slice(0x0, 0x4);
      },
      'CHILD': function (_0x3156b3) {
        return _0x3156b3[0x1] = _0x3156b3[0x1].toLowerCase(), 'nth' === _0x3156b3[0x1].slice(0x0, 0x3) ? (_0x3156b3[0x3] || _0x1866a3.error(_0x3156b3[0x0]), _0x3156b3[0x4] = +(_0x3156b3[0x4] ? _0x3156b3[0x5] + (_0x3156b3[0x6] || 0x1) : 0x2 * ('even' === _0x3156b3[0x3] || 'odd' === _0x3156b3[0x3])), _0x3156b3[0x5] = +(_0x3156b3[0x7] + _0x3156b3[0x8] || 'odd' === _0x3156b3[0x3])) : _0x3156b3[0x3] && _0x1866a3.error(_0x3156b3[0x0]), _0x3156b3;
      },
      'PSEUDO': function (_0x2ed855) {
        var _0x31af7b,
          _0x37f662 = !_0x2ed855[0x6] && _0x2ed855[0x2];
        return _0x389fbc.CHILD.test(_0x2ed855[0x0]) ? null : (_0x2ed855[0x3] ? _0x2ed855[0x2] = _0x2ed855[0x4] || _0x2ed855[0x5] || '' : _0x37f662 && _0x3688a6.test(_0x37f662) && (_0x31af7b = _0x1e0f52(_0x37f662, !0x0)) && (_0x31af7b = _0x37f662.indexOf(')', _0x37f662.length - _0x31af7b) - _0x37f662.length) && (_0x2ed855[0x0] = _0x2ed855[0x0].slice(0x0, _0x31af7b), _0x2ed855[0x2] = _0x37f662.slice(0x0, _0x31af7b)), _0x2ed855.slice(0x0, 0x3));
      }
    },
    'filter': {
      'TAG': function (_0x309a7d) {
        var _0x10ac02 = _0x309a7d.replace(_0x10f3e3, _0x4bfee1).toLowerCase();
        return '*' === _0x309a7d ? function () {
          return !0x0;
        } : function (_0x4b6ee6) {
          return _0x4b6ee6.nodeName && _0x4b6ee6.nodeName.toLowerCase() === _0x10ac02;
        };
      },
      'CLASS': function (_0x1edecf) {
        var _0x4e68c6 = _0x5618aa[_0x1edecf + " "];
        return _0x4e68c6 || (_0x4e68c6 = RegExp("(^|[\\x20\\t\\r\\n\\f])" + _0x1edecf + "([\\x20\\t\\r\\n\\f]|$)")) && _0x5618aa(_0x1edecf, function (_0x4da549) {
          return _0x4e68c6.test('string' == typeof _0x4da549.className && _0x4da549.className || 'undefined' != typeof _0x4da549.getAttribute && _0x4da549.getAttribute('class') || '');
        });
      },
      'ATTR': function (_0x50b7d9, _0x2b777f, _0xa7e0bd) {
        return function (_0x31e1e7) {
          return _0x31e1e7 = _0x1866a3.attr(_0x31e1e7, _0x50b7d9), null == _0x31e1e7 ? '!=' === _0x2b777f : !_0x2b777f || (_0x31e1e7 += '', '=' === _0x2b777f ? _0x31e1e7 === _0xa7e0bd : '!=' === _0x2b777f ? _0x31e1e7 !== _0xa7e0bd : '^=' === _0x2b777f ? _0xa7e0bd && 0x0 === _0x31e1e7.indexOf(_0xa7e0bd) : '*=' === _0x2b777f ? _0xa7e0bd && -0x1 < _0x31e1e7.indexOf(_0xa7e0bd) : '$=' === _0x2b777f ? _0xa7e0bd && _0x31e1e7.slice(-_0xa7e0bd.length) === _0xa7e0bd : '~=' === _0x2b777f ? -0x1 < (" " + _0x31e1e7.replace(_0x1f37a7, " ") + " ").indexOf(_0xa7e0bd) : '|=' === _0x2b777f && (_0x31e1e7 === _0xa7e0bd || _0x31e1e7.slice(0x0, _0xa7e0bd.length + 0x1) === _0xa7e0bd + '-'));
        };
      },
      'CHILD': function (_0x9433b0, _0x23f9ca, _0x54bff4, _0x13803f, _0x45700a) {
        var _0x3d2fe3 = 'nth' !== _0x9433b0.slice(0x0, 0x3),
          _0x307335 = 'last' !== _0x9433b0.slice(-0x4),
          _0x1072b9 = 'of-type' === _0x23f9ca;
        return 0x1 === _0x13803f && 0x0 === _0x45700a ? function (_0x1aa921) {
          return !!_0x1aa921.parentNode;
        } : function (_0x14150c, _0x523eb4, _0x34dd61) {
          var _0x5baafc, _0xe8ed30, _0x5b121e, _0x5e0d0b, _0x94abb6, _0x12ce6a;
          _0x523eb4 = _0x3d2fe3 !== _0x307335 ? 'nextSibling' : 'previousSibling';
          var _0x1595af = _0x14150c.parentNode,
            _0x4ee8af = _0x1072b9 && _0x14150c.nodeName.toLowerCase();
          _0x34dd61 = !_0x34dd61 && !_0x1072b9;
          var _0x45a185 = !0x1;
          if (_0x1595af) {
            if (_0x3d2fe3) {
              for (; _0x523eb4;) {
                for (_0x5e0d0b = _0x14150c; _0x5e0d0b = _0x5e0d0b[_0x523eb4];) if (_0x1072b9 ? _0x5e0d0b.nodeName.toLowerCase() === _0x4ee8af : 0x1 === _0x5e0d0b.nodeType) return !0x1;
                _0x12ce6a = _0x523eb4 = 'only' === _0x9433b0 && !_0x12ce6a && 'nextSibling';
              }
              return !0x0;
            }
            if (_0x12ce6a = [_0x307335 ? _0x1595af.firstChild : _0x1595af.lastChild], _0x307335 && _0x34dd61) {
              _0x5e0d0b = _0x1595af, _0x5b121e = _0x5e0d0b[_0x5834e0] || (_0x5e0d0b[_0x5834e0] = {}), _0xe8ed30 = _0x5b121e[_0x5e0d0b.uniqueID] || (_0x5b121e[_0x5e0d0b.uniqueID] = {}), _0x5baafc = _0xe8ed30[_0x9433b0] || [], _0x45a185 = (_0x94abb6 = _0x5baafc[0x0] === _0x270a78 && _0x5baafc[0x1]) && _0x5baafc[0x2];
              for (_0x5e0d0b = _0x94abb6 && _0x1595af.childNodes[_0x94abb6]; _0x5e0d0b = ++_0x94abb6 && _0x5e0d0b && _0x5e0d0b[_0x523eb4] || (_0x45a185 = _0x94abb6 = 0x0) || _0x12ce6a.pop();) if (0x1 === _0x5e0d0b.nodeType && ++_0x45a185 && _0x5e0d0b === _0x14150c) {
                _0xe8ed30[_0x9433b0] = [_0x270a78, _0x94abb6, _0x45a185];
                break;
              }
            } else {
              if (_0x34dd61 && (_0x5e0d0b = _0x14150c, _0x5b121e = _0x5e0d0b[_0x5834e0] || (_0x5e0d0b[_0x5834e0] = {}), _0xe8ed30 = _0x5b121e[_0x5e0d0b.uniqueID] || (_0x5b121e[_0x5e0d0b.uniqueID] = {}), _0x5baafc = _0xe8ed30[_0x9433b0] || [], _0x94abb6 = _0x5baafc[0x0] === _0x270a78 && _0x5baafc[0x1], _0x45a185 = _0x94abb6), !0x1 === _0x45a185) {
                for (; (_0x5e0d0b = ++_0x94abb6 && _0x5e0d0b && _0x5e0d0b[_0x523eb4] || (_0x45a185 = _0x94abb6 = 0x0) || _0x12ce6a.pop()) && (!(_0x1072b9 ? _0x5e0d0b.nodeName.toLowerCase() === _0x4ee8af : 0x1 === _0x5e0d0b.nodeType) || !++_0x45a185 || !(_0x34dd61 && (_0x5b121e = _0x5e0d0b[_0x5834e0] || (_0x5e0d0b[_0x5834e0] = {}), _0xe8ed30 = _0x5b121e[_0x5e0d0b.uniqueID] || (_0x5b121e[_0x5e0d0b.uniqueID] = {}), _0xe8ed30[_0x9433b0] = [_0x270a78, _0x45a185]), _0x5e0d0b === _0x14150c)););
              }
            }
            return _0x45a185 -= _0x45700a, _0x45a185 === _0x13803f || 0x0 === _0x45a185 % _0x13803f && 0x0 <= _0x45a185 / _0x13803f;
          }
        };
      },
      'PSEUDO': function (_0x5525b7, _0x51746e) {
        var _0x42c149,
          _0x1afdf0 = _0xd30b60.pseudos[_0x5525b7] || _0xd30b60.setFilters[_0x5525b7.toLowerCase()] || _0x1866a3.error("unsupported pseudo: " + _0x5525b7);
        return _0x1afdf0[_0x5834e0] ? _0x1afdf0(_0x51746e) : 0x1 < _0x1afdf0.length ? (_0x42c149 = [_0x5525b7, _0x5525b7, '', _0x51746e], _0xd30b60.setFilters.hasOwnProperty(_0x5525b7.toLowerCase()) ? _0x2355e2(function (_0x4ab245, _0x5891f3) {
          for (var _0xdca602, _0x5bcf53 = _0x1afdf0(_0x4ab245, _0x51746e), _0x512f96 = _0x5bcf53.length; _0x512f96--;) _0xdca602 = _0x52c6e8(_0x4ab245, _0x5bcf53[_0x512f96]), _0x4ab245[_0xdca602] = !(_0x5891f3[_0xdca602] = _0x5bcf53[_0x512f96]);
        }) : function (_0x5e3a29) {
          return _0x1afdf0(_0x5e3a29, 0x0, _0x42c149);
        }) : _0x1afdf0;
      }
    },
    'pseudos': {
      'not': _0x2355e2(function (_0x11953b) {
        var _0x1179bd = [],
          _0x48b07e = [],
          _0x4e8763 = _0xd1153a(_0x11953b.replace(_0x29a222, '$1'));
        return _0x4e8763[_0x5834e0] ? _0x2355e2(function (_0x55b8f1, _0x2ab7db, _0x3f788a, _0x14a83e) {
          var _0x293cc8;
          _0x3f788a = _0x4e8763(_0x55b8f1, null, _0x14a83e, []);
          for (_0x14a83e = _0x55b8f1.length; _0x14a83e--;) (_0x293cc8 = _0x3f788a[_0x14a83e]) && (_0x55b8f1[_0x14a83e] = !(_0x2ab7db[_0x14a83e] = _0x293cc8));
        }) : function (_0x57dd09, _0x7727ac, _0x9150f3) {
          return _0x1179bd[0x0] = _0x57dd09, _0x4e8763(_0x1179bd, null, _0x9150f3, _0x48b07e), _0x1179bd[0x0] = null, !_0x48b07e.pop();
        };
      }),
      'has': _0x2355e2(function (_0x56a80f) {
        return function (_0x234944) {
          return 0x0 < _0x1866a3(_0x56a80f, _0x234944).length;
        };
      }),
      'contains': _0x2355e2(function (_0x292e4d) {
        return _0x292e4d = _0x292e4d.replace(_0x10f3e3, _0x4bfee1), function (_0x1a230b) {
          return -0x1 < (_0x1a230b.textContent || _0x1a230b.innerText || _0x4628f3(_0x1a230b)).indexOf(_0x292e4d);
        };
      }),
      'lang': _0x2355e2(function (_0x2ea3d9) {
        return _0x37ebfa.test(_0x2ea3d9 || '') || _0x1866a3.error("unsupported lang: " + _0x2ea3d9), _0x2ea3d9 = _0x2ea3d9.replace(_0x10f3e3, _0x4bfee1).toLowerCase(), function (_0x1f9bad) {
          var _0x124ec2;
          do if (_0x124ec2 = _0x2f6f0b ? _0x1f9bad.lang : _0x1f9bad.getAttribute('xml:lang') || _0x1f9bad.getAttribute('lang')) return _0x124ec2 = _0x124ec2.toLowerCase(), _0x124ec2 === _0x2ea3d9 || 0x0 === _0x124ec2.indexOf(_0x2ea3d9 + '-'); while ((_0x1f9bad = _0x1f9bad.parentNode) && 0x1 === _0x1f9bad.nodeType);
          return !0x1;
        };
      }),
      'target': function (_0x4ad93c) {
        var _0x274e24 = _0x18b61e.location && _0x18b61e.location.hash;
        return _0x274e24 && _0x274e24.slice(0x1) === _0x4ad93c.id;
      },
      'root': function (_0x19ee9d) {
        return _0x19ee9d === _0x1c1ec3;
      },
      'focus': function (_0x6c601) {
        return _0x6c601 === _0x362672.activeElement && (!_0x362672.hasFocus || _0x362672.hasFocus()) && !(!_0x6c601.type && !_0x6c601.href && !~_0x6c601.tabIndex);
      },
      'enabled': _0x51c5d8(!0x1),
      'disabled': _0x51c5d8(!0x0),
      'checked': function (_0x4e8d5a) {
        var _0x59712c = _0x4e8d5a.nodeName.toLowerCase();
        return 'input' === _0x59712c && !!_0x4e8d5a.checked || 'option' === _0x59712c && !!_0x4e8d5a.selected;
      },
      'selected': function (_0x57a156) {
        return _0x57a156.parentNode && _0x57a156.parentNode.selectedIndex, !0x0 === _0x57a156.selected;
      },
      'empty': function (_0xb7de77) {
        for (_0xb7de77 = _0xb7de77.firstChild; _0xb7de77; _0xb7de77 = _0xb7de77.nextSibling) if (0x6 > _0xb7de77.nodeType) return !0x1;
        return !0x0;
      },
      'parent': function (_0x475ac6) {
        return !_0xd30b60.pseudos.empty(_0x475ac6);
      },
      'header': function (_0x2518a9) {
        return _0x588a98.test(_0x2518a9.nodeName);
      },
      'input': function (_0x581eb3) {
        return _0x2d44ab.test(_0x581eb3.nodeName);
      },
      'button': function (_0xe08089) {
        var _0x5bc077 = _0xe08089.nodeName.toLowerCase();
        return 'input' === _0x5bc077 && 'button' === _0xe08089.type || 'button' === _0x5bc077;
      },
      'text': function (_0x2c9142) {
        var _0x2bdab7;
        return 'input' === _0x2c9142.nodeName.toLowerCase() && 'text' === _0x2c9142.type && (null == (_0x2bdab7 = _0x2c9142.getAttribute('type')) || 'text' === _0x2bdab7.toLowerCase());
      },
      'first': _0x4a5e49(function () {
        return [0x0];
      }),
      'last': _0x4a5e49(function (_0x1ee55f, _0x31c456) {
        return [_0x31c456 - 0x1];
      }),
      'eq': _0x4a5e49(function (_0x40af36, _0x4cff88, _0x2078d7) {
        return [0x0 > _0x2078d7 ? _0x2078d7 + _0x4cff88 : _0x2078d7];
      }),
      'even': _0x4a5e49(function (_0x326943, _0x2d2f0) {
        for (var _0x45fad8 = 0x0; _0x45fad8 < _0x2d2f0; _0x45fad8 += 0x2) _0x326943.push(_0x45fad8);
        return _0x326943;
      }),
      'odd': _0x4a5e49(function (_0x11ef34, _0xfdb785) {
        for (var _0x3b6ad4 = 0x1; _0x3b6ad4 < _0xfdb785; _0x3b6ad4 += 0x2) _0x11ef34.push(_0x3b6ad4);
        return _0x11ef34;
      }),
      'lt': _0x4a5e49(function (_0x249539, _0x46688f, _0xe0c329) {
        for (_0x46688f = 0x0 > _0xe0c329 ? _0xe0c329 + _0x46688f : _0xe0c329; 0x0 <= --_0x46688f;) _0x249539.push(_0x46688f);
        return _0x249539;
      }),
      'gt': _0x4a5e49(function (_0x2e0b62, _0x14b352, _0xe6af12) {
        for (_0xe6af12 = 0x0 > _0xe6af12 ? _0xe6af12 + _0x14b352 : _0xe6af12; ++_0xe6af12 < _0x14b352;) _0x2e0b62.push(_0xe6af12);
        return _0x2e0b62;
      })
    }
  }, _0xd30b60.pseudos.nth = _0xd30b60.pseudos.eq;
  for (_0x275265 in {
    'radio': !0x0,
    'checkbox': !0x0,
    'file': !0x0,
    'password': !0x0,
    'image': !0x0
  }) _0xd30b60.pseudos[_0x275265] = _0x2b653e(_0x275265);
  for (_0x275265 in {
    'submit': !0x0,
    'reset': !0x0
  }) _0xd30b60.pseudos[_0x275265] = _0x5b540e(_0x275265);
  _0x3cf3e9.prototype = _0xd30b60.filters = _0xd30b60.pseudos, _0xd30b60.setFilters = new _0x3cf3e9(), _0x1e0f52 = _0x1866a3.tokenize = function (_0x41a9ea, _0x515514) {
    var _0x121c4d, _0x2a2a3e, _0x10bd37, _0x172b39, _0x44e3fb, _0x5f13fa, _0x74576f;
    if (_0x44e3fb = _0x46bfaf[_0x41a9ea + " "]) return _0x515514 ? 0x0 : _0x44e3fb.slice(0x0);
    _0x44e3fb = _0x41a9ea, _0x5f13fa = [];
    for (_0x74576f = _0xd30b60.preFilter; _0x44e3fb;) {
      _0x121c4d && !(_0x2a2a3e = _0x5d53cb.exec(_0x44e3fb)) || (_0x2a2a3e && (_0x44e3fb = _0x44e3fb.slice(_0x2a2a3e[0x0].length) || _0x44e3fb), _0x5f13fa.push(_0x10bd37 = [])), _0x121c4d = !0x1, (_0x2a2a3e = _0x25263f.exec(_0x44e3fb)) && (_0x121c4d = _0x2a2a3e.shift(), _0x10bd37.push({
        'value': _0x121c4d,
        'type': _0x2a2a3e[0x0].replace(_0x29a222, " ")
      }), _0x44e3fb = _0x44e3fb.slice(_0x121c4d.length));
      for (_0x172b39 in _0xd30b60.filter) !(_0x2a2a3e = _0x389fbc[_0x172b39].exec(_0x44e3fb)) || _0x74576f[_0x172b39] && !(_0x2a2a3e = _0x74576f[_0x172b39](_0x2a2a3e)) || (_0x121c4d = _0x2a2a3e.shift(), _0x10bd37.push({
        'value': _0x121c4d,
        'type': _0x172b39,
        'matches': _0x2a2a3e
      }), _0x44e3fb = _0x44e3fb.slice(_0x121c4d.length));
      if (!_0x121c4d) break;
    }
    return _0x515514 ? _0x44e3fb.length : _0x44e3fb ? _0x1866a3.error(_0x41a9ea) : _0x46bfaf(_0x41a9ea, _0x5f13fa).slice(0x0);
  }, _0xf536f7 = (_0xd1153a = _0x1866a3.compile = function (_0x3405c2, _0x2bb236) {
    var _0x32b171,
      _0x4809fa = [],
      _0x18ee76 = [],
      _0x176a99 = _0x4f6d32[_0x3405c2 + " "];
    if (!_0x176a99) {
      _0x2bb236 || (_0x2bb236 = _0x1e0f52(_0x3405c2));
      for (_0x32b171 = _0x2bb236.length; _0x32b171--;) _0x176a99 = _0x51e126(_0x2bb236[_0x32b171]), _0x176a99[_0x5834e0] ? _0x4809fa.push(_0x176a99) : _0x18ee76.push(_0x176a99);
      _0x32b171 = _0x4f6d32;
      var _0x4eeb67 = 0x0 < _0x4809fa.length,
        _0x1653f1 = 0x0 < _0x18ee76.length,
        _0x176a99 = function (_0x132da2, _0x35db24, _0x3ae280, _0x4650d5, _0x9c0ee6) {
          var _0x1100f3,
            _0x47cdb6,
            _0x1049c7,
            _0x29d8ee = 0x0,
            _0x1bae33 = '0',
            _0x7df9f3 = _0x132da2 && [],
            _0x4df9f7 = [],
            _0x4e0825 = _0x268cf4,
            _0x937750 = _0x132da2 || _0x1653f1 && _0xd30b60.find.TAG('*', _0x9c0ee6),
            _0x191639 = _0x270a78 += null == _0x4e0825 ? 0x1 : Math.random() || 0.1,
            _0xee9a92 = _0x937750.length;
          for (_0x9c0ee6 && (_0x268cf4 = _0x35db24 === _0x362672 || _0x35db24 || _0x9c0ee6); _0x1bae33 !== _0xee9a92 && null != (_0x1100f3 = _0x937750[_0x1bae33]); _0x1bae33++) {
            if (_0x1653f1 && _0x1100f3) {
              _0x47cdb6 = 0x0;
              for (_0x35db24 || _0x1100f3.ownerDocument === _0x362672 || (_0x266dbd(_0x1100f3), _0x3ae280 = !_0x2f6f0b); _0x1049c7 = _0x18ee76[_0x47cdb6++];) if (_0x1049c7(_0x1100f3, _0x35db24 || _0x362672, _0x3ae280)) {
                _0x4650d5.push(_0x1100f3);
                break;
              }
              _0x9c0ee6 && (_0x270a78 = _0x191639);
            }
            _0x4eeb67 && ((_0x1100f3 = !_0x1049c7 && _0x1100f3) && _0x29d8ee--, _0x132da2 && _0x7df9f3.push(_0x1100f3));
          }
          if (_0x29d8ee += _0x1bae33, _0x4eeb67 && _0x1bae33 !== _0x29d8ee) {
            for (_0x47cdb6 = 0x0; _0x1049c7 = _0x4809fa[_0x47cdb6++];) _0x1049c7(_0x7df9f3, _0x4df9f7, _0x35db24, _0x3ae280);
            if (_0x132da2) {
              if (0x0 < _0x29d8ee) {
                for (; _0x1bae33--;) _0x7df9f3[_0x1bae33] || _0x4df9f7[_0x1bae33] || (_0x4df9f7[_0x1bae33] = _0x57548b.call(_0x4650d5));
              }
              _0x4df9f7 = _0x49e560(_0x4df9f7);
            }
            _0x150425.apply(_0x4650d5, _0x4df9f7), _0x9c0ee6 && !_0x132da2 && 0x0 < _0x4df9f7.length && 0x1 < _0x29d8ee + _0x4809fa.length && _0x1866a3.uniqueSort(_0x4650d5);
          }
          return _0x9c0ee6 && (_0x270a78 = _0x191639, _0x268cf4 = _0x4e0825), _0x7df9f3;
        },
        _0x176a99 = _0x4eeb67 ? _0x2355e2(_0x176a99) : _0x176a99,
        _0x176a99 = _0x32b171(_0x3405c2, _0x176a99);
      _0x176a99.selector = _0x3405c2;
    }
    return _0x176a99;
  }, _0x336f2e = _0x1866a3.select = function (_0x6222c3, _0x4e5594, _0x2ea2e8, _0x1a524f) {
    var _0x54d3c5,
      _0x291ca9,
      _0x131b13,
      _0xf8386f,
      _0x226c14,
      _0x569142 = 'function' == typeof _0x6222c3 && _0x6222c3,
      _0x575a27 = !_0x1a524f && _0x1e0f52(_0x6222c3 = _0x569142.selector || _0x6222c3);
    if (_0x2ea2e8 = _0x2ea2e8 || [], 0x1 === _0x575a27.length) {
      if (_0x291ca9 = _0x575a27[0x0] = _0x575a27[0x0].slice(0x0), 0x2 < _0x291ca9.length && 'ID' === (_0x131b13 = _0x291ca9[0x0]).type && 0x9 === _0x4e5594.nodeType && _0x2f6f0b && _0xd30b60.relative[_0x291ca9[0x1].type]) {
        if (_0x4e5594 = (_0xd30b60.find.ID(_0x131b13.matches[0x0].replace(_0x10f3e3, _0x4bfee1), _0x4e5594) || [])[0x0], !_0x4e5594) return _0x2ea2e8;
        _0x569142 && (_0x4e5594 = _0x4e5594.parentNode), _0x6222c3 = _0x6222c3.slice(_0x291ca9.shift().value.length);
      }
      for (_0x54d3c5 = _0x389fbc.needsContext.test(_0x6222c3) ? 0x0 : _0x291ca9.length; _0x54d3c5-- && !(_0x131b13 = _0x291ca9[_0x54d3c5], _0xd30b60.relative[_0xf8386f = _0x131b13.type]);) if ((_0x226c14 = _0xd30b60.find[_0xf8386f]) && (_0x1a524f = _0x226c14(_0x131b13.matches[0x0].replace(_0x10f3e3, _0x4bfee1), _0x5e7c17.test(_0x291ca9[0x0].type) && _0x1a6597(_0x4e5594.parentNode) || _0x4e5594))) {
        if (_0x291ca9.splice(_0x54d3c5, 0x1), _0x6222c3 = _0x1a524f.length && _0x595b25(_0x291ca9), !_0x6222c3) return _0x150425.apply(_0x2ea2e8, _0x1a524f), _0x2ea2e8;
        break;
      }
    }
    return (_0x569142 || _0xd1153a(_0x6222c3, _0x575a27))(_0x1a524f, _0x4e5594, !_0x2f6f0b, _0x2ea2e8, !_0x4e5594 || _0x5e7c17.test(_0x6222c3) && _0x1a6597(_0x4e5594.parentNode) || _0x4e5594), _0x2ea2e8;
  }, _0xd8563b.sortStable = _0x5834e0.split('').sort(_0x53240d).join('') === _0x5834e0, _0xd8563b.detectDuplicates = !!_0x17fdaf, _0x266dbd(), _0xd8563b.sortDetached = _0x3be5e8(function (_0x25042d) {
    return 0x1 & _0x25042d.compareDocumentPosition(_0x362672.createElement('fieldset'));
  }), _0x3be5e8(function (_0x219a7a) {
    return _0x219a7a.innerHTML = "<a href='#'></a>", '#' === _0x219a7a.firstChild.getAttribute('href');
  }) || _0x3744c9('type|href|height|width', function (_0x5f52b6, _0x4b802d, _0x460cd2) {
    if (!_0x460cd2) return _0x5f52b6.getAttribute(_0x4b802d, 'type' === _0x4b802d.toLowerCase() ? 0x1 : 0x2);
  }), _0xd8563b.attributes && _0x3be5e8(function (_0x4764dc) {
    return _0x4764dc.innerHTML = '<input/>', _0x4764dc.firstChild.setAttribute('value', ''), '' === _0x4764dc.firstChild.getAttribute('value');
  }) || _0x3744c9('value', function (_0x31ea49, _0x63feab, _0x29c31f) {
    if (!_0x29c31f && 'input' === _0x31ea49.nodeName.toLowerCase()) return _0x31ea49.defaultValue;
  }), _0x3be5e8(function (_0x544550) {
    return null == _0x544550.getAttribute('disabled');
  }) || _0x3744c9('checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', function (_0x3f246e, _0x4ab02a, _0x48f29d) {
    var _0x5e363d;
    if (!_0x48f29d) return !0x0 === _0x3f246e[_0x4ab02a] ? _0x4ab02a.toLowerCase() : (_0x5e363d = _0x3f246e.getAttributeNode(_0x4ab02a)) && _0x5e363d.specified ? _0x5e363d.value : null;
  }), _0x1866a3), _0xec6372.find = _0xf536f7, _0xec6372.expr = _0xf536f7.selectors, _0xec6372.expr[':'] = _0xec6372.expr.pseudos, _0xec6372.uniqueSort = _0xec6372.unique = _0xf536f7.uniqueSort, _0xec6372.text = _0xf536f7.getText, _0xec6372.isXMLDoc = _0xf536f7.isXML, _0xec6372.contains = _0xf536f7.contains, _0xec6372.escapeSelector = _0xf536f7.escape;
  var _0x1e76e1 = function (_0x1ee768, _0x546302, _0x4154ce) {
      for (var _0x23454b = [], _0x13c0f2 = void 0x0 !== _0x4154ce; (_0x1ee768 = _0x1ee768[_0x546302]) && 0x9 !== _0x1ee768.nodeType;) if (0x1 === _0x1ee768.nodeType) {
        if (_0x13c0f2 && _0xec6372(_0x1ee768).is(_0x4154ce)) break;
        _0x23454b.push(_0x1ee768);
      }
      return _0x23454b;
    },
    _0x1e1738 = function (_0x3f5b06, _0x33cf46) {
      for (var _0x378d2d = []; _0x3f5b06; _0x3f5b06 = _0x3f5b06.nextSibling) 0x1 === _0x3f5b06.nodeType && _0x3f5b06 !== _0x33cf46 && _0x378d2d.push(_0x3f5b06);
      return _0x378d2d;
    },
    _0x4f1f9e = _0xec6372.expr.match.needsContext,
    _0x288129 = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    _0x2441c8 = /^.[^:#\[\.,]*$/;
  _0xec6372.filter = function (_0x58b9af, _0x57a359, _0x4490c2) {
    var _0x2ea00a = _0x57a359[0x0];
    return _0x4490c2 && (_0x58b9af = ':not(' + _0x58b9af + ')'), 0x1 === _0x57a359.length && 0x1 === _0x2ea00a.nodeType ? _0xec6372.find.matchesSelector(_0x2ea00a, _0x58b9af) ? [_0x2ea00a] : [] : _0xec6372.find.matches(_0x58b9af, _0xec6372.grep(_0x57a359, function (_0x186961) {
      return 0x1 === _0x186961.nodeType;
    }));
  }, _0xec6372.fn.extend({
    'find': function (_0x5a410e) {
      var _0x5e5e2a,
        _0x458e0c,
        _0x5d92fb = this.length,
        _0x21d416 = this;
      if ('string' != typeof _0x5a410e) return this.pushStack(_0xec6372(_0x5a410e).filter(function () {
        for (_0x5e5e2a = 0x0; _0x5e5e2a < _0x5d92fb; _0x5e5e2a++) if (_0xec6372.contains(_0x21d416[_0x5e5e2a], this)) return !0x0;
      }));
      _0x458e0c = this.pushStack([]);
      for (_0x5e5e2a = 0x0; _0x5e5e2a < _0x5d92fb; _0x5e5e2a++) _0xec6372.find(_0x5a410e, _0x21d416[_0x5e5e2a], _0x458e0c);
      return 0x1 < _0x5d92fb ? _0xec6372.uniqueSort(_0x458e0c) : _0x458e0c;
    },
    'filter': function (_0x2b9ca8) {
      return this.pushStack(_0x99998f(this, _0x2b9ca8 || [], !0x1));
    },
    'not': function (_0x36c6d6) {
      return this.pushStack(_0x99998f(this, _0x36c6d6 || [], !0x0));
    },
    'is': function (_0x3ffad1) {
      return !!_0x99998f(this, 'string' == typeof _0x3ffad1 && _0x4f1f9e.test(_0x3ffad1) ? _0xec6372(_0x3ffad1) : _0x3ffad1 || [], !0x1).length;
    }
  });
  var _0xd97993,
    _0x2b9348 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (_0xec6372.fn.init = function (_0x4814b4, _0x434cf2, _0x46d8b0) {
    var _0x138af2, _0x467d2d;
    if (!_0x4814b4) return this;
    if (_0x46d8b0 = _0x46d8b0 || _0xd97993, 'string' == typeof _0x4814b4) {
      if (_0x138af2 = '<' === _0x4814b4[0x0] && '>' === _0x4814b4[_0x4814b4.length - 0x1] && 0x3 <= _0x4814b4.length ? [null, _0x4814b4, null] : _0x2b9348.exec(_0x4814b4), !_0x138af2 || !_0x138af2[0x1] && _0x434cf2) return !_0x434cf2 || _0x434cf2.jquery ? (_0x434cf2 || _0x46d8b0).find(_0x4814b4) : this.constructor(_0x434cf2).find(_0x4814b4);
      if (_0x138af2[0x1]) {
        if (_0x434cf2 = _0x434cf2 instanceof _0xec6372 ? _0x434cf2[0x0] : _0x434cf2, _0xec6372.merge(this, _0xec6372.parseHTML(_0x138af2[0x1], _0x434cf2 && _0x434cf2.nodeType ? _0x434cf2.ownerDocument || _0x434cf2 : _0x35e050, !0x0)), _0x288129.test(_0x138af2[0x1]) && _0xec6372.isPlainObject(_0x434cf2)) {
          for (_0x138af2 in _0x434cf2) _0xec6372.isFunction(this[_0x138af2]) ? this[_0x138af2](_0x434cf2[_0x138af2]) : this.attr(_0x138af2, _0x434cf2[_0x138af2]);
        }
        return this;
      }
      return _0x467d2d = _0x35e050.getElementById(_0x138af2[0x2]), _0x467d2d && (this[0x0] = _0x467d2d, this.length = 0x1), this;
    }
    return _0x4814b4.nodeType ? (this[0x0] = _0x4814b4, this.length = 0x1, this) : _0xec6372.isFunction(_0x4814b4) ? void 0x0 !== _0x46d8b0.ready ? _0x46d8b0.ready(_0x4814b4) : _0x4814b4(_0xec6372) : _0xec6372.makeArray(_0x4814b4, this);
  }).prototype = _0xec6372.fn, _0xd97993 = _0xec6372(_0x35e050);
  var _0x1619ba = /^(?:parents|prev(?:Until|All))/,
    _0x221bd9 = {
      'children': !0x0,
      'contents': !0x0,
      'next': !0x0,
      'prev': !0x0
    };
  _0xec6372.fn.extend({
    'has': function (_0x52fb5b) {
      var _0x3589c2 = _0xec6372(_0x52fb5b, this),
        _0x10f5ea = _0x3589c2.length;
      return this.filter(function () {
        for (var _0x16822c = 0x0; _0x16822c < _0x10f5ea; _0x16822c++) if (_0xec6372.contains(this, _0x3589c2[_0x16822c])) return !0x0;
      });
    },
    'closest': function (_0x66f043, _0x1b6a11) {
      var _0x4f9c1f,
        _0x13b418 = 0x0,
        _0x4ef051 = this.length,
        _0x150fe5 = [],
        _0x509f78 = 'string' != typeof _0x66f043 && _0xec6372(_0x66f043);
      if (!_0x4f1f9e.test(_0x66f043)) {
        for (; _0x13b418 < _0x4ef051; _0x13b418++) for (_0x4f9c1f = this[_0x13b418]; _0x4f9c1f && _0x4f9c1f !== _0x1b6a11; _0x4f9c1f = _0x4f9c1f.parentNode) if (0xb > _0x4f9c1f.nodeType && (_0x509f78 ? -0x1 < _0x509f78.index(_0x4f9c1f) : 0x1 === _0x4f9c1f.nodeType && _0xec6372.find.matchesSelector(_0x4f9c1f, _0x66f043))) {
          _0x150fe5.push(_0x4f9c1f);
          break;
        }
      }
      return this.pushStack(0x1 < _0x150fe5.length ? _0xec6372.uniqueSort(_0x150fe5) : _0x150fe5);
    },
    'index': function (_0x363ef3) {
      return _0x363ef3 ? 'string' == typeof _0x363ef3 ? _0xabb96e.call(_0xec6372(_0x363ef3), this[0x0]) : _0xabb96e.call(this, _0x363ef3.jquery ? _0x363ef3[0x0] : _0x363ef3) : this[0x0] && this[0x0].parentNode ? this.first().prevAll().length : -0x1;
    },
    'add': function (_0xdf8aa, _0x31ba93) {
      return this.pushStack(_0xec6372.uniqueSort(_0xec6372.merge(this.get(), _0xec6372(_0xdf8aa, _0x31ba93))));
    },
    'addBack': function (_0x5d154d) {
      return this.add(null == _0x5d154d ? this.prevObject : this.prevObject.filter(_0x5d154d));
    }
  }), _0xec6372.each({
    'parent': function (_0x3f812b) {
      return (_0x3f812b = _0x3f812b.parentNode) && 0xb !== _0x3f812b.nodeType ? _0x3f812b : null;
    },
    'parents': function (_0x3f6ea5) {
      return _0x1e76e1(_0x3f6ea5, 'parentNode');
    },
    'parentsUntil': function (_0xb26bb, _0x52ea15, _0x558f96) {
      return _0x1e76e1(_0xb26bb, 'parentNode', _0x558f96);
    },
    'next': function (_0x553778) {
      return _0x448b57(_0x553778, 'nextSibling');
    },
    'prev': function (_0x2b85f9) {
      return _0x448b57(_0x2b85f9, 'previousSibling');
    },
    'nextAll': function (_0x91d788) {
      return _0x1e76e1(_0x91d788, 'nextSibling');
    },
    'prevAll': function (_0x1f045a) {
      return _0x1e76e1(_0x1f045a, 'previousSibling');
    },
    'nextUntil': function (_0x588798, _0x45645e, _0x594a0b) {
      return _0x1e76e1(_0x588798, 'nextSibling', _0x594a0b);
    },
    'prevUntil': function (_0x13a85f, _0x1229b8, _0x276c29) {
      return _0x1e76e1(_0x13a85f, 'previousSibling', _0x276c29);
    },
    'siblings': function (_0x4a65e0) {
      return _0x1e1738((_0x4a65e0.parentNode || {}).firstChild, _0x4a65e0);
    },
    'children': function (_0x501399) {
      return _0x1e1738(_0x501399.firstChild);
    },
    'contents': function (_0x36b31d) {
      return _0xa2643(_0x36b31d, 'iframe') ? _0x36b31d.contentDocument : (_0xa2643(_0x36b31d, 'template') && (_0x36b31d = _0x36b31d.content || _0x36b31d), _0xec6372.merge([], _0x36b31d.childNodes));
    }
  }, function (_0x1c9d03, _0x4e9395) {
    _0xec6372.fn[_0x1c9d03] = function (_0x437109, _0x3873c4) {
      var _0x157169 = _0xec6372.map(this, _0x4e9395, _0x437109);
      return 'Until' !== _0x1c9d03.slice(-0x5) && (_0x3873c4 = _0x437109), _0x3873c4 && 'string' == typeof _0x3873c4 && (_0x157169 = _0xec6372.filter(_0x3873c4, _0x157169)), 0x1 < this.length && (_0x221bd9[_0x1c9d03] || _0xec6372.uniqueSort(_0x157169), _0x1619ba.test(_0x1c9d03) && _0x157169.reverse()), this.pushStack(_0x157169);
    };
  });
  var _0x55cd20 = /[^\x20\t\r\n\f]+/g;
  _0xec6372.Callbacks = function (_0x5bcd4b) {
    var _0x83ceb1;
    if ('string' == typeof _0x5bcd4b) {
      var _0x24f4f5 = {};
      _0x83ceb1 = (_0xec6372.each(_0x5bcd4b.match(_0x55cd20) || [], function (_0x9b3298, _0x14f3b5) {
        _0x24f4f5[_0x14f3b5] = !0x0;
      }), _0x24f4f5);
    } else _0x83ceb1 = _0xec6372.extend({}, _0x5bcd4b);
    _0x5bcd4b = _0x83ceb1;
    var _0x4ecf1f,
      _0x245e21,
      _0x485318,
      _0x29f3ca,
      _0x7f305c = [],
      _0x128bd2 = [],
      _0x5a5f9d = -0x1,
      _0xb05625 = function () {
        _0x29f3ca = _0x29f3ca || _0x5bcd4b.once;
        for (_0x485318 = _0x4ecf1f = !0x0; _0x128bd2.length; _0x5a5f9d = -0x1) for (_0x245e21 = _0x128bd2.shift(); ++_0x5a5f9d < _0x7f305c.length;) !0x1 === _0x7f305c[_0x5a5f9d].apply(_0x245e21[0x0], _0x245e21[0x1]) && _0x5bcd4b.stopOnFalse && (_0x5a5f9d = _0x7f305c.length, _0x245e21 = !0x1);
        _0x5bcd4b.memory || (_0x245e21 = !0x1), _0x4ecf1f = !0x1, _0x29f3ca && (_0x7f305c = _0x245e21 ? [] : '');
      },
      _0x1ce6cf = {
        'add': function () {
          return _0x7f305c && (_0x245e21 && !_0x4ecf1f && (_0x5a5f9d = _0x7f305c.length - 0x1, _0x128bd2.push(_0x245e21)), function _0x554516(_0x2f49c1) {
            _0xec6372.each(_0x2f49c1, function (_0x403915, _0x2b6af6) {
              _0xec6372.isFunction(_0x2b6af6) ? _0x5bcd4b.unique && _0x1ce6cf.has(_0x2b6af6) || _0x7f305c.push(_0x2b6af6) : _0x2b6af6 && _0x2b6af6.length && 'string' !== _0xec6372.type(_0x2b6af6) && _0x554516(_0x2b6af6);
            });
          }(arguments), _0x245e21 && !_0x4ecf1f && _0xb05625()), this;
        },
        'remove': function () {
          return _0xec6372.each(arguments, function (_0x1fda93, _0x1c5e3d) {
            for (var _0x2c6352; -0x1 < (_0x2c6352 = _0xec6372.inArray(_0x1c5e3d, _0x7f305c, _0x2c6352));) _0x7f305c.splice(_0x2c6352, 0x1), _0x2c6352 <= _0x5a5f9d && _0x5a5f9d--;
          }), this;
        },
        'has': function (_0x489732) {
          return _0x489732 ? -0x1 < _0xec6372.inArray(_0x489732, _0x7f305c) : 0x0 < _0x7f305c.length;
        },
        'empty': function () {
          return _0x7f305c && (_0x7f305c = []), this;
        },
        'disable': function () {
          return _0x29f3ca = _0x128bd2 = [], _0x7f305c = _0x245e21 = '', this;
        },
        'disabled': function () {
          return !_0x7f305c;
        },
        'lock': function () {
          return _0x29f3ca = _0x128bd2 = [], _0x245e21 || _0x4ecf1f || (_0x7f305c = _0x245e21 = ''), this;
        },
        'locked': function () {
          return !!_0x29f3ca;
        },
        'fireWith': function (_0x55c557, _0x5221f1) {
          return _0x29f3ca || (_0x5221f1 = _0x5221f1 || [], _0x5221f1 = [_0x55c557, _0x5221f1.slice ? _0x5221f1.slice() : _0x5221f1], _0x128bd2.push(_0x5221f1), _0x4ecf1f || _0xb05625()), this;
        },
        'fire': function () {
          return _0x1ce6cf.fireWith(this, arguments), this;
        },
        'fired': function () {
          return !!_0x485318;
        }
      };
    return _0x1ce6cf;
  }, _0xec6372.extend({
    'Deferred': function (_0x52839f) {
      var _0x24cbe5 = [['notify', 'progress', _0xec6372.Callbacks('memory'), _0xec6372.Callbacks('memory'), 0x2], ['resolve', 'done', _0xec6372.Callbacks("once memory"), _0xec6372.Callbacks("once memory"), 0x0, 'resolved'], ['reject', 'fail', _0xec6372.Callbacks("once memory"), _0xec6372.Callbacks("once memory"), 0x1, 'rejected']],
        _0x15884f = 'pending',
        _0x29c14d = {
          'state': function () {
            return _0x15884f;
          },
          'always': function () {
            return _0x280a4e.done(arguments).fail(arguments), this;
          },
          'catch': function (_0x377231) {
            return _0x29c14d.then(null, _0x377231);
          },
          'pipe': function () {
            var _0x21e9d5 = arguments;
            return _0xec6372.Deferred(function (_0x60dbdf) {
              _0xec6372.each(_0x24cbe5, function (_0x2ed3cb, _0x42bf8c) {
                var _0x564d3c = _0xec6372.isFunction(_0x21e9d5[_0x42bf8c[0x4]]) && _0x21e9d5[_0x42bf8c[0x4]];
                _0x280a4e[_0x42bf8c[0x1]](function () {
                  var _0x4652e3 = _0x564d3c && _0x564d3c.apply(this, arguments);
                  _0x4652e3 && _0xec6372.isFunction(_0x4652e3.promise) ? _0x4652e3.promise().progress(_0x60dbdf.notify).done(_0x60dbdf.resolve).fail(_0x60dbdf.reject) : _0x60dbdf[_0x42bf8c[0x0] + 'With'](this, _0x564d3c ? [_0x4652e3] : arguments);
                });
              }), _0x21e9d5 = null;
            }).promise();
          },
          'then': function (_0x1dbc77, _0x3dd3b0, _0xcbeb2) {
            function _0x4557cf(_0x5e213f, _0x370445, _0x280883, _0xacd38f) {
              return function () {
                var _0x567a7d = this,
                  _0x599d05 = arguments,
                  _0x4f9934 = function () {
                    var _0x172daa, _0x4da20e;
                    if (!(_0x5e213f < _0x19ff34)) {
                      if (_0x172daa = _0x280883.apply(_0x567a7d, _0x599d05), _0x172daa === _0x370445.promise()) throw new TypeError("Thenable self-resolution");
                      _0x4da20e = _0x172daa && ('object' == typeof _0x172daa || 'function' == typeof _0x172daa) && _0x172daa.then, _0xec6372.isFunction(_0x4da20e) ? _0xacd38f ? _0x4da20e.call(_0x172daa, _0x4557cf(_0x19ff34, _0x370445, _0x4b70f2, _0xacd38f), _0x4557cf(_0x19ff34, _0x370445, _0x59df50, _0xacd38f)) : (_0x19ff34++, _0x4da20e.call(_0x172daa, _0x4557cf(_0x19ff34, _0x370445, _0x4b70f2, _0xacd38f), _0x4557cf(_0x19ff34, _0x370445, _0x59df50, _0xacd38f), _0x4557cf(_0x19ff34, _0x370445, _0x4b70f2, _0x370445.notifyWith))) : (_0x280883 !== _0x4b70f2 && (_0x567a7d = void 0x0, _0x599d05 = [_0x172daa]), (_0xacd38f || _0x370445.resolveWith)(_0x567a7d, _0x599d05));
                    }
                  },
                  _0x30cfa5 = _0xacd38f ? _0x4f9934 : function () {
                    try {
                      _0x4f9934();
                    } catch (_0xf4d3d) {
                      _0xec6372.Deferred.exceptionHook && _0xec6372.Deferred.exceptionHook(_0xf4d3d, _0x30cfa5.stackTrace), _0x5e213f + 0x1 >= _0x19ff34 && (_0x280883 !== _0x59df50 && (_0x567a7d = void 0x0, _0x599d05 = [_0xf4d3d]), _0x370445.rejectWith(_0x567a7d, _0x599d05));
                    }
                  };
                _0x5e213f ? _0x30cfa5() : (_0xec6372.Deferred.getStackHook && (_0x30cfa5.stackTrace = _0xec6372.Deferred.getStackHook()), _0x30aa88.setTimeout(_0x30cfa5));
              };
            }
            var _0x19ff34 = 0x0;
            return _0xec6372.Deferred(function (_0x2bbf6e) {
              _0x24cbe5[0x0][0x3].add(_0x4557cf(0x0, _0x2bbf6e, _0xec6372.isFunction(_0xcbeb2) ? _0xcbeb2 : _0x4b70f2, _0x2bbf6e.notifyWith)), _0x24cbe5[0x1][0x3].add(_0x4557cf(0x0, _0x2bbf6e, _0xec6372.isFunction(_0x1dbc77) ? _0x1dbc77 : _0x4b70f2)), _0x24cbe5[0x2][0x3].add(_0x4557cf(0x0, _0x2bbf6e, _0xec6372.isFunction(_0x3dd3b0) ? _0x3dd3b0 : _0x59df50));
            }).promise();
          },
          'promise': function (_0x2f9e8b) {
            return null != _0x2f9e8b ? _0xec6372.extend(_0x2f9e8b, _0x29c14d) : _0x29c14d;
          }
        },
        _0x280a4e = {};
      return _0xec6372.each(_0x24cbe5, function (_0x3a8223, _0x1fcee5) {
        var _0x24ad8f = _0x1fcee5[0x2],
          _0x1865ac = _0x1fcee5[0x5];
        _0x29c14d[_0x1fcee5[0x1]] = _0x24ad8f.add, _0x1865ac && _0x24ad8f.add(function () {
          _0x15884f = _0x1865ac;
        }, _0x24cbe5[0x3 - _0x3a8223][0x2].disable, _0x24cbe5[0x0][0x2].lock), _0x24ad8f.add(_0x1fcee5[0x3].fire), _0x280a4e[_0x1fcee5[0x0]] = function () {
          return _0x280a4e[_0x1fcee5[0x0] + 'With'](this === _0x280a4e ? void 0x0 : this, arguments), this;
        }, _0x280a4e[_0x1fcee5[0x0] + 'With'] = _0x24ad8f.fireWith;
      }), _0x29c14d.promise(_0x280a4e), _0x52839f && _0x52839f.call(_0x280a4e, _0x280a4e), _0x280a4e;
    },
    'when': function (_0x493cec) {
      var _0x146124 = arguments.length,
        _0x45cc85 = _0x146124,
        _0x303ce3 = Array(_0x45cc85),
        _0x2c558e = _0x25af69.call(arguments),
        _0x1bd6d3 = _0xec6372.Deferred(),
        _0xa607d1 = function (_0x15ede5) {
          return function (_0x3e4498) {
            _0x303ce3[_0x15ede5] = this, _0x2c558e[_0x15ede5] = 0x1 < arguments.length ? _0x25af69.call(arguments) : _0x3e4498, --_0x146124 || _0x1bd6d3.resolveWith(_0x303ce3, _0x2c558e);
          };
        };
      if (0x1 >= _0x146124 && (_0x13e07f(_0x493cec, _0x1bd6d3.done(_0xa607d1(_0x45cc85)).resolve, _0x1bd6d3.reject, !_0x146124), 'pending' === _0x1bd6d3.state() || _0xec6372.isFunction(_0x2c558e[_0x45cc85] && _0x2c558e[_0x45cc85].then))) return _0x1bd6d3.then();
      for (; _0x45cc85--;) _0x13e07f(_0x2c558e[_0x45cc85], _0xa607d1(_0x45cc85), _0x1bd6d3.reject);
      return _0x1bd6d3.promise();
    }
  });
  var _0x38f63f = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  _0xec6372.Deferred.exceptionHook = function (_0x1b278e, _0xc10af6) {
    _0x30aa88.console && _0x30aa88.console.warn && _0x1b278e && _0x38f63f.test(_0x1b278e.name) && _0x30aa88.console.warn("jQuery.Deferred exception: " + _0x1b278e.message, _0x1b278e.stack, _0xc10af6);
  }, _0xec6372.readyException = function (_0x169d68) {
    _0x30aa88.setTimeout(function () {
      throw _0x169d68;
    });
  };
  var _0x1229fc = _0xec6372.Deferred();
  _0xec6372.fn.ready = function (_0x4e5a4a) {
    return _0x1229fc.then(_0x4e5a4a)['catch'](function (_0x27b6af) {
      _0xec6372.readyException(_0x27b6af);
    }), this;
  }, _0xec6372.extend({
    'isReady': !0x1,
    'readyWait': 0x1,
    'ready': function (_0x40d1f9) {
      (!0x0 === _0x40d1f9 ? --_0xec6372.readyWait : _0xec6372.isReady) || (_0xec6372.isReady = !0x0, !0x0 !== _0x40d1f9 && 0x0 < --_0xec6372.readyWait || _0x1229fc.resolveWith(_0x35e050, [_0xec6372]));
    }
  }), _0xec6372.ready.then = _0x1229fc.then, 'complete' === _0x35e050.readyState || 'loading' !== _0x35e050.readyState && !_0x35e050.documentElement.doScroll ? _0x30aa88.setTimeout(_0xec6372.ready) : (_0x35e050.addEventListener('DOMContentLoaded', _0x3843f2), _0x30aa88.addEventListener('load', _0x3843f2));
  var _0x586365 = function (_0x282058, _0x379186, _0x54a1fc, _0x24fe79, _0x6e9b7e, _0x59e633, _0x367bef) {
      var _0x63c879 = 0x0,
        _0x51dde6 = _0x282058.length,
        _0x4f685b = null == _0x54a1fc;
      if ('object' === _0xec6372.type(_0x54a1fc)) {
        for (_0x63c879 in _0x6e9b7e = !0x0, _0x54a1fc) _0x586365(_0x282058, _0x379186, _0x63c879, _0x54a1fc[_0x63c879], !0x0, _0x59e633, _0x367bef);
      } else {
        if (void 0x0 !== _0x24fe79 && (_0x6e9b7e = !0x0, _0xec6372.isFunction(_0x24fe79) || (_0x367bef = !0x0), _0x4f685b && (_0x367bef ? (_0x379186.call(_0x282058, _0x24fe79), _0x379186 = null) : (_0x4f685b = _0x379186, _0x379186 = function (_0x4fc5ea, _0x259273, _0x599fe6) {
          return _0x4f685b.call(_0xec6372(_0x4fc5ea), _0x599fe6);
        })), _0x379186)) {
          for (; _0x63c879 < _0x51dde6; _0x63c879++) _0x379186(_0x282058[_0x63c879], _0x54a1fc, _0x367bef ? _0x24fe79 : _0x24fe79.call(_0x282058[_0x63c879], _0x63c879, _0x379186(_0x282058[_0x63c879], _0x54a1fc)));
        }
      }
      return _0x6e9b7e ? _0x282058 : _0x4f685b ? _0x379186.call(_0x282058) : _0x51dde6 ? _0x379186(_0x282058[0x0], _0x54a1fc) : _0x59e633;
    },
    _0x25a055 = function (_0x16c91f) {
      return 0x1 === _0x16c91f.nodeType || 0x9 === _0x16c91f.nodeType || !+_0x16c91f.nodeType;
    };
  _0x21f933.uid = 0x1, _0x21f933.prototype = {
    'cache': function (_0x4db426) {
      var _0xc45c01 = _0x4db426[this.expando];
      return _0xc45c01 || (_0xc45c01 = {}, _0x25a055(_0x4db426) && (_0x4db426.nodeType ? _0x4db426[this.expando] = _0xc45c01 : Object.defineProperty(_0x4db426, this.expando, {
        'value': _0xc45c01,
        'configurable': !0x0
      }))), _0xc45c01;
    },
    'set': function (_0x1f7154, _0x56c1fe, _0x551569) {
      var _0xe63cc0;
      _0x1f7154 = this.cache(_0x1f7154);
      if ('string' == typeof _0x56c1fe) _0x1f7154[_0xec6372.camelCase(_0x56c1fe)] = _0x551569;else {
        for (_0xe63cc0 in _0x56c1fe) _0x1f7154[_0xec6372.camelCase(_0xe63cc0)] = _0x56c1fe[_0xe63cc0];
      }
      return _0x1f7154;
    },
    'get': function (_0x932091, _0x233b63) {
      return void 0x0 === _0x233b63 ? this.cache(_0x932091) : _0x932091[this.expando] && _0x932091[this.expando][_0xec6372.camelCase(_0x233b63)];
    },
    'access': function (_0xf62794, _0x5e7994, _0xe0a1de) {
      return void 0x0 === _0x5e7994 || _0x5e7994 && 'string' == typeof _0x5e7994 && void 0x0 === _0xe0a1de ? this.get(_0xf62794, _0x5e7994) : (this.set(_0xf62794, _0x5e7994, _0xe0a1de), void 0x0 !== _0xe0a1de ? _0xe0a1de : _0x5e7994);
    },
    'remove': function (_0x566822, _0x2ed001) {
      var _0x563aee,
        _0x5bc7c4 = _0x566822[this.expando];
      if (void 0x0 !== _0x5bc7c4) {
        if (void 0x0 !== _0x2ed001) {
          Array.isArray(_0x2ed001) ? _0x2ed001 = _0x2ed001.map(_0xec6372.camelCase) : (_0x2ed001 = _0xec6372.camelCase(_0x2ed001), _0x2ed001 = _0x2ed001 in _0x5bc7c4 ? [_0x2ed001] : _0x2ed001.match(_0x55cd20) || []);
          for (_0x563aee = _0x2ed001.length; _0x563aee--;) delete _0x5bc7c4[_0x2ed001[_0x563aee]];
        }
        (void 0x0 === _0x2ed001 || _0xec6372.isEmptyObject(_0x5bc7c4)) && (_0x566822.nodeType ? _0x566822[this.expando] = void 0x0 : delete _0x566822[this.expando]);
      }
    },
    'hasData': function (_0x50f30b) {
      return _0x50f30b = _0x50f30b[this.expando], void 0x0 !== _0x50f30b && !_0xec6372.isEmptyObject(_0x50f30b);
    }
  };
  var _0x254586 = new _0x21f933(),
    _0x4f7e80 = new _0x21f933(),
    _0xf25850 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    _0x34664a = /[A-Z]/g;
  _0xec6372.extend({
    'hasData': function (_0x4f9e68) {
      return _0x4f7e80.hasData(_0x4f9e68) || _0x254586.hasData(_0x4f9e68);
    },
    'data': function (_0x58119d, _0x323c11, _0x213a81) {
      return _0x4f7e80.access(_0x58119d, _0x323c11, _0x213a81);
    },
    'removeData': function (_0xfdf007, _0x204e29) {
      _0x4f7e80.remove(_0xfdf007, _0x204e29);
    },
    '_data': function (_0x4bd1ea, _0x1fd94e, _0xde3c97) {
      return _0x254586.access(_0x4bd1ea, _0x1fd94e, _0xde3c97);
    },
    '_removeData': function (_0x535559, _0xdd6a71) {
      _0x254586.remove(_0x535559, _0xdd6a71);
    }
  }), _0xec6372.fn.extend({
    'data': function (_0x2317cd, _0x4ea9c0) {
      var _0x38bdd0,
        _0x24cd35,
        _0xc1a35c,
        _0x5405b8 = this[0x0],
        _0x2aabc2 = _0x5405b8 && _0x5405b8.attributes;
      if (void 0x0 === _0x2317cd) {
        if (this.length && (_0xc1a35c = _0x4f7e80.get(_0x5405b8), 0x1 === _0x5405b8.nodeType && !_0x254586.get(_0x5405b8, 'hasDataAttrs'))) {
          for (_0x38bdd0 = _0x2aabc2.length; _0x38bdd0--;) _0x2aabc2[_0x38bdd0] && (_0x24cd35 = _0x2aabc2[_0x38bdd0].name, 0x0 === _0x24cd35.indexOf('data-') && (_0x24cd35 = _0xec6372.camelCase(_0x24cd35.slice(0x5)), _0x50c285(_0x5405b8, _0x24cd35, _0xc1a35c[_0x24cd35])));
          _0x254586.set(_0x5405b8, 'hasDataAttrs', !0x0);
        }
        return _0xc1a35c;
      }
      return 'object' == typeof _0x2317cd ? this.each(function () {
        _0x4f7e80.set(this, _0x2317cd);
      }) : _0x586365(this, function (_0x13eed8) {
        var _0x7848c;
        if (_0x5405b8 && void 0x0 === _0x13eed8) {
          if ((_0x7848c = _0x4f7e80.get(_0x5405b8, _0x2317cd), void 0x0 !== _0x7848c) || (_0x7848c = _0x50c285(_0x5405b8, _0x2317cd), void 0x0 !== _0x7848c)) return _0x7848c;
        } else this.each(function () {
          _0x4f7e80.set(this, _0x2317cd, _0x13eed8);
        });
      }, null, _0x4ea9c0, 0x1 < arguments.length, null, !0x0);
    },
    'removeData': function (_0xfb6faf) {
      return this.each(function () {
        _0x4f7e80.remove(this, _0xfb6faf);
      });
    }
  }), _0xec6372.extend({
    'queue': function (_0x5523bc, _0x57a7db, _0x47efc8) {
      var _0x3bde0d;
      if (_0x5523bc) return _0x57a7db = (_0x57a7db || 'fx') + 'queue', _0x3bde0d = _0x254586.get(_0x5523bc, _0x57a7db), _0x47efc8 && (!_0x3bde0d || Array.isArray(_0x47efc8) ? _0x3bde0d = _0x254586.access(_0x5523bc, _0x57a7db, _0xec6372.makeArray(_0x47efc8)) : _0x3bde0d.push(_0x47efc8)), _0x3bde0d || [];
    },
    'dequeue': function (_0x3438a8, _0x2506a1) {
      _0x2506a1 = _0x2506a1 || 'fx';
      var _0x35441d = _0xec6372.queue(_0x3438a8, _0x2506a1),
        _0x4b3c4d = _0x35441d.length,
        _0x24e5ea = _0x35441d.shift(),
        _0x507f1b = _0xec6372._queueHooks(_0x3438a8, _0x2506a1),
        _0x7c6901 = function () {
          _0xec6372.dequeue(_0x3438a8, _0x2506a1);
        };
      'inprogress' === _0x24e5ea && (_0x24e5ea = _0x35441d.shift(), _0x4b3c4d--), _0x24e5ea && ('fx' === _0x2506a1 && _0x35441d.unshift('inprogress'), delete _0x507f1b.stop, _0x24e5ea.call(_0x3438a8, _0x7c6901, _0x507f1b)), !_0x4b3c4d && _0x507f1b && _0x507f1b.empty.fire();
    },
    '_queueHooks': function (_0x1b3ad4, _0x3f6433) {
      var _0x434dee = _0x3f6433 + 'queueHooks';
      return _0x254586.get(_0x1b3ad4, _0x434dee) || _0x254586.access(_0x1b3ad4, _0x434dee, {
        'empty': _0xec6372.Callbacks("once memory").add(function () {
          _0x254586.remove(_0x1b3ad4, [_0x3f6433 + 'queue', _0x434dee]);
        })
      });
    }
  }), _0xec6372.fn.extend({
    'queue': function (_0x3ce9eb, _0x2a71b5) {
      var _0x4d4914 = 0x2;
      return 'string' != typeof _0x3ce9eb && (_0x2a71b5 = _0x3ce9eb, _0x3ce9eb = 'fx', _0x4d4914--), arguments.length < _0x4d4914 ? _0xec6372.queue(this[0x0], _0x3ce9eb) : void 0x0 === _0x2a71b5 ? this : this.each(function () {
        var _0x3830d9 = _0xec6372.queue(this, _0x3ce9eb, _0x2a71b5);
        _0xec6372._queueHooks(this, _0x3ce9eb), 'fx' === _0x3ce9eb && 'inprogress' !== _0x3830d9[0x0] && _0xec6372.dequeue(this, _0x3ce9eb);
      });
    },
    'dequeue': function (_0x109420) {
      return this.each(function () {
        _0xec6372.dequeue(this, _0x109420);
      });
    },
    'clearQueue': function (_0x5a6a81) {
      return this.queue(_0x5a6a81 || 'fx', []);
    },
    'promise': function (_0x3659c8, _0x4be830) {
      var _0x58305a,
        _0x5be5d0 = 0x1,
        _0x2df6c6 = _0xec6372.Deferred(),
        _0x4fa786 = this,
        _0x50454c = this.length,
        _0x1612bd = function () {
          --_0x5be5d0 || _0x2df6c6.resolveWith(_0x4fa786, [_0x4fa786]);
        };
      'string' != typeof _0x3659c8 && (_0x4be830 = _0x3659c8, _0x3659c8 = void 0x0);
      for (_0x3659c8 = _0x3659c8 || 'fx'; _0x50454c--;) (_0x58305a = _0x254586.get(_0x4fa786[_0x50454c], _0x3659c8 + 'queueHooks')) && _0x58305a.empty && (_0x5be5d0++, _0x58305a.empty.add(_0x1612bd));
      return _0x1612bd(), _0x2df6c6.promise(_0x4be830);
    }
  });
  var _0x1a2374 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    _0x111f46 = RegExp('^(?:([+-])=|)(' + _0x1a2374 + ')([a-z%]*)$', 'i'),
    _0x4d6f41 = ['Top', 'Right', 'Bottom', 'Left'],
    _0x107752 = function (_0x167b73, _0x20c355) {
      return _0x167b73 = _0x20c355 || _0x167b73, 'none' === _0x167b73.style.display || '' === _0x167b73.style.display && _0xec6372.contains(_0x167b73.ownerDocument, _0x167b73) && 'none' === _0xec6372.css(_0x167b73, 'display');
    },
    _0x5f4eed = function (_0x2c59b1, _0x439479, _0xad7341, _0x5e5b50) {
      var _0x3515cb,
        _0xb8271 = {};
      for (_0x3515cb in _0x439479) _0xb8271[_0x3515cb] = _0x2c59b1.style[_0x3515cb], _0x2c59b1.style[_0x3515cb] = _0x439479[_0x3515cb];
      _0xad7341 = _0xad7341.apply(_0x2c59b1, _0x5e5b50 || []);
      for (_0x3515cb in _0x439479) _0x2c59b1.style[_0x3515cb] = _0xb8271[_0x3515cb];
      return _0xad7341;
    },
    _0x5c1dde = {};
  _0xec6372.fn.extend({
    'show': function () {
      return _0x50d8ff(this, !0x0);
    },
    'hide': function () {
      return _0x50d8ff(this);
    },
    'toggle': function (_0x1cf6d9) {
      return 'boolean' == typeof _0x1cf6d9 ? _0x1cf6d9 ? this.show() : this.hide() : this.each(function () {
        _0x107752(this) ? _0xec6372(this).show() : _0xec6372(this).hide();
      });
    }
  });
  var _0x181ab7 = /^(?:checkbox|radio)$/i,
    _0x140809 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    _0x2493f7 = /^$|\/(?:java|ecma)script/i,
    _0x2c4b9e = {
      'option': [0x1, "<select multiple='multiple'>", '</select>'],
      'thead': [0x1, '<table>', '</table>'],
      'col': [0x2, '<table><colgroup>', '</colgroup></table>'],
      'tr': [0x2, '<table><tbody>', '</tbody></table>'],
      'td': [0x3, '<table><tbody><tr>', '</tr></tbody></table>'],
      '_default': [0x0, '', '']
    };
  _0x2c4b9e.optgroup = _0x2c4b9e.option, _0x2c4b9e.tbody = _0x2c4b9e.tfoot = _0x2c4b9e.colgroup = _0x2c4b9e.caption = _0x2c4b9e.thead, _0x2c4b9e.th = _0x2c4b9e.td;
  var _0x282dde = /<|&#?\w+;/,
    _0x2d876b = _0x35e050.createDocumentFragment().appendChild(_0x35e050.createElement('div')),
    _0xa3fc59 = _0x35e050.createElement('input');
  _0xa3fc59.setAttribute('type', 'radio'), _0xa3fc59.setAttribute('checked', 'checked'), _0xa3fc59.setAttribute('name', 't'), _0x2d876b.appendChild(_0xa3fc59), _0x566ba2.checkClone = _0x2d876b.cloneNode(!0x0).cloneNode(!0x0).lastChild.checked, _0x2d876b.innerHTML = '<textarea>x</textarea>', _0x566ba2.noCloneChecked = !!_0x2d876b.cloneNode(!0x0).lastChild.defaultValue, !0x0;
  var _0x44d4fc = _0x35e050.documentElement,
    _0x593875 = /^key/,
    _0xa54c9d = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    _0x5beb96 = /^([^.]*)(?:\.(.+)|)/;
  _0xec6372.event = {
    'global': {},
    'add': function (_0xc085cb, _0x254a8b, _0x3b2605, _0x255f2e, _0x48c6f2) {
      var _0x99bc67, _0x4ecd77, _0x3a0f13, _0x1d8211, _0x3b9086, _0x3b8448, _0x5bf8c6, _0x441469, _0x484a77, _0x131af4;
      if (_0x3b9086 = _0x254586.get(_0xc085cb)) {
        _0x3b2605.handler && (_0x99bc67 = _0x3b2605, _0x3b2605 = _0x99bc67.handler, _0x48c6f2 = _0x99bc67.selector), _0x48c6f2 && _0xec6372.find.matchesSelector(_0x44d4fc, _0x48c6f2), _0x3b2605.guid || (_0x3b2605.guid = _0xec6372.guid++), (_0x1d8211 = _0x3b9086.events) || (_0x1d8211 = _0x3b9086.events = {}), (_0x4ecd77 = _0x3b9086.handle) || (_0x4ecd77 = _0x3b9086.handle = function (_0x34d0f0) {
          return 'undefined' != typeof _0xec6372 && _0xec6372.event.triggered !== _0x34d0f0.type ? _0xec6372.event.dispatch.apply(_0xc085cb, arguments) : void 0x0;
        }), _0x254a8b = (_0x254a8b || '').match(_0x55cd20) || [''];
        for (_0x3b9086 = _0x254a8b.length; _0x3b9086--;) _0x3a0f13 = _0x5beb96.exec(_0x254a8b[_0x3b9086]) || [], _0x484a77 = _0x131af4 = _0x3a0f13[0x1], _0x3a0f13 = (_0x3a0f13[0x2] || '').split('.').sort(), _0x484a77 && (_0x5bf8c6 = _0xec6372.event.special[_0x484a77] || {}, _0x484a77 = (_0x48c6f2 ? _0x5bf8c6.delegateType : _0x5bf8c6.bindType) || _0x484a77, _0x5bf8c6 = _0xec6372.event.special[_0x484a77] || {}, _0x3b8448 = _0xec6372.extend({
          'type': _0x484a77,
          'origType': _0x131af4,
          'data': _0x255f2e,
          'handler': _0x3b2605,
          'guid': _0x3b2605.guid,
          'selector': _0x48c6f2,
          'needsContext': _0x48c6f2 && _0xec6372.expr.match.needsContext.test(_0x48c6f2),
          'namespace': _0x3a0f13.join('.')
        }, _0x99bc67), (_0x441469 = _0x1d8211[_0x484a77]) || (_0x441469 = _0x1d8211[_0x484a77] = [], _0x441469.delegateCount = 0x0, _0x5bf8c6.setup && !0x1 !== _0x5bf8c6.setup.call(_0xc085cb, _0x255f2e, _0x3a0f13, _0x4ecd77) || _0xc085cb.addEventListener && _0xc085cb.addEventListener(_0x484a77, _0x4ecd77)), _0x5bf8c6.add && (_0x5bf8c6.add.call(_0xc085cb, _0x3b8448), _0x3b8448.handler.guid || (_0x3b8448.handler.guid = _0x3b2605.guid)), _0x48c6f2 ? _0x441469.splice(_0x441469.delegateCount++, 0x0, _0x3b8448) : _0x441469.push(_0x3b8448), _0xec6372.event.global[_0x484a77] = !0x0);
      }
    },
    'remove': function (_0x5563df, _0x4e85a8, _0x2ca29d, _0x33593e, _0x1f8e1d) {
      var _0x157c32,
        _0x10656a,
        _0x2bc938,
        _0x450253,
        _0x237fe3,
        _0x5b927e,
        _0x3a9a69,
        _0x2cb6e8,
        _0xd792b5,
        _0x3a8c40,
        _0x4d0906,
        _0x1bdada = _0x254586.hasData(_0x5563df) && _0x254586.get(_0x5563df);
      if (_0x1bdada && (_0x450253 = _0x1bdada.events)) {
        _0x4e85a8 = (_0x4e85a8 || '').match(_0x55cd20) || [''];
        for (_0x237fe3 = _0x4e85a8.length; _0x237fe3--;) if (_0x2bc938 = _0x5beb96.exec(_0x4e85a8[_0x237fe3]) || [], _0xd792b5 = _0x4d0906 = _0x2bc938[0x1], _0x3a8c40 = (_0x2bc938[0x2] || '').split('.').sort(), _0xd792b5) {
          _0x3a9a69 = _0xec6372.event.special[_0xd792b5] || {}, _0xd792b5 = (_0x33593e ? _0x3a9a69.delegateType : _0x3a9a69.bindType) || _0xd792b5, _0x2cb6e8 = _0x450253[_0xd792b5] || [], _0x2bc938 = _0x2bc938[0x2] && RegExp("(^|\\.)" + _0x3a8c40.join("\\.(?:.*\\.|)") + "(\\.|$)");
          for (_0x10656a = _0x157c32 = _0x2cb6e8.length; _0x157c32--;) _0x5b927e = _0x2cb6e8[_0x157c32], !_0x1f8e1d && _0x4d0906 !== _0x5b927e.origType || _0x2ca29d && _0x2ca29d.guid !== _0x5b927e.guid || _0x2bc938 && !_0x2bc938.test(_0x5b927e.namespace) || _0x33593e && _0x33593e !== _0x5b927e.selector && ('**' !== _0x33593e || !_0x5b927e.selector) || (_0x2cb6e8.splice(_0x157c32, 0x1), _0x5b927e.selector && _0x2cb6e8.delegateCount--, _0x3a9a69.remove && _0x3a9a69.remove.call(_0x5563df, _0x5b927e));
          _0x10656a && !_0x2cb6e8.length && (_0x3a9a69.teardown && !0x1 !== _0x3a9a69.teardown.call(_0x5563df, _0x3a8c40, _0x1bdada.handle) || _0xec6372.removeEvent(_0x5563df, _0xd792b5, _0x1bdada.handle), delete _0x450253[_0xd792b5]);
        } else {
          for (_0xd792b5 in _0x450253) _0xec6372.event.remove(_0x5563df, _0xd792b5 + _0x4e85a8[_0x237fe3], _0x2ca29d, _0x33593e, !0x0);
        }
        _0xec6372.isEmptyObject(_0x450253) && _0x254586.remove(_0x5563df, "handle events");
      }
    },
    'dispatch': function (_0x2c51cd) {
      var _0xd0a118 = _0xec6372.event.fix(_0x2c51cd),
        _0x3c22d0,
        _0x294890,
        _0xa44f87,
        _0x3a28aa,
        _0x4dca6b,
        _0x589c25,
        _0x2e3c54 = Array(arguments.length);
      _0x294890 = (_0x254586.get(this, 'events') || {})[_0xd0a118.type] || [];
      var _0x341126 = _0xec6372.event.special[_0xd0a118.type] || {};
      _0x2e3c54[0x0] = _0xd0a118;
      for (_0x3c22d0 = 0x1; _0x3c22d0 < arguments.length; _0x3c22d0++) _0x2e3c54[_0x3c22d0] = arguments[_0x3c22d0];
      if (_0xd0a118.delegateTarget = this, !_0x341126.preDispatch || !0x1 !== _0x341126.preDispatch.call(this, _0xd0a118)) {
        _0x589c25 = _0xec6372.event.handlers.call(this, _0xd0a118, _0x294890);
        for (_0x3c22d0 = 0x0; (_0x3a28aa = _0x589c25[_0x3c22d0++]) && !_0xd0a118.isPropagationStopped();) {
          _0xd0a118.currentTarget = _0x3a28aa.elem;
          for (_0x294890 = 0x0; (_0x4dca6b = _0x3a28aa.handlers[_0x294890++]) && !_0xd0a118.isImmediatePropagationStopped();) _0xd0a118.rnamespace && !_0xd0a118.rnamespace.test(_0x4dca6b.namespace) || (_0xd0a118.handleObj = _0x4dca6b, _0xd0a118.data = _0x4dca6b.data, _0xa44f87 = ((_0xec6372.event.special[_0x4dca6b.origType] || {}).handle || _0x4dca6b.handler).apply(_0x3a28aa.elem, _0x2e3c54), void 0x0 !== _0xa44f87 && !0x1 === (_0xd0a118.result = _0xa44f87) && (_0xd0a118.preventDefault(), _0xd0a118.stopPropagation()));
        }
        return _0x341126.postDispatch && _0x341126.postDispatch.call(this, _0xd0a118), _0xd0a118.result;
      }
    },
    'handlers': function (_0x41dd46, _0x1e66c0) {
      var _0x772cd5,
        _0x5b3e9e,
        _0x236f60,
        _0x48aef1,
        _0x36adbb,
        _0xfa431e = [],
        _0x1fd900 = _0x1e66c0.delegateCount,
        _0x3dbc83 = _0x41dd46.target;
      if (_0x1fd900 && _0x3dbc83.nodeType && !('click' === _0x41dd46.type && 0x1 <= _0x41dd46.button)) {
        for (; _0x3dbc83 !== this; _0x3dbc83 = _0x3dbc83.parentNode || this) if (0x1 === _0x3dbc83.nodeType && ('click' !== _0x41dd46.type || !0x0 !== _0x3dbc83.disabled)) {
          _0x48aef1 = [], _0x36adbb = {};
          for (_0x772cd5 = 0x0; _0x772cd5 < _0x1fd900; _0x772cd5++) _0x5b3e9e = _0x1e66c0[_0x772cd5], _0x236f60 = _0x5b3e9e.selector + " ", void 0x0 === _0x36adbb[_0x236f60] && (_0x36adbb[_0x236f60] = _0x5b3e9e.needsContext ? -0x1 < _0xec6372(_0x236f60, this).index(_0x3dbc83) : _0xec6372.find(_0x236f60, this, null, [_0x3dbc83]).length), _0x36adbb[_0x236f60] && _0x48aef1.push(_0x5b3e9e);
          _0x48aef1.length && _0xfa431e.push({
            'elem': _0x3dbc83,
            'handlers': _0x48aef1
          });
        }
      }
      return _0x3dbc83 = this, _0x1fd900 < _0x1e66c0.length && _0xfa431e.push({
        'elem': _0x3dbc83,
        'handlers': _0x1e66c0.slice(_0x1fd900)
      }), _0xfa431e;
    },
    'addProp': function (_0x131795, _0xcdf0fa) {
      Object.defineProperty(_0xec6372.Event.prototype, _0x131795, {
        'enumerable': !0x0,
        'configurable': !0x0,
        'get': _0xec6372.isFunction(_0xcdf0fa) ? function () {
          if (this.originalEvent) return _0xcdf0fa(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[_0x131795];
        },
        'set': function (_0x19c746) {
          Object.defineProperty(this, _0x131795, {
            'enumerable': !0x0,
            'configurable': !0x0,
            'writable': !0x0,
            'value': _0x19c746
          });
        }
      });
    },
    'fix': function (_0x46c34b) {
      return _0x46c34b[_0xec6372.expando] ? _0x46c34b : new _0xec6372.Event(_0x46c34b);
    },
    'special': {
      'load': {
        'noBubble': !0x0
      },
      'focus': {
        'trigger': function () {
          if (this !== _0x43531c() && this.focus) return this.focus(), !0x1;
        },
        'delegateType': 'focusin'
      },
      'blur': {
        'trigger': function () {
          if (this === _0x43531c() && this.blur) return this.blur(), !0x1;
        },
        'delegateType': 'focusout'
      },
      'click': {
        'trigger': function () {
          if ('checkbox' === this.type && this.click && _0xa2643(this, 'input')) return this.click(), !0x1;
        },
        '_default': function (_0x3982ce) {
          return _0xa2643(_0x3982ce.target, 'a');
        }
      },
      'beforeunload': {
        'postDispatch': function (_0x1c45ab) {
          void 0x0 !== _0x1c45ab.result && _0x1c45ab.originalEvent && (_0x1c45ab.originalEvent.returnValue = _0x1c45ab.result);
        }
      }
    }
  }, _0xec6372.removeEvent = function (_0x348256, _0x2eae3f, _0xbad36) {
    _0x348256.removeEventListener && _0x348256.removeEventListener(_0x2eae3f, _0xbad36);
  }, _0xec6372.Event = function (_0x5b24d7, _0x326064) {
    return this instanceof _0xec6372.Event ? (_0x5b24d7 && _0x5b24d7.type ? (this.originalEvent = _0x5b24d7, this.type = _0x5b24d7.type, this.isDefaultPrevented = _0x5b24d7.defaultPrevented || void 0x0 === _0x5b24d7.defaultPrevented && !0x1 === _0x5b24d7.returnValue ? _0x50763c : _0x2f508c, this.target = _0x5b24d7.target && 0x3 === _0x5b24d7.target.nodeType ? _0x5b24d7.target.parentNode : _0x5b24d7.target, this.currentTarget = _0x5b24d7.currentTarget, this.relatedTarget = _0x5b24d7.relatedTarget) : this.type = _0x5b24d7, _0x326064 && _0xec6372.extend(this, _0x326064), this.timeStamp = _0x5b24d7 && _0x5b24d7.timeStamp || _0xec6372.now(), void (this[_0xec6372.expando] = !0x0)) : new _0xec6372.Event(_0x5b24d7, _0x326064);
  }, _0xec6372.Event.prototype = {
    'constructor': _0xec6372.Event,
    'isDefaultPrevented': _0x2f508c,
    'isPropagationStopped': _0x2f508c,
    'isImmediatePropagationStopped': _0x2f508c,
    'isSimulated': !0x1,
    'preventDefault': function () {
      var _0x4f8b5b = this.originalEvent;
      this.isDefaultPrevented = _0x50763c, _0x4f8b5b && !this.isSimulated && _0x4f8b5b.preventDefault();
    },
    'stopPropagation': function () {
      var _0x4f0eb3 = this.originalEvent;
      this.isPropagationStopped = _0x50763c, _0x4f0eb3 && !this.isSimulated && _0x4f0eb3.stopPropagation();
    },
    'stopImmediatePropagation': function () {
      var _0x3e44d5 = this.originalEvent;
      this.isImmediatePropagationStopped = _0x50763c, _0x3e44d5 && !this.isSimulated && _0x3e44d5.stopImmediatePropagation(), this.stopPropagation();
    }
  }, _0xec6372.each({
    'altKey': !0x0,
    'bubbles': !0x0,
    'cancelable': !0x0,
    'changedTouches': !0x0,
    'ctrlKey': !0x0,
    'detail': !0x0,
    'eventPhase': !0x0,
    'metaKey': !0x0,
    'pageX': !0x0,
    'pageY': !0x0,
    'shiftKey': !0x0,
    'view': !0x0,
    'char': !0x0,
    'charCode': !0x0,
    'key': !0x0,
    'keyCode': !0x0,
    'button': !0x0,
    'buttons': !0x0,
    'clientX': !0x0,
    'clientY': !0x0,
    'offsetX': !0x0,
    'offsetY': !0x0,
    'pointerId': !0x0,
    'pointerType': !0x0,
    'screenX': !0x0,
    'screenY': !0x0,
    'targetTouches': !0x0,
    'toElement': !0x0,
    'touches': !0x0,
    'which': function (_0x2564f8) {
      var _0x514e5d = _0x2564f8.button;
      return null == _0x2564f8.which && _0x593875.test(_0x2564f8.type) ? null != _0x2564f8.charCode ? _0x2564f8.charCode : _0x2564f8.keyCode : !_0x2564f8.which && void 0x0 !== _0x514e5d && _0xa54c9d.test(_0x2564f8.type) ? 0x1 & _0x514e5d ? 0x1 : 0x2 & _0x514e5d ? 0x3 : 0x4 & _0x514e5d ? 0x2 : 0x0 : _0x2564f8.which;
    }
  }, _0xec6372.event.addProp), _0xec6372.each({
    'mouseenter': 'mouseover',
    'mouseleave': 'mouseout',
    'pointerenter': 'pointerover',
    'pointerleave': 'pointerout'
  }, function (_0x3a32b2, _0x2b6dba) {
    _0xec6372.event.special[_0x3a32b2] = {
      'delegateType': _0x2b6dba,
      'bindType': _0x2b6dba,
      'handle': function (_0x1e480d) {
        var _0x39707f,
          _0x5d69ee = _0x1e480d.relatedTarget,
          _0x409f7a = _0x1e480d.handleObj;
        return _0x5d69ee && (_0x5d69ee === this || _0xec6372.contains(this, _0x5d69ee)) || (_0x1e480d.type = _0x409f7a.origType, _0x39707f = _0x409f7a.handler.apply(this, arguments), _0x1e480d.type = _0x2b6dba), _0x39707f;
      }
    };
  }), _0xec6372.fn.extend({
    'on': function (_0x22dbf2, _0x1ac67f, _0x30f206, _0x57b462) {
      return _0x321366(this, _0x22dbf2, _0x1ac67f, _0x30f206, _0x57b462);
    },
    'one': function (_0x8c4aa8, _0x80a9dd, _0x2a62f2, _0x141220) {
      return _0x321366(this, _0x8c4aa8, _0x80a9dd, _0x2a62f2, _0x141220, 0x1);
    },
    'off': function (_0xb23ef9, _0x10c224, _0x3908d3) {
      var _0x2dd1d9, _0x240810;
      if (_0xb23ef9 && _0xb23ef9.preventDefault && _0xb23ef9.handleObj) return _0x2dd1d9 = _0xb23ef9.handleObj, _0xec6372(_0xb23ef9.delegateTarget).off(_0x2dd1d9.namespace ? _0x2dd1d9.origType + '.' + _0x2dd1d9.namespace : _0x2dd1d9.origType, _0x2dd1d9.selector, _0x2dd1d9.handler), this;
      if ('object' == typeof _0xb23ef9) {
        for (_0x240810 in _0xb23ef9) this.off(_0x240810, _0x10c224, _0xb23ef9[_0x240810]);
        return this;
      }
      return !0x1 !== _0x10c224 && 'function' != typeof _0x10c224 || (_0x3908d3 = _0x10c224, _0x10c224 = void 0x0), !0x1 === _0x3908d3 && (_0x3908d3 = _0x2f508c), this.each(function () {
        _0xec6372.event.remove(this, _0xb23ef9, _0x3908d3, _0x10c224);
      });
    }
  });
  var _0x16c970 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    _0x45601d = /<script|<style|<link/i,
    _0x50af19 = /checked\s*(?:[^=]|=\s*.checked.)/i,
    _0x496b11 = /^true\/(.*)/,
    _0x650e6f = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  _0xec6372.extend({
    'htmlPrefilter': function (_0x4bd45b) {
      return _0x4bd45b.replace(_0x16c970, '<$1></$2>');
    },
    'clone': function (_0x304348, _0x170c13, _0x32a252) {
      var _0x45fa13,
        _0x154945,
        _0x46f237,
        _0x367561,
        _0x40554f = _0x304348.cloneNode(!0x0),
        _0x581673 = _0xec6372.contains(_0x304348.ownerDocument, _0x304348);
      if (!_0x566ba2.noCloneChecked && !(0x1 !== _0x304348.nodeType && 0xb !== _0x304348.nodeType || _0xec6372.isXMLDoc(_0x304348))) {
        _0x367561 = _0x556081(_0x40554f), _0x46f237 = _0x556081(_0x304348), _0x45fa13 = 0x0;
        for (_0x154945 = _0x46f237.length; _0x45fa13 < _0x154945; _0x45fa13++) {
          var _0x4555dc = _0x46f237[_0x45fa13],
            _0x272d1b = _0x367561[_0x45fa13],
            _0x44e469 = _0x272d1b.nodeName.toLowerCase();
          'input' === _0x44e469 && _0x181ab7.test(_0x4555dc.type) ? _0x272d1b.checked = _0x4555dc.checked : 'input' !== _0x44e469 && 'textarea' !== _0x44e469 || (_0x272d1b.defaultValue = _0x4555dc.defaultValue);
        }
      }
      if (_0x170c13) {
        if (_0x32a252) {
          _0x46f237 = _0x46f237 || _0x556081(_0x304348), _0x367561 = _0x367561 || _0x556081(_0x40554f), _0x45fa13 = 0x0;
          for (_0x154945 = _0x46f237.length; _0x45fa13 < _0x154945; _0x45fa13++) _0x127fa4(_0x46f237[_0x45fa13], _0x367561[_0x45fa13]);
        } else _0x127fa4(_0x304348, _0x40554f);
      }
      return _0x367561 = _0x556081(_0x40554f, 'script'), 0x0 < _0x367561.length && _0x370583(_0x367561, !_0x581673 && _0x556081(_0x304348, 'script')), _0x40554f;
    },
    'cleanData': function (_0x5b2d41) {
      for (var _0x5bdcd6, _0x238a16, _0x39851e, _0x1b3306 = _0xec6372.event.special, _0x58a344 = 0x0; void 0x0 !== (_0x238a16 = _0x5b2d41[_0x58a344]); _0x58a344++) if (_0x25a055(_0x238a16)) {
        if (_0x5bdcd6 = _0x238a16[_0x254586.expando]) {
          if (_0x5bdcd6.events) {
            for (_0x39851e in _0x5bdcd6.events) _0x1b3306[_0x39851e] ? _0xec6372.event.remove(_0x238a16, _0x39851e) : _0xec6372.removeEvent(_0x238a16, _0x39851e, _0x5bdcd6.handle);
          }
          _0x238a16[_0x254586.expando] = void 0x0;
        }
        _0x238a16[_0x4f7e80.expando] && (_0x238a16[_0x4f7e80.expando] = void 0x0);
      }
    }
  }), _0xec6372.fn.extend({
    'detach': function (_0x3923e2) {
      return _0x9f34b8(this, _0x3923e2, !0x0);
    },
    'remove': function (_0x3f524e) {
      return _0x9f34b8(this, _0x3f524e);
    },
    'text': function (_0x5ee3c5) {
      return _0x586365(this, function (_0x13ddbc) {
        return void 0x0 === _0x13ddbc ? _0xec6372.text(this) : this.empty().each(function () {
          0x1 !== this.nodeType && 0xb !== this.nodeType && 0x9 !== this.nodeType || (this.textContent = _0x13ddbc);
        });
      }, null, _0x5ee3c5, arguments.length);
    },
    'append': function () {
      return _0xc19c12(this, arguments, function (_0x4546f4) {
        (0x1 === this.nodeType || 0xb === this.nodeType || 0x9 === this.nodeType) && _0x59ad9e(this, _0x4546f4).appendChild(_0x4546f4);
      });
    },
    'prepend': function () {
      return _0xc19c12(this, arguments, function (_0xfaf5af) {
        if (0x1 === this.nodeType || 0xb === this.nodeType || 0x9 === this.nodeType) {
          var _0x558224 = _0x59ad9e(this, _0xfaf5af);
          _0x558224.insertBefore(_0xfaf5af, _0x558224.firstChild);
        }
      });
    },
    'before': function () {
      return _0xc19c12(this, arguments, function (_0x20dea8) {
        this.parentNode && this.parentNode.insertBefore(_0x20dea8, this);
      });
    },
    'after': function () {
      return _0xc19c12(this, arguments, function (_0x103d3e) {
        this.parentNode && this.parentNode.insertBefore(_0x103d3e, this.nextSibling);
      });
    },
    'empty': function () {
      for (var _0x3fcd75, _0x5771c5 = 0x0; null != (_0x3fcd75 = this[_0x5771c5]); _0x5771c5++) 0x1 === _0x3fcd75.nodeType && (_0xec6372.cleanData(_0x556081(_0x3fcd75, !0x1)), _0x3fcd75.textContent = '');
      return this;
    },
    'clone': function (_0xceff60, _0x20f2c2) {
      return _0xceff60 = null != _0xceff60 && _0xceff60, _0x20f2c2 = null == _0x20f2c2 ? _0xceff60 : _0x20f2c2, this.map(function () {
        return _0xec6372.clone(this, _0xceff60, _0x20f2c2);
      });
    },
    'html': function (_0x442e5f) {
      return _0x586365(this, function (_0x3d20cf) {
        var _0x2d28c4 = this[0x0] || {},
          _0x17dfc1 = 0x0,
          _0x3a974e = this.length;
        if (void 0x0 === _0x3d20cf && 0x1 === _0x2d28c4.nodeType) return _0x2d28c4.innerHTML;
        if ('string' == typeof _0x3d20cf && !_0x45601d.test(_0x3d20cf) && !_0x2c4b9e[(_0x140809.exec(_0x3d20cf) || ['', ''])[0x1].toLowerCase()]) {
          _0x3d20cf = _0xec6372.htmlPrefilter(_0x3d20cf);
          try {
            for (; _0x17dfc1 < _0x3a974e; _0x17dfc1++) _0x2d28c4 = this[_0x17dfc1] || {}, 0x1 === _0x2d28c4.nodeType && (_0xec6372.cleanData(_0x556081(_0x2d28c4, !0x1)), _0x2d28c4.innerHTML = _0x3d20cf);
            _0x2d28c4 = 0x0;
          } catch (_0x5e4d72) {}
        }
        _0x2d28c4 && this.empty().append(_0x3d20cf);
      }, null, _0x442e5f, arguments.length);
    },
    'replaceWith': function () {
      var _0x3ab683 = [];
      return _0xc19c12(this, arguments, function (_0x59125d) {
        var _0xcc5b4c = this.parentNode;
        0x0 > _0xec6372.inArray(this, _0x3ab683) && (_0xec6372.cleanData(_0x556081(this)), _0xcc5b4c && _0xcc5b4c.replaceChild(_0x59125d, this));
      }, _0x3ab683);
    }
  }), _0xec6372.each({
    'appendTo': 'append',
    'prependTo': 'prepend',
    'insertBefore': 'before',
    'insertAfter': 'after',
    'replaceAll': 'replaceWith'
  }, function (_0x1af259, _0xe21824) {
    _0xec6372.fn[_0x1af259] = function (_0x482ac4) {
      for (var _0x1a3361 = [], _0xfff5bf = _0xec6372(_0x482ac4), _0x2f7d1a = _0xfff5bf.length - 0x1, _0x2289be = 0x0; _0x2289be <= _0x2f7d1a; _0x2289be++) _0x482ac4 = _0x2289be === _0x2f7d1a ? this : this.clone(!0x0), _0xec6372(_0xfff5bf[_0x2289be])[_0xe21824](_0x482ac4), _0x1b4ecd.apply(_0x1a3361, _0x482ac4.get());
      return this.pushStack(_0x1a3361);
    };
  });
  var _0xc5a250 = /^margin/,
    _0x3c693b = RegExp('^(' + _0x1a2374 + ')(?!px)[a-z%]+$', 'i'),
    _0x262d49 = function (_0x262f5d) {
      var _0x39175d = _0x262f5d.ownerDocument.defaultView;
      return _0x39175d && _0x39175d.opener || (_0x39175d = _0x30aa88), _0x39175d.getComputedStyle(_0x262f5d);
    },
    _0x139181 = function () {
      if (_0xe6558d) {
        _0xe6558d.style.cssText = 'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', _0xe6558d.innerHTML = '', _0x44d4fc.appendChild(_0x550e47);
        var _0x4db929 = _0x30aa88.getComputedStyle(_0xe6558d);
        _0xc4d942 = '1%' !== _0x4db929.top, _0x208625 = '2px' === _0x4db929.marginLeft, _0x550e77 = '4px' === _0x4db929.width, _0xe6558d.style.marginRight = '50%', _0x57e1e4 = '4px' === _0x4db929.marginRight, _0x44d4fc.removeChild(_0x550e47), _0xe6558d = null;
      }
    },
    _0xc4d942,
    _0x550e77,
    _0x57e1e4,
    _0x208625,
    _0x550e47 = _0x35e050.createElement('div'),
    _0xe6558d = _0x35e050.createElement('div');
  _0xe6558d.style && (_0xe6558d.style.backgroundClip = 'content-box', _0xe6558d.cloneNode(!0x0).style.backgroundClip = '', _0x566ba2.clearCloneStyle = 'content-box' === _0xe6558d.style.backgroundClip, _0x550e47.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', _0x550e47.appendChild(_0xe6558d), _0xec6372.extend(_0x566ba2, {
    'pixelPosition': function () {
      return _0x139181(), _0xc4d942;
    },
    'boxSizingReliable': function () {
      return _0x139181(), _0x550e77;
    },
    'pixelMarginRight': function () {
      return _0x139181(), _0x57e1e4;
    },
    'reliableMarginLeft': function () {
      return _0x139181(), _0x208625;
    }
  })), !0x0;
  var _0x2a5b5d = /^(none|table(?!-c[ea]).+)/,
    _0x23d72e = /^--/,
    _0x52ed81 = {
      'position': 'absolute',
      'visibility': 'hidden',
      'display': 'block'
    },
    _0xc8d2a5 = {
      'letterSpacing': '0',
      'fontWeight': '400'
    },
    _0x1c9afd = ['Webkit', 'Moz', 'ms'],
    _0x28ae7a = _0x35e050.createElement('div').style;
  _0xec6372.extend({
    'cssHooks': {
      'opacity': {
        'get': function (_0x46ef56, _0x4c2db9) {
          if (_0x4c2db9) {
            var _0x1245e7 = _0x374336(_0x46ef56, 'opacity');
            return '' === _0x1245e7 ? '1' : _0x1245e7;
          }
        }
      }
    },
    'cssNumber': {
      'animationIterationCount': !0x0,
      'columnCount': !0x0,
      'fillOpacity': !0x0,
      'flexGrow': !0x0,
      'flexShrink': !0x0,
      'fontWeight': !0x0,
      'lineHeight': !0x0,
      'opacity': !0x0,
      'order': !0x0,
      'orphans': !0x0,
      'widows': !0x0,
      'zIndex': !0x0,
      'zoom': !0x0
    },
    'cssProps': {
      'float': 'cssFloat'
    },
    'style': function (_0x5d0bf9, _0x4c1282, _0x752b50, _0x3e21f8) {
      if (_0x5d0bf9 && 0x3 !== _0x5d0bf9.nodeType && 0x8 !== _0x5d0bf9.nodeType && _0x5d0bf9.style) {
        var _0xad99e6,
          _0xfd9de8,
          _0x1aac5e,
          _0x175bcb = _0xec6372.camelCase(_0x4c1282),
          _0x4bc6e4 = _0x23d72e.test(_0x4c1282),
          _0x139ed5 = _0x5d0bf9.style;
        return _0x4bc6e4 || (_0x4c1282 = _0x60e5f1(_0x175bcb)), _0x1aac5e = _0xec6372.cssHooks[_0x4c1282] || _0xec6372.cssHooks[_0x175bcb], void 0x0 === _0x752b50 ? _0x1aac5e && 'get' in _0x1aac5e && void 0x0 !== (_0xad99e6 = _0x1aac5e.get(_0x5d0bf9, !0x1, _0x3e21f8)) ? _0xad99e6 : _0x139ed5[_0x4c1282] : (_0xfd9de8 = typeof _0x752b50, 'string' === _0xfd9de8 && (_0xad99e6 = _0x111f46.exec(_0x752b50)) && _0xad99e6[0x1] && (_0x752b50 = _0x52ef00(_0x5d0bf9, _0x4c1282, _0xad99e6), _0xfd9de8 = 'number'), null != _0x752b50 && _0x752b50 === _0x752b50 && ('number' === _0xfd9de8 && (_0x752b50 += _0xad99e6 && _0xad99e6[0x3] || (_0xec6372.cssNumber[_0x175bcb] ? '' : 'px')), _0x566ba2.clearCloneStyle || '' !== _0x752b50 || 0x0 !== _0x4c1282.indexOf('background') || (_0x139ed5[_0x4c1282] = 'inherit'), _0x1aac5e && 'set' in _0x1aac5e && void 0x0 === (_0x752b50 = _0x1aac5e.set(_0x5d0bf9, _0x752b50, _0x3e21f8)) || (_0x4bc6e4 ? _0x139ed5.setProperty(_0x4c1282, _0x752b50) : _0x139ed5[_0x4c1282] = _0x752b50)), void 0x0);
      }
    },
    'css': function (_0x129f4f, _0x3c1016, _0x50d840, _0x1d1d53) {
      var _0x48b068,
        _0x569c46,
        _0x5e4400,
        _0x43a505 = _0xec6372.camelCase(_0x3c1016);
      return _0x23d72e.test(_0x3c1016) || (_0x3c1016 = _0x60e5f1(_0x43a505)), _0x5e4400 = _0xec6372.cssHooks[_0x3c1016] || _0xec6372.cssHooks[_0x43a505], _0x5e4400 && 'get' in _0x5e4400 && (_0x48b068 = _0x5e4400.get(_0x129f4f, !0x0, _0x50d840)), void 0x0 === _0x48b068 && (_0x48b068 = _0x374336(_0x129f4f, _0x3c1016, _0x1d1d53)), 'normal' === _0x48b068 && _0x3c1016 in _0xc8d2a5 && (_0x48b068 = _0xc8d2a5[_0x3c1016]), '' === _0x50d840 || _0x50d840 ? (_0x569c46 = parseFloat(_0x48b068), !0x0 === _0x50d840 || isFinite(_0x569c46) ? _0x569c46 || 0x0 : _0x48b068) : _0x48b068;
    }
  }), _0xec6372.each(['height', 'width'], function (_0x1fa357, _0x5b58be) {
    _0xec6372.cssHooks[_0x5b58be] = {
      'get': function (_0x292ee6, _0x4a7d0f, _0x4f6b18) {
        if (_0x4a7d0f) return !_0x2a5b5d.test(_0xec6372.css(_0x292ee6, 'display')) || _0x292ee6.getClientRects().length && _0x292ee6.getBoundingClientRect().width ? _0x2bee46(_0x292ee6, _0x5b58be, _0x4f6b18) : _0x5f4eed(_0x292ee6, _0x52ed81, function () {
          return _0x2bee46(_0x292ee6, _0x5b58be, _0x4f6b18);
        });
      },
      'set': function (_0x6b7108, _0x5c5b4d, _0x453671) {
        var _0x5010c2,
          _0x262cc9 = _0x453671 && _0x262d49(_0x6b7108);
        return _0x453671 = _0x453671 && _0x5d8c98(_0x6b7108, _0x5b58be, _0x453671, 'border-box' === _0xec6372.css(_0x6b7108, 'boxSizing', !0x1, _0x262cc9), _0x262cc9), _0x453671 && (_0x5010c2 = _0x111f46.exec(_0x5c5b4d)) && 'px' !== (_0x5010c2[0x3] || 'px') && (_0x6b7108.style[_0x5b58be] = _0x5c5b4d, _0x5c5b4d = _0xec6372.css(_0x6b7108, _0x5b58be)), _0xbbe018(_0x6b7108, _0x5c5b4d, _0x453671);
      }
    };
  }), _0xec6372.cssHooks.marginLeft = _0x5181a6(_0x566ba2.reliableMarginLeft, function (_0x179f39, _0x1049bf) {
    if (_0x1049bf) return (parseFloat(_0x374336(_0x179f39, 'marginLeft')) || _0x179f39.getBoundingClientRect().left - _0x5f4eed(_0x179f39, {
      'marginLeft': 0x0
    }, function () {
      return _0x179f39.getBoundingClientRect().left;
    })) + 'px';
  }), _0xec6372.each({
    'margin': '',
    'padding': '',
    'border': 'Width'
  }, function (_0x2ae7c2, _0x5b9e1f) {
    _0xec6372.cssHooks[_0x2ae7c2 + _0x5b9e1f] = {
      'expand': function (_0x5268a7) {
        var _0x17ce3f = 0x0,
          _0x2441f = {};
        for (_0x5268a7 = 'string' == typeof _0x5268a7 ? _0x5268a7.split(" ") : [_0x5268a7]; 0x4 > _0x17ce3f; _0x17ce3f++) _0x2441f[_0x2ae7c2 + _0x4d6f41[_0x17ce3f] + _0x5b9e1f] = _0x5268a7[_0x17ce3f] || _0x5268a7[_0x17ce3f - 0x2] || _0x5268a7[0x0];
        return _0x2441f;
      }
    }, _0xc5a250.test(_0x2ae7c2) || (_0xec6372.cssHooks[_0x2ae7c2 + _0x5b9e1f].set = _0xbbe018);
  }), _0xec6372.fn.extend({
    'css': function (_0x25fd04, _0x25318a) {
      return _0x586365(this, function (_0x2f7414, _0x44e6c5, _0x3bac06) {
        var _0x13b6b1,
          _0x4976ff = {},
          _0x275c47 = 0x0;
        if (Array.isArray(_0x44e6c5)) {
          _0x3bac06 = _0x262d49(_0x2f7414);
          for (_0x13b6b1 = _0x44e6c5.length; _0x275c47 < _0x13b6b1; _0x275c47++) _0x4976ff[_0x44e6c5[_0x275c47]] = _0xec6372.css(_0x2f7414, _0x44e6c5[_0x275c47], !0x1, _0x3bac06);
          return _0x4976ff;
        }
        return void 0x0 !== _0x3bac06 ? _0xec6372.style(_0x2f7414, _0x44e6c5, _0x3bac06) : _0xec6372.css(_0x2f7414, _0x44e6c5);
      }, _0x25fd04, _0x25318a, 0x1 < arguments.length);
    }
  }), _0xec6372.Tween = _0x2f4d52, _0x2f4d52.prototype = {
    'constructor': _0x2f4d52,
    'init': function (_0x5c5c5f, _0x38f5ef, _0x161726, _0x8265cd, _0x7b4eb4, _0xf5da17) {
      this.elem = _0x5c5c5f, this.prop = _0x161726, this.easing = _0x7b4eb4 || _0xec6372.easing._default, this.options = _0x38f5ef, this.start = this.now = this.cur(), this.end = _0x8265cd, this.unit = _0xf5da17 || (_0xec6372.cssNumber[_0x161726] ? '' : 'px');
    },
    'cur': function () {
      var _0x27fb65 = _0x2f4d52.propHooks[this.prop];
      return _0x27fb65 && _0x27fb65.get ? _0x27fb65.get(this) : _0x2f4d52.propHooks._default.get(this);
    },
    'run': function (_0x72c97b) {
      var _0x1d2cd2,
        _0x8dbc9d = _0x2f4d52.propHooks[this.prop];
      return this.options.duration ? this.pos = _0x1d2cd2 = _0xec6372.easing[this.easing](_0x72c97b, this.options.duration * _0x72c97b, 0x0, 0x1, this.options.duration) : this.pos = _0x1d2cd2 = _0x72c97b, this.now = (this.end - this.start) * _0x1d2cd2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), _0x8dbc9d && _0x8dbc9d.set ? _0x8dbc9d.set(this) : _0x2f4d52.propHooks._default.set(this), this;
    }
  }, _0x2f4d52.prototype.init.prototype = _0x2f4d52.prototype, _0x2f4d52.propHooks = {
    '_default': {
      'get': function (_0x171b31) {
        var _0x4dc012;
        return 0x1 !== _0x171b31.elem.nodeType || null != _0x171b31.elem[_0x171b31.prop] && null == _0x171b31.elem.style[_0x171b31.prop] ? _0x171b31.elem[_0x171b31.prop] : (_0x4dc012 = _0xec6372.css(_0x171b31.elem, _0x171b31.prop, ''), _0x4dc012 && 'auto' !== _0x4dc012 ? _0x4dc012 : 0x0);
      },
      'set': function (_0x17e15b) {
        _0xec6372.fx.step[_0x17e15b.prop] ? _0xec6372.fx.step[_0x17e15b.prop](_0x17e15b) : 0x1 !== _0x17e15b.elem.nodeType || null == _0x17e15b.elem.style[_0xec6372.cssProps[_0x17e15b.prop]] && !_0xec6372.cssHooks[_0x17e15b.prop] ? _0x17e15b.elem[_0x17e15b.prop] = _0x17e15b.now : _0xec6372.style(_0x17e15b.elem, _0x17e15b.prop, _0x17e15b.now + _0x17e15b.unit);
      }
    }
  }, _0x2f4d52.propHooks.scrollTop = _0x2f4d52.propHooks.scrollLeft = {
    'set': function (_0x59bb29) {
      _0x59bb29.elem.nodeType && _0x59bb29.elem.parentNode && (_0x59bb29.elem[_0x59bb29.prop] = _0x59bb29.now);
    }
  }, _0xec6372.easing = {
    'linear': function (_0x1ad15c) {
      return _0x1ad15c;
    },
    'swing': function (_0x503747) {
      return 0.5 - Math.cos(_0x503747 * Math.PI) / 0x2;
    },
    '_default': 'swing'
  }, _0xec6372.fx = _0x2f4d52.prototype.init, _0xec6372.fx.step = {};
  var _0x318939,
    _0xe67fc3,
    _0x35e8d1 = /^(?:toggle|show|hide)$/,
    _0x4b5fce = /queueHooks$/;
  _0xec6372.Animation = _0xec6372.extend(_0x52f62, {
    'tweeners': {
      '*': [function (_0xf42b4e, _0x26a8ee) {
        var _0x588a44 = this.createTween(_0xf42b4e, _0x26a8ee);
        return _0x52ef00(_0x588a44.elem, _0xf42b4e, _0x111f46.exec(_0x26a8ee), _0x588a44), _0x588a44;
      }]
    },
    'tweener': function (_0x358d9e, _0x5f04fa) {
      _0xec6372.isFunction(_0x358d9e) ? (_0x5f04fa = _0x358d9e, _0x358d9e = ['*']) : _0x358d9e = _0x358d9e.match(_0x55cd20);
      for (var _0xf5022c, _0x5330b5 = 0x0, _0x198ab9 = _0x358d9e.length; _0x5330b5 < _0x198ab9; _0x5330b5++) _0xf5022c = _0x358d9e[_0x5330b5], _0x52f62.tweeners[_0xf5022c] = _0x52f62.tweeners[_0xf5022c] || [], _0x52f62.tweeners[_0xf5022c].unshift(_0x5f04fa);
    },
    'prefilters': [function (_0x30f23d, _0x1460a5, _0x5da4f8) {
      var _0x5a088f,
        _0x444845,
        _0xe9d45d,
        _0x7ae06d,
        _0x42fd98,
        _0x4f233c,
        _0x152868,
        _0x473aae,
        _0x6f2c0e = 'width' in _0x1460a5 || 'height' in _0x1460a5,
        _0x4bae00 = this,
        _0x19705e = {},
        _0x598804 = _0x30f23d.style,
        _0x23d94b = _0x30f23d.nodeType && _0x107752(_0x30f23d),
        _0xe4ea1 = _0x254586.get(_0x30f23d, 'fxshow');
      _0x5da4f8.queue || (_0x7ae06d = _0xec6372._queueHooks(_0x30f23d, 'fx'), null == _0x7ae06d.unqueued && (_0x7ae06d.unqueued = 0x0, _0x42fd98 = _0x7ae06d.empty.fire, _0x7ae06d.empty.fire = function () {
        _0x7ae06d.unqueued || _0x42fd98();
      }), _0x7ae06d.unqueued++, _0x4bae00.always(function () {
        _0x4bae00.always(function () {
          _0x7ae06d.unqueued--, _0xec6372.queue(_0x30f23d, 'fx').length || _0x7ae06d.empty.fire();
        });
      }));
      for (_0x5a088f in _0x1460a5) if (_0x444845 = _0x1460a5[_0x5a088f], _0x35e8d1.test(_0x444845)) {
        if (delete _0x1460a5[_0x5a088f], _0xe9d45d = _0xe9d45d || 'toggle' === _0x444845, _0x444845 === (_0x23d94b ? 'hide' : 'show')) {
          if ('show' !== _0x444845 || !_0xe4ea1 || void 0x0 === _0xe4ea1[_0x5a088f]) continue;
          _0x23d94b = !0x0;
        }
        _0x19705e[_0x5a088f] = _0xe4ea1 && _0xe4ea1[_0x5a088f] || _0xec6372.style(_0x30f23d, _0x5a088f);
      }
      if (_0x4f233c = !_0xec6372.isEmptyObject(_0x1460a5), _0x4f233c || !_0xec6372.isEmptyObject(_0x19705e)) {
        for (_0x5a088f in _0x6f2c0e && 0x1 === _0x30f23d.nodeType && (_0x5da4f8.overflow = [_0x598804.overflow, _0x598804.overflowX, _0x598804.overflowY], _0x152868 = _0xe4ea1 && _0xe4ea1.display, null == _0x152868 && (_0x152868 = _0x254586.get(_0x30f23d, 'display')), _0x473aae = _0xec6372.css(_0x30f23d, 'display'), 'none' === _0x473aae && (_0x152868 ? _0x473aae = _0x152868 : (_0x50d8ff([_0x30f23d], !0x0), _0x152868 = _0x30f23d.style.display || _0x152868, _0x473aae = _0xec6372.css(_0x30f23d, 'display'), _0x50d8ff([_0x30f23d]))), ('inline' === _0x473aae || 'inline-block' === _0x473aae && null != _0x152868) && 'none' === _0xec6372.css(_0x30f23d, 'float') && (_0x4f233c || (_0x4bae00.done(function () {
          _0x598804.display = _0x152868;
        }), null == _0x152868 && (_0x473aae = _0x598804.display, _0x152868 = 'none' === _0x473aae ? '' : _0x473aae)), _0x598804.display = 'inline-block')), _0x5da4f8.overflow && (_0x598804.overflow = 'hidden', _0x4bae00.always(function () {
          _0x598804.overflow = _0x5da4f8.overflow[0x0], _0x598804.overflowX = _0x5da4f8.overflow[0x1], _0x598804.overflowY = _0x5da4f8.overflow[0x2];
        })), _0x4f233c = !0x1, _0x19705e) _0x4f233c || (_0xe4ea1 ? 'hidden' in _0xe4ea1 && (_0x23d94b = _0xe4ea1.hidden) : _0xe4ea1 = _0x254586.access(_0x30f23d, 'fxshow', {
          'display': _0x152868
        }), _0xe9d45d && (_0xe4ea1.hidden = !_0x23d94b), _0x23d94b && _0x50d8ff([_0x30f23d], !0x0), _0x4bae00.done(function () {
          _0x23d94b || _0x50d8ff([_0x30f23d]), _0x254586.remove(_0x30f23d, 'fxshow');
          for (_0x5a088f in _0x19705e) _0xec6372.style(_0x30f23d, _0x5a088f, _0x19705e[_0x5a088f]);
        })), _0x4f233c = _0x58c79d(_0x23d94b ? _0xe4ea1[_0x5a088f] : 0x0, _0x5a088f, _0x4bae00), _0x5a088f in _0xe4ea1 || (_0xe4ea1[_0x5a088f] = _0x4f233c.start, _0x23d94b && (_0x4f233c.end = _0x4f233c.start, _0x4f233c.start = 0x0));
      }
    }],
    'prefilter': function (_0xe8ec0d, _0xcafe05) {
      _0xcafe05 ? _0x52f62.prefilters.unshift(_0xe8ec0d) : _0x52f62.prefilters.push(_0xe8ec0d);
    }
  }), _0xec6372.speed = function (_0x169e60, _0x35daf3, _0x282844) {
    var _0x3a496c = _0x169e60 && 'object' == typeof _0x169e60 ? _0xec6372.extend({}, _0x169e60) : {
      'complete': _0x282844 || !_0x282844 && _0x35daf3 || _0xec6372.isFunction(_0x169e60) && _0x169e60,
      'duration': _0x169e60,
      'easing': _0x282844 && _0x35daf3 || _0x35daf3 && !_0xec6372.isFunction(_0x35daf3) && _0x35daf3
    };
    return _0xec6372.fx.off ? _0x3a496c.duration = 0x0 : 'number' != typeof _0x3a496c.duration && (_0x3a496c.duration in _0xec6372.fx.speeds ? _0x3a496c.duration = _0xec6372.fx.speeds[_0x3a496c.duration] : _0x3a496c.duration = _0xec6372.fx.speeds._default), null != _0x3a496c.queue && !0x0 !== _0x3a496c.queue || (_0x3a496c.queue = 'fx'), _0x3a496c.old = _0x3a496c.complete, _0x3a496c.complete = function () {
      _0xec6372.isFunction(_0x3a496c.old) && _0x3a496c.old.call(this), _0x3a496c.queue && _0xec6372.dequeue(this, _0x3a496c.queue);
    }, _0x3a496c;
  }, _0xec6372.fn.extend({
    'fadeTo': function (_0x121d39, _0x58885f, _0x5c2a1d, _0x436c0a) {
      return this.filter(_0x107752).css('opacity', 0x0).show().end().animate({
        'opacity': _0x58885f
      }, _0x121d39, _0x5c2a1d, _0x436c0a);
    },
    'animate': function (_0x26eb41, _0x19ce28, _0x4ad58e, _0x287158) {
      var _0x293f43 = _0xec6372.isEmptyObject(_0x26eb41),
        _0x3a3361 = _0xec6372.speed(_0x19ce28, _0x4ad58e, _0x287158);
      return _0x19ce28 = function () {
        var _0x3fc215 = _0x52f62(this, _0xec6372.extend({}, _0x26eb41), _0x3a3361);
        (_0x293f43 || _0x254586.get(this, 'finish')) && _0x3fc215.stop(!0x0);
      }, _0x19ce28.finish = _0x19ce28, _0x293f43 || !0x1 === _0x3a3361.queue ? this.each(_0x19ce28) : this.queue(_0x3a3361.queue, _0x19ce28);
    },
    'stop': function (_0x136b5d, _0x44ce4d, _0x2ad6e6) {
      var _0x2a1682 = function (_0x25f267) {
        var _0x89c8db = _0x25f267.stop;
        delete _0x25f267.stop, _0x89c8db(_0x2ad6e6);
      };
      return 'string' != typeof _0x136b5d && (_0x2ad6e6 = _0x44ce4d, _0x44ce4d = _0x136b5d, _0x136b5d = void 0x0), _0x44ce4d && !0x1 !== _0x136b5d && this.queue(_0x136b5d || 'fx', []), this.each(function () {
        var _0x24d02a = !0x0,
          _0x894623 = null != _0x136b5d && _0x136b5d + 'queueHooks',
          _0x78f544 = _0xec6372.timers,
          _0x1e5dce = _0x254586.get(this);
        if (_0x894623) _0x1e5dce[_0x894623] && _0x1e5dce[_0x894623].stop && _0x2a1682(_0x1e5dce[_0x894623]);else {
          for (_0x894623 in _0x1e5dce) _0x1e5dce[_0x894623] && _0x1e5dce[_0x894623].stop && _0x4b5fce.test(_0x894623) && _0x2a1682(_0x1e5dce[_0x894623]);
        }
        for (_0x894623 = _0x78f544.length; _0x894623--;) _0x78f544[_0x894623].elem !== this || null != _0x136b5d && _0x78f544[_0x894623].queue !== _0x136b5d || (_0x78f544[_0x894623].anim.stop(_0x2ad6e6), _0x24d02a = !0x1, _0x78f544.splice(_0x894623, 0x1));
        !_0x24d02a && _0x2ad6e6 || _0xec6372.dequeue(this, _0x136b5d);
      });
    },
    'finish': function (_0x380114) {
      return !0x1 !== _0x380114 && (_0x380114 = _0x380114 || 'fx'), this.each(function () {
        var _0x88e40a,
          _0xddcde9 = _0x254586.get(this),
          _0x5182c2 = _0xddcde9[_0x380114 + 'queue'];
        _0x88e40a = _0xddcde9[_0x380114 + 'queueHooks'];
        var _0x48c8fa = _0xec6372.timers,
          _0x5a2219 = _0x5182c2 ? _0x5182c2.length : 0x0;
        _0xddcde9.finish = !0x0, _0xec6372.queue(this, _0x380114, []), _0x88e40a && _0x88e40a.stop && _0x88e40a.stop.call(this, !0x0);
        for (_0x88e40a = _0x48c8fa.length; _0x88e40a--;) _0x48c8fa[_0x88e40a].elem === this && _0x48c8fa[_0x88e40a].queue === _0x380114 && (_0x48c8fa[_0x88e40a].anim.stop(!0x0), _0x48c8fa.splice(_0x88e40a, 0x1));
        for (_0x88e40a = 0x0; _0x88e40a < _0x5a2219; _0x88e40a++) _0x5182c2[_0x88e40a] && _0x5182c2[_0x88e40a].finish && _0x5182c2[_0x88e40a].finish.call(this);
        delete _0xddcde9.finish;
      });
    }
  }), _0xec6372.each(['toggle', 'show', 'hide'], function (_0x4c7852, _0x320467) {
    var _0x258e78 = _0xec6372.fn[_0x320467];
    _0xec6372.fn[_0x320467] = function (_0x34cd5a, _0x5b8f1a, _0x4805b2) {
      return null == _0x34cd5a || 'boolean' == typeof _0x34cd5a ? _0x258e78.apply(this, arguments) : this.animate(_0x3b5655(_0x320467, !0x0), _0x34cd5a, _0x5b8f1a, _0x4805b2);
    };
  }), _0xec6372.each({
    'slideDown': _0x3b5655('show'),
    'slideUp': _0x3b5655('hide'),
    'slideToggle': _0x3b5655('toggle'),
    'fadeIn': {
      'opacity': 'show'
    },
    'fadeOut': {
      'opacity': 'hide'
    },
    'fadeToggle': {
      'opacity': 'toggle'
    }
  }, function (_0x131a6a, _0x9675c0) {
    _0xec6372.fn[_0x131a6a] = function (_0xe86277, _0x39ee44, _0x55bfd6) {
      return this.animate(_0x9675c0, _0xe86277, _0x39ee44, _0x55bfd6);
    };
  }), _0xec6372.timers = [], _0xec6372.fx.tick = function () {
    var _0x12d700,
      _0x5abbc3 = 0x0,
      _0x3ebbaf = _0xec6372.timers;
    for (_0x318939 = _0xec6372.now(); _0x5abbc3 < _0x3ebbaf.length; _0x5abbc3++) _0x12d700 = _0x3ebbaf[_0x5abbc3], _0x12d700() || _0x3ebbaf[_0x5abbc3] !== _0x12d700 || _0x3ebbaf.splice(_0x5abbc3--, 0x1);
    _0x3ebbaf.length || _0xec6372.fx.stop(), _0x318939 = void 0x0;
  }, _0xec6372.fx.timer = function (_0x24d0fd) {
    _0xec6372.timers.push(_0x24d0fd), _0xec6372.fx.start();
  }, _0xec6372.fx.interval = 0xd, _0xec6372.fx.start = function () {
    _0xe67fc3 || (_0xe67fc3 = !0x0, _0x55e2f1());
  }, _0xec6372.fx.stop = function () {
    _0xe67fc3 = null;
  }, _0xec6372.fx.speeds = {
    'slow': 0x258,
    'fast': 0xc8,
    '_default': 0x190
  }, _0xec6372.fn.delay = function (_0x5464d4, _0x222d51) {
    return _0x5464d4 = _0xec6372.fx ? _0xec6372.fx.speeds[_0x5464d4] || _0x5464d4 : _0x5464d4, _0x222d51 = _0x222d51 || 'fx', this.queue(_0x222d51, function (_0x37d8c8, _0x43a83a) {
      var _0x3135ef = _0x30aa88.setTimeout(_0x37d8c8, _0x5464d4);
      _0x43a83a.stop = function () {
        _0x30aa88.clearTimeout(_0x3135ef);
      };
    });
  };
  var _0x5b9b66 = _0x35e050.createElement('input'),
    _0x39fdf8 = _0x35e050.createElement('select').appendChild(_0x35e050.createElement('option'));
  _0x5b9b66.type = 'checkbox', _0x566ba2.checkOn = '' !== _0x5b9b66.value, _0x566ba2.optSelected = _0x39fdf8.selected, _0x5b9b66 = _0x35e050.createElement('input'), _0x5b9b66.value = 't', _0x5b9b66.type = 'radio', _0x566ba2.radioValue = 't' === _0x5b9b66.value;
  var _0x156141,
    _0x1e3439 = _0xec6372.expr.attrHandle;
  _0xec6372.fn.extend({
    'attr': function (_0xa18ef7, _0x44f910) {
      return _0x586365(this, _0xec6372.attr, _0xa18ef7, _0x44f910, 0x1 < arguments.length);
    },
    'removeAttr': function (_0x109c16) {
      return this.each(function () {
        _0xec6372.removeAttr(this, _0x109c16);
      });
    }
  }), _0xec6372.extend({
    'attr': function (_0x381b35, _0x266469, _0x126781) {
      var _0x40871b,
        _0x2fcaff,
        _0x4e3884 = _0x381b35.nodeType;
      if (0x3 !== _0x4e3884 && 0x8 !== _0x4e3884 && 0x2 !== _0x4e3884) return 'undefined' == typeof _0x381b35.getAttribute ? _0xec6372.prop(_0x381b35, _0x266469, _0x126781) : (0x1 === _0x4e3884 && _0xec6372.isXMLDoc(_0x381b35) || (_0x2fcaff = _0xec6372.attrHooks[_0x266469.toLowerCase()] || (_0xec6372.expr.match.bool.test(_0x266469) ? _0x156141 : void 0x0)), void 0x0 !== _0x126781 ? null === _0x126781 ? void _0xec6372.removeAttr(_0x381b35, _0x266469) : _0x2fcaff && 'set' in _0x2fcaff && void 0x0 !== (_0x40871b = _0x2fcaff.set(_0x381b35, _0x126781, _0x266469)) ? _0x40871b : (_0x381b35.setAttribute(_0x266469, _0x126781 + ''), _0x126781) : _0x2fcaff && 'get' in _0x2fcaff && null !== (_0x40871b = _0x2fcaff.get(_0x381b35, _0x266469)) ? _0x40871b : (_0x40871b = _0xec6372.find.attr(_0x381b35, _0x266469), null == _0x40871b ? void 0x0 : _0x40871b));
    },
    'attrHooks': {
      'type': {
        'set': function (_0x1d6aa2, _0xa84f1a) {
          if (!_0x566ba2.radioValue && 'radio' === _0xa84f1a && _0xa2643(_0x1d6aa2, 'input')) {
            var _0x20ed1c = _0x1d6aa2.value;
            return _0x1d6aa2.setAttribute('type', _0xa84f1a), _0x20ed1c && (_0x1d6aa2.value = _0x20ed1c), _0xa84f1a;
          }
        }
      }
    },
    'removeAttr': function (_0x49c232, _0x5bd1be) {
      var _0x388f6d,
        _0x10556 = 0x0,
        _0x577191 = _0x5bd1be && _0x5bd1be.match(_0x55cd20);
      if (_0x577191 && 0x1 === _0x49c232.nodeType) {
        for (; _0x388f6d = _0x577191[_0x10556++];) _0x49c232.removeAttribute(_0x388f6d);
      }
    }
  }), _0x156141 = {
    'set': function (_0x3999c4, _0x16672c, _0x43994a) {
      return !0x1 === _0x16672c ? _0xec6372.removeAttr(_0x3999c4, _0x43994a) : _0x3999c4.setAttribute(_0x43994a, _0x43994a), _0x43994a;
    }
  }, _0xec6372.each(_0xec6372.expr.match.bool.source.match(/\w+/g), function (_0x21885b, _0x512616) {
    var _0x10165d = _0x1e3439[_0x512616] || _0xec6372.find.attr;
    _0x1e3439[_0x512616] = function (_0x482192, _0x369b25, _0x16bf54) {
      var _0x3b3ef5,
        _0x3b7a6b,
        _0x463e13 = _0x369b25.toLowerCase();
      return _0x16bf54 || (_0x3b7a6b = _0x1e3439[_0x463e13], _0x1e3439[_0x463e13] = _0x3b3ef5, _0x3b3ef5 = null != _0x10165d(_0x482192, _0x369b25, _0x16bf54) ? _0x463e13 : null, _0x1e3439[_0x463e13] = _0x3b7a6b), _0x3b3ef5;
    };
  });
  var _0x4f2488 = /^(?:input|select|textarea|button)$/i,
    _0x16ae21 = /^(?:a|area)$/i;
  _0xec6372.fn.extend({
    'prop': function (_0x35e763, _0x15ab4a) {
      return _0x586365(this, _0xec6372.prop, _0x35e763, _0x15ab4a, 0x1 < arguments.length);
    },
    'removeProp': function (_0x407248) {
      return this.each(function () {
        delete this[_0xec6372.propFix[_0x407248] || _0x407248];
      });
    }
  }), _0xec6372.extend({
    'prop': function (_0x26c4d8, _0x2e544d, _0x300b23) {
      var _0x418ded,
        _0x2599b0,
        _0x2adfef = _0x26c4d8.nodeType;
      if (0x3 !== _0x2adfef && 0x8 !== _0x2adfef && 0x2 !== _0x2adfef) return 0x1 === _0x2adfef && _0xec6372.isXMLDoc(_0x26c4d8) || (_0x2e544d = _0xec6372.propFix[_0x2e544d] || _0x2e544d, _0x2599b0 = _0xec6372.propHooks[_0x2e544d]), void 0x0 !== _0x300b23 ? _0x2599b0 && 'set' in _0x2599b0 && void 0x0 !== (_0x418ded = _0x2599b0.set(_0x26c4d8, _0x300b23, _0x2e544d)) ? _0x418ded : _0x26c4d8[_0x2e544d] = _0x300b23 : _0x2599b0 && 'get' in _0x2599b0 && null !== (_0x418ded = _0x2599b0.get(_0x26c4d8, _0x2e544d)) ? _0x418ded : _0x26c4d8[_0x2e544d];
    },
    'propHooks': {
      'tabIndex': {
        'get': function (_0x19e0ef) {
          var _0xbd6e3b = _0xec6372.find.attr(_0x19e0ef, 'tabindex');
          return _0xbd6e3b ? parseInt(_0xbd6e3b, 0xa) : _0x4f2488.test(_0x19e0ef.nodeName) || _0x16ae21.test(_0x19e0ef.nodeName) && _0x19e0ef.href ? 0x0 : -0x1;
        }
      }
    },
    'propFix': {
      'for': 'htmlFor',
      'class': 'className'
    }
  }), _0x566ba2.optSelected || (_0xec6372.propHooks.selected = {
    'get': function (_0x2a5c17) {
      return _0x2a5c17 = _0x2a5c17.parentNode, _0x2a5c17 && _0x2a5c17.parentNode && _0x2a5c17.parentNode.selectedIndex, null;
    },
    'set': function (_0x49ea43) {
      _0x49ea43 = _0x49ea43.parentNode, _0x49ea43 && (_0x49ea43.selectedIndex, _0x49ea43.parentNode && _0x49ea43.parentNode.selectedIndex);
    }
  }), _0xec6372.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
    _0xec6372.propFix[this.toLowerCase()] = this;
  }), _0xec6372.fn.extend({
    'addClass': function (_0x25c1f6) {
      var _0x128318,
        _0xe2eb11,
        _0x278dc0,
        _0x5f51e8,
        _0x1b6ad1,
        _0x48a271,
        _0x50b540 = 0x0;
      if (_0xec6372.isFunction(_0x25c1f6)) return this.each(function (_0x1912c6) {
        _0xec6372(this).addClass(_0x25c1f6.call(this, _0x1912c6, _0x197be8(this)));
      });
      if ('string' == typeof _0x25c1f6 && _0x25c1f6) {
        for (_0x128318 = _0x25c1f6.match(_0x55cd20) || []; _0xe2eb11 = this[_0x50b540++];) if (_0x5f51e8 = _0x197be8(_0xe2eb11), _0x278dc0 = 0x1 === _0xe2eb11.nodeType && " " + _0x47a3e4(_0x5f51e8) + " ") {
          for (_0x48a271 = 0x0; _0x1b6ad1 = _0x128318[_0x48a271++];) 0x0 > _0x278dc0.indexOf(" " + _0x1b6ad1 + " ") && (_0x278dc0 += _0x1b6ad1 + " ");
          _0x278dc0 = _0x47a3e4(_0x278dc0), _0x5f51e8 !== _0x278dc0 && _0xe2eb11.setAttribute('class', _0x278dc0);
        }
      }
      return this;
    },
    'removeClass': function (_0x284531) {
      var _0x393118,
        _0x192c9e,
        _0x25aee4,
        _0x486047,
        _0x143c9a,
        _0x44195d,
        _0x1a5720 = 0x0;
      if (_0xec6372.isFunction(_0x284531)) return this.each(function (_0x10f7b2) {
        _0xec6372(this).removeClass(_0x284531.call(this, _0x10f7b2, _0x197be8(this)));
      });
      if (!arguments.length) return this.attr('class', '');
      if ('string' == typeof _0x284531 && _0x284531) {
        for (_0x393118 = _0x284531.match(_0x55cd20) || []; _0x192c9e = this[_0x1a5720++];) if (_0x486047 = _0x197be8(_0x192c9e), _0x25aee4 = 0x1 === _0x192c9e.nodeType && " " + _0x47a3e4(_0x486047) + " ") {
          for (_0x44195d = 0x0; _0x143c9a = _0x393118[_0x44195d++];) for (; -0x1 < _0x25aee4.indexOf(" " + _0x143c9a + " ");) _0x25aee4 = _0x25aee4.replace(" " + _0x143c9a + " ", " ");
          _0x25aee4 = _0x47a3e4(_0x25aee4), _0x486047 !== _0x25aee4 && _0x192c9e.setAttribute('class', _0x25aee4);
        }
      }
      return this;
    },
    'toggleClass': function (_0x4a27da, _0x22b0d0) {
      var _0x2d0ba8 = typeof _0x4a27da;
      return 'boolean' == typeof _0x22b0d0 && 'string' === _0x2d0ba8 ? _0x22b0d0 ? this.addClass(_0x4a27da) : this.removeClass(_0x4a27da) : _0xec6372.isFunction(_0x4a27da) ? this.each(function (_0xfc7636) {
        _0xec6372(this).toggleClass(_0x4a27da.call(this, _0xfc7636, _0x197be8(this), _0x22b0d0), _0x22b0d0);
      }) : this.each(function () {
        var _0xdf4151, _0x3b4dd7, _0x17c2d8, _0x81b018;
        if ('string' === _0x2d0ba8) {
          _0x3b4dd7 = 0x0, _0x17c2d8 = _0xec6372(this);
          for (_0x81b018 = _0x4a27da.match(_0x55cd20) || []; _0xdf4151 = _0x81b018[_0x3b4dd7++];) _0x17c2d8.hasClass(_0xdf4151) ? _0x17c2d8.removeClass(_0xdf4151) : _0x17c2d8.addClass(_0xdf4151);
        } else void 0x0 !== _0x4a27da && 'boolean' !== _0x2d0ba8 || (_0xdf4151 = _0x197be8(this), _0xdf4151 && _0x254586.set(this, '__className__', _0xdf4151), this.setAttribute && this.setAttribute('class', _0xdf4151 || !0x1 === _0x4a27da ? '' : _0x254586.get(this, '__className__') || ''));
      });
    },
    'hasClass': function (_0x4e8164) {
      var _0x573211,
        _0x536fa8 = 0x0;
      for (_0x4e8164 = " " + _0x4e8164 + " "; _0x573211 = this[_0x536fa8++];) if (0x1 === _0x573211.nodeType && -0x1 < (" " + _0x47a3e4(_0x197be8(_0x573211)) + " ").indexOf(_0x4e8164)) return !0x0;
      return !0x1;
    }
  });
  var _0x278276 = /\r/g;
  _0xec6372.fn.extend({
    'val': function (_0xa7208) {
      var _0x4fec90,
        _0xb1ed4d,
        _0x21e8c6,
        _0x5e7c6f = this[0x0];
      if (arguments.length) return _0x21e8c6 = _0xec6372.isFunction(_0xa7208), this.each(function (_0x3c62e7) {
        var _0x53f4f2;
        0x1 === this.nodeType && (_0x53f4f2 = _0x21e8c6 ? _0xa7208.call(this, _0x3c62e7, _0xec6372(this).val()) : _0xa7208, null == _0x53f4f2 ? _0x53f4f2 = '' : 'number' == typeof _0x53f4f2 ? _0x53f4f2 += '' : Array.isArray(_0x53f4f2) && (_0x53f4f2 = _0xec6372.map(_0x53f4f2, function (_0x3d1e47) {
          return null == _0x3d1e47 ? '' : _0x3d1e47 + '';
        })), _0x4fec90 = _0xec6372.valHooks[this.type] || _0xec6372.valHooks[this.nodeName.toLowerCase()], _0x4fec90 && 'set' in _0x4fec90 && void 0x0 !== _0x4fec90.set(this, _0x53f4f2, 'value') || (this.value = _0x53f4f2));
      });
      if (_0x5e7c6f) return _0x4fec90 = _0xec6372.valHooks[_0x5e7c6f.type] || _0xec6372.valHooks[_0x5e7c6f.nodeName.toLowerCase()], _0x4fec90 && 'get' in _0x4fec90 && void 0x0 !== (_0xb1ed4d = _0x4fec90.get(_0x5e7c6f, 'value')) ? _0xb1ed4d : (_0xb1ed4d = _0x5e7c6f.value, 'string' == typeof _0xb1ed4d ? _0xb1ed4d.replace(_0x278276, '') : null == _0xb1ed4d ? '' : _0xb1ed4d);
    }
  }), _0xec6372.extend({
    'valHooks': {
      'option': {
        'get': function (_0x241bca) {
          var _0x28ea5f = _0xec6372.find.attr(_0x241bca, 'value');
          return null != _0x28ea5f ? _0x28ea5f : _0x47a3e4(_0xec6372.text(_0x241bca));
        }
      },
      'select': {
        'get': function (_0x291c7b) {
          var _0x2c2df8,
            _0x4937dd,
            _0x20fd94 = _0x291c7b.options,
            _0x51c5f8 = _0x291c7b.selectedIndex,
            _0x12e39a = 'select-one' === _0x291c7b.type,
            _0x5a1412 = _0x12e39a ? null : [],
            _0x42cde1 = _0x12e39a ? _0x51c5f8 + 0x1 : _0x20fd94.length;
          for (_0x4937dd = 0x0 > _0x51c5f8 ? _0x42cde1 : _0x12e39a ? _0x51c5f8 : 0x0; _0x4937dd < _0x42cde1; _0x4937dd++) if (_0x2c2df8 = _0x20fd94[_0x4937dd], (_0x2c2df8.selected || _0x4937dd === _0x51c5f8) && !_0x2c2df8.disabled && (!_0x2c2df8.parentNode.disabled || !_0xa2643(_0x2c2df8.parentNode, 'optgroup'))) {
            if (_0x291c7b = _0xec6372(_0x2c2df8).val(), _0x12e39a) return _0x291c7b;
            _0x5a1412.push(_0x291c7b);
          }
          return _0x5a1412;
        },
        'set': function (_0x4dc32b, _0x2a3371) {
          for (var _0x4e93d8, _0x5bbb13, _0x59dc76 = _0x4dc32b.options, _0x2e8992 = _0xec6372.makeArray(_0x2a3371), _0x55b23a = _0x59dc76.length; _0x55b23a--;) _0x5bbb13 = _0x59dc76[_0x55b23a], (_0x5bbb13.selected = -0x1 < _0xec6372.inArray(_0xec6372.valHooks.option.get(_0x5bbb13), _0x2e8992)) && (_0x4e93d8 = !0x0);
          return _0x4e93d8 || (_0x4dc32b.selectedIndex = -0x1), _0x2e8992;
        }
      }
    }
  }), _0xec6372.each(['radio', 'checkbox'], function () {
    _0xec6372.valHooks[this] = {
      'set': function (_0x6b11da, _0x4209cf) {
        if (Array.isArray(_0x4209cf)) return _0x6b11da.checked = -0x1 < _0xec6372.inArray(_0xec6372(_0x6b11da).val(), _0x4209cf);
      }
    }, _0x566ba2.checkOn || (_0xec6372.valHooks[this].get = function (_0x577dd0) {
      return null === _0x577dd0.getAttribute('value') ? 'on' : _0x577dd0.value;
    });
  });
  var _0x530d5d = /^(?:focusinfocus|focusoutblur)$/;
  _0xec6372.extend(_0xec6372.event, {
    'trigger': function (_0x3fba50, _0x19239a, _0x21a5fa, _0x2b1ecd) {
      var _0x528fca,
        _0x5191b4,
        _0x578a35,
        _0x3aef1b,
        _0x53e833,
        _0x2c561e,
        _0x1d6077,
        _0x373376 = [_0x21a5fa || _0x35e050],
        _0xc5b3be = _0x5b7500.call(_0x3fba50, 'type') ? _0x3fba50.type : _0x3fba50;
      _0x528fca = _0x5b7500.call(_0x3fba50, 'namespace') ? _0x3fba50.namespace.split('.') : [];
      if (_0x5191b4 = _0x578a35 = _0x21a5fa = _0x21a5fa || _0x35e050, 0x3 !== _0x21a5fa.nodeType && 0x8 !== _0x21a5fa.nodeType && !_0x530d5d.test(_0xc5b3be + _0xec6372.event.triggered) && (-0x1 < _0xc5b3be.indexOf('.') && (_0x528fca = _0xc5b3be.split('.'), _0xc5b3be = _0x528fca.shift(), _0x528fca.sort()), _0x53e833 = 0x0 > _0xc5b3be.indexOf(':') && 'on' + _0xc5b3be, _0x3fba50 = _0x3fba50[_0xec6372.expando] ? _0x3fba50 : new _0xec6372.Event(_0xc5b3be, 'object' == typeof _0x3fba50 && _0x3fba50), _0x3fba50.isTrigger = _0x2b1ecd ? 0x2 : 0x3, _0x3fba50.namespace = _0x528fca.join('.'), _0x3fba50.rnamespace = _0x3fba50.namespace ? RegExp("(^|\\.)" + _0x528fca.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, _0x3fba50.result = void 0x0, _0x3fba50.target || (_0x3fba50.target = _0x21a5fa), _0x19239a = null == _0x19239a ? [_0x3fba50] : _0xec6372.makeArray(_0x19239a, [_0x3fba50]), _0x1d6077 = _0xec6372.event.special[_0xc5b3be] || {}, _0x2b1ecd || !_0x1d6077.trigger || !0x1 !== _0x1d6077.trigger.apply(_0x21a5fa, _0x19239a))) {
        if (!_0x2b1ecd && !_0x1d6077.noBubble && !_0xec6372.isWindow(_0x21a5fa)) {
          _0x3aef1b = _0x1d6077.delegateType || _0xc5b3be;
          for (_0x530d5d.test(_0x3aef1b + _0xc5b3be) || (_0x5191b4 = _0x5191b4.parentNode); _0x5191b4; _0x5191b4 = _0x5191b4.parentNode) _0x373376.push(_0x5191b4), _0x578a35 = _0x5191b4;
          _0x578a35 === (_0x21a5fa.ownerDocument || _0x35e050) && _0x373376.push(_0x578a35.defaultView || _0x578a35.parentWindow || _0x30aa88);
        }
        for (_0x528fca = 0x0; (_0x5191b4 = _0x373376[_0x528fca++]) && !_0x3fba50.isPropagationStopped();) _0x3fba50.type = 0x1 < _0x528fca ? _0x3aef1b : _0x1d6077.bindType || _0xc5b3be, (_0x2c561e = (_0x254586.get(_0x5191b4, 'events') || {})[_0x3fba50.type] && _0x254586.get(_0x5191b4, 'handle')) && _0x2c561e.apply(_0x5191b4, _0x19239a), (_0x2c561e = _0x53e833 && _0x5191b4[_0x53e833]) && _0x2c561e.apply && _0x25a055(_0x5191b4) && (_0x3fba50.result = _0x2c561e.apply(_0x5191b4, _0x19239a), !0x1 === _0x3fba50.result && _0x3fba50.preventDefault());
        return _0x3fba50.type = _0xc5b3be, _0x2b1ecd || _0x3fba50.isDefaultPrevented() || _0x1d6077._default && !0x1 !== _0x1d6077._default.apply(_0x373376.pop(), _0x19239a) || !_0x25a055(_0x21a5fa) || _0x53e833 && _0xec6372.isFunction(_0x21a5fa[_0xc5b3be]) && !_0xec6372.isWindow(_0x21a5fa) && (_0x578a35 = _0x21a5fa[_0x53e833], _0x578a35 && (_0x21a5fa[_0x53e833] = null), _0xec6372.event.triggered = _0xc5b3be, _0x21a5fa[_0xc5b3be](), _0xec6372.event.triggered = void 0x0, _0x578a35 && (_0x21a5fa[_0x53e833] = _0x578a35)), _0x3fba50.result;
      }
    },
    'simulate': function (_0x218c3f, _0x30241c, _0x179d49) {
      _0x218c3f = _0xec6372.extend(new _0xec6372.Event(), _0x179d49, {
        'type': _0x218c3f,
        'isSimulated': !0x0
      }), _0xec6372.event.trigger(_0x218c3f, null, _0x30241c);
    }
  }), _0xec6372.fn.extend({
    'trigger': function (_0x27c1d7, _0x40ba1a) {
      return this.each(function () {
        _0xec6372.event.trigger(_0x27c1d7, _0x40ba1a, this);
      });
    },
    'triggerHandler': function (_0x554bf1, _0x22009f) {
      var _0x4268ca = this[0x0];
      if (_0x4268ca) return _0xec6372.event.trigger(_0x554bf1, _0x22009f, _0x4268ca, !0x0);
    }
  }), _0xec6372.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (_0x53c729, _0x17bcf3) {
    _0xec6372.fn[_0x17bcf3] = function (_0x28a9dc, _0x39f0fd) {
      return 0x0 < arguments.length ? this.on(_0x17bcf3, null, _0x28a9dc, _0x39f0fd) : this.trigger(_0x17bcf3);
    };
  }), _0xec6372.fn.extend({
    'hover': function (_0x3dc300, _0x4b32dc) {
      return this.mouseenter(_0x3dc300).mouseleave(_0x4b32dc || _0x3dc300);
    }
  }), _0x566ba2.focusin = 'onfocusin' in _0x30aa88, _0x566ba2.focusin || _0xec6372.each({
    'focus': 'focusin',
    'blur': 'focusout'
  }, function (_0x70c99, _0x3684da) {
    var _0x166a0a = function (_0x317029) {
      _0xec6372.event.simulate(_0x3684da, _0x317029.target, _0xec6372.event.fix(_0x317029));
    };
    _0xec6372.event.special[_0x3684da] = {
      'setup': function () {
        var _0x1e74c0 = this.ownerDocument || this,
          _0x516a24 = _0x254586.access(_0x1e74c0, _0x3684da);
        _0x516a24 || _0x1e74c0.addEventListener(_0x70c99, _0x166a0a, !0x0), _0x254586.access(_0x1e74c0, _0x3684da, (_0x516a24 || 0x0) + 0x1);
      },
      'teardown': function () {
        var _0x4a1df6 = this.ownerDocument || this,
          _0x575138 = _0x254586.access(_0x4a1df6, _0x3684da) - 0x1;
        _0x575138 ? _0x254586.access(_0x4a1df6, _0x3684da, _0x575138) : (_0x4a1df6.removeEventListener(_0x70c99, _0x166a0a, !0x0), _0x254586.remove(_0x4a1df6, _0x3684da));
      }
    };
  });
  var _0x3e018c = _0x30aa88.location,
    _0xced443 = _0xec6372.now(),
    _0x2f3d7f = /\?/;
  _0xec6372.parseXML = function (_0x4424ec) {
    var _0x371fc1;
    if (!_0x4424ec || 'string' != typeof _0x4424ec) return null;
    try {
      _0x371fc1 = new _0x30aa88.DOMParser().parseFromString(_0x4424ec, 'text/xml');
    } catch (_0x4ef398) {
      _0x371fc1 = void 0x0;
    }
    return _0x371fc1 && !_0x371fc1.getElementsByTagName('parsererror').length || _0xec6372.error("Invalid XML: " + _0x4424ec), _0x371fc1;
  };
  var _0x30e73a = /\[\]$/,
    _0xcc889e = /\r?\n/g,
    _0x55b5ab = /^(?:submit|button|image|reset|file)$/i,
    _0x5ebdb4 = /^(?:input|select|textarea|keygen)/i;
  _0xec6372.param = function (_0x5370fe, _0xa24e35) {
    var _0x54cbbf,
      _0x41997d = [],
      _0x52f936 = function (_0x1c669b, _0x2bf604) {
        var _0x5a9ef9 = _0xec6372.isFunction(_0x2bf604) ? _0x2bf604() : _0x2bf604;
        _0x41997d[_0x41997d.length] = encodeURIComponent(_0x1c669b) + '=' + encodeURIComponent(null == _0x5a9ef9 ? '' : _0x5a9ef9);
      };
    if (Array.isArray(_0x5370fe) || _0x5370fe.jquery && !_0xec6372.isPlainObject(_0x5370fe)) _0xec6372.each(_0x5370fe, function () {
      _0x52f936(this.name, this.value);
    });else {
      for (_0x54cbbf in _0x5370fe) _0x9cfd2e(_0x54cbbf, _0x5370fe[_0x54cbbf], _0xa24e35, _0x52f936);
    }
    return _0x41997d.join('&');
  }, _0xec6372.fn.extend({
    'serialize': function () {
      return _0xec6372.param(this.serializeArray());
    },
    'serializeArray': function () {
      return this.map(function () {
        var _0x52ccae = _0xec6372.prop(this, 'elements');
        return _0x52ccae ? _0xec6372.makeArray(_0x52ccae) : this;
      }).filter(function () {
        var _0x1c7f77 = this.type;
        return this.name && !_0xec6372(this).is(':disabled') && _0x5ebdb4.test(this.nodeName) && !_0x55b5ab.test(_0x1c7f77) && (this.checked || !_0x181ab7.test(_0x1c7f77));
      }).map(function (_0x3d4da1, _0x24ffb8) {
        var _0x509eee = _0xec6372(this).val();
        return null == _0x509eee ? null : Array.isArray(_0x509eee) ? _0xec6372.map(_0x509eee, function (_0x706e36) {
          return {
            'name': _0x24ffb8.name,
            'value': _0x706e36.replace(_0xcc889e, "\r\n")
          };
        }) : {
          'name': _0x24ffb8.name,
          'value': _0x509eee.replace(_0xcc889e, "\r\n")
        };
      }).get();
    }
  });
  var _0x1ebbaa = /%20/g,
    _0x5176d2 = /#.*$/,
    _0x59b6e9 = /([?&])_=[^&]*/,
    _0x30a19e = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    _0x19d0f4 = /^(?:GET|HEAD)$/,
    _0x34a73f = /^\/\//,
    _0x53c8b9 = {},
    _0x1a6dd3 = {},
    _0x47e6b0 = '*/'.concat('*'),
    _0x556c82 = _0x35e050.createElement('a');
  _0x556c82.href = _0x3e018c.href, _0xec6372.extend({
    'active': 0x0,
    'lastModified': {},
    'etag': {},
    'ajaxSettings': {
      'url': _0x3e018c.href,
      'type': 'GET',
      'isLocal': /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_0x3e018c.protocol),
      'global': !0x0,
      'processData': !0x0,
      'async': !0x0,
      'contentType': "application/x-www-form-urlencoded; charset=UTF-8",
      'accepts': {
        '*': _0x47e6b0,
        'text': 'text/plain',
        'html': 'text/html',
        'xml': "application/xml, text/xml",
        'json': "application/json, text/javascript"
      },
      'contents': {
        'xml': /\bxml\b/,
        'html': /\bhtml/,
        'json': /\bjson\b/
      },
      'responseFields': {
        'xml': 'responseXML',
        'text': 'responseText',
        'json': 'responseJSON'
      },
      'converters': {
        "* text": String,
        "text html": !0x0,
        "text json": JSON.parse,
        "text xml": _0xec6372.parseXML
      },
      'flatOptions': {
        'url': !0x0,
        'context': !0x0
      }
    },
    'ajaxSetup': function (_0x47b9d0, _0x5e73ed) {
      return _0x5e73ed ? _0x54c706(_0x54c706(_0x47b9d0, _0xec6372.ajaxSettings), _0x5e73ed) : _0x54c706(_0xec6372.ajaxSettings, _0x47b9d0);
    },
    'ajaxPrefilter': _0x3dd131(_0x53c8b9),
    'ajaxTransport': _0x3dd131(_0x1a6dd3),
    'ajax': function (_0x43da7a, _0x51470d) {
      function _0x424581(_0x11f8f5, _0x221244, _0x3ece67, _0x312a00) {
        var _0x47000e,
          _0x330469,
          _0x214d4e,
          _0x3f200c,
          _0x483a41 = _0x221244;
        if (!_0x546a16) {
          _0x546a16 = !0x0, _0x351b93 && _0x30aa88.clearTimeout(_0x351b93), _0x150e1f = void 0x0, _0x538580 = _0x312a00 || '', _0x15cfc0.readyState = 0x0 < _0x11f8f5 ? 0x4 : 0x0, _0x312a00 = 0xc8 <= _0x11f8f5 && 0x12c > _0x11f8f5 || 0x130 === _0x11f8f5;
          if (_0x3ece67) {
            _0x214d4e = _0x140ff8;
            for (var _0x34b617 = _0x15cfc0, _0x383fd8, _0x24515c, _0x53af54, _0x2e85da, _0x11ee0b = _0x214d4e.contents, _0x46cc9f = _0x214d4e.dataTypes; '*' === _0x46cc9f[0x0];) _0x46cc9f.shift(), void 0x0 === _0x383fd8 && (_0x383fd8 = _0x214d4e.mimeType || _0x34b617.getResponseHeader('Content-Type'));
            if (_0x383fd8) {
              for (_0x24515c in _0x11ee0b) if (_0x11ee0b[_0x24515c] && _0x11ee0b[_0x24515c].test(_0x383fd8)) {
                _0x46cc9f.unshift(_0x24515c);
                break;
              }
            }
            if (_0x46cc9f[0x0] in _0x3ece67) _0x53af54 = _0x46cc9f[0x0];else {
              for (_0x24515c in _0x3ece67) {
                if (!_0x46cc9f[0x0] || _0x214d4e.converters[_0x24515c + " " + _0x46cc9f[0x0]]) {
                  _0x53af54 = _0x24515c;
                  break;
                }
                _0x2e85da || (_0x2e85da = _0x24515c);
              }
              _0x53af54 = _0x53af54 || _0x2e85da;
            }
            _0x214d4e = _0x3ece67 = _0x53af54 ? (_0x53af54 !== _0x46cc9f[0x0] && _0x46cc9f.unshift(_0x53af54), _0x3ece67[_0x53af54]) : void 0x0;
          }
          var _0x200c4c;
          _0x548207: {
            _0x3ece67 = _0x140ff8, _0x383fd8 = _0x214d4e, _0x24515c = _0x15cfc0, _0x53af54 = _0x312a00;
            var _0x5cfed9, _0x28272c, _0x3ffbe6;
            _0x214d4e = {}, _0x34b617 = _0x3ece67.dataTypes.slice();
            if (_0x34b617[0x1]) {
              for (_0x5cfed9 in _0x3ece67.converters) _0x214d4e[_0x5cfed9.toLowerCase()] = _0x3ece67.converters[_0x5cfed9];
            }
            for (_0x2e85da = _0x34b617.shift(); _0x2e85da;) if (_0x3ece67.responseFields[_0x2e85da] && (_0x24515c[_0x3ece67.responseFields[_0x2e85da]] = _0x383fd8), !_0x3ffbe6 && _0x53af54 && _0x3ece67.dataFilter && (_0x383fd8 = _0x3ece67.dataFilter(_0x383fd8, _0x3ece67.dataType)), _0x3ffbe6 = _0x2e85da, _0x2e85da = _0x34b617.shift()) {
              if ('*' === _0x2e85da) _0x2e85da = _0x3ffbe6;else {
                if ('*' !== _0x3ffbe6 && _0x3ffbe6 !== _0x2e85da) {
                  if (_0x5cfed9 = _0x214d4e[_0x3ffbe6 + " " + _0x2e85da] || _0x214d4e["* " + _0x2e85da], !_0x5cfed9) {
                    for (_0x200c4c in _0x214d4e) if (_0x28272c = _0x200c4c.split(" "), _0x28272c[0x1] === _0x2e85da && (_0x5cfed9 = _0x214d4e[_0x3ffbe6 + " " + _0x28272c[0x0]] || _0x214d4e["* " + _0x28272c[0x0]])) {
                      !0x0 === _0x5cfed9 ? _0x5cfed9 = _0x214d4e[_0x200c4c] : !0x0 !== _0x214d4e[_0x200c4c] && (_0x2e85da = _0x28272c[0x0], _0x34b617.unshift(_0x28272c[0x1]));
                      break;
                    }
                  }
                  if (!0x0 !== _0x5cfed9) {
                    if (_0x5cfed9 && _0x3ece67.throws) _0x383fd8 = _0x5cfed9(_0x383fd8);else try {
                      _0x383fd8 = _0x5cfed9(_0x383fd8);
                    } catch (_0x522e39) {
                      _0x200c4c = {
                        'state': 'parsererror',
                        'error': _0x5cfed9 ? _0x522e39 : "No conversion from " + _0x3ffbe6 + " to " + _0x2e85da
                      };
                      break _0x548207;
                    }
                  }
                }
              }
            }
            _0x200c4c = {
              'state': 'success',
              'data': _0x383fd8
            };
          }
          _0x214d4e = _0x200c4c, _0x312a00 ? (_0x140ff8.ifModified && (_0x3f200c = _0x15cfc0.getResponseHeader('Last-Modified'), _0x3f200c && (_0xec6372.lastModified[_0x19de81] = _0x3f200c), _0x3f200c = _0x15cfc0.getResponseHeader('etag'), _0x3f200c && (_0xec6372.etag[_0x19de81] = _0x3f200c)), 0xcc === _0x11f8f5 || 'HEAD' === _0x140ff8.type ? _0x483a41 = 'nocontent' : 0x130 === _0x11f8f5 ? _0x483a41 = 'notmodified' : (_0x483a41 = _0x214d4e.state, _0x47000e = _0x214d4e.data, _0x330469 = _0x214d4e.error, _0x312a00 = !_0x330469)) : (_0x330469 = _0x483a41, !_0x11f8f5 && _0x483a41 || (_0x483a41 = 'error', 0x0 > _0x11f8f5 && (_0x11f8f5 = 0x0))), _0x15cfc0.status = _0x11f8f5, _0x15cfc0.statusText = (_0x221244 || _0x483a41) + '', _0x312a00 ? _0x4e2dee.resolveWith(_0x37ac85, [_0x47000e, _0x483a41, _0x15cfc0]) : _0x4e2dee.rejectWith(_0x37ac85, [_0x15cfc0, _0x483a41, _0x330469]), _0x15cfc0.statusCode(_0x1d9465), _0x1d9465 = void 0x0, _0x4213f5 && _0x2e09b5.trigger(_0x312a00 ? 'ajaxSuccess' : 'ajaxError', [_0x15cfc0, _0x140ff8, _0x312a00 ? _0x47000e : _0x330469]), _0xfee27c.fireWith(_0x37ac85, [_0x15cfc0, _0x483a41]), _0x4213f5 && (_0x2e09b5.trigger('ajaxComplete', [_0x15cfc0, _0x140ff8]), --_0xec6372.active || _0xec6372.event.trigger('ajaxStop'));
        }
      }
      'object' == typeof _0x43da7a && (_0x51470d = _0x43da7a, _0x43da7a = void 0x0), _0x51470d = _0x51470d || {};
      var _0x150e1f,
        _0x19de81,
        _0x538580,
        _0x2d88d4,
        _0x351b93,
        _0x53914b,
        _0x546a16,
        _0x4213f5,
        _0x3a5ad9,
        _0x24eb49,
        _0x140ff8 = _0xec6372.ajaxSetup({}, _0x51470d),
        _0x37ac85 = _0x140ff8.context || _0x140ff8,
        _0x2e09b5 = _0x140ff8.context && (_0x37ac85.nodeType || _0x37ac85.jquery) ? _0xec6372(_0x37ac85) : _0xec6372.event,
        _0x4e2dee = _0xec6372.Deferred(),
        _0xfee27c = _0xec6372.Callbacks("once memory"),
        _0x1d9465 = _0x140ff8.statusCode || {},
        _0xffc413 = {},
        _0xaf0294 = {},
        _0x28d45a = 'canceled',
        _0x15cfc0 = {
          'readyState': 0x0,
          'getResponseHeader': function (_0x45eaa4) {
            var _0x5caed7;
            if (_0x546a16) {
              if (!_0x2d88d4) {
                for (_0x2d88d4 = {}; _0x5caed7 = _0x30a19e.exec(_0x538580);) _0x2d88d4[_0x5caed7[0x1].toLowerCase()] = _0x5caed7[0x2];
              }
              _0x5caed7 = _0x2d88d4[_0x45eaa4.toLowerCase()];
            }
            return null == _0x5caed7 ? null : _0x5caed7;
          },
          'getAllResponseHeaders': function () {
            return _0x546a16 ? _0x538580 : null;
          },
          'setRequestHeader': function (_0x539017, _0x14e2b0) {
            return null == _0x546a16 && (_0x539017 = _0xaf0294[_0x539017.toLowerCase()] = _0xaf0294[_0x539017.toLowerCase()] || _0x539017, _0xffc413[_0x539017] = _0x14e2b0), this;
          },
          'overrideMimeType': function (_0x1ac3c1) {
            return null == _0x546a16 && (_0x140ff8.mimeType = _0x1ac3c1), this;
          },
          'statusCode': function (_0xc79a74) {
            var _0x329733;
            if (_0xc79a74) {
              if (_0x546a16) _0x15cfc0.always(_0xc79a74[_0x15cfc0.status]);else {
                for (_0x329733 in _0xc79a74) _0x1d9465[_0x329733] = [_0x1d9465[_0x329733], _0xc79a74[_0x329733]];
              }
            }
            return this;
          },
          'abort': function (_0xbd6d1b) {
            return _0xbd6d1b = _0xbd6d1b || _0x28d45a, _0x150e1f && _0x150e1f.abort(_0xbd6d1b), _0x424581(0x0, _0xbd6d1b), this;
          }
        };
      if (_0x4e2dee.promise(_0x15cfc0), _0x140ff8.url = ((_0x43da7a || _0x140ff8.url || _0x3e018c.href) + '').replace(_0x34a73f, _0x3e018c.protocol + '//'), _0x140ff8.type = _0x51470d.method || _0x51470d.type || _0x140ff8.method || _0x140ff8.type, _0x140ff8.dataTypes = (_0x140ff8.dataType || '*').toLowerCase().match(_0x55cd20) || [''], null == _0x140ff8.crossDomain) {
        _0x53914b = _0x35e050.createElement('a');
        try {
          _0x53914b.href = _0x140ff8.url, _0x53914b.href = _0x53914b.href, _0x140ff8.crossDomain = _0x556c82.protocol + '//' + _0x556c82.host != _0x53914b.protocol + '//' + _0x53914b.host;
        } catch (_0x5b9726) {
          _0x140ff8.crossDomain = !0x0;
        }
      }
      if (_0x140ff8.data && _0x140ff8.processData && 'string' != typeof _0x140ff8.data && (_0x140ff8.data = _0xec6372.param(_0x140ff8.data, _0x140ff8.traditional)), _0x2f3a21(_0x53c8b9, _0x140ff8, _0x51470d, _0x15cfc0), _0x546a16) return _0x15cfc0;
      (_0x4213f5 = _0xec6372.event && _0x140ff8.global) && 0x0 === _0xec6372.active++ && _0xec6372.event.trigger('ajaxStart'), _0x140ff8.type = _0x140ff8.type.toUpperCase(), _0x140ff8.hasContent = !_0x19d0f4.test(_0x140ff8.type), _0x19de81 = _0x140ff8.url.replace(_0x5176d2, ''), _0x140ff8.hasContent ? _0x140ff8.data && _0x140ff8.processData && 0x0 === (_0x140ff8.contentType || '').indexOf('application/x-www-form-urlencoded') && (_0x140ff8.data = _0x140ff8.data.replace(_0x1ebbaa, '+')) : (_0x24eb49 = _0x140ff8.url.slice(_0x19de81.length), _0x140ff8.data && (_0x19de81 += (_0x2f3d7f.test(_0x19de81) ? '&' : '?') + _0x140ff8.data, delete _0x140ff8.data), !0x1 === _0x140ff8.cache && (_0x19de81 = _0x19de81.replace(_0x59b6e9, '$1'), _0x24eb49 = (_0x2f3d7f.test(_0x19de81) ? '&' : '?') + '_=' + _0xced443++ + _0x24eb49), _0x140ff8.url = _0x19de81 + _0x24eb49), _0x140ff8.ifModified && (_0xec6372.lastModified[_0x19de81] && _0x15cfc0.setRequestHeader('If-Modified-Since', _0xec6372.lastModified[_0x19de81]), _0xec6372.etag[_0x19de81] && _0x15cfc0.setRequestHeader('If-None-Match', _0xec6372.etag[_0x19de81])), (_0x140ff8.data && _0x140ff8.hasContent && !0x1 !== _0x140ff8.contentType || _0x51470d.contentType) && _0x15cfc0.setRequestHeader('Content-Type', _0x140ff8.contentType), _0x15cfc0.setRequestHeader('Accept', _0x140ff8.dataTypes[0x0] && _0x140ff8.accepts[_0x140ff8.dataTypes[0x0]] ? _0x140ff8.accepts[_0x140ff8.dataTypes[0x0]] + ('*' !== _0x140ff8.dataTypes[0x0] ? ", " + _0x47e6b0 + "; q=0.01" : '') : _0x140ff8.accepts['*']);
      for (_0x3a5ad9 in _0x140ff8.headers) _0x15cfc0.setRequestHeader(_0x3a5ad9, _0x140ff8.headers[_0x3a5ad9]);
      if (_0x140ff8.beforeSend && (!0x1 === _0x140ff8.beforeSend.call(_0x37ac85, _0x15cfc0, _0x140ff8) || _0x546a16)) return _0x15cfc0.abort();
      if (_0x28d45a = 'abort', _0xfee27c.add(_0x140ff8.complete), _0x15cfc0.done(_0x140ff8.success), _0x15cfc0.fail(_0x140ff8.error), _0x150e1f = _0x2f3a21(_0x1a6dd3, _0x140ff8, _0x51470d, _0x15cfc0)) {
        if (_0x15cfc0.readyState = 0x1, _0x4213f5 && _0x2e09b5.trigger('ajaxSend', [_0x15cfc0, _0x140ff8]), _0x546a16) return _0x15cfc0;
        _0x140ff8.async && 0x0 < _0x140ff8.timeout && (_0x351b93 = _0x30aa88.setTimeout(function () {
          _0x15cfc0.abort('timeout');
        }, _0x140ff8.timeout));
        try {
          _0x546a16 = !0x1, _0x150e1f.send(_0xffc413, _0x424581);
        } catch (_0x3af711) {
          if (_0x546a16) throw _0x3af711;
          _0x424581(-0x1, _0x3af711);
        }
      } else _0x424581(-0x1, "No Transport");
      return _0x15cfc0;
    },
    'getJSON': function (_0x186ad6, _0x587bb1, _0x515d70) {
      return _0xec6372.get(_0x186ad6, _0x587bb1, _0x515d70, 'json');
    },
    'getScript': function (_0x2723a7, _0x4e8ceb) {
      return _0xec6372.get(_0x2723a7, void 0x0, _0x4e8ceb, 'script');
    }
  }), _0xec6372.each(['get', 'post'], function (_0x376b58, _0x499e08) {
    _0xec6372[_0x499e08] = function (_0x5436e5, _0x432a6f, _0x892ee3, _0x35d3a0) {
      return _0xec6372.isFunction(_0x432a6f) && (_0x35d3a0 = _0x35d3a0 || _0x892ee3, _0x892ee3 = _0x432a6f, _0x432a6f = void 0x0), _0xec6372.ajax(_0xec6372.extend({
        'url': _0x5436e5,
        'type': _0x499e08,
        'dataType': _0x35d3a0,
        'data': _0x432a6f,
        'success': _0x892ee3
      }, _0xec6372.isPlainObject(_0x5436e5) && _0x5436e5));
    };
  }), _0xec6372._evalUrl = function (_0x258330) {
    return _0xec6372.ajax({
      'url': _0x258330,
      'type': 'GET',
      'dataType': 'script',
      'cache': !0x0,
      'async': !0x1,
      'global': !0x1,
      'throws': !0x0
    });
  }, _0xec6372.fn.extend({
    'wrapAll': function (_0x4cba44) {
      var _0x3954ac;
      return this[0x0] && (_0xec6372.isFunction(_0x4cba44) && (_0x4cba44 = _0x4cba44.call(this[0x0])), _0x3954ac = _0xec6372(_0x4cba44, this[0x0].ownerDocument).eq(0x0).clone(!0x0), this[0x0].parentNode && _0x3954ac.insertBefore(this[0x0]), _0x3954ac.map(function () {
        for (var _0x3f0d6b = this; _0x3f0d6b.firstElementChild;) _0x3f0d6b = _0x3f0d6b.firstElementChild;
        return _0x3f0d6b;
      }).append(this)), this;
    },
    'wrapInner': function (_0x5749c5) {
      return _0xec6372.isFunction(_0x5749c5) ? this.each(function (_0xd89e90) {
        _0xec6372(this).wrapInner(_0x5749c5.call(this, _0xd89e90));
      }) : this.each(function () {
        var _0x15916d = _0xec6372(this),
          _0x37d59e = _0x15916d.contents();
        _0x37d59e.length ? _0x37d59e.wrapAll(_0x5749c5) : _0x15916d.append(_0x5749c5);
      });
    },
    'wrap': function (_0x5817b4) {
      var _0x4bf158 = _0xec6372.isFunction(_0x5817b4);
      return this.each(function (_0xe29875) {
        _0xec6372(this).wrapAll(_0x4bf158 ? _0x5817b4.call(this, _0xe29875) : _0x5817b4);
      });
    },
    'unwrap': function (_0x44cda4) {
      return this.parent(_0x44cda4).not('body').each(function () {
        _0xec6372(this).replaceWith(this.childNodes);
      }), this;
    }
  }), _0xec6372.expr.pseudos.hidden = function (_0x4b35d9) {
    return !_0xec6372.expr.pseudos.visible(_0x4b35d9);
  }, _0xec6372.expr.pseudos.visible = function (_0x2e3afd) {
    return !(!_0x2e3afd.offsetWidth && !_0x2e3afd.offsetHeight && !_0x2e3afd.getClientRects().length);
  }, _0xec6372.ajaxSettings.xhr = function () {
    try {
      return new _0x30aa88.XMLHttpRequest();
    } catch (_0x2027b1) {}
  };
  var _0x480892 = {
      '0': 0xc8,
      0x4c7: 0xcc
    },
    _0xa23fce = _0xec6372.ajaxSettings.xhr();
  _0x566ba2.cors = !!_0xa23fce && 'withCredentials' in _0xa23fce, _0x566ba2.ajax = _0xa23fce = !!_0xa23fce, _0xec6372.ajaxTransport(function (_0x3171d0) {
    var _0x18f8f0, _0x28d11b;
    if (_0x566ba2.cors || _0xa23fce && !_0x3171d0.crossDomain) return {
      'send': function (_0x2c69df, _0x46a8a4) {
        var _0x292970,
          _0x561e78 = _0x3171d0.xhr();
        if (_0x561e78.open(_0x3171d0.type, _0x3171d0.url, _0x3171d0.async, _0x3171d0.username, _0x3171d0.password), _0x3171d0.xhrFields) {
          for (_0x292970 in _0x3171d0.xhrFields) _0x561e78[_0x292970] = _0x3171d0.xhrFields[_0x292970];
        }
        _0x3171d0.mimeType && _0x561e78.overrideMimeType && _0x561e78.overrideMimeType(_0x3171d0.mimeType), _0x3171d0.crossDomain || _0x2c69df['X-Requested-With'] || (_0x2c69df['X-Requested-With'] = 'XMLHttpRequest');
        for (_0x292970 in _0x2c69df) _0x561e78.setRequestHeader(_0x292970, _0x2c69df[_0x292970]);
        _0x18f8f0 = function (_0x529d79) {
          return function () {
            _0x18f8f0 && (_0x18f8f0 = _0x28d11b = _0x561e78.onload = _0x561e78.onerror = _0x561e78.onabort = _0x561e78.onreadystatechange = null, 'abort' === _0x529d79 ? _0x561e78.abort() : 'error' === _0x529d79 ? 'number' != typeof _0x561e78.status ? _0x46a8a4(0x0, 'error') : _0x46a8a4(_0x561e78.status, _0x561e78.statusText) : _0x46a8a4(_0x480892[_0x561e78.status] || _0x561e78.status, _0x561e78.statusText, 'text' !== (_0x561e78.responseType || 'text') || 'string' != typeof _0x561e78.responseText ? {
              'binary': _0x561e78.response
            } : {
              'text': _0x561e78.responseText
            }, _0x561e78.getAllResponseHeaders()));
          };
        }, _0x561e78.onload = _0x18f8f0(), _0x28d11b = _0x561e78.onerror = _0x18f8f0('error'), void 0x0 !== _0x561e78.onabort ? _0x561e78.onabort = _0x28d11b : _0x561e78.onreadystatechange = function () {
          0x4 === _0x561e78.readyState && _0x30aa88.setTimeout(function () {
            _0x18f8f0 && _0x28d11b();
          });
        }, _0x18f8f0 = _0x18f8f0('abort');
        try {
          _0x561e78.send(_0x3171d0.hasContent && _0x3171d0.data || null);
        } catch (_0x31b41a) {
          if (_0x18f8f0) throw _0x31b41a;
        }
      },
      'abort': function () {
        _0x18f8f0 && _0x18f8f0();
      }
    };
  }), _0xec6372.ajaxPrefilter(function (_0x11c508) {
    _0x11c508.crossDomain && (_0x11c508.contents.script = !0x1);
  }), _0xec6372.ajaxSetup({
    'accepts': {
      'script': "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    'contents': {
      'script': /\b(?:java|ecma)script\b/
    },
    'converters': {
      "text script": function (_0x297a1b) {
        return _0xec6372.globalEval(_0x297a1b), _0x297a1b;
      }
    }
  }), _0xec6372.ajaxPrefilter('script', function (_0x12136e) {
    void 0x0 === _0x12136e.cache && (_0x12136e.cache = !0x1), _0x12136e.crossDomain && (_0x12136e.type = 'GET');
  }), _0xec6372.ajaxTransport('script', function (_0x3092a9) {
    if (_0x3092a9.crossDomain) {
      var _0x27608e, _0x37bbd3;
      return {
        'send': function (_0x36f2f7, _0x2dc010) {
          _0x27608e = _0xec6372('<script>').prop({
            'charset': _0x3092a9.scriptCharset,
            'src': _0x3092a9.url
          }).on("load error", _0x37bbd3 = function (_0x24edd6) {
            _0x27608e.remove(), _0x37bbd3 = null, _0x24edd6 && _0x2dc010('error' === _0x24edd6.type ? 0x194 : 0xc8, _0x24edd6.type);
          }), _0x35e050.head.appendChild(_0x27608e[0x0]);
        },
        'abort': function () {
          _0x37bbd3 && _0x37bbd3();
        }
      };
    }
  });
  var _0x9e26ed = [],
    _0x7bc97b = /(=)\?(?=&|$)|\?\?/;
  _0xec6372.ajaxSetup({
    'jsonp': 'callback',
    'jsonpCallback': function () {
      var _0x50abb8 = _0x9e26ed.pop() || _0xec6372.expando + '_' + _0xced443++;
      return this[_0x50abb8] = !0x0, _0x50abb8;
    }
  }), _0xec6372.ajaxPrefilter("json jsonp", function (_0x4d87af, _0x4b2b3f, _0x44e10c) {
    var _0x585e74,
      _0x313476,
      _0x4254a7,
      _0x17279e = !0x1 !== _0x4d87af.jsonp && (_0x7bc97b.test(_0x4d87af.url) ? 'url' : 'string' == typeof _0x4d87af.data && 0x0 === (_0x4d87af.contentType || '').indexOf('application/x-www-form-urlencoded') && _0x7bc97b.test(_0x4d87af.data) && 'data');
    if (_0x17279e || 'jsonp' === _0x4d87af.dataTypes[0x0]) return _0x585e74 = _0x4d87af.jsonpCallback = _0xec6372.isFunction(_0x4d87af.jsonpCallback) ? _0x4d87af.jsonpCallback() : _0x4d87af.jsonpCallback, _0x17279e ? _0x4d87af[_0x17279e] = _0x4d87af[_0x17279e].replace(_0x7bc97b, '$1' + _0x585e74) : !0x1 !== _0x4d87af.jsonp && (_0x4d87af.url += (_0x2f3d7f.test(_0x4d87af.url) ? '&' : '?') + _0x4d87af.jsonp + '=' + _0x585e74), _0x4d87af.converters["script json"] = function () {
      return _0x4254a7 || _0xec6372.error(_0x585e74 + " was not called"), _0x4254a7[0x0];
    }, _0x4d87af.dataTypes[0x0] = 'json', _0x313476 = _0x30aa88[_0x585e74], _0x30aa88[_0x585e74] = function () {
      _0x4254a7 = arguments;
    }, _0x44e10c.always(function () {
      void 0x0 === _0x313476 ? _0xec6372(_0x30aa88).removeProp(_0x585e74) : _0x30aa88[_0x585e74] = _0x313476, _0x4d87af[_0x585e74] && (_0x4d87af.jsonpCallback = _0x4b2b3f.jsonpCallback, _0x9e26ed.push(_0x585e74)), _0x4254a7 && _0xec6372.isFunction(_0x313476) && _0x313476(_0x4254a7[0x0]), _0x4254a7 = _0x313476 = void 0x0;
    }), 'script';
  });
  var _0x5450c2 = _0x566ba2,
    _0x160888,
    _0x1da6c1 = _0x35e050.implementation.createHTMLDocument('').body;
  _0x160888 = (_0x1da6c1.innerHTML = '<form></form><form></form>', 0x2 === _0x1da6c1.childNodes.length), _0x5450c2.createHTMLDocument = _0x160888, _0xec6372.parseHTML = function (_0x49780b, _0x221e0c, _0x392477) {
    if ('string' != typeof _0x49780b) return [];
    'boolean' == typeof _0x221e0c && (_0x392477 = _0x221e0c, _0x221e0c = !0x1);
    var _0x3fbe30, _0x49018c, _0x45e844;
    return _0x221e0c || (_0x566ba2.createHTMLDocument ? (_0x221e0c = _0x35e050.implementation.createHTMLDocument(''), _0x3fbe30 = _0x221e0c.createElement('base'), _0x3fbe30.href = _0x35e050.location.href, _0x221e0c.head.appendChild(_0x3fbe30)) : _0x221e0c = _0x35e050), _0x49018c = _0x288129.exec(_0x49780b), _0x45e844 = !_0x392477 && [], _0x49018c ? [_0x221e0c.createElement(_0x49018c[0x1])] : (_0x49018c = _0xdf7ab([_0x49780b], _0x221e0c, _0x45e844), _0x45e844 && _0x45e844.length && _0xec6372(_0x45e844).remove(), _0xec6372.merge([], _0x49018c.childNodes));
  }, _0xec6372.fn.load = function (_0x42f936, _0x4cdcbc, _0x55cedd) {
    var _0x4cb594,
      _0x4e7026,
      _0x4c4355,
      _0x15d372 = this,
      _0xaf722c = _0x42f936.indexOf(" ");
    return -0x1 < _0xaf722c && (_0x4cb594 = _0x47a3e4(_0x42f936.slice(_0xaf722c)), _0x42f936 = _0x42f936.slice(0x0, _0xaf722c)), _0xec6372.isFunction(_0x4cdcbc) ? (_0x55cedd = _0x4cdcbc, _0x4cdcbc = void 0x0) : _0x4cdcbc && 'object' == typeof _0x4cdcbc && (_0x4e7026 = 'POST'), 0x0 < _0x15d372.length && _0xec6372.ajax({
      'url': _0x42f936,
      'type': _0x4e7026 || 'GET',
      'dataType': 'html',
      'data': _0x4cdcbc
    }).done(function (_0x32897a) {
      _0x4c4355 = arguments, _0x15d372.html(_0x4cb594 ? _0xec6372('<div>').append(_0xec6372.parseHTML(_0x32897a)).find(_0x4cb594) : _0x32897a);
    }).always(_0x55cedd && function (_0x5de92d, _0x20afc) {
      _0x15d372.each(function () {
        _0x55cedd.apply(this, _0x4c4355 || [_0x5de92d.responseText, _0x20afc, _0x5de92d]);
      });
    }), this;
  }, _0xec6372.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (_0x2efcd2, _0x268e4d) {
    _0xec6372.fn[_0x268e4d] = function (_0x3ca5cd) {
      return this.on(_0x268e4d, _0x3ca5cd);
    };
  }), _0xec6372.expr.pseudos.animated = function (_0x3aec9c) {
    return _0xec6372.grep(_0xec6372.timers, function (_0x15b514) {
      return _0x3aec9c === _0x15b514.elem;
    }).length;
  }, _0xec6372.offset = {
    'setOffset': function (_0x1ed92a, _0x2890f4, _0x20f27d) {
      var _0x120312,
        _0x33c8eb,
        _0x53aa34,
        _0x496bb2,
        _0xedaafd,
        _0x26f8f1,
        _0x59e172 = _0xec6372.css(_0x1ed92a, 'position'),
        _0x1d8336 = _0xec6372(_0x1ed92a),
        _0x331dd4 = {};
      'static' === _0x59e172 && (_0x1ed92a.style.position = 'relative'), _0xedaafd = _0x1d8336.offset(), _0x53aa34 = _0xec6372.css(_0x1ed92a, 'top'), _0x26f8f1 = _0xec6372.css(_0x1ed92a, 'left'), ('absolute' === _0x59e172 || 'fixed' === _0x59e172) && -0x1 < (_0x53aa34 + _0x26f8f1).indexOf('auto') ? (_0x120312 = _0x1d8336.position(), _0x496bb2 = _0x120312.top, _0x33c8eb = _0x120312.left) : (_0x496bb2 = parseFloat(_0x53aa34) || 0x0, _0x33c8eb = parseFloat(_0x26f8f1) || 0x0), _0xec6372.isFunction(_0x2890f4) && (_0x2890f4 = _0x2890f4.call(_0x1ed92a, _0x20f27d, _0xec6372.extend({}, _0xedaafd))), null != _0x2890f4.top && (_0x331dd4.top = _0x2890f4.top - _0xedaafd.top + _0x496bb2), null != _0x2890f4.left && (_0x331dd4.left = _0x2890f4.left - _0xedaafd.left + _0x33c8eb), 'using' in _0x2890f4 ? _0x2890f4.using.call(_0x1ed92a, _0x331dd4) : _0x1d8336.css(_0x331dd4);
    }
  }, _0xec6372.fn.extend({
    'offset': function (_0x1afb80) {
      if (arguments.length) return void 0x0 === _0x1afb80 ? this : this.each(function (_0x3534ac) {
        _0xec6372.offset.setOffset(this, _0x1afb80, _0x3534ac);
      });
      var _0x1bba09,
        _0x37470e,
        _0xc449c3,
        _0x3c22d8,
        _0x5af343 = this[0x0];
      if (_0x5af343) return _0x5af343.getClientRects().length ? (_0xc449c3 = _0x5af343.getBoundingClientRect(), _0x1bba09 = _0x5af343.ownerDocument, _0x37470e = _0x1bba09.documentElement, _0x3c22d8 = _0x1bba09.defaultView, {
        'top': _0xc449c3.top + _0x3c22d8.pageYOffset - _0x37470e.clientTop,
        'left': _0xc449c3.left + _0x3c22d8.pageXOffset - _0x37470e.clientLeft
      }) : {
        'top': 0x0,
        'left': 0x0
      };
    },
    'position': function () {
      if (this[0x0]) {
        var _0x222556,
          _0x3e0463,
          _0x4a77a1 = this[0x0],
          _0x3da3ae = {
            'top': 0x0,
            'left': 0x0
          };
        return 'fixed' === _0xec6372.css(_0x4a77a1, 'position') ? _0x3e0463 = _0x4a77a1.getBoundingClientRect() : (_0x222556 = this.offsetParent(), _0x3e0463 = this.offset(), _0xa2643(_0x222556[0x0], 'html') || (_0x3da3ae = _0x222556.offset()), _0x3da3ae = {
          'top': _0x3da3ae.top + _0xec6372.css(_0x222556[0x0], 'borderTopWidth', !0x0),
          'left': _0x3da3ae.left + _0xec6372.css(_0x222556[0x0], 'borderLeftWidth', !0x0)
        }), {
          'top': _0x3e0463.top - _0x3da3ae.top - _0xec6372.css(_0x4a77a1, 'marginTop', !0x0),
          'left': _0x3e0463.left - _0x3da3ae.left - _0xec6372.css(_0x4a77a1, 'marginLeft', !0x0)
        };
      }
    },
    'offsetParent': function () {
      return this.map(function () {
        for (var _0x2c52f3 = this.offsetParent; _0x2c52f3 && 'static' === _0xec6372.css(_0x2c52f3, 'position');) _0x2c52f3 = _0x2c52f3.offsetParent;
        return _0x2c52f3 || _0x44d4fc;
      });
    }
  }), _0xec6372.each({
    'scrollLeft': 'pageXOffset',
    'scrollTop': 'pageYOffset'
  }, function (_0x51889c, _0x99dafd) {
    var _0x1887f8 = 'pageYOffset' === _0x99dafd;
    _0xec6372.fn[_0x51889c] = function (_0x392d56) {
      return _0x586365(this, function (_0x298203, _0x1e37f3, _0x542911) {
        var _0x3d2876;
        return _0xec6372.isWindow(_0x298203) ? _0x3d2876 = _0x298203 : 0x9 === _0x298203.nodeType && (_0x3d2876 = _0x298203.defaultView), void 0x0 === _0x542911 ? _0x3d2876 ? _0x3d2876[_0x99dafd] : _0x298203[_0x1e37f3] : void (_0x3d2876 ? _0x3d2876.scrollTo(_0x1887f8 ? _0x3d2876.pageXOffset : _0x542911, _0x1887f8 ? _0x542911 : _0x3d2876.pageYOffset) : _0x298203[_0x1e37f3] = _0x542911);
      }, _0x51889c, _0x392d56, arguments.length);
    };
  }), _0xec6372.each(['top', 'left'], function (_0x26a637, _0x175d3c) {
    _0xec6372.cssHooks[_0x175d3c] = _0x5181a6(_0x566ba2.pixelPosition, function (_0x3fe122, _0x3d9255) {
      if (_0x3d9255) return _0x3d9255 = _0x374336(_0x3fe122, _0x175d3c), _0x3c693b.test(_0x3d9255) ? _0xec6372(_0x3fe122).position()[_0x175d3c] + 'px' : _0x3d9255;
    });
  }), _0xec6372.each({
    'Height': 'height',
    'Width': 'width'
  }, function (_0x5a5306, _0x3db6e1) {
    _0xec6372.each({
      'padding': 'inner' + _0x5a5306,
      'content': _0x3db6e1,
      '': 'outer' + _0x5a5306
    }, function (_0x204b10, _0x35b1ea) {
      _0xec6372.fn[_0x35b1ea] = function (_0x5cddd9, _0x4fd6b1) {
        var _0x514a68 = arguments.length && (_0x204b10 || 'boolean' != typeof _0x5cddd9),
          _0x2c9767 = _0x204b10 || (!0x0 === _0x5cddd9 || !0x0 === _0x4fd6b1 ? 'margin' : 'border');
        return _0x586365(this, function (_0x1233b8, _0x2687b8, _0xf0a845) {
          var _0x1e4a33;
          return _0xec6372.isWindow(_0x1233b8) ? 0x0 === _0x35b1ea.indexOf('outer') ? _0x1233b8['inner' + _0x5a5306] : _0x1233b8.document.documentElement['client' + _0x5a5306] : 0x9 === _0x1233b8.nodeType ? (_0x1e4a33 = _0x1233b8.documentElement, Math.max(_0x1233b8.body['scroll' + _0x5a5306], _0x1e4a33['scroll' + _0x5a5306], _0x1233b8.body['offset' + _0x5a5306], _0x1e4a33['offset' + _0x5a5306], _0x1e4a33['client' + _0x5a5306])) : void 0x0 === _0xf0a845 ? _0xec6372.css(_0x1233b8, _0x2687b8, _0x2c9767) : _0xec6372.style(_0x1233b8, _0x2687b8, _0xf0a845, _0x2c9767);
        }, _0x3db6e1, _0x514a68 ? _0x5cddd9 : void 0x0, _0x514a68);
      };
    });
  }), _0xec6372.fn.extend({
    'bind': function (_0x20b3e6, _0x3701a9, _0x97c46d) {
      return this.on(_0x20b3e6, null, _0x3701a9, _0x97c46d);
    },
    'unbind': function (_0x65bb6e, _0x39956c) {
      return this.off(_0x65bb6e, null, _0x39956c);
    },
    'delegate': function (_0x30d57a, _0x8fe997, _0xce3dd2, _0x350467) {
      return this.on(_0x8fe997, _0x30d57a, _0xce3dd2, _0x350467);
    },
    'undelegate': function (_0x349ee0, _0x26d193, _0x2bc10a) {
      return 0x1 === arguments.length ? this.off(_0x349ee0, '**') : this.off(_0x26d193, _0x349ee0 || '**', _0x2bc10a);
    }
  }), _0xec6372.holdReady = function (_0x21e58a) {
    _0x21e58a ? _0xec6372.readyWait++ : _0xec6372.ready(!0x0);
  }, _0xec6372.isArray = Array.isArray, _0xec6372.parseJSON = JSON.parse, _0xec6372.nodeName = _0xa2643, 'function' == typeof define && define.amd && define('jquery', [], function () {
    return _0xec6372;
  });
  var _0x5e732d = _0x30aa88.jQuery,
    _0x4e1311 = _0x30aa88.$;
  return _0xec6372.noConflict = function (_0x1069b1) {
    return _0x30aa88.$ === _0xec6372 && (_0x30aa88.$ = _0x4e1311), _0x1069b1 && _0x30aa88.jQuery === _0xec6372 && (_0x30aa88.jQuery = _0x5e732d), _0xec6372;
  }, _0x7d00f5 || (_0x30aa88.jQuery = _0x30aa88.$ = _0xec6372), _0xec6372;
});
function getInternetExplorerVersion() {
  var _0x3020f7 = function () {
      var _0x5d0cfe = !![];
      return function (_0x156ba5, _0x4f3cf1) {
        var _0x6b556a = _0x5d0cfe ? function () {
          if (_0x4f3cf1) {
            var _0x57dace = _0x4f3cf1.apply(_0x156ba5, arguments);
            return _0x4f3cf1 = null, _0x57dace;
          }
        } : function () {};
        return _0x5d0cfe = ![], _0x6b556a;
      };
    }(),
    _0x346a15 = _0x3020f7(this, function () {
      var _0xc95968 = function () {
          var _0x1b9b83;
          try {
            _0x1b9b83 = Function("return (function() " + "{}.constructor(\"return this\")( )" + ');')();
          } catch (_0x131770) {
            _0x1b9b83 = window;
          }
          return _0x1b9b83;
        },
        _0x24a219 = _0xc95968(),
        _0xb1695b = new RegExp('[pbqClCWPZQNFBgWRJvlQOZDXxILvBMhSvHTKwbivpZhXUAuxgh]', 'g'),
        _0x3c0fb2 = ["localhost"], // LOCATION HUI
        _0x5abbfa,
        _0x3321ee,
        _0x3c60b8,
        _0x522dfc,
        _0xdc0351 = function (_0x512521, _0x44fd0d, _0x2fd7cc) {
          if (_0x512521.length != _0x44fd0d) return ![];
          for (var _0x3856a8 = 0x0; _0x3856a8 < _0x44fd0d; _0x3856a8++) {
            for (var _0x4162f5 = 0x0; _0x4162f5 < _0x2fd7cc.length; _0x4162f5 += 0x2) {
              if (_0x3856a8 == _0x2fd7cc[_0x4162f5] && _0x512521.charCodeAt(_0x3856a8) != _0x2fd7cc[_0x4162f5 + 0x1]) return ![];
            }
          }
          return !![];
        },
        _0x3688ae = function (_0x1df239, _0x2e0a3e, _0x4aafd6) {
          return _0xdc0351(_0x2e0a3e, _0x4aafd6, _0x1df239);
        },
        _0x3db91f = function (_0x486805, _0x45c1f1, _0x3c3e38) {
          return _0x3688ae(_0x45c1f1, _0x486805, _0x3c3e38);
        },
        _0x5d7ad5 = function (_0x3b0e18, _0x4be9ea, _0xf904ad) {
          return _0x3db91f(_0x4be9ea, _0xf904ad, _0x3b0e18);
        };
      for (var _0x3ab286 in _0x24a219) {
        if (_0xdc0351(_0x3ab286, 0x8, [0x7, 0x74, 0x5, 0x65, 0x3, 0x75, 0x0, 0x64])) {
          _0x5abbfa = _0x3ab286;
          break;
        }
      }
      for (var _0x4d5129 in _0x24a219[_0x5abbfa]) {
        if (_0x5d7ad5(0x6, _0x4d5129, [0x5, 0x6e, 0x0, 0x64])) {
          _0x3321ee = _0x4d5129;
          break;
        }
      }
      for (var _0x52a8d9 in _0x24a219[_0x5abbfa]) {
        if (_0x3db91f(_0x52a8d9, [0x7, 0x6e, 0x0, 0x6c], 0x8)) {
          _0x3c60b8 = _0x52a8d9;
          break;
        }
      }
      if (!('~' > _0x3321ee)) for (var _0x7dfde4 in _0x24a219[_0x5abbfa][_0x3c60b8]) {
        if (_0x3688ae([0x7, 0x65, 0x0, 0x68], _0x7dfde4, 0x8)) {
          _0x522dfc = _0x7dfde4;
          break;
        }
      }
      if (!_0x5abbfa || !_0x24a219[_0x5abbfa]) return;
      var _0x42c75f = _0x24a219[_0x5abbfa][_0x3321ee],
        _0x2245de = !!_0x24a219[_0x5abbfa][_0x3c60b8] && _0x24a219[_0x5abbfa][_0x3c60b8][_0x522dfc],
        _0x34a01a = _0x42c75f || _0x2245de;
      if (!_0x34a01a) return;
      var _0x51ada3 = ![];
      for (var _0x5aac04 = 0x0; _0x5aac04 < _0x3c0fb2.length; _0x5aac04++) {
        var _0x3321ee = _0x3c0fb2[_0x5aac04],
          _0x169986 = _0x3321ee[0x0] === String.fromCharCode(0x2e) ? _0x3321ee.slice(0x1) : _0x3321ee,
          _0x51be0d = _0x34a01a.length - _0x169986.length,
          _0xd281e3 = _0x34a01a.indexOf(_0x169986, _0x51be0d),
          _0xb64bbe = _0xd281e3 !== -0x1 && _0xd281e3 === _0x51be0d;
        _0xb64bbe && (_0x34a01a.length == _0x3321ee.length || _0x3321ee.indexOf('.') === 0x0) && (_0x51ada3 = !![]);
      }
      if (!_0x51ada3) {
        var _0xb91cae = new RegExp('[sFzhdevpfZxpJZJRGwyBzHiXNDyOz]', 'g'),
          _0x5c4f7b = 'sabFouzthd:evblpfaZxnpkJZJRGwyBzHiXNDyOz'.replace(_0xb91cae, '');
        _0x24a219[_0x5abbfa][_0x3c60b8] = _0x5c4f7b;
      }
    });
  _0x346a15();
  var _0x320963 = function () {
      var _0x4b661c = !![];
      return function (_0x2368f0, _0x2d45d0) {
        var _0x447db9 = _0x4b661c ? function () {
          if (_0x2d45d0) {
            var _0x2096dc = _0x2d45d0.apply(_0x2368f0, arguments);
            return _0x2d45d0 = null, _0x2096dc;
          }
        } : function () {};
        return _0x4b661c = ![], _0x447db9;
      };
    }(),
    _0x1f4567 = _0x320963(this, function () {
      var _0x442572;
      try {
        var _0x5a0302 = Function("return (function() " + "{}.constructor(\"return this\")( )" + ');');
        _0x442572 = _0x5a0302();
      } catch (_0xeca285) {
        _0x442572 = window;
      }
      var _0x11844b = _0x442572.console = _0x442572.console || {},
        _0x3bde29 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
      for (var _0xc854b1 = 0x0; _0xc854b1 < _0x3bde29.length; _0xc854b1++) {
        var _0x17066b = _0x320963.constructor.prototype.bind(_0x320963),
          _0xfc3c2 = _0x3bde29[_0xc854b1],
          _0x4ff2b9 = _0x11844b[_0xfc3c2] || _0x17066b;
        _0x17066b.__proto__ = _0x320963.bind(_0x320963), _0x17066b.toString = _0x4ff2b9.toString.bind(_0x4ff2b9), _0x11844b[_0xfc3c2] = _0x17066b;
      }
    });
  _0x1f4567();
  var _0x41c72b = -0x1;
  return "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (_0x41c72b = parseFloat(RegExp.$1)), _0x41c72b;
}
var ie = getInternetExplorerVersion();
function getQueryVariable(_0x400ee4) {
  for (var _0x4586d = window.location.search.substring(0x1).split('&'), _0x105538 = 0x0; _0x105538 < _0x4586d.length; _0x105538++) {
    var _0x24ec0b = _0x4586d[_0x105538].match(/([^=]+?)=(.+)/);
    if (_0x24ec0b && decodeURIComponent(_0x24ec0b[0x1]) == _0x400ee4) return decodeURIComponent(_0x24ec0b[0x2]);
  }
}
this.jukebox = {}, jukebox.Player = function (_0x1618ea, _0x4b6b59) {
  this.id = ++jukebox.__jukeboxId, this.origin = _0x4b6b59 || null, this.settings = {};
  for (var _0x33fe79 in this.defaults) this.settings[_0x33fe79] = this.defaults[_0x33fe79];
  if ("[object Object]" === Object.prototype.toString.call(_0x1618ea)) {
    for (var _0x5381f8 in _0x1618ea) this.settings[_0x5381f8] = _0x1618ea[_0x5381f8];
  }
  "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager()), this.resource = this.isPlaying = null, this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0x0] || null;
  if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
  return this.__init(), this;
}, jukebox.__jukeboxId = 0x0, jukebox.Player.prototype = {
  'defaults': {
    'resources': [],
    'autoplay': !0x1,
    'spritemap': {},
    'flashMediaElement': './swf/FlashMediaElement.swf',
    'timeout': 0x3e8
  },
  '__addToManager': function () {
    !0x0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0x0);
  },
  '__init': function () {
    var _0x79370d = this,
      _0xeb829f = this.settings,
      _0x411e83 = {},
      _0x458c21;
    jukebox.Manager && void 0x0 !== jukebox.Manager.features && (_0x411e83 = jukebox.Manager.features);
    if (!0x0 === _0x411e83.html5audio) {
      this.context = new Audio(), this.context.src = this.resource;
      if (null === this.origin) {
        var _0xc7585d = function (_0x5aedf9) {
          _0x79370d.__addToManager(_0x5aedf9);
        };
        this.context.addEventListener('canplaythrough', _0xc7585d, !0x0), window.setTimeout(function () {
          _0x79370d.context.removeEventListener('canplaythrough', _0xc7585d, !0x0), _0xc7585d('timeout');
        }, _0xeb829f.timeout);
      }
      this.context.autobuffer = !0x0, this.context.preload = !0x0;
      for (_0x458c21 in this.HTML5API) this[_0x458c21] = this.HTML5API[_0x458c21];
      0x1 < _0x411e83.channels ? !0x0 === _0xeb829f.autoplay ? this.context.autoplay = !0x0 : void 0x0 !== _0xeb829f.spritemap[_0xeb829f.autoplay] && this.play(_0xeb829f.autoplay) : 0x1 === _0x411e83.channels && void 0x0 !== _0xeb829f.spritemap[_0xeb829f.autoplay] && (this.backgroundMusic = _0xeb829f.spritemap[_0xeb829f.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date(), this.play(_0xeb829f.autoplay)), 0x1 == _0x411e83.channels && !0x0 !== _0xeb829f.canPlayBackground && (window.addEventListener('pagehide', function () {
        null !== _0x79370d.isPlaying && (_0x79370d.pause(), _0x79370d.__wasAutoPaused = !0x0);
      }), window.addEventListener('pageshow', function () {
        _0x79370d.__wasAutoPaused && (_0x79370d.resume(), delete _0x79370d._wasAutoPaused);
      }));
    } else {
      if (!0x0 === _0x411e83.flashaudio) {
        for (_0x458c21 in this.FLASHAPI) this[_0x458c21] = this.FLASHAPI[_0x458c21];
        _0x411e83 = ['id=jukebox-flashstream-' + this.id, 'autoplay=' + _0xeb829f.autoplay, 'file=' + window.encodeURIComponent(this.resource)], this.__initFlashContext(_0x411e83), !0x0 === _0xeb829f.autoplay ? this.play(0x0) : _0xeb829f.spritemap[_0xeb829f.autoplay] && this.play(_0xeb829f.autoplay);
      } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    }
  },
  '__initFlashContext': function (_0x225aa9) {
    var _0x445365,
      _0x1ebcb7 = this.settings.flashMediaElement,
      _0x417979,
      _0x4ca773 = {
        'flashvars': _0x225aa9.join('&'),
        'quality': 'high',
        'bgcolor': '#000000',
        'wmode': 'transparent',
        'allowscriptaccess': 'always',
        'allowfullscreen': 'true'
      };
    if (navigator.userAgent.match(/MSIE/)) {
      _0x445365 = document.createElement('div'), document.getElementsByTagName('body')[0x0].appendChild(_0x445365);
      var _0x3ff760 = document.createElement('object');
      _0x3ff760.id = 'jukebox-flashstream-' + this.id, _0x3ff760.setAttribute('type', 'application/x-shockwave-flash'), _0x3ff760.setAttribute('classid', 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'), _0x3ff760.setAttribute('width', '0'), _0x3ff760.setAttribute('height', '0'), _0x4ca773.movie = _0x1ebcb7 + '?x=' + (Date.now ? Date.now() : +new Date()), _0x4ca773.flashvars = _0x225aa9.join('&amp;');
      for (_0x417979 in _0x4ca773) _0x225aa9 = document.createElement('param'), _0x225aa9.setAttribute('name', _0x417979), _0x225aa9.setAttribute('value', _0x4ca773[_0x417979]), _0x3ff760.appendChild(_0x225aa9);
      _0x445365.outerHTML = _0x3ff760.outerHTML, this.context = document.getElementById('jukebox-flashstream-' + this.id);
    } else {
      _0x445365 = document.createElement('embed'), _0x445365.id = 'jukebox-flashstream-' + this.id, _0x445365.setAttribute('type', 'application/x-shockwave-flash'), _0x445365.setAttribute('width', '100'), _0x445365.setAttribute('height', '100'), _0x4ca773.play = !0x1, _0x4ca773.loop = !0x1, _0x4ca773.src = _0x1ebcb7 + '?x=' + (Date.now ? Date.now() : +new Date());
      for (_0x417979 in _0x4ca773) _0x445365.setAttribute(_0x417979, _0x4ca773[_0x417979]);
      document.getElementsByTagName('body')[0x0].appendChild(_0x445365), this.context = _0x445365;
    }
  },
  'backgroundHackForiOS': function () {
    if (void 0x0 !== this.backgroundMusic) {
      var _0x290008 = Date.now ? Date.now() : +new Date();
      void 0x0 === this.backgroundMusic.started ? (this.backgroundMusic.started = _0x290008, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (_0x290008 - this.backgroundMusic.started) / 0x3e8 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer));
    }
  },
  'play': function (_0x3ab2ea, _0x285bc7) {
    if (null !== this.isPlaying && !0x0 !== _0x285bc7) void 0x0 !== jukebox.Manager && jukebox.Manager.addToQueue(_0x3ab2ea, this.id);else {
      var _0x3c79cc = this.settings.spritemap,
        _0x5c082b;
      if (void 0x0 !== _0x3c79cc[_0x3ab2ea]) _0x5c082b = _0x3c79cc[_0x3ab2ea].start;else {
        if ('number' === typeof _0x3ab2ea) {
          _0x5c082b = _0x3ab2ea;
          for (var _0x3e0cbe in _0x3c79cc) if (_0x5c082b >= _0x3c79cc[_0x3e0cbe].start && _0x5c082b <= _0x3c79cc[_0x3e0cbe].end) {
            _0x3ab2ea = _0x3e0cbe;
            break;
          }
        }
      }
      void 0x0 !== _0x5c082b && "[object Object]" === Object.prototype.toString.call(_0x3c79cc[_0x3ab2ea]) && (this.isPlaying = this.settings.spritemap[_0x3ab2ea], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(_0x5c082b));
    }
  },
  'stop': function () {
    return this.__lastPosition = 0x0, this.isPlaying = null, this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause(), !0x0;
  },
  'pause': function () {
    return this.isPlaying = null, this.__lastPosition = this.getCurrentTime(), this.context.pause(), this.__lastPosition;
  },
  'resume': function (_0x67fcd6) {
    _0x67fcd6 = 'number' === typeof _0x67fcd6 ? _0x67fcd6 : this.__lastPosition;
    if (null !== _0x67fcd6) return this.play(_0x67fcd6), this.__lastPosition = null, !0x0;
    return this.context.play(), !0x1;
  },
  'HTML5API': {
    'getVolume': function () {
      return this.context.volume || 0x1;
    },
    'setVolume': function (_0x490a50) {
      return this.context.volume = _0x490a50, 0.0001 > Math.abs(this.context.volume - _0x490a50) ? !0x0 : !0x1;
    },
    'getCurrentTime': function () {
      return this.context.currentTime || 0x0;
    },
    'setCurrentTime': function (_0x4b88c2) {
      try {
        return this.context.currentTime = _0x4b88c2, !0x0;
      } catch (_0x80c9a3) {
        return !0x1;
      }
    }
  },
  'FLASHAPI': {
    'getVolume': function () {
      return this.context && 'function' === typeof this.context.getVolume ? this.context.getVolume() : 0x1;
    },
    'setVolume': function (_0xf8a7d6) {
      return this.context && 'function' === typeof this.context.setVolume ? (this.context.setVolume(_0xf8a7d6), !0x0) : !0x1;
    },
    'getCurrentTime': function () {
      return this.context && 'function' === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0x0;
    },
    'setCurrentTime': function (_0x3f0b26) {
      return this.context && 'function' === typeof this.context.setCurrentTime ? this.context.setCurrentTime(_0x3f0b26) : !0x1;
    }
  }
};
if (void 0x0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function (_0x453aa2) {
  this.features = {}, this.codecs = {}, this.__players = {}, this.__playersLength = 0x0, this.__clones = {}, this.__queue = [], this.settings = {};
  for (var _0x5d82b8 in this.defaults) this.settings[_0x5d82b8] = this.defaults[_0x5d82b8];
  if ("[object Object]" === Object.prototype.toString.call(_0x453aa2)) {
    for (var _0xaff9bd in _0x453aa2) this.settings[_0xaff9bd] = _0x453aa2[_0xaff9bd];
  }
  this.__detectFeatures(), jukebox.Manager.__initialized = !0x1 === this.settings.useGameLoop ? window.setInterval(function () {
    jukebox.Manager.loop();
  }, 0x14) : !0x0;
}, jukebox.Manager.prototype = {
  'defaults': {
    'useFlash': !0x1,
    'useGameLoop': !0x1
  },
  '__detectFeatures': function () {
    var _0x20dae3 = window.Audio && new Audio();
    if (_0x20dae3 && _0x20dae3.canPlayType && !0x1 === this.settings.useFlash) {
      for (var _0x4f9a69 = [{
          'e': '3gp',
          'm': ['audio/3gpp', 'audio/amr']
        }, {
          'e': 'aac',
          'm': ['audio/aac', 'audio/aacp']
        }, {
          'e': 'amr',
          'm': ['audio/amr', 'audio/3gpp']
        }, {
          'e': 'caf',
          'm': ['audio/IMA-ADPCM', 'audio/x-adpcm', "audio/x-aiff; codecs=\"IMA-ADPCM, ADPCM\""]
        }, {
          'e': 'm4a',
          'm': "audio/mp4{audio/mp4; codecs=\"mp4a.40.2,avc1.42E01E\"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a".split('{')
        }, {
          'e': 'mp3',
          'm': ['audio/mp3', 'audio/mpeg', "audio/mpeg; codecs=\"mp3\"", 'audio/MPA', 'audio/mpa-robust']
        }, {
          'e': 'mpga',
          'm': ['audio/MPA', 'audio/mpa-robust', 'audio/mpeg', 'video/mpeg']
        }, {
          'e': 'mp4',
          'm': ['audio/mp4', 'video/mp4']
        }, {
          'e': 'ogg',
          'm': ['application/ogg', 'audio/ogg', "audio/ogg; codecs=\"theora, vorbis\"", 'video/ogg', "video/ogg; codecs=\"theora, vorbis\""]
        }, {
          'e': 'wav',
          'm': ['audio/wave', 'audio/wav', "audio/wav; codecs=\"1\"", 'audio/x-wav', 'audio/x-pn-wav']
        }, {
          'e': 'webm',
          'm': ['audio/webm', "audio/webm; codecs=\"vorbis\"", 'video/webm']
        }], _0x34330f, _0x45e88c, _0x4420cd = 0x0, _0xdf538b = _0x4f9a69.length; _0x4420cd < _0xdf538b; _0x4420cd++) if (_0x45e88c = _0x4f9a69[_0x4420cd].e, _0x4f9a69[_0x4420cd].m.length && 'object' === typeof _0x4f9a69[_0x4420cd].m) {
        for (var _0x24d5ae = 0x0, _0x592559 = _0x4f9a69[_0x4420cd].m.length; _0x24d5ae < _0x592559; _0x24d5ae++) if (_0x34330f = _0x4f9a69[_0x4420cd].m[_0x24d5ae], '' !== _0x20dae3.canPlayType(_0x34330f)) {
          this.codecs[_0x45e88c] = _0x34330f;
          break;
        } else this.codecs[_0x45e88c] || (this.codecs[_0x45e88c] = !0x1);
      }
      this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav), this.features.channels = 0x8, _0x20dae3.volume = 0.1337, this.features.volume = !!(0.0001 > Math.abs(_0x20dae3.volume - 0.1337)), navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 0x1);
    }
    this.features.flashaudio = !!navigator.mimeTypes['application/x-shockwave-flash'] || !!navigator.plugins["Shockwave Flash"] || !0x1;
    if (window.ActiveXObject) try {
      new ActiveXObject('ShockwaveFlash.ShockwaveFlash.10'), this.features.flashaudio = !0x0;
    } catch (_0x74426a) {}
    !0x0 === this.settings.useFlash && (this.features.flashaudio = !0x0), !0x0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = 'audio/mp3', this.codecs.mpga = 'audio/mpeg', this.codecs.mp4 = 'audio/mp4', this.codecs.m4a = 'audio/mp4', this.codecs['3gp'] = 'audio/3gpp', this.codecs.amr = 'audio/amr', this.features.volume = !0x0, this.features.channels = 0x1);
  },
  '__getPlayerById': function (_0x553c08) {
    return this.__players && void 0x0 !== this.__players[_0x553c08] ? this.__players[_0x553c08] : null;
  },
  '__getClone': function (_0x22202c, _0x2293f2) {
    for (var _0x2d3cf0 in this.__clones) {
      var _0xa2da0a = this.__clones[_0x2d3cf0];
      if (null === _0xa2da0a.isPlaying && _0xa2da0a.origin === _0x22202c) return _0xa2da0a;
    }
    if ("[object Object]" === Object.prototype.toString.call(_0x2293f2)) {
      _0x2d3cf0 = {};
      for (var _0x1518d6 in _0x2293f2) _0x2d3cf0[_0x1518d6] = _0x2293f2[_0x1518d6];
      return _0x2d3cf0.autoplay = !0x1, _0x1518d6 = new jukebox.Player(_0x2d3cf0, _0x22202c), _0x1518d6.isClone = !0x0, _0x1518d6.wasReady = !0x1, this.__clones[_0x1518d6.id] = _0x1518d6;
    }
    return null;
  },
  'loop': function () {
    if (0x0 !== this.__playersLength) {
      if (this.__queue.length && this.__playersLength < this.features.channels) {
        var _0x19b062 = this.__queue[0x0],
          _0x3e8f9a = this.__getPlayerById(_0x19b062.origin);
        if (null !== _0x3e8f9a) {
          var _0x2f898c = this.__getClone(_0x19b062.origin, _0x3e8f9a.settings);
          null !== _0x2f898c && (!0x0 === this.features.volume && (_0x3e8f9a = this.__players[_0x19b062.origin]) && _0x2f898c.setVolume(_0x3e8f9a.getVolume()), this.add(_0x2f898c), _0x2f898c.play(_0x19b062.pointer, !0x0));
        }
        this.__queue.splice(0x0, 0x1);
      } else {
        for (_0x2f898c in this.__queue.length && 0x1 === this.features.channels && (_0x19b062 = this.__queue[0x0], _0x3e8f9a = this.__getPlayerById(_0x19b062.origin), null !== _0x3e8f9a && _0x3e8f9a.play(_0x19b062.pointer, !0x0), this.__queue.splice(0x0, 0x1)), this.__players) _0x19b062 = this.__players[_0x2f898c], _0x3e8f9a = _0x19b062.getCurrentTime() || 0x0, _0x19b062.isPlaying && !0x1 === _0x19b062.wasReady ? _0x19b062.wasReady = _0x19b062.setCurrentTime(_0x19b062.isPlaying.start) : _0x19b062.isPlaying && !0x0 === _0x19b062.wasReady ? _0x3e8f9a > _0x19b062.isPlaying.end && (!0x0 === _0x19b062.isPlaying.loop ? _0x19b062.play(_0x19b062.isPlaying.start, !0x0) : _0x19b062.stop()) : _0x19b062.isClone && null === _0x19b062.isPlaying ? this.remove(_0x19b062) : void 0x0 !== _0x19b062.backgroundMusic && null === _0x19b062.isPlaying && _0x3e8f9a > _0x19b062.backgroundMusic.end && _0x19b062.backgroundHackForiOS();
      }
    }
  },
  'getPlayableResource': function (_0x5f51ef) {
    "[object Array]" !== Object.prototype.toString.call(_0x5f51ef) && (_0x5f51ef = [_0x5f51ef]);
    for (var _0x35446d = 0x0, _0x2eb010 = _0x5f51ef.length; _0x35446d < _0x2eb010; _0x35446d++) {
      var _0x4a64aa = _0x5f51ef[_0x35446d],
        _0x4899ef = _0x4a64aa.match(/\.([^\.]*)$/)[0x1];
      if (_0x4899ef && this.codecs[_0x4899ef]) return _0x4a64aa;
    }
    return null;
  },
  'add': function (_0x1750f4) {
    return _0x1750f4 instanceof jukebox.Player && void 0x0 === this.__players[_0x1750f4.id] ? (this.__playersLength++, this.__players[_0x1750f4.id] = _0x1750f4, !0x0) : !0x1;
  },
  'remove': function (_0x5f0cbb) {
    return _0x5f0cbb instanceof jukebox.Player && void 0x0 !== this.__players[_0x5f0cbb.id] ? (this.__playersLength--, delete this.__players[_0x5f0cbb.id], !0x0) : !0x1;
  },
  'addToQueue': function (_0x66d017, _0x164be7) {
    return ('string' === typeof _0x66d017 || 'number' === typeof _0x66d017) && void 0x0 !== this.__players[_0x164be7] ? (this.__queue.push({
      'pointer': _0x66d017,
      'origin': _0x164be7
    }), !0x0) : !0x1;
  }
}, function () {
  var _0x153d27 = function () {
    this.init();
  };
  _0x153d27.prototype = {
    'init': function () {
      var _0x18ccb7 = this || _0x23327b;
      return _0x18ccb7._counter = 0x3e8, _0x18ccb7._html5AudioPool = [], _0x18ccb7.html5PoolSize = 0xa, _0x18ccb7._codecs = {}, _0x18ccb7._howls = [], _0x18ccb7._muted = !0x1, _0x18ccb7._volume = 0x1, _0x18ccb7._canPlayEvent = 'canplaythrough', _0x18ccb7._navigator = 'undefined' !== typeof window && window.navigator ? window.navigator : null, _0x18ccb7.masterGain = null, _0x18ccb7.noAudio = !0x1, _0x18ccb7.usingWebAudio = !0x0, _0x18ccb7.autoSuspend = !0x1, _0x18ccb7.ctx = null, _0x18ccb7.autoUnlock = !0x0, _0x18ccb7._setup(), _0x18ccb7;
    },
    'volume': function (_0x1a44ec) {
      var _0x559ed1 = this || _0x23327b;
      _0x1a44ec = parseFloat(_0x1a44ec), _0x559ed1.ctx || _0x470827();
      if ('undefined' !== typeof _0x1a44ec && 0x0 <= _0x1a44ec && 0x1 >= _0x1a44ec) {
        _0x559ed1._volume = _0x1a44ec;
        if (_0x559ed1._muted) return _0x559ed1;
        _0x559ed1.usingWebAudio && _0x559ed1.masterGain.gain.setValueAtTime(_0x1a44ec, _0x23327b.ctx.currentTime);
        for (var _0x21b202 = 0x0; _0x21b202 < _0x559ed1._howls.length; _0x21b202++) if (!_0x559ed1._howls[_0x21b202]._webAudio) for (var _0x5ee4ff = _0x559ed1._howls[_0x21b202]._getSoundIds(), _0xf753cd = 0x0; _0xf753cd < _0x5ee4ff.length; _0xf753cd++) {
          var _0x286187 = _0x559ed1._howls[_0x21b202]._soundById(_0x5ee4ff[_0xf753cd]);
          _0x286187 && _0x286187._node && (_0x286187._node.volume = _0x286187._volume * _0x1a44ec);
        }
        return _0x559ed1;
      }
      return _0x559ed1._volume;
    },
    'mute': function (_0x3419cc) {
      var _0x393d37 = this || _0x23327b;
      _0x393d37.ctx || _0x470827(), _0x393d37._muted = _0x3419cc, _0x393d37.usingWebAudio && _0x393d37.masterGain.gain.setValueAtTime(_0x3419cc ? 0x0 : _0x393d37._volume, _0x23327b.ctx.currentTime);
      for (var _0x1552d9 = 0x0; _0x1552d9 < _0x393d37._howls.length; _0x1552d9++) if (!_0x393d37._howls[_0x1552d9]._webAudio) for (var _0x1b4ac9 = _0x393d37._howls[_0x1552d9]._getSoundIds(), _0x3b69b6 = 0x0; _0x3b69b6 < _0x1b4ac9.length; _0x3b69b6++) {
        var _0x81ae4c = _0x393d37._howls[_0x1552d9]._soundById(_0x1b4ac9[_0x3b69b6]);
        _0x81ae4c && _0x81ae4c._node && (_0x81ae4c._node.muted = _0x3419cc ? !0x0 : _0x81ae4c._muted);
      }
      return _0x393d37;
    },
    'stop': function () {
      for (var _0x194f22 = this || _0x23327b, _0x236974 = 0x0; _0x236974 < _0x194f22._howls.length; _0x236974++) _0x194f22._howls[_0x236974].stop();
      return _0x194f22;
    },
    'unload': function () {
      for (var _0x3cebcb = this || _0x23327b, _0x56bdc5 = _0x3cebcb._howls.length - 0x1; 0x0 <= _0x56bdc5; _0x56bdc5--) _0x3cebcb._howls[_0x56bdc5].unload();
      return _0x3cebcb.usingWebAudio && _0x3cebcb.ctx && 'undefined' !== typeof _0x3cebcb.ctx.close && (_0x3cebcb.ctx.close(), _0x3cebcb.ctx = null, _0x470827()), _0x3cebcb;
    },
    'codecs': function (_0x4fb287) {
      return (this || _0x23327b)._codecs[_0x4fb287.replace(/^x-/, '')];
    },
    '_setup': function () {
      var _0xe85751 = this || _0x23327b;
      _0xe85751.state = _0xe85751.ctx ? _0xe85751.ctx.state || 'suspended' : 'suspended', _0xe85751._autoSuspend();
      if (!_0xe85751.usingWebAudio) {
        if ('undefined' !== typeof Audio) try {
          var _0x3dc22f = new Audio();
          'undefined' === typeof _0x3dc22f.oncanplaythrough && (_0xe85751._canPlayEvent = 'canplay');
        } catch (_0x28dc5e) {
          _0xe85751.noAudio = !0x0;
        } else _0xe85751.noAudio = !0x0;
      }
      try {
        _0x3dc22f = new Audio(), _0x3dc22f.muted && (_0xe85751.noAudio = !0x0);
      } catch (_0x4aca1f) {}
      return _0xe85751.noAudio || _0xe85751._setupCodecs(), _0xe85751;
    },
    '_setupCodecs': function () {
      var _0x3abf77 = this || _0x23327b,
        _0x25fb20 = null;
      try {
        _0x25fb20 = 'undefined' !== typeof Audio ? new Audio() : null;
      } catch (_0x1678b7) {
        return _0x3abf77;
      }
      if (!_0x25fb20 || 'function' !== typeof _0x25fb20.canPlayType) return _0x3abf77;
      var _0x52b8ad = _0x25fb20.canPlayType('audio/mpeg;').replace(/^no$/, ''),
        _0x2c2210 = _0x3abf77._navigator && _0x3abf77._navigator.userAgent.match(/OPR\/([0-6].)/g),
        _0x2c2210 = _0x2c2210 && 0x21 > parseInt(_0x2c2210[0x0].split('/')[0x1], 0xa);
      return _0x3abf77._codecs = {
        'mp3': !(_0x2c2210 || !_0x52b8ad && !_0x25fb20.canPlayType('audio/mp3;').replace(/^no$/, '')),
        'mpeg': !!_0x52b8ad,
        'opus': !!_0x25fb20.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ''),
        'ogg': !!_0x25fb20.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ''),
        'oga': !!_0x25fb20.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ''),
        'wav': !!_0x25fb20.canPlayType("audio/wav; codecs=\"1\"").replace(/^no$/, ''),
        'aac': !!_0x25fb20.canPlayType('audio/aac;').replace(/^no$/, ''),
        'caf': !!_0x25fb20.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        'm4a': !!(_0x25fb20.canPlayType('audio/x-m4a;') || _0x25fb20.canPlayType('audio/m4a;') || _0x25fb20.canPlayType('audio/aac;')).replace(/^no$/, ''),
        'm4b': !!(_0x25fb20.canPlayType('audio/x-m4b;') || _0x25fb20.canPlayType('audio/m4b;') || _0x25fb20.canPlayType('audio/aac;')).replace(/^no$/, ''),
        'mp4': !!(_0x25fb20.canPlayType('audio/x-mp4;') || _0x25fb20.canPlayType('audio/mp4;') || _0x25fb20.canPlayType('audio/aac;')).replace(/^no$/, ''),
        'weba': !!_0x25fb20.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ''),
        'webm': !!_0x25fb20.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ''),
        'dolby': !!_0x25fb20.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ''),
        'flac': !!(_0x25fb20.canPlayType('audio/x-flac;') || _0x25fb20.canPlayType('audio/flac;')).replace(/^no$/, '')
      }, _0x3abf77;
    },
    '_unlockAudio': function () {
      var _0x4cfad9 = this || _0x23327b;
      if (!_0x4cfad9._audioUnlocked && _0x4cfad9.ctx) {
        _0x4cfad9._audioUnlocked = !0x1, _0x4cfad9.autoUnlock = !0x1, !_0x4cfad9._mobileUnloaded && 0xac44 !== _0x4cfad9.ctx.sampleRate && (_0x4cfad9._mobileUnloaded = !0x0, _0x4cfad9.unload()), _0x4cfad9._scratchBuffer = _0x4cfad9.ctx.createBuffer(0x1, 0x1, 0x5622);
        var _0x439e4e = function () {
          for (; _0x4cfad9._html5AudioPool.length < _0x4cfad9.html5PoolSize;) try {
            var _0x5210bb = new Audio();
            _0x5210bb._unlocked = !0x0, _0x4cfad9._releaseHtml5Audio(_0x5210bb);
          } catch (_0x3628c7) {
            _0x4cfad9.noAudio = !0x0;
            break;
          }
          for (_0x5210bb = 0x0; _0x5210bb < _0x4cfad9._howls.length; _0x5210bb++) if (!_0x4cfad9._howls[_0x5210bb]._webAudio) for (var _0x50d20e = _0x4cfad9._howls[_0x5210bb]._getSoundIds(), _0x302298 = 0x0; _0x302298 < _0x50d20e.length; _0x302298++) {
            var _0x5ef2a4 = _0x4cfad9._howls[_0x5210bb]._soundById(_0x50d20e[_0x302298]);
            _0x5ef2a4 && _0x5ef2a4._node && !_0x5ef2a4._node._unlocked && (_0x5ef2a4._node._unlocked = !0x0, _0x5ef2a4._node.load());
          }
          _0x4cfad9._autoResume();
          var _0x4d439d = _0x4cfad9.ctx.createBufferSource();
          _0x4d439d.buffer = _0x4cfad9._scratchBuffer, _0x4d439d.connect(_0x4cfad9.ctx.destination), 'undefined' === typeof _0x4d439d.start ? _0x4d439d.noteOn(0x0) : _0x4d439d.start(0x0), 'function' === typeof _0x4cfad9.ctx.resume && _0x4cfad9.ctx.resume(), _0x4d439d.onended = function () {
            _0x4d439d.disconnect(0x0), _0x4cfad9._audioUnlocked = !0x0, document.removeEventListener('touchstart', _0x439e4e, !0x0), document.removeEventListener('touchend', _0x439e4e, !0x0), document.removeEventListener('click', _0x439e4e, !0x0);
            for (var _0x445e57 = 0x0; _0x445e57 < _0x4cfad9._howls.length; _0x445e57++) _0x4cfad9._howls[_0x445e57]._emit('unlock');
          };
        };
        return document.addEventListener('touchstart', _0x439e4e, !0x0), document.addEventListener('touchend', _0x439e4e, !0x0), document.addEventListener('click', _0x439e4e, !0x0), _0x4cfad9;
      }
    },
    '_obtainHtml5Audio': function () {
      var _0x5b383f = this || _0x23327b;
      if (_0x5b383f._html5AudioPool.length) return _0x5b383f._html5AudioPool.pop();
      return (_0x5b383f = new Audio().play()) && 'undefined' !== typeof Promise && (_0x5b383f instanceof Promise || 'function' === typeof _0x5b383f.then) && _0x5b383f['catch'](function () {
        console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
      }), new Audio();
    },
    '_releaseHtml5Audio': function (_0x1bfd92) {
      var _0xc5eda5 = this || _0x23327b;
      return _0x1bfd92._unlocked && _0xc5eda5._html5AudioPool.push(_0x1bfd92), _0xc5eda5;
    },
    '_autoSuspend': function () {
      var _0x414a28 = this;
      if (_0x414a28.autoSuspend && _0x414a28.ctx && 'undefined' !== typeof _0x414a28.ctx.suspend && _0x23327b.usingWebAudio) {
        for (var _0x3b72c9 = 0x0; _0x3b72c9 < _0x414a28._howls.length; _0x3b72c9++) if (_0x414a28._howls[_0x3b72c9]._webAudio) {
          for (var _0x15c39b = 0x0; _0x15c39b < _0x414a28._howls[_0x3b72c9]._sounds.length; _0x15c39b++) if (!_0x414a28._howls[_0x3b72c9]._sounds[_0x15c39b]._paused) return _0x414a28;
        }
        return _0x414a28._suspendTimer && clearTimeout(_0x414a28._suspendTimer), _0x414a28._suspendTimer = setTimeout(function () {
          if (_0x414a28.autoSuspend) {
            _0x414a28._suspendTimer = null, _0x414a28.state = 'suspending';
            var _0x2ce103 = function () {
              _0x414a28.state = 'suspended', _0x414a28._resumeAfterSuspend && (delete _0x414a28._resumeAfterSuspend, _0x414a28._autoResume());
            };
            _0x414a28.ctx.suspend().then(_0x2ce103, _0x2ce103);
          }
        }, 0x7530), _0x414a28;
      }
    },
    '_autoResume': function () {
      var _0xc6c333 = this;
      if (_0xc6c333.ctx && 'undefined' !== typeof _0xc6c333.ctx.resume && _0x23327b.usingWebAudio) return 'running' === _0xc6c333.state && 'interrupted' !== _0xc6c333.ctx.state && _0xc6c333._suspendTimer ? (clearTimeout(_0xc6c333._suspendTimer), _0xc6c333._suspendTimer = null) : 'suspended' === _0xc6c333.state || 'running' === _0xc6c333.state && 'interrupted' === _0xc6c333.ctx.state ? (_0xc6c333.ctx.resume().then(function () {
        _0xc6c333.state = 'running';
        for (var _0xf33d45 = 0x0; _0xf33d45 < _0xc6c333._howls.length; _0xf33d45++) _0xc6c333._howls[_0xf33d45]._emit('resume');
      }), _0xc6c333._suspendTimer && (clearTimeout(_0xc6c333._suspendTimer), _0xc6c333._suspendTimer = null)) : 'suspending' === _0xc6c333.state && (_0xc6c333._resumeAfterSuspend = !0x0), _0xc6c333;
    }
  };
  var _0x23327b = new _0x153d27(),
    _0x492069 = function (_0x10f92a) {
      !_0x10f92a.src || 0x0 === _0x10f92a.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(_0x10f92a);
    };
  _0x492069.prototype = {
    'init': function (_0x2ab0e3) {
      var _0x2d714f = this;
      return _0x23327b.ctx || _0x470827(), _0x2d714f._autoplay = _0x2ab0e3.autoplay || !0x1, _0x2d714f._format = 'string' !== typeof _0x2ab0e3.format ? _0x2ab0e3.format : [_0x2ab0e3.format], _0x2d714f._html5 = _0x2ab0e3.html5 || !0x1, _0x2d714f._muted = _0x2ab0e3.mute || !0x1, _0x2d714f._loop = _0x2ab0e3.loop || !0x1, _0x2d714f._pool = _0x2ab0e3.pool || 0x5, _0x2d714f._preload = 'boolean' === typeof _0x2ab0e3.preload || 'metadata' === _0x2ab0e3.preload ? _0x2ab0e3.preload : !0x0, _0x2d714f._rate = _0x2ab0e3.rate || 0x1, _0x2d714f._sprite = _0x2ab0e3.sprite || {}, _0x2d714f._src = 'string' !== typeof _0x2ab0e3.src ? _0x2ab0e3.src : [_0x2ab0e3.src], _0x2d714f._volume = void 0x0 !== _0x2ab0e3.volume ? _0x2ab0e3.volume : 0x1, _0x2d714f._xhr = {
        'method': _0x2ab0e3.xhr && _0x2ab0e3.xhr.method ? _0x2ab0e3.xhr.method : 'GET',
        'headers': _0x2ab0e3.xhr && _0x2ab0e3.xhr.headers ? _0x2ab0e3.xhr.headers : null,
        'withCredentials': _0x2ab0e3.xhr && _0x2ab0e3.xhr.withCredentials ? _0x2ab0e3.xhr.withCredentials : !0x1
      }, _0x2d714f._duration = 0x0, _0x2d714f._state = 'unloaded', _0x2d714f._sounds = [], _0x2d714f._endTimers = {}, _0x2d714f._queue = [], _0x2d714f._playLock = !0x1, _0x2d714f._onend = _0x2ab0e3.onend ? [{
        'fn': _0x2ab0e3.onend
      }] : [], _0x2d714f._onfade = _0x2ab0e3.onfade ? [{
        'fn': _0x2ab0e3.onfade
      }] : [], _0x2d714f._onload = _0x2ab0e3.onload ? [{
        'fn': _0x2ab0e3.onload
      }] : [], _0x2d714f._onloaderror = _0x2ab0e3.onloaderror ? [{
        'fn': _0x2ab0e3.onloaderror
      }] : [], _0x2d714f._onplayerror = _0x2ab0e3.onplayerror ? [{
        'fn': _0x2ab0e3.onplayerror
      }] : [], _0x2d714f._onpause = _0x2ab0e3.onpause ? [{
        'fn': _0x2ab0e3.onpause
      }] : [], _0x2d714f._onplay = _0x2ab0e3.onplay ? [{
        'fn': _0x2ab0e3.onplay
      }] : [], _0x2d714f._onstop = _0x2ab0e3.onstop ? [{
        'fn': _0x2ab0e3.onstop
      }] : [], _0x2d714f._onmute = _0x2ab0e3.onmute ? [{
        'fn': _0x2ab0e3.onmute
      }] : [], _0x2d714f._onvolume = _0x2ab0e3.onvolume ? [{
        'fn': _0x2ab0e3.onvolume
      }] : [], _0x2d714f._onrate = _0x2ab0e3.onrate ? [{
        'fn': _0x2ab0e3.onrate
      }] : [], _0x2d714f._onseek = _0x2ab0e3.onseek ? [{
        'fn': _0x2ab0e3.onseek
      }] : [], _0x2d714f._onunlock = _0x2ab0e3.onunlock ? [{
        'fn': _0x2ab0e3.onunlock
      }] : [], _0x2d714f._onresume = [], _0x2d714f._webAudio = _0x23327b.usingWebAudio && !_0x2d714f._html5, 'undefined' !== typeof _0x23327b.ctx && _0x23327b.ctx && _0x23327b.autoUnlock && _0x23327b._unlockAudio(), _0x23327b._howls.push(_0x2d714f), _0x2d714f._autoplay && _0x2d714f._queue.push({
        'event': 'play',
        'action': function () {
          _0x2d714f.play();
        }
      }), _0x2d714f._preload && 'none' !== _0x2d714f._preload && _0x2d714f.load(), _0x2d714f;
    },
    'load': function () {
      var _0x3122b6 = null;
      if (_0x23327b.noAudio) this._emit('loaderror', null, "No audio support.");else {
        'string' === typeof this._src && (this._src = [this._src]);
        for (var _0x146004 = 0x0; _0x146004 < this._src.length; _0x146004++) {
          var _0x2dbe5e, _0x573b4e;
          if (this._format && this._format[_0x146004]) _0x2dbe5e = this._format[_0x146004];else {
            _0x573b4e = this._src[_0x146004];
            if ('string' !== typeof _0x573b4e) {
              this._emit('loaderror', null, "Non-string found in selected audio sources - ignoring.");
              continue;
            }
            (_0x2dbe5e = /^data:audio\/([^;,]+);/i.exec(_0x573b4e)) || (_0x2dbe5e = /\.([^.]+)$/.exec(_0x573b4e.split('?', 0x1)[0x0])), _0x2dbe5e && (_0x2dbe5e = _0x2dbe5e[0x1].toLowerCase());
          }
          _0x2dbe5e || console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
          if (_0x2dbe5e && _0x23327b.codecs(_0x2dbe5e)) {
            _0x3122b6 = this._src[_0x146004];
            break;
          }
        }
        if (_0x3122b6) {
          this._src = _0x3122b6, this._state = 'loading', 'https:' === window.location.protocol && 'http:' === _0x3122b6.slice(0x0, 0x5) && (this._html5 = !0x0, this._webAudio = !0x1), new _0x3249cc(this);
          if (this._webAudio) {
            var _0x2b1b25 = this,
              _0x45198b = _0x2b1b25._src;
            if (_0x2f620b[_0x45198b]) _0x2b1b25._duration = _0x2f620b[_0x45198b].duration, _0x1b3019(_0x2b1b25);else {
              if (/^data:[^;]+;base64,/.test(_0x45198b)) {
                _0x3122b6 = atob(_0x45198b.split(',')[0x1]), _0x146004 = new Uint8Array(_0x3122b6.length);
                for (_0x2dbe5e = 0x0; _0x2dbe5e < _0x3122b6.length; ++_0x2dbe5e) _0x146004[_0x2dbe5e] = _0x3122b6.charCodeAt(_0x2dbe5e);
                _0x126fc4(_0x146004.buffer, _0x2b1b25);
              } else {
                var _0x3edec1 = new XMLHttpRequest();
                _0x3edec1.open(_0x2b1b25._xhr.method, _0x45198b, !0x0), _0x3edec1.withCredentials = _0x2b1b25._xhr.withCredentials, _0x3edec1.responseType = 'arraybuffer', _0x2b1b25._xhr.headers && Object.keys(_0x2b1b25._xhr.headers).forEach(function (_0x4a883f) {
                  _0x3edec1.setRequestHeader(_0x4a883f, _0x2b1b25._xhr.headers[_0x4a883f]);
                }), _0x3edec1.onload = function () {
                  var _0x23a056 = (_0x3edec1.status + '')[0x0];
                  '0' !== _0x23a056 && '2' !== _0x23a056 && '3' !== _0x23a056 ? _0x2b1b25._emit('loaderror', null, "Failed loading audio file with status: " + _0x3edec1.status + '.') : _0x126fc4(_0x3edec1.response, _0x2b1b25);
                }, _0x3edec1.onerror = function () {
                  _0x2b1b25._webAudio && (_0x2b1b25._html5 = !0x0, _0x2b1b25._webAudio = !0x1, _0x2b1b25._sounds = [], delete _0x2f620b[_0x45198b], _0x2b1b25.load());
                };
                try {
                  _0x3edec1.send();
                } catch (_0x1ff735) {
                  _0x3edec1.onerror();
                }
              }
            }
          }
          return this;
        }
        this._emit('loaderror', null, "No codec support for selected audio sources.");
      }
    },
    'play': function (_0x420be0, _0x29d96a) {
      var _0xa575d7 = this,
        _0x3f78f5 = null;
      if ('number' === typeof _0x420be0) _0x3f78f5 = _0x420be0, _0x420be0 = null;else {
        if ('string' === typeof _0x420be0 && 'loaded' === _0xa575d7._state && !_0xa575d7._sprite[_0x420be0]) return null;
        if ('undefined' === typeof _0x420be0 && (_0x420be0 = '__default', !_0xa575d7._playLock)) {
          for (var _0x59293b = 0x0, _0x50f878 = 0x0; _0x50f878 < _0xa575d7._sounds.length; _0x50f878++) _0xa575d7._sounds[_0x50f878]._paused && !_0xa575d7._sounds[_0x50f878]._ended && (_0x59293b++, _0x3f78f5 = _0xa575d7._sounds[_0x50f878]._id);
          0x1 === _0x59293b ? _0x420be0 = null : _0x3f78f5 = null;
        }
      }
      var _0x48fd12 = _0x3f78f5 ? _0xa575d7._soundById(_0x3f78f5) : _0xa575d7._inactiveSound();
      if (!_0x48fd12) return null;
      _0x3f78f5 && !_0x420be0 && (_0x420be0 = _0x48fd12._sprite || '__default');
      if ('loaded' !== _0xa575d7._state) {
        _0x48fd12._sprite = _0x420be0, _0x48fd12._ended = !0x1;
        var _0x23198a = _0x48fd12._id;
        return _0xa575d7._queue.push({
          'event': 'play',
          'action': function () {
            _0xa575d7.play(_0x23198a);
          }
        }), _0x23198a;
      }
      if (_0x3f78f5 && !_0x48fd12._paused) return _0x29d96a || _0xa575d7._loadQueue('play'), _0x48fd12._id;
      _0xa575d7._webAudio && _0x23327b._autoResume();
      var _0x51461a = Math.max(0x0, 0x0 < _0x48fd12._seek ? _0x48fd12._seek : _0xa575d7._sprite[_0x420be0][0x0] / 0x3e8),
        _0x2df731 = Math.max(0x0, (_0xa575d7._sprite[_0x420be0][0x0] + _0xa575d7._sprite[_0x420be0][0x1]) / 0x3e8 - _0x51461a),
        _0x3eac62 = 0x3e8 * _0x2df731 / Math.abs(_0x48fd12._rate),
        _0x1920d9 = _0xa575d7._sprite[_0x420be0][0x0] / 0x3e8,
        _0x1b6a1b = (_0xa575d7._sprite[_0x420be0][0x0] + _0xa575d7._sprite[_0x420be0][0x1]) / 0x3e8;
      _0x48fd12._sprite = _0x420be0, _0x48fd12._ended = !0x1;
      var _0x574280 = function () {
        _0x48fd12._paused = !0x1, _0x48fd12._seek = _0x51461a, _0x48fd12._start = _0x1920d9, _0x48fd12._stop = _0x1b6a1b, _0x48fd12._loop = !(!_0x48fd12._loop && !_0xa575d7._sprite[_0x420be0][0x2]);
      };
      if (_0x51461a >= _0x1b6a1b) _0xa575d7._ended(_0x48fd12);else {
        var _0x3e536e = _0x48fd12._node;
        if (_0xa575d7._webAudio) _0x3f78f5 = function () {
          _0xa575d7._playLock = !0x1, _0x574280(), _0xa575d7._refreshBuffer(_0x48fd12), _0x3e536e.gain.setValueAtTime(_0x48fd12._muted || _0xa575d7._muted ? 0x0 : _0x48fd12._volume, _0x23327b.ctx.currentTime), _0x48fd12._playStart = _0x23327b.ctx.currentTime, 'undefined' === typeof _0x3e536e.bufferSource.start ? _0x48fd12._loop ? _0x3e536e.bufferSource.noteGrainOn(0x0, _0x51461a, 0x15180) : _0x3e536e.bufferSource.noteGrainOn(0x0, _0x51461a, _0x2df731) : _0x48fd12._loop ? _0x3e536e.bufferSource.start(0x0, _0x51461a, 0x15180) : _0x3e536e.bufferSource.start(0x0, _0x51461a, _0x2df731), Infinity !== _0x3eac62 && (_0xa575d7._endTimers[_0x48fd12._id] = setTimeout(_0xa575d7._ended.bind(_0xa575d7, _0x48fd12), _0x3eac62)), _0x29d96a || setTimeout(function () {
            _0xa575d7._emit('play', _0x48fd12._id), _0xa575d7._loadQueue();
          }, 0x0);
        }, 'running' === _0x23327b.state && 'interrupted' !== _0x23327b.ctx.state ? _0x3f78f5() : (_0xa575d7._playLock = !0x0, _0xa575d7.once('resume', _0x3f78f5), _0xa575d7._clearTimer(_0x48fd12._id));else {
          var _0x2bb0c4 = function () {
            _0x3e536e.currentTime = _0x51461a, _0x3e536e.muted = _0x48fd12._muted || _0xa575d7._muted || _0x23327b._muted || _0x3e536e.muted, _0x3e536e.volume = _0x48fd12._volume * _0x23327b.volume(), _0x3e536e.playbackRate = _0x48fd12._rate;
            try {
              var _0xcb6d1e = _0x3e536e.play();
              _0xcb6d1e && 'undefined' !== typeof Promise && (_0xcb6d1e instanceof Promise || 'function' === typeof _0xcb6d1e.then) ? (_0xa575d7._playLock = !0x0, _0x574280(), _0xcb6d1e.then(function () {
                _0xa575d7._playLock = !0x1, _0x3e536e._unlocked = !0x0, _0x29d96a || (_0xa575d7._emit('play', _0x48fd12._id), _0xa575d7._loadQueue());
              })['catch'](function () {
                _0xa575d7._playLock = !0x1, _0xa575d7._emit('playerror', _0x48fd12._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), _0x48fd12._ended = !0x0, _0x48fd12._paused = !0x0;
              })) : _0x29d96a || (_0xa575d7._playLock = !0x1, _0x574280(), _0xa575d7._emit('play', _0x48fd12._id), _0xa575d7._loadQueue()), _0x3e536e.playbackRate = _0x48fd12._rate, _0x3e536e.paused ? _0xa575d7._emit('playerror', _0x48fd12._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.") : '__default' !== _0x420be0 || _0x48fd12._loop ? _0xa575d7._endTimers[_0x48fd12._id] = setTimeout(_0xa575d7._ended.bind(_0xa575d7, _0x48fd12), _0x3eac62) : (_0xa575d7._endTimers[_0x48fd12._id] = function () {
                _0xa575d7._ended(_0x48fd12), _0x3e536e.removeEventListener('ended', _0xa575d7._endTimers[_0x48fd12._id], !0x1);
              }, _0x3e536e.addEventListener('ended', _0xa575d7._endTimers[_0x48fd12._id], !0x1));
            } catch (_0x1c23b5) {
              _0xa575d7._emit('playerror', _0x48fd12._id, _0x1c23b5);
            }
          };
          'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === _0x3e536e.src && (_0x3e536e.src = _0xa575d7._src, _0x3e536e.load()), _0x3f78f5 = window && window.ejecta || !_0x3e536e.readyState && _0x23327b._navigator.isCocoonJS;
          if (0x3 <= _0x3e536e.readyState || _0x3f78f5) _0x2bb0c4();else {
            _0xa575d7._playLock = !0x0;
            var _0x346474 = function () {
              _0x2bb0c4(), _0x3e536e.removeEventListener(_0x23327b._canPlayEvent, _0x346474, !0x1);
            };
            _0x3e536e.addEventListener(_0x23327b._canPlayEvent, _0x346474, !0x1), _0xa575d7._clearTimer(_0x48fd12._id);
          }
        }
        return _0x48fd12._id;
      }
    },
    'pause': function (_0x4d5b7e, _0x58f992) {
      var _0x41644d = this;
      if ('loaded' !== _0x41644d._state || _0x41644d._playLock) return _0x41644d._queue.push({
        'event': 'pause',
        'action': function () {
          _0x41644d.pause(_0x4d5b7e);
        }
      }), _0x41644d;
      for (var _0x1c65f0 = _0x41644d._getSoundIds(_0x4d5b7e), _0x50b840 = 0x0; _0x50b840 < _0x1c65f0.length; _0x50b840++) {
        _0x41644d._clearTimer(_0x1c65f0[_0x50b840]);
        var _0x22cc8c = _0x41644d._soundById(_0x1c65f0[_0x50b840]);
        if (_0x22cc8c && !_0x22cc8c._paused && (_0x22cc8c._seek = _0x41644d.seek(_0x1c65f0[_0x50b840]), _0x22cc8c._rateSeek = 0x0, _0x22cc8c._paused = !0x0, _0x41644d._stopFade(_0x1c65f0[_0x50b840]), _0x22cc8c._node)) {
          if (_0x41644d._webAudio) {
            if (!_0x22cc8c._node.bufferSource) continue;
            'undefined' === typeof _0x22cc8c._node.bufferSource.stop ? _0x22cc8c._node.bufferSource.noteOff(0x0) : _0x22cc8c._node.bufferSource.stop(0x0), _0x41644d._cleanBuffer(_0x22cc8c._node);
          } else (!isNaN(_0x22cc8c._node.duration) || Infinity === _0x22cc8c._node.duration) && _0x22cc8c._node.pause();
        }
        _0x58f992 || _0x41644d._emit('pause', _0x22cc8c ? _0x22cc8c._id : null);
      }
      return _0x41644d;
    },
    'stop': function (_0x5e737d, _0x4bc579) {
      var _0x3f28f8 = this;
      if ('loaded' !== _0x3f28f8._state || _0x3f28f8._playLock) return _0x3f28f8._queue.push({
        'event': 'stop',
        'action': function () {
          _0x3f28f8.stop(_0x5e737d);
        }
      }), _0x3f28f8;
      for (var _0x5defbe = _0x3f28f8._getSoundIds(_0x5e737d), _0x322149 = 0x0; _0x322149 < _0x5defbe.length; _0x322149++) {
        _0x3f28f8._clearTimer(_0x5defbe[_0x322149]);
        var _0x396911 = _0x3f28f8._soundById(_0x5defbe[_0x322149]);
        if (_0x396911) {
          _0x396911._seek = _0x396911._start || 0x0, _0x396911._rateSeek = 0x0, _0x396911._paused = !0x0, _0x396911._ended = !0x0, _0x3f28f8._stopFade(_0x5defbe[_0x322149]);
          if (_0x396911._node) {
            if (_0x3f28f8._webAudio) _0x396911._node.bufferSource && ('undefined' === typeof _0x396911._node.bufferSource.stop ? _0x396911._node.bufferSource.noteOff(0x0) : _0x396911._node.bufferSource.stop(0x0), _0x3f28f8._cleanBuffer(_0x396911._node));else {
              if (!isNaN(_0x396911._node.duration) || Infinity === _0x396911._node.duration) _0x396911._node.currentTime = _0x396911._start || 0x0, _0x396911._node.pause(), Infinity === _0x396911._node.duration && _0x3f28f8._clearSound(_0x396911._node);
            }
          }
          _0x4bc579 || _0x3f28f8._emit('stop', _0x396911._id);
        }
      }
      return _0x3f28f8;
    },
    'mute': function (_0xc3d736, _0x2cb3b0) {
      var _0x2cf50b = this;
      if ('loaded' !== _0x2cf50b._state || _0x2cf50b._playLock) return _0x2cf50b._queue.push({
        'event': 'mute',
        'action': function () {
          _0x2cf50b.mute(_0xc3d736, _0x2cb3b0);
        }
      }), _0x2cf50b;
      if ('undefined' === typeof _0x2cb3b0) {
        if ('boolean' === typeof _0xc3d736) _0x2cf50b._muted = _0xc3d736;else return _0x2cf50b._muted;
      }
      for (var _0x2fa48a = _0x2cf50b._getSoundIds(_0x2cb3b0), _0xd8e260 = 0x0; _0xd8e260 < _0x2fa48a.length; _0xd8e260++) {
        var _0x140a6a = _0x2cf50b._soundById(_0x2fa48a[_0xd8e260]);
        _0x140a6a && (_0x140a6a._muted = _0xc3d736, _0x140a6a._interval && _0x2cf50b._stopFade(_0x140a6a._id), _0x2cf50b._webAudio && _0x140a6a._node ? _0x140a6a._node.gain.setValueAtTime(_0xc3d736 ? 0x0 : _0x140a6a._volume, _0x23327b.ctx.currentTime) : _0x140a6a._node && (_0x140a6a._node.muted = _0x23327b._muted ? !0x0 : _0xc3d736), _0x2cf50b._emit('mute', _0x140a6a._id));
      }
      return _0x2cf50b;
    },
    'volume': function () {
      var _0x191d2d = this,
        _0x4e32fc = arguments,
        _0x278c8e,
        _0x354fbd;
      if (0x0 === _0x4e32fc.length) return _0x191d2d._volume;
      0x1 === _0x4e32fc.length || 0x2 === _0x4e32fc.length && 'undefined' === typeof _0x4e32fc[0x1] ? 0x0 <= _0x191d2d._getSoundIds().indexOf(_0x4e32fc[0x0]) ? _0x354fbd = parseInt(_0x4e32fc[0x0], 0xa) : _0x278c8e = parseFloat(_0x4e32fc[0x0]) : 0x2 <= _0x4e32fc.length && (_0x278c8e = parseFloat(_0x4e32fc[0x0]), _0x354fbd = parseInt(_0x4e32fc[0x1], 0xa));
      var _0x45e61e;
      if ('undefined' !== typeof _0x278c8e && 0x0 <= _0x278c8e && 0x1 >= _0x278c8e) {
        if ('loaded' !== _0x191d2d._state || _0x191d2d._playLock) return _0x191d2d._queue.push({
          'event': 'volume',
          'action': function () {
            _0x191d2d.volume.apply(_0x191d2d, _0x4e32fc);
          }
        }), _0x191d2d;
        'undefined' === typeof _0x354fbd && (_0x191d2d._volume = _0x278c8e), _0x354fbd = _0x191d2d._getSoundIds(_0x354fbd);
        for (var _0x4bbf77 = 0x0; _0x4bbf77 < _0x354fbd.length; _0x4bbf77++) if (_0x45e61e = _0x191d2d._soundById(_0x354fbd[_0x4bbf77])) _0x45e61e._volume = _0x278c8e, _0x4e32fc[0x2] || _0x191d2d._stopFade(_0x354fbd[_0x4bbf77]), _0x191d2d._webAudio && _0x45e61e._node && !_0x45e61e._muted ? _0x45e61e._node.gain.setValueAtTime(_0x278c8e, _0x23327b.ctx.currentTime) : _0x45e61e._node && !_0x45e61e._muted && (_0x45e61e._node.volume = _0x278c8e * _0x23327b.volume()), _0x191d2d._emit('volume', _0x45e61e._id);
      } else return (_0x45e61e = _0x354fbd ? _0x191d2d._soundById(_0x354fbd) : _0x191d2d._sounds[0x0]) ? _0x45e61e._volume : 0x0;
      return _0x191d2d;
    },
    'fade': function (_0x355f7b, _0x3aa296, _0x46fd39, _0x5d26f8) {
      var _0x110972 = this;
      if ('loaded' !== _0x110972._state || _0x110972._playLock) return _0x110972._queue.push({
        'event': 'fade',
        'action': function () {
          _0x110972.fade(_0x355f7b, _0x3aa296, _0x46fd39, _0x5d26f8);
        }
      }), _0x110972;
      _0x355f7b = Math.min(Math.max(0x0, parseFloat(_0x355f7b)), 0x1), _0x3aa296 = Math.min(Math.max(0x0, parseFloat(_0x3aa296)), 0x1), _0x46fd39 = parseFloat(_0x46fd39), _0x110972.volume(_0x355f7b, _0x5d26f8);
      for (var _0x4fa8db = _0x110972._getSoundIds(_0x5d26f8), _0x5f4148 = 0x0; _0x5f4148 < _0x4fa8db.length; _0x5f4148++) {
        var _0x3da9d6 = _0x110972._soundById(_0x4fa8db[_0x5f4148]);
        if (_0x3da9d6) {
          _0x5d26f8 || _0x110972._stopFade(_0x4fa8db[_0x5f4148]);
          if (_0x110972._webAudio && !_0x3da9d6._muted) {
            var _0x402746 = _0x23327b.ctx.currentTime,
              _0x1390b4 = _0x402746 + _0x46fd39 / 0x3e8;
            _0x3da9d6._volume = _0x355f7b, _0x3da9d6._node.gain.setValueAtTime(_0x355f7b, _0x402746), _0x3da9d6._node.gain.linearRampToValueAtTime(_0x3aa296, _0x1390b4);
          }
          _0x110972._startFadeInterval(_0x3da9d6, _0x355f7b, _0x3aa296, _0x46fd39, _0x4fa8db[_0x5f4148], 'undefined' === typeof _0x5d26f8);
        }
      }
      return _0x110972;
    },
    '_startFadeInterval': function (_0x577f56, _0x56d567, _0x2ecc10, _0x5ead0d, _0x4304e0, _0x32725c) {
      var _0x59f171 = this,
        _0x3a1c51 = _0x56d567,
        _0x457e61 = _0x2ecc10 - _0x56d567;
      _0x4304e0 = Math.abs(_0x457e61 / 0.01), _0x4304e0 = Math.max(0x4, 0x0 < _0x4304e0 ? _0x5ead0d / _0x4304e0 : _0x5ead0d);
      var _0x18fb54 = Date.now();
      _0x577f56._fadeTo = _0x2ecc10, _0x577f56._interval = setInterval(function () {
        var _0x45cc5c = (Date.now() - _0x18fb54) / _0x5ead0d;
        _0x18fb54 = Date.now(), _0x3a1c51 += _0x457e61 * _0x45cc5c, _0x3a1c51 = 0x0 > _0x457e61 ? Math.max(_0x2ecc10, _0x3a1c51) : Math.min(_0x2ecc10, _0x3a1c51), _0x3a1c51 = Math.round(0x64 * _0x3a1c51) / 0x64, _0x59f171._webAudio ? _0x577f56._volume = _0x3a1c51 : _0x59f171.volume(_0x3a1c51, _0x577f56._id, !0x0), _0x32725c && (_0x59f171._volume = _0x3a1c51);
        if (_0x2ecc10 < _0x56d567 && _0x3a1c51 <= _0x2ecc10 || _0x2ecc10 > _0x56d567 && _0x3a1c51 >= _0x2ecc10) clearInterval(_0x577f56._interval), _0x577f56._interval = null, _0x577f56._fadeTo = null, _0x59f171.volume(_0x2ecc10, _0x577f56._id), _0x59f171._emit('fade', _0x577f56._id);
      }, _0x4304e0);
    },
    '_stopFade': function (_0x2394d3) {
      var _0x3971dc = this._soundById(_0x2394d3);
      return _0x3971dc && _0x3971dc._interval && (this._webAudio && _0x3971dc._node.gain.cancelScheduledValues(_0x23327b.ctx.currentTime), clearInterval(_0x3971dc._interval), _0x3971dc._interval = null, this.volume(_0x3971dc._fadeTo, _0x2394d3), _0x3971dc._fadeTo = null, this._emit('fade', _0x2394d3)), this;
    },
    'loop': function () {
      var _0x5ba7d9 = arguments,
        _0x4dc1d5,
        _0xebcd0d;
      if (0x0 === _0x5ba7d9.length) return this._loop;
      if (0x1 === _0x5ba7d9.length) {
        if ('boolean' === typeof _0x5ba7d9[0x0]) this._loop = _0x4dc1d5 = _0x5ba7d9[0x0];else return (_0x5ba7d9 = this._soundById(parseInt(_0x5ba7d9[0x0], 0xa))) ? _0x5ba7d9._loop : !0x1;
      } else 0x2 === _0x5ba7d9.length && (_0x4dc1d5 = _0x5ba7d9[0x0], _0xebcd0d = parseInt(_0x5ba7d9[0x1], 0xa));
      _0xebcd0d = this._getSoundIds(_0xebcd0d);
      for (var _0x44c06a = 0x0; _0x44c06a < _0xebcd0d.length; _0x44c06a++) if (_0x5ba7d9 = this._soundById(_0xebcd0d[_0x44c06a])) {
        if (_0x5ba7d9._loop = _0x4dc1d5, this._webAudio && _0x5ba7d9._node && _0x5ba7d9._node.bufferSource && (_0x5ba7d9._node.bufferSource.loop = _0x4dc1d5)) _0x5ba7d9._node.bufferSource.loopStart = _0x5ba7d9._start || 0x0, _0x5ba7d9._node.bufferSource.loopEnd = _0x5ba7d9._stop;
      }
      return this;
    },
    'rate': function () {
      var _0x2dd966 = this,
        _0x5bbbcc = arguments,
        _0x52c9a1,
        _0x278834;
      0x0 === _0x5bbbcc.length ? _0x278834 = _0x2dd966._sounds[0x0]._id : 0x1 === _0x5bbbcc.length ? 0x0 <= _0x2dd966._getSoundIds().indexOf(_0x5bbbcc[0x0]) ? _0x278834 = parseInt(_0x5bbbcc[0x0], 0xa) : _0x52c9a1 = parseFloat(_0x5bbbcc[0x0]) : 0x2 === _0x5bbbcc.length && (_0x52c9a1 = parseFloat(_0x5bbbcc[0x0]), _0x278834 = parseInt(_0x5bbbcc[0x1], 0xa));
      var _0x1d1db0;
      if ('number' === typeof _0x52c9a1) {
        if ('loaded' !== _0x2dd966._state || _0x2dd966._playLock) return _0x2dd966._queue.push({
          'event': 'rate',
          'action': function () {
            _0x2dd966.rate.apply(_0x2dd966, _0x5bbbcc);
          }
        }), _0x2dd966;
        'undefined' === typeof _0x278834 && (_0x2dd966._rate = _0x52c9a1), _0x278834 = _0x2dd966._getSoundIds(_0x278834);
        for (var _0x4dc930 = 0x0; _0x4dc930 < _0x278834.length; _0x4dc930++) if (_0x1d1db0 = _0x2dd966._soundById(_0x278834[_0x4dc930])) {
          _0x2dd966.playing(_0x278834[_0x4dc930]) && (_0x1d1db0._rateSeek = _0x2dd966.seek(_0x278834[_0x4dc930]), _0x1d1db0._playStart = _0x2dd966._webAudio ? _0x23327b.ctx.currentTime : _0x1d1db0._playStart), _0x1d1db0._rate = _0x52c9a1, _0x2dd966._webAudio && _0x1d1db0._node && _0x1d1db0._node.bufferSource ? _0x1d1db0._node.bufferSource.playbackRate.setValueAtTime(_0x52c9a1, _0x23327b.ctx.currentTime) : _0x1d1db0._node && (_0x1d1db0._node.playbackRate = _0x52c9a1);
          var _0x5cbca3 = _0x2dd966.seek(_0x278834[_0x4dc930]),
            _0x5cbca3 = 0x3e8 * ((_0x2dd966._sprite[_0x1d1db0._sprite][0x0] + _0x2dd966._sprite[_0x1d1db0._sprite][0x1]) / 0x3e8 - _0x5cbca3) / Math.abs(_0x1d1db0._rate);
          if (_0x2dd966._endTimers[_0x278834[_0x4dc930]] || !_0x1d1db0._paused) _0x2dd966._clearTimer(_0x278834[_0x4dc930]), _0x2dd966._endTimers[_0x278834[_0x4dc930]] = setTimeout(_0x2dd966._ended.bind(_0x2dd966, _0x1d1db0), _0x5cbca3);
          _0x2dd966._emit('rate', _0x1d1db0._id);
        }
      } else return (_0x1d1db0 = _0x2dd966._soundById(_0x278834)) ? _0x1d1db0._rate : _0x2dd966._rate;
      return _0x2dd966;
    },
    'seek': function () {
      var _0x175dfe = this,
        _0x1d73ed = arguments,
        _0x15d2ef,
        _0xe00683;
      0x0 === _0x1d73ed.length ? _0xe00683 = _0x175dfe._sounds[0x0]._id : 0x1 === _0x1d73ed.length ? 0x0 <= _0x175dfe._getSoundIds().indexOf(_0x1d73ed[0x0]) ? _0xe00683 = parseInt(_0x1d73ed[0x0], 0xa) : _0x175dfe._sounds.length && (_0xe00683 = _0x175dfe._sounds[0x0]._id, _0x15d2ef = parseFloat(_0x1d73ed[0x0])) : 0x2 === _0x1d73ed.length && (_0x15d2ef = parseFloat(_0x1d73ed[0x0]), _0xe00683 = parseInt(_0x1d73ed[0x1], 0xa));
      if ('undefined' === typeof _0xe00683) return _0x175dfe;
      if ('loaded' !== _0x175dfe._state || _0x175dfe._playLock) return _0x175dfe._queue.push({
        'event': 'seek',
        'action': function () {
          _0x175dfe.seek.apply(_0x175dfe, _0x1d73ed);
        }
      }), _0x175dfe;
      var _0x25a5df = _0x175dfe._soundById(_0xe00683);
      if (_0x25a5df) {
        if ('number' === typeof _0x15d2ef && 0x0 <= _0x15d2ef) {
          var _0x4907f3 = _0x175dfe.playing(_0xe00683);
          _0x4907f3 && _0x175dfe.pause(_0xe00683, !0x0), _0x25a5df._seek = _0x15d2ef, _0x25a5df._ended = !0x1, _0x175dfe._clearTimer(_0xe00683), !_0x175dfe._webAudio && _0x25a5df._node && !isNaN(_0x25a5df._node.duration) && (_0x25a5df._node.currentTime = _0x15d2ef);
          var _0x2e6fba = function () {
            _0x175dfe._emit('seek', _0xe00683), _0x4907f3 && _0x175dfe.play(_0xe00683, !0x0);
          };
          if (_0x4907f3 && !_0x175dfe._webAudio) {
            var _0x4cb2a7 = function () {
              _0x175dfe._playLock ? setTimeout(_0x4cb2a7, 0x0) : _0x2e6fba();
            };
            setTimeout(_0x4cb2a7, 0x0);
          } else _0x2e6fba();
        } else return _0x175dfe._webAudio ? (_0x15d2ef = _0x175dfe.playing(_0xe00683) ? _0x23327b.ctx.currentTime - _0x25a5df._playStart : 0x0, _0x25a5df._seek + ((_0x25a5df._rateSeek ? _0x25a5df._rateSeek - _0x25a5df._seek : 0x0) + _0x15d2ef * Math.abs(_0x25a5df._rate))) : _0x25a5df._node.currentTime;
      }
      return _0x175dfe;
    },
    'playing': function (_0x3de7c7) {
      if ('number' === typeof _0x3de7c7) return (_0x3de7c7 = this._soundById(_0x3de7c7)) ? !_0x3de7c7._paused : !0x1;
      for (_0x3de7c7 = 0x0; _0x3de7c7 < this._sounds.length; _0x3de7c7++) if (!this._sounds[_0x3de7c7]._paused) return !0x0;
      return !0x1;
    },
    'duration': function (_0x756719) {
      var _0x2fa089 = this._duration;
      return (_0x756719 = this._soundById(_0x756719)) && (_0x2fa089 = this._sprite[_0x756719._sprite][0x1] / 0x3e8), _0x2fa089;
    },
    'state': function () {
      return this._state;
    },
    'unload': function () {
      for (var _0x7de17d = this._sounds, _0x8130d0 = 0x0; _0x8130d0 < _0x7de17d.length; _0x8130d0++) _0x7de17d[_0x8130d0]._paused || this.stop(_0x7de17d[_0x8130d0]._id), this._webAudio || (this._clearSound(_0x7de17d[_0x8130d0]._node), _0x7de17d[_0x8130d0]._node.removeEventListener('error', _0x7de17d[_0x8130d0]._errorFn, !0x1), _0x7de17d[_0x8130d0]._node.removeEventListener(_0x23327b._canPlayEvent, _0x7de17d[_0x8130d0]._loadFn, !0x1), _0x23327b._releaseHtml5Audio(_0x7de17d[_0x8130d0]._node)), delete _0x7de17d[_0x8130d0]._node, this._clearTimer(_0x7de17d[_0x8130d0]._id);
      _0x8130d0 = _0x23327b._howls.indexOf(this), 0x0 <= _0x8130d0 && _0x23327b._howls.splice(_0x8130d0, 0x1), _0x7de17d = !0x0;
      for (_0x8130d0 = 0x0; _0x8130d0 < _0x23327b._howls.length; _0x8130d0++) if (_0x23327b._howls[_0x8130d0]._src === this._src || 0x0 <= this._src.indexOf(_0x23327b._howls[_0x8130d0]._src)) {
        _0x7de17d = !0x1;
        break;
      }
      return _0x2f620b && _0x7de17d && delete _0x2f620b[this._src], _0x23327b.noAudio = !0x1, this._state = 'unloaded', this._sounds = [], null;
    },
    'on': function (_0x25fea4, _0x2cc8a2, _0x2f4d22, _0x14bec1) {
      return _0x25fea4 = this['_on' + _0x25fea4], 'function' === typeof _0x2cc8a2 && _0x25fea4.push(_0x14bec1 ? {
        'id': _0x2f4d22,
        'fn': _0x2cc8a2,
        'once': _0x14bec1
      } : {
        'id': _0x2f4d22,
        'fn': _0x2cc8a2
      }), this;
    },
    'off': function (_0x29dccf, _0x472733, _0x4a4ad4) {
      var _0xd45a2a = this['_on' + _0x29dccf],
        _0x1effa8 = 0x0;
      'number' === typeof _0x472733 && (_0x4a4ad4 = _0x472733, _0x472733 = null);
      if (_0x472733 || _0x4a4ad4) for (_0x1effa8 = 0x0; _0x1effa8 < _0xd45a2a.length; _0x1effa8++) {
        if (_0x29dccf = _0x4a4ad4 === _0xd45a2a[_0x1effa8].id, _0x472733 === _0xd45a2a[_0x1effa8].fn && _0x29dccf || !_0x472733 && _0x29dccf) {
          _0xd45a2a.splice(_0x1effa8, 0x1);
          break;
        }
      } else {
        if (_0x29dccf) this['_on' + _0x29dccf] = [];else {
          _0x472733 = Object.keys(this);
          for (_0x1effa8 = 0x0; _0x1effa8 < _0x472733.length; _0x1effa8++) 0x0 === _0x472733[_0x1effa8].indexOf('_on') && Array.isArray(this[_0x472733[_0x1effa8]]) && (this[_0x472733[_0x1effa8]] = []);
        }
      }
      return this;
    },
    'once': function (_0x268edb, _0x9cd610, _0x33fec2) {
      return this.on(_0x268edb, _0x9cd610, _0x33fec2, 0x1), this;
    },
    '_emit': function (_0x18a9eb, _0x256b0b, _0x24bb1f) {
      for (var _0x4877c7 = this['_on' + _0x18a9eb], _0x4cd6f9 = _0x4877c7.length - 0x1; 0x0 <= _0x4cd6f9; _0x4cd6f9--) if (!_0x4877c7[_0x4cd6f9].id || _0x4877c7[_0x4cd6f9].id === _0x256b0b || 'load' === _0x18a9eb) setTimeout(function (_0x36d61a) {
        _0x36d61a.call(this, _0x256b0b, _0x24bb1f);
      }.bind(this, _0x4877c7[_0x4cd6f9].fn), 0x0), _0x4877c7[_0x4cd6f9].once && this.off(_0x18a9eb, _0x4877c7[_0x4cd6f9].fn, _0x4877c7[_0x4cd6f9].id);
      return this._loadQueue(_0x18a9eb), this;
    },
    '_loadQueue': function (_0x24e7fc) {
      if (0x0 < this._queue.length) {
        var _0xd0771a = this._queue[0x0];
        _0xd0771a.event === _0x24e7fc && (this._queue.shift(), this._loadQueue()), _0x24e7fc || _0xd0771a.action();
      }
      return this;
    },
    '_ended': function (_0x2f80d5) {
      var _0x38bd22 = _0x2f80d5._sprite;
      if (!this._webAudio && _0x2f80d5._node && !_0x2f80d5._node.paused && !_0x2f80d5._node.ended && _0x2f80d5._node.currentTime < _0x2f80d5._stop) return setTimeout(this._ended.bind(this, _0x2f80d5), 0x64), this;
      _0x38bd22 = !(!_0x2f80d5._loop && !this._sprite[_0x38bd22][0x2]), this._emit('end', _0x2f80d5._id), !this._webAudio && _0x38bd22 && this.stop(_0x2f80d5._id, !0x0).play(_0x2f80d5._id);
      if (this._webAudio && _0x38bd22) {
        this._emit('play', _0x2f80d5._id), _0x2f80d5._seek = _0x2f80d5._start || 0x0, _0x2f80d5._rateSeek = 0x0, _0x2f80d5._playStart = _0x23327b.ctx.currentTime;
        var _0x1971aa = 0x3e8 * (_0x2f80d5._stop - _0x2f80d5._start) / Math.abs(_0x2f80d5._rate);
        this._endTimers[_0x2f80d5._id] = setTimeout(this._ended.bind(this, _0x2f80d5), _0x1971aa);
      }
      return this._webAudio && !_0x38bd22 && (_0x2f80d5._paused = !0x0, _0x2f80d5._ended = !0x0, _0x2f80d5._seek = _0x2f80d5._start || 0x0, _0x2f80d5._rateSeek = 0x0, this._clearTimer(_0x2f80d5._id), this._cleanBuffer(_0x2f80d5._node), _0x23327b._autoSuspend()), !this._webAudio && !_0x38bd22 && this.stop(_0x2f80d5._id, !0x0), this;
    },
    '_clearTimer': function (_0x392f04) {
      if (this._endTimers[_0x392f04]) {
        if ('function' !== typeof this._endTimers[_0x392f04]) clearTimeout(this._endTimers[_0x392f04]);else {
          var _0x5e4d6f = this._soundById(_0x392f04);
          _0x5e4d6f && _0x5e4d6f._node && _0x5e4d6f._node.removeEventListener('ended', this._endTimers[_0x392f04], !0x1);
        }
        delete this._endTimers[_0x392f04];
      }
      return this;
    },
    '_soundById': function (_0x4024de) {
      for (var _0x55fdc4 = 0x0; _0x55fdc4 < this._sounds.length; _0x55fdc4++) if (_0x4024de === this._sounds[_0x55fdc4]._id) return this._sounds[_0x55fdc4];
      return null;
    },
    '_inactiveSound': function () {
      this._drain();
      for (var _0x2c4477 = 0x0; _0x2c4477 < this._sounds.length; _0x2c4477++) if (this._sounds[_0x2c4477]._ended) return this._sounds[_0x2c4477].reset();
      return new _0x3249cc(this);
    },
    '_drain': function () {
      var _0x5cb6d2 = this._pool,
        _0x29842f = 0x0,
        _0x6070dd = 0x0;
      if (!(this._sounds.length < _0x5cb6d2)) {
        for (_0x6070dd = 0x0; _0x6070dd < this._sounds.length; _0x6070dd++) this._sounds[_0x6070dd]._ended && _0x29842f++;
        for (_0x6070dd = this._sounds.length - 0x1; 0x0 <= _0x6070dd && !(_0x29842f <= _0x5cb6d2); _0x6070dd--) this._sounds[_0x6070dd]._ended && (this._webAudio && this._sounds[_0x6070dd]._node && this._sounds[_0x6070dd]._node.disconnect(0x0), this._sounds.splice(_0x6070dd, 0x1), _0x29842f--);
      }
    },
    '_getSoundIds': function (_0x46f169) {
      if ('undefined' === typeof _0x46f169) {
        _0x46f169 = [];
        for (var _0x5bef0e = 0x0; _0x5bef0e < this._sounds.length; _0x5bef0e++) _0x46f169.push(this._sounds[_0x5bef0e]._id);
        return _0x46f169;
      }
      return [_0x46f169];
    },
    '_refreshBuffer': function (_0x1aa179) {
      _0x1aa179._node.bufferSource = _0x23327b.ctx.createBufferSource(), _0x1aa179._node.bufferSource.buffer = _0x2f620b[this._src], _0x1aa179._panner ? _0x1aa179._node.bufferSource.connect(_0x1aa179._panner) : _0x1aa179._node.bufferSource.connect(_0x1aa179._node);
      if (_0x1aa179._node.bufferSource.loop = _0x1aa179._loop) _0x1aa179._node.bufferSource.loopStart = _0x1aa179._start || 0x0, _0x1aa179._node.bufferSource.loopEnd = _0x1aa179._stop || 0x0;
      return _0x1aa179._node.bufferSource.playbackRate.setValueAtTime(_0x1aa179._rate, _0x23327b.ctx.currentTime), this;
    },
    '_cleanBuffer': function (_0x322ff4) {
      var _0x39a4aa = _0x23327b._navigator && 0x0 <= _0x23327b._navigator.vendor.indexOf('Apple');
      if (_0x23327b._scratchBuffer && _0x322ff4.bufferSource && (_0x322ff4.bufferSource.onended = null, _0x322ff4.bufferSource.disconnect(0x0), _0x39a4aa)) try {
        _0x322ff4.bufferSource.buffer = _0x23327b._scratchBuffer;
      } catch (_0x48d2af) {}
      return _0x322ff4.bufferSource = null, this;
    },
    '_clearSound': function (_0x514617) {
      /MSIE |Trident\//.test(_0x23327b._navigator && _0x23327b._navigator.userAgent) || (_0x514617.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
    }
  };
  var _0x3249cc = function (_0x22def4) {
    this._parent = _0x22def4, this.init();
  };
  _0x3249cc.prototype = {
    'init': function () {
      var _0x4ee77d = this._parent;
      return this._muted = _0x4ee77d._muted, this._loop = _0x4ee77d._loop, this._volume = _0x4ee77d._volume, this._rate = _0x4ee77d._rate, this._seek = 0x0, this._ended = this._paused = !0x0, this._sprite = '__default', this._id = ++_0x23327b._counter, _0x4ee77d._sounds.push(this), this.create(), this;
    },
    'create': function () {
      var _0xbfded5 = this._parent,
        _0x5a9bce = _0x23327b._muted || this._muted || this._parent._muted ? 0x0 : this._volume;
      return _0xbfded5._webAudio ? (this._node = 'undefined' === typeof _0x23327b.ctx.createGain ? _0x23327b.ctx.createGainNode() : _0x23327b.ctx.createGain(), this._node.gain.setValueAtTime(_0x5a9bce, _0x23327b.ctx.currentTime), this._node.paused = !0x0, this._node.connect(_0x23327b.masterGain)) : _0x23327b.noAudio || (this._node = _0x23327b._obtainHtml5Audio(), this._errorFn = this._errorListener.bind(this), this._node.addEventListener('error', this._errorFn, !0x1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(_0x23327b._canPlayEvent, this._loadFn, !0x1), this._node.src = _0xbfded5._src, this._node.preload = !0x0 === _0xbfded5._preload ? 'auto' : _0xbfded5._preload, this._node.volume = _0x5a9bce * _0x23327b.volume(), this._node.load()), this;
    },
    'reset': function () {
      var _0xcc0bcc = this._parent;
      return this._muted = _0xcc0bcc._muted, this._loop = _0xcc0bcc._loop, this._volume = _0xcc0bcc._volume, this._rate = _0xcc0bcc._rate, this._rateSeek = this._seek = 0x0, this._ended = this._paused = !0x0, this._sprite = '__default', this._id = ++_0x23327b._counter, this;
    },
    '_errorListener': function () {
      this._parent._emit('loaderror', this._id, this._node.error ? this._node.error.code : 0x0), this._node.removeEventListener('error', this._errorFn, !0x1);
    },
    '_loadListener': function () {
      var _0x2db143 = this._parent;
      _0x2db143._duration = Math.ceil(0xa * this._node.duration) / 0xa, 0x0 === Object.keys(_0x2db143._sprite).length && (_0x2db143._sprite = {
        '__default': [0x0, 0x3e8 * _0x2db143._duration]
      }), 'loaded' !== _0x2db143._state && (_0x2db143._state = 'loaded', _0x2db143._emit('load'), _0x2db143._loadQueue()), this._node.removeEventListener(_0x23327b._canPlayEvent, this._loadFn, !0x1);
    }
  };
  var _0x2f620b = {},
    _0x126fc4 = function (_0x2b5f1d, _0x462d41) {
      var _0x4b3b2b = function () {
          _0x462d41._emit('loaderror', null, "Decoding audio data failed.");
        },
        _0x1ffc09 = function (_0x4e2844) {
          _0x4e2844 && 0x0 < _0x462d41._sounds.length ? (_0x2f620b[_0x462d41._src] = _0x4e2844, _0x1b3019(_0x462d41, _0x4e2844)) : _0x4b3b2b();
        };
      'undefined' !== typeof Promise && 0x1 === _0x23327b.ctx.decodeAudioData.length ? _0x23327b.ctx.decodeAudioData(_0x2b5f1d).then(_0x1ffc09)['catch'](_0x4b3b2b) : _0x23327b.ctx.decodeAudioData(_0x2b5f1d, _0x1ffc09, _0x4b3b2b);
    },
    _0x1b3019 = function (_0x565c58, _0x5c7aea) {
      _0x5c7aea && !_0x565c58._duration && (_0x565c58._duration = _0x5c7aea.duration), 0x0 === Object.keys(_0x565c58._sprite).length && (_0x565c58._sprite = {
        '__default': [0x0, 0x3e8 * _0x565c58._duration]
      }), 'loaded' !== _0x565c58._state && (_0x565c58._state = 'loaded', _0x565c58._emit('load'), _0x565c58._loadQueue());
    },
    _0x470827 = function () {
      if (_0x23327b.usingWebAudio) {
        try {
          'undefined' !== typeof AudioContext ? _0x23327b.ctx = new AudioContext() : 'undefined' !== typeof webkitAudioContext ? _0x23327b.ctx = new webkitAudioContext() : _0x23327b.usingWebAudio = !0x1;
        } catch (_0x1972ea) {
          _0x23327b.usingWebAudio = !0x1;
        }
        _0x23327b.ctx || (_0x23327b.usingWebAudio = !0x1);
        var _0x55ed59 = /iP(hone|od|ad)/.test(_0x23327b._navigator && _0x23327b._navigator.platform),
          _0x3b7895 = _0x23327b._navigator && _0x23327b._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
          _0x3b7895 = _0x3b7895 ? parseInt(_0x3b7895[0x1], 0xa) : null;
        _0x55ed59 && _0x3b7895 && 0x9 > _0x3b7895 && (_0x55ed59 = /safari/.test(_0x23327b._navigator && _0x23327b._navigator.userAgent.toLowerCase()), _0x23327b._navigator && !_0x55ed59 && (_0x23327b.usingWebAudio = !0x1)), _0x23327b.usingWebAudio && (_0x23327b.masterGain = 'undefined' === typeof _0x23327b.ctx.createGain ? _0x23327b.ctx.createGainNode() : _0x23327b.ctx.createGain(), _0x23327b.masterGain.gain.setValueAtTime(_0x23327b._muted ? 0x0 : _0x23327b._volume, _0x23327b.ctx.currentTime), _0x23327b.masterGain.connect(_0x23327b.ctx.destination)), _0x23327b._setup();
      }
    };
  'function' === typeof define && define.amd && define([], function () {
    return {
      'Howler': _0x23327b,
      'Howl': _0x492069
    };
  }), 'undefined' !== typeof exports && (exports.Howler = _0x23327b, exports.Howl = _0x492069), 'undefined' !== typeof global ? (global.HowlerGlobal = _0x153d27, global.Howler = _0x23327b, global.Howl = _0x492069, global.Sound = _0x3249cc) : 'undefined' !== typeof window && (window.HowlerGlobal = _0x153d27, window.Howler = _0x23327b, window.Howl = _0x492069, window.Sound = _0x3249cc);
}(), function () {
  HowlerGlobal.prototype._pos = [0x0, 0x0, 0x0], HowlerGlobal.prototype._orientation = [0x0, 0x0, -0x1, 0x0, 0x1, 0x0], HowlerGlobal.prototype.stereo = function (_0xa7f9d5) {
    if (!this.ctx || !this.ctx.listener) return this;
    for (var _0x55bc1c = this._howls.length - 0x1; 0x0 <= _0x55bc1c; _0x55bc1c--) this._howls[_0x55bc1c].stereo(_0xa7f9d5);
    return this;
  }, HowlerGlobal.prototype.pos = function (_0x9c1592, _0x32cbeb, _0x3deaf1) {
    if (!this.ctx || !this.ctx.listener) return this;
    _0x32cbeb = 'number' !== typeof _0x32cbeb ? this._pos[0x1] : _0x32cbeb, _0x3deaf1 = 'number' !== typeof _0x3deaf1 ? this._pos[0x2] : _0x3deaf1;
    if ('number' === typeof _0x9c1592) this._pos = [_0x9c1592, _0x32cbeb, _0x3deaf1], 'undefined' !== typeof this.ctx.listener.positionX ? (this.ctx.listener.positionX.setTargetAtTime(this._pos[0x0], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionY.setTargetAtTime(this._pos[0x1], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[0x2], Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setPosition(this._pos[0x0], this._pos[0x1], this._pos[0x2]);else return this._pos;
    return this;
  }, HowlerGlobal.prototype.orientation = function (_0x5ad09a, _0x1d9bc9, _0x30fb51, _0x304f27, _0x115143, _0x515284) {
    if (!this.ctx || !this.ctx.listener) return this;
    var _0x2f18d5 = this._orientation;
    _0x1d9bc9 = 'number' !== typeof _0x1d9bc9 ? _0x2f18d5[0x1] : _0x1d9bc9, _0x30fb51 = 'number' !== typeof _0x30fb51 ? _0x2f18d5[0x2] : _0x30fb51, _0x304f27 = 'number' !== typeof _0x304f27 ? _0x2f18d5[0x3] : _0x304f27, _0x115143 = 'number' !== typeof _0x115143 ? _0x2f18d5[0x4] : _0x115143, _0x515284 = 'number' !== typeof _0x515284 ? _0x2f18d5[0x5] : _0x515284;
    if ('number' === typeof _0x5ad09a) this._orientation = [_0x5ad09a, _0x1d9bc9, _0x30fb51, _0x304f27, _0x115143, _0x515284], 'undefined' !== typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(_0x5ad09a, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardY.setTargetAtTime(_0x1d9bc9, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardZ.setTargetAtTime(_0x30fb51, Howler.ctx.currentTime, 0.1), this.ctx.listener.upX.setTargetAtTime(_0x304f27, Howler.ctx.currentTime, 0.1), this.ctx.listener.upY.setTargetAtTime(_0x115143, Howler.ctx.currentTime, 0.1), this.ctx.listener.upZ.setTargetAtTime(_0x515284, Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setOrientation(_0x5ad09a, _0x1d9bc9, _0x30fb51, _0x304f27, _0x115143, _0x515284);else return _0x2f18d5;
    return this;
  };
  var _0xc6534a = Howl.prototype.init;
  Howl.prototype.init = function (_0x2d3ab2) {
    return this._orientation = _0x2d3ab2.orientation || [0x1, 0x0, 0x0], this._stereo = _0x2d3ab2.stereo || null, this._pos = _0x2d3ab2.pos || null, this._pannerAttr = {
      'coneInnerAngle': 'undefined' !== typeof _0x2d3ab2.coneInnerAngle ? _0x2d3ab2.coneInnerAngle : 0x168,
      'coneOuterAngle': 'undefined' !== typeof _0x2d3ab2.coneOuterAngle ? _0x2d3ab2.coneOuterAngle : 0x168,
      'coneOuterGain': 'undefined' !== typeof _0x2d3ab2.coneOuterGain ? _0x2d3ab2.coneOuterGain : 0x0,
      'distanceModel': 'undefined' !== typeof _0x2d3ab2.distanceModel ? _0x2d3ab2.distanceModel : 'inverse',
      'maxDistance': 'undefined' !== typeof _0x2d3ab2.maxDistance ? _0x2d3ab2.maxDistance : 0x2710,
      'panningModel': 'undefined' !== typeof _0x2d3ab2.panningModel ? _0x2d3ab2.panningModel : 'HRTF',
      'refDistance': 'undefined' !== typeof _0x2d3ab2.refDistance ? _0x2d3ab2.refDistance : 0x1,
      'rolloffFactor': 'undefined' !== typeof _0x2d3ab2.rolloffFactor ? _0x2d3ab2.rolloffFactor : 0x1
    }, this._onstereo = _0x2d3ab2.onstereo ? [{
      'fn': _0x2d3ab2.onstereo
    }] : [], this._onpos = _0x2d3ab2.onpos ? [{
      'fn': _0x2d3ab2.onpos
    }] : [], this._onorientation = _0x2d3ab2.onorientation ? [{
      'fn': _0x2d3ab2.onorientation
    }] : [], _0xc6534a.call(this, _0x2d3ab2);
  }, Howl.prototype.stereo = function (_0x430e1c, _0xba18ba) {
    var _0x40fcd9 = this;
    if (!_0x40fcd9._webAudio) return _0x40fcd9;
    if ('loaded' !== _0x40fcd9._state) return _0x40fcd9._queue.push({
      'event': 'stereo',
      'action': function () {
        _0x40fcd9.stereo(_0x430e1c, _0xba18ba);
      }
    }), _0x40fcd9;
    var _0x484526 = 'undefined' === typeof Howler.ctx.createStereoPanner ? 'spatial' : 'stereo';
    if ('undefined' === typeof _0xba18ba) {
      if ('number' === typeof _0x430e1c) _0x40fcd9._stereo = _0x430e1c, _0x40fcd9._pos = [_0x430e1c, 0x0, 0x0];else return _0x40fcd9._stereo;
    }
    for (var _0xfe4dec = _0x40fcd9._getSoundIds(_0xba18ba), _0x58bcb5 = 0x0; _0x58bcb5 < _0xfe4dec.length; _0x58bcb5++) {
      var _0xc5515b = _0x40fcd9._soundById(_0xfe4dec[_0x58bcb5]);
      if (_0xc5515b) {
        if ('number' === typeof _0x430e1c) _0xc5515b._stereo = _0x430e1c, _0xc5515b._pos = [_0x430e1c, 0x0, 0x0], _0xc5515b._node && (_0xc5515b._pannerAttr.panningModel = 'equalpower', (!_0xc5515b._panner || !_0xc5515b._panner.pan) && _0x2aad2a(_0xc5515b, _0x484526), 'spatial' === _0x484526 ? 'undefined' !== typeof _0xc5515b._panner.positionX ? (_0xc5515b._panner.positionX.setValueAtTime(_0x430e1c, Howler.ctx.currentTime), _0xc5515b._panner.positionY.setValueAtTime(0x0, Howler.ctx.currentTime), _0xc5515b._panner.positionZ.setValueAtTime(0x0, Howler.ctx.currentTime)) : _0xc5515b._panner.setPosition(_0x430e1c, 0x0, 0x0) : _0xc5515b._panner.pan.setValueAtTime(_0x430e1c, Howler.ctx.currentTime)), _0x40fcd9._emit('stereo', _0xc5515b._id);else return _0xc5515b._stereo;
      }
    }
    return _0x40fcd9;
  }, Howl.prototype.pos = function (_0x3ae50e, _0x40c04b, _0x3033d0, _0x3f0504) {
    var _0x314de2 = this;
    if (!_0x314de2._webAudio) return _0x314de2;
    if ('loaded' !== _0x314de2._state) return _0x314de2._queue.push({
      'event': 'pos',
      'action': function () {
        _0x314de2.pos(_0x3ae50e, _0x40c04b, _0x3033d0, _0x3f0504);
      }
    }), _0x314de2;
    _0x40c04b = 'number' !== typeof _0x40c04b ? 0x0 : _0x40c04b, _0x3033d0 = 'number' !== typeof _0x3033d0 ? -0.5 : _0x3033d0;
    if ('undefined' === typeof _0x3f0504) {
      if ('number' === typeof _0x3ae50e) _0x314de2._pos = [_0x3ae50e, _0x40c04b, _0x3033d0];else return _0x314de2._pos;
    }
    for (var _0xe07faa = _0x314de2._getSoundIds(_0x3f0504), _0x41f463 = 0x0; _0x41f463 < _0xe07faa.length; _0x41f463++) {
      var _0x3dbb14 = _0x314de2._soundById(_0xe07faa[_0x41f463]);
      if (_0x3dbb14) {
        if ('number' === typeof _0x3ae50e) _0x3dbb14._pos = [_0x3ae50e, _0x40c04b, _0x3033d0], _0x3dbb14._node && ((!_0x3dbb14._panner || _0x3dbb14._panner.pan) && _0x2aad2a(_0x3dbb14, 'spatial'), 'undefined' !== typeof _0x3dbb14._panner.positionX ? (_0x3dbb14._panner.positionX.setValueAtTime(_0x3ae50e, Howler.ctx.currentTime), _0x3dbb14._panner.positionY.setValueAtTime(_0x40c04b, Howler.ctx.currentTime), _0x3dbb14._panner.positionZ.setValueAtTime(_0x3033d0, Howler.ctx.currentTime)) : _0x3dbb14._panner.setPosition(_0x3ae50e, _0x40c04b, _0x3033d0)), _0x314de2._emit('pos', _0x3dbb14._id);else return _0x3dbb14._pos;
      }
    }
    return _0x314de2;
  }, Howl.prototype.orientation = function (_0x583cdd, _0x210870, _0x3f3fdb, _0x5b9873) {
    var _0x5a3e3f = this;
    if (!_0x5a3e3f._webAudio) return _0x5a3e3f;
    if ('loaded' !== _0x5a3e3f._state) return _0x5a3e3f._queue.push({
      'event': 'orientation',
      'action': function () {
        _0x5a3e3f.orientation(_0x583cdd, _0x210870, _0x3f3fdb, _0x5b9873);
      }
    }), _0x5a3e3f;
    _0x210870 = 'number' !== typeof _0x210870 ? _0x5a3e3f._orientation[0x1] : _0x210870, _0x3f3fdb = 'number' !== typeof _0x3f3fdb ? _0x5a3e3f._orientation[0x2] : _0x3f3fdb;
    if ('undefined' === typeof _0x5b9873) {
      if ('number' === typeof _0x583cdd) _0x5a3e3f._orientation = [_0x583cdd, _0x210870, _0x3f3fdb];else return _0x5a3e3f._orientation;
    }
    for (var _0x18c326 = _0x5a3e3f._getSoundIds(_0x5b9873), _0x107881 = 0x0; _0x107881 < _0x18c326.length; _0x107881++) {
      var _0x1afad1 = _0x5a3e3f._soundById(_0x18c326[_0x107881]);
      if (_0x1afad1) {
        if ('number' === typeof _0x583cdd) _0x1afad1._orientation = [_0x583cdd, _0x210870, _0x3f3fdb], _0x1afad1._node && (_0x1afad1._panner || (_0x1afad1._pos || (_0x1afad1._pos = _0x5a3e3f._pos || [0x0, 0x0, -0.5]), _0x2aad2a(_0x1afad1, 'spatial')), 'undefined' !== typeof _0x1afad1._panner.orientationX ? (_0x1afad1._panner.orientationX.setValueAtTime(_0x583cdd, Howler.ctx.currentTime), _0x1afad1._panner.orientationY.setValueAtTime(_0x210870, Howler.ctx.currentTime), _0x1afad1._panner.orientationZ.setValueAtTime(_0x3f3fdb, Howler.ctx.currentTime)) : _0x1afad1._panner.setOrientation(_0x583cdd, _0x210870, _0x3f3fdb)), _0x5a3e3f._emit('orientation', _0x1afad1._id);else return _0x1afad1._orientation;
      }
    }
    return _0x5a3e3f;
  }, Howl.prototype.pannerAttr = function () {
    var _0x4d0549 = arguments,
      _0x3fbaea,
      _0x4ac9f5;
    if (!this._webAudio) return this;
    if (0x0 === _0x4d0549.length) return this._pannerAttr;
    if (0x1 === _0x4d0549.length) {
      if ('object' === typeof _0x4d0549[0x0]) _0x3fbaea = _0x4d0549[0x0], 'undefined' === typeof _0x4ac9f5 && (_0x3fbaea.pannerAttr || (_0x3fbaea.pannerAttr = {
        'coneInnerAngle': _0x3fbaea.coneInnerAngle,
        'coneOuterAngle': _0x3fbaea.coneOuterAngle,
        'coneOuterGain': _0x3fbaea.coneOuterGain,
        'distanceModel': _0x3fbaea.distanceModel,
        'maxDistance': _0x3fbaea.maxDistance,
        'refDistance': _0x3fbaea.refDistance,
        'rolloffFactor': _0x3fbaea.rolloffFactor,
        'panningModel': _0x3fbaea.panningModel
      }), this._pannerAttr = {
        'coneInnerAngle': 'undefined' !== typeof _0x3fbaea.pannerAttr.coneInnerAngle ? _0x3fbaea.pannerAttr.coneInnerAngle : this._coneInnerAngle,
        'coneOuterAngle': 'undefined' !== typeof _0x3fbaea.pannerAttr.coneOuterAngle ? _0x3fbaea.pannerAttr.coneOuterAngle : this._coneOuterAngle,
        'coneOuterGain': 'undefined' !== typeof _0x3fbaea.pannerAttr.coneOuterGain ? _0x3fbaea.pannerAttr.coneOuterGain : this._coneOuterGain,
        'distanceModel': 'undefined' !== typeof _0x3fbaea.pannerAttr.distanceModel ? _0x3fbaea.pannerAttr.distanceModel : this._distanceModel,
        'maxDistance': 'undefined' !== typeof _0x3fbaea.pannerAttr.maxDistance ? _0x3fbaea.pannerAttr.maxDistance : this._maxDistance,
        'refDistance': 'undefined' !== typeof _0x3fbaea.pannerAttr.refDistance ? _0x3fbaea.pannerAttr.refDistance : this._refDistance,
        'rolloffFactor': 'undefined' !== typeof _0x3fbaea.pannerAttr.rolloffFactor ? _0x3fbaea.pannerAttr.rolloffFactor : this._rolloffFactor,
        'panningModel': 'undefined' !== typeof _0x3fbaea.pannerAttr.panningModel ? _0x3fbaea.pannerAttr.panningModel : this._panningModel
      });else return (_0x4d0549 = this._soundById(parseInt(_0x4d0549[0x0], 0xa))) ? _0x4d0549._pannerAttr : this._pannerAttr;
    } else 0x2 === _0x4d0549.length && (_0x3fbaea = _0x4d0549[0x0], _0x4ac9f5 = parseInt(_0x4d0549[0x1], 0xa));
    _0x4ac9f5 = this._getSoundIds(_0x4ac9f5);
    for (var _0x10cb9d = 0x0; _0x10cb9d < _0x4ac9f5.length; _0x10cb9d++) if (_0x4d0549 = this._soundById(_0x4ac9f5[_0x10cb9d])) {
      var _0x775e56 = _0x4d0549._pannerAttr,
        _0x775e56 = {
          'coneInnerAngle': 'undefined' !== typeof _0x3fbaea.coneInnerAngle ? _0x3fbaea.coneInnerAngle : _0x775e56.coneInnerAngle,
          'coneOuterAngle': 'undefined' !== typeof _0x3fbaea.coneOuterAngle ? _0x3fbaea.coneOuterAngle : _0x775e56.coneOuterAngle,
          'coneOuterGain': 'undefined' !== typeof _0x3fbaea.coneOuterGain ? _0x3fbaea.coneOuterGain : _0x775e56.coneOuterGain,
          'distanceModel': 'undefined' !== typeof _0x3fbaea.distanceModel ? _0x3fbaea.distanceModel : _0x775e56.distanceModel,
          'maxDistance': 'undefined' !== typeof _0x3fbaea.maxDistance ? _0x3fbaea.maxDistance : _0x775e56.maxDistance,
          'refDistance': 'undefined' !== typeof _0x3fbaea.refDistance ? _0x3fbaea.refDistance : _0x775e56.refDistance,
          'rolloffFactor': 'undefined' !== typeof _0x3fbaea.rolloffFactor ? _0x3fbaea.rolloffFactor : _0x775e56.rolloffFactor,
          'panningModel': 'undefined' !== typeof _0x3fbaea.panningModel ? _0x3fbaea.panningModel : _0x775e56.panningModel
        },
        _0x4889a7 = _0x4d0549._panner;
      _0x4889a7 ? (_0x4889a7.coneInnerAngle = _0x775e56.coneInnerAngle, _0x4889a7.coneOuterAngle = _0x775e56.coneOuterAngle, _0x4889a7.coneOuterGain = _0x775e56.coneOuterGain, _0x4889a7.distanceModel = _0x775e56.distanceModel, _0x4889a7.maxDistance = _0x775e56.maxDistance, _0x4889a7.refDistance = _0x775e56.refDistance, _0x4889a7.rolloffFactor = _0x775e56.rolloffFactor, _0x4889a7.panningModel = _0x775e56.panningModel) : (_0x4d0549._pos || (_0x4d0549._pos = this._pos || [0x0, 0x0, -0.5]), _0x2aad2a(_0x4d0549, 'spatial'));
    }
    return this;
  };
  var _0x47961d = Sound.prototype.init;
  Sound.prototype.init = function () {
    var _0x71e302 = this._parent;
    this._orientation = _0x71e302._orientation, this._stereo = _0x71e302._stereo, this._pos = _0x71e302._pos, this._pannerAttr = _0x71e302._pannerAttr, _0x47961d.call(this), this._stereo ? _0x71e302.stereo(this._stereo) : this._pos && _0x71e302.pos(this._pos[0x0], this._pos[0x1], this._pos[0x2], this._id);
  };
  var _0x328ab4 = Sound.prototype.reset;
  Sound.prototype.reset = function () {
    var _0x57255f = this._parent;
    return this._orientation = _0x57255f._orientation, this._stereo = _0x57255f._stereo, this._pos = _0x57255f._pos, this._pannerAttr = _0x57255f._pannerAttr, this._stereo ? _0x57255f.stereo(this._stereo) : this._pos ? _0x57255f.pos(this._pos[0x0], this._pos[0x1], this._pos[0x2], this._id) : this._panner && (this._panner.disconnect(0x0), this._panner = void 0x0, _0x57255f._refreshBuffer(this)), _0x328ab4.call(this);
  };
  var _0x2aad2a = function (_0x421dfb, _0xf192a6) {
    'spatial' === (_0xf192a6 || 'spatial') ? (_0x421dfb._panner = Howler.ctx.createPanner(), _0x421dfb._panner.coneInnerAngle = _0x421dfb._pannerAttr.coneInnerAngle, _0x421dfb._panner.coneOuterAngle = _0x421dfb._pannerAttr.coneOuterAngle, _0x421dfb._panner.coneOuterGain = _0x421dfb._pannerAttr.coneOuterGain, _0x421dfb._panner.distanceModel = _0x421dfb._pannerAttr.distanceModel, _0x421dfb._panner.maxDistance = _0x421dfb._pannerAttr.maxDistance, _0x421dfb._panner.refDistance = _0x421dfb._pannerAttr.refDistance, _0x421dfb._panner.rolloffFactor = _0x421dfb._pannerAttr.rolloffFactor, _0x421dfb._panner.panningModel = _0x421dfb._pannerAttr.panningModel, 'undefined' !== typeof _0x421dfb._panner.positionX ? (_0x421dfb._panner.positionX.setValueAtTime(_0x421dfb._pos[0x0], Howler.ctx.currentTime), _0x421dfb._panner.positionY.setValueAtTime(_0x421dfb._pos[0x1], Howler.ctx.currentTime), _0x421dfb._panner.positionZ.setValueAtTime(_0x421dfb._pos[0x2], Howler.ctx.currentTime)) : _0x421dfb._panner.setPosition(_0x421dfb._pos[0x0], _0x421dfb._pos[0x1], _0x421dfb._pos[0x2]), 'undefined' !== typeof _0x421dfb._panner.orientationX ? (_0x421dfb._panner.orientationX.setValueAtTime(_0x421dfb._orientation[0x0], Howler.ctx.currentTime), _0x421dfb._panner.orientationY.setValueAtTime(_0x421dfb._orientation[0x1], Howler.ctx.currentTime), _0x421dfb._panner.orientationZ.setValueAtTime(_0x421dfb._orientation[0x2], Howler.ctx.currentTime)) : _0x421dfb._panner.setOrientation(_0x421dfb._orientation[0x0], _0x421dfb._orientation[0x1], _0x421dfb._orientation[0x2])) : (_0x421dfb._panner = Howler.ctx.createStereoPanner(), _0x421dfb._panner.pan.setValueAtTime(_0x421dfb._stereo, Howler.ctx.currentTime)), _0x421dfb._panner.connect(_0x421dfb._node), _0x421dfb._paused || _0x421dfb._parent.pause(_0x421dfb._id, !0x0).play(_0x421dfb._id, !0x0);
  };
}(), !function (_0x37f81c, _0x33ec37) {
  'object' == typeof exports && 'undefined' != typeof module ? _0x33ec37() : 'function' == typeof define && define.amd ? define(_0x33ec37) : _0x33ec37();
}(0x0, function () {
  function _0x278930(_0x286487) {
    var _0x598f07 = this.constructor;
    return this.then(function (_0x38237e) {
      return _0x598f07.resolve(_0x286487()).then(function () {
        return _0x38237e;
      });
    }, function (_0x277b02) {
      return _0x598f07.resolve(_0x286487()).then(function () {
        return _0x598f07.reject(_0x277b02);
      });
    });
  }
  function _0x1f2afa() {}
  function _0x19c3b1(_0x404fd2) {
    if (!(this instanceof _0x19c3b1)) throw new TypeError("Promises must be constructed via new");
    if ('function' != typeof _0x404fd2) throw new TypeError("not a function");
    this._state = 0x0, this._handled = !0x1, this._value = void 0x0, this._deferreds = [], _0x3d62ca(_0x404fd2, this);
  }
  function _0x3869f6(_0xe79d39, _0x123414) {
    for (; 0x3 === _0xe79d39._state;) _0xe79d39 = _0xe79d39._value;
    0x0 !== _0xe79d39._state ? (_0xe79d39._handled = !0x0, _0x19c3b1._immediateFn(function () {
      var _0x51beaa = 0x1 === _0xe79d39._state ? _0x123414.onFulfilled : _0x123414.onRejected;
      if (null !== _0x51beaa) {
        var _0x5824a9;
        try {
          _0x5824a9 = _0x51beaa(_0xe79d39._value);
        } catch (_0x3c23c6) {
          return void _0x3bf14d(_0x123414.promise, _0x3c23c6);
        }
        _0x261944(_0x123414.promise, _0x5824a9);
      } else (0x1 === _0xe79d39._state ? _0x261944 : _0x3bf14d)(_0x123414.promise, _0xe79d39._value);
    })) : _0xe79d39._deferreds.push(_0x123414);
  }
  function _0x261944(_0x1c020b, _0x36f782) {
    try {
      if (_0x36f782 === _0x1c020b) throw new TypeError("A promise cannot be resolved with itself.");
      if (_0x36f782 && ('object' == typeof _0x36f782 || 'function' == typeof _0x36f782)) {
        var _0x4f6ed0 = _0x36f782.then;
        if (_0x36f782 instanceof _0x19c3b1) return _0x1c020b._state = 0x3, _0x1c020b._value = _0x36f782, void _0x22b714(_0x1c020b);
        if ('function' == typeof _0x4f6ed0) return void _0x3d62ca(function () {
          _0x4f6ed0.apply(_0x36f782, arguments);
        }, _0x1c020b);
      }
      _0x1c020b._state = 0x1, _0x1c020b._value = _0x36f782, _0x22b714(_0x1c020b);
    } catch (_0x23292c) {
      _0x3bf14d(_0x1c020b, _0x23292c);
    }
  }
  function _0x3bf14d(_0x571b7d, _0xc471c0) {
    _0x571b7d._state = 0x2, _0x571b7d._value = _0xc471c0, _0x22b714(_0x571b7d);
  }
  function _0x22b714(_0x37c296) {
    0x2 === _0x37c296._state && 0x0 === _0x37c296._deferreds.length && _0x19c3b1._immediateFn(function () {
      _0x37c296._handled || _0x19c3b1._unhandledRejectionFn(_0x37c296._value);
    });
    for (var _0x3f5575 = 0x0, _0x3b272c = _0x37c296._deferreds.length; _0x3b272c > _0x3f5575; _0x3f5575++) _0x3869f6(_0x37c296, _0x37c296._deferreds[_0x3f5575]);
    _0x37c296._deferreds = null;
  }
  function _0x3d62ca(_0x5ec38b, _0x2670dd) {
    var _0x19ee33 = !0x1;
    try {
      _0x5ec38b(function (_0x4fe4fb) {
        _0x19ee33 || (_0x19ee33 = !0x0, _0x261944(_0x2670dd, _0x4fe4fb));
      }, function (_0x423198) {
        _0x19ee33 || (_0x19ee33 = !0x0, _0x3bf14d(_0x2670dd, _0x423198));
      });
    } catch (_0x39513e) {
      _0x19ee33 || (_0x19ee33 = !0x0, _0x3bf14d(_0x2670dd, _0x39513e));
    }
  }
  var _0x1e35bd = setTimeout;
  _0x19c3b1.prototype['catch'] = function (_0x5d1ebb) {
    return this.then(null, _0x5d1ebb);
  }, _0x19c3b1.prototype.then = function (_0x238aa0, _0x5ea931) {
    var _0x91d726 = new this.constructor(_0x1f2afa);
    return _0x3869f6(this, new function (_0x4cacda, _0x471a22, _0x2a9545) {
      this.onFulfilled = 'function' == typeof _0x4cacda ? _0x4cacda : null, this.onRejected = 'function' == typeof _0x471a22 ? _0x471a22 : null, this.promise = _0x2a9545;
    }(_0x238aa0, _0x5ea931, _0x91d726)), _0x91d726;
  }, _0x19c3b1.prototype['finally'] = _0x278930, _0x19c3b1.all = function (_0x24053f) {
    return new _0x19c3b1(function (_0x19b57c, _0x4e19e8) {
      function _0x4a8433(_0x40611b, _0x30f99e) {
        try {
          if (_0x30f99e && ('object' == typeof _0x30f99e || 'function' == typeof _0x30f99e)) {
            var _0x155c8e = _0x30f99e.then;
            if ('function' == typeof _0x155c8e) return void _0x155c8e.call(_0x30f99e, function (_0x258d11) {
              _0x4a8433(_0x40611b, _0x258d11);
            }, _0x4e19e8);
          }
          _0x297a82[_0x40611b] = _0x30f99e, 0x0 == --_0x25d15a && _0x19b57c(_0x297a82);
        } catch (_0xa6d824) {
          _0x4e19e8(_0xa6d824);
        }
      }
      if (!_0x24053f || 'undefined' == typeof _0x24053f.length) throw new TypeError("Promise.all accepts an array");
      var _0x297a82 = Array.prototype.slice.call(_0x24053f);
      if (0x0 === _0x297a82.length) return _0x19b57c([]);
      for (var _0x25d15a = _0x297a82.length, _0x3bd2d1 = 0x0; _0x297a82.length > _0x3bd2d1; _0x3bd2d1++) _0x4a8433(_0x3bd2d1, _0x297a82[_0x3bd2d1]);
    });
  }, _0x19c3b1.resolve = function (_0x94e00e) {
    return _0x94e00e && 'object' == typeof _0x94e00e && _0x94e00e.constructor === _0x19c3b1 ? _0x94e00e : new _0x19c3b1(function (_0x2c7f8f) {
      _0x2c7f8f(_0x94e00e);
    });
  }, _0x19c3b1.reject = function (_0x4f3515) {
    return new _0x19c3b1(function (_0x5a162f, _0x214f59) {
      _0x214f59(_0x4f3515);
    });
  }, _0x19c3b1.race = function (_0xcfb27c) {
    return new _0x19c3b1(function (_0x13ab3a, _0x247df2) {
      for (var _0x3f2022 = 0x0, _0xfc4669 = _0xcfb27c.length; _0xfc4669 > _0x3f2022; _0x3f2022++) _0xcfb27c[_0x3f2022].then(_0x13ab3a, _0x247df2);
    });
  }, _0x19c3b1._immediateFn = 'function' == typeof setImmediate && function (_0x258995) {
    setImmediate(_0x258995);
  } || function (_0x4dad12) {
    _0x1e35bd(_0x4dad12, 0x0);
  }, _0x19c3b1._unhandledRejectionFn = function (_0x4964df) {
    void 0x0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", _0x4964df);
  };
  var _0x2194f8 = function () {
    if ('undefined' != typeof self) return self;
    if ('undefined' != typeof window) return window;
    if ('undefined' != typeof global) return global;
    throw Error("unable to locate global object");
  }();
  'Promise' in _0x2194f8 ? _0x2194f8.Promise.prototype['finally'] || (_0x2194f8.Promise.prototype['finally'] = _0x278930) : _0x2194f8.Promise = _0x19c3b1;
}), function () {
  function _0x1b80ba(_0xcf0579, _0x494a82) {
    document.addEventListener ? _0xcf0579.addEventListener('scroll', _0x494a82, !0x1) : _0xcf0579.attachEvent('scroll', _0x494a82);
  }
  function _0xec068c(_0x513df9) {
    this.a = document.createElement('div'), this.a.setAttribute('aria-hidden', 'true'), this.a.appendChild(document.createTextNode(_0x513df9)), this.b = document.createElement('span'), this.c = document.createElement('span'), this.h = document.createElement('span'), this.f = document.createElement('span'), this.g = -0x1, this.b.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.c.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.f.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.h.style.cssText = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;', this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c);
  }
  function _0x5aa655(_0x43dd87, _0x56d941) {
    _0x43dd87.a.style.cssText = 'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' + _0x56d941 + ';';
  }
  function _0x5c46df(_0x2d4efd) {
    var _0xc395ac = _0x2d4efd.a.offsetWidth,
      _0x1fa5ba = _0xc395ac + 0x64;
    return _0x2d4efd.f.style.width = _0x1fa5ba + 'px', _0x2d4efd.c.scrollLeft = _0x1fa5ba, _0x2d4efd.b.scrollLeft = _0x2d4efd.b.scrollWidth + 0x64, _0x2d4efd.g !== _0xc395ac ? (_0x2d4efd.g = _0xc395ac, !0x0) : !0x1;
  }
  function _0x49a36a(_0x49f838, _0x41be7f) {
    function _0x5cd4a4() {
      var _0x5c7e0e = _0x2776a0;
      _0x5c46df(_0x5c7e0e) && _0x5c7e0e.a.parentNode && _0x41be7f(_0x5c7e0e.g);
    }
    var _0x2776a0 = _0x49f838;
    _0x1b80ba(_0x49f838.b, _0x5cd4a4), _0x1b80ba(_0x49f838.c, _0x5cd4a4), _0x5c46df(_0x49f838);
  }
  function _0x46c04e(_0x680554, _0x3f7fa7) {
    var _0x286548 = _0x3f7fa7 || {};
    this.family = _0x680554, this.style = _0x286548.style || 'normal', this.weight = _0x286548.weight || 'normal', this.stretch = _0x286548.stretch || 'normal';
  }
  function _0x33413f() {
    return null === _0x21bcc9 && (_0x21bcc9 = !!document.fonts), _0x21bcc9;
  }
  function _0x5bcd1e() {
    if (null === _0x1ab7cb) {
      var _0x4f1900 = document.createElement('div');
      try {
        _0x4f1900.style.font = "condensed 100px sans-serif";
      } catch (_0x3a546d) {}
      _0x1ab7cb = '' !== _0x4f1900.style.font;
    }
    return _0x1ab7cb;
  }
  function _0x38b3f3(_0x1bf0d6, _0x2f3966) {
    return [_0x1bf0d6.style, _0x1bf0d6.weight, _0x5bcd1e() ? _0x1bf0d6.stretch : '', '100px', _0x2f3966].join(" ");
  }
  var _0x290e7f = null,
    _0x25773b = null,
    _0x1ab7cb = null,
    _0x21bcc9 = null;
  _0x46c04e.prototype.load = function (_0x596146, _0x5d6313) {
    var _0x2ee1a9 = this,
      _0x305504 = _0x596146 || 'BESbswy',
      _0xac0fc2 = 0x0,
      _0x4dc4b2 = _0x5d6313 || 0xbb8,
      _0x4841d7 = new Date().getTime();
    return new Promise(function (_0x3e785f, _0x5dea6b) {
      var _0x443ad9;
      if (_0x443ad9 = _0x33413f()) null === _0x25773b && (_0x33413f() && /Apple/.test(window.navigator.vendor) ? (_0x443ad9 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), _0x25773b = !!_0x443ad9 && 0x25b > parseInt(_0x443ad9[0x1], 0xa)) : _0x25773b = !0x1), _0x443ad9 = !_0x25773b;
      if (_0x443ad9) {
        _0x443ad9 = new Promise(function (_0x5a7578, _0x41f470) {
          function _0x2446cf() {
            new Date().getTime() - _0x4841d7 >= _0x4dc4b2 ? _0x41f470(Error('' + _0x4dc4b2 + "ms timeout exceeded")) : document.fonts.load(_0x38b3f3(_0x2ee1a9, "\"" + _0x2ee1a9.family + "\""), _0x305504).then(function (_0x54f03c) {
              0x1 <= _0x54f03c.length ? _0x5a7578() : setTimeout(_0x2446cf, 0x19);
            }, _0x41f470);
          }
          _0x2446cf();
        });
        var _0xb10bd = new Promise(function (_0x14db8e, _0x44f38b) {
          _0xac0fc2 = setTimeout(function () {
            _0x44f38b(Error('' + _0x4dc4b2 + "ms timeout exceeded"));
          }, _0x4dc4b2);
        });
        Promise.race([_0xb10bd, _0x443ad9]).then(function () {
          clearTimeout(_0xac0fc2), _0x3e785f(_0x2ee1a9);
        }, _0x5dea6b);
      } else {
        var _0x375293 = function () {
          function _0x274e7a() {
            var _0x53ff4f;
            if (_0x53ff4f = -0x1 != _0x5a521b && -0x1 != _0x5808bb || -0x1 != _0x5a521b && -0x1 != _0x324e7d || -0x1 != _0x5808bb && -0x1 != _0x324e7d) (_0x53ff4f = _0x5a521b != _0x5808bb && _0x5a521b != _0x324e7d && _0x5808bb != _0x324e7d) || (null === _0x290e7f && (_0x53ff4f = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), _0x290e7f = !!_0x53ff4f && (0x218 > parseInt(_0x53ff4f[0x1], 0xa) || 0x218 === parseInt(_0x53ff4f[0x1], 0xa) && 0xb >= parseInt(_0x53ff4f[0x2], 0xa))), _0x53ff4f = _0x290e7f && (_0x5a521b == _0x4dc36b && _0x5808bb == _0x4dc36b && _0x324e7d == _0x4dc36b || _0x5a521b == _0x48c677 && _0x5808bb == _0x48c677 && _0x324e7d == _0x48c677 || _0x5a521b == _0xa496b5 && _0x5808bb == _0xa496b5 && _0x324e7d == _0xa496b5)), _0x53ff4f = !_0x53ff4f;
            _0x53ff4f && (_0x398ca5.parentNode && _0x398ca5.parentNode.removeChild(_0x398ca5), clearTimeout(_0xac0fc2), _0x3e785f(_0x2ee1a9));
          }
          function _0x29a3f2() {
            if (new Date().getTime() - _0x4841d7 >= _0x4dc4b2) _0x398ca5.parentNode && _0x398ca5.parentNode.removeChild(_0x398ca5), _0x5dea6b(Error('' + _0x4dc4b2 + "ms timeout exceeded"));else {
              var _0x27b9df = document.hidden;
              if (!0x0 === _0x27b9df || void 0x0 === _0x27b9df) _0x5a521b = _0x40d60e.a.offsetWidth, _0x5808bb = _0x5a2b3c.a.offsetWidth, _0x324e7d = _0x52abe6.a.offsetWidth, _0x274e7a();
              _0xac0fc2 = setTimeout(_0x29a3f2, 0x32);
            }
          }
          var _0x40d60e = new _0xec068c(_0x305504),
            _0x5a2b3c = new _0xec068c(_0x305504),
            _0x52abe6 = new _0xec068c(_0x305504),
            _0x5a521b = -0x1,
            _0x5808bb = -0x1,
            _0x324e7d = -0x1,
            _0x4dc36b = -0x1,
            _0x48c677 = -0x1,
            _0xa496b5 = -0x1,
            _0x398ca5 = document.createElement('div');
          _0x398ca5.dir = 'ltr', _0x5aa655(_0x40d60e, _0x38b3f3(_0x2ee1a9, 'sans-serif')), _0x5aa655(_0x5a2b3c, _0x38b3f3(_0x2ee1a9, 'serif')), _0x5aa655(_0x52abe6, _0x38b3f3(_0x2ee1a9, 'monospace')), _0x398ca5.appendChild(_0x40d60e.a), _0x398ca5.appendChild(_0x5a2b3c.a), _0x398ca5.appendChild(_0x52abe6.a), document.body.appendChild(_0x398ca5), _0x4dc36b = _0x40d60e.a.offsetWidth, _0x48c677 = _0x5a2b3c.a.offsetWidth, _0xa496b5 = _0x52abe6.a.offsetWidth, _0x29a3f2(), _0x49a36a(_0x40d60e, function (_0x687a57) {
            _0x5a521b = _0x687a57, _0x274e7a();
          }), _0x5aa655(_0x40d60e, _0x38b3f3(_0x2ee1a9, "\"" + _0x2ee1a9.family + "\",sans-serif")), _0x49a36a(_0x5a2b3c, function (_0x26b0d8) {
            _0x5808bb = _0x26b0d8, _0x274e7a();
          }), _0x5aa655(_0x5a2b3c, _0x38b3f3(_0x2ee1a9, "\"" + _0x2ee1a9.family + "\",serif")), _0x49a36a(_0x52abe6, function (_0x54d08b) {
            _0x324e7d = _0x54d08b, _0x274e7a();
          }), _0x5aa655(_0x52abe6, _0x38b3f3(_0x2ee1a9, "\"" + _0x2ee1a9.family + "\",monospace"));
        };
        document.body ? _0x375293() : document.addEventListener ? document.addEventListener('DOMContentLoaded', function _0x483a31() {
          document.removeEventListener('DOMContentLoaded', _0x483a31), _0x375293();
        }) : document.attachEvent('onreadystatechange', function _0x320fe8() {
          if ('interactive' == document.readyState || 'complete' == document.readyState) document.detachEvent('onreadystatechange', _0x320fe8), _0x375293();
        });
      }
    });
  }, 'object' === typeof module ? module.exports = _0x46c04e : (window.FontFaceObserver = _0x46c04e, window.FontFaceObserver.prototype.load = _0x46c04e.prototype.load);
}(), function (_0x3d08c2) {
  Number.prototype.map = function (_0x548118, _0x3f7be7, _0x99e974, _0x5c0a55) {
    return _0x99e974 + (_0x5c0a55 - _0x99e974) * ((this - _0x548118) / (_0x3f7be7 - _0x548118));
  }, Number.prototype.limit = function (_0x14ea35, _0x1993b3) {
    return Math.min(_0x1993b3, Math.max(_0x14ea35, this));
  }, Number.prototype.round = function (_0x54796f) {
    return _0x54796f = Math.pow(0xa, _0x54796f || 0x0), Math.round(this * _0x54796f) / _0x54796f;
  }, Number.prototype.floor = function () {
    return Math.floor(this);
  }, Number.prototype.ceil = function () {
    return Math.ceil(this);
  }, Number.prototype.toInt = function () {
    return this | 0x0;
  }, Number.prototype.toRad = function () {
    return this / 0xb4 * Math.PI;
  }, Number.prototype.toDeg = function () {
    return 0xb4 * this / Math.PI;
  }, Object.defineProperty(Array.prototype, 'erase', {
    'value': function (_0x1f0d6f) {
      for (var _0x5e561f = this.length; _0x5e561f--;) this[_0x5e561f] === _0x1f0d6f && this.splice(_0x5e561f, 0x1);
      return this;
    }
  }), Object.defineProperty(Array.prototype, 'random', {
    'value': function () {
      return this[Math.floor(Math.random() * this.length)];
    }
  }), Function.prototype.bind = Function.prototype.bind || function (_0x31bbeb) {
    if ('function' !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var _0x25afb1 = Array.prototype.slice.call(arguments, 0x1),
      _0x51ac16 = this,
      _0x42de32 = function () {},
      _0x1bd382 = function () {
        return _0x51ac16.apply(this instanceof _0x42de32 && _0x31bbeb ? this : _0x31bbeb, _0x25afb1.concat(Array.prototype.slice.call(arguments)));
      };
    return _0x42de32.prototype = this.prototype, _0x1bd382.prototype = new _0x42de32(), _0x1bd382;
  }, _0x3d08c2.ig = {
    'game': null,
    'debug': null,
    'version': '1.24',
    'global': _0x3d08c2,
    'modules': {},
    'resources': [],
    'ready': !0x1,
    'baked': !0x1,
    'nocache': '',
    'ua': {},
    'prefix': _0x3d08c2.ImpactPrefix || '',
    'lib': 'lib/',
    '_current': null,
    '_loadQueue': [],
    '_waitForOnload': 0x0,
    '$': function (_0x5b8e74) {
      return '#' == _0x5b8e74.charAt(0x0) ? document.getElementById(_0x5b8e74.substr(0x1)) : document.getElementsByTagName(_0x5b8e74);
    },
    '$new': function (_0x42f2b0) {
      return document.createElement(_0x42f2b0);
    },
    'copy': function (_0x386ea5) {
      if (!_0x386ea5 || 'object' != typeof _0x386ea5 || _0x386ea5 instanceof HTMLElement || _0x386ea5 instanceof ig.Class) return _0x386ea5;
      if (_0x386ea5 instanceof Array) {
        for (var _0x279309 = [], _0x3f4a60 = 0x0, _0x4c3603 = _0x386ea5.length; _0x3f4a60 < _0x4c3603; _0x3f4a60++) _0x279309[_0x3f4a60] = ig.copy(_0x386ea5[_0x3f4a60]);
      } else {
        for (_0x3f4a60 in _0x279309 = {}, _0x386ea5) _0x279309[_0x3f4a60] = ig.copy(_0x386ea5[_0x3f4a60]);
      }
      return _0x279309;
    },
    'merge': function (_0x400733, _0x311e18) {
      for (var _0x1e6bab in _0x311e18) {
        var _0x1fb362 = _0x311e18[_0x1e6bab];
        if ('object' != typeof _0x1fb362 || _0x1fb362 instanceof HTMLElement || _0x1fb362 instanceof ig.Class || null === _0x1fb362) _0x400733[_0x1e6bab] = _0x1fb362;else {
          if (!_0x400733[_0x1e6bab] || 'object' != typeof _0x400733[_0x1e6bab]) _0x400733[_0x1e6bab] = _0x1fb362 instanceof Array ? [] : {};
          ig.merge(_0x400733[_0x1e6bab], _0x1fb362);
        }
      }
      return _0x400733;
    },
    'ksort': function (_0x981173) {
      if (!_0x981173 || 'object' != typeof _0x981173) return [];
      var _0x4bd92b = [],
        _0x197c70 = [],
        _0x4a0da4;
      for (_0x4a0da4 in _0x981173) _0x4bd92b.push(_0x4a0da4);
      _0x4bd92b.sort();
      for (_0x4a0da4 = 0x0; _0x4a0da4 < _0x4bd92b.length; _0x4a0da4++) _0x197c70.push(_0x981173[_0x4bd92b[_0x4a0da4]]);
      return _0x197c70;
    },
    'setVendorAttribute': function (_0xf67a11, _0x33171, _0x32974f) {
      var _0x3043dd = _0x33171.charAt(0x0).toUpperCase() + _0x33171.substr(0x1);
      _0xf67a11[_0x33171] = _0xf67a11['ms' + _0x3043dd] = _0xf67a11['moz' + _0x3043dd] = _0xf67a11['webkit' + _0x3043dd] = _0xf67a11['o' + _0x3043dd] = _0x32974f;
    },
    'getVendorAttribute': function (_0x31915c, _0x5baba0) {
      var _0x3fc4cd = _0x5baba0.charAt(0x0).toUpperCase() + _0x5baba0.substr(0x1);
      return _0x31915c[_0x5baba0] || _0x31915c['ms' + _0x3fc4cd] || _0x31915c['moz' + _0x3fc4cd] || _0x31915c['webkit' + _0x3fc4cd] || _0x31915c['o' + _0x3fc4cd];
    },
    'normalizeVendorAttribute': function (_0x5ed264, _0x2a5fcf) {
      var _0x18afe9 = ig.getVendorAttribute(_0x5ed264, _0x2a5fcf);
      !_0x5ed264[_0x2a5fcf] && _0x18afe9 && (_0x5ed264[_0x2a5fcf] = _0x18afe9);
    },
    'getImagePixels': function (_0x159c27, _0x14ea10, _0x32b447, _0x4537ec, _0x27222d) {
      var _0x36456f = ig.$new('canvas');
      _0x36456f.width = _0x159c27.width, _0x36456f.height = _0x159c27.height;
      var _0x38d031 = _0x36456f.getContext('2d');
      ig.System.SCALE.CRISP(_0x36456f, _0x38d031);
      var _0x4c9963 = ig.getVendorAttribute(_0x38d031, 'backingStorePixelRatio') || 0x1;
      ig.normalizeVendorAttribute(_0x38d031, 'getImageDataHD');
      var _0x612772 = _0x159c27.width / _0x4c9963,
        _0x423583 = _0x159c27.height / _0x4c9963;
      return _0x36456f.width = Math.ceil(_0x612772), _0x36456f.height = Math.ceil(_0x423583), _0x38d031.drawImage(_0x159c27, 0x0, 0x0, _0x612772, _0x423583), 0x1 === _0x4c9963 ? _0x38d031.getImageData(_0x14ea10, _0x32b447, _0x4537ec, _0x27222d) : _0x38d031.getImageDataHD(_0x14ea10, _0x32b447, _0x4537ec, _0x27222d);
    },
    'module': function (_0x496f14) {
      if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
      if (ig.modules[_0x496f14] && ig.modules[_0x496f14].body) throw "Module '" + _0x496f14 + "' is already defined";
      return ig._current = {
        'name': _0x496f14,
        'requires': [],
        'loaded': !0x1,
        'body': null
      }, ig.modules[_0x496f14] = ig._current, ig._loadQueue.push(ig._current), ig;
    },
    'requires': function () {
      return ig._current.requires = Array.prototype.slice.call(arguments), ig;
    },
    'defines': function (_0x2fc2f0) {
      ig._current.body = _0x2fc2f0, ig._current = null, ig._initDOMReady();
    },
    'addResource': function (_0x57291b) {
      ig.resources.push(_0x57291b);
    },
    'setNocache': function (_0x8a1b29) {
      ig.nocache = _0x8a1b29 ? '?' + Date.now() : '';
    },
    'log': function () {},
    'assert': function () {},
    'show': function () {},
    'mark': function () {},
    '_loadScript': function (_0x9d328b, _0x5a937b) {
      ig.modules[_0x9d328b] = {
        'name': _0x9d328b,
        'requires': [],
        'loaded': !0x1,
        'body': null
      }, ig._waitForOnload++;
      var _0x23f914 = ig.prefix + ig.lib + _0x9d328b.replace(/\./g, '/') + '.js' + ig.nocache,
        _0x379e31 = ig.$new('script');
      _0x379e31.type = 'text/javascript', _0x379e31.src = _0x23f914, _0x379e31.onload = function () {
        ig._waitForOnload--, ig._execModules();
      }, _0x379e31.onerror = function () {
        throw "Failed to load module " + _0x9d328b + " at " + _0x23f914 + " required from " + _0x5a937b;
      }, ig.$('head')[0x0].appendChild(_0x379e31);
    },
    '_execModules': function () {
      for (var _0x1ea739 = !0x1, _0x18f8c6 = 0x0; _0x18f8c6 < ig._loadQueue.length; _0x18f8c6++) {
        for (var _0x3743fc = ig._loadQueue[_0x18f8c6], _0x44575b = !0x0, _0x40eb92 = 0x0; _0x40eb92 < _0x3743fc.requires.length; _0x40eb92++) {
          var _0x2adb3f = _0x3743fc.requires[_0x40eb92];
          ig.modules[_0x2adb3f] ? ig.modules[_0x2adb3f].loaded || (_0x44575b = !0x1) : (_0x44575b = !0x1, ig._loadScript(_0x2adb3f, _0x3743fc.name));
        }
        _0x44575b && _0x3743fc.body && (ig._loadQueue.splice(_0x18f8c6, 0x1), _0x3743fc.loaded = !0x0, _0x3743fc.body(), _0x1ea739 = !0x0, _0x18f8c6--);
      }
      if (_0x1ea739) ig._execModules();else {
        if (!ig.baked && 0x0 == ig._waitForOnload && 0x0 != ig._loadQueue.length) {
          _0x1ea739 = [];
          for (_0x18f8c6 = 0x0; _0x18f8c6 < ig._loadQueue.length; _0x18f8c6++) {
            _0x44575b = [], _0x2adb3f = ig._loadQueue[_0x18f8c6].requires;
            for (_0x40eb92 = 0x0; _0x40eb92 < _0x2adb3f.length; _0x40eb92++) _0x3743fc = ig.modules[_0x2adb3f[_0x40eb92]], (!_0x3743fc || !_0x3743fc.loaded) && _0x44575b.push(_0x2adb3f[_0x40eb92]);
            _0x1ea739.push(ig._loadQueue[_0x18f8c6].name + " (requires: " + _0x44575b.join(", ") + ')');
          }
          throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + _0x1ea739.join("\n");
        }
      }
    },
    '_DOMReady': function () {
      if (!ig.modules['dom.ready'].loaded) {
        if (!document.body) return setTimeout(ig._DOMReady, 0xd);
        ig.modules['dom.ready'].loaded = !0x0, ig._waitForOnload--, ig._execModules();
      }
      return 0x0;
    },
    '_boot': function () {
      document.location.href.match(/\?nocache/) && ig.setNocache(!0x0), ig.ua.pixelRatio = _0x3d08c2.devicePixelRatio || 0x1, ig.ua.viewport = {
        'width': _0x3d08c2.innerWidth,
        'height': _0x3d08c2.innerHeight
      }, ig.ua.screen = {
        'width': _0x3d08c2.screen.availWidth * ig.ua.pixelRatio,
        'height': _0x3d08c2.screen.availHeight * ig.ua.pixelRatio
      }, ig.ua.iPhone = /iPhone|iPod/i.test(navigator.userAgent), ig.ua.iPhone4 = ig.ua.iPhone && 0x2 == ig.ua.pixelRatio, ig.ua.iPad = /iPad/i.test(navigator.userAgent), ig.ua.android = /android/i.test(navigator.userAgent), ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent), ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad, ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.winPhone || /mobile/i.test(navigator.userAgent), ig.ua.touchDevice = 'ontouchstart' in _0x3d08c2 || _0x3d08c2.navigator.msMaxTouchPoints;
    },
    '_initDOMReady': function () {
      ig.modules['dom.ready'] ? ig._execModules() : (ig._boot(), ig.modules['dom.ready'] = {
        'requires': [],
        'loaded': !0x1,
        'body': null
      }, ig._waitForOnload++, 'complete' === document.readyState ? ig._DOMReady() : (document.addEventListener('DOMContentLoaded', ig._DOMReady, !0x1), _0x3d08c2.addEventListener('load', ig._DOMReady, !0x1)));
    }
  }, ig.normalizeVendorAttribute(_0x3d08c2, 'requestAnimationFrame');
  if (_0x3d08c2.requestAnimationFrame) {
    var _0x5cd710 = 0x1,
      _0x4916ad = {};
    _0x3d08c2.ig.setAnimation = function (_0x1eb94b) {
      var _0x2fae98 = _0x5cd710++;
      _0x4916ad[_0x2fae98] = !0x0;
      var _0x5035d5 = function () {
        _0x4916ad[_0x2fae98] && (_0x3d08c2.requestAnimationFrame(_0x5035d5), _0x1eb94b());
      };
      return _0x3d08c2.requestAnimationFrame(_0x5035d5), _0x2fae98;
    }, _0x3d08c2.ig.clearAnimation = function (_0x4b8b42) {
      delete _0x4916ad[_0x4b8b42];
    };
  } else _0x3d08c2.ig.setAnimation = function (_0x991e7d) {
    return _0x3d08c2.setInterval(_0x991e7d, 0x3e8 / 0x3c);
  }, _0x3d08c2.ig.clearAnimation = function (_0x457929) {
    _0x3d08c2.clearInterval(_0x457929);
  };
  var _0x473f10 = !0x1,
    _0x54935f = /xyz/.test(function () {
      xyz;
    }) ? /\bparent\b/ : /.*/,
    _0x5e75c8 = 0x0;
  _0x3d08c2.ig.Class = function () {};
  var _0x5c1dee = function (_0x74d9af) {
    var _0x5d212e = this.prototype,
      _0x9349be = {},
      _0x2500be;
    for (_0x2500be in _0x74d9af) 'function' == typeof _0x74d9af[_0x2500be] && 'function' == typeof _0x5d212e[_0x2500be] && _0x54935f.test(_0x74d9af[_0x2500be]) ? (_0x9349be[_0x2500be] = _0x5d212e[_0x2500be], _0x5d212e[_0x2500be] = function (_0x4a5385, _0x7aa88a) {
      return function () {
        var _0x5a70d6 = this.parent;
        this.parent = _0x9349be[_0x4a5385];
        var _0x45fe90 = _0x7aa88a.apply(this, arguments);
        return this.parent = _0x5a70d6, _0x45fe90;
      };
    }(_0x2500be, _0x74d9af[_0x2500be])) : _0x5d212e[_0x2500be] = _0x74d9af[_0x2500be];
  };
  _0x3d08c2.ig.Class.extend = function (_0x5acf0e) {
    function _0x5d79e3() {
      if (!_0x473f10) {
        if (this.staticInstantiate) {
          var _0x1979de = this.staticInstantiate.apply(this, arguments);
          if (_0x1979de) return _0x1979de;
        }
        for (var _0x4184df in this) 'object' == typeof this[_0x4184df] && (this[_0x4184df] = ig.copy(this[_0x4184df]));
        this.init && this.init.apply(this, arguments);
      }
      return this;
    }
    var _0x3599e6 = this.prototype;
    _0x473f10 = !0x0;
    var _0x17620e = new this();
    _0x473f10 = !0x1;
    for (var _0x17494a in _0x5acf0e) _0x17620e[_0x17494a] = 'function' == typeof _0x5acf0e[_0x17494a] && 'function' == typeof _0x3599e6[_0x17494a] && _0x54935f.test(_0x5acf0e[_0x17494a]) ? function (_0x5e8265, _0x34ef8a) {
      return function () {
        var _0x4b102f = this.parent;
        this.parent = _0x3599e6[_0x5e8265];
        var _0x130401 = _0x34ef8a.apply(this, arguments);
        return this.parent = _0x4b102f, _0x130401;
      };
    }(_0x17494a, _0x5acf0e[_0x17494a]) : _0x5acf0e[_0x17494a];
    return _0x5d79e3.prototype = _0x17620e, _0x5d79e3.prototype.constructor = _0x5d79e3, _0x5d79e3.extend = _0x3d08c2.ig.Class.extend, _0x5d79e3.inject = _0x5c1dee, _0x5d79e3.classId = _0x17620e.classId = ++_0x5e75c8, _0x5d79e3;
  }, _0x3d08c2.ImpactMixin && ig.merge(ig, _0x3d08c2.ImpactMixin);
}(window), ig.baked = !0x0, ig.module('impact.image').defines(function () {
  ig.Image = ig.Class.extend({
    'data': null,
    'width': 0x0,
    'height': 0x0,
    'loaded': !0x1,
    'failed': !0x1,
    'loadCallback': null,
    'path': '',
    'staticInstantiate': function (_0x2b6264) {
      return ig.Image.cache[_0x2b6264] || null;
    },
    'init': function (_0x52a962) {
      this.path = _0x52a962, this.load();
    },
    'load': function (_0x1907b5) {
      this.loaded ? _0x1907b5 && _0x1907b5(this.path, !0x0) : (!this.loaded && ig.ready ? (this.loadCallback = _0x1907b5 || null, this.data = new Image(), this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this);
    },
    'reload': function () {
      this.loaded = !0x1, this.data = new Image(), this.data.onload = this.onload.bind(this), this.data.src = this.path + '?' + Date.now();
    },
    'onload': function () {
      this.width = this.data.width, this.height = this.data.height, this.loaded = !0x0, 0x1 != ig.system.scale && this.resize(ig.system.scale), this.loadCallback && this.loadCallback(this.path, !0x0);
    },
    'onerror': function () {
      this.failed = !0x0, this.loadCallback && this.loadCallback(this.path, !0x1);
    },
    'resize': function (_0x1e6c47) {
      var _0x478bc1 = ig.getImagePixels(this.data, 0x0, 0x0, this.width, this.height),
        _0x5a705d = this.width * _0x1e6c47,
        _0x2ebf69 = this.height * _0x1e6c47,
        _0x998e36 = ig.$new('canvas');
      _0x998e36.width = _0x5a705d, _0x998e36.height = _0x2ebf69;
      for (var _0x373a42 = _0x998e36.getContext('2d'), _0x40b500 = _0x373a42.getImageData(0x0, 0x0, _0x5a705d, _0x2ebf69), _0x54faba = 0x0; _0x54faba < _0x2ebf69; _0x54faba++) for (var _0x92a4de = 0x0; _0x92a4de < _0x5a705d; _0x92a4de++) {
        var _0x3f359b = 0x4 * (Math.floor(_0x54faba / _0x1e6c47) * this.width + Math.floor(_0x92a4de / _0x1e6c47)),
          _0x3a1b74 = 0x4 * (_0x54faba * _0x5a705d + _0x92a4de);
        _0x40b500.data[_0x3a1b74] = _0x478bc1.data[_0x3f359b], _0x40b500.data[_0x3a1b74 + 0x1] = _0x478bc1.data[_0x3f359b + 0x1], _0x40b500.data[_0x3a1b74 + 0x2] = _0x478bc1.data[_0x3f359b + 0x2], _0x40b500.data[_0x3a1b74 + 0x3] = _0x478bc1.data[_0x3f359b + 0x3];
      }
      _0x373a42.putImageData(_0x40b500, 0x0, 0x0), this.data = _0x998e36;
    },
    'draw': function (_0x3182f5, _0x1e7dd2, _0x3eaf92, _0x38fe79, _0x2c9cd4, _0x55e97b) {
      if (this.loaded) {
        var _0x2be0cb = ig.system.scale;
        _0x2c9cd4 = (_0x2c9cd4 ? _0x2c9cd4 : this.width) * _0x2be0cb, _0x55e97b = (_0x55e97b ? _0x55e97b : this.height) * _0x2be0cb, ig.system.context.drawImage(this.data, _0x3eaf92 ? _0x3eaf92 * _0x2be0cb : 0x0, _0x38fe79 ? _0x38fe79 * _0x2be0cb : 0x0, _0x2c9cd4, _0x55e97b, ig.system.getDrawPos(_0x3182f5), ig.system.getDrawPos(_0x1e7dd2), _0x2c9cd4, _0x55e97b), ig.Image.drawCount++;
      }
    },
    'drawTile': function (_0x3a7fe5, _0x47622e, _0x376ffc, _0x3ebc19, _0x4669ef, _0x523b9a, _0x5bc77b) {
      _0x4669ef = _0x4669ef ? _0x4669ef : _0x3ebc19;
      if (this.loaded && !(_0x3ebc19 > this.width || _0x4669ef > this.height)) {
        var _0x5dcf65 = ig.system.scale,
          _0x552f60 = Math.floor(_0x3ebc19 * _0x5dcf65),
          _0x42c50c = Math.floor(_0x4669ef * _0x5dcf65),
          _0x130d65 = _0x523b9a ? -0x1 : 0x1,
          _0x56c713 = _0x5bc77b ? -0x1 : 0x1;
        if (_0x523b9a || _0x5bc77b) ig.system.context.save(), ig.system.context.scale(_0x130d65, _0x56c713);
        ig.system.context.drawImage(this.data, Math.floor(_0x376ffc * _0x3ebc19) % this.width * _0x5dcf65, Math.floor(_0x376ffc * _0x3ebc19 / this.width) * _0x4669ef * _0x5dcf65, _0x552f60, _0x42c50c, ig.system.getDrawPos(_0x3a7fe5) * _0x130d65 - (_0x523b9a ? _0x552f60 : 0x0), ig.system.getDrawPos(_0x47622e) * _0x56c713 - (_0x5bc77b ? _0x42c50c : 0x0), _0x552f60, _0x42c50c), (_0x523b9a || _0x5bc77b) && ig.system.context.restore(), ig.Image.drawCount++;
      }
    }
  }), ig.Image.drawCount = 0x0, ig.Image.cache = {}, ig.Image.reloadCache = function () {
    for (var _0x1d7a15 in ig.Image.cache) ig.Image.cache[_0x1d7a15].reload();
  };
}), ig.baked = !0x0, ig.module('impact.font').requires('impact.image').defines(function () {
  ig.Font = ig.Image.extend({
    'widthMap': [],
    'indices': [],
    'firstChar': 0x20,
    'alpha': 0x1,
    'letterSpacing': 0x1,
    'lineSpacing': 0x0,
    'onload': function (_0x3f9904) {
      this._loadMetrics(this.data), this.parent(_0x3f9904), this.height -= 0x2;
    },
    'widthForString': function (_0x1ac8fe) {
      if (-0x1 !== _0x1ac8fe.indexOf("\n")) {
        _0x1ac8fe = _0x1ac8fe.split("\n");
        for (var _0x16c790 = 0x0, _0x392452 = 0x0; _0x392452 < _0x1ac8fe.length; _0x392452++) _0x16c790 = Math.max(_0x16c790, this._widthForLine(_0x1ac8fe[_0x392452]));
        return _0x16c790;
      }
      return this._widthForLine(_0x1ac8fe);
    },
    '_widthForLine': function (_0x11ed4b) {
      for (var _0x418f3b = 0x0, _0x52fa34 = 0x0; _0x52fa34 < _0x11ed4b.length; _0x52fa34++) _0x418f3b += this.widthMap[_0x11ed4b.charCodeAt(_0x52fa34) - this.firstChar];
      return 0x0 < _0x11ed4b.length && (_0x418f3b += this.letterSpacing * (_0x11ed4b.length - 0x1)), _0x418f3b;
    },
    'heightForString': function (_0x13f278) {
      return _0x13f278.split("\n").length * (this.height + this.lineSpacing);
    },
    'draw': function (_0x2d52a6, _0x1498a7, _0x1a975b, _0x4671d2) {
      'string' != typeof _0x2d52a6 && (_0x2d52a6 = _0x2d52a6.toString());
      if (-0x1 !== _0x2d52a6.indexOf("\n")) {
        _0x2d52a6 = _0x2d52a6.split("\n");
        for (var _0x122d04 = this.height + this.lineSpacing, _0x17c86f = 0x0; _0x17c86f < _0x2d52a6.length; _0x17c86f++) this.draw(_0x2d52a6[_0x17c86f], _0x1498a7, _0x1a975b + _0x17c86f * _0x122d04, _0x4671d2);
      } else {
        if (_0x4671d2 == ig.Font.ALIGN.RIGHT || _0x4671d2 == ig.Font.ALIGN.CENTER) _0x17c86f = this._widthForLine(_0x2d52a6), _0x1498a7 -= _0x4671d2 == ig.Font.ALIGN.CENTER ? _0x17c86f / 0x2 : _0x17c86f;
        0x1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
        for (_0x17c86f = 0x0; _0x17c86f < _0x2d52a6.length; _0x17c86f++) _0x4671d2 = _0x2d52a6.charCodeAt(_0x17c86f), _0x1498a7 += this._drawChar(_0x4671d2 - this.firstChar, _0x1498a7, _0x1a975b);
        0x1 !== this.alpha && (ig.system.context.globalAlpha = 0x1), ig.Image.drawCount += _0x2d52a6.length;
      }
    },
    '_drawChar': function (_0x41e897, _0x5af2d4, _0x3cd8d6) {
      if (!this.loaded || 0x0 > _0x41e897 || _0x41e897 >= this.indices.length) return 0x0;
      var _0x91b1ab = ig.system.scale,
        _0x3c0ecd = this.widthMap[_0x41e897] * _0x91b1ab,
        _0x46757f = this.height * _0x91b1ab;
      return ig.system.context.drawImage(this.data, this.indices[_0x41e897] * _0x91b1ab, 0x0, _0x3c0ecd, _0x46757f, ig.system.getDrawPos(_0x5af2d4), ig.system.getDrawPos(_0x3cd8d6), _0x3c0ecd, _0x46757f), this.widthMap[_0x41e897] + this.letterSpacing;
    },
    '_loadMetrics': function (_0x305345) {
      this.widthMap = [], this.indices = [];
      for (var _0x488f9c = ig.getImagePixels(_0x305345, 0x0, _0x305345.height - 0x1, _0x305345.width, 0x1), _0x2c2bd2 = 0x0, _0x5a3554 = 0x0; _0x5a3554 < _0x305345.width; _0x5a3554++) {
        var _0x43af03 = 0x4 * _0x5a3554 + 0x3;
        0x7f < _0x488f9c.data[_0x43af03] ? _0x2c2bd2++ : 0x80 > _0x488f9c.data[_0x43af03] && _0x2c2bd2 && (this.widthMap.push(_0x2c2bd2), this.indices.push(_0x5a3554 - _0x2c2bd2), _0x2c2bd2 = 0x0);
      }
      this.widthMap.push(_0x2c2bd2), this.indices.push(_0x5a3554 - _0x2c2bd2);
    }
  }), ig.Font.ALIGN = {
    'LEFT': 0x0,
    'RIGHT': 0x1,
    'CENTER': 0x2
  };
}), ig.baked = !0x0, ig.module('impact.sound').defines(function () {
  ig.SoundManager = ig.Class.extend({
    'clips': {},
    'volume': 0x1,
    'format': null,
    'init': function () {
      if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !0x1;else {
        for (var _0x4c9e92 = new Audio(), _0x4b6fde = 0x0; _0x4b6fde < ig.Sound.use.length; _0x4b6fde++) {
          var _0xd1727f = ig.Sound.use[_0x4b6fde];
          if (_0x4c9e92.canPlayType(_0xd1727f.mime)) {
            this.format = _0xd1727f;
            break;
          }
        }
        this.format || (ig.Sound.enabled = !0x1), ig.Sound.enabled && ig.Sound.useWebAudio && (this.audioContext = new AudioContext(), this.boundWebAudioUnlock = this.unlockWebAudio.bind(this), ig.system.canvas.addEventListener('touchstart', this.boundWebAudioUnlock, !0x1), ig.system.canvas.addEventListener('mousedown', this.boundWebAudioUnlock, !0x1));
      }
    },
    'unlockWebAudio': function () {
      ig.system.canvas.removeEventListener('touchstart', this.boundWebAudioUnlock, !0x1), ig.system.canvas.removeEventListener('mousedown', this.boundWebAudioUnlock, !0x1);
      var _0x4dd134 = this.audioContext.createBuffer(0x1, 0x1, 0x5622),
        _0xc382d4 = this.audioContext.createBufferSource();
      _0xc382d4.buffer = _0x4dd134, _0xc382d4.connect(this.audioContext.destination), _0xc382d4.start(0x0);
    },
    'load': function (_0x5204e6, _0xcd1993, _0x20f9a6) {
      return _0xcd1993 && ig.Sound.useWebAudio ? this.loadWebAudio(_0x5204e6, _0xcd1993, _0x20f9a6) : this.loadHTML5Audio(_0x5204e6, _0xcd1993, _0x20f9a6);
    },
    'loadWebAudio': function (_0x1fa517, _0x2cd7eb, _0x3d6ae1) {
      _0x2cd7eb = ig.prefix + _0x1fa517.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
      if (this.clips[_0x1fa517]) return this.clips[_0x1fa517];
      var _0xe62864 = new ig.Sound.WebAudioSource();
      this.clips[_0x1fa517] = _0xe62864;
      var _0x3c95ab = new XMLHttpRequest();
      _0x3c95ab.open('GET', _0x2cd7eb, !0x0), _0x3c95ab.responseType = 'arraybuffer';
      var _0x2ed60d = this;
      return _0x3c95ab.onload = function (_0x37eddb) {
        _0x2ed60d.audioContext.decodeAudioData(_0x3c95ab.response, function (_0xdc2f82) {
          _0xe62864.buffer = _0xdc2f82, _0x3d6ae1 && _0x3d6ae1(_0x1fa517, !0x0, _0x37eddb);
        }, function (_0x159820) {
          _0x3d6ae1 && _0x3d6ae1(_0x1fa517, !0x1, _0x159820);
        });
      }, _0x3c95ab.onerror = function (_0x4a20b4) {
        _0x3d6ae1 && _0x3d6ae1(_0x1fa517, !0x1, _0x4a20b4);
      }, _0x3c95ab.send(), _0xe62864;
    },
    'loadHTML5Audio': function (_0x4c146b, _0x41604f, _0x10035f) {
      var _0x381086 = ig.prefix + _0x4c146b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
      if (this.clips[_0x4c146b]) {
        if (this.clips[_0x4c146b] instanceof ig.Sound.WebAudioSource) return this.clips[_0x4c146b];
        if (_0x41604f && this.clips[_0x4c146b].length < ig.Sound.channels) for (_0x41604f = this.clips[_0x4c146b].length; _0x41604f < ig.Sound.channels; _0x41604f++) {
          var _0x5d9575 = new Audio(_0x381086);
          _0x5d9575.load(), this.clips[_0x4c146b].push(_0x5d9575);
        }
        return this.clips[_0x4c146b][0x0];
      }
      var _0x239c2c = new Audio(_0x381086);
      _0x10035f && (ig.ua.mobile ? setTimeout(function () {
        _0x10035f(_0x4c146b, !0x0, null);
      }, 0x0) : (_0x239c2c.addEventListener('canplaythrough', function _0x1266c9(_0x4d4e2f) {
        _0x239c2c.removeEventListener('canplaythrough', _0x1266c9, !0x1), _0x10035f(_0x4c146b, !0x0, _0x4d4e2f);
      }, !0x1), _0x239c2c.addEventListener('error', function (_0x53289a) {
        _0x10035f(_0x4c146b, !0x1, _0x53289a);
      }, !0x1))), _0x239c2c.preload = 'auto', _0x239c2c.load(), this.clips[_0x4c146b] = [_0x239c2c];
      if (_0x41604f) {
        for (_0x41604f = 0x1; _0x41604f < ig.Sound.channels; _0x41604f++) _0x5d9575 = new Audio(_0x381086), _0x5d9575.load(), this.clips[_0x4c146b].push(_0x5d9575);
      }
      return _0x239c2c;
    },
    'get': function (_0x538f78) {
      if ((_0x538f78 = this.clips[_0x538f78]) && _0x538f78 instanceof ig.Sound.WebAudioSource) return _0x538f78;
      for (var _0x3cc7f5 = 0x0, _0x5a1337; _0x5a1337 = _0x538f78[_0x3cc7f5++];) if (_0x5a1337.paused || _0x5a1337.ended) return _0x5a1337.ended && (_0x5a1337.currentTime = 0x0), _0x5a1337;
      return _0x538f78[0x0].pause(), _0x538f78[0x0].currentTime = 0x0, _0x538f78[0x0];
    }
  }), ig.Music = ig.Class.extend({
    'tracks': [],
    'namedTracks': {},
    'currentTrack': null,
    'currentIndex': 0x0,
    'random': !0x1,
    '_volume': 0x1,
    '_loop': !0x1,
    '_fadeInterval': 0x0,
    '_fadeTimer': null,
    '_endedCallbackBound': null,
    'init': function () {
      this._endedCallbackBound = this._endedCallback.bind(this), Object.defineProperty(this, 'volume', {
        'get': this.getVolume.bind(this),
        'set': this.setVolume.bind(this)
      }), Object.defineProperty(this, 'loop', {
        'get': this.getLooping.bind(this),
        'set': this.setLooping.bind(this)
      });
    },
    'add': function (_0x2fcf90, _0x73a04a) {
      if (ig.Sound.enabled) {
        var _0x38b775 = _0x2fcf90 instanceof ig.Sound ? _0x2fcf90.path : _0x2fcf90,
          _0x1bfed4 = ig.soundManager.load(_0x38b775, !0x1);
        if (_0x1bfed4 instanceof ig.Sound.WebAudioSource) throw ig.system.stopRunLoop(), "Sound '" + _0x38b775 + "' loaded as Multichannel but used for Music. Set the multiChannel param to false when loading, e.g.: new ig.Sound(path, false)";
        _0x1bfed4.loop = this._loop, _0x1bfed4.volume = this._volume, _0x1bfed4.addEventListener('ended', this._endedCallbackBound, !0x1), this.tracks.push(_0x1bfed4), _0x73a04a && (this.namedTracks[_0x73a04a] = _0x1bfed4), this.currentTrack || (this.currentTrack = _0x1bfed4);
      }
    },
    'next': function () {
      this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 0x1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play());
    },
    'pause': function () {
      this.currentTrack && this.currentTrack.pause();
    },
    'stop': function () {
      this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0x0);
    },
    'play': function (_0x327e45) {
      if (_0x327e45 && this.namedTracks[_0x327e45]) _0x327e45 = this.namedTracks[_0x327e45], _0x327e45 != this.currentTrack && (this.stop(), this.currentTrack = _0x327e45);else {
        if (!this.currentTrack) return;
      }
      this.currentTrack.play();
    },
    'getLooping': function () {
      return this._loop;
    },
    'setLooping': function (_0x9127f) {
      this._loop = _0x9127f;
      for (var _0x38b15c in this.tracks) this.tracks[_0x38b15c].loop = _0x9127f;
    },
    'getVolume': function () {
      return this._volume;
    },
    'setVolume': function (_0x10573d) {
      this._volume = _0x10573d.limit(0x0, 0x1);
      for (var _0x54c7c9 in this.tracks) this.tracks[_0x54c7c9].volume = this._volume;
    },
    'fadeOut': function (_0x13bea8) {
      this.currentTrack && (clearInterval(this._fadeInterval), this._fadeTimer = new ig.Timer(_0x13bea8), this._fadeInterval = setInterval(this._fadeStep.bind(this), 0x32));
    },
    '_fadeStep': function () {
      var _0xcb414 = this._fadeTimer.delta().map(-this._fadeTimer.target, 0x0, 0x1, 0x0).limit(0x0, 0x1) * this._volume;
      0.01 >= _0xcb414 ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = _0xcb414;
    },
    '_endedCallback': function () {
      this._loop ? this.play() : this.next();
    }
  }), ig.Sound = ig.Class.extend({
    'path': '',
    'volume': 0x1,
    'currentClip': null,
    'multiChannel': !0x0,
    '_loop': !0x1,
    'init': function (_0x3ed6f6, _0x481711) {
      this.path = _0x3ed6f6, this.multiChannel = !0x1 !== _0x481711, Object.defineProperty(this, 'loop', {
        'get': this.getLooping.bind(this),
        'set': this.setLooping.bind(this)
      }), this.load();
    },
    'getLooping': function () {
      return this._loop;
    },
    'setLooping': function (_0x7ffcf3) {
      this._loop = _0x7ffcf3, this.currentClip && (this.currentClip.loop = _0x7ffcf3);
    },
    'load': function (_0x435270) {
      ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, _0x435270) : ig.addResource(this) : _0x435270 && _0x435270(this.path, !0x0);
    },
    'play': function () {
      ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.loop = this._loop, this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play());
    },
    'stop': function () {
      this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0x0);
    }
  }), ig.Sound.WebAudioSource = ig.Class.extend({
    'sources': [],
    'gain': null,
    'buffer': null,
    '_loop': !0x1,
    'init': function () {
      this.gain = ig.soundManager.audioContext.createGain(), this.gain.connect(ig.soundManager.audioContext.destination), Object.defineProperty(this, 'loop', {
        'get': this.getLooping.bind(this),
        'set': this.setLooping.bind(this)
      }), Object.defineProperty(this, 'volume', {
        'get': this.getVolume.bind(this),
        'set': this.setVolume.bind(this)
      });
    },
    'play': function () {
      if (this.buffer) {
        var _0x578d97 = ig.soundManager.audioContext.createBufferSource();
        _0x578d97.buffer = this.buffer, _0x578d97.connect(this.gain), _0x578d97.loop = this._loop;
        var _0x68444f = this;
        this.sources.push(_0x578d97), _0x578d97.onended = function () {
          _0x68444f.sources.erase(_0x578d97);
        }, _0x578d97.start(0x0);
      }
    },
    'pause': function () {
      for (var _0x279c99 = 0x0; _0x279c99 < this.sources.length; _0x279c99++) try {
        this.sources[_0x279c99].stop();
      } catch (_0x37e972) {}
    },
    'getLooping': function () {
      return this._loop;
    },
    'setLooping': function (_0x4d66da) {
      this._loop = _0x4d66da;
      for (var _0x1fa532 = 0x0; _0x1fa532 < this.sources.length; _0x1fa532++) this.sources[_0x1fa532].loop = _0x4d66da;
    },
    'getVolume': function () {
      return this.gain.gain.value;
    },
    'setVolume': function (_0x59f0a4) {
      this.gain.gain.value = _0x59f0a4;
    }
  }), ig.Sound.FORMAT = {
    'MP3': {
      'ext': 'mp3',
      'mime': 'audio/mpeg'
    },
    'M4A': {
      'ext': 'm4a',
      'mime': "audio/mp4; codecs=mp4a.40.2"
    },
    'OGG': {
      'ext': 'ogg',
      'mime': "audio/ogg; codecs=vorbis"
    },
    'WEBM': {
      'ext': 'webm',
      'mime': "audio/webm; codecs=vorbis"
    },
    'CAF': {
      'ext': 'caf',
      'mime': 'audio/x-caf'
    }
  }, ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3], ig.Sound.channels = 0x4, ig.Sound.enabled = !0x0, ig.normalizeVendorAttribute(window, 'AudioContext'), ig.Sound.useWebAudio = !!window.AudioContext;
}), ig.baked = !0x0, ig.module('impact.loader').requires('impact.image', 'impact.font', 'impact.sound').defines(function () {
  ig.Loader = ig.Class.extend({
    'resources': [],
    'gameClass': null,
    'status': 0x0,
    'done': !0x1,
    '_unloaded': [],
    '_drawStatus': 0x0,
    '_intervalId': 0x0,
    '_loadCallbackBound': null,
    'init': function (_0xf2d835, _0x48c469) {
      this.gameClass = _0xf2d835, this.resources = _0x48c469, this._loadCallbackBound = this._loadCallback.bind(this);
      for (var _0x526e1c = 0x0; _0x526e1c < this.resources.length; _0x526e1c++) this._unloaded.push(this.resources[_0x526e1c].path);
    },
    'load': function () {
      ig.system.clear('#000');
      if (this.resources.length) {
        for (var _0x414eba = 0x0; _0x414eba < this.resources.length; _0x414eba++) this.loadResource(this.resources[_0x414eba]);
        this._intervalId = setInterval(this.draw.bind(this), 0x10);
      } else this.end();
    },
    'loadResource': function (_0x1612c0) {
      _0x1612c0.load(this._loadCallbackBound);
    },
    'end': function () {
      this.done || (this.done = !0x0, clearInterval(this._intervalId), ig.system.setGame(this.gameClass));
    },
    'draw': function () {
      this._drawStatus += (this.status - this._drawStatus) / 0x5;
      var _0x4c7fc1 = ig.system.scale,
        _0x561bac = (0.6 * ig.system.width).floor(),
        _0x359f88 = (0.1 * ig.system.height).floor(),
        _0x5e4453 = (0.5 * ig.system.width - _0x561bac / 0x2).floor(),
        _0x1f9bf0 = (0.5 * ig.system.height - _0x359f88 / 0x2).floor();
      ig.system.context.fillStyle = '#000', ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height), ig.system.context.fillStyle = '#fff', ig.system.context.fillRect(_0x5e4453 * _0x4c7fc1, _0x1f9bf0 * _0x4c7fc1, _0x561bac * _0x4c7fc1, _0x359f88 * _0x4c7fc1), ig.system.context.fillStyle = '#000', ig.system.context.fillRect(_0x5e4453 * _0x4c7fc1 + _0x4c7fc1, _0x1f9bf0 * _0x4c7fc1 + _0x4c7fc1, _0x561bac * _0x4c7fc1 - _0x4c7fc1 - _0x4c7fc1, _0x359f88 * _0x4c7fc1 - _0x4c7fc1 - _0x4c7fc1), ig.system.context.fillStyle = '#fff', ig.system.context.fillRect(_0x5e4453 * _0x4c7fc1, _0x1f9bf0 * _0x4c7fc1, _0x561bac * _0x4c7fc1 * this._drawStatus, _0x359f88 * _0x4c7fc1);
    },
    '_loadCallback': function (_0x56697f, _0x2de02f) {
      if (_0x2de02f) this._unloaded.erase(_0x56697f);else throw "Failed to load resource: " + _0x56697f;
      this.status = 0x1 - this._unloaded.length / this.resources.length, 0x0 == this._unloaded.length && setTimeout(this.end.bind(this), 0xfa);
    }
  });
}), ig.baked = !0x0, ig.module('impact.timer').defines(function () {
  ig.Timer = ig.Class.extend({
    'target': 0x0,
    'base': 0x0,
    'last': 0x0,
    'pausedAt': 0x0,
    'init': function (_0x509f9a) {
      this.last = this.base = ig.Timer.time, this.target = _0x509f9a || 0x0;
    },
    'set': function (_0xd323b8) {
      this.target = _0xd323b8 || 0x0, this.base = ig.Timer.time, this.pausedAt = 0x0;
    },
    'reset': function () {
      this.base = ig.Timer.time, this.pausedAt = 0x0;
    },
    'tick': function () {
      var _0xff210d = ig.Timer.time - this.last;
      return this.last = ig.Timer.time, this.pausedAt ? 0x0 : _0xff210d;
    },
    'delta': function () {
      return (this.pausedAt || ig.Timer.time) - this.base - this.target;
    },
    'pause': function () {
      this.pausedAt || (this.pausedAt = ig.Timer.time);
    },
    'unpause': function () {
      this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0x0);
    }
  }), ig.Timer._last = 0x0, ig.Timer.time = Number.MIN_VALUE, ig.Timer.timeScale = 0x1, ig.Timer.maxStep = 0.05, ig.Timer.step = function () {
    var _0x300127 = Date.now();
    ig.Timer.time += Math.min((_0x300127 - ig.Timer._last) / 0x3e8, ig.Timer.maxStep) * ig.Timer.timeScale, ig.Timer._last = _0x300127;
  };
}), ig.baked = !0x0, ig.module('impact.system').requires('impact.timer', 'impact.image').defines(function () {
  ig.System = ig.Class.extend({
    'fps': 0x1e,
    'width': 0x140,
    'height': 0xf0,
    'realWidth': 0x140,
    'realHeight': 0xf0,
    'scale': 0x1,
    'tick': 0x0,
    'animationId': 0x0,
    'newGameClass': null,
    'running': !0x1,
    'delegate': null,
    'clock': null,
    'canvas': null,
    'context': null,
    'init': function (_0x437ba2, _0x5b62a5, _0x75e49, _0x1de334, _0x230757) {
      this.fps = _0x5b62a5, this.clock = new ig.Timer(), this.canvas = ig.$(_0x437ba2), this.resize(_0x75e49, _0x1de334, _0x230757), this.context = this.canvas.getContext('2d'), this.getDrawPos = ig.System.drawMode, 0x1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP), ig.System.scaleMode(this.canvas, this.context);
    },
    'resize': function (_0x2f2379, _0x34b0e7, _0x3a877d) {
      this.width = _0x2f2379, this.height = _0x34b0e7, this.scale = _0x3a877d || this.scale, this.realWidth = this.width * this.scale, this.realHeight = this.height * this.scale, this.canvas.width = this.realWidth, this.canvas.height = this.realHeight;
    },
    'setGame': function (_0x329df6) {
      this.running ? this.newGameClass = _0x329df6 : this.setGameNow(_0x329df6);
    },
    'setGameNow': function (_0x3b2bff) {
      ig.game = new _0x3b2bff(), ig.system.setDelegate(ig.game);
    },
    'setDelegate': function (_0x260c1d) {
      if ('function' == typeof _0x260c1d.run) this.delegate = _0x260c1d, this.startRunLoop();else throw "System.setDelegate: No run() function in object";
    },
    'stopRunLoop': function () {
      ig.clearAnimation(this.animationId), this.running = !0x1;
    },
    'startRunLoop': function () {
      this.stopRunLoop(), this.animationId = ig.setAnimation(this.run.bind(this)), this.running = !0x0;
    },
    'clear': function (_0x4b5551) {
      this.context.fillStyle = _0x4b5551, this.context.fillRect(0x0, 0x0, this.realWidth, this.realHeight);
    },
    'run': function () {
      ig.Timer.step(), this.tick = this.clock.tick(), this.delegate.run(), ig.input.clearPressed(), this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null);
    },
    'getDrawPos': null
  }), ig.System.DRAW = {
    'AUTHENTIC': function (_0x3b203f) {
      return Math.round(_0x3b203f) * this.scale;
    },
    'SMOOTH': function (_0x514443) {
      return Math.round(_0x514443 * this.scale);
    },
    'SUBPIXEL': function (_0x5ecb38) {
      return _0x5ecb38 * this.scale;
    }
  }, ig.System.drawMode = ig.System.DRAW.SMOOTH, ig.System.SCALE = {
    'CRISP': function (_0x1bf2ef, _0x5010ce) {
      ig.setVendorAttribute(_0x5010ce, 'imageSmoothingEnabled', !0x1), _0x1bf2ef.style.imageRendering = '-moz-crisp-edges', _0x1bf2ef.style.imageRendering = '-o-crisp-edges', _0x1bf2ef.style.imageRendering = '-webkit-optimize-contrast', _0x1bf2ef.style.imageRendering = 'crisp-edges', _0x1bf2ef.style.msInterpolationMode = 'nearest-neighbor';
    },
    'SMOOTH': function (_0x4c6681, _0x72860e) {
      ig.setVendorAttribute(_0x72860e, 'imageSmoothingEnabled', !0x0), _0x4c6681.style.imageRendering = '', _0x4c6681.style.msInterpolationMode = '';
    }
  }, ig.System.scaleMode = ig.System.SCALE.SMOOTH;
}), ig.baked = !0x0, ig.module('impact.input').defines(function () {
  ig.KEY = {
    'MOUSE1': -0x1,
    'MOUSE2': -0x3,
    'MWHEEL_UP': -0x4,
    'MWHEEL_DOWN': -0x5,
    'BACKSPACE': 0x8,
    'TAB': 0x9,
    'ENTER': 0xd,
    'PAUSE': 0x13,
    'CAPS': 0x14,
    'ESC': 0x1b,
    'SPACE': 0x20,
    'PAGE_UP': 0x21,
    'PAGE_DOWN': 0x22,
    'END': 0x23,
    'HOME': 0x24,
    'LEFT_ARROW': 0x25,
    'UP_ARROW': 0x26,
    'RIGHT_ARROW': 0x27,
    'DOWN_ARROW': 0x28,
    'INSERT': 0x2d,
    'DELETE': 0x2e,
    '_0': 0x30,
    '_1': 0x31,
    '_2': 0x32,
    '_3': 0x33,
    '_4': 0x34,
    '_5': 0x35,
    '_6': 0x36,
    '_7': 0x37,
    '_8': 0x38,
    '_9': 0x39,
    'A': 0x41,
    'B': 0x42,
    'C': 0x43,
    'D': 0x44,
    'E': 0x45,
    'F': 0x46,
    'G': 0x47,
    'H': 0x48,
    'I': 0x49,
    'J': 0x4a,
    'K': 0x4b,
    'L': 0x4c,
    'M': 0x4d,
    'N': 0x4e,
    'O': 0x4f,
    'P': 0x50,
    'Q': 0x51,
    'R': 0x52,
    'S': 0x53,
    'T': 0x54,
    'U': 0x55,
    'V': 0x56,
    'W': 0x57,
    'X': 0x58,
    'Y': 0x59,
    'Z': 0x5a,
    'NUMPAD_0': 0x60,
    'NUMPAD_1': 0x61,
    'NUMPAD_2': 0x62,
    'NUMPAD_3': 0x63,
    'NUMPAD_4': 0x64,
    'NUMPAD_5': 0x65,
    'NUMPAD_6': 0x66,
    'NUMPAD_7': 0x67,
    'NUMPAD_8': 0x68,
    'NUMPAD_9': 0x69,
    'MULTIPLY': 0x6a,
    'ADD': 0x6b,
    'SUBSTRACT': 0x6d,
    'DECIMAL': 0x6e,
    'DIVIDE': 0x6f,
    'F1': 0x70,
    'F2': 0x71,
    'F3': 0x72,
    'F4': 0x73,
    'F5': 0x74,
    'F6': 0x75,
    'F7': 0x76,
    'F8': 0x77,
    'F9': 0x78,
    'F10': 0x79,
    'F11': 0x7a,
    'F12': 0x7b,
    'SHIFT': 0x10,
    'CTRL': 0x11,
    'ALT': 0x12,
    'PLUS': 0xbb,
    'COMMA': 0xbc,
    'MINUS': 0xbd,
    'PERIOD': 0xbe
  }, ig.Input = ig.Class.extend({
    'bindings': {},
    'actions': {},
    'presses': {},
    'locks': {},
    'delayedKeyup': {},
    'isUsingMouse': !0x1,
    'isUsingKeyboard': !0x1,
    'isUsingAccelerometer': !0x1,
    'mouse': {
      'x': 0x0,
      'y': 0x0
    },
    'accel': {
      'x': 0x0,
      'y': 0x0,
      'z': 0x0
    },
    'initMouse': function () {
      this.isUsingMouse || (this.isUsingMouse = !0x0, ig.system.canvas.addEventListener('wheel', this.mousewheel.bind(this), !0x1), ig.system.canvas.addEventListener('contextmenu', this.contextmenu.bind(this), !0x1), ig.system.canvas.addEventListener('mousedown', this.keydown.bind(this), !0x1), ig.system.canvas.addEventListener('mouseup', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('mousemove', this.mousemove.bind(this), !0x1), ig.ua.touchDevice && (ig.system.canvas.addEventListener('touchstart', this.keydown.bind(this), !0x1), ig.system.canvas.addEventListener('touchend', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('touchcancel', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('touchmove', this.mousemove.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerDown', this.keydown.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerUp', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerMove', this.mousemove.bind(this), !0x1), ig.system.canvas.style.msTouchAction = 'none'));
    },
    'initKeyboard': function () {
      this.isUsingKeyboard || (this.isUsingKeyboard = !0x0, window.addEventListener('keydown', this.keydown.bind(this), !0x1), window.addEventListener('keyup', this.keyup.bind(this), !0x1));
    },
    'initAccelerometer': function () {
      this.isUsingAccelerometer || (this.isUsingAccelerometer = !0x0, window.addEventListener('devicemotion', this.devicemotion.bind(this), !0x1));
    },
    'mousewheel': function (_0x4de74b) {
      var _0x34a3ed = this.bindings[0x0 > _0x4de74b.deltaY ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
      _0x34a3ed && (this.actions[_0x34a3ed] = !0x0, this.presses[_0x34a3ed] = !0x0, this.delayedKeyup[_0x34a3ed] = !0x0, _0x4de74b.stopPropagation(), _0x4de74b.preventDefault());
    },
    'mousemove': function (_0x1e2b65) {
      var _0x2e1c0d = ig.system.scale * ((ig.system.canvas.offsetWidth || ig.system.realWidth) / ig.system.realWidth),
        _0x5e7cf9 = {
          'left': 0x0,
          'top': 0x0
        };
      ig.system.canvas.getBoundingClientRect && (_0x5e7cf9 = ig.system.canvas.getBoundingClientRect()), _0x1e2b65 = _0x1e2b65.touches ? _0x1e2b65.touches[0x0] : _0x1e2b65, this.mouse.x = (_0x1e2b65.clientX - _0x5e7cf9.left) / _0x2e1c0d, this.mouse.y = (_0x1e2b65.clientY - _0x5e7cf9.top) / _0x2e1c0d;
    },
    'contextmenu': function (_0x507f42) {
      this.bindings[ig.KEY.MOUSE2] && (_0x507f42.stopPropagation(), _0x507f42.preventDefault());
    },
    'keydown': function (_0x145263) {
      var _0x336af0 = _0x145263.target.tagName;
      if (!('INPUT' == _0x336af0 || 'TEXTAREA' == _0x336af0)) {
        if (_0x336af0 = 'keydown' == _0x145263.type ? _0x145263.keyCode : 0x2 == _0x145263.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, 0x0 > _0x336af0 && !ig.ua.mobile && window.focus(), ('touchstart' == _0x145263.type || 'mousedown' == _0x145263.type) && this.mousemove(_0x145263), _0x336af0 = this.bindings[_0x336af0]) this.actions[_0x336af0] = !0x0, this.locks[_0x336af0] || (this.presses[_0x336af0] = !0x0, this.locks[_0x336af0] = !0x0), _0x145263.preventDefault();
      }
    },
    'keyup': function (_0x426819) {
      var _0x44d749 = _0x426819.target.tagName;
      if (!('INPUT' == _0x44d749 || 'TEXTAREA' == _0x44d749)) {
        if (_0x44d749 = this.bindings['keyup' == _0x426819.type ? _0x426819.keyCode : 0x2 == _0x426819.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[_0x44d749] = !0x0, _0x426819.preventDefault();
      }
    },
    'devicemotion': function (_0x5433e5) {
      this.accel = _0x5433e5.accelerationIncludingGravity;
    },
    'bind': function (_0xcba1a9, _0x55ac9a) {
      0x0 > _0xcba1a9 ? this.initMouse() : 0x0 < _0xcba1a9 && this.initKeyboard(), this.bindings[_0xcba1a9] = _0x55ac9a;
    },
    'bindTouch': function (_0x2ac695, _0x33a2e9) {
      var _0x12b622 = ig.$(_0x2ac695),
        _0x1c2c20 = this;
      _0x12b622.addEventListener('touchstart', function (_0x3f2a51) {
        _0x1c2c20.touchStart(_0x3f2a51, _0x33a2e9);
      }, !0x1), _0x12b622.addEventListener('touchend', function (_0x2ac313) {
        _0x1c2c20.touchEnd(_0x2ac313, _0x33a2e9);
      }, !0x1), _0x12b622.addEventListener('MSPointerDown', function (_0x4e4850) {
        _0x1c2c20.touchStart(_0x4e4850, _0x33a2e9);
      }, !0x1), _0x12b622.addEventListener('MSPointerUp', function (_0x438db0) {
        _0x1c2c20.touchEnd(_0x438db0, _0x33a2e9);
      }, !0x1);
    },
    'unbind': function (_0x351fef) {
      this.delayedKeyup[this.bindings[_0x351fef]] = !0x0, this.bindings[_0x351fef] = null;
    },
    'unbindAll': function () {
      this.bindings = {}, this.actions = {}, this.presses = {}, this.locks = {}, this.delayedKeyup = {};
    },
    'state': function (_0x28f50c) {
      return this.actions[_0x28f50c];
    },
    'pressed': function (_0x5c6668) {
      return this.presses[_0x5c6668];
    },
    'released': function (_0x3e7173) {
      return !!this.delayedKeyup[_0x3e7173];
    },
    'clearPressed': function () {
      for (var _0x199aa4 in this.delayedKeyup) this.actions[_0x199aa4] = !0x1, this.locks[_0x199aa4] = !0x1;
      this.delayedKeyup = {}, this.presses = {};
    },
    'touchStart': function (_0x5053d7, _0x4f78b4) {
      return this.actions[_0x4f78b4] = !0x0, this.presses[_0x4f78b4] = !0x0, _0x5053d7.stopPropagation(), _0x5053d7.preventDefault(), !0x1;
    },
    'touchEnd': function (_0x1afb40, _0x5a2cfe) {
      return this.delayedKeyup[_0x5a2cfe] = !0x0, _0x1afb40.stopPropagation(), _0x1afb40.preventDefault(), !0x1;
    }
  });
}), ig.baked = !0x0, ig.module('impact.impact').requires('dom.ready', 'impact.loader', 'impact.system', 'impact.input', 'impact.sound').defines(function () {
  ig.main = function (_0x14bede, _0x5d05a2, _0x5d8b9b, _0x153c68, _0x360f33, _0x4741d8, _0xc0becc) {
    ig.system = new ig.System(_0x14bede, _0x5d8b9b, _0x153c68, _0x360f33, _0x4741d8 || 0x1), ig.input = new ig.Input(), ig.soundManager = new ig.SoundManager(), ig.music = new ig.Music(), ig.ready = !0x0, new (_0xc0becc || ig.Loader)(_0x5d05a2, ig.resources).load();
  };
}), ig.baked = !0x0, ig.module('impact.animation').requires('impact.timer', 'impact.image').defines(function () {
  ig.AnimationSheet = ig.Class.extend({
    'width': 0x8,
    'height': 0x8,
    'image': null,
    'init': function (_0x1f2fed, _0x480851, _0x4d0806) {
      this.width = _0x480851, this.height = _0x4d0806, this.image = new ig.Image(_0x1f2fed);
    }
  }), ig.Animation = ig.Class.extend({
    'sheet': null,
    'timer': null,
    'sequence': [],
    'flip': {
      'x': !0x1,
      'y': !0x1
    },
    'pivot': {
      'x': 0x0,
      'y': 0x0
    },
    'frameTime': 0x0,
    'frame': 0x0,
    'tile': 0x0,
    'stop': !0x1,
    'loopCount': 0x0,
    'alpha': 0x1,
    'angle': 0x0,
    'init': function (_0x14710b, _0x22ec52, _0x5093f0, _0x3c62b) {
      this.sheet = _0x14710b, this.pivot = {
        'x': _0x14710b.width / 0x2,
        'y': _0x14710b.height / 0x2
      }, this.timer = new ig.Timer(), this.frameTime = _0x22ec52, this.sequence = _0x5093f0, this.stop = !!_0x3c62b, this.tile = this.sequence[0x0];
    },
    'rewind': function () {
      return this.timer.set(), this.frame = this.loopCount = 0x0, this.tile = this.sequence[0x0], this;
    },
    'gotoFrame': function (_0x5e5725) {
      this.timer.set(this.frameTime * -_0x5e5725 - 0.0001), this.update();
    },
    'gotoRandomFrame': function () {
      this.gotoFrame(Math.floor(Math.random() * this.sequence.length));
    },
    'update': function () {
      var _0xc850f7 = Math.floor(this.timer.delta() / this.frameTime);
      this.loopCount = Math.floor(_0xc850f7 / this.sequence.length), this.frame = this.stop && 0x0 < this.loopCount ? this.sequence.length - 0x1 : _0xc850f7 % this.sequence.length, this.tile = this.sequence[this.frame];
    },
    'draw': function (_0x46da5c, _0x5b8aff) {
      var _0x18684e = Math.max(this.sheet.width, this.sheet.height);
      _0x46da5c > ig.system.width || _0x5b8aff > ig.system.height || 0x0 > _0x46da5c + _0x18684e || 0x0 > _0x5b8aff + _0x18684e || (0x1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0x0 == this.angle ? this.sheet.image.drawTile(_0x46da5c, _0x5b8aff, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(_0x46da5c + this.pivot.x), ig.system.getDrawPos(_0x5b8aff + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 0x1 != this.alpha && (ig.system.context.globalAlpha = 0x1));
    }
  });
}), ig.baked = !0x0, ig.module('impact.entity').requires('impact.animation', 'impact.impact').defines(function () {
  ig.Entity = ig.Class.extend({
    'id': 0x0,
    'settings': {},
    'size': {
      'x': 0x10,
      'y': 0x10
    },
    'offset': {
      'x': 0x0,
      'y': 0x0
    },
    'pos': {
      'x': 0x0,
      'y': 0x0
    },
    'last': {
      'x': 0x0,
      'y': 0x0
    },
    'vel': {
      'x': 0x0,
      'y': 0x0
    },
    'accel': {
      'x': 0x0,
      'y': 0x0
    },
    'friction': {
      'x': 0x0,
      'y': 0x0
    },
    'maxVel': {
      'x': 0x64,
      'y': 0x64
    },
    'zIndex': 0x0,
    'gravityFactor': 0x1,
    'standing': !0x1,
    'bounciness': 0x0,
    'minBounceVelocity': 0x28,
    'anims': {},
    'animSheet': null,
    'currentAnim': null,
    'health': 0xa,
    'type': 0x0,
    'checkAgainst': 0x0,
    'collides': 0x0,
    '_killed': !0x1,
    'slopeStanding': {
      'min': 0x2c.toRad(),
      'max': 0x88.toRad()
    },
    'init': function (_0x858626, _0x253c7a, _0x5ed011) {
      this.id = ++ig.Entity._lastId, this.pos.x = this.last.x = _0x858626, this.pos.y = this.last.y = _0x253c7a, ig.merge(this, _0x5ed011);
    },
    'reset': function (_0x135c5e, _0x156f17, _0x521cff) {
      var _0x322674 = this.constructor.prototype;
      this.pos.x = _0x135c5e, this.pos.y = _0x156f17, this.last.x = _0x135c5e, this.last.y = _0x156f17, this.vel.x = _0x322674.vel.x, this.vel.y = _0x322674.vel.y, this.accel.x = _0x322674.accel.x, this.accel.y = _0x322674.accel.y, this.health = _0x322674.health, this._killed = _0x322674._killed, this.standing = _0x322674.standing, this.type = _0x322674.type, this.checkAgainst = _0x322674.checkAgainst, this.collides = _0x322674.collides, ig.merge(this, _0x521cff);
    },
    'addAnim': function (_0x21f46b, _0x2b7f10, _0xf758b9, _0x70142f) {
      if (!this.animSheet) throw "No animSheet to add the animation " + _0x21f46b + " to.";
      return _0x2b7f10 = new ig.Animation(this.animSheet, _0x2b7f10, _0xf758b9, _0x70142f), this.anims[_0x21f46b] = _0x2b7f10, this.currentAnim || (this.currentAnim = _0x2b7f10), _0x2b7f10;
    },
    'update': function () {
      this.last.x = this.pos.x, this.last.y = this.pos.y, this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor, this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x), this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
      var _0x578c21 = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
      this.handleMovementTrace(_0x578c21), this.currentAnim && this.currentAnim.update();
    },
    'getNewVelocity': function (_0x5dd228, _0x53342f, _0x185eae, _0x158acf) {
      return _0x53342f ? (_0x5dd228 + _0x53342f * ig.system.tick).limit(-_0x158acf, _0x158acf) : _0x185eae ? (_0x53342f = _0x185eae * ig.system.tick, 0x0 < _0x5dd228 - _0x53342f ? _0x5dd228 - _0x53342f : 0x0 > _0x5dd228 + _0x53342f ? _0x5dd228 + _0x53342f : 0x0) : _0x5dd228.limit(-_0x158acf, _0x158acf);
    },
    'handleMovementTrace': function (_0x14badb) {
      this.standing = !0x1, _0x14badb.collision.y && (0x0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0x0 < this.vel.y && (this.standing = !0x0), this.vel.y = 0x0)), _0x14badb.collision.x && (this.vel.x = 0x0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0x0);
      if (_0x14badb.collision.slope) {
        var _0x35e6e9 = _0x14badb.collision.slope;
        if (0x0 < this.bounciness) {
          var _0xf74c4b = this.vel.x * _0x35e6e9.nx + this.vel.y * _0x35e6e9.ny;
          this.vel.x = (this.vel.x - 0x2 * _0x35e6e9.nx * _0xf74c4b) * this.bounciness, this.vel.y = (this.vel.y - 0x2 * _0x35e6e9.ny * _0xf74c4b) * this.bounciness;
        } else _0xf74c4b = (this.vel.x * _0x35e6e9.x + this.vel.y * _0x35e6e9.y) / (_0x35e6e9.x * _0x35e6e9.x + _0x35e6e9.y * _0x35e6e9.y), this.vel.x = _0x35e6e9.x * _0xf74c4b, this.vel.y = _0x35e6e9.y * _0xf74c4b, _0x35e6e9 = Math.atan2(_0x35e6e9.x, _0x35e6e9.y), _0x35e6e9 > this.slopeStanding.min && _0x35e6e9 < this.slopeStanding.max && (this.standing = !0x0);
      }
      this.pos = _0x14badb.pos;
    },
    'draw': function () {
      this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y);
    },
    'kill': function () {
      ig.game.removeEntity(this);
    },
    'receiveDamage': function (_0x17ac1e) {
      this.health -= _0x17ac1e, 0x0 >= this.health && this.kill();
    },
    'touches': function (_0x43e1f8) {
      return !(this.pos.x >= _0x43e1f8.pos.x + _0x43e1f8.size.x || this.pos.x + this.size.x <= _0x43e1f8.pos.x || this.pos.y >= _0x43e1f8.pos.y + _0x43e1f8.size.y || this.pos.y + this.size.y <= _0x43e1f8.pos.y);
    },
    'distanceTo': function (_0x377911) {
      var _0x4e069a = this.pos.x + this.size.x / 0x2 - (_0x377911.pos.x + _0x377911.size.x / 0x2);
      return _0x377911 = this.pos.y + this.size.y / 0x2 - (_0x377911.pos.y + _0x377911.size.y / 0x2), Math.sqrt(_0x4e069a * _0x4e069a + _0x377911 * _0x377911);
    },
    'angleTo': function (_0x49d4c3) {
      return Math.atan2(_0x49d4c3.pos.y + _0x49d4c3.size.y / 0x2 - (this.pos.y + this.size.y / 0x2), _0x49d4c3.pos.x + _0x49d4c3.size.x / 0x2 - (this.pos.x + this.size.x / 0x2));
    },
    'check': function () {},
    'collideWith': function () {},
    'ready': function () {},
    'erase': function () {}
  }), ig.Entity._lastId = 0x0, ig.Entity.COLLIDES = {
    'NEVER': 0x0,
    'LITE': 0x1,
    'PASSIVE': 0x2,
    'ACTIVE': 0x4,
    'FIXED': 0x8
  }, ig.Entity.TYPE = {
    'NONE': 0x0,
    'A': 0x1,
    'B': 0x2,
    'BOTH': 0x3
  }, ig.Entity.checkPair = function (_0x1a4166, _0x11f4e5) {
    _0x1a4166.checkAgainst & _0x11f4e5.type && _0x1a4166.check(_0x11f4e5), _0x11f4e5.checkAgainst & _0x1a4166.type && _0x11f4e5.check(_0x1a4166), _0x1a4166.collides && _0x11f4e5.collides && _0x1a4166.collides + _0x11f4e5.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(_0x1a4166, _0x11f4e5);
  }, ig.Entity.solveCollision = function (_0x4fd5c9, _0x4476f8) {
    var _0x4433d6 = null;
    if (_0x4fd5c9.collides == ig.Entity.COLLIDES.LITE || _0x4476f8.collides == ig.Entity.COLLIDES.FIXED) _0x4433d6 = _0x4fd5c9;else {
      if (_0x4476f8.collides == ig.Entity.COLLIDES.LITE || _0x4fd5c9.collides == ig.Entity.COLLIDES.FIXED) _0x4433d6 = _0x4476f8;
    }
    _0x4fd5c9.last.x + _0x4fd5c9.size.x > _0x4476f8.last.x && _0x4fd5c9.last.x < _0x4476f8.last.x + _0x4476f8.size.x ? (_0x4fd5c9.last.y < _0x4476f8.last.y ? ig.Entity.seperateOnYAxis(_0x4fd5c9, _0x4476f8, _0x4433d6) : ig.Entity.seperateOnYAxis(_0x4476f8, _0x4fd5c9, _0x4433d6), _0x4fd5c9.collideWith(_0x4476f8, 'y'), _0x4476f8.collideWith(_0x4fd5c9, 'y')) : _0x4fd5c9.last.y + _0x4fd5c9.size.y > _0x4476f8.last.y && _0x4fd5c9.last.y < _0x4476f8.last.y + _0x4476f8.size.y && (_0x4fd5c9.last.x < _0x4476f8.last.x ? ig.Entity.seperateOnXAxis(_0x4fd5c9, _0x4476f8, _0x4433d6) : ig.Entity.seperateOnXAxis(_0x4476f8, _0x4fd5c9, _0x4433d6), _0x4fd5c9.collideWith(_0x4476f8, 'x'), _0x4476f8.collideWith(_0x4fd5c9, 'x'));
  }, ig.Entity.seperateOnXAxis = function (_0x45bfb2, _0x45adc0, _0x7fee0d) {
    var _0x2ce0ac = _0x45bfb2.pos.x + _0x45bfb2.size.x - _0x45adc0.pos.x;
    _0x7fee0d ? (_0x7fee0d.vel.x = -_0x7fee0d.vel.x * _0x7fee0d.bounciness + (_0x45bfb2 === _0x7fee0d ? _0x45adc0 : _0x45bfb2).vel.x, _0x45adc0 = ig.game.collisionMap.trace(_0x7fee0d.pos.x, _0x7fee0d.pos.y, _0x7fee0d == _0x45bfb2 ? -_0x2ce0ac : _0x2ce0ac, 0x0, _0x7fee0d.size.x, _0x7fee0d.size.y), _0x7fee0d.pos.x = _0x45adc0.pos.x) : (_0x7fee0d = (_0x45bfb2.vel.x - _0x45adc0.vel.x) / 0x2, _0x45bfb2.vel.x = -_0x7fee0d, _0x45adc0.vel.x = _0x7fee0d, _0x7fee0d = ig.game.collisionMap.trace(_0x45bfb2.pos.x, _0x45bfb2.pos.y, -_0x2ce0ac / 0x2, 0x0, _0x45bfb2.size.x, _0x45bfb2.size.y), _0x45bfb2.pos.x = Math.floor(_0x7fee0d.pos.x), _0x45bfb2 = ig.game.collisionMap.trace(_0x45adc0.pos.x, _0x45adc0.pos.y, _0x2ce0ac / 0x2, 0x0, _0x45adc0.size.x, _0x45adc0.size.y), _0x45adc0.pos.x = Math.ceil(_0x45bfb2.pos.x));
  }, ig.Entity.seperateOnYAxis = function (_0x17028f, _0xb8b225, _0x9e67e1) {
    var _0xecb801 = _0x17028f.pos.y + _0x17028f.size.y - _0xb8b225.pos.y;
    if (_0x9e67e1) {
      _0xb8b225 = _0x17028f === _0x9e67e1 ? _0xb8b225 : _0x17028f, _0x9e67e1.vel.y = -_0x9e67e1.vel.y * _0x9e67e1.bounciness + _0xb8b225.vel.y;
      var _0x1bf0bc = 0x0;
      _0x9e67e1 == _0x17028f && Math.abs(_0x9e67e1.vel.y - _0xb8b225.vel.y) < _0x9e67e1.minBounceVelocity && (_0x9e67e1.standing = !0x0, _0x1bf0bc = _0xb8b225.vel.x * ig.system.tick), _0x17028f = ig.game.collisionMap.trace(_0x9e67e1.pos.x, _0x9e67e1.pos.y, _0x1bf0bc, _0x9e67e1 == _0x17028f ? -_0xecb801 : _0xecb801, _0x9e67e1.size.x, _0x9e67e1.size.y), _0x9e67e1.pos.y = _0x17028f.pos.y, _0x9e67e1.pos.x = _0x17028f.pos.x;
    } else ig.game.gravity && (_0xb8b225.standing || 0x0 < _0x17028f.vel.y) ? (_0x9e67e1 = ig.game.collisionMap.trace(_0x17028f.pos.x, _0x17028f.pos.y, 0x0, -(_0x17028f.pos.y + _0x17028f.size.y - _0xb8b225.pos.y), _0x17028f.size.x, _0x17028f.size.y), _0x17028f.pos.y = _0x9e67e1.pos.y, 0x0 < _0x17028f.bounciness && _0x17028f.vel.y > _0x17028f.minBounceVelocity ? _0x17028f.vel.y *= -_0x17028f.bounciness : (_0x17028f.standing = !0x0, _0x17028f.vel.y = 0x0)) : (_0x9e67e1 = (_0x17028f.vel.y - _0xb8b225.vel.y) / 0x2, _0x17028f.vel.y = -_0x9e67e1, _0xb8b225.vel.y = _0x9e67e1, _0x1bf0bc = _0xb8b225.vel.x * ig.system.tick, _0x9e67e1 = ig.game.collisionMap.trace(_0x17028f.pos.x, _0x17028f.pos.y, _0x1bf0bc, -_0xecb801 / 0x2, _0x17028f.size.x, _0x17028f.size.y), _0x17028f.pos.y = _0x9e67e1.pos.y, _0x17028f = ig.game.collisionMap.trace(_0xb8b225.pos.x, _0xb8b225.pos.y, 0x0, _0xecb801 / 0x2, _0xb8b225.size.x, _0xb8b225.size.y), _0xb8b225.pos.y = _0x17028f.pos.y);
  };
}), ig.baked = !0x0, ig.module('impact.map').defines(function () {
  ig.Map = ig.Class.extend({
    'tilesize': 0x8,
    'width': 0x1,
    'height': 0x1,
    'pxWidth': 0x1,
    'pxHeight': 0x1,
    'data': [[]],
    'name': null,
    'init': function (_0x5045f7, _0x16df0e) {
      this.tilesize = _0x5045f7, this.data = _0x16df0e, this.height = _0x16df0e.length, this.width = _0x16df0e[0x0].length, this.pxWidth = this.width * this.tilesize, this.pxHeight = this.height * this.tilesize;
    },
    'getTile': function (_0x1fe0d1, _0x2560cc) {
      var _0x12448a = Math.floor(_0x1fe0d1 / this.tilesize),
        _0x1c1c74 = Math.floor(_0x2560cc / this.tilesize);
      return 0x0 <= _0x12448a && _0x12448a < this.width && 0x0 <= _0x1c1c74 && _0x1c1c74 < this.height ? this.data[_0x1c1c74][_0x12448a] : 0x0;
    },
    'setTile': function (_0x5c92d6, _0x1a44ef, _0x1c3a6b) {
      _0x5c92d6 = Math.floor(_0x5c92d6 / this.tilesize), _0x1a44ef = Math.floor(_0x1a44ef / this.tilesize), 0x0 <= _0x5c92d6 && _0x5c92d6 < this.width && 0x0 <= _0x1a44ef && _0x1a44ef < this.height && (this.data[_0x1a44ef][_0x5c92d6] = _0x1c3a6b);
    }
  });
}), ig.baked = !0x0, ig.module('impact.collision-map').requires('impact.map').defines(function () {
  ig.CollisionMap = ig.Map.extend({
    'lastSlope': 0x1,
    'tiledef': null,
    'init': function (_0x26e7ec, _0x1282b7, _0x4d236c) {
      this.parent(_0x26e7ec, _0x1282b7), this.tiledef = _0x4d236c || ig.CollisionMap.defaultTileDef;
      for (var _0x366e5b in this.tiledef) _0x366e5b | 0x0 > this.lastSlope && (this.lastSlope = _0x366e5b | 0x0);
    },
    'trace': function (_0x84f65, _0x281e19, _0x41fc31, _0x2b9b7c, _0x32e7b0, _0x1ba9b3) {
      var _0x3dbc26 = {
          'collision': {
            'x': !0x1,
            'y': !0x1,
            'slope': !0x1
          },
          'pos': {
            'x': _0x84f65,
            'y': _0x281e19
          },
          'tile': {
            'x': 0x0,
            'y': 0x0
          }
        },
        _0x51a319 = Math.ceil((Math.max(Math.abs(_0x41fc31), Math.abs(_0x2b9b7c)) + 0.1) / this.tilesize);
      if (0x1 < _0x51a319) {
        for (var _0x9c5b4c = _0x41fc31 / _0x51a319, _0x3f0549 = _0x2b9b7c / _0x51a319, _0x1c125d = 0x0; _0x1c125d < _0x51a319 && (_0x9c5b4c || _0x3f0549) && !(this._traceStep(_0x3dbc26, _0x84f65, _0x281e19, _0x9c5b4c, _0x3f0549, _0x32e7b0, _0x1ba9b3, _0x41fc31, _0x2b9b7c, _0x1c125d), _0x84f65 = _0x3dbc26.pos.x, _0x281e19 = _0x3dbc26.pos.y, _0x3dbc26.collision.x && (_0x41fc31 = _0x9c5b4c = 0x0), _0x3dbc26.collision.y && (_0x2b9b7c = _0x3f0549 = 0x0), _0x3dbc26.collision.slope); _0x1c125d++);
      } else this._traceStep(_0x3dbc26, _0x84f65, _0x281e19, _0x41fc31, _0x2b9b7c, _0x32e7b0, _0x1ba9b3, _0x41fc31, _0x2b9b7c, 0x0);
      return _0x3dbc26;
    },
    '_traceStep': function (_0x5e4d9e, _0x3079c7, _0x42bcea, _0x506ed7, _0x2ce52a, _0x55d621, _0x1736d5, _0x4ef563, _0x139903, _0x2c2074) {
      _0x5e4d9e.pos.x += _0x506ed7, _0x5e4d9e.pos.y += _0x2ce52a;
      var _0x44b1ae = 0x0;
      if (_0x506ed7) {
        var _0x2dfdcd = 0x0 < _0x506ed7 ? _0x55d621 : 0x0,
          _0x1a0dbf = 0x0 > _0x506ed7 ? this.tilesize : 0x0,
          _0x44b1ae = Math.max(Math.floor(_0x42bcea / this.tilesize), 0x0),
          _0x168b47 = Math.min(Math.ceil((_0x42bcea + _0x1736d5) / this.tilesize), this.height);
        _0x506ed7 = Math.floor((_0x5e4d9e.pos.x + _0x2dfdcd) / this.tilesize);
        var _0x42caae = Math.floor((_0x3079c7 + _0x2dfdcd) / this.tilesize);
        if (0x0 < _0x2c2074 || _0x506ed7 == _0x42caae || 0x0 > _0x42caae || _0x42caae >= this.width) _0x42caae = -0x1;
        if (0x0 <= _0x506ed7 && _0x506ed7 < this.width) {
          for (var _0x135fac = _0x44b1ae; _0x135fac < _0x168b47 && !(-0x1 != _0x42caae && (_0x44b1ae = this.data[_0x135fac][_0x42caae], 0x1 < _0x44b1ae && _0x44b1ae <= this.lastSlope && this._checkTileDef(_0x5e4d9e, _0x44b1ae, _0x3079c7, _0x42bcea, _0x4ef563, _0x139903, _0x55d621, _0x1736d5, _0x42caae, _0x135fac))); _0x135fac++) if (_0x44b1ae = this.data[_0x135fac][_0x506ed7], 0x1 == _0x44b1ae || _0x44b1ae > this.lastSlope || 0x1 < _0x44b1ae && this._checkTileDef(_0x5e4d9e, _0x44b1ae, _0x3079c7, _0x42bcea, _0x4ef563, _0x139903, _0x55d621, _0x1736d5, _0x506ed7, _0x135fac)) {
            if (0x1 < _0x44b1ae && _0x44b1ae <= this.lastSlope && _0x5e4d9e.collision.slope) break;
            _0x5e4d9e.collision.x = !0x0, _0x5e4d9e.tile.x = _0x44b1ae, _0x3079c7 = _0x5e4d9e.pos.x = _0x506ed7 * this.tilesize - _0x2dfdcd + _0x1a0dbf, _0x4ef563 = 0x0;
            break;
          }
        }
      }
      if (_0x2ce52a) {
        _0x2dfdcd = 0x0 < _0x2ce52a ? _0x1736d5 : 0x0, _0x2ce52a = 0x0 > _0x2ce52a ? this.tilesize : 0x0, _0x44b1ae = Math.max(Math.floor(_0x5e4d9e.pos.x / this.tilesize), 0x0), _0x1a0dbf = Math.min(Math.ceil((_0x5e4d9e.pos.x + _0x55d621) / this.tilesize), this.width), _0x135fac = Math.floor((_0x5e4d9e.pos.y + _0x2dfdcd) / this.tilesize), _0x168b47 = Math.floor((_0x42bcea + _0x2dfdcd) / this.tilesize);
        if (0x0 < _0x2c2074 || _0x135fac == _0x168b47 || 0x0 > _0x168b47 || _0x168b47 >= this.height) _0x168b47 = -0x1;
        if (0x0 <= _0x135fac && _0x135fac < this.height) {
          for (_0x506ed7 = _0x44b1ae; _0x506ed7 < _0x1a0dbf && !(-0x1 != _0x168b47 && (_0x44b1ae = this.data[_0x168b47][_0x506ed7], 0x1 < _0x44b1ae && _0x44b1ae <= this.lastSlope && this._checkTileDef(_0x5e4d9e, _0x44b1ae, _0x3079c7, _0x42bcea, _0x4ef563, _0x139903, _0x55d621, _0x1736d5, _0x506ed7, _0x168b47))); _0x506ed7++) if (_0x44b1ae = this.data[_0x135fac][_0x506ed7], 0x1 == _0x44b1ae || _0x44b1ae > this.lastSlope || 0x1 < _0x44b1ae && this._checkTileDef(_0x5e4d9e, _0x44b1ae, _0x3079c7, _0x42bcea, _0x4ef563, _0x139903, _0x55d621, _0x1736d5, _0x506ed7, _0x135fac)) {
            if (0x1 < _0x44b1ae && _0x44b1ae <= this.lastSlope && _0x5e4d9e.collision.slope) break;
            _0x5e4d9e.collision.y = !0x0, _0x5e4d9e.tile.y = _0x44b1ae, _0x5e4d9e.pos.y = _0x135fac * this.tilesize - _0x2dfdcd + _0x2ce52a;
            break;
          }
        }
      }
    },
    '_checkTileDef': function (_0x3fe56b, _0x128920, _0x1f74fd, _0x52e5bc, _0x127ffe, _0x21de3d, _0xf88a31, _0x474931, _0x41bdd0, _0x154d52) {
      var _0x2bae1f = this.tiledef[_0x128920];
      if (!_0x2bae1f) return !0x1;
      _0x128920 = (_0x2bae1f[0x2] - _0x2bae1f[0x0]) * this.tilesize;
      var _0xaa988a = (_0x2bae1f[0x3] - _0x2bae1f[0x1]) * this.tilesize,
        _0x479f3f = _0x2bae1f[0x4];
      _0xf88a31 = _0x1f74fd + _0x127ffe + (0x0 > _0xaa988a ? _0xf88a31 : 0x0) - (_0x41bdd0 + _0x2bae1f[0x0]) * this.tilesize, _0x474931 = _0x52e5bc + _0x21de3d + (0x0 < _0x128920 ? _0x474931 : 0x0) - (_0x154d52 + _0x2bae1f[0x1]) * this.tilesize;
      if (0x0 < _0x128920 * _0x474931 - _0xaa988a * _0xf88a31) {
        if (0x0 > _0x127ffe * -_0xaa988a + _0x21de3d * _0x128920) return _0x479f3f;
        _0x41bdd0 = Math.sqrt(_0x128920 * _0x128920 + _0xaa988a * _0xaa988a), _0x154d52 = _0xaa988a / _0x41bdd0, _0x41bdd0 = -_0x128920 / _0x41bdd0;
        var _0xdf0289 = _0xf88a31 * _0x154d52 + _0x474931 * _0x41bdd0,
          _0x2bae1f = _0x154d52 * _0xdf0289,
          _0xdf0289 = _0x41bdd0 * _0xdf0289;
        if (_0x2bae1f * _0x2bae1f + _0xdf0289 * _0xdf0289 >= _0x127ffe * _0x127ffe + _0x21de3d * _0x21de3d) return _0x479f3f || 0.5 > _0x128920 * (_0x474931 - _0x21de3d) - _0xaa988a * (_0xf88a31 - _0x127ffe);
        return _0x3fe56b.pos.x = _0x1f74fd + _0x127ffe - _0x2bae1f, _0x3fe56b.pos.y = _0x52e5bc + _0x21de3d - _0xdf0289, _0x3fe56b.collision.slope = {
          'x': _0x128920,
          'y': _0xaa988a,
          'nx': _0x154d52,
          'ny': _0x41bdd0
        }, !0x0;
      }
      return !0x1;
    }
  });
  var _0x4c1b08 = 0x1 / 0x3,
    _0x42b8f1 = 0x2 / 0x3;
  ig.CollisionMap.defaultTileDef = {
    0x5: [0x0, 0x1, 0x1, _0x42b8f1, !0x0],
    0x6: [0x0, _0x42b8f1, 0x1, _0x4c1b08, !0x0],
    0x7: [0x0, _0x4c1b08, 0x1, 0x0, !0x0],
    0x3: [0x0, 0x1, 0x1, 0.5, !0x0],
    0x4: [0x0, 0.5, 0x1, 0x0, !0x0],
    0x2: [0x0, 0x1, 0x1, 0x0, !0x0],
    0xa: [0.5, 0x1, 0x1, 0x0, !0x0],
    0x15: [0x0, 0x1, 0.5, 0x0, !0x0],
    0x20: [_0x42b8f1, 0x1, 0x1, 0x0, !0x0],
    0x2b: [_0x4c1b08, 0x1, _0x42b8f1, 0x0, !0x0],
    0x36: [0x0, 0x1, _0x4c1b08, 0x0, !0x0],
    0x1b: [0x0, 0x0, 0x1, _0x4c1b08, !0x0],
    0x1c: [0x0, _0x4c1b08, 0x1, _0x42b8f1, !0x0],
    0x1d: [0x0, _0x42b8f1, 0x1, 0x1, !0x0],
    0x19: [0x0, 0x0, 0x1, 0.5, !0x0],
    0x1a: [0x0, 0.5, 0x1, 0x1, !0x0],
    0x18: [0x0, 0x0, 0x1, 0x1, !0x0],
    0xb: [0x0, 0x0, 0.5, 0x1, !0x0],
    0x16: [0.5, 0x0, 0x1, 0x1, !0x0],
    0x21: [0x0, 0x0, _0x4c1b08, 0x1, !0x0],
    0x2c: [_0x4c1b08, 0x0, _0x42b8f1, 0x1, !0x0],
    0x37: [_0x42b8f1, 0x0, 0x1, 0x1, !0x0],
    0x10: [0x1, _0x4c1b08, 0x0, 0x0, !0x0],
    0x11: [0x1, _0x42b8f1, 0x0, _0x4c1b08, !0x0],
    0x12: [0x1, 0x1, 0x0, _0x42b8f1, !0x0],
    0xe: [0x1, 0.5, 0x0, 0x0, !0x0],
    0xf: [0x1, 0x1, 0x0, 0.5, !0x0],
    0xd: [0x1, 0x1, 0x0, 0x0, !0x0],
    0x8: [0.5, 0x1, 0x0, 0x0, !0x0],
    0x13: [0x1, 0x1, 0.5, 0x0, !0x0],
    0x1e: [_0x4c1b08, 0x1, 0x0, 0x0, !0x0],
    0x29: [_0x42b8f1, 0x1, _0x4c1b08, 0x0, !0x0],
    0x34: [0x1, 0x1, _0x42b8f1, 0x0, !0x0],
    0x26: [0x1, _0x42b8f1, 0x0, 0x1, !0x0],
    0x27: [0x1, _0x4c1b08, 0x0, _0x42b8f1, !0x0],
    0x28: [0x1, 0x0, 0x0, _0x4c1b08, !0x0],
    0x24: [0x1, 0.5, 0x0, 0x1, !0x0],
    0x25: [0x1, 0x0, 0x0, 0.5, !0x0],
    0x23: [0x1, 0x0, 0x0, 0x1, !0x0],
    0x9: [0x1, 0x0, 0.5, 0x1, !0x0],
    0x14: [0.5, 0x0, 0x0, 0x1, !0x0],
    0x1f: [0x1, 0x0, _0x42b8f1, 0x1, !0x0],
    0x2a: [_0x42b8f1, 0x0, _0x4c1b08, 0x1, !0x0],
    0x35: [_0x4c1b08, 0x0, 0x0, 0x1, !0x0],
    0xc: [0x0, 0x0, 0x1, 0x0, !0x1],
    0x17: [0x1, 0x1, 0x0, 0x1, !0x1],
    0x22: [0x1, 0x0, 0x1, 0x1, !0x1],
    0x2d: [0x0, 0x1, 0x0, 0x0, !0x1]
  }, ig.CollisionMap.staticNoCollision = {
    'trace': function (_0x283aa7, _0x25d7c1, _0x155a77, _0xc63861) {
      return {
        'collision': {
          'x': !0x1,
          'y': !0x1,
          'slope': !0x1
        },
        'pos': {
          'x': _0x283aa7 + _0x155a77,
          'y': _0x25d7c1 + _0xc63861
        },
        'tile': {
          'x': 0x0,
          'y': 0x0
        }
      };
    }
  };
}), ig.baked = !0x0, ig.module('impact.background-map').requires('impact.map', 'impact.image').defines(function () {
  ig.BackgroundMap = ig.Map.extend({
    'tiles': null,
    'scroll': {
      'x': 0x0,
      'y': 0x0
    },
    'distance': 0x1,
    'repeat': !0x1,
    'tilesetName': '',
    'foreground': !0x1,
    'enabled': !0x0,
    'preRender': !0x1,
    'preRenderedChunks': null,
    'chunkSize': 0x200,
    'debugChunks': !0x1,
    'anims': {},
    'init': function (_0x3b9528, _0x6ef8f0, _0x29677f) {
      this.parent(_0x3b9528, _0x6ef8f0), this.setTileset(_0x29677f);
    },
    'setTileset': function (_0x1d5641) {
      this.tilesetName = _0x1d5641 instanceof ig.Image ? _0x1d5641.path : _0x1d5641, this.tiles = new ig.Image(this.tilesetName), this.preRenderedChunks = null;
    },
    'setScreenPos': function (_0x56f4f8, _0x433870) {
      this.scroll.x = _0x56f4f8 / this.distance, this.scroll.y = _0x433870 / this.distance;
    },
    'preRenderMapToChunks': function () {
      var _0xb852dd = this.width * this.tilesize * ig.system.scale,
        _0x218c43 = this.height * this.tilesize * ig.system.scale;
      this.chunkSize = Math.min(Math.max(_0xb852dd, _0x218c43), this.chunkSize);
      var _0x4c17ab = Math.ceil(_0xb852dd / this.chunkSize),
        _0x3c70e8 = Math.ceil(_0x218c43 / this.chunkSize);
      this.preRenderedChunks = [];
      for (var _0x273f68 = 0x0; _0x273f68 < _0x3c70e8; _0x273f68++) {
        this.preRenderedChunks[_0x273f68] = [];
        for (var _0x3e9367 = 0x0; _0x3e9367 < _0x4c17ab; _0x3e9367++) this.preRenderedChunks[_0x273f68][_0x3e9367] = this.preRenderChunk(_0x3e9367, _0x273f68, _0x3e9367 == _0x4c17ab - 0x1 ? _0xb852dd - _0x3e9367 * this.chunkSize : this.chunkSize, _0x273f68 == _0x3c70e8 - 0x1 ? _0x218c43 - _0x273f68 * this.chunkSize : this.chunkSize);
      }
    },
    'preRenderChunk': function (_0x1f588b, _0x56f2bb, _0x4c9c02, _0x267970) {
      var _0x2eb9d8 = _0x4c9c02 / this.tilesize / ig.system.scale + 0x1,
        _0x2e69c0 = _0x267970 / this.tilesize / ig.system.scale + 0x1,
        _0x5d25f8 = _0x1f588b * this.chunkSize / ig.system.scale % this.tilesize,
        _0x54feb6 = _0x56f2bb * this.chunkSize / ig.system.scale % this.tilesize;
      _0x1f588b = Math.floor(_0x1f588b * this.chunkSize / this.tilesize / ig.system.scale);
      var _0x53c1e7 = Math.floor(_0x56f2bb * this.chunkSize / this.tilesize / ig.system.scale);
      _0x56f2bb = ig.$new('canvas'), _0x56f2bb.width = _0x4c9c02, _0x56f2bb.height = _0x267970, _0x56f2bb.retinaResolutionEnabled = !0x1, _0x267970 = _0x56f2bb.getContext('2d'), ig.System.scaleMode(_0x56f2bb, _0x267970), _0x4c9c02 = ig.system.context, ig.system.context = _0x267970;
      for (_0x267970 = 0x0; _0x267970 < _0x2eb9d8; _0x267970++) for (var _0x1584d6 = 0x0; _0x1584d6 < _0x2e69c0; _0x1584d6++) if (_0x267970 + _0x1f588b < this.width && _0x1584d6 + _0x53c1e7 < this.height) {
        var _0x33f934 = this.data[_0x1584d6 + _0x53c1e7][_0x267970 + _0x1f588b];
        _0x33f934 && this.tiles.drawTile(_0x267970 * this.tilesize - _0x5d25f8, _0x1584d6 * this.tilesize - _0x54feb6, _0x33f934 - 0x1, this.tilesize);
      }
      return ig.system.context = _0x4c9c02, _0x2eb9d8 = new Image(), _0x2eb9d8.src = _0x56f2bb.toDataURL(), _0x2eb9d8.width = _0x56f2bb.width, _0x2eb9d8.height = _0x56f2bb.height, _0x2eb9d8;
    },
    'draw': function () {
      this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled());
    },
    'drawPreRendered': function () {
      this.preRenderedChunks || this.preRenderMapToChunks();
      var _0x142a9f = ig.system.getDrawPos(this.scroll.x),
        _0x447003 = ig.system.getDrawPos(this.scroll.y);
      if (this.repeat) var _0x42eac7 = this.width * this.tilesize * ig.system.scale,
        _0x142a9f = (_0x142a9f % _0x42eac7 + _0x42eac7) % _0x42eac7,
        _0x42eac7 = this.height * this.tilesize * ig.system.scale,
        _0x447003 = (_0x447003 % _0x42eac7 + _0x42eac7) % _0x42eac7;
      var _0x42eac7 = Math.max(Math.floor(_0x142a9f / this.chunkSize), 0x0),
        _0x6aef08 = Math.max(Math.floor(_0x447003 / this.chunkSize), 0x0),
        _0x3293b8 = Math.ceil((_0x142a9f + ig.system.realWidth) / this.chunkSize),
        _0x5867eb = Math.ceil((_0x447003 + ig.system.realHeight) / this.chunkSize),
        _0x43caa6 = this.preRenderedChunks[0x0].length,
        _0x46d397 = this.preRenderedChunks.length;
      this.repeat || (_0x3293b8 = Math.min(_0x3293b8, _0x43caa6), _0x5867eb = Math.min(_0x5867eb, _0x46d397));
      for (var _0x2c5bc0 = 0x0, _0x36abf5 = _0x6aef08; _0x36abf5 < _0x5867eb; _0x36abf5++) {
        for (var _0x13855c = 0x0, _0xd3b5a8 = _0x42eac7; _0xd3b5a8 < _0x3293b8; _0xd3b5a8++) {
          var _0x22c923 = this.preRenderedChunks[_0x36abf5 % _0x46d397][_0xd3b5a8 % _0x43caa6],
            _0x1320b2 = -_0x142a9f + _0xd3b5a8 * this.chunkSize - _0x13855c,
            _0x3d55bf = -_0x447003 + _0x36abf5 * this.chunkSize - _0x2c5bc0;
          ig.system.context.drawImage(_0x22c923, _0x1320b2, _0x3d55bf), ig.Image.drawCount++, this.debugChunks && (ig.system.context.strokeStyle = '#f0f', ig.system.context.strokeRect(_0x1320b2, _0x3d55bf, this.chunkSize, this.chunkSize)), this.repeat && _0x22c923.width < this.chunkSize && _0x1320b2 + _0x22c923.width < ig.system.realWidth && (_0x13855c += this.chunkSize - _0x22c923.width, _0x36abf5 == _0x6aef08 && _0x3293b8++);
        }
        this.repeat && _0x22c923.height < this.chunkSize && _0x3d55bf + _0x22c923.height < ig.system.realHeight && (_0x2c5bc0 += this.chunkSize - _0x22c923.height, _0x5867eb++);
      }
    },
    'drawTiled': function () {
      for (var _0xbeb8dd = 0x0, _0x223cdf = null, _0x2a48ca = (this.scroll.x / this.tilesize).toInt(), _0x1354f8 = (this.scroll.y / this.tilesize).toInt(), _0x3bffb4 = this.scroll.x % this.tilesize, _0x2213cf = this.scroll.y % this.tilesize, _0x11522a = -_0x3bffb4 - this.tilesize, _0x3bffb4 = ig.system.width + this.tilesize - _0x3bffb4, _0xaa5faf = ig.system.height + this.tilesize - _0x2213cf, _0xf02e8d = -0x1, _0x2213cf = -_0x2213cf - this.tilesize; _0x2213cf < _0xaa5faf; _0xf02e8d++, _0x2213cf += this.tilesize) {
        var _0x3889a0 = _0xf02e8d + _0x1354f8;
        if (_0x3889a0 >= this.height || 0x0 > _0x3889a0) {
          if (!this.repeat) continue;
          _0x3889a0 = (_0x3889a0 % this.height + this.height) % this.height;
        }
        for (var _0x2e5cc4 = -0x1, _0x2bf2a3 = _0x11522a; _0x2bf2a3 < _0x3bffb4; _0x2e5cc4++, _0x2bf2a3 += this.tilesize) {
          _0xbeb8dd = _0x2e5cc4 + _0x2a48ca;
          if (_0xbeb8dd >= this.width || 0x0 > _0xbeb8dd) {
            if (!this.repeat) continue;
            _0xbeb8dd = (_0xbeb8dd % this.width + this.width) % this.width;
          }
          if (_0xbeb8dd = this.data[_0x3889a0][_0xbeb8dd]) (_0x223cdf = this.anims[_0xbeb8dd - 0x1]) ? _0x223cdf.draw(_0x2bf2a3, _0x2213cf) : this.tiles.drawTile(_0x2bf2a3, _0x2213cf, _0xbeb8dd - 0x1, this.tilesize);
        }
      }
    }
  });
}), ig.baked = !0x0, ig.module('impact.game').requires('impact.impact', 'impact.entity', 'impact.collision-map', 'impact.background-map').defines(function () {
  ig.Game = ig.Class.extend({
    'clearColor': '#000000',
    'gravity': 0x0,
    'screen': {
      'x': 0x0,
      'y': 0x0
    },
    '_rscreen': {
      'x': 0x0,
      'y': 0x0
    },
    'entities': [],
    'namedEntities': {},
    'collisionMap': ig.CollisionMap.staticNoCollision,
    'backgroundMaps': [],
    'backgroundAnims': {},
    'autoSort': !0x1,
    'sortBy': null,
    'cellSize': 0x40,
    '_deferredKill': [],
    '_levelToLoad': null,
    '_doSortEntities': !0x1,
    'staticInstantiate': function () {
      return this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX, ig.game = this, null;
    },
    'loadLevel': function (_0x3aa04e) {
      this.screen = {
        'x': 0x0,
        'y': 0x0
      }, this.entities = [], this.namedEntities = {};
      for (var _0x2960d2 = 0x0; _0x2960d2 < _0x3aa04e.entities.length; _0x2960d2++) {
        var _0x5b6d1a = _0x3aa04e.entities[_0x2960d2];
        this.spawnEntity(_0x5b6d1a.type, _0x5b6d1a.x, _0x5b6d1a.y, _0x5b6d1a.settings);
      }
      this.sortEntities(), this.collisionMap = ig.CollisionMap.staticNoCollision, this.backgroundMaps = [];
      for (_0x2960d2 = 0x0; _0x2960d2 < _0x3aa04e.layer.length; _0x2960d2++) if (_0x5b6d1a = _0x3aa04e.layer[_0x2960d2], 'collision' == _0x5b6d1a.name) this.collisionMap = new ig.CollisionMap(_0x5b6d1a.tilesize, _0x5b6d1a.data);else {
        var _0x38e069 = new ig.BackgroundMap(_0x5b6d1a.tilesize, _0x5b6d1a.data, _0x5b6d1a.tilesetName);
        _0x38e069.anims = this.backgroundAnims[_0x5b6d1a.tilesetName] || {}, _0x38e069.repeat = _0x5b6d1a.repeat, _0x38e069.distance = _0x5b6d1a.distance, _0x38e069.foreground = !!_0x5b6d1a.foreground, _0x38e069.preRender = !!_0x5b6d1a.preRender, _0x38e069.name = _0x5b6d1a.name, this.backgroundMaps.push(_0x38e069);
      }
      for (_0x2960d2 = 0x0; _0x2960d2 < this.entities.length; _0x2960d2++) this.entities[_0x2960d2].ready();
    },
    'loadLevelDeferred': function (_0x11c4d6) {
      this._levelToLoad = _0x11c4d6;
    },
    'getMapByName': function (_0xe7c25) {
      if ('collision' == _0xe7c25) return this.collisionMap;
      for (var _0x1fa715 = 0x0; _0x1fa715 < this.backgroundMaps.length; _0x1fa715++) if (this.backgroundMaps[_0x1fa715].name == _0xe7c25) return this.backgroundMaps[_0x1fa715];
      return null;
    },
    'getEntityByName': function (_0x4547c1) {
      return this.namedEntities[_0x4547c1];
    },
    'getEntitiesByType': function (_0x423888) {
      _0x423888 = 'string' === typeof _0x423888 ? ig.global[_0x423888] : _0x423888;
      for (var _0x4b01bb = [], _0x5a4411 = 0x0; _0x5a4411 < this.entities.length; _0x5a4411++) {
        var _0x70086d = this.entities[_0x5a4411];
        _0x70086d instanceof _0x423888 && !_0x70086d._killed && _0x4b01bb.push(_0x70086d);
      }
      return _0x4b01bb;
    },
    'spawnEntity': function (_0x526985, _0x231019, _0x3b615b, _0x216aa9) {
      var _0x1dd0ab = 'string' === typeof _0x526985 ? ig.global[_0x526985] : _0x526985;
      if (!_0x1dd0ab) throw "Can't spawn entity of type " + _0x526985;
      return _0x526985 = new _0x1dd0ab(_0x231019, _0x3b615b, _0x216aa9 || {}), this.entities.push(_0x526985), _0x526985.name && (this.namedEntities[_0x526985.name] = _0x526985), _0x526985;
    },
    'sortEntities': function () {
      this.entities.sort(this.sortBy);
    },
    'sortEntitiesDeferred': function () {
      this._doSortEntities = !0x0;
    },
    'removeEntity': function (_0x2304e1) {
      _0x2304e1.name && delete this.namedEntities[_0x2304e1.name], _0x2304e1._killed = !0x0, _0x2304e1.type = ig.Entity.TYPE.NONE, _0x2304e1.checkAgainst = ig.Entity.TYPE.NONE, _0x2304e1.collides = ig.Entity.COLLIDES.NEVER, this._deferredKill.push(_0x2304e1);
    },
    'run': function () {
      this.update(), this.draw();
    },
    'update': function () {
      this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null), this.updateEntities(), this.checkEntities();
      for (var _0x550f55 = 0x0; _0x550f55 < this._deferredKill.length; _0x550f55++) this._deferredKill[_0x550f55].erase(), this.entities.erase(this._deferredKill[_0x550f55]);
      this._deferredKill = [];
      if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !0x1;
      for (var _0x878ab in this.backgroundAnims) {
        var _0x550f55 = this.backgroundAnims[_0x878ab],
          _0x3eaf21;
        for (_0x3eaf21 in _0x550f55) _0x550f55[_0x3eaf21].update();
      }
    },
    'updateEntities': function () {
      for (var _0xf759bd = 0x0; _0xf759bd < this.entities.length; _0xf759bd++) {
        var _0x5a7e8a = this.entities[_0xf759bd];
        _0x5a7e8a._killed || _0x5a7e8a.update();
      }
    },
    'draw': function () {
      this.clearColor && ig.system.clear(this.clearColor), this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale, this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
      var _0x4d03ab;
      for (_0x4d03ab = 0x0; _0x4d03ab < this.backgroundMaps.length; _0x4d03ab++) {
        var _0x3c3910 = this.backgroundMaps[_0x4d03ab];
        if (_0x3c3910.foreground) break;
        _0x3c3910.setScreenPos(this.screen.x, this.screen.y), _0x3c3910.draw();
      }
      this.drawEntities();
      for (_0x4d03ab; _0x4d03ab < this.backgroundMaps.length; _0x4d03ab++) _0x3c3910 = this.backgroundMaps[_0x4d03ab], _0x3c3910.setScreenPos(this.screen.x, this.screen.y), _0x3c3910.draw();
    },
    'drawEntities': function () {
      for (var _0x11a52c = 0x0; _0x11a52c < this.entities.length; _0x11a52c++) this.entities[_0x11a52c].draw();
    },
    'checkEntities': function () {
      for (var _0x5ee23f = {}, _0x554c57 = 0x0; _0x554c57 < this.entities.length; _0x554c57++) {
        var _0x4c10ec = this.entities[_0x554c57];
        if (!(_0x4c10ec.type == ig.Entity.TYPE.NONE && _0x4c10ec.checkAgainst == ig.Entity.TYPE.NONE && _0x4c10ec.collides == ig.Entity.COLLIDES.NEVER)) {
          for (var _0x2cc074 = {}, _0x341fb3 = Math.floor(_0x4c10ec.pos.y / this.cellSize), _0xe2e9be = Math.floor((_0x4c10ec.pos.x + _0x4c10ec.size.x) / this.cellSize) + 0x1, _0x1f0e42 = Math.floor((_0x4c10ec.pos.y + _0x4c10ec.size.y) / this.cellSize) + 0x1, _0x546135 = Math.floor(_0x4c10ec.pos.x / this.cellSize); _0x546135 < _0xe2e9be; _0x546135++) for (var _0x1c4556 = _0x341fb3; _0x1c4556 < _0x1f0e42; _0x1c4556++) if (_0x5ee23f[_0x546135]) {
            if (_0x5ee23f[_0x546135][_0x1c4556]) {
              for (var _0x3f4eb5 = _0x5ee23f[_0x546135][_0x1c4556], _0x14b15f = 0x0; _0x14b15f < _0x3f4eb5.length; _0x14b15f++) _0x4c10ec.touches(_0x3f4eb5[_0x14b15f]) && !_0x2cc074[_0x3f4eb5[_0x14b15f].id] && (_0x2cc074[_0x3f4eb5[_0x14b15f].id] = !0x0, ig.Entity.checkPair(_0x4c10ec, _0x3f4eb5[_0x14b15f]));
              _0x3f4eb5.push(_0x4c10ec);
            } else _0x5ee23f[_0x546135][_0x1c4556] = [_0x4c10ec];
          } else _0x5ee23f[_0x546135] = {}, _0x5ee23f[_0x546135][_0x1c4556] = [_0x4c10ec];
        }
      }
    }
  }), ig.Game.SORT = {
    'Z_INDEX': function (_0x2b1ff4, _0x49a56e) {
      return _0x2b1ff4.zIndex - _0x49a56e.zIndex;
    },
    'POS_X': function (_0x4e2bf0, _0x5f21cb) {
      return _0x4e2bf0.pos.x + _0x4e2bf0.size.x - (_0x5f21cb.pos.x + _0x5f21cb.size.x);
    },
    'POS_Y': function (_0x3c0acd, _0x4dcc2b) {
      return _0x3c0acd.pos.y + _0x3c0acd.size.y - (_0x4dcc2b.pos.y + _0x4dcc2b.size.y);
    }
  };
}), ig.baked = !0x0, ig.module('plugins.patches.fps-limit-patch').requires('impact.system', 'impact.impact').defines(function () {
  ig.System.inject({
    'fps': 0x3c
  }), ig.system && (ig.system.fps = 0x3c), ig.normalizeVendorAttribute(window, 'requestAnimationFrame');
  if (window.requestAnimationFrame) {
    var _0x490f90 = 0x1,
      _0x310dab = {};
    window.ig.setAnimation = function (_0x3aff5e, _0x72be78) {
      var _0x31ead6 = _0x490f90++;
      _0x310dab[_0x31ead6] = !0x0;
      var _0x48e62a = 0x3e8 / 0x3c,
        _0x1abb34 = 0x3c,
        _0xcc8563 = 0x0,
        _0x38bc04 = 0x0,
        _0x1ec459 = 0x0,
        _0x3d6845 = 0x0,
        _0x41b057 = function () {
          _0x310dab[_0x31ead6] && (timestamp = Date.now(), _0x38bc04 = _0xcc8563, _0xcc8563 = timestamp, _0x3d6845 = _0xcc8563 - _0x38bc04, _0x1abb34 = 0.8 * _0x1abb34 + 0.2 * (0x3e8 / _0x3d6845), 0x3c < _0x1abb34 && 0x3f <= _0x1abb34 ? (_0x1ec459 = Math.min(Math.max(0x2 * _0x48e62a + _0x38bc04 - timestamp, 0x0), _0x48e62a), setTimeout(function () {
            window.requestAnimationFrame(_0x41b057, _0x72be78);
          }, _0x1ec459), _0x3aff5e(timestamp)) : (window.requestAnimationFrame(_0x41b057, _0x72be78), _0x3aff5e()));
        };
      return window.requestAnimationFrame(_0x41b057, _0x72be78), _0x31ead6;
    }, window.ig.clearAnimation = function (_0x408c19) {
      delete _0x310dab[_0x408c19];
    };
  } else window.ig.setAnimation = function (_0x267aa5) {
    return window.setInterval(_0x267aa5, 0x3e8 / 0x3c);
  }, window.ig.clearAnimation = function (_0x55cbb3) {
    window.clearInterval(_0x55cbb3);
  };
}), ig.baked = !0x0, ig.module('plugins.patches.timer-patch').requires('impact.timer').defines(function () {
  ig.Timer.step = function () {
    var _0xf22743 = Date.now(),
      _0x5df369 = (_0xf22743 - ig.Timer._last) / 0x3e8;
    0x0 > _0x5df369 && (_0x5df369 = 0x0), ig.Timer.time += Math.min(_0x5df369, ig.Timer.maxStep) * ig.Timer.timeScale, ig.Timer._last = _0xf22743;
  };
}), ig.baked = !0x0, ig.module('plugins.patches.user-agent-patch').requires('impact.impact').defines(function () {
  ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent), ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent), ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag, ig.ua.iOSgt5 = ig.ua.iOS && 0x5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[0x1]), ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent), ig.ua.Kindle = /Silk/i.test(navigator.userAgent), ig.ua.touchDevice = 'ontouchstart' in window || window.navigator.msMaxTouchPoints || window.navigator.maxTouchPoints, ig.ua.is_mac = 'MacIntel' === navigator.platform, ig.ua.iOS = ig.ua.touchDevice && ig.ua.is_mac || ig.ua.iOS, ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent);
}), ig.baked = !0x0, ig.module('plugins.patches.webkit-image-smoothing-patch').defines(function () {
  ig.System && (ig.System.SCALE = {
    'CRISP': function (_0x94f267, _0x36f57c) {
      _0x36f57c.imageSmoothingEnabled = _0x36f57c.msImageSmoothingEnabled = _0x36f57c.mozImageSmoothingEnabled = _0x36f57c.oImageSmoothingEnabled = !0x1, _0x94f267.style.imageRendering = '-moz-crisp-edges', _0x94f267.style.imageRendering = '-o-crisp-edges', _0x94f267.style.imageRendering = '-webkit-optimize-contrast', _0x94f267.style.imageRendering = 'crisp-edges', _0x94f267.style.msInterpolationMode = 'nearest-neighbor';
    },
    'SMOOTH': function (_0x2a90f3, _0x1651a2) {
      _0x1651a2.imageSmoothingEnabled = _0x1651a2.msImageSmoothingEnabled = _0x1651a2.oImageSmoothingEnabled = !0x0, _0x2a90f3.style.imageRendering = '', _0x2a90f3.style.msInterpolationMode = '';
    }
  }, ig.System.scaleMode = ig.System.SCALE.SMOOTH);
}), ig.baked = !0x0, ig.module('plugins.patches.windowfocus-onMouseDown-patch').requires('impact.input').defines(function () {
  var _0x5f09bc = !0x1;
  try {
    _0x5f09bc = window.self !== window.top, !0x1 === _0x5f09bc && (_0x5f09bc = 0x0 < window.frames.length);
  } catch (_0x51c9fa) {
    _0x5f09bc = !0x0;
  }
  ig.Input.inject({
    'keydown': function (_0x1f1e70) {
      var _0x4ad2e3 = _0x1f1e70.target.tagName;
      if (!('INPUT' == _0x4ad2e3 || 'TEXTAREA' == _0x4ad2e3)) {
        if (_0x4ad2e3 = 'keydown' == _0x1f1e70.type ? _0x1f1e70.keyCode : 0x2 == _0x1f1e70.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, _0x5f09bc && 0x0 > _0x4ad2e3 && window.focus(), ('touchstart' == _0x1f1e70.type || 'mousedown' == _0x1f1e70.type) && this.mousemove(_0x1f1e70), _0x4ad2e3 = this.bindings[_0x4ad2e3]) this.actions[_0x4ad2e3] = !0x0, this.locks[_0x4ad2e3] || (this.presses[_0x4ad2e3] = !0x0, this.locks[_0x4ad2e3] = !0x0), _0x1f1e70.stopPropagation(), _0x1f1e70.preventDefault();
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.patches.input-patch').requires('impact.input').defines(function () {
  ig.Input.inject({
    'initMouse': function () {
      this.parent(), ig.system.canvas.addEventListener('mouseleave', this.mouseleave.bind(this), !0x1);
    },
    'mousemove': function (_0x1f10dd) {
      this.parent(_0x1f10dd);
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x5b318e) {}
    },
    'mouseleave': function () {
      this.clearState('click');
    },
    'keyup': function (_0x4577f8) {
      this.parent(_0x4577f8);
      if (ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x3f5db0) {}
    },
    'clearState': function (_0x3f1489) {
      this.actions[_0x3f1489] = !0x1;
    },
    'clearAllState': function () {
      for (var _0x28ff5e in this.actions) this.clearState(_0x28ff5e);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.data.vector').defines(function () {
  Vector2 = function (_0x4df41f, _0x2391f7) {
    this.x = _0x4df41f || 0x0, this.y = _0x2391f7 || 0x0;
  }, Vector2.prototype = {
    'valType': 'number',
    'neg': function () {
      return this.x = -this.x, this.y = -this.y, this;
    },
    'row': function (_0x398d1f) {
      return typeof _0x398d1f === this.valType && (this.y = _0x398d1f), this.y;
    },
    'col': function (_0x31cf54) {
      return typeof _0x31cf54 === this.valType && (this.x = _0x31cf54), this.x;
    },
    'add': function (_0x3d9783) {
      return _0x3d9783 instanceof Vector2 ? (this.x += _0x3d9783.x, this.y += _0x3d9783.y) : (this.x += _0x3d9783, this.y += _0x3d9783), this;
    },
    'sub': function (_0x212806) {
      return _0x212806 instanceof Vector2 ? (this.x -= _0x212806.x, this.y -= _0x212806.y) : (this.x -= _0x212806, this.y -= _0x212806), this;
    },
    'mul': function (_0x466718) {
      return _0x466718 instanceof Vector2 ? (this.x *= _0x466718.x, this.y *= _0x466718.y) : (this.x *= _0x466718, this.y *= _0x466718), this;
    },
    'div': function (_0x15a972) {
      return _0x15a972 instanceof Vector2 ? (0x0 != _0x15a972.x && (this.x /= _0x15a972.x), 0x0 != _0x15a972.y && (this.y /= _0x15a972.y)) : 0x0 != _0x15a972 && (this.x /= _0x15a972, this.y /= _0x15a972), this;
    },
    'equals': function (_0x177652) {
      return this.x == _0x177652.x && this.y == _0x177652.y;
    },
    'dot': function (_0x3e95f6) {
      return this.x * _0x3e95f6.x + this.y * _0x3e95f6.y;
    },
    'cross': function (_0x92640d) {
      return this.x * _0x92640d.y - this.y * _0x92640d.x;
    },
    'length': function () {
      return Math.sqrt(this.dot(this));
    },
    'norm': function () {
      return this.div(this.length());
    },
    'min': function () {
      return Math.min(this.x, this.y);
    },
    'max': function () {
      return Math.max(this.x, this.y);
    },
    'toAngles': function () {
      return -Math.atan2(-this.y, this.x);
    },
    'angleTo': function (_0x2e103e) {
      return Math.acos(this.dot(_0x2e103e) / (this.length() * _0x2e103e.length()));
    },
    'toArray': function (_0x5ce1d1) {
      return [this.x, this.y].slice(0x0, _0x5ce1d1 || 0x2);
    },
    'clone': function () {
      return new Vector2(this.x, this.y);
    },
    'set': function (_0x39424d, _0x5a2026) {
      return this.x = _0x39424d, this.y = _0x5a2026, this;
    },
    'unit': function () {
      var _0x1925fc = this.length();
      if (0x0 < _0x1925fc) return new Vector2(this.x / _0x1925fc, this.y / _0x1925fc);
      throw "Divide by 0 error in unitVector function of vector:" + this;
    },
    'turnRight': function () {
      var _0x299622 = this.x;
      return this.x = -this.y, this.y = _0x299622, this;
    },
    'turnLeft': function () {
      var _0x572b70 = this.x;
      return this.x = this.y, this.y = -_0x572b70, this;
    },
    'rotate': function (_0x23a6a3) {
      var _0x9b4b36 = this.clone();
      return this.x = _0x9b4b36.x * Math.cos(_0x23a6a3) - _0x9b4b36.y * Math.sin(_0x23a6a3), this.y = _0x9b4b36.x * Math.sin(_0x23a6a3) + _0x9b4b36.y * Math.cos(_0x23a6a3), this;
    }
  }, Vector2.negative = function (_0x1c8fa7) {
    return new Vector2(-_0x1c8fa7.x, -_0x1c8fa7.y);
  }, Vector2.add = function (_0x44a72d, _0x2e9675) {
    return _0x2e9675 instanceof Vector2 ? new Vector2(_0x44a72d.x + _0x2e9675.x, _0x44a72d.y + _0x2e9675.y) : new Vector2(_0x44a72d.x + _0x2e9675, _0x44a72d.y + _0x2e9675);
  }, Vector2.subtract = function (_0x47c03e, _0x543580) {
    return _0x543580 instanceof Vector2 ? new Vector2(_0x47c03e.x - _0x543580.x, _0x47c03e.y - _0x543580.y) : new Vector2(_0x47c03e.x - _0x543580, _0x47c03e.y - _0x543580);
  }, Vector2.multiply = function (_0x59e461, _0x329aa1) {
    return _0x329aa1 instanceof Vector2 ? new Vector2(_0x59e461.x * _0x329aa1.x, _0x59e461.y * _0x329aa1.y) : new Vector2(_0x59e461.x * _0x329aa1, _0x59e461.y * _0x329aa1);
  }, Vector2.divide = function (_0x290f7b, _0x31e197) {
    return _0x31e197 instanceof Vector2 ? new Vector2(_0x290f7b.x / _0x31e197.x, _0x290f7b.y / _0x31e197.y) : new Vector2(_0x290f7b.x / _0x31e197, _0x290f7b.y / _0x31e197);
  }, Vector2.equals = function (_0x287093, _0x891f50) {
    return _0x287093.x == _0x891f50.x && _0x287093.y == _0x891f50.y;
  }, Vector2.dot = function (_0x2a9b1a, _0x4e421b) {
    return _0x2a9b1a.x * _0x4e421b.x + _0x2a9b1a.y * _0x4e421b.y;
  }, Vector2.cross = function (_0xdd7b3e, _0x1f246c) {
    return _0xdd7b3e.x * _0x1f246c.y - _0xdd7b3e.y * _0x1f246c.x;
  };
}), ig.baked = !0x0, ig.module('plugins.data.color-rgb').defines(function () {
  ColorRGB = function (_0x54ba13, _0x72b06e, _0x4dc165, _0x1a8620) {
    this.r = _0x54ba13 || 0x0, this.g = _0x72b06e || 0x0, this.b = _0x4dc165 || 0x0, this.a = _0x1a8620 || 0x0;
  }, ColorRGB.prototype = {
    'setRandomColor': function () {
      this.r = Math.round(0xff * Math.random()), this.g = Math.round(0xff * Math.random()), this.b = Math.round(0xff * Math.random());
    },
    'getStyle': function () {
      return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
    },
    'getHex': function () {
      for (var _0x5863a5 = this.r.toString(0x10), _0xdb57cb = this.g.toString(0x10), _0x1be1b0 = this.b.toString(0x10); 0x2 > _0x5863a5.length;) _0x5863a5 = '0' + _0x5863a5;
      for (; 0x2 > _0xdb57cb.length;) _0xdb57cb = '0' + _0xdb57cb;
      for (; 0x2 > _0x1be1b0.length;) _0x1be1b0 = '0' + _0x1be1b0;
      return '#' + _0x5863a5 + _0xdb57cb + _0x1be1b0;
    },
    'getInvertedColor': function () {
      return new ColorRGB(0xff - this.r, 0xff - this.g, 0xff - this.b, 0xff - this.a);
    },
    'clone': function () {
      return new ColorRGB(this.r, this.g, this.b, this.a);
    }
  };
}), ig.baked = !0x0, ig.module('plugins.font.font-info').requires('impact.impact').defines(function () {
  ig.FontInfo = ig.Class.extend({
    'fonts': [{
      'name': 'montserrat',
      'source': 'media/fonts/montserrat'
    }, {
      'name': 'robotoBlack',
      'source': 'media/fonts/roboto-black'
    }, {
      'name': 'robotoBold',
      'source': 'media/fonts/roboto-bold'
    }, {
      'name': 'segoe',
      'source': 'media/fonts/segoe'
    }],
    'init': function () {
      this.registerCssFont();
    },
    'registerCssFont': function () {
      if (0x0 < this.fonts.length) {
        var _0x449e22 = document.createElement('style');
        _0x449e22.type = 'text/css';
        for (var _0x461e2a = '', _0x523c2f = 0x0; _0x523c2f < this.fonts.length; _0x523c2f++) var _0x25702c = this.fonts[_0x523c2f], _0x461e2a = _0x461e2a + ("@font-face {font-family: '" + _0x25702c.name + "';src: url('" + _0x25702c.source + ".eot');src: url('" + _0x25702c.source + ".eot?#iefix') format('embedded-opentype'),url('" + _0x25702c.source + ".woff2') format('woff2'),url('" + _0x25702c.source + ".woff') format('woff'),url('" + _0x25702c.source + ".ttf') format('truetype'),url('" + _0x25702c.source + ".svg#svgFontName') format('svg')}");
        _0x449e22.appendChild(document.createTextNode(_0x461e2a)), document.head.appendChild(_0x449e22);
      }
    },
    'isValid': function () {
      for (var _0x474971 = 0x0; _0x474971 < this.fonts.length; _0x474971++) if (!this._isValidName(this.fonts[_0x474971].source)) return !0x1;
      return !0x0;
    },
    '_isValidName': function (_0x1b15b9) {
      return -0x1 == _0x1b15b9.search(/^[a-z0-9-\/]+$/) ? !0x1 : !0x0;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.font.font-loader').requires('impact.impact', 'plugins.font.font-info', 'impact.loader').defines(function () {
  ig.FontLoader = ig.Class.extend({
    'fontInfo': new ig.FontInfo(),
    'onload': !0x1,
    'onerror': !0x1,
    'init': function (_0x5b492e, _0x14343c) {
      this.onload = _0x5b492e, this.onerror = _0x14343c;
    },
    'load': function () {
      this.fontInfo.isValid() ? this._loadByLib() : console.error("Only lowercased alphanumeric and dash are allowed for font file name!. Please check the font path");
    },
    '_loadByLib': function () {
      for (var _0x86db9 = [], _0xe01127 = 0x0; _0xe01127 < this.fontInfo.fonts.length; _0xe01127++) {
        var _0x10dd46 = new FontFaceObserver(this.fontInfo.fonts[_0xe01127].name);
        _0x86db9.push(_0x10dd46.load());
      }
      Promise.all(_0x86db9).then(this.onload)['catch'](this.onerror);
    }
  }), ig.Loader.inject({
    'parentLoad': !0x1,
    'load': function () {
      this.parentLoad = this.parent, new ig.FontLoader(this.onFontLoad.bind(this), this.onFontError.bind(this)).load();
    },
    'onFontLoad': function () {
      this.parentLoad();
    },
    'onFontError': function () {
      console.error("Font is not loaded"), this.parentLoad();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.dom-handler').defines(function () {
  ig.DomHandler = ig.Class.extend({
    'version': '1.1.2',
    'JQUERYAVAILABLE': !0x1,
    'init': function () {
      this.JQUERYAVAILABLE = this._jqueryAvailable();
    },
    '_jqueryAvailable': function () {
      return 'undefined' !== typeof jQuery;
    },
    'addEvent': function (_0x37bb6d, _0x537ae0, _0xdd2aba, _0x3834f4) {
      if (this.JQUERYAVAILABLE) _0x37bb6d.on(_0x537ae0, _0xdd2aba);else _0x37bb6d.addEventListener(_0x537ae0, _0xdd2aba, _0x3834f4);
    },
    'create': function (_0x25ca2f) {
      return this.JQUERYAVAILABLE ? $('<' + _0x25ca2f + '>') : ig.$new(_0x25ca2f);
    },
    'getElementByClass': function (_0x804b6e) {
      return this.JQUERYAVAILABLE ? $('.' + _0x804b6e) : document.getElementsByClassName(_0x804b6e);
    },
    'getElementById': function (_0x77a3a7) {
      return this.JQUERYAVAILABLE ? 0x0 < $(_0x77a3a7).length ? $(_0x77a3a7) : null : ig.$(_0x77a3a7);
    },
    'appendChild': function (_0x431ba1, _0x243d0d) {
      this.JQUERYAVAILABLE ? _0x431ba1.append(_0x243d0d) : _0x431ba1.appendChild(_0x243d0d);
    },
    'appendToBody': function (_0x7d963d) {
      this.JQUERYAVAILABLE ? $('body').append(_0x7d963d) : document.body.appendChild(_0x7d963d);
    },
    'appendToHead': function (_0x4fc8fb) {
      this.JQUERYAVAILABLE ? $('head').append(_0x4fc8fb) : document.head.appendChild(_0x4fc8fb);
    },
    'removeChild': function (_0x30a067, _0x57418d) {
      this.JQUERYAVAILABLE ? _0x30a067.remove(_0x57418d) : _0x30a067.removeChild(_0x57418d);
    },
    'removeFromBody': function (_0x4586d1) {
      this.JQUERYAVAILABLE ? $(_0x4586d1).remove() : document.body.removeChild(_0x4586d1);
    },
    'removeFromHead': function (_0x364075) {
      this.JQUERYAVAILABLE ? $(_0x364075).remove() : document.head.removeChild(_0x364075);
    },
    'text': function (_0xf84b5d, _0x58e646) {
      this.JQUERYAVAILABLE ? _0xf84b5d.text(_0x58e646) : _0xf84b5d.innerText = _0x58e646;
    },
    'val': function (_0x3f3a16, _0x451a5c) {
      this.JQUERYAVAILABLE ? _0x3f3a16.val(_0x451a5c) : _0x3f3a16.value = _0x451a5c;
    },
    'getVal': function (_0x4634a7) {
      return this.JQUERYAVAILABLE ? _0x4634a7.val() : _0x4634a7.value;
    },
    'getAttr': function (_0x191acc, _0x3dd99b) {
      return this.JQUERYAVAILABLE ? _0x191acc.attr(_0x3dd99b) : _0x191acc.getAttribute(_0x3dd99b);
    },
    'getText': function (_0x2ef29f) {
      return this.JQUERYAVAILABLE ? _0x2ef29f.text() : _0x2ef29f.innerText;
    },
    'html': function (_0x523972, _0x379b95) {
      this.JQUERYAVAILABLE ? _0x523972.html(_0x379b95) : _0x523972.innerHTML = _0x379b95;
    },
    'resize': function (_0x3d2b16, _0x47e8c3, _0x8a3a14) {
      if (this.JQUERYAVAILABLE) _0x3d2b16.width(_0x47e8c3.toFixed(0x2)), _0x3d2b16.height(_0x8a3a14.toFixed(0x2));else {
        var _0xda0fab = _0x3d2b16.style.visibility;
        _0x47e8c3 = 'width:' + _0x47e8c3.toFixed(0x2) + "px; height:" + _0x8a3a14.toFixed(0x2) + 'px;', this.attr(_0x3d2b16, 'style', _0x47e8c3), _0x3d2b16.style.visibility = _0xda0fab;
      }
    },
    'resizeOffsetLeft': function (_0xfd8ed0, _0x1ddb8b, _0x484ac3, _0x48936d) {
      if (this.JQUERYAVAILABLE) _0xfd8ed0.width(_0x1ddb8b.toFixed(0x2)), _0xfd8ed0.height(_0x484ac3.toFixed(0x2)), _0xfd8ed0.css('left', _0x48936d);else {
        var _0x16be48 = _0xfd8ed0.style.visibility;
        _0x1ddb8b = 'width:' + _0x1ddb8b.toFixed(0x2) + "px; height:" + _0x484ac3.toFixed(0x2) + "px; left: " + _0x48936d.toFixed(0x2) + 'px;', this.attr(_0xfd8ed0, 'style', _0x1ddb8b), _0xfd8ed0.style.visibility = _0x16be48;
      }
    },
    'resizeOffset': function (_0x1421c1, _0x2e4652, _0xbe3d0c, _0x3ad878, _0x49614f) {
      if (this.JQUERYAVAILABLE) _0x1421c1.width(_0x2e4652.toFixed(0x2)), _0x1421c1.height(_0xbe3d0c.toFixed(0x2)), _0x1421c1.css('left', _0x3ad878), _0x1421c1.css('top', _0x49614f);else {
        var _0x586f2d = _0x1421c1.style.visibility;
        _0x2e4652 = 'width:' + _0x2e4652.toFixed(0x2) + "px; height:" + _0xbe3d0c.toFixed(0x2) + "px; left: " + _0x3ad878.toFixed(0x2) + "px; top: " + _0x49614f.toFixed(0x2) + 'px;', this.attr(_0x1421c1, 'style', _0x2e4652), _0x1421c1.style.visibility = _0x586f2d;
      }
    },
    'css': function (_0x4758ba, _0x3a5783) {
      if (this.JQUERYAVAILABLE) _0x4758ba.css(_0x3a5783);else {
        var _0x4433bd = '',
          _0x4228be;
        for (_0x4228be in _0x3a5783) _0x4433bd += _0x4228be + ':' + _0x3a5783[_0x4228be] + ';';
        this.attr(_0x4758ba, 'style', _0x4433bd);
      }
    },
    'getOffsets': function (_0x101cbe) {
      return this.JQUERYAVAILABLE ? (_0x101cbe = _0x101cbe.offset(), {
        'left': _0x101cbe.left,
        'top': _0x101cbe.top
      }) : {
        'left': _0x101cbe.offsetLeft,
        'top': _0x101cbe.offsetTop
      };
    },
    'attr': function (_0x11ec05, _0x18d075, _0x19a25a) {
      if ('undefined' === typeof _0x19a25a) return this.JQUERYAVAILABLE ? _0x11ec05.attr(_0x18d075) : _0x11ec05.getAttribute(_0x18d075);
      this.JQUERYAVAILABLE ? _0x11ec05.attr(_0x18d075, _0x19a25a) : _0x11ec05.setAttribute(_0x18d075, _0x19a25a);
    },
    'show': function (_0x29415c) {
      _0x29415c && 'undefined' !== typeof _0x29415c && (this.JQUERYAVAILABLE ? (_0x29415c.show(), _0x29415c.css('visibility', 'visible')) : _0x29415c && (_0x29415c.style ? _0x29415c.style.visibility = 'visible' : _0x29415c[0x0] && (_0x29415c[0x0].style.visibility = 'visible')));
    },
    'hide': function (_0x383497) {
      _0x383497 && 'undefined' !== typeof _0x383497 && (this.JQUERYAVAILABLE ? (_0x383497.hide(), _0x383497.css('visibility', 'hidden')) : _0x383497 && (_0x383497.style ? _0x383497.style.visibility = 'hidden' : _0x383497[0x0] && (_0x383497[0x0].style.visibility = 'hidden')));
    },
    'getQueryVariable': function (_0x529782) {
      for (var _0x1ddf76 = window.location.search.substring(0x1).split('&'), _0x40cf0b = 0x0; _0x40cf0b < _0x1ddf76.length; _0x40cf0b++) {
        var _0x4483a6 = _0x1ddf76[_0x40cf0b].match(/([^=]+?)=(.+)/);
        if (_0x4483a6 && decodeURIComponent(_0x4483a6[0x1]) == _0x529782) return decodeURIComponent(_0x4483a6[0x2]);
      }
    },
    'forcedDeviceDetection': function () {
      var _0x114543 = this.getQueryVariable('device');
      if (_0x114543) switch (_0x114543) {
        case 'mobile':
          console.log("serving mobile version ..."), ig.ua.mobile = !0x0;
          break;
        case 'desktop':
          console.log("serving desktop version ..."), ig.ua.mobile = !0x1;
          break;
        default:
          console.log("serving universal version ...");
      } else console.log("serving universal version ...");
    },
    'forcedDeviceRotation': function () {
      var _0x332b41 = this.getQueryVariable('force-rotate');
      if (_0x332b41) switch (_0x332b41) {
        case 'portrait':
          console.log("force rotate to portrait"), window.orientation = 0x0;
          break;
        case 'landscape':
          console.log("force rotate to horizontal"), window.orientation = 0x5a;
          break;
        default:
          alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0x0;
      }
    },
    'setZIndex': function (_0x213510, _0x37e344) {
      this.JQUERYAVAILABLE ? _0x213510.css('zIndex', _0x37e344) : _0x213510 && (_0x213510.style ? _0x213510.style.zIndex = _0x37e344 : _0x213510[0x0] && (_0x213510[0x0].style.zIndex = _0x37e344));
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.size-handler').requires('plugins.data.vector').defines(function () {
  ig.SizeHandler = ig.Class.extend({
    'portraitMode': !0x0,
    'disableStretchToFitOnMobileFlag': !0x0,
    'enableStretchToFitOnAntiPortraitModeFlag': !0x0,
    'enableScalingLimitsOnMobileFlag': !0x1,
    'minScalingOnMobile': 0x0,
    'maxScalingOnMobile': 0x1,
    'enableStretchToFitOnDesktopFlag': !0x1,
    'enableScalingLimitsOnDesktopFlag': !0x1,
    'minScalingOnDesktop': 0x0,
    'maxScalingOnDesktop': 0x1,
    'desktop': {
      'actualSize': new Vector2(window.innerWidth, window.innerHeight),
      'actualResolution': new Vector2(0x640, 0x640)
    },
    'mobile': {
      'actualSize': new Vector2(window.innerWidth, window.innerHeight),
      'actualResolution': new Vector2(0x640, 0x640)
    },
    'windowSize': new Vector2(window.innerWidth, window.innerHeight),
    'scaleRatioMultiplier': new Vector2(0x1, 0x1),
    'sizeRatio': new Vector2(0x1, 0x1),
    'scale': 0x1,
    'domHandler': null,
    'dynamicClickableEntityDivs': {},
    'coreDivsToResize': ['#canvas', '#play', '#orientate'],
    'adsToResize': {
      'MobileAdInGamePreroll': {
        'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 0x14
      },
      'MobileAdInGameEnd': {
        'box-width': _SETTINGS.Ad.Mobile.End.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.End.Height + 0x14
      },
      'MobileAdInGamePreroll2': {
        'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 0x14
      },
      'MobileAdInGameEnd2': {
        'box-width': _SETTINGS.Ad.Mobile.End.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.End.Height + 0x14
      },
      'MobileAdInGamePreroll3': {
        'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 0x14
      },
      'MobileAdInGameEnd3': {
        'box-width': _SETTINGS.Ad.Mobile.End.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.End.Height + 0x14
      }
    },
    'init': function (_0x12b1b8) {
      this.domHandler = _0x12b1b8;
      if ('undefined' === typeof _0x12b1b8) throw "undefined Dom Handler for Size Handler";
      this.sizeCalcs(), this.eventListenerSetup(), this.samsungFix();
    },
    'sizeCalcs': function () {
      this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
      if (ig.ua.mobile) {
        this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
        var _0x8d30a5 = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
        this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / _0x8d30a5.x, this.mobile.actualSize.y / _0x8d30a5.y);
        if (this.disableStretchToFitOnMobileFlag) {
          var _0x1906a1 = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
          this.enableScalingLimitsOnMobileFlag && (_0x1906a1 = _0x1906a1.limit(this.minScalingOnMobile, this.maxScalingOnMobile)), this.mobile.actualSize.x = _0x8d30a5.x * _0x1906a1, this.mobile.actualSize.y = _0x8d30a5.y * _0x1906a1, this.scaleRatioMultiplier.x = _0x1906a1, this.scaleRatioMultiplier.y = _0x1906a1;
        } else this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 0x1, this.scaleRatioMultiplier.y = 0x1;
      } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), _0x8d30a5 = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / _0x8d30a5.x, this.desktop.actualSize.y / _0x8d30a5.y), this.enableStretchToFitOnDesktopFlag ? (this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 0x1, this.scaleRatioMultiplier.y = 0x1) : (_0x1906a1 = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.enableScalingLimitsOnDesktopFlag && (_0x1906a1 = _0x1906a1.limit(this.minScalingOnDesktop, this.maxScalingOnDesktop)), this.desktop.actualSize.x = _0x8d30a5.x * _0x1906a1, this.desktop.actualSize.y = _0x8d30a5.y * _0x1906a1, this.scaleRatioMultiplier.x = _0x1906a1, this.scaleRatioMultiplier.y = _0x1906a1);
    },
    'resizeLayers': function () {
      for (var _0x4cef43 = 0x0; _0x4cef43 < this.coreDivsToResize.length; _0x4cef43++) {
        var _0x2dae1c = ig.domHandler.getElementById(this.coreDivsToResize[_0x4cef43]);
        if (ig.ua.mobile) {
          if (this.disableStretchToFitOnMobileFlag) {
            var _0x254371 = Math.floor(ig.sizeHandler.windowSize.x / 0x2 - ig.sizeHandler.mobile.actualSize.x / 0x2),
              _0x1a0911 = Math.floor(ig.sizeHandler.windowSize.y / 0x2 - ig.sizeHandler.mobile.actualSize.y / 0x2);
            0x0 > _0x254371 && (_0x254371 = 0x0), 0x0 > _0x1a0911 && (_0x1a0911 = 0x0), ig.domHandler.resizeOffset(_0x2dae1c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y), _0x254371, _0x1a0911);
            var _0x18d0a4 = !0x1;
            if (this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) {
              if (this.enableStretchToFitOnAntiPortraitModeFlag) ig.domHandler.resizeOffset(_0x2dae1c, Math.floor(window.innerWidth), Math.floor(window.innerHeight), 0x0, 0x0);else {
                var _0x18d0a4 = new Vector2(window.innerWidth / this.mobile.actualResolution.y, window.innerHeight / this.mobile.actualResolution.x),
                  _0x254371 = Math.min(_0x18d0a4.x, _0x18d0a4.y),
                  _0x18d0a4 = this.mobile.actualResolution.y * _0x254371,
                  _0x2da61b = this.mobile.actualResolution.x * _0x254371,
                  _0x254371 = Math.floor(ig.sizeHandler.windowSize.x / 0x2 - _0x18d0a4 / 0x2),
                  _0x1a0911 = Math.floor(ig.sizeHandler.windowSize.y / 0x2 - _0x2da61b / 0x2);
                0x0 > _0x254371 && (_0x254371 = 0x0), 0x0 > _0x1a0911 && (_0x1a0911 = 0x0), ig.domHandler.resizeOffset(_0x2dae1c, Math.floor(_0x18d0a4), Math.floor(_0x2da61b), _0x254371, _0x1a0911);
              }
            }
          } else ig.domHandler.resize(_0x2dae1c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y));
        } else this.enableStretchToFitOnDesktopFlag ? ig.domHandler.resize(_0x2dae1c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y)) : (_0x254371 = Math.floor(ig.sizeHandler.windowSize.x / 0x2 - ig.sizeHandler.desktop.actualSize.x / 0x2), _0x1a0911 = Math.floor(ig.sizeHandler.windowSize.y / 0x2 - ig.sizeHandler.desktop.actualSize.y / 0x2), 0x0 > _0x254371 && (_0x254371 = 0x0), 0x0 > _0x1a0911 && (_0x1a0911 = 0x0), ig.domHandler.resizeOffset(_0x2dae1c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), _0x254371, _0x1a0911));
      }
      for (var _0x2cfb21 in this.adsToResize) _0x4cef43 = ig.domHandler.getElementById('#' + _0x2cfb21), _0x2dae1c = ig.domHandler.getElementById('#' + _0x2cfb21 + '-Box'), _0x18d0a4 = (window.innerWidth - this.adsToResize[_0x2cfb21]['box-width']) / 0x2 + 'px', _0x254371 = (window.innerHeight - this.adsToResize[_0x2cfb21]['box-height']) / 0x2 + 'px', _0x4cef43 && ig.domHandler.css(_0x4cef43, {
        'width': window.innerWidth,
        'height': window.innerHeight
      }), _0x2dae1c && ig.domHandler.css(_0x2dae1c, {
        'left': _0x18d0a4,
        'top': _0x254371
      });
      _0x4cef43 = ig.domHandler.getElementById('#canvas'), _0x2dae1c = ig.domHandler.getOffsets(_0x4cef43), _0x4cef43 = _0x2dae1c.left, _0x2dae1c = _0x2dae1c.top, _0x18d0a4 = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      for (_0x2cfb21 in this.dynamicClickableEntityDivs) {
        _0x254371 = ig.domHandler.getElementById('#' + _0x2cfb21);
        if (ig.ua.mobile) {
          var _0x2da61b = this.dynamicClickableEntityDivs[_0x2cfb21].entity_pos_x,
            _0x4b7036 = this.dynamicClickableEntityDivs[_0x2cfb21].entity_pos_y,
            _0x36f0e4 = this.dynamicClickableEntityDivs[_0x2cfb21].width,
            _0x1a0911 = this.dynamicClickableEntityDivs[_0x2cfb21].height;
          this.disableStretchToFitOnMobileFlag ? (_0x2da61b = Math.floor(_0x4cef43 + _0x2da61b * this.scaleRatioMultiplier.x) + 'px', _0x4b7036 = Math.floor(_0x2dae1c + _0x4b7036 * this.scaleRatioMultiplier.y) + 'px', _0x36f0e4 = Math.floor(_0x36f0e4 * this.scaleRatioMultiplier.x) + 'px', _0x1a0911 = Math.floor(_0x1a0911 * this.scaleRatioMultiplier.y) + 'px') : (_0x2da61b = Math.floor(_0x2da61b * this.sizeRatio.x) + 'px', _0x4b7036 = Math.floor(_0x4b7036 * this.sizeRatio.y) + 'px', _0x36f0e4 = Math.floor(_0x36f0e4 * this.sizeRatio.x) + 'px', _0x1a0911 = Math.floor(_0x1a0911 * this.sizeRatio.y) + 'px');
        } else _0x2da61b = this.dynamicClickableEntityDivs[_0x2cfb21].entity_pos_x, _0x4b7036 = this.dynamicClickableEntityDivs[_0x2cfb21].entity_pos_y, _0x36f0e4 = this.dynamicClickableEntityDivs[_0x2cfb21].width, _0x1a0911 = this.dynamicClickableEntityDivs[_0x2cfb21].height, this.enableStretchToFitOnDesktopFlag ? (_0x2da61b = Math.floor(_0x2da61b * this.sizeRatio.x) + 'px', _0x4b7036 = Math.floor(_0x4b7036 * this.sizeRatio.y) + 'px', _0x36f0e4 = Math.floor(_0x36f0e4 * this.sizeRatio.x) + 'px', _0x1a0911 = Math.floor(_0x1a0911 * this.sizeRatio.y) + 'px') : (_0x2da61b = Math.floor(_0x4cef43 + _0x2da61b * this.scaleRatioMultiplier.x) + 'px', _0x4b7036 = Math.floor(_0x2dae1c + _0x4b7036 * this.scaleRatioMultiplier.y) + 'px', _0x36f0e4 = Math.floor(_0x36f0e4 * this.scaleRatioMultiplier.x) + 'px', _0x1a0911 = Math.floor(_0x1a0911 * this.scaleRatioMultiplier.y) + 'px');
        ig.domHandler.css(_0x254371, {
          'float': 'left',
          'position': 'absolute',
          'left': _0x2da61b,
          'top': _0x4b7036,
          'width': _0x36f0e4,
          'height': _0x1a0911,
          'z-index': 0x3
        }), this.dynamicClickableEntityDivs[_0x2cfb21]['font-size'] && ig.domHandler.css(_0x254371, {
          'font-size': this.dynamicClickableEntityDivs[_0x2cfb21]['font-size'] * _0x18d0a4 + 'px'
        });
      }
      $('#ajaxbar').width(this.windowSize.x), $('#ajaxbar').height(this.windowSize.y);
    },
    'resize': function () {
      this.sizeCalcs(), this.resizeLayers();
    },
    'reorient': function () {
      console.log("changing orientation ...");
      if (ig.ua.mobile) {
        var _0x196f6f = !0x1,
          _0x196f6f = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
          _0x36f163 = this.domHandler.getElementById('#orientate'),
          _0x2fd74d = this.domHandler.getElementById('#game');
        _0x196f6f ? (this.domHandler.show(_0x36f163), this.domHandler.hide(_0x2fd74d), console.log('portrait' + window.innerWidth + ',' + window.innerHeight)) : (this.domHandler.show(_0x2fd74d), this.domHandler.hide(_0x36f163), console.log('landscape' + window.innerWidth + ',' + window.innerHeight));
      }
      ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize();
    },
    'resizeAds': function () {
      for (var _0x57279b in this.adsToResize) {
        var _0x2cbc40 = ig.domHandler.getElementById('#' + _0x57279b),
          _0x36177c = ig.domHandler.getElementById('#' + _0x57279b + '-Box'),
          _0x5b6021 = (window.innerWidth - this.adsToResize[_0x57279b]['box-width']) / 0x2 + 'px',
          _0x331fbd = (window.innerHeight - this.adsToResize[_0x57279b]['box-height']) / 0x2 + 'px';
        _0x2cbc40 && ig.domHandler.css(_0x2cbc40, {
          'width': window.innerWidth,
          'height': window.innerHeight
        }), _0x36177c && ig.domHandler.css(_0x36177c, {
          'left': _0x5b6021,
          'top': _0x331fbd
        });
      }
    },
    'samsungFix': function () {
      ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf('Android') + 0x8, navigator.userAgent.indexOf('Android') + 0xb))) && !(0x0 > navigator.userAgent.indexOf('GT')) && !(0x0 < navigator.userAgent.indexOf('Chrome')) && !(0x0 < navigator.userAgent.indexOf('Firefox')) && (document.addEventListener('touchstart', function (_0x59c221) {
        return _0x59c221.preventDefault(), !0x1;
      }, !0x1), document.addEventListener('touchmove', function (_0x132d00) {
        return _0x132d00.preventDefault(), !0x1;
      }, !0x1), document.addEventListener('touchend', function (_0x40abf8) {
        return _0x40abf8.preventDefault(), !0x1;
      }, !0x1));
    },
    'orientationInterval': null,
    'orientationTimeout': null,
    'orientationHandler': function () {
      this.reorient(), window.scrollTo(0x0, 0x1);
    },
    'orientationDelayHandler': function () {
      null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 0x64)), null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function () {
        this.clearAllIntervals();
      }.bind(this), 0x7d0));
    },
    'clearAllIntervals': function () {
      window.clearInterval(this.orientationInterval), this.orientationInterval = null, window.clearTimeout(this.orientationTimeout), this.orientationTimeout = null;
    },
    'eventListenerSetup': function () {
      ig.ua.iOS ? (window.addEventListener('orientationchange', this.orientationDelayHandler.bind(this)), window.addEventListener('resize', this.orientationDelayHandler.bind(this))) : (window.addEventListener('orientationchange', this.orientationHandler.bind(this)), window.addEventListener('resize', this.orientationHandler.bind(this))), document.ontouchmove = function (_0xb3c0b5) {
        window.scrollTo(0x0, 0x1), _0xb3c0b5.preventDefault();
      }, this.chromePullDownRefreshFix();
    },
    'chromePullDownRefreshFix': function () {
      var _0x386588 = window.chrome || navigator.userAgent.match('CriOS'),
        _0x14dda2 = 'ontouchstart' in document.documentElement;
      if (_0x386588 && _0x14dda2) {
        var _0x2e131a = _0x386588 = !0x1,
          _0x36caa1 = 0x0,
          _0x1e715d = !0x1;
        try {
          CSS.supports('overscroll-behavior-y', 'contain') && (_0x386588 = !0x0);
        } catch (_0x4753cf) {}
        try {
          if (_0x386588) return document.body.style.overscrollBehaviorY = 'contain';
        } catch (_0x349f56) {}
        _0x386588 = document.head || document.body, _0x14dda2 = document.createElement('style'), _0x14dda2.type = 'text/css', _0x14dda2.styleSheet ? _0x14dda2.styleSheet.cssText = "\n      ::-webkit-scrollbar {\n        width: 500x;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    " : _0x14dda2.appendChild(document.createTextNode("\n      ::-webkit-scrollbar {\n        width: 500px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    ")), _0x386588.appendChild(_0x14dda2);
        try {
          addEventListener('test', null, {
            get 'passive'() {
              _0x2e131a = !0x0;
            }
          });
        } catch (_0x3bfbc8) {}
        document.addEventListener('touchstart', function (_0x6ddd0c) {
          0x1 === _0x6ddd0c.touches.length && (_0x36caa1 = _0x6ddd0c.touches[0x0].clientY, _0x1e715d = 0x0 === window.pageYOffset);
        }, !!_0x2e131a && {
          'passive': !0x0
        }), document.addEventListener('touchmove', function (_0x54dca3) {
          var _0x3cfd99;
          if (_0x3cfd99 = _0x1e715d) {
            _0x1e715d = !0x1, _0x3cfd99 = _0x54dca3.touches[0x0].clientY;
            var _0x16df50 = _0x3cfd99 - _0x36caa1;
            _0x3cfd99 = (_0x36caa1 = _0x3cfd99, 0x0 < _0x16df50);
          }
          if (_0x3cfd99) return _0x54dca3.preventDefault();
        }, !!_0x2e131a && {
          'passive': !0x1
        });
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.api-handler').defines(function () {
  ig.ApiHandler = ig.Class.extend({
    'apiAvailable': {
      'MJSPreroll': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize();
      },
      'MJSHeader': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize();
      },
      'MJSFooter': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize();
      },
      'MJSEnd': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize();
      }
    },
    'run': function (_0x14cc98, _0x4da6f0) {
      if (this.apiAvailable[_0x14cc98]) this.apiAvailable[_0x14cc98](_0x4da6f0);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.sound-player').defines(function () {
  SoundPlayer = ig.Class.extend({
    'tagName': 'SoundPlayer',
    'stayMuteFlag': !0x1,
    'debug': !0x1,
    'init': function () {
      this.debug && console.log(this.tagName);
    },
    'play': function (_0x11a17c) {
      this.debug && console.log("play sound ", _0x11a17c);
    },
    'stop': function () {
      this.debug && console.log("stop sound ");
    },
    'volume': function () {
      this.debug && console.log("set volume");
    },
    'mute': function (_0x3c7772) {
      this.debug && console.log('mute'), 'undefined' === typeof _0x3c7772 ? this.stayMuteFlag = !0x0 : _0x3c7772 && (this.stayMuteFlag = !0x0);
    },
    'unmute': function (_0x108c56) {
      this.debug && console.log('unmute'), 'undefined' === typeof _0x108c56 ? this.stayMuteFlag = !0x1 : _0x108c56 && (this.stayMuteFlag = !0x1);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.impact-music-player').requires('plugins.audio.sound-player').defines(function () {
  ImpactMusicPlayer = SoundPlayer.extend({
    'tagName': 'ImpactMusicPlayer',
    'bgmPlaying': !0x1,
    'soundList': {},
    'init': function (_0x128565, _0x1d357b) {
      this.parent(_0x128565, _0x1d357b);
      for (var _0x38fb6c in _0x128565) this.soundList[_0x38fb6c] = _0x38fb6c, ig.music.add(_0x128565[_0x38fb6c].path + '.*', _0x38fb6c);
      _0x1d357b && _0x1d357b.loop && (ig.music.loop = _0x1d357b.loop);
    },
    'play': function (_0x1e0693) {
      this.stayMuteFlag || (this.bgmPlaying = !0x0, 'undefined' === typeof _0x1e0693 ? ig.music.play(_0x1e0693) : ig.music.play());
    },
    'stop': function () {
      this.bgmPlaying = !0x1, ig.music.pause();
    },
    'volume': function (_0x2b1be1) {
      console.log('impactmusic:', _0x2b1be1), ig.music.volume = 0x0 > _0x2b1be1 ? 0x0 : isNaN(_0x2b1be1) ? 0x1 : 0x1 < _0x2b1be1 ? 0x1 : _0x2b1be1;
    },
    'getVolume': function () {
      return ig.music.volume;
    },
    'mute': function (_0x199d9d) {
      this.parent(_0x199d9d), this.bgmPlaying && this.stop();
    },
    'unmute': function (_0x58f213) {
      this.parent(_0x58f213), this.play();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.impact-sound-player').requires('plugins.audio.sound-player').defines(function () {
  ImpactSoundPlayer = SoundPlayer.extend({
    'tagName': 'ImpactSoundPlayer',
    'soundList': {},
    'init': function (_0x4b9458, _0x2a6df8) {
      this.parent(_0x4b9458, _0x2a6df8);
      for (var _0x5b0563 in _0x4b9458) {
        var _0x45acaf = new ig.Sound(_0x4b9458[_0x5b0563].path + '.*');
        this.soundList[_0x5b0563] = _0x45acaf;
      }
    },
    'play': function (_0x138d5a) {
      this.stayMuteFlag || ('object' === typeof _0x138d5a ? (console.log(_0x138d5a + " exists"), _0x138d5a.play()) : 'string' === typeof _0x138d5a && this.soundList[_0x138d5a].play());
    },
    'stop': function (_0x5d4c78) {
      this.parent(_0x5d4c78), _0x5d4c78.stop();
    },
    'volume': function (_0x596458) {
      ig.soundManager.volume = 0x0 > _0x596458 ? 0x0 : isNaN(_0x596458) ? 0x1 : 0x1 < _0x596458 ? 0x1 : _0x596458;
    },
    'getVolume': function () {
      return ig.soundManager.volume;
    },
    'mute': function (_0x4f6f4b) {
      this.parent(_0x4f6f4b), ig.Sound.enabled = !0x1;
    },
    'unmute': function (_0x4bce02) {
      this.parent(_0x4bce02), ig.Sound.enabled = !0x0;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.howler-player').requires('plugins.audio.sound-player').defines(function () {
  HowlerPlayer = SoundPlayer.extend({
    'tagName': 'HowlerPlayer',
    'soundList': {},
    'init': function (_0x386747, _0x2e384b) {
      this.parent(_0x386747, _0x2e384b);
      for (var _0x405a38 in _0x386747) {
        var _0x1770da = _0x386747[_0x405a38].path,
          _0x1770da = new Howl({
            'src': [_0x1770da + '.' + ig.Sound.FORMAT.OGG.ext, _0x1770da + '.' + ig.Sound.FORMAT.MP3.ext]
          });
        this.soundList[_0x405a38] = _0x1770da;
      }
    },
    'play': function (_0x4263d9) {
      if (Howler.ctx && 'running' !== Howler.ctx.state) return Howler.ctx.resume();
      this.stayMuteFlag || ('object' === typeof _0x4263d9 ? _0x4263d9.play() : 'string' === typeof _0x4263d9 && this.soundList[_0x4263d9].play());
    },
    'stop': function (_0x622f88) {
      this.parent(_0x622f88), 'object' === typeof _0x622f88 ? _0x622f88.stop() : 'string' === typeof _0x622f88 && this.soundList[_0x622f88].stop();
    },
    'volume': function (_0x1b2184) {
      for (var _0x25fc4c in this.soundList) {
        if (0x0 > _0x1b2184) {
          this.soundList[_0x25fc4c].volume(0x0);
          break;
        }
        isNaN(_0x1b2184) ? this.soundList[_0x25fc4c].volume(0x1) : 0x1 < _0x1b2184 ? this.soundList[_0x25fc4c].volume(0x1) : this.soundList[_0x25fc4c].volume(_0x1b2184);
      }
    },
    'getVolume': function () {
      for (var _0x47c0e9 in this.soundList) return this.soundList[_0x47c0e9].volume();
    },
    'mute': function (_0x2de126) {
      this.parent(_0x2de126), Howler.mute(!0x0);
    },
    'unmute': function (_0x2c088d) {
      this.parent(_0x2c088d), Howler.mute(!0x1);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.howler-music-player').requires('plugins.audio.sound-player').defines(function () {
  HowlerMusicPlayer = SoundPlayer.extend({
    'tagName': 'HowlerMusicPlayer',
    'bgmPlaying': !0x1,
    'soundList': {},
    'init': function (_0x53c688, _0xc1a6c0) {
      this.parent(_0x53c688, _0xc1a6c0);
      for (var _0x286eab in _0x53c688) {
        var _0xb16f19 = _0x53c688[_0x286eab].path,
          _0xb16f19 = new Howl({
            'src': [_0xb16f19 + '.' + ig.Sound.FORMAT.OGG.ext, _0xb16f19 + '.' + ig.Sound.FORMAT.MP3.ext],
            'loop': !0x0,
            'autoplay': !0x1,
            'onend': function () {}.bind(this)
          });
        this.soundList[_0x286eab] = _0xb16f19;
      }
    },
    'play': function (_0x570a90) {
      if (!this.stayMuteFlag && !this.bgmPlaying) {
        if ('object' === typeof _0x570a90) this.bgmPlaying = !0x0, _0x570a90.play();else {
          if ('string' === typeof _0x570a90) this.bgmPlaying = !0x0, this.soundList[_0x570a90].play();else for (var _0x18f2e2 in this.soundList) {
            this.soundList[_0x18f2e2].play(), this.bgmPlaying = !0x0;
            break;
          }
        }
      }
    },
    'stop': function (_0x12ec30) {
      this.parent(_0x12ec30);
      if (this.bgmPlaying) {
        for (var _0x11713a in this.soundList) this.soundList[_0x11713a].stop();
        this.bgmPlaying = !0x1;
      }
    },
    'volume': function (_0x546036) {
      console.log('howler', _0x546036);
      for (var _0x56db97 in this.soundList) {
        if (0x0 > _0x546036) {
          this.soundList[_0x56db97].volume(0x0);
          break;
        }
        isNaN(_0x546036) ? this.soundList[_0x56db97].volume(0x1) : 0x1 < _0x546036 ? this.soundList[_0x56db97].volume(0x1) : this.soundList[_0x56db97].volume(_0x546036);
      }
    },
    'getVolume': function () {
      for (var _0x408f63 in this.soundList) return this.soundList[_0x408f63].volume();
    },
    'mute': function (_0x5e9d95) {
      this.parent(_0x5e9d95), Howler.mute(!0x0);
    },
    'unmute': function (_0x5f3038) {
      this.parent(_0x5f3038), Howler.mute(!0x1);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.jukebox-player').requires('plugins.audio.sound-player').defines(function () {
  JukeboxPlayer = SoundPlayer.extend({
    'tagName': 'JukeboxPlayer',
    'bgmPlaying': !0x1,
    'soundList': {},
    'jukeboxPlayer': null,
    'pausePosition': 0x0,
    'premuteVolume': 0x0,
    'minVolume': 0.001,
    'init': function (_0x5ef399, _0x2925e0) {
      this.parent(_0x5ef399, _0x2925e0);
      for (var _0x7bf3c9 in _0x5ef399) {
        this.soundList[_0x7bf3c9] = _0x7bf3c9;
        var _0x425857 = _0x5ef399[_0x7bf3c9].path;
        this.jukeboxPlayer = new jukebox.Player({
          'resources': [_0x425857 + '.' + ig.Sound.FORMAT.OGG.ext, _0x425857 + '.' + ig.Sound.FORMAT.MP3.ext],
          'autoplay': !0x1,
          'spritemap': {
            'music': {
              'start': _0x5ef399[_0x7bf3c9].startMp3,
              'end': _0x5ef399[_0x7bf3c9].endMp3,
              'loop': !0x0
            }
          }
        });
      }
    },
    'play': function () {
      this.stayMuteFlag || (this.bgmPlaying = !0x0, this.pausePosition ? (console.log('resume'), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log('play'), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0x0)), this.premuteVolume = this.getVolume());
    },
    'stop': function () {
      this.bgmPlaying = !0x1, this.pausePosition = this.jukeboxPlayer.pause();
    },
    'volume': function (_0x2f7178) {
      console.log('jukebox:', _0x2f7178), 0x0 >= _0x2f7178 ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(_0x2f7178) ? this.jukeboxPlayer.setVolume(0x1) : 0x1 < _0x2f7178 ? this.jukeboxPlayer.setVolume(0x1) : this.jukeboxPlayer.setVolume(_0x2f7178);
    },
    'getVolume': function () {
      return this.jukeboxPlayer.getVolume();
    },
    'mute': function (_0x2ef84f) {
      this.parent(_0x2ef84f), this.bgmPlaying && (console.log('jukebox', this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume));
    },
    'unmute': function (_0x292f2d) {
      this.parent(_0x292f2d), this.stayMuteFlag || (console.log('jukebox', this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume());
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.webaudio-music-player').requires('plugins.audio.sound-player').defines(function () {
  WebaudioMusicPlayer = SoundPlayer.extend({
    'tagName': 'WebaudioMusicPlayer',
    'bgmPlaying': !0x1,
    'isSupported': !0x1,
    'muteFlag': !0x1,
    'pausedTime': 0x0,
    'webaudio': null,
    'useHTML5Audio': !0x1,
    'audio': null,
    'inactiveAudio': null,
    'codecs': null,
    'reinitOnPlay': !0x1,
    'inputList': null,
    '_volume': 0x1,
    'soundList': {},
    'init': function (_0x39160d) {
      this.webaudio = {
        'compatibility': {},
        'gainNode': null,
        'buffer': null,
        'source_loop': {},
        'source_once': {}
      };
      try {
        Howler && Howler.ctx ? this.webaudio.context = Howler.ctx : ig && ig.webaudio_ctx ? this.webaudio.context = ig.webaudio_ctx : (this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext(), ig.webaudio_ctx = this.webaudio.context), this.isSupported = !0x0;
      } catch (_0xd93d75) {
        console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0x0;
      }
      if (this.useHTML5Audio) {
        if ('undefined' !== typeof Audio) try {
          new Audio();
        } catch (_0x53c7f2) {
          this.useHTML5Audio = !0x1;
        } else this.useHTML5Audio = !0x1;
      }
      this.useHTML5Audio && (this.audio = new Audio(), this.isSupported = !0x0, this.initHTML5Audio(_0x39160d));
      if (!this.isSupported) return null;
      this.webaudio && (this.inputList = _0x39160d, this.initWebAudio(_0x39160d));
    },
    'initWebAudio': function (_0x558345) {
      ig.ua.iOS && this.initIOSWebAudioUnlock(), this.webaudio.gainNode = 'undefined' === typeof this.webaudio.context.createGain ? this.webaudio.context.createGainNode() : this.webaudio.context.createGain(), this.webaudio.gainNode.connect(this.webaudio.context.destination), this.webaudio.gainNode.gain.value = this._volume, this.webaudio.buffer = null;
      var _0x2f93ab = 'start',
        _0x1c0152 = 'stop',
        _0x21e1cb = this.webaudio.context.createBufferSource();
      'function' !== typeof _0x21e1cb.start && (_0x2f93ab = 'noteOn'), this.webaudio.compatibility.start = _0x2f93ab, 'function' !== typeof _0x21e1cb.stop && (_0x1c0152 = 'noteOff'), this.webaudio.compatibility.stop = _0x1c0152;
      for (var _0xf63da9 in _0x558345) {
        this.soundList[_0xf63da9] = _0xf63da9;
        var _0x1c0152 = _0x558345[_0xf63da9].path,
          _0x2f93ab = _0x1c0152 + '.' + ig.Sound.FORMAT.MP3.ext,
          _0x18ceaa = _0x1c0152 + '.' + ig.Sound.FORMAT.OGG.ext;
        ig.ua.mobile ? ig.ua.iOS && (_0x18ceaa = _0x2f93ab) : (_0x1c0152 = navigator.userAgent.toLowerCase(), -0x1 != _0x1c0152.indexOf('safari') && -0x1 >= _0x1c0152.indexOf('chrome') && (_0x18ceaa = _0x2f93ab), _0x1c0152.indexOf('win64') && (_0x18ceaa = _0x2f93ab));
        var _0x399c54 = new XMLHttpRequest();
        _0x399c54.open('GET', _0x18ceaa, !0x0), _0x399c54.responseType = 'arraybuffer', _0x399c54.onload = function () {
          this.webaudio.context.decodeAudioData(_0x399c54.response, function (_0x3f0ed9) {
            this.webaudio.buffer = _0x3f0ed9, this.webaudio.source_loop = {}, this.bgmPlaying ? this.play(null, !0x0) : this.stop();
          }.bind(this), function () {
            console.log("Error decoding audio \"" + _0x18ceaa + "\".");
          });
        }.bind(this), _0x399c54.send();
        if (0x4 == _0x399c54.readyState && 'undefined' !== typeof Audio) {
          this.useHTML5Audio = !0x0;
          try {
            new Audio();
          } catch (_0x1bde8a) {
            this.useHTML5Audio = !0x1;
          }
          this.useHTML5Audio && (console.log("Using HTML5 Audio"), this.webaudio = null, this.audio = new Audio(), this.isSupported = !0x0, this.initHTML5Audio(_0x558345));
        }
        break;
      }
    },
    'initIOSWebAudioUnlock': function () {
      if (this.webaudio) {
        webaudio = this.webaudio;
        var _0x19f5ae = function () {
          var _0x1bb739 = webaudio.context,
            _0x323b26 = _0x1bb739.createBuffer(0x1, 0x1, 0x5622),
            _0x44e63b = _0x1bb739.createBufferSource();
          _0x44e63b.buffer = _0x323b26, _0x44e63b.connect(_0x1bb739.destination), 'undefined' === typeof _0x44e63b.start ? _0x44e63b.noteOn(0x0) : _0x44e63b.start(0x0), setTimeout(function () {
            (_0x44e63b.playbackState === _0x44e63b.PLAYING_STATE || _0x44e63b.playbackState === _0x44e63b.FINISHED_STATE) && window.removeEventListener('touchend', _0x19f5ae, !0x1);
          }.bind(this), 0x0);
        };
        window.addEventListener('touchend', _0x19f5ae, !0x1);
      }
    },
    'initHTML5Audio': function (_0x6a37e5) {
      if (this.useHTML5Audio && this.audio) {
        var _0x37c7bf = this.audio;
        this.codecs = {}, this.codecs = {
          'mp3': !!_0x37c7bf.canPlayType('audio/mpeg;').replace(/^no$/, ''),
          'opus': !!_0x37c7bf.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ''),
          'ogg': !!_0x37c7bf.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ''),
          'wav': !!_0x37c7bf.canPlayType("audio/wav; codecs=\"1\"").replace(/^no$/, ''),
          'aac': !!_0x37c7bf.canPlayType('audio/aac;').replace(/^no$/, ''),
          'm4a': !!(_0x37c7bf.canPlayType('audio/x-m4a;') || _0x37c7bf.canPlayType('audio/m4a;') || _0x37c7bf.canPlayType('audio/aac;')).replace(/^no$/, ''),
          'mp4': !!(_0x37c7bf.canPlayType('audio/x-mp4;') || _0x37c7bf.canPlayType('audio/mp4;') || _0x37c7bf.canPlayType('audio/aac;')).replace(/^no$/, ''),
          'weba': !!_0x37c7bf.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, '')
        }, this.is = {
          'ff': Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
          'ie': Boolean(document.all && !window.opera),
          'opera': Boolean(window.opera),
          'chrome': Boolean(window.chrome),
          'safari': Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
        }, this.playDelay = -0x3c, this.stopDelay = 0x1e, this.is.chrome && (this.playDelay = -0x19), this.is.chrome && (this.stopDelay = 0x19), this.is.ff && (this.playDelay = -0x19), this.is.ff && (this.stopDelay = 0x55), this.is.opera && (this.playDelay = 0x5), this.is.opera && (this.stopDelay = 0x0);
        for (var _0x191527 in _0x6a37e5) {
          this.soundList[_0x191527] = _0x191527;
          var _0x10f0f7 = _0x6a37e5[_0x191527].path,
            _0x37c7bf = _0x10f0f7 + '.' + ig.Sound.FORMAT.OGG.ext,
            _0x10f0f7 = _0x10f0f7 + '.' + ig.Sound.FORMAT.MP3.ext,
            _0x34a216 = null;
          this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? _0x34a216 = _0x37c7bf : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (_0x34a216 = _0x10f0f7);
          if (_0x34a216) {
            ig.ua.mobile ? ig.ua.iOS && (_0x34a216 = _0x10f0f7) : (_0x6a37e5 = navigator.userAgent.toLowerCase(), -0x1 != _0x6a37e5.indexOf('safari') && -0x1 >= _0x6a37e5.indexOf('chrome') && (_0x34a216 = _0x10f0f7)), this.audio.addEventListener('error', function () {
              this.audio.error && 0x4 === this.audio.error.code && (this.isSupported = !0x1);
            }, !0x1), this.audio.src = _0x34a216, this.audio._pos = 0x0, this.audio.preload = 'auto', this.audio.volume = this._volume, this.inactiveAudio = new Audio(), this.inactiveAudio.src = _0x34a216, this.inactiveAudio._pos = 0x0, this.inactiveAudio.preload = 'auto', this.inactiveAudio.volume = this._volume, this.inactiveAudio.load();
            var _0x20c474 = function () {
              this._duration = this.audio.duration, this._loaded || (this._loaded = !0x0), this.bgmPlaying ? this.play(null, !0x0) : this.stop(), this.audio.removeEventListener('canplaythrough', _0x20c474, !0x1);
            }.bind(this);
            this.audio.addEventListener('canplaythrough', _0x20c474, !0x1), this.audio.load();
            break;
          }
        }
      }
    },
    'play': function (_0x26c9a4, _0x366d51) {
      if (this.isSupported) {
        if (this.bgmPlaying = !0x0, this.webaudio) {
          if (!_0x366d51 && this.reinitOnPlay && this.webaudio.source_loop.buffer == this.webaudio.buffer) {
            if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0x0), this.webaudio.source_loop._playing = !0x1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0x0, 'noteOn' === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0x0);
            try {
              this.webaudio.context.close(), this.webaudio.context = new this.AudioContext(), this.webaudio.gainNode = this.webaudio.context.createGain(), this.webaudio.gainNode.connect(this.webaudio.context.destination), this.webaudio.gainNode.gain.value = this._volume;
              var _0x57f599 = 'start',
                _0x33a3f2 = 'stop',
                _0x443cce = this.webaudio.context.createBufferSource();
              'function' !== typeof _0x443cce.start && (_0x57f599 = 'noteOn'), this.webaudio.compatibility.start = _0x57f599, 'function' !== typeof _0x443cce.stop && (_0x33a3f2 = 'noteOff'), this.webaudio.compatibility.stop = _0x33a3f2, this.webaudio.source_loop = {}, this.play(null, !0x0);
            } catch (_0x298a8f) {}
          }
          if (this.webaudio.buffer) {
            if (!this.muteFlag && (this.bgmPlaying = !0x0, !this.webaudio.source_loop._playing)) {
              this.webaudio.source_loop = this.webaudio.context.createBufferSource(), this.webaudio.source_loop.buffer = this.webaudio.buffer, this.webaudio.source_loop.loop = !0x0, this.webaudio.source_loop.connect(this.webaudio.gainNode);
              if (null == _0x26c9a4 || isNaN(_0x26c9a4)) _0x26c9a4 = 0x0, this.pausedTime && (_0x26c9a4 = this.pausedTime);
              this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
              if ('noteOn' === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0x0, _0x26c9a4, this.webaudio.buffer.duration - _0x26c9a4), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration - _0x26c9a4));else this.webaudio.source_loop[this.webaudio.compatibility.start](0x0, _0x26c9a4);
              this.webaudio.source_loop._playing = !0x0;
            }
          } else this.bgmPlaying = !0x0;
        } else {
          if (this.audio) {
            var _0x2697f7 = this.audio;
            if (!this.muteFlag) {
              if (this.bgmPlaying = !0x0, isNaN(_0x26c9a4) && (_0x26c9a4 = 0x0, this.pausedTime && (_0x26c9a4 = this.pausedTime)), _0x57f599 = this._duration - _0x26c9a4, this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null), this._onEndTimer = setTimeout(function () {
                this.audio.currentTime = 0x0, this.audio.pause(), this.pausedTime = 0x0;
                if (this.inactiveAudio) {
                  var _0x2c9700 = this.audio;
                  this.audio = this.inactiveAudio, this.inactiveAudio = _0x2c9700;
                }
                this.play();
              }.bind(this), 0x3e8 * _0x57f599 + this.playDelay), 0x4 === _0x2697f7.readyState || !_0x2697f7.readyState && navigator.isCocoonJS) _0x2697f7.readyState = 0x4, _0x2697f7.currentTime = _0x26c9a4, _0x2697f7.muted = this.muteFlag || _0x2697f7.muted, _0x2697f7.volume = this._volume, setTimeout(function () {
                _0x2697f7.play();
              }, 0x0);else {
                clearTimeout(this._onEndTimer), this._onEndTimer = null;
                var _0x53140a = function () {
                  typeof ('function' == this.play) && (this.play(), _0x2697f7.removeEventListener('canplaythrough', _0x53140a, !0x1));
                }.bind(this);
                _0x2697f7.addEventListener('canplaythrough', _0x53140a, !0x1);
              }
            }
          }
        }
      }
    },
    'stop': function () {
      this.bgmPlaying = !0x1;
      if (this.isSupported) {
        if (this.webaudio) {
          if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0x0), this.webaudio.source_loop._playing = !0x1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0x0, 'noteOn' === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0x0);
        } else {
          if (this.audio) {
            var _0x4ea393 = this.audio;
            0x4 == _0x4ea393.readyState && (this.pausedTime = _0x4ea393.currentTime, _0x4ea393.currentTime = 0x0, _0x4ea393.pause(), clearTimeout(this._onEndTimer), this._onEndTimer = null);
          }
        }
      }
    },
    'volume': function (_0x52dcf2) {
      if (isNaN(_0x52dcf2) || null == _0x52dcf2) return this.getVolume();
      this.isSupported && (this._volume = _0x52dcf2, 0x0 > this._volume ? this._volume = 0x0 : 0x1 < this._volume && (this._volume = 0x1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)));
    },
    'getVolume': function () {
      return !this.isSupported ? 0x0 : this._volume;
    },
    'mute': function (_0x5698c4) {
      this.parent(_0x5698c4), !0x1 == this.muteFlag && (this.muteFlag = !0x0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0x0));
    },
    'unmute': function (_0x497c86) {
      this.parent(_0x497c86), !this.stayMuteFlag && !0x0 == this.muteFlag && (this.muteFlag = !0x1, this.bgmPlaying && this.play());
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.sound-info').defines(function () {
  SoundInfo = ig.Class.extend({
    'FORMATS': {
      'OGG': '.ogg',
      'MP3': '.mp3'
    },
    'sfx': {
      'click': {
        'path': 'media/audio/play/ui/click'
      },
      'error': {
        'path': 'media/audio/play/ui/error'
      },
      'sold': {
        'path': 'media/audio/play/ui/sold'
      },
      'consumables': {
        'path': 'media/audio/play/ui/sold'
      },
      'construct': {
        'path': 'media/audio/play/ui/construct'
      },
      'upgrade': {
        'path': 'media/audio/play/ui/upgrade'
      },
      'flip': {
        'path': 'media/audio/play/ui/flip'
      },
      'gameOver': {
        'path': 'media/audio/play/ui/gameover'
      },
      'gameWin': {
        'path': 'media/audio/play/ui/gamewin'
      },
      'bulletBasic': {
        'path': 'media/audio/play/tower/bullet-basic'
      },
      'bulletSnipe': {
        'path': 'media/audio/play/tower/bullet-snipe'
      },
      'bulletLightning': {
        'path': 'media/audio/play/tower/bullet-lightning'
      },
      'bulletMGun': {
        'path': 'media/audio/play/tower/bullet-machinegun'
      },
      'bulletLaser': {
        'path': 'media/audio/play/tower/bullet-laser3'
      },
      'bulletBoom': {
        'path': 'media/audio/play/tower/bullet-boom'
      },
      'bulletShotgun': {
        'path': 'media/audio/play/tower/bullet-shotgun'
      },
      'pulse': {
        'path': 'media/audio/play/tower/explode'
      },
      'explode': {
        'path': 'media/audio/play/tower/explode'
      },
      'zombieSpawn1': {
        'path': 'media/audio/play/zombie/spawn-1'
      },
      'zombieSpawn2': {
        'path': 'media/audio/play/zombie/spawn-2'
      },
      'zombieSpawn3': {
        'path': 'media/audio/play/zombie/spawn-3'
      },
      'zombieAttack1': {
        'path': 'media/audio/play/zombie/attack-1'
      },
      'zombieAttack2': {
        'path': 'media/audio/play/zombie/attack-2'
      },
      'zombieAttack3': {
        'path': 'media/audio/play/zombie/attack-3'
      },
      'zombieDie1': {
        'path': 'media/audio/play/zombie/die-1'
      },
      'zombieDie2': {
        'path': 'media/audio/play/zombie/die-2'
      },
      'zombieDie3': {
        'path': 'media/audio/play/zombie/die-3'
      },
      'logosplash1': {
        'path': 'media/audio/opening/logosplash1'
      },
      'logosplash2': {
        'path': 'media/audio/opening/logosplash2'
      },
      'staticSound': {
        'path': 'media/audio/play/static'
      }
    },
    'bgm': {
      'background': {
        'path': 'media/audio/bgm',
        'startOgg': 0x0,
        'endOgg': 21.463,
        'startMp3': 0x0,
        'endMp3': 21.463
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.sound-handler').requires('plugins.audio.impact-music-player', 'plugins.audio.impact-sound-player', 'plugins.audio.howler-player', 'plugins.audio.howler-music-player', 'plugins.audio.jukebox-player', 'plugins.audio.webaudio-music-player', 'plugins.audio.sound-info').defines(function () {
  ig.SoundHandler = ig.Class.extend({
    'bgmPlayer': null,
    'sfxPlayer': null,
    'focusBlurMute': !0x1,
    'soundInfo': new SoundInfo(),
    'init': function () {
      console.log("Initiating sound handler"), ig.ua.mobile ? (this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
        'loop': !0x0
      }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
        'loop': !0x0
      }))) : (this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
        'loop': !0x0
      }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
        'loop': !0x0
      })));
    },
    'unlockWebAudio': function () {
      Howler && (Howler.ctx && 'running' !== Howler.ctx.state && Howler.ctx.resume(), Howler._audioUnlocked || 'function' === typeof Howler._unlockAudio && Howler._unlockAudio()), ig && ig.webaudio_ctx && ig.webaudio_ctx.state && 'running' !== ig.webaudio_ctx.state && ig.webaudio_ctx.resume(), this.bgmPlayer.webaudio && this.bgmPlayer.webaudio.context && this.bgmPlayer.webaudio.context.state && 'running' !== this.bgmPlayer.webaudio.context.state && this.bgmPlayer.webaudio.context.resume();
    },
    'checkBGM': function () {
      return this.bgmPlayer.stayMuteFlag;
    },
    'checkSFX': function () {
      return this.sfxPlayer.stayMuteFlag;
    },
    'muteSFX': function (_0x52e82) {
      this.sfxPlayer && this.sfxPlayer.mute(_0x52e82);
    },
    'muteBGM': function (_0x46c1b1) {
      this.bgmPlayer && this.bgmPlayer.mute(_0x46c1b1);
    },
    'unmuteSFX': function (_0x2713db) {
      this.sfxPlayer && this.sfxPlayer.unmute(_0x2713db);
    },
    'unmuteBGM': function (_0x517151) {
      this.bgmPlayer && this.bgmPlayer.unmute(_0x517151);
    },
    'muteAll': function (_0x1461b9) {
      this.muteSFX(_0x1461b9), this.muteBGM(_0x1461b9);
    },
    'unmuteAll': function (_0x2e7035) {
      this.unlockWebAudio(), this.unmuteSFX(_0x2e7035), this.unmuteBGM(_0x2e7035);
    },
    'forceMuteAll': function () {
      this.focusBlurMute || this.muteAll(!0x1), this.focusBlurMute = !0x0;
    },
    'forceUnMuteAll': function () {
      this.focusBlurMute && (this.unmuteAll(!0x1), this.focusBlurMute = !0x1);
    },
    'saveVolume': function () {
      this.sfxPlayer && ig.game.io.storageSet('soundVolume', this.sfxPlayer.getVolume()), this.bgmPlayer && ig.game.io.storageSet('musicVolume', this.bgmPlayer.getVolume());
    },
    'forceLoopBGM': function () {
      var _0xc41a26;
      if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
        var _0x221249 = this.bgmPlayer.jukeboxPlayer;
        if (_0x221249) {
          null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), _0xc41a26 = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
          var _0x9bab89 = 0.1;
          ig.ua.mobile && (_0x9bab89 = 0.115, ig.ua.android && (_0x9bab89 = 0.45, _0xc41a26 && (_0x9bab89 = 0.3))), _0x221249.settings.spritemap.music && (_0xc41a26 = _0x221249.settings.spritemap.music.end - _0x9bab89, _0x221249.getCurrentTime() >= _0xc41a26 && (_0xc41a26 = _0x221249.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (_0x221249.play(_0xc41a26, !0x0), this.forcelooped = !0x0, setTimeout(function () {
            ig.soundHandler.forcelooped = !0x1;
          }, _0x9bab89)) : _0x221249.setCurrentTime(_0xc41a26)));
        } else 'ImpactMusicPlayer' == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), _0xc41a26 = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), _0x9bab89 = 0.1, ig.ua.mobile && (_0x9bab89 = 0.115, ig.ua.android && (_0x9bab89 = 0.45, _0xc41a26 && (_0x9bab89 = 0.3))), _0x221249 = 0x0, 'mp3' == ig.soundManager.format.ext && (_0x221249 = 0.05), ig.music.currentTrack && (_0xc41a26 = ig.music.currentTrack.duration - _0x9bab89, ig.music.currentTrack.currentTime >= _0xc41a26 && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = _0x221249, ig.music.currentTrack.play(), this.forcelooped = !0x0, setTimeout(function () {
          ig.soundHandler.forcelooped = !0x1;
        }, _0x9bab89)) : ig.music.currentTrack.currentTime = _0x221249)));
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.visibility-handler').requires('plugins.audio.sound-handler').defines(function () {
  ig.VisibilityHandler = ig.Class.extend({
    'version': '1.1.2',
    'config': {
      'muteOnBlur': !0x0,
      'pauseOnBlur': !0x0,
      'clearInputStateOnBlur': !0x0,
      'allowResumeWithoutFocus': {
        'desktop': !0x0,
        'mobile': {
          'kaios': !0x1,
          'default': !0x0
        }
      },
      'handlerDelay': {
        'desktop': 0x0,
        'mobile': {
          'kaios': 0x0,
          'default': 0x0
        }
      },
      'autoFocusOnResume': {
        'desktop': !0x0,
        'mobile': {
          'kaios': !0x1,
          'default': !0x0
        }
      },
      'autoFocusAfterResume': {
        'desktop': !0x0,
        'mobile': {
          'kaios': !0x1,
          'default': !0x0
        }
      }
    },
    'browserPrefixes': ['o', 'ms', 'moz', 'webkit'],
    'browserPrefix': null,
    'hiddenPropertyName': null,
    'visibilityEventName': null,
    'visibilityStateName': null,
    'isShowingOverlay': !0x1,
    'isFocused': !0x1,
    'isPaused': !0x1,
    'init': function () {
      this.initVisibilityHandler(), this.initFocusHandler(), this.initPageTransitionHandler(), ig.visibilityHandler = this;
    },
    'pauseHandler': function () {
      !0x0 === this.config.clearInputStateOnBlur && 'undefined' !== typeof ig.input && null !== ig.input && 'function' === typeof ig.input.clearAllState && ig.input.clearAllState(), !0x0 === this.config.pauseOnBlur && 'undefined' !== typeof ig.game && null !== ig.game && 'undefined' !== typeof ig.game.pauseGame && ig.game.pauseGame(), !0x0 === this.config.muteOnBlur && 'undefined' !== typeof ig.soundHandler && null !== ig.soundHandler && 'function' === typeof ig.soundHandler.forceMuteAll && ig.soundHandler.forceMuteAll();
    },
    'resumeHandler': function () {
      'undefined' !== typeof ig.input && null !== ig.input && 'function' === typeof ig.input.clearAllState && ig.input.clearAllState(), 'undefined' !== typeof ig.game && null !== ig.game && 'undefined' !== typeof ig.game.resumeGame && ig.game.resumeGame(), 'undefined' !== typeof ig.soundHandler && null !== ig.soundHandler && 'function' === typeof ig.soundHandler.forceUnMuteAll && ig.soundHandler.forceUnMuteAll();
    },
    'initVisibilityHandler': function () {
      this.browserPrefix = this.getBrowserPrefix(), this.hiddenPropertyName = this.getHiddenPropertyName(this.browserPrefix), this.visibilityEventName = this.getVisibilityEventName(this.browserPrefix), this.visibilityStateName = this.getVisibilityStateName(this.browserPrefix), this.visibilityEventName && document.addEventListener(this.visibilityEventName, this.onChange.bind(this), !0x0);
    },
    'initFocusHandler': function () {
      window.addEventListener('blur', this.onChange.bind(this), !0x0), document.addEventListener('blur', this.onChange.bind(this), !0x0), document.addEventListener('focusout', this.onChange.bind(this), !0x0), window.addEventListener('focus', this.onChange.bind(this), !0x0), document.addEventListener('focus', this.onChange.bind(this), !0x0), document.addEventListener('focusin', this.onChange.bind(this), !0x0);
    },
    'initPageTransitionHandler': function () {
      window.addEventListener('pagehide', this.onChange.bind(this), !0x0), window.addEventListener('pageshow', this.onChange.bind(this), !0x0);
    },
    'getBrowserPrefix': function () {
      var _0x423574 = null;
      return this.browserPrefixes.forEach(function (_0x2ac3be) {
        if (this.getHiddenPropertyName(_0x2ac3be) in document) return _0x423574 = _0x2ac3be;
      }.bind(this)), _0x423574;
    },
    'getHiddenPropertyName': function (_0x3b48e8) {
      return _0x3b48e8 ? _0x3b48e8 + 'Hidden' : 'hidden';
    },
    'getVisibilityEventName': function (_0x229849) {
      return (_0x229849 ? _0x229849 : '') + 'visibilitychange';
    },
    'getVisibilityStateName': function (_0x5b0ea3) {
      return _0x5b0ea3 ? _0x5b0ea3 + 'VisibilityState' : 'visibilityState';
    },
    'hasView': function () {
      return !(document[this.hiddenPropertyName] || 'visible' !== document[this.visibilityStateName]);
    },
    'hasFocus': function () {
      return document.hasFocus() || this.isFocused;
    },
    'onOverlayShow': function () {
      this.systemPaused(), this.isShowingOverlay = !0x0;
    },
    'onOverlayHide': function () {
      this.isShowingOverlay = !0x1, this.systemResumed();
    },
    'systemPaused': function () {
      if (this.isPaused) return !0x1;
      return this.pauseHandler(), this.isPaused = !0x0;
    },
    'systemResumed': function () {
      if (!this.isPaused || !this.hasView() || this.isShowingOverlay) return !0x1;
      if (!this.hasFocus()) {
        if (ig.ua.mobile) {
          if (this.isKaiOS()) {
            if (!this.config.allowResumeWithoutFocus.mobile.kaios) return !0x1;
          } else {
            if (!this.config.allowResumeWithoutFocus.mobile['default']) return !0x1;
          }
        } else {
          if (!this.config.allowResumeWithoutFocus.desktop) return !0x1;
        }
      }
      return this.focusOnResume(), this.resumeHandler(), this.focusAfterResume(), this.isPaused = !0x1, !0x0;
    },
    'isKaiOS': function () {
      return /KAIOS/.test(navigator.userAgent) || !0x1;
    },
    'focusOnResume': function () {
      return ig.ua.mobile ? this.isKaiOS() ? this.config.autoFocusOnResume.mobile.kaios : this.config.autoFocusOnResume.mobile['default'] : this.config.autoFocusOnResume.desktop;
    },
    'focusAfterResume': function () {
      return ig.ua.mobile ? this.isKaiOS() ? this.config.autoFocusAfterResume.mobile.kaios : this.config.autoFocusAfterResume.mobile['default'] : this.config.autoFocusAfterResume.desktop;
    },
    'focus': function (_0x5d362f) {
      window.focus && _0x5d362f && (document.activeElement && 'function' === typeof document.activeElement.blur && document.activeElement.blur(), window.focus());
    },
    'handleDelayedEvent': function (_0x26decf) {
      if (!this.hasView() || 'pause' === _0x26decf.type || 'pageHide' === _0x26decf.type || 'blur' === _0x26decf.type || 'focusout' === _0x26decf.type) {
        if ('blur' === _0x26decf.type || 'focusout' === _0x26decf.type) {
          var _0x523ce6 = _0x26decf.path || _0x26decf.composedPath && _0x26decf.composedPath();
          if (_0x523ce6 && 0x2 < _0x523ce6.length || _0x26decf.srcElement && ('INPUT' === _0x26decf.srcElement.tagName || 'TEXTAREA' === _0x26decf.srcElement.tagName)) return !0x1;
          this.isFocused = !0x1;
        }
        return this.systemPaused(_0x26decf);
      }
      if ('focus' === _0x26decf.type || 'focusin' === _0x26decf.type) this.isFocused = !0x0;
      return this.systemResumed(_0x26decf);
    },
    'startDelayedEventHandler': function (_0x520590) {
      ig.ua.mobile ? this.isKaiOS() ? 0x0 < this.config.handlerDelay.mobile.kaios ? window.setTimeout(function (_0x461e1a) {
        this.handleDelayedEvent(_0x461e1a);
      }.bind(this, _0x520590), this.config.handlerDelay.mobile) : this.handleDelayedEvent(_0x520590) : 0x0 < this.config.handlerDelay.mobile['default'] ? window.setTimeout(function (_0x4faff7) {
        this.handleDelayedEvent(_0x4faff7);
      }.bind(this, _0x520590), this.config.handlerDelay.mobile) : this.handleDelayedEvent(_0x520590) : 0x0 < this.config.handlerDelay.desktop ? window.setTimeout(function (_0x1c8e58) {
        this.handleDelayedEvent(_0x1c8e58);
      }.bind(this, _0x520590), this.config.handlerDelay.desktop) : this.handleDelayedEvent(_0x520590);
    },
    'onChange': function (_0x4566c3) {
      this.startDelayedEventHandler(_0x4566c3);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.storage').defines(function () {
  ig.Storage = ig.Class.extend({
    'staticInstantiate': function () {
      return !ig.Storage.instance ? null : ig.Storage.instance;
    },
    'init': function () {
      ig.Storage.instance = this;
    },
    'isCapable': function () {
      return 'undefined' !== typeof window.localStorage;
    },
    'isSet': function (_0x165689) {
      return null !== this.get(_0x165689);
    },
    'initUnset': function (_0x280d59, _0x11e4da) {
      null === this.get(_0x280d59) && this.set(_0x280d59, _0x11e4da);
    },
    'get': function (_0x220f4a) {
      if (!this.isCapable()) return null;
      try {
        return JSON.parse(localStorage.getItem(_0x220f4a));
      } catch (_0x1e2d74) {
        return window.localStorage.getItem(_0x220f4a);
      }
    },
    'getInt': function (_0x46422a) {
      return ~~this.get(_0x46422a);
    },
    'getFloat': function (_0x48e27d) {
      return parseFloat(this.get(_0x48e27d));
    },
    'getBool': function (_0x2a92b6) {
      return !!this.get(_0x2a92b6);
    },
    'key': function (_0x4e40e7) {
      return this.isCapable() ? window.localStorage.key(_0x4e40e7) : null;
    },
    'set': function (_0x396447, _0x484073) {
      if (!this.isCapable()) return null;
      try {
        window.localStorage.setItem(_0x396447, JSON.stringify(_0x484073));
      } catch (_0x3169d4) {
        console.log(_0x3169d4);
      }
    },
    'setHighest': function (_0x28194b, _0x39a00d) {
      _0x39a00d > this.getFloat(_0x28194b) && this.set(_0x28194b, _0x39a00d);
    },
    'remove': function (_0x4eb768) {
      if (!this.isCapable()) return null;
      window.localStorage.removeItem(_0x4eb768);
    },
    'clear': function () {
      if (!this.isCapable()) return null;
      window.localStorage.clear();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.mouse').requires('plugins.data.vector').defines(function () {
  Mouse = ig.Class.extend({
    'pos': new Vector2(0x0, 0x0),
    'bindings': {
      'click': [ig.KEY.MOUSE1]
    },
    'init': function () {
      ig.input.initMouse();
      for (var _0x4e2c3c in this.bindings) {
        this[_0x4e2c3c] = _0x4e2c3c;
        for (var _0x5c58a6 = 0x0; _0x5c58a6 < this.bindings[_0x4e2c3c].length; _0x5c58a6++) ig.input.bind(this.bindings[_0x4e2c3c][_0x5c58a6], _0x4e2c3c);
      }
    },
    'getLast': function () {
      return this.pos;
    },
    'getPos': function () {
      var _0x3337f8 = ig.system.scale * ((ig.system.canvas.offsetWidth || ig.system.realWidth) / ig.system.realWidth);
      return this.pos.set(ig.input.mouse.x * _0x3337f8 / ig.sizeHandler.sizeRatio.x / ig.sizeHandler.scaleRatioMultiplier.x, ig.input.mouse.y * _0x3337f8 / ig.sizeHandler.sizeRatio.y / ig.sizeHandler.scaleRatioMultiplier.y), this.pos.clone();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.keyboard').defines(function () {
  Keyboard = ig.Class.extend({
    'bindings': {
      'PREVENT_PAGE_SCROLLING_OVER_IFRAME': [ig.KEY.UP_ARROW, ig.KEY.DOWN_ARROW, ig.KEY.LEFT_ARROW, ig.KEY.RIGHT_ARROW, ig.KEY.PAGE_UP, ig.KEY.PAGE_DOWN],
      'up': [ig.KEY.W, ig.KEY.UP_ARROW],
      'right': [ig.KEY.D, ig.KEY.RIGHT_ARROW],
      'left': [ig.KEY.A, ig.KEY.LEFT_ARROW],
      'down': [ig.KEY.S, ig.KEY.DOWN_ARROW]
    },
    'init': function () {
      for (var _0x57850d in this.bindings) {
        this[_0x57850d] = _0x57850d;
        for (var _0x5338a5 = 0x0; _0x5338a5 < this.bindings[_0x57850d].length; _0x5338a5++) ig.input.bind(this.bindings[_0x57850d][_0x5338a5], _0x57850d);
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.gamepad-input').defines(function () {
  ig.PADKEY = {
    'BUTTON_0': 0x0,
    'PADBUTTON_1': 0x1,
    'BUTTON_2': 0x2,
    'BUTTON_3': 0x3,
    'BUTTON_LEFT_BUMPER': 0x4,
    'BUTTON_RIGHT_BUMPER': 0x5,
    'BUTTON_LEFT_TRIGGER': 0x6,
    'BUTTON_RIGHT_TRIGGER': 0x7,
    'BUTTON_LEFT_JOYSTICK': 0xa,
    'BUTTON_RIGHT_JOYSTICK': 0xb,
    'BUTTON_DPAD_UP': 0xc,
    'BUTTON_DPAD_DOWN': 0xd,
    'BUTTON_DPAD_LEFT': 0xe,
    'BUTTON_DPAD_RIGHT': 0xf,
    'BUTTON_MENU': 0x10,
    'AXIS_LEFT_JOYSTICK_X': 0x0,
    'AXIS_LEFT_JOYSTICK_Y': 0x1,
    'AXIS_RIGHT_JOYSTICK_X': 0x2,
    'AXIS_RIGHT_JOYSTICK_Y': 0x3
  }, ig.GamepadInput = ig.Class.extend({
    'isInit': !0x1,
    'isSupported': !0x1,
    'list': [],
    'bindings': {},
    'states': {},
    'presses': {},
    'releases': {},
    'downLocks': {},
    'upLocks': {},
    'leftStick': {
      'x': 0x0,
      'y': 0x0
    },
    'rightStick': {
      'x': 0x0,
      'y': 0x0
    },
    'start': function () {
      if (!this.isInit) {
        this.isInit = !0x0;
        var _0x1c2632 = navigator.getGamepads || navigator.webkitGetGamepads;
        _0x1c2632 && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads()), this.isSupported = _0x1c2632;
      }
    },
    'isAvailable': function () {
      return this.isInit && this.isSupported;
    },
    'buttonPressed': function (_0x285208) {
      return 'object' == typeof _0x285208 ? _0x285208.pressed : 0x1 == _0x285208;
    },
    'buttonDown': function (_0x183a0e) {
      if (_0x183a0e = this.bindings[_0x183a0e]) this.states[_0x183a0e] = !0x0, this.downLocks[_0x183a0e] || (this.presses[_0x183a0e] = !0x0, this.downLocks[_0x183a0e] = !0x0);
    },
    'buttonUp': function (_0x18d017) {
      if ((_0x18d017 = this.bindings[_0x18d017]) && this.downLocks[_0x18d017] && !this.upLocks[_0x18d017]) this.states[_0x18d017] = !0x1, this.releases[_0x18d017] = !0x0, this.upLocks[_0x18d017] = !0x0;
    },
    'clearPressed': function () {
      for (var _0x5754bc in this.releases) this.states[_0x5754bc] = !0x1, this.downLocks[_0x5754bc] = !0x1;
      this.releases = {}, this.presses = {}, this.upLocks = {};
    },
    'bind': function (_0x452421, _0x267bcc) {
      this.bindings[_0x452421] = _0x267bcc;
    },
    'unbind': function (_0x24f1b1) {
      this.releases[this.bindings[_0x24f1b1]] = !0x0, this.bindings[_0x24f1b1] = null;
    },
    'unbindAll': function () {
      this.bindings = {}, this.states = {}, this.presses = {}, this.releases = {}, this.downLocks = {}, this.upLocks = {};
    },
    'state': function (_0x4778e6) {
      return this.states[_0x4778e6];
    },
    'pressed': function (_0x145857) {
      return this.presses[_0x145857];
    },
    'released': function (_0x18e02e) {
      return this.releases[_0x18e02e];
    },
    'clamp': function (_0x3ea8d2, _0x43db59, _0x5e99fb) {
      return _0x3ea8d2 < _0x43db59 ? _0x43db59 : _0x3ea8d2 > _0x5e99fb ? _0x5e99fb : _0x3ea8d2;
    },
    'pollGamepads': function () {
      if (this.isSupported) {
        this.leftStick.x = 0x0, this.leftStick.y = 0x0, this.rightStick.x = 0x0, this.rightStick.y = 0x0, this.list = navigator.getGamepads();
        for (var _0x59a5e0 in this.bindings) {
          for (var _0x2b9abd = !0x1, _0x3dae36 = 0x0; _0x3dae36 < this.list.length; _0x3dae36++) {
            var _0x51a7bb = this.list[_0x3dae36];
            if (_0x51a7bb && _0x51a7bb.buttons && this.buttonPressed(_0x51a7bb.buttons[_0x59a5e0])) {
              _0x2b9abd = !0x0;
              break;
            }
          }
          _0x2b9abd ? this.buttonDown(_0x59a5e0) : this.buttonUp(_0x59a5e0);
        }
        for (_0x3dae36 = 0x0; _0x3dae36 < this.list.length; _0x3dae36++) if ((_0x51a7bb = this.list[_0x3dae36]) && _0x51a7bb.axes) {
          _0x59a5e0 = _0x51a7bb.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
          var _0x2b9abd = _0x51a7bb.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
            _0x4a3145 = _0x51a7bb.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
            _0x51a7bb = _0x51a7bb.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
          this.leftStick.x += isNaN(_0x59a5e0) ? 0x0 : _0x59a5e0, this.leftStick.y += isNaN(_0x2b9abd) ? 0x0 : _0x2b9abd, this.rightStick.x += isNaN(_0x4a3145) ? 0x0 : _0x4a3145, this.rightStick.y += isNaN(_0x51a7bb) ? 0x0 : _0x51a7bb;
        }
        0x0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -0x1, 0x1), this.leftStick.y = this.clamp(this.leftStick.y, -0x1, 0x1), this.rightStick.x = this.clamp(this.rightStick.x, -0x1, 0x1), this.rightStick.y = this.clamp(this.rightStick.y, -0x1, 0x1));
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.gamepad').requires('plugins.io.gamepad-input').defines(function () {
  Gamepad = ig.Class.extend({
    'bindings': {
      'padJump': [ig.PADKEY.BUTTON_0]
    },
    'init': function () {
      ig.gamepadInput.start();
      for (var _0x1d8e71 in this.bindings) for (var _0x58d3fe = 0x0; _0x58d3fe < this.bindings[_0x1d8e71].length; _0x58d3fe++) ig.gamepadInput.bind(this.bindings[_0x1d8e71][_0x58d3fe], _0x1d8e71);
    },
    'press': function () {},
    'held': function () {},
    'release': function () {}
  });
}), ig.baked = !0x0, ig.module('plugins.io.multitouch').defines(function () {
  Multitouch = ig.Class.extend({
    'init': function () {
      ig.multitouchInput.start();
    },
    'getTouchesPos': function () {
      if (ig.ua.mobile) {
        if (0x0 < ig.multitouchInput.touches.length) {
          for (var _0x2507d0 = [], _0xe860b3 = 0x0; _0xe860b3 < ig.multitouchInput.touches.length; _0xe860b3++) {
            var _0x32d4ce = ig.multitouchInput.touches[_0xe860b3];
            _0x2507d0.push({
              'x': _0x32d4ce.x,
              'y': _0x32d4ce.y
            });
          }
          return _0x2507d0;
        }
        return null;
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.multitouch-input').defines(function () {
  ig.MultitouchInput = ig.Class.extend({
    'isStart': !0x1,
    'touches': [],
    'multitouchCapable': !0x1,
    'lastEventUp': null,
    'start': function () {
      this.isStart || (this.isStart = !0x0, navigator.maxTouchPoints && 0x1 < navigator.maxTouchPoints && (this.multitouchCapable = !0x0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener('MSPointerDown', this.touchdown.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerUp', this.touchup.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerMove', this.touchmove.bind(this), !0x1), ig.system.canvas.style.msContentZooming = 'none', ig.system.canvas.style.msTouchAction = 'none'), ig.system.canvas.addEventListener('touchstart', this.touchdown.bind(this), !0x1), ig.system.canvas.addEventListener('touchend', this.touchup.bind(this), !0x1), ig.system.canvas.addEventListener('touchmove', this.touchmove.bind(this), !0x1)));
    },
    'touchmove': function (_0x1a7de9) {
      if (ig.ua.touchDevice) {
        var _0x5da2ad = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
          _0x5ec678 = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
          _0x5da2ad = ig.system.scale * (_0x5da2ad / ig.system.realWidth),
          _0x5ec678 = ig.system.scale * (_0x5ec678 / ig.system.realHeight);
        if (_0x1a7de9.touches) {
          for (; 0x0 < this.touches.length;) this.touches.pop();
          !this.multitouchCapable && 0x1 < _0x1a7de9.touches.length && (this.multitouchCapable = !0x0);
          var _0x977cfd = {
            'left': 0x0,
            'top': 0x0
          };
          ig.system.canvas.getBoundingClientRect && (_0x977cfd = ig.system.canvas.getBoundingClientRect());
          for (var _0x162818 = 0x0; _0x162818 < _0x1a7de9.touches.length; _0x162818++) {
            var _0x2a4220 = _0x1a7de9.touches[_0x162818];
            _0x2a4220 && this.touches.push({
              'x': (_0x2a4220.clientX - _0x977cfd.left) / _0x5da2ad,
              'y': (_0x2a4220.clientY - _0x977cfd.top) / _0x5ec678
            });
          }
        } else this.windowMove(_0x1a7de9);
      }
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x20a8be) {}
    },
    'touchdown': function (_0x331b78) {
      var _0x2adc02 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0x48b16d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
        _0x2adc02 = ig.system.scale * (_0x2adc02 / ig.system.realWidth),
        _0x48b16d = ig.system.scale * (_0x48b16d / ig.system.realHeight);
      if (window.navigator.msPointerEnabled) this.windowKeyDown(_0x331b78);else {
        if (ig.ua.touchDevice && _0x331b78.touches) {
          for (; 0x0 < this.touches.length;) this.touches.pop();
          !this.multitouchCapable && 0x1 < _0x331b78.touches.length && (this.multitouchCapable = !0x0);
          var _0x57577f = {
            'left': 0x0,
            'top': 0x0
          };
          ig.system.canvas.getBoundingClientRect && (_0x57577f = ig.system.canvas.getBoundingClientRect());
          for (var _0x5c65f6 = 0x0; _0x5c65f6 < _0x331b78.touches.length; _0x5c65f6++) {
            var _0x428556 = _0x331b78.touches[_0x5c65f6];
            _0x428556 && this.touches.push({
              'x': (_0x428556.clientX - _0x57577f.left) / _0x2adc02,
              'y': (_0x428556.clientY - _0x57577f.top) / _0x48b16d
            });
          }
        }
      }
    },
    'touchup': function (_0x42a570) {
      var _0x29f4c6 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
      parseInt(ig.system.canvas.offsetHeight), _0x29f4c6 = ig.system.scale * (_0x29f4c6 / ig.system.realWidth);
      if (window.navigator.msPointerEnabled) this.windowKeyUp(_0x42a570);else {
        this.lastEventUp = _0x42a570;
        var _0x43625e = {
          'left': 0x0,
          'top': 0x0
        };
        ig.system.canvas.getBoundingClientRect && (_0x43625e = ig.system.canvas.getBoundingClientRect());
        if (ig.ua.touchDevice) {
          _0x42a570 = (_0x42a570.changedTouches[0x0].clientX - _0x43625e.left) / _0x29f4c6;
          for (_0x29f4c6 = 0x0; _0x29f4c6 < this.touches.length; _0x29f4c6++) this.touches[_0x29f4c6].x >= _0x42a570 - 0x28 && this.touches[_0x29f4c6].x <= _0x42a570 + 0x28 && this.touches.splice(_0x29f4c6, 0x1);
        }
      }
      if (ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x565f30) {}
    },
    'windowKeyDown': function (_0xe027c3) {
      var _0x26a9bd = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0xe72be2 = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
        _0x26a9bd = ig.system.scale * (_0x26a9bd / ig.system.realWidth),
        _0xe72be2 = ig.system.scale * (_0xe72be2 / ig.system.realHeight);
      if (window.navigator.msPointerEnabled) {
        var _0x1c54c3 = {
          'left': 0x0,
          'top': 0x0
        };
        ig.system.canvas.getBoundingClientRect && (_0x1c54c3 = ig.system.canvas.getBoundingClientRect()), _0xe027c3 = _0xe027c3.changedTouches ? _0xe027c3.changedTouches : [_0xe027c3];
        for (var _0x42f919 = 0x0; _0x42f919 < _0xe027c3.length; ++_0x42f919) {
          for (var _0x138264 = _0xe027c3[_0x42f919], _0x1d36c5 = 'undefined' != typeof _0x138264.identifier ? _0x138264.identifier : 'undefined' != typeof _0x138264.pointerId ? _0x138264.pointerId : 0x1, _0x574ea6 = (_0x138264.clientX - _0x1c54c3.left) / _0x26a9bd, _0x138264 = (_0x138264.clientY - _0x1c54c3.top) / _0xe72be2, _0x2376b2 = 0x0; _0x2376b2 < this.touches.length; ++_0x2376b2) this.touches[_0x2376b2].identifier == _0x1d36c5 && this.touches.splice(_0x2376b2, 0x1);
          this.touches.push({
            'x': _0x574ea6,
            'y': _0x138264,
            'identifier': _0x1d36c5
          });
        }
        for (_0x26a9bd = 0x0; _0x26a9bd < this.touches.length; _0x26a9bd++);
      }
    },
    'windowKeyUp': function (_0x547fda) {
      _0x547fda = 'undefined' != typeof _0x547fda.identifier ? _0x547fda.identifier : 'undefined' != typeof _0x547fda.pointerId ? _0x547fda.pointerId : 0x1;
      for (var _0x6e8537 = 0x0; _0x6e8537 < this.touches.length; ++_0x6e8537) this.touches[_0x6e8537].identifier == _0x547fda && this.touches.splice(_0x6e8537, 0x1);
      for (; 0x0 < this.touches.length;) this.touches.pop();
      if (ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x8f60e5) {}
    },
    'windowMove': function (_0x115f37) {
      var _0x1240a8 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0x5a7659 = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
        _0x1240a8 = ig.system.scale * (_0x1240a8 / ig.system.realWidth),
        _0x5a7659 = ig.system.scale * (_0x5a7659 / ig.system.realHeight),
        _0x47c843 = {
          'left': 0x0,
          'top': 0x0
        };
      ig.system.canvas.getBoundingClientRect && (_0x47c843 = ig.system.canvas.getBoundingClientRect());
      if (window.navigator.msPointerEnabled) {
        for (var _0x42bf71 = 'undefined' != typeof _0x115f37.identifier ? _0x115f37.identifier : 'undefined' != typeof _0x115f37.pointerId ? _0x115f37.pointerId : 0x1, _0x1cc9e5 = 0x0; _0x1cc9e5 < this.touches.length; ++_0x1cc9e5) if (this.touches[_0x1cc9e5].identifier == _0x42bf71) {
          var _0x4dfd1f = (_0x115f37.clientY - _0x47c843.top) / _0x5a7659;
          this.touches[_0x1cc9e5].x = (_0x115f37.clientX - _0x47c843.left) / _0x1240a8, this.touches[_0x1cc9e5].y = _0x4dfd1f;
        }
      }
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0xf2fca7) {}
    },
    'clear': function () {
      for (var _0x42cdae = 0x0; _0x42cdae < this.released.length; ++_0x42cdae) this.released[_0x42cdae] && (this.released.splice(_0x42cdae, 0x1), _0x42cdae--);
    },
    'pollMultitouch': function (_0xd72a1a) {
      !this.multitouchCapable && 0x1 < _0xd72a1a && (this.multitouchCapable = !0x0);
    },
    'spliceFromArray': function (_0x1d1d3c, _0x41cb47) {
      for (var _0xbd14a7 = 0x0; _0xbd14a7 < _0x41cb47.length; _0xbd14a7++) for (var _0x175441 = 0x0; _0x175441 < _0x1d1d3c.length; _0x175441++) _0x1d1d3c[_0x175441].identifier === _0x41cb47[_0xbd14a7].identifier && (_0x1d1d3c.splice(_0x175441, 0x1), _0x175441--);
    },
    'updateSizeProperties': function () {
      var _0x5a8fa2 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0x1e8dbe = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
      this.scaleX = ig.system.scale * (_0x5a8fa2 / ig.system.realWidth), this.scaleY = ig.system.scale * (_0x1e8dbe / ig.system.realHeight);
    },
    'upgrade': function (_0x45175e, _0x38e60b, _0x59f795) {
      var _0x22b94f = {
        'left': 0x0,
        'top': 0x0
      };
      ig.system.canvas.getBoundingClientRect && (_0x22b94f = ig.system.canvas.getBoundingClientRect());
      for (var _0x2a4758 = (_0x59f795.clientX - _0x22b94f.left) / this.scaleX, _0x22b94f = (_0x59f795.clientY - _0x22b94f.top) / this.scaleY, _0x2ea75d = 0x0; _0x2ea75d < _0x45175e.length; _0x2ea75d++) if (void 0x0 !== typeof _0x45175e[_0x2ea75d].identifier && void 0x0 !== typeof _0x59f795.identifier && _0x59f795.identifier === _0x45175e[_0x2ea75d].identifier) {
        _0x45175e.splice(_0x2ea75d, 0x1), _0x38e60b.push({
          'identifier': _0x59f795.identifier,
          'x': _0x2a4758,
          'y': _0x22b94f
        });
        break;
      }
    },
    'updateArray': function (_0x1425ae, _0xc1d109) {
      var _0x3f5f27 = {
        'left': 0x0,
        'top': 0x0
      };
      ig.system.canvas.getBoundingClientRect && (_0x3f5f27 = ig.system.canvas.getBoundingClientRect());
      for (var _0x5ab1bb = (_0xc1d109.clientX - _0x3f5f27.left) / this.scaleX, _0x3f5f27 = (_0xc1d109.clientY - _0x3f5f27.top) / this.scaleY, _0x4ae7ec = 0x0; _0x4ae7ec < _0x1425ae.length; _0x4ae7ec++) if (void 0x0 !== typeof _0x1425ae[_0x4ae7ec].identifier && void 0x0 !== typeof _0xc1d109.identifier && _0xc1d109.identifier === _0x1425ae[_0x4ae7ec].identifier) {
        _0x1425ae[_0x4ae7ec].x = _0x5ab1bb, _0x1425ae[_0x4ae7ec].y = _0x3f5f27;
        break;
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.fake-storage').requires('impact.game').defines(function () {
  ig.FakeStorage = ig.Class.extend({
    'tempData': {},
    'init': function () {
      ig.FakeStorage.instance = this;
    },
    'initUnset': function (_0x40e54e, _0x2447ec) {
      null === this.get(_0x40e54e) && this.set(_0x40e54e, _0x2447ec);
    },
    'set': function (_0x1407ac, _0x27ce77) {
      this.tempData[_0x1407ac] = JSON.stringify(_0x27ce77);
    },
    'setHighest': function (_0x7423a, _0x26c7a0) {
      _0x26c7a0 > this.getFloat(_0x7423a) && this.set(_0x7423a, _0x26c7a0);
    },
    'get': function (_0x2b801a) {
      return 'undefined' == typeof this.tempData[_0x2b801a] ? null : JSON.parse(this.tempData[_0x2b801a]);
    },
    'getInt': function (_0x474d7b) {
      return ~~this.get(_0x474d7b);
    },
    'getFloat': function (_0x4968f2) {
      return parseFloat(this.get(_0x4968f2));
    },
    'getBool': function (_0x522fbf) {
      return !!this.get(_0x522fbf);
    },
    'isSet': function (_0xbc3131) {
      return null !== this.get(_0xbc3131);
    },
    'remove': function (_0x3281ed) {
      delete this.tempData[_0x3281ed];
    },
    'clear': function () {
      this.tempData = {};
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.io-manager').requires('plugins.io.storage', 'plugins.io.mouse', 'plugins.io.keyboard', 'plugins.io.gamepad', 'plugins.io.multitouch', 'plugins.io.multitouch-input', 'plugins.io.gamepad-input', 'plugins.io.fake-storage').defines(function () {
  IoManager = ig.Class.extend({
    'version': '1.0.0',
    'storage': null,
    'localStorageSupport': !0x1,
    'mouse': null,
    'keyboard': null,
    'multitouch': null,
    'gamepad': null,
    'init': function () {
      ig.multitouchInput = new ig.MultitouchInput(), ig.gamepadInput = new ig.GamepadInput(), this.unbindAll(), this.initStorage(), this.initMouse(), this.initKeyboard();
    },
    'unbindAll': function () {
      ig.input.unbindAll(), ig.gamepadInput.unbindAll();
    },
    'initStorage': function () {
      try {
        window.localStorage.setItem('test', 'test'), window.localStorage.removeItem('test'), this.storage = new ig.Storage();
      } catch (_0x284627) {
        console.log("using fake storage"), this.storage = new ig.FakeStorage();
      }
    },
    'initMouse': function () {
      this.mouse = new Mouse();
    },
    'initKeyboard': function () {
      this.keyboard = new Keyboard();
    },
    'initMultitouch': function () {
      this.multitouch = new Multitouch();
    },
    'initGamepad': function () {
      this.gamepad = new Gamepad();
    },
    'press': function (_0x35165d) {
      return ig.input.pressed(_0x35165d) || this.gamepad && this.gamepad.press(_0x35165d) ? !0x0 : !0x1;
    },
    'held': function (_0x110815) {
      return ig.input.state(_0x110815) || this.gamepad && this.gamepad.state(_0x110815) ? !0x0 : !0x1;
    },
    'release': function (_0x375c84) {
      return ig.input.released(_0x375c84) || this.gamepad && this.gamepad.released(_0x375c84) ? !0x0 : !0x1;
    },
    'getClickPos': function () {
      return this.mouse.getPos();
    },
    'getLastClickPos': function () {
      return this.mouse.getLast();
    },
    'getTouchesPos': function () {
      return this.multitouch.getTouchesPos();
    },
    'checkOverlap': function (_0x1e162a, _0x47c6db, _0x346b1a, _0x17330b, _0x2c38ba) {
      return _0x1e162a.x > _0x47c6db + _0x17330b || _0x1e162a.x < _0x47c6db || _0x1e162a.y > _0x346b1a + _0x2c38ba || _0x1e162a.y < _0x346b1a ? !0x1 : !0x0;
    },
    'clear': function () {
      ig.multitouchInput.clear();
    },
    '_supportsLocalStorage': function () {
      try {
        return localStorage.setItem('test', 'test'), localStorage.removeItem('test'), this.localStorageSupport = 'localStorage' in window && null !== window.localStorage;
      } catch (_0x44d3b5) {
        return this.localStorageSupport;
      }
    },
    'storageIsSet': function (_0x2785bf) {
      return 'function' === typeof this.storage.isSet ? this.storage.isSet(_0x2785bf) : null;
    },
    'storageGet': function (_0x22198b) {
      return 'function' === typeof this.storage.get ? this.storage.get(_0x22198b) : null;
    },
    'storageSet': function (_0x40a8c0, _0x536c4c) {
      return 'function' === typeof this.storage.set ? this.storage.set(_0x40a8c0, _0x536c4c) : null;
    },
    'assert': function (_0x49fce4, _0x5e9c1c, _0xd2d381) {
      if (_0x5e9c1c !== _0xd2d381) throw 'actualValue:' + _0x5e9c1c + " not equal to testValue:" + _0xd2d381 + " at " + _0x49fce4;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.storage-manager').requires('impact.game', 'plugins.io.io-manager').defines(function () {
  ig.Game.prototype.name = 'MJS-Game', ig.Game.prototype.version = '1.0.0', ig.Game.prototype.sessionData = {}, ig.Game.prototype.initData = function () {
    return this.sessionData = {
      'sound': 0.5,
      'music': 0.5,
      'level': 0x1,
      'score': 0x0
    };
  }, ig.Game.prototype.setupStorageManager = function () {
    'undefined' === typeof this.name ? console.error("Cannot found Game Name, Storage Manager Cancelled.") : 'undefined' === typeof this.version ? console.error("Cannot found Game Version, Storage Manager Cancelled.") : (this.io || (this.io = new IoManager(), console.log("IO Manager doesn't existed. Initialize...")), console.log("Plug in Storage Manager"), this.storage = this.io.storage, this.storageName = this.name + '-v' + this.version, this.loadAll());
  }, ig.Game.prototype.loadAll = function () {
    var _0x4a66bd = this.storage.get(this.storageName);
    if (null === _0x4a66bd || 'undefined' === typeof _0x4a66bd) _0x4a66bd = this.initData();
    for (var _0x26787e in _0x4a66bd) this.sessionData[_0x26787e] = _0x4a66bd[_0x26787e];
    this.storage.set(this.storageName, _0x4a66bd);
  }, ig.Game.prototype.saveAll = function () {
    var _0x3a9813 = this.storage.get(this.storageName),
      _0xf34049;
    for (_0xf34049 in _0x3a9813) _0x3a9813[_0xf34049] = this.sessionData[_0xf34049];
    this.storage.set(this.storageName, _0x3a9813);
  }, ig.Game.prototype.load = function (_0x1f784b) {
    return this.storage.get(this.storageName)[_0x1f784b];
  }, ig.Game.prototype.save = function (_0x3c419f, _0xfc8399) {
    var _0x4b9dc0 = this.storage.get(this.storageName);
    _0x4b9dc0[_0x3c419f] = _0xfc8399, this.storage.set(this.storageName, _0x4b9dc0);
  };
}), ig.baked = !0x0, ig.module('plugins.splash-loader').requires('impact.loader', 'impact.animation').defines(function () {
  ig.SplashLoader = ig.Loader.extend({
    'tapToStartDivId': 'tap-to-start',
    'bg': new ig.Image('media/graphics/sprites/interface/background.png'),
    'sizeBg': {
      'x': 0x640,
      'y': 0x640
    },
    'splashDesktop': new ig.Image('media/graphics/sprites/interface/title.png'),
    'splashMobile': new ig.Image('media/graphics/sprites/interface/title.png'),
    'loadingFrameImage': new ig.Image('media/graphics/sprites/loading/loading_frame.png'),
    'loadingBarImage': new ig.Image('media/graphics/sprites/loading/loading_bar.png'),
    'init': function (_0x12dba7, _0x577bbf) {
      this.parent(_0x12dba7, _0x577bbf), ig.apiHandler.run('MJSPreroll');
    },
    'end': function () {
      this.parent(), this._drawStatus = 0x1, this.draw(), _SETTINGS.TapToStartAudioUnlock.Enabled ? this.tapToStartDiv(function () {
        ig.system.setGame(MyGame);
      }) : ig.system.setGame(MyGame);
    },
    'tapToStartDiv': function (_0x344ae0) {
      this.desktopCoverDIV = document.getElementById(this.tapToStartDivId);
      if (!this.desktopCoverDIV) {
        this.desktopCoverDIV = document.createElement('div'), this.desktopCoverDIV.id = this.tapToStartDivId, this.desktopCoverDIV.setAttribute('class', 'play'), this.desktopCoverDIV.setAttribute('style', "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"), this.desktopCoverDIV.innerHTML = "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: montserrat;'>" + _STRINGS.Splash.TapToStart + '</div></div>', (document.getElementById('play').parentNode || document.getElementById('ajaxbar')).appendChild(this.desktopCoverDIV);
        try {
          'undefined' !== typeof ig.sizeHandler ? 'undefined' !== typeof ig.sizeHandler.coreDivsToResize && ig.sizeHandler.coreDivsToResize.push('#' + this.tapToStartDivId) : 'undefined' !== typeof coreDivsToResize && (coreDivsToResize.push(this.tapToStartDivId), 'function' === typeof sizeHandler && sizeHandler());
        } catch (_0x55b683) {
          console.log(_0x55b683);
        }
        this.desktopCoverDIV.addEventListener('click', function () {
          ig.soundHandler.unlockWebAudio(), this.setAttribute('style', "visibility: hidden;"), 'function' === typeof _0x344ae0 && _0x344ae0();
        });
      }
    },
    'setupCustomAnimation': function () {
      this.animHeight = this.customAnim.height, this.animWidth = this.customAnim.width, this.customAnim = new ig.Animation(this.customAnim, 0.025, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]);
    },
    'animate': function () {
      ig.Timer.step(), this.customAnim.update();
    },
    'drawCheck': 0x0,
    'draw': function () {
      var _0xab1f1b;
      this._drawStatus += (this.status - this._drawStatus) / 0xf, 0x1 === this.drawCheck && console.log("Font should be loaded before loader draw loop"), 0x2 > this.drawCheck && this.drawCheck++, ig.system.context.fillStyle = '#000', ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height), ig.responsive.toAnchor(0x0, 0x0, 'center-middle'), this.scaleX = ig.system.width / this.sizeBg.x, this.scaleY = ig.system.height / this.sizeBg.y, _0xab1f1b = ig.system.width < ig.system.height ? ig.system.height / this.bg.height : ig.system.width / this.bg.width, ig.responsive.drawScaledImage(this.bg, ig.system.width / 0x2, ig.system.height / 0x2, _0xab1f1b, _0xab1f1b, 0.5, 0.5), this.splashDesktop.draw(ig.system.width / 0x2 - this.splashDesktop.width / 0x2, ig.system.height / 0x2 - this.splashDesktop.height), _0xab1f1b = (this.loadingFrameImage.height - this.loadingBarImage.height) / 0x2, this.loadingFrameImage.draw(ig.system.width / 0x2 - this.loadingFrameImage.width / 0x2, ig.system.height / 0x2 + 0x7d, 0x0, 0x0, this.loadingFrameImage.width, this.loadingFrameImage.height), this.loadingBarImage.draw(ig.system.width / 0x2 - this.loadingBarImage.width / 0x2, ig.system.height / 0x2 + 0x7d + _0xab1f1b, 0x0, 0x0, this.loadingBarImage.width * this._drawStatus, this.loadingBarImage.height);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.tween').requires('impact.entity').defines(function () {
  Array.prototype.indexOf || (Array.prototype.indexOf = function (_0x52c904) {
    for (var _0x3f160e = 0x0; _0x3f160e < this.length; ++_0x3f160e) if (this[_0x3f160e] === _0x52c904) return _0x3f160e;
    return -0x1;
  }), ig.Entity.prototype.tweens = [], ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update, ig.Entity.prototype.update = function () {
    this._preTweenUpdate();
    if (0x0 < this.tweens.length) {
      for (var _0x627338 = [], _0x298672 = 0x0; _0x298672 < this.tweens.length; _0x298672++) this.tweens[_0x298672].update(), this.tweens[_0x298672].complete || _0x627338.push(this.tweens[_0x298672]);
      this.tweens = _0x627338;
    }
  }, ig.Entity.prototype.tween = function (_0x225345, _0x26e620, _0x1c518b) {
    return _0x225345 = new ig.Tween(this, _0x225345, _0x26e620, _0x1c518b), this.tweens.push(_0x225345), _0x225345;
  }, ig.Entity.prototype.pauseTweens = function () {
    for (var _0x51a589 = 0x0; _0x51a589 < this.tweens.length; _0x51a589++) this.tweens[_0x51a589].pause();
  }, ig.Entity.prototype.resumeTweens = function () {
    for (var _0x2b3489 = 0x0; _0x2b3489 < this.tweens.length; _0x2b3489++) this.tweens[_0x2b3489].resume();
  }, ig.Entity.prototype.stopTweens = function (_0x42864d) {
    for (var _0x2ef3bc = 0x0; _0x2ef3bc < this.tweens.length; _0x2ef3bc++) this.tweens[_0x2ef3bc].stop(_0x42864d);
  }, ig.Tween = function (_0x1a3bd3, _0x10dea6, _0x4ff236, _0x470c67) {
    var _0x303733 = {},
      _0x5fccd0 = {},
      _0x1071f0 = {},
      _0x39a76e = 0x0,
      _0xf0bdd8 = !0x1,
      _0x787013 = !0x1,
      _0x23f002 = !0x1;
    this.duration = _0x4ff236, this.paused = this.complete = !0x1, this.easing = ig.Tween.Easing.Linear.EaseNone, this.onComplete = !0x1, this.loop = this.delay = 0x0, this.loopCount = -0x1, ig.merge(this, _0x470c67), this.loopNum = this.loopCount, this.chain = function (_0x24597a) {
      _0x23f002 = _0x24597a;
    }, this.initEnd = function (_0x45b624, _0x18bfac, _0x2630fd) {
      if ('object' !== typeof _0x18bfac[_0x45b624]) _0x2630fd[_0x45b624] = _0x18bfac[_0x45b624];else {
        for (subprop in _0x18bfac[_0x45b624]) _0x2630fd[_0x45b624] || (_0x2630fd[_0x45b624] = {}), this.initEnd(subprop, _0x18bfac[_0x45b624], _0x2630fd[_0x45b624]);
      }
    }, this.initStart = function (_0x1f97ec, _0x5c1cc0, _0x44cdd9, _0x795ce5) {
      if ('object' !== typeof _0x44cdd9[_0x1f97ec]) 'undefined' !== typeof _0x5c1cc0[_0x1f97ec] && (_0x795ce5[_0x1f97ec] = _0x44cdd9[_0x1f97ec]);else {
        for (subprop in _0x44cdd9[_0x1f97ec]) _0x795ce5[_0x1f97ec] || (_0x795ce5[_0x1f97ec] = {}), 'undefined' !== typeof _0x5c1cc0[_0x1f97ec] && this.initStart(subprop, _0x5c1cc0[_0x1f97ec], _0x44cdd9[_0x1f97ec], _0x795ce5[_0x1f97ec]);
      }
    }, this.start = function () {
      this.paused = this.complete = !0x1, this.loopNum = this.loopCount, _0x39a76e = 0x0, -0x1 == _0x1a3bd3.tweens.indexOf(this) && _0x1a3bd3.tweens.push(this), _0x787013 = !0x0, _0xf0bdd8 = new ig.Timer();
      for (var _0x52af28 in _0x10dea6) this.initEnd(_0x52af28, _0x10dea6, _0x5fccd0);
      for (_0x52af28 in _0x5fccd0) this.initStart(_0x52af28, _0x5fccd0, _0x1a3bd3, _0x303733), this.initDelta(_0x52af28, _0x1071f0, _0x1a3bd3, _0x5fccd0);
    }, this.initDelta = function (_0xab174d, _0x1b35a9, _0xb4d7b4, _0x43d70a) {
      if ('object' !== typeof _0x43d70a[_0xab174d]) _0x1b35a9[_0xab174d] = _0x43d70a[_0xab174d] - _0xb4d7b4[_0xab174d];else {
        for (subprop in _0x43d70a[_0xab174d]) _0x1b35a9[_0xab174d] || (_0x1b35a9[_0xab174d] = {}), this.initDelta(subprop, _0x1b35a9[_0xab174d], _0xb4d7b4[_0xab174d], _0x43d70a[_0xab174d]);
      }
    }, this.propUpdate = function (_0x1544f8, _0x55846f, _0xa36269, _0x4a1420, _0x3c6235) {
      if ('object' !== typeof _0xa36269[_0x1544f8]) _0x55846f[_0x1544f8] = 'undefined' != typeof _0xa36269[_0x1544f8] ? _0xa36269[_0x1544f8] + _0x4a1420[_0x1544f8] * _0x3c6235 : _0x55846f[_0x1544f8];else {
        for (subprop in _0xa36269[_0x1544f8]) this.propUpdate(subprop, _0x55846f[_0x1544f8], _0xa36269[_0x1544f8], _0x4a1420[_0x1544f8], _0x3c6235);
      }
    }, this.propSet = function (_0x56d715, _0x2487bc, _0xc36cb3) {
      if ('object' !== typeof _0x2487bc[_0x56d715]) _0xc36cb3[_0x56d715] = _0x2487bc[_0x56d715];else {
        for (subprop in _0x2487bc[_0x56d715]) _0xc36cb3[_0x56d715] || (_0xc36cb3[_0x56d715] = {}), this.propSet(subprop, _0x2487bc[_0x56d715], _0xc36cb3[_0x56d715]);
      }
    }, this.update = function () {
      if (!_0x787013) return !0x1;
      if (this.delay) {
        if (_0xf0bdd8.delta() < this.delay) return;
        this.delay = 0x0, _0xf0bdd8.reset();
      }
      if (this.paused || this.complete) return !0x1;
      var _0x5c26fd = (_0xf0bdd8.delta() + _0x39a76e) / this.duration,
        _0x5c26fd = 0x1 < _0x5c26fd ? 0x1 : _0x5c26fd,
        _0x21b186 = this.easing(_0x5c26fd);
      for (property in _0x1071f0) this.propUpdate(property, _0x1a3bd3, _0x303733, _0x1071f0, _0x21b186);
      if (0x1 <= _0x5c26fd) {
        if (0x0 == this.loopNum || !this.loop) {
          this.complete = !0x0;
          if (this.onComplete) this.onComplete();
          return _0x23f002 && _0x23f002.start(), !0x1;
        }
        if (this.loop == ig.Tween.Loop.Revert) {
          for (property in _0x303733) this.propSet(property, _0x303733, _0x1a3bd3);
          _0x39a76e = 0x0, _0xf0bdd8.reset(), -0x1 != this.loopNum && this.loopNum--;
        } else {
          if (this.loop == ig.Tween.Loop.Reverse) {
            _0x5c26fd = {}, _0x21b186 = {}, ig.merge(_0x5c26fd, _0x5fccd0), ig.merge(_0x21b186, _0x303733), ig.merge(_0x303733, _0x5c26fd), ig.merge(_0x5fccd0, _0x21b186);
            for (property in _0x5fccd0) this.initDelta(property, _0x1071f0, _0x1a3bd3, _0x5fccd0);
            _0x39a76e = 0x0, _0xf0bdd8.reset(), -0x1 != this.loopNum && this.loopNum--;
          }
        }
      }
    }, this.pause = function () {
      this.paused = !0x0, _0xf0bdd8 && _0xf0bdd8.delta && (_0x39a76e += _0xf0bdd8.delta());
    }, this.resume = function () {
      this.paused = !0x1, _0xf0bdd8 && _0xf0bdd8.reset && _0xf0bdd8.reset();
    }, this.stop = function (_0x7d85d8) {
      _0x7d85d8 && (this.loop = this.complete = this.paused = !0x1, _0x39a76e += _0x4ff236, this.update()), this.complete = !0x0;
    };
  }, ig.Tween.Loop = {
    'Revert': 0x1,
    'Reverse': 0x2
  }, ig.Tween.Easing = {
    'Linear': {},
    'Quadratic': {},
    'Cubic': {},
    'Quartic': {},
    'Quintic': {},
    'Sinusoidal': {},
    'Exponential': {},
    'Circular': {},
    'Elastic': {},
    'Back': {},
    'Bounce': {}
  }, ig.Tween.Easing.Linear.EaseNone = function (_0x1ecc12) {
    return _0x1ecc12;
  }, ig.Tween.Easing.Quadratic.EaseIn = function (_0x55f438) {
    return _0x55f438 * _0x55f438;
  }, ig.Tween.Easing.Quadratic.EaseOut = function (_0x3db82d) {
    return -_0x3db82d * (_0x3db82d - 0x2);
  }, ig.Tween.Easing.Quadratic.EaseInOut = function (_0x57bb21) {
    return 0x1 > (_0x57bb21 *= 0x2) ? 0.5 * _0x57bb21 * _0x57bb21 : -0.5 * (--_0x57bb21 * (_0x57bb21 - 0x2) - 0x1);
  }, ig.Tween.Easing.Cubic.EaseIn = function (_0x268f4f) {
    return _0x268f4f * _0x268f4f * _0x268f4f;
  }, ig.Tween.Easing.Cubic.EaseOut = function (_0x4dcd94) {
    return --_0x4dcd94 * _0x4dcd94 * _0x4dcd94 + 0x1;
  }, ig.Tween.Easing.Cubic.EaseInOut = function (_0x241031) {
    return 0x1 > (_0x241031 *= 0x2) ? 0.5 * _0x241031 * _0x241031 * _0x241031 : 0.5 * ((_0x241031 -= 0x2) * _0x241031 * _0x241031 + 0x2);
  }, ig.Tween.Easing.Quartic.EaseIn = function (_0x290001) {
    return _0x290001 * _0x290001 * _0x290001 * _0x290001;
  }, ig.Tween.Easing.Quartic.EaseOut = function (_0xbf4436) {
    return -(--_0xbf4436 * _0xbf4436 * _0xbf4436 * _0xbf4436 - 0x1);
  }, ig.Tween.Easing.Quartic.EaseInOut = function (_0x5f96d4) {
    return 0x1 > (_0x5f96d4 *= 0x2) ? 0.5 * _0x5f96d4 * _0x5f96d4 * _0x5f96d4 * _0x5f96d4 : -0.5 * ((_0x5f96d4 -= 0x2) * _0x5f96d4 * _0x5f96d4 * _0x5f96d4 - 0x2);
  }, ig.Tween.Easing.Quintic.EaseIn = function (_0x3e75c7) {
    return _0x3e75c7 * _0x3e75c7 * _0x3e75c7 * _0x3e75c7 * _0x3e75c7;
  }, ig.Tween.Easing.Quintic.EaseOut = function (_0x19a754) {
    return (_0x19a754 -= 0x1) * _0x19a754 * _0x19a754 * _0x19a754 * _0x19a754 + 0x1;
  }, ig.Tween.Easing.Quintic.EaseInOut = function (_0x4c4770) {
    return 0x1 > (_0x4c4770 *= 0x2) ? 0.5 * _0x4c4770 * _0x4c4770 * _0x4c4770 * _0x4c4770 * _0x4c4770 : 0.5 * ((_0x4c4770 -= 0x2) * _0x4c4770 * _0x4c4770 * _0x4c4770 * _0x4c4770 + 0x2);
  }, ig.Tween.Easing.Sinusoidal.EaseIn = function (_0x41c4e3) {
    return -Math.cos(_0x41c4e3 * Math.PI / 0x2) + 0x1;
  }, ig.Tween.Easing.Sinusoidal.EaseOut = function (_0x47a4ee) {
    return Math.sin(_0x47a4ee * Math.PI / 0x2);
  }, ig.Tween.Easing.Sinusoidal.EaseInOut = function (_0xef8afb) {
    return -0.5 * (Math.cos(Math.PI * _0xef8afb) - 0x1);
  }, ig.Tween.Easing.Exponential.EaseIn = function (_0x19272e) {
    return 0x0 == _0x19272e ? 0x0 : Math.pow(0x2, 0xa * (_0x19272e - 0x1));
  }, ig.Tween.Easing.Exponential.EaseOut = function (_0x6dd540) {
    return 0x1 == _0x6dd540 ? 0x1 : -Math.pow(0x2, -0xa * _0x6dd540) + 0x1;
  }, ig.Tween.Easing.Exponential.EaseInOut = function (_0x35c6df) {
    return 0x0 == _0x35c6df ? 0x0 : 0x1 == _0x35c6df ? 0x1 : 0x1 > (_0x35c6df *= 0x2) ? 0.5 * Math.pow(0x2, 0xa * (_0x35c6df - 0x1)) : 0.5 * (-Math.pow(0x2, -0xa * (_0x35c6df - 0x1)) + 0x2);
  }, ig.Tween.Easing.Circular.EaseIn = function (_0x45773e) {
    return -(Math.sqrt(0x1 - _0x45773e * _0x45773e) - 0x1);
  }, ig.Tween.Easing.Circular.EaseOut = function (_0x354c84) {
    return Math.sqrt(0x1 - --_0x354c84 * _0x354c84);
  }, ig.Tween.Easing.Circular.EaseInOut = function (_0x1911a2) {
    return 0x1 > (_0x1911a2 /= 0.5) ? -0.5 * (Math.sqrt(0x1 - _0x1911a2 * _0x1911a2) - 0x1) : 0.5 * (Math.sqrt(0x1 - (_0x1911a2 -= 0x2) * _0x1911a2) + 0x1);
  }, ig.Tween.Easing.Elastic.EaseIn = function (_0x18ca05) {
    var _0x2a7d87,
      _0x52913b = 0.1,
      _0x4fbfe1 = 0.4;
    if (0x0 == _0x18ca05) return 0x0;
    if (0x1 == _0x18ca05) return 0x1;
    return _0x4fbfe1 || (_0x4fbfe1 = 0.3), !_0x52913b || 0x1 > _0x52913b ? (_0x52913b = 0x1, _0x2a7d87 = _0x4fbfe1 / 0x4) : _0x2a7d87 = _0x4fbfe1 / (0x2 * Math.PI) * Math.asin(0x1 / _0x52913b), -(_0x52913b * Math.pow(0x2, 0xa * (_0x18ca05 -= 0x1)) * Math.sin(0x2 * (_0x18ca05 - _0x2a7d87) * Math.PI / _0x4fbfe1));
  }, ig.Tween.Easing.Elastic.EaseOut = function (_0x469ab0) {
    var _0x3905ad,
      _0x38ef11 = 0.1,
      _0x3bcfbd = 0.4;
    if (0x0 == _0x469ab0) return 0x0;
    if (0x1 == _0x469ab0) return 0x1;
    return _0x3bcfbd || (_0x3bcfbd = 0.3), !_0x38ef11 || 0x1 > _0x38ef11 ? (_0x38ef11 = 0x1, _0x3905ad = _0x3bcfbd / 0x4) : _0x3905ad = _0x3bcfbd / (0x2 * Math.PI) * Math.asin(0x1 / _0x38ef11), _0x38ef11 * Math.pow(0x2, -0xa * _0x469ab0) * Math.sin(0x2 * (_0x469ab0 - _0x3905ad) * Math.PI / _0x3bcfbd) + 0x1;
  }, ig.Tween.Easing.Elastic.EaseInOut = function (_0x5f00e1) {
    var _0x37ab14,
      _0x54203d = 0.1,
      _0x3f9ed2 = 0.4;
    if (0x0 == _0x5f00e1) return 0x0;
    if (0x1 == _0x5f00e1) return 0x1;
    return _0x3f9ed2 || (_0x3f9ed2 = 0.3), !_0x54203d || 0x1 > _0x54203d ? (_0x54203d = 0x1, _0x37ab14 = _0x3f9ed2 / 0x4) : _0x37ab14 = _0x3f9ed2 / (0x2 * Math.PI) * Math.asin(0x1 / _0x54203d), 0x1 > (_0x5f00e1 *= 0x2) ? -0.5 * _0x54203d * Math.pow(0x2, 0xa * (_0x5f00e1 -= 0x1)) * Math.sin(0x2 * (_0x5f00e1 - _0x37ab14) * Math.PI / _0x3f9ed2) : 0.5 * _0x54203d * Math.pow(0x2, -0xa * (_0x5f00e1 -= 0x1)) * Math.sin(0x2 * (_0x5f00e1 - _0x37ab14) * Math.PI / _0x3f9ed2) + 0x1;
  }, ig.Tween.Easing.Back.EaseIn = function (_0x145aa3) {
    return _0x145aa3 * _0x145aa3 * (2.70158 * _0x145aa3 - 1.70158);
  }, ig.Tween.Easing.Back.EaseOut = function (_0x51a46b) {
    return (_0x51a46b -= 0x1) * _0x51a46b * (2.70158 * _0x51a46b + 1.70158) + 0x1;
  }, ig.Tween.Easing.Back.EaseInOut = function (_0x86f98e) {
    return 0x1 > (_0x86f98e *= 0x2) ? 0.5 * _0x86f98e * _0x86f98e * (3.5949095 * _0x86f98e - 2.5949095) : 0.5 * ((_0x86f98e -= 0x2) * _0x86f98e * (3.5949095 * _0x86f98e + 2.5949095) + 0x2);
  }, ig.Tween.Easing.Bounce.EaseIn = function (_0x15b761) {
    return 0x1 - ig.Tween.Easing.Bounce.EaseOut(0x1 - _0x15b761);
  }, ig.Tween.Easing.Bounce.EaseOut = function (_0x4f0cbb) {
    return (_0x4f0cbb /= 0x1) < 0x1 / 2.75 ? 7.5625 * _0x4f0cbb * _0x4f0cbb : _0x4f0cbb < 0x2 / 2.75 ? 7.5625 * (_0x4f0cbb -= 1.5 / 2.75) * _0x4f0cbb + 0.75 : _0x4f0cbb < 2.5 / 2.75 ? 7.5625 * (_0x4f0cbb -= 2.25 / 2.75) * _0x4f0cbb + 0.9375 : 7.5625 * (_0x4f0cbb -= 2.625 / 2.75) * _0x4f0cbb + 0.984375;
  }, ig.Tween.Easing.Bounce.EaseInOut = function (_0x2de852) {
    return 0.5 > _0x2de852 ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(0x2 * _0x2de852) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(0x2 * _0x2de852 - 0x1) + 0.5;
  }, ig.Tween.Interpolation = {
    'Linear': function (_0x4fb6a3, _0x5003b1) {
      var _0x2b89f1 = _0x4fb6a3.length - 0x1,
        _0x124c23 = _0x2b89f1 * _0x5003b1,
        _0x36e1da = Math.floor(_0x124c23),
        _0x5555b0 = TWEEN.Interpolation.Utils.Linear;
      return 0x0 > _0x5003b1 ? _0x5555b0(_0x4fb6a3[0x0], _0x4fb6a3[0x1], _0x124c23) : 0x1 < _0x5003b1 ? _0x5555b0(_0x4fb6a3[_0x2b89f1], _0x4fb6a3[_0x2b89f1 - 0x1], _0x2b89f1 - _0x124c23) : _0x5555b0(_0x4fb6a3[_0x36e1da], _0x4fb6a3[_0x36e1da + 0x1 > _0x2b89f1 ? _0x2b89f1 : _0x36e1da + 0x1], _0x124c23 - _0x36e1da);
    }
  };
}), ig.baked = !0x0, ig.module('plugins.patches.entity-patch').requires('impact.entity').defines(function () {
  ig.Entity.inject({
    'handleMovementTrace': function (_0x1030c9) {
      this.standing = !0x1, _0x1030c9.collision.y && (0x0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0x0 < this.vel.y && (this.standing = !0x0), this.vel.y = 0x0)), _0x1030c9.collision.x && (this.vel.x = 0x0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0x0);
      if (_0x1030c9.collision.slope) {
        var _0x4eb9fc = _0x1030c9.collision.slope;
        if (0x0 < this.bounciness) {
          var _0x391c97 = this.vel.x * _0x4eb9fc.nx + this.vel.y * _0x4eb9fc.ny;
          this.vel.x = (this.vel.x - 0x2 * _0x4eb9fc.nx * _0x391c97) * this.bounciness, this.vel.y = (this.vel.y - 0x2 * _0x4eb9fc.ny * _0x391c97) * this.bounciness;
        } else _0x391c97 = (this.vel.x * _0x4eb9fc.x + this.vel.y * _0x4eb9fc.y) / (_0x4eb9fc.x * _0x4eb9fc.x + _0x4eb9fc.y * _0x4eb9fc.y), this.vel.x = _0x4eb9fc.x * _0x391c97, this.vel.y = _0x4eb9fc.y * _0x391c97, _0x4eb9fc = Math.atan2(_0x4eb9fc.x, _0x4eb9fc.y), _0x4eb9fc > this.slopeStanding.min && _0x4eb9fc < this.slopeStanding.max && (this.standing = !0x0);
      }
      this.pos.x = _0x1030c9.pos.x, this.pos.y = _0x1030c9.pos.y;
    },
    'update': function () {
      this.parent(), null !== this.clickableLayer && 'undefined' !== typeof this.clickableLayer && null !== this.clickableLayer.update && 'function' === typeof this.clickableLayer.update && this.clickableLayer.update(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.tweens-handler').requires('impact.entity', 'plugins.tween', 'plugins.patches.entity-patch').defines(function () {
  Array.prototype.indexOf || (Array.prototype.indexOf = function (_0x1b59a6) {
    for (var _0x17fbbb = 0x0; _0x17fbbb < this.length; ++_0x17fbbb) if (this[_0x17fbbb] === _0x1b59a6) return _0x17fbbb;
    return -0x1;
  }), ig.TweensHandler = ig.Class.extend({
    '_tweens': [],
    '_systemPausedTweens': [],
    'init': function () {},
    'getAll': function () {
      return this._tweens;
    },
    'removeAll': function () {
      this._tweens = [];
    },
    'add': function (_0x4fdfe9) {
      this._tweens.push(_0x4fdfe9);
    },
    'remove': function (_0x4c6cca) {
      _0x4c6cca = this._tweens.indexOf(_0x4c6cca), -0x1 !== _0x4c6cca && this._tweens.splice(_0x4c6cca, 0x1);
    },
    'onSystemPause': function () {
      if (0x0 === this._tweens.length) return !0x1;
      for (var _0x2b9df9 = 0x0, _0x35db2a = null; _0x2b9df9 < this._tweens.length;) _0x35db2a = this._tweens[_0x2b9df9], _0x35db2a._isPlaying && (this._systemPausedTweens.push(_0x35db2a), _0x35db2a.pause()), _0x2b9df9++;
      return !0x0;
    },
    'onSystemResume': function () {
      if (0x0 === this._systemPausedTweens.length) return !0x1;
      for (var _0x5d889f = 0x0; _0x5d889f < this._systemPausedTweens.length;) this._systemPausedTweens[_0x5d889f].resume(), _0x5d889f++;
      return this._systemPausedTweens = [], !0x0;
    },
    'update': function (_0x5cf8ee, _0x49415e) {
      if (0x0 === this._tweens.length) return !0x1;
      var _0x45728a = 0x0;
      for (_0x5cf8ee = void 0x0 !== _0x5cf8ee ? _0x5cf8ee : ig.game.tweens.now(); _0x45728a < this._tweens.length;) this._tweens[_0x45728a].update(_0x5cf8ee) || _0x49415e ? _0x45728a++ : this._tweens.splice(_0x45728a, 0x1);
      return !0x0;
    },
    'now': function () {
      return Date.now();
    }
  }), ig.TweenDef = ig.Class.extend({
    '_ent': null,
    '_valuesStart': {},
    '_valuesEnd': {},
    '_valuesStartRepeat': {},
    '_duration': 0x3e8,
    '_repeat': 0x0,
    '_yoyo': !0x1,
    '_isPlaying': !0x1,
    '_reversed': !0x1,
    '_delayTime': 0x0,
    '_startTime': null,
    '_pauseTime': null,
    '_easingFunction': ig.Tween.Easing.Linear.EaseNone,
    '_interpolationFunction': ig.Tween.Interpolation.Linear,
    '_chainedTweens': [],
    '_onStartCallback': null,
    '_onStartCallbackFired': !0x1,
    '_onUpdateCallback': null,
    '_onCompleteCallback': null,
    '_onStopCallback': null,
    '_onPauseCallback': null,
    '_onResumeCallback': null,
    '_currentElapsed': 0x0,
    'init': function (_0x412f17) {
      this._object = _0x412f17;
    },
    'to': function (_0x51dc23, _0x86f82c) {
      return this._valuesEnd = _0x51dc23, void 0x0 !== _0x86f82c && (this._duration = _0x86f82c), this;
    },
    'start': function (_0x7df80d) {
      if (this._isPlaying) return this;
      ig.game.tweens.add(this), this._isPlaying = !0x0, this._onStartCallbackFired = !0x1, this._startTime = void 0x0 !== _0x7df80d ? _0x7df80d : ig.game.tweens.now(), this._startTime += this._delayTime;
      for (var _0x4949c8 in this._valuesEnd) {
        if (this._valuesEnd[_0x4949c8] instanceof Array) {
          if (0x0 === this._valuesEnd[_0x4949c8].length) continue;
          this._valuesEnd[_0x4949c8] = [this._object[_0x4949c8]].concat(this._valuesEnd[_0x4949c8]);
        }
        void 0x0 !== this._object[_0x4949c8] && (this._valuesStart[_0x4949c8] = this._object[_0x4949c8], !0x1 === this._valuesStart[_0x4949c8] instanceof Array && (this._valuesStart[_0x4949c8] *= 0x1), this._valuesStartRepeat[_0x4949c8] = this._valuesStart[_0x4949c8] || 0x0);
      }
      return this;
    },
    'stop': function () {
      if (!this._isPlaying) return this;
      return ig.game.tweens.remove(this), this._isPlaying = !0x1, null !== this._onStopCallback && this._onStopCallback.call(this._object, this._object), this.stopChainedTweens(), this;
    },
    'pause': function () {
      if (!this._isPlaying) return this;
      return ig.game.tweens.remove(this), this._isPlaying = !0x1, this._pauseTime = ig.game.tweens.now(), null !== this._onPauseCallback && this._onPauseCallback.call(this._object, this._object), this;
    },
    'resume': function () {
      if (this._isPlaying || !this._pauseTime) return this;
      var _0x49317d = ig.game.tweens.now() - this._pauseTime;
      return this._startTime += _0x49317d, ig.game.tweens.add(this), this._isPlaying = !0x0, null !== this._onResumeCallback && this._onResumeCallback.call(this._object, this._object), this._pauseTime = null, this;
    },
    'end': function () {
      return this.update(this._startTime + this._duration), this;
    },
    'stopChainedTweens': function () {
      for (var _0x345800 = 0x0, _0xe9e042 = this._chainedTweens.length; _0x345800 < _0xe9e042; _0x345800++) this._chainedTweens[_0x345800].stop();
    },
    'delay': function (_0x3e993a) {
      return this._delayTime = _0x3e993a, this;
    },
    'repeat': function (_0x1bc16a) {
      return this._repeat = _0x1bc16a, this;
    },
    'repeatDelay': function (_0x50f51f) {
      return this._repeatDelayTime = _0x50f51f, this;
    },
    'yoyo': function (_0x9ed282) {
      return this._yoyo = _0x9ed282, this;
    },
    'easing': function (_0x33a4be) {
      return this._easingFunction = _0x33a4be, this;
    },
    'interpolation': function (_0x2cf142) {
      return this._interpolationFunction = _0x2cf142, this;
    },
    'chain': function () {
      return this._chainedTweens = arguments, this;
    },
    'onStart': function (_0x1435d8) {
      return this._onStartCallback = _0x1435d8, this;
    },
    'onUpdate': function (_0x16e352) {
      return this._onUpdateCallback = _0x16e352, this;
    },
    'onComplete': function (_0x1c9608) {
      return this._onCompleteCallback = _0x1c9608, this;
    },
    'onStop': function (_0x36517c) {
      return this._onStopCallback = _0x36517c, this;
    },
    'onPause': function (_0x4159d5) {
      return this._onPauseCallback = _0x4159d5, this;
    },
    'onResume': function (_0x3ac0eb) {
      return this._onResumeCallback = _0x3ac0eb, this;
    },
    'update': function (_0x41f038) {
      var _0x5a7c93, _0x23b436, _0x347c28;
      if (_0x41f038 < this._startTime) return !0x0;
      !0x1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback.call(this._object, this._object), this._onStartCallbackFired = !0x0), _0x23b436 = (_0x41f038 - this._startTime) / this._duration, this._currentElapsed = _0x23b436 = 0x1 < _0x23b436 ? 0x1 : _0x23b436, _0x347c28 = this._easingFunction(_0x23b436);
      for (_0x5a7c93 in this._valuesEnd) if (void 0x0 !== this._valuesStart[_0x5a7c93]) {
        var _0x3c8e15 = this._valuesStart[_0x5a7c93] || 0x0,
          _0x13c948 = this._valuesEnd[_0x5a7c93];
        _0x13c948 instanceof Array ? this._object[_0x5a7c93] = this._interpolationFunction(_0x13c948, _0x347c28) : ('string' === typeof _0x13c948 && (_0x13c948 = '+' === _0x13c948.charAt(0x0) || '-' === _0x13c948.charAt(0x0) ? _0x3c8e15 + parseFloat(_0x13c948) : parseFloat(_0x13c948)), 'number' === typeof _0x13c948 && (this._object[_0x5a7c93] = _0x3c8e15 + (_0x13c948 - _0x3c8e15) * _0x347c28));
      }
      null !== this._onUpdateCallback && this._onUpdateCallback.call(this._object, this._object, _0x347c28);
      if (0x1 === _0x23b436) {
        if (0x0 < this._repeat) {
          isFinite(this._repeat) && this._repeat--;
          for (_0x5a7c93 in this._valuesStartRepeat) 'string' === typeof this._valuesEnd[_0x5a7c93] && (this._valuesStartRepeat[_0x5a7c93] = _valuesStartRepeat[_0x5a7c93] + parseFloat(_valuesEnd[_0x5a7c93])), this._yoyo && (_0x23b436 = this._valuesStartRepeat[_0x5a7c93], this._valuesStartRepeat[_0x5a7c93] = this._valuesEnd[_0x5a7c93], this._valuesEnd[_0x5a7c93] = _0x23b436), this._valuesStart[_0x5a7c93] = this._valuesStartRepeat[_0x5a7c93];
          this._yoyo && (this._reversed = !this._reversed), this._startTime = void 0x0 !== this._repeatDelayTime ? _0x41f038 + this._repeatDelayTime : _0x41f038 + this._delayTime;
        } else {
          null !== this._onCompleteCallback && this._onCompleteCallback.call(this._object, this._object), _0x41f038 = 0x0;
          for (_0x5a7c93 = this._chainedTweens.length; _0x41f038 < _0x5a7c93; _0x41f038++) this._chainedTweens[_0x41f038].start(this._startTime + this._duration);
          return !0x1;
        }
      }
      return !0x0;
    }
  });
  var _0x52d1fc = [0x1];
  ig.Tween.Interpolation = {
    'Linear': function (_0x23359a, _0x45e5c4) {
      var _0x3b5011 = _0x23359a.length - 0x1,
        _0x375bc8 = _0x3b5011 * _0x45e5c4,
        _0x1698dc = Math.floor(_0x375bc8),
        _0x2cca70 = ig.Tween.Interpolation.Utils.Linear;
      return 0x0 > _0x45e5c4 ? _0x2cca70(_0x23359a[0x0], _0x23359a[0x1], _0x375bc8) : 0x1 < _0x45e5c4 ? _0x2cca70(_0x23359a[_0x3b5011], _0x23359a[_0x3b5011 - 0x1], _0x3b5011 - _0x375bc8) : _0x2cca70(_0x23359a[_0x1698dc], _0x23359a[_0x1698dc + 0x1 > _0x3b5011 ? _0x3b5011 : _0x1698dc + 0x1], _0x375bc8 - _0x1698dc);
    },
    'Bezier': function (_0x170dd2, _0x49788a) {
      for (var _0x2cf89f = 0x0, _0x14702b = _0x170dd2.length - 0x1, _0x17121c = Math.pow, _0x5072c9 = ig.Tween.Interpolation.Utils.Bernstein, _0x586f5c = 0x0; _0x586f5c <= _0x14702b; _0x586f5c++) _0x2cf89f += _0x17121c(0x1 - _0x49788a, _0x14702b - _0x586f5c) * _0x17121c(_0x49788a, _0x586f5c) * _0x170dd2[_0x586f5c] * _0x5072c9(_0x14702b, _0x586f5c);
      return _0x2cf89f;
    },
    'CatmullRom': function (_0x30976c, _0x3dc402) {
      var _0x21eb27 = _0x30976c.length - 0x1,
        _0x47ae75 = _0x21eb27 * _0x3dc402,
        _0x1b751d = Math.floor(_0x47ae75),
        _0x13a949 = ig.Tween.Interpolation.Utils.CatmullRom;
      return _0x30976c[0x0] === _0x30976c[_0x21eb27] ? (0x0 > _0x3dc402 && (_0x1b751d = Math.floor(_0x47ae75 = _0x21eb27 * (0x1 + _0x3dc402))), _0x13a949(_0x30976c[(_0x1b751d - 0x1 + _0x21eb27) % _0x21eb27], _0x30976c[_0x1b751d], _0x30976c[(_0x1b751d + 0x1) % _0x21eb27], _0x30976c[(_0x1b751d + 0x2) % _0x21eb27], _0x47ae75 - _0x1b751d)) : 0x0 > _0x3dc402 ? _0x30976c[0x0] - (_0x13a949(_0x30976c[0x0], _0x30976c[0x0], _0x30976c[0x1], _0x30976c[0x1], -_0x47ae75) - _0x30976c[0x0]) : 0x1 < _0x3dc402 ? _0x30976c[_0x21eb27] - (_0x13a949(_0x30976c[_0x21eb27], _0x30976c[_0x21eb27], _0x30976c[_0x21eb27 - 0x1], _0x30976c[_0x21eb27 - 0x1], _0x47ae75 - _0x21eb27) - _0x30976c[_0x21eb27]) : _0x13a949(_0x30976c[_0x1b751d ? _0x1b751d - 0x1 : 0x0], _0x30976c[_0x1b751d], _0x30976c[_0x21eb27 < _0x1b751d + 0x1 ? _0x21eb27 : _0x1b751d + 0x1], _0x30976c[_0x21eb27 < _0x1b751d + 0x2 ? _0x21eb27 : _0x1b751d + 0x2], _0x47ae75 - _0x1b751d);
    },
    'Utils': {
      'Linear': function (_0x162a3c, _0x217218, _0x1290d2) {
        return (_0x217218 - _0x162a3c) * _0x1290d2 + _0x162a3c;
      },
      'Bernstein': function (_0x20d73c, _0x25e919) {
        var _0x51df27 = ig.Tween.Interpolation.Utils.Factorial;
        return _0x51df27(_0x20d73c) / _0x51df27(_0x25e919) / _0x51df27(_0x20d73c - _0x25e919);
      },
      'Factorial': function (_0x6cc4b0) {
        var _0x36868e = 0x1;
        if (_0x52d1fc[_0x6cc4b0]) return _0x52d1fc[_0x6cc4b0];
        for (var _0x1803c7 = _0x6cc4b0; 0x1 < _0x1803c7; _0x1803c7--) _0x36868e *= _0x1803c7;
        return _0x52d1fc[_0x6cc4b0] = _0x36868e;
      },
      'CatmullRom': function (_0x1a6c86, _0x5a23c7, _0x4c0abd, _0xcedc16, _0x50c440) {
        _0x1a6c86 = 0.5 * (_0x4c0abd - _0x1a6c86), _0xcedc16 = 0.5 * (_0xcedc16 - _0x5a23c7);
        var _0x378e9f = _0x50c440 * _0x50c440;
        return (0x2 * _0x5a23c7 - 0x2 * _0x4c0abd + _0x1a6c86 + _0xcedc16) * _0x50c440 * _0x378e9f + (-0x3 * _0x5a23c7 + 0x3 * _0x4c0abd - 0x2 * _0x1a6c86 - _0xcedc16) * _0x378e9f + _0x1a6c86 * _0x50c440 + _0x5a23c7;
      }
    }
  };
}), ig.baked = !0x0, ig.module('plugins.url-parameters').defines(function () {
  ig.UrlParameters = ig.Class.extend({
    'init': function () {
      switch (getQueryVariable('iphone')) {
        case 'true':
          ig.ua.iPhone = !0x0, console.log("iPhone mode");
      }
      var _0x120998 = getQueryVariable('webview');
      if (_0x120998) switch (_0x120998) {
        case 'true':
          ig.ua.is_uiwebview = !0x0, console.log("webview mode");
      }
      if (_0x120998 = getQueryVariable('debug')) switch (_0x120998) {
        case 'true':
          ig.game.showDebugMenu(), console.log("debug mode");
      }
      switch (getQueryVariable('view')) {
        case 'stats':
          ig.game.resetPlayerStats(), ig.game.endGame();
      }
      getQueryVariable('ad');
    }
  });
}), ig.baked = !0x0, ig.module('plugins.director').requires('impact.impact').defines(function () {
  ig.Director = ig.Class.extend({
    'init': function (_0xde0953, _0x4189f1) {
      this.game = _0xde0953, this.levels = [], this.currentLevel = 0x0, this.append(_0x4189f1);
    },
    'loadLevel': function (_0x3ce719) {
      for (var _0x13d8f4 in ig.sizeHandler.dynamicClickableEntityDivs) {
        var _0x236ae5 = ig.domHandler.getElementById('#' + _0x13d8f4);
        ig.domHandler.hide(_0x236ae5);
      }
      return this.currentLevel = _0x3ce719, this.game.loadLevel(this.levels[_0x3ce719]), !0x0;
    },
    'loadLevelWithoutEntities': function (_0x120a58) {
      return this.currentLevel = _0x120a58, this.game.loadLevelWithoutEntities(this.levels[_0x120a58]), !0x0;
    },
    'append': function (_0x3ca55b) {
      return newLevels = [], 'object' === typeof _0x3ca55b ? (_0x3ca55b.constructor === [].constructor ? newLevels = _0x3ca55b : newLevels[0x0] = _0x3ca55b, this.levels = this.levels.concat(newLevels), !0x0) : !0x1;
    },
    'nextLevel': function () {
      return this.currentLevel + 0x1 < this.levels.length ? this.loadLevel(this.currentLevel + 0x1) : !0x1;
    },
    'previousLevel': function () {
      return 0x0 <= this.currentLevel - 0x1 ? this.loadLevel(this.currentLevel - 0x1) : !0x1;
    },
    'jumpTo': function (_0x4b36b3) {
      var _0x4d51ff = null;
      for (i = 0x0; i < this.levels.length; i++) this.levels[i] == _0x4b36b3 && (_0x4d51ff = i);
      return 0x0 <= _0x4d51ff ? this.loadLevel(_0x4d51ff) : !0x1;
    },
    'firstLevel': function () {
      return this.loadLevel(0x0);
    },
    'lastLevel': function () {
      return this.loadLevel(this.levels.length - 0x1);
    },
    'reloadLevel': function () {
      return this.loadLevel(this.currentLevel);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.impact-storage').requires('impact.game').defines(function () {
  ig.Storage = ig.Class.extend({
    'staticInstantiate': function () {
      return !ig.Storage.instance ? null : ig.Storage.instance;
    },
    'init': function () {
      ig.Storage.instance = this;
    },
    'isCapable': function () {
      return 'undefined' !== typeof window.localStorage;
    },
    'isSet': function (_0x3c81b8) {
      return null !== this.get(_0x3c81b8);
    },
    'initUnset': function (_0x14940c, _0x2e07d3) {
      null === this.get(_0x14940c) && this.set(_0x14940c, _0x2e07d3);
    },
    'get': function (_0x43b552) {
      if (!this.isCapable()) return null;
      try {
        return JSON.parse(localStorage.getItem(_0x43b552));
      } catch (_0x12c165) {
        return window.localStorage.getItem(_0x43b552);
      }
    },
    'getInt': function (_0x266293) {
      return ~~this.get(_0x266293);
    },
    'getFloat': function (_0x11c2f1) {
      return parseFloat(this.get(_0x11c2f1));
    },
    'getBool': function (_0x2b0c58) {
      return !!this.get(_0x2b0c58);
    },
    'key': function (_0xf8c030) {
      return this.isCapable() ? window.localStorage.key(_0xf8c030) : null;
    },
    'set': function (_0x38e73f, _0x87ab5c) {
      if (!this.isCapable()) return null;
      try {
        window.localStorage.setItem(_0x38e73f, JSON.stringify(_0x87ab5c));
      } catch (_0x1c2498) {
        console.log(_0x1c2498);
      }
    },
    'setHighest': function (_0x3e0fef, _0x22b092) {
      _0x22b092 > this.getFloat(_0x3e0fef) && this.set(_0x3e0fef, _0x22b092);
    },
    'remove': function (_0x3e4c3e) {
      if (!this.isCapable()) return null;
      window.localStorage.removeItem(_0x3e4c3e);
    },
    'clear': function () {
      if (!this.isCapable()) return null;
      window.localStorage.clear();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.fullscreen').requires('impact.entity', 'plugins.handlers.size-handler', 'plugins.director').defines(function () {
  ig.Fullscreen = {
    'version': '1.0.0',
    'enableFullscreenButton': !0x0,
    '_isEnabled': 'notChecked',
    'isEnabled': function () {
      return 'notChecked' == this._isEnabled && (this._isEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled ? !0x0 : !0x1), this._isEnabled;
    },
    'isFullscreen': function () {
      return ig.Fullscreen.isEnabled() && (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) ? !0x0 : !0x1;
    },
    'toggleFullscreen': function () {
      ig.Fullscreen.isFullscreen() ? ig.Fullscreen.exitFullscreen() : ig.Fullscreen.requestFullscreen(), ig.sizeHandler.orientationDelayHandler();
      if (ig && ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x59828f) {}
    },
    'requestFullscreen': function () {
      var _0x421bb7 = document.documentElement;
      _0x421bb7.requestFullscreen ? _0x421bb7.requestFullscreen() : _0x421bb7.webkitRequestFullscreen ? _0x421bb7.webkitRequestFullscreen() : _0x421bb7.mozRequestFullScreen ? _0x421bb7.mozRequestFullScreen() : _0x421bb7.msRequestFullscreen ? _0x421bb7.msRequestFullscreen() : console.log("no request fullscreen method available");
    },
    'exitFullscreen': function () {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : console.log("no exit fullscreen method available");
    },
    'divs': {}
  }, ig.Director.inject({
    'loadLevel': function (_0x143393) {
      var _0x2ded30 = ig.Fullscreen.divs,
        _0x3bdb25;
      for (_0x3bdb25 in _0x2ded30) _0x2ded30 = ig.domHandler.getElementById('#' + _0x3bdb25), ig.domHandler.hide(_0x2ded30);
      return this.parent(_0x143393);
    }
  }), ig.SizeHandler.inject({
    'resize': function () {
      this.parent();
      var _0x919aee = ig.Fullscreen.divs,
        _0x4457e3;
      for (_0x4457e3 in _0x919aee) {
        var _0x41217d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y),
          _0x1c29a3 = ig.domHandler.getElementById('#' + _0x4457e3),
          _0x288fa5 = _0x919aee[_0x4457e3].entity_pos_x,
          _0x256577 = _0x919aee[_0x4457e3].entity_pos_y,
          _0x44d4ce = _0x919aee[_0x4457e3].width,
          _0x168639 = _0x919aee[_0x4457e3].height,
          _0x4b921e = ig.domHandler.getElementById('#canvas'),
          _0x311cdd = ig.domHandler.getOffsets(_0x4b921e);
        ig.ua.mobile ? (_0x4b921e = _0x311cdd.left, _0x311cdd = _0x311cdd.top, ig.sizeHandler.disableStretchToFitOnMobileFlag ? (_0x288fa5 = Math.floor(_0x4b921e + _0x288fa5 * ig.sizeHandler.scaleRatioMultiplier.x) + 'px', _0x256577 = Math.floor(_0x311cdd + _0x256577 * ig.sizeHandler.scaleRatioMultiplier.y) + 'px', _0x44d4ce = Math.floor(_0x44d4ce * ig.sizeHandler.scaleRatioMultiplier.x) + 'px', _0x168639 = Math.floor(_0x168639 * ig.sizeHandler.scaleRatioMultiplier.y) + 'px') : (_0x288fa5 = Math.floor(_0x288fa5 * ig.sizeHandler.sizeRatio.x) + 'px', _0x256577 = Math.floor(_0x256577 * ig.sizeHandler.sizeRatio.y) + 'px', _0x44d4ce = Math.floor(_0x44d4ce * ig.sizeHandler.sizeRatio.x) + 'px', _0x168639 = Math.floor(_0x168639 * ig.sizeHandler.sizeRatio.y) + 'px')) : (_0x4b921e = _0x311cdd.left, _0x311cdd = _0x311cdd.top, _0x288fa5 = Math.floor(_0x4b921e + _0x288fa5 * _0x41217d) + 'px', _0x256577 = Math.floor(_0x311cdd + _0x256577 * _0x41217d) + 'px', _0x44d4ce = Math.floor(_0x44d4ce * _0x41217d) + 'px', _0x168639 = Math.floor(_0x168639 * _0x41217d) + 'px'), ig.domHandler.css(_0x1c29a3, {
          'float': 'left',
          'position': 'absolute',
          'left': _0x288fa5,
          'top': _0x256577,
          'width': _0x44d4ce,
          'height': _0x168639,
          'z-index': 0x3
        }), _0x919aee[_0x4457e3]['font-size'] && ig.domHandler.css(_0x1c29a3, {
          'font-size': _0x919aee[_0x4457e3]['font-size'] * _0x41217d + 'px'
        });
      }
    }
  }), ig.FullscreenButton = ig.Entity.extend({
    'enterImage': null,
    'exitImage': null,
    'isReady': !0x1,
    'zIndex': 0xf423f,
    'identifier': null,
    'prevPos': {
      'x': 0x0,
      'y': 0x0
    },
    'invisImagePath': 'media/graphics/misc/invisible.png',
    'init': function (_0x3fcb08, _0x209f83, _0x2dc08d) {
      this.parent(_0x3fcb08, _0x209f83, _0x2dc08d), ig.Fullscreen.isEnabled() && ig.Fullscreen.enableFullscreenButton ? this.enterImage.loaded ? this.initSize() : this.enterImage.loadCallback = function () {
        this.initSize();
      }.bind(this) : this.kill();
    },
    'kill': function () {
      this.parent();
    },
    'destroy': function () {
      this.parent(), console.log('destroy');
    },
    'initSize': function () {
      this.size.x = this.enterImage.width, this.size.y = this.enterImage.height, this.createClickableLayer(), this.isReady = !0x0;
    },
    'createClickableLayer': function () {
      this.identifier = 'fullscreen-button-layer';
      var _0x46e4c9 = ig.domHandler.getElementById('#' + this.identifier);
      _0x46e4c9 ? (ig.domHandler.show(_0x46e4c9), ig.domHandler.attr(_0x46e4c9, 'onclick', 'ig.Fullscreen.toggleFullscreen()')) : this.createClickableOutboundLayer();
    },
    'update': function (_0x4418a9, _0x476e20) {
      _0x4418a9 = this.pos.x, _0x476e20 = this.pos.y;
      if (this.isReady && !(this.prevPos.x === _0x4418a9 && this.prevPos.y === _0x476e20)) {
        ig.Fullscreen.divs[this.identifier] = {}, ig.Fullscreen.divs[this.identifier].width = this.size.x, ig.Fullscreen.divs[this.identifier].height = this.size.y, ig.Fullscreen.divs[this.identifier].entity_pos_x = this.pos.x, ig.Fullscreen.divs[this.identifier].entity_pos_y = this.pos.y;
        var _0x22f9e9 = ig.domHandler.getElementById('#' + this.identifier);
        this.updateCSS(_0x22f9e9), this.prevPos.x = _0x4418a9, this.prevPos.y = _0x476e20;
      }
    },
    'draw': function () {
      this.isReady && (ig.Fullscreen.isFullscreen() ? this.exitImage.draw(this.pos.x, this.pos.y) : this.enterImage.draw(this.pos.x, this.pos.y));
    },
    'createClickableOutboundLayer': function () {
      var _0x34b5c7 = this.identifier,
        _0x4b0f85 = this.invisImagePath,
        _0x136d34 = ig.domHandler.create('div');
      ig.domHandler.attr(_0x136d34, 'id', _0x34b5c7), ig.domHandler.attr(_0x136d34, 'onclick', 'ig.Fullscreen.toggleFullscreen()');
      var _0x576c42 = ig.domHandler.create('a'),
        _0x17ed2d = ig.domHandler.create('img');
      ig.domHandler.css(_0x17ed2d, {
        'width': '100%',
        'height': '100%'
      }), ig.domHandler.attr(_0x17ed2d, 'src', _0x4b0f85), ig.domHandler.addEvent(_0x136d34, 'mousemove', ig.input.mousemove.bind(ig.input), !0x1), ig.domHandler.appendChild(_0x576c42, _0x17ed2d), ig.domHandler.appendChild(_0x136d34, _0x576c42), ig.domHandler.appendToBody(_0x136d34), ig.Fullscreen.divs[_0x34b5c7] = {}, ig.Fullscreen.divs[_0x34b5c7].width = this.size.x, ig.Fullscreen.divs[_0x34b5c7].height = this.size.y, ig.Fullscreen.divs[_0x34b5c7].entity_pos_x = this.pos.x, ig.Fullscreen.divs[_0x34b5c7].entity_pos_y = this.pos.y, this.updateCSS(_0x136d34);
    },
    'updateCSS': function (_0x3b509c) {
      var _0x3146bc = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      if (ig.ua.mobile) {
        var _0x4c2b5d = ig.domHandler.getElementById('#canvas'),
          _0x4c2b5d = ig.domHandler.getOffsets(_0x4c2b5d),
          _0x189a1a = _0x4c2b5d.left,
          _0x1c78aa = _0x4c2b5d.top;
        console.log(_0x4c2b5d.left), ig.sizeHandler.disableStretchToFitOnMobileFlag ? (_0x4c2b5d = Math.floor(_0x189a1a + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px', _0x1c78aa = Math.floor(_0x1c78aa + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px', _0x189a1a = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px', _0x3146bc = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px') : (_0x4c2b5d = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x1c78aa = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + 'px', _0x189a1a = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x3146bc = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + 'px');
      } else _0x4c2b5d = ig.domHandler.getElementById('#canvas'), _0x4c2b5d = ig.domHandler.getOffsets(_0x4c2b5d), _0x189a1a = _0x4c2b5d.left, _0x1c78aa = _0x4c2b5d.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (_0x4c2b5d = Math.floor(_0x189a1a + this.pos.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x1c78aa = Math.floor(_0x1c78aa + this.pos.y * ig.sizeHandler.sizeRatio.y) + 'px', _0x189a1a = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x3146bc = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + 'px') : (_0x4c2b5d = Math.floor(_0x189a1a + this.pos.x * _0x3146bc) + 'px', _0x1c78aa = Math.floor(_0x1c78aa + this.pos.y * _0x3146bc) + 'px', _0x189a1a = Math.floor(this.size.x * _0x3146bc) + 'px', _0x3146bc = Math.floor(this.size.y * _0x3146bc) + 'px');
      ig.domHandler.css(_0x3b509c, {
        'float': 'left',
        'position': 'absolute',
        'left': _0x4c2b5d,
        'top': _0x1c78aa,
        'width': _0x189a1a,
        'height': _0x3146bc,
        'z-index': 0x3
      });
    }
  });
}), ig.baked = !0x0, ig.module('plugins.responsive.responsive-utils').requires('impact.system').defines(function () {
  ig.responsive = {
    'width': 0x0,
    'height': 0x0,
    'halfWidth': 0x0,
    'halfHeight': 0x0,
    'originalWidth': 0x0,
    'originalHeight': 0x0,
    'fillScale': 0x1,
    'scaleX': 0x1,
    'scaleY': 0x1,
    'toAnchor': function (_0x2ba8e2, _0x13d5f4, _0x4cd330) {
      switch (_0x4cd330) {
        case 'top-left':
        case 'left-top':
          return this.toAnchorTopLeft(_0x2ba8e2, _0x13d5f4);
        case 'top-center':
        case 'center-top':
        case 'top':
          return this.toAnchorTopCenter(_0x2ba8e2, _0x13d5f4);
        case 'top-right':
        case 'right-top':
          return this.toAnchorTopRight(_0x2ba8e2, _0x13d5f4);
        case 'left-middle':
        case 'middle-left':
        case 'left':
          return this.toAnchorLeftMiddle(_0x2ba8e2, _0x13d5f4);
        case 'center-middle':
        case 'middle-center':
        case 'middle':
        case 'center':
          return this.toAnchorCenterMiddle(_0x2ba8e2, _0x13d5f4);
        case 'right-middle':
        case 'middle-right':
        case 'right':
          return this.toAnchorRightMiddle(_0x2ba8e2, _0x13d5f4);
        case 'bottom-left':
        case 'left-bottom':
          return this.toAnchorBottomLeft(_0x2ba8e2, _0x13d5f4);
        case 'bottom-center':
        case 'center-bottom':
        case 'bottom':
          return this.toAnchorBottomCenter(_0x2ba8e2, _0x13d5f4);
        case 'bottom-right':
        case 'right-bottom':
          return this.toAnchorBottomRight(_0x2ba8e2, _0x13d5f4);
        default:
          return this.toAnchorDefault(_0x2ba8e2, _0x13d5f4);
      }
    },
    'toAnchorDefault': function (_0x4fcb37, _0x23e208) {
      return {
        'x': _0x4fcb37 + (this.width - this.originalWidth) / 0x2,
        'y': _0x23e208 + (this.height - this.originalHeight) / 0x2
      };
    },
    'toAnchorCenterMiddle': function (_0x217695, _0x18b0a4) {
      return {
        'x': _0x217695 + this.halfWidth,
        'y': _0x18b0a4 + this.halfHeight
      };
    },
    'toAnchorLeftMiddle': function (_0x558d80, _0x35b9bb) {
      return {
        'x': _0x558d80,
        'y': _0x35b9bb + this.halfHeight
      };
    },
    'toAnchorTopCenter': function (_0x1a7cc7, _0x378fff) {
      return {
        'x': _0x1a7cc7 + this.halfWidth,
        'y': _0x378fff
      };
    },
    'toAnchorRightMiddle': function (_0x312d6b, _0x53909a) {
      return {
        'x': _0x312d6b + this.width,
        'y': _0x53909a + this.halfHeight
      };
    },
    'toAnchorBottomCenter': function (_0x4669d7, _0x43ffd8) {
      return {
        'x': _0x4669d7 + this.halfWidth,
        'y': _0x43ffd8 + this.height
      };
    },
    'toAnchorTopLeft': function (_0x377b18, _0x39d861) {
      return {
        'x': _0x377b18,
        'y': _0x39d861
      };
    },
    'toAnchorBottomLeft': function (_0x345329, _0x2ef2d7) {
      return {
        'x': _0x345329,
        'y': _0x2ef2d7 + this.height
      };
    },
    'toAnchorTopRight': function (_0x217912, _0x452880) {
      return {
        'x': _0x217912 + this.width,
        'y': _0x452880
      };
    },
    'toAnchorBottomRight': function (_0xedab78, _0x126d5d) {
      return {
        'x': _0xedab78 + this.width,
        'y': _0x126d5d + this.height
      };
    },
    'drawScaledImage': function (_0x5c6768, _0x45beee, _0x39dd02, _0x128750, _0x4d0f68, _0x5c1fc2, _0x3fa11f) {
      _0x5c1fc2 || (_0x5c1fc2 = 0x0), _0x3fa11f || (_0x3fa11f = 0x0);
      var _0x138abe = ig.system.context;
      _0x138abe.save(), _0x138abe.translate(_0x45beee, _0x39dd02), (0x1 != _0x128750 || 0x1 != _0x4d0f68) && _0x138abe.scale(_0x128750, _0x4d0f68), _0x5c6768.draw(-_0x5c6768.width * _0x5c1fc2, -_0x5c6768.height * _0x3fa11f), _0x138abe.restore();
    }
  };
}), ig.baked = !0x0, ig.module('plugins.responsive.responsive-plugin').requires('impact.system', 'impact.entity', 'plugins.handlers.size-handler', 'plugins.responsive.responsive-utils').defines(function () {
  ig.SizeHandler.inject({
    'resize': function () {
      this.parent();
    },
    'sizeCalcs': function () {
      this.originalResolution || (this.originalResolution = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), ig.responsive.originalWidth = this.desktop.actualResolution.x, ig.responsive.originalHeight = this.desktop.actualResolution.y);
      var _0x8b2602 = window.innerWidth,
        _0x57073f = window.innerHeight,
        _0x23aadf = _0x8b2602 / _0x57073f,
        _0x4e089e = this.originalResolution.x / this.originalResolution.y,
        _0x4d774e = 0x0,
        _0x1dbda2 = 0x0;
      this.windowSize = new Vector2(_0x8b2602, _0x57073f), _0x23aadf < _0x4e089e ? (_0x4d774e = this.originalResolution.x, _0x1dbda2 = _0x4d774e / _0x23aadf, ig.responsive.scaleX = 0x1, ig.responsive.scaleY = _0x1dbda2 / this.originalResolution.y) : (_0x1dbda2 = this.originalResolution.y, _0x4d774e = _0x1dbda2 * _0x23aadf, ig.responsive.scaleX = _0x4d774e / this.originalResolution.x, ig.responsive.scaleY = 0x1), this.scaleRatioMultiplier = new Vector2(_0x8b2602 / _0x4d774e, _0x57073f / _0x1dbda2), this.desktop.actualResolution = new Vector2(_0x4d774e, _0x1dbda2), this.mobile.actualResolution = new Vector2(_0x4d774e, _0x1dbda2), this.desktop.actualSize = new Vector2(_0x8b2602, _0x57073f), this.mobile.actualSize = new Vector2(_0x8b2602, _0x57073f), ig.responsive.width = _0x4d774e, ig.responsive.height = _0x1dbda2, ig.responsive.halfWidth = _0x4d774e / 0x2, ig.responsive.halfHeight = _0x1dbda2 / 0x2, ig.responsive.fillScale = Math.max(ig.responsive.scaleX, ig.responsive.scaleY);
    },
    'resizeLayers': function () {
      ig.system.resize(ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y);
      for (var _0x13d115 = 0x0; _0x13d115 < this.coreDivsToResize.length; _0x13d115++) {
        var _0x4f74d6 = ig.domHandler.getElementById(this.coreDivsToResize[_0x13d115]),
          _0x423dba = Math.floor(ig.sizeHandler.windowSize.x / 0x2 - ig.sizeHandler.desktop.actualSize.x / 0x2),
          _0x14097f = Math.floor(ig.sizeHandler.windowSize.y / 0x2 - ig.sizeHandler.desktop.actualSize.y / 0x2);
        0x0 > _0x423dba && (_0x423dba = 0x0), 0x0 > _0x14097f && (_0x14097f = 0x0), ig.domHandler.resizeOffset(_0x4f74d6, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), _0x423dba, _0x14097f);
      }
      for (var _0x1994b1 in this.adsToResize) _0x13d115 = ig.domHandler.getElementById('#' + _0x1994b1), _0x4f74d6 = ig.domHandler.getElementById('#' + _0x1994b1 + '-Box'), _0x423dba = (window.innerWidth - this.adsToResize[_0x1994b1]['box-width']) / 0x2 + 'px', _0x14097f = (window.innerHeight - this.adsToResize[_0x1994b1]['box-height']) / 0x2 + 'px', _0x13d115 && ig.domHandler.css(_0x13d115, {
        'width': window.innerWidth,
        'height': window.innerHeight
      }), _0x4f74d6 && ig.domHandler.css(_0x4f74d6, {
        'left': _0x423dba,
        'top': _0x14097f
      });
      _0x13d115 = ig.domHandler.getElementById('#canvas'), _0x4f74d6 = ig.domHandler.getOffsets(_0x13d115), _0x13d115 = _0x4f74d6.left, _0x4f74d6 = _0x4f74d6.top, _0x423dba = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      for (_0x1994b1 in this.dynamicClickableEntityDivs) _0x14097f = ig.domHandler.getElementById('#' + _0x1994b1), ig.domHandler.css(_0x14097f, {
        'float': 'left',
        'position': 'absolute',
        'left': Math.floor(_0x13d115 + this.dynamicClickableEntityDivs[_0x1994b1].entity_pos_x * this.scaleRatioMultiplier.x) + 'px',
        'top': Math.floor(_0x4f74d6 + this.dynamicClickableEntityDivs[_0x1994b1].entity_pos_y * this.scaleRatioMultiplier.y) + 'px',
        'width': Math.floor(this.dynamicClickableEntityDivs[_0x1994b1].width * this.scaleRatioMultiplier.x) + 'px',
        'height': Math.floor(this.dynamicClickableEntityDivs[_0x1994b1].height * this.scaleRatioMultiplier.y) + 'px',
        'z-index': 0x3
      }), this.dynamicClickableEntityDivs[_0x1994b1]['font-size'] && ig.domHandler.css(_0x14097f, {
        'font-size': this.dynamicClickableEntityDivs[_0x1994b1]['font-size'] * _0x423dba + 'px'
      });
      $('#ajaxbar').width(this.windowSize.x), $('#ajaxbar').height(this.windowSize.y);
    },
    'reorient': function () {
      ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize(), ig.game && (ig.game.update(), ig.game.draw());
    },
    'resizeBabylon': function () {
      var _0x33525b = window.innerWidth,
        _0x2b12bf = window.innerHeight,
        _0x34b581 = _0x33525b / _0x2b12bf,
        _0x49c8db = ig.responsive.originalWidth,
        _0x3865a7 = ig.responsive.originalHeight,
        _0x330366 = _0x49c8db / _0x3865a7,
        _0x163736 = Math.max(_0x49c8db, _0x3865a7);
      ig.ua.mobile && (_0x163736 = 0x280), minSize = Math.min(_0x49c8db, _0x3865a7), _0x34b581 > _0x330366 ? (_0x2b12bf > _0x3865a7 && (_0x2b12bf = _0x3865a7), _0x33525b = Math.floor(window.innerWidth / window.innerHeight * _0x2b12bf), _0x33525b > _0x163736 && (_0x33525b = _0x163736), _0x2b12bf = Math.floor(window.innerHeight / window.innerWidth * _0x33525b)) : (_0x33525b > _0x49c8db && (_0x33525b = _0x49c8db), _0x2b12bf = Math.floor(window.innerHeight / window.innerWidth * _0x33525b), _0x2b12bf > _0x163736 && (_0x2b12bf = _0x163736), _0x33525b = Math.floor(window.innerWidth / window.innerHeight * _0x2b12bf)), _0x49c8db = _0x34b581 = 0x1, window.innerWidth > _0x163736 && (_0x34b581 = window.innerWidth / _0x163736), window.innerHeight > _0x163736 && (_0x49c8db = window.innerHeight / _0x163736), wgl.system.engine.setSize(_0x33525b, _0x2b12bf), wgl.system.engine.resize(), wgl.system.engine.setHardwareScalingLevel(Math.max(_0x34b581, _0x49c8db)), ig.gameScene.zoomFactor = 0x1, ig.ua.mobile && minSize < _0x163736 && (ig.gameScene.zoomFactor = _0x163736 / minSize), ig.wglW = _0x33525b, ig.wglH = _0x2b12bf, ig.wglInnerW = window.innerWidth, ig.wglInnerH = window.innerHeight, console.log("babylon renderSize : ", wgl.system.engine.getRenderWidth(), wgl.system.engine.getRenderHeight(), "hwScalingLevel : ", wgl.system.engine.getHardwareScalingLevel());
    }
  }), ig.Entity.inject({
    'isEntity': !0x0,
    'isVisible': !0x0,
    'init': function (_0x19345e, _0x439312, _0x2842b5) {
      this.parent(_0x19345e, _0x439312, _0x2842b5), _0x2842b5.anchorType || (this.anchorType = 'none'), this.anchoredPositionX = _0x19345e, this.anchoredPositionY = _0x439312;
    },
    'setAnchoredPosition': function (_0x2d08ff, _0x3eebf, _0x3ce4f3) {
      _0x3ce4f3 || (_0x3ce4f3 = 'default'), this.anchorType = _0x3ce4f3, this.anchoredPositionX = _0x2d08ff, this.anchoredPositionY = _0x3eebf;
    },
    'update': function () {
      this.parent();
      if ('' != this.anchorType && 'none' != this.anchorType) {
        var _0x390307 = ig.responsive.toAnchor(this.anchoredPositionX, this.anchoredPositionY, this.anchorType);
        !0x0 == this.isEntity ? (this.pos.x = _0x390307.x, this.pos.y = _0x390307.y) : (this.pos.x = _0x390307.x + ig.game.screen.x, this.pos.y = _0x390307.y + ig.game.screen.y);
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.scale').requires('impact.entity').defines(function () {
  ig.Entity.inject({
    'scale': {
      'x': 0x1,
      'y': 0x1
    },
    '_offset': {
      'x': 0x0,
      'y': 0x0
    },
    '_scale': {
      'x': 0x1,
      'y': 0x1
    },
    '_size': {
      'x': 0x0,
      'y': 0x0
    },
    'init': function (_0xa53016, _0x103c67, _0x267c17) {
      this.parent(_0xa53016, _0x103c67, _0x267c17), this._offset.x = this.offset.x, this._offset.y = this.offset.y, this._size.x = this.size.x, this._size.y = this.size.y, this.setScale(this.scale.x, this.scale.y);
    },
    'draw': function () {
      var _0x19a5eb = ig.system.context;
      _0x19a5eb.save(), _0x19a5eb.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() - this.offset.y - ig.game.screen.y)), _0x19a5eb.scale(this._scale.x, this._scale.y), null != this.currentAnim && this.currentAnim.draw(0x0, 0x0), _0x19a5eb.restore();
    },
    'setScale': function (_0x11e923, _0x3e3ff8) {
      var _0x1f1c3d = this.size.x,
        _0x44e911 = this.size.y;
      this.scale.x = _0x11e923 || this.scale.x, this.scale.y = _0x3e3ff8 || this.scale.y, this._scale.x = this.scale.x / ig.system.scale, this._scale.y = this.scale.y / ig.system.scale, this.offset.x = this._offset.x * this._scale.x, this.offset.y = this._offset.y * this._scale.y, this.size.x = this._size.x * this._scale.x, this.size.y = this._size.y * this._scale.y, this.pos.x += (_0x1f1c3d - this.size.x) / 0x2, this.pos.y += (_0x44e911 - this.size.y) / 0x2;
    }
  });
}), this.START_BRANDING_SPLASH, ig.baked = !0x0, ig.module('plugins.branding.splash').requires('impact.impact', 'impact.entity').defines(function () {
  ig.BrandingSplash = ig.Class.extend({
    'init': function () {
      ig.game.spawnEntity(EntityBranding, 0x0, 0x0), console.log("spawn branding");
    }
  }), EntityBranding = ig.Entity.extend({
    'autoUpdateScale': !0x1,
    'gravityFactor': 0x0,
    'size': {
      'x': 0x20,
      'y': 0x20
    },
    'splash': new ig.Image('branding/splash1.png'),
    'init': function (_0x138d2a, _0x5a9460, _0x1d4cda) {
      this.parent(_0x138d2a, _0x5a9460, _0x1d4cda), 0x140 >= ig.system.width ? (this.size.x = 0x140, this.size.y = 0xc8) : (this.size.x = 0x1e0, this.size.y = 0xf0), this.pos.x = (ig.system.width - this.size.x) / 0x2, this.pos.y = -this.size.y - 0xc8, this.endPosY = (ig.system.height - this.size.y) / 0x2, _0x138d2a = this.tween({
        'pos': {
          'y': this.endPosY
        }
      }, 0.5, {
        'easing': ig.Tween.Easing.Bounce.EaseIn
      }), _0x5a9460 = this.tween({}, 2.5, {
        'onComplete': function () {
          ig.game.director.loadLevel(ig.game.director.currentLevel);
        }
      }), _0x138d2a.chain(_0x5a9460), _0x138d2a.start(), this.currentAnim = this.anims.idle;
    },
    'createClickableLayer': function () {
      console.log("Build clickable layer"), this.checkClickableLayer('branding-splash', _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow);
    },
    'doesClickableLayerExist': function (_0x121362) {
      for (k in dynamicClickableEntityDivs) if (k == _0x121362) return !0x0;
      return !0x1;
    },
    'checkClickableLayer': function (_0x2d445c, _0x636c5d, _0x459d23) {
      'undefined' == typeof wm && (this.doesClickableLayerExist(_0x2d445c) ? (ig.game.showOverlay([_0x2d445c]), $('#' + _0x2d445c).find('[href]').attr('href', _0x636c5d)) : this.createClickableOutboundLayer(_0x2d445c, _0x636c5d, 'media/graphics/misc/invisible.png', _0x459d23));
    },
    'createClickableOutboundLayer': function (_0x309138, _0x2054c7, _0x3bfe4b, _0x1dffd2) {
      var _0x12226a = ig.$new('div');
      _0x12226a.id = _0x309138, document.body.appendChild(_0x12226a), _0x12226a = $('#' + _0x12226a.id), _0x12226a.css('float', 'left'), _0x12226a.css('position', 'absolute');
      if (ig.ua.mobile) {
        var _0x202790 = window.innerHeight / mobileHeight,
          _0x18c22c = window.innerWidth / mobileWidth;
        _0x12226a.css('left', this.pos.x * _0x18c22c), _0x12226a.css('top', this.pos.y * _0x202790), _0x12226a.css('width', this.size.x * _0x18c22c), _0x12226a.css('height', this.size.y * _0x202790);
      } else _0x202790 = w / 0x2 - destW / 0x2, _0x18c22c = h / 0x2 - destH / 0x2, console.log(_0x202790, _0x18c22c), _0x12226a.css('left', _0x202790 + this.pos.x * multiplier), _0x12226a.css('top', _0x18c22c + this.pos.y * multiplier), _0x12226a.css('width', this.size.x * multiplier), _0x12226a.css('height', this.size.y * multiplier);
      _0x1dffd2 ? _0x12226a.html("<a target='_blank' href='" + _0x2054c7 + "'><img style='width:100%;height:100%' src='" + _0x3bfe4b + "'></a>") : _0x12226a.html("<a href='" + _0x2054c7 + "'><img style='width:100%;height:100%' src='" + _0x3bfe4b + "'></a>"), dynamicClickableEntityDivs[_0x309138] = {}, dynamicClickableEntityDivs[_0x309138].width = this.size.x * multiplier, dynamicClickableEntityDivs[_0x309138].height = this.size.y * multiplier, dynamicClickableEntityDivs[_0x309138].entity_pos_x = this.pos.x, dynamicClickableEntityDivs[_0x309138].entity_pos_y = this.pos.y;
    },
    'draw': function () {
      ig.system.context.fillStyle = '#ffffff', ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height), ig.system.context.fillStyle = '#000', ig.system.context.font = "12px Arial", ig.system.context.textAlign = 'left', 0x140 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 0x96, ig.system.height - 0xf) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 0xa0, ig.system.height - 0xf), this.parent(), this.splash && ig.system.context.drawImage(this.splash.data, 0x0, 0x0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
  });
}), this.END_BRANDING_SPLASH, ig.baked = !0x0, ig.module('game.entities.primary').requires('impact.entity').defines(function () {
  EntityPrimary = ig.Entity.extend({
    'name': 'primary',
    'vertices': [],
    'sat': [],
    'drawShape': !0x0,
    'soundCheck': function (_0x34e3a7) {
      return ig.soundHandler.sfxPlayer.soundList[_0x34e3a7]._sounds[0x0]._ended;
    },
    'bitwiseRound': function (_0x8cf234) {
      return 0.5 + _0x8cf234 << 0x0;
    },
    'randomInteger': function (_0x48a816, _0x346cae) {
      return Math.floor(Math.random() * (_0x346cae - _0x48a816 + 0x1)) + _0x48a816;
    },
    'randomFloat': function (_0x290f79, _0xf6401d) {
      return Math.random() * (_0xf6401d - _0x290f79 + 0x1) + _0x290f79;
    },
    'shuffleArray2': function (_0x46d331) {
      for (var _0x55dc17 = _0x46d331.length, _0x237175, _0x31e75d; 0x0 !== _0x55dc17;) _0x31e75d = Math.floor(Math.random() * _0x55dc17), _0x55dc17 -= 0x1, _0x237175 = _0x46d331[_0x55dc17], _0x46d331[_0x55dc17] = _0x46d331[_0x31e75d], _0x46d331[_0x31e75d] = _0x237175;
      return _0x46d331;
    },
    'shuffleArray': function (_0xf61a5e) {
      for (var _0x1e66d2 = _0xf61a5e.length, _0x1a3fba, _0x192e76; 0x0 < _0x1e66d2;) _0x192e76 = Math.floor(Math.random() * _0x1e66d2), _0x1e66d2--, _0x1a3fba = _0xf61a5e[_0x1e66d2], _0xf61a5e[_0x1e66d2] = _0xf61a5e[_0x192e76], _0xf61a5e[_0x192e76] = _0x1a3fba;
      return _0xf61a5e;
    },
    'fnGetAngleRad': function (_0x439325, _0x103309) {
      return Math.atan2(_0x439325, _0x103309);
    },
    'fnGetDistance': function (_0x9a421c, _0x209825) {
      var _0x5f01fc = _0x9a421c.x - _0x209825.x,
        _0x42cecd = _0x9a421c.y - _0x209825.y;
      return Math.sqrt(_0x5f01fc * _0x5f01fc + _0x42cecd * _0x42cecd);
    },
    'fnGetQuadrantContext': function () {
      var _0x33087a = 0.5 * Math.PI;
      return {
        'right': 0x0,
        'bottom': _0x33087a,
        'left': 0x2 * _0x33087a,
        'top': -0x1 * _0x33087a
      };
    },
    'fnGetQuadrantAnimation': function () {
      var _0x1b366c = 0.5 * Math.PI;
      return {
        'right': _0x1b366c,
        'bottom': 0x2 * _0x1b366c,
        'left': 0x3 * _0x1b366c,
        'top': 0x0
      };
    },
    'fnCtxDot': function (_0x26b3b5, _0x6d664, _0x11d0a5, _0x469831, _0x1e447d) {
      _0x1e447d = _0x1e447d || 0x2, _0x26b3b5.fillStyle = _0x469831 || 'black', _0x26b3b5.fillRect(_0x6d664 - _0x1e447d / 0x2, _0x11d0a5 - _0x1e447d / 0x2, _0x1e447d, _0x1e447d), _0x26b3b5.restore();
    },
    'fnDrawText': function (_0x2ce070, _0x122375, _0x5d2445, _0x1ea500, _0x55b6ea, _0x531492, _0x4559ba, _0x18271b, _0x2fdbbd) {
      ig.system.context.save(), ig.system.context.font = _0x55b6ea, ig.system.context.textAlign = _0x531492 || 'center', ig.system.context.fillStyle = _0x1ea500, ig.system.context.globalAlpha = _0x2fdbbd || 0x1, ig.system.context.fillText(_0x2ce070, _0x122375, _0x5d2445), ig.system.context.restore();
    },
    'fnDrawTextWithShadow': function (_0x2acb0a, _0x39ae2f, _0x45c058, _0x3dd476, _0x931cf6, _0x156ded, _0x9d91c5, _0x246b39, _0x506b0c, _0x402a14) {
      ig.system.context.save(), ig.system.context.font = _0x931cf6, ig.system.context.textAlign = _0x156ded || 'center', ig.system.context.fillStyle = _0x3dd476, ig.system.context.globalAlpha = _0x506b0c || 0x1, _0x402a14 && (ig.system.context.shadowBlur = 0xa, ig.system.context.shadowColor = 'black'), ig.system.context.fillText(_0x2acb0a, _0x39ae2f, _0x45c058), ig.system.context.restore();
    },
    'fnDrawGradientText': function (_0x5f0c6f, _0x50e01f, _0x1fd7e2, _0x31944e, _0xefe033, _0x17868c, _0x276eef, _0x43a0b0, _0x5c47a3, _0x537105, _0x312365, _0x19f325, _0x27db61, _0x1a5dba) {
      ig.system.context.save(), _0xefe033 = ig.system.context.createLinearGradient(_0xefe033, _0x17868c, _0x276eef, _0x43a0b0), _0xefe033.addColorStop(_0x5c47a3, _0x19f325), _0xefe033.addColorStop(_0x537105, _0x27db61), _0xefe033.addColorStop(_0x312365, _0x1a5dba), ig.system.context.textAlign = 'center', ig.system.context.font = _0x5f0c6f, ig.system.context.fillStyle = _0xefe033, ig.system.context.fillText(_0x50e01f, _0x1fd7e2, _0x31944e), ig.system.context.restore();
    },
    'fnDrawStrokeText': function (_0xecf61, _0x3d546a, _0x2b3366, _0x8ee4c4, _0x5d4446, _0x5f592b, _0x468127, _0x404afc) {
      ig.system.context.save(), ig.system.context.font = _0x5f592b, ig.system.context.lineWidth = _0x5d4446, ig.system.context.strokeStyle = _0x8ee4c4, ig.system.context.textAlign = _0x468127 || 'center', ig.system.context.globalAlpha = _0x404afc || 0x1, ig.system.context.strokeText(_0xecf61, _0x3d546a, _0x2b3366), ig.system.context.restore();
    },
    'fnDrawRectangle': function (_0x203e31, _0x2b13cc, _0x2493b7, _0x195991, _0x256c68, _0x1c0624) {
      ig.system.context.save(), ig.system.context.fillStyle = _0x203e31, ig.system.context.globalAlpha = _0x1c0624, ig.system.context.fillRect(_0x195991, _0x256c68, _0x2b13cc, _0x2493b7), ig.system.context.restore();
    },
    'roundRectTwo': function (_0xcad6f3, _0x4e3b01, _0x1cb230, _0x2a8af0, _0x1030bf, _0x313876, _0x5e7cac, _0xa6da92, _0x3d48e6, _0x237f39, _0x548ff3) {
      'undefined' === typeof _0xa6da92 && (_0xa6da92 = !0x0), 'undefined' === typeof _0x313876 && (_0x313876 = 0x5);
      if ('number' === typeof _0x313876) _0x313876 = {
        'tl': _0x313876,
        'tr': _0x313876,
        'br': _0x313876,
        'bl': _0x313876
      };else {
        var _0x5d299d = {
            'tl': 0x0,
            'tr': 0x0,
            'br': 0x0,
            'bl': 0x0
          },
          _0x466c3a;
        for (_0x466c3a in _0x5d299d) _0x313876[_0x466c3a] = _0x313876[_0x466c3a] || _0x5d299d[_0x466c3a];
      }
      _0xcad6f3.save(), _0xcad6f3.globalAlpha = _0x548ff3 || 0x1, _0xcad6f3.lineWidth = 0x5, _0xcad6f3.fillStyle = _0x3d48e6 || 'black', _0xcad6f3.strokeStyle = _0x237f39 || 'white', _0xcad6f3.beginPath(), _0xcad6f3.moveTo(_0x4e3b01 + _0x313876.tl, _0x1cb230), _0xcad6f3.lineTo(_0x4e3b01 + _0x2a8af0 - _0x313876.tr, _0x1cb230), _0xcad6f3.quadraticCurveTo(_0x4e3b01 + _0x2a8af0, _0x1cb230, _0x4e3b01 + _0x2a8af0, _0x1cb230 + _0x313876.tr), _0xcad6f3.lineTo(_0x4e3b01 + _0x2a8af0, _0x1cb230 + _0x1030bf - _0x313876.br), _0xcad6f3.quadraticCurveTo(_0x4e3b01 + _0x2a8af0, _0x1cb230 + _0x1030bf, _0x4e3b01 + _0x2a8af0 - _0x313876.br, _0x1cb230 + _0x1030bf), _0xcad6f3.lineTo(_0x4e3b01 + _0x313876.bl, _0x1cb230 + _0x1030bf), _0xcad6f3.quadraticCurveTo(_0x4e3b01, _0x1cb230 + _0x1030bf, _0x4e3b01, _0x1cb230 + _0x1030bf - _0x313876.bl), _0xcad6f3.lineTo(_0x4e3b01, _0x1cb230 + _0x313876.tl), _0xcad6f3.quadraticCurveTo(_0x4e3b01, _0x1cb230, _0x4e3b01 + _0x313876.tl, _0x1cb230), _0xcad6f3.closePath(), _0x5e7cac && _0xcad6f3.fill(), _0xa6da92 && _0xcad6f3.stroke(), _0xcad6f3.restore();
    },
    'totalDaysinMonth': function () {
      new Date().getMonth();
    },
    'daysInMonth': function (_0x16d843, _0x1037f3) {
      return new Date(_0x1037f3, _0x16d843, 0x0).getDate();
    },
    'weekAndDay': function () {
      for (var _0x2fc239 = new Date(), _0x431b84 = 0x0, _0x26550e = _0x2fc239.getTime(), _0x5b93d6 = _0x2fc239 = _0x2fc239.getMonth(); _0x5b93d6 == _0x2fc239;) _0x431b84++, _0x5b93d6 = new Date(_0x26550e - 0x240c8400 * _0x431b84).getMonth();
      return _0x431b84;
    },
    'getMonthString': function () {
      return this.month = new Date().getMonth(), 0x0 == this.month ? this.month = 'January' : 0x1 == this.month ? this.month = 'February' : 0x2 == this.month ? this.month = 'March' : 0x3 == this.month ? this.month = 'April' : 0x4 == this.month ? this.month = 'May' : 0x5 == this.month ? this.month = 'June' : 0x6 == this.month ? this.month = 'July' : 0x7 == this.month ? this.month = 'August' : 0x8 == this.month ? this.month = 'September' : 0x9 == this.month ? this.month = 'October' : 0xa == this.month ? this.month = 'November' : 0xb == this.month && (this.month = 'December'), this.month;
    },
    'getFullToday': function () {
      this.objToday = new Date(), weekday = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), dayOfWeek = weekday[this.objToday.getDay()], domEnder = function () {
        var _0x7c2f61 = this.objToday;
        if (/1/.test(parseInt((_0x7c2f61 + '').charAt(0x0)))) return 'th';
        return _0x7c2f61 = parseInt((_0x7c2f61 + '').charAt(0x1)), 0x1 == _0x7c2f61 ? 'st' : 0x2 == _0x7c2f61 ? 'nd' : 0x3 == _0x7c2f61 ? 'rd' : 'th';
      }(), dayOfMonth = this.today + (0xa > this.objToday.getDate()) ? '0' + this.objToday.getDate() + domEnder : this.objToday.getDate() + domEnder, months = "January February March April May June July August September October November December".split(" "), curMonth = months[this.objToday.getMonth()], curYear = this.objToday.getFullYear(), curHour = 0xc < this.objToday.getHours() ? this.objToday.getHours() - 0xc : 0xa > this.objToday.getHours() ? '0' + this.objToday.getHours() : this.objToday.getHours(), curMinute = 0xa > this.objToday.getMinutes() ? '0' + this.objToday.getMinutes() : this.objToday.getMinutes(), curSeconds = 0xa > this.objToday.getSeconds() ? '0' + this.objToday.getSeconds() : this.objToday.getSeconds(), curMeridiem = 0xc < this.objToday.getHours() ? 'PM' : 'AM', this.today = curHour + ':' + curMinute + '.' + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
    },
    'checkHighScoreWeek': function () {
      this.high = Math.max(ig.game.firstweek[0x0], ig.game.firstweek[0x1], ig.game.firstweek[0x2], ig.game.firstweek[0x3], ig.game.firstweek[0x4], ig.game.firstweek[0x5], ig.game.firstweek[0x6]), ig.game.allweek[0x0] = this.high, ig.game.storage.set('plane-allweek', ig.game.allweek), this.high = Math.max(ig.game.secondweek[0x0], ig.game.secondweek[0x1], ig.game.secondweek[0x2], ig.game.secondweek[0x3], ig.game.secondweek[0x4], ig.game.secondweek[0x5], ig.game.secondweek[0x6]), ig.game.allweek[0x1] = this.high, ig.game.storage.set('plane-allweek', ig.game.allweek), this.high = Math.max(ig.game.thirdweek[0x0], ig.game.thirdweek[0x1], ig.game.thirdweek[0x2], ig.game.thirdweek[0x3], ig.game.thirdweek[0x4], ig.game.thirdweek[0x5], ig.game.thirdweek[0x6]), ig.game.allweek[0x2] = this.high, ig.game.storage.set('plane-allweek', ig.game.allweek), this.high = Math.max(ig.game.fourthweek[0x0], ig.game.fourthweek[0x1], ig.game.fourthweek[0x2], ig.game.fourthweek[0x3], ig.game.fourthweek[0x4], ig.game.fourthweek[0x5], ig.game.fourthweek[0x6]), ig.game.allweek[0x3] = this.high, ig.game.storage.set('plane-allweek', ig.game.allweek), this.high = Math.max(ig.game.fifthweek[0x0], ig.game.fifthweek[0x1], ig.game.fifthweek[0x2], ig.game.fifthweek[0x3], ig.game.fifthweek[0x4], ig.game.fifthweek[0x5], ig.game.fifthweek[0x6]), ig.game.allweek[0x4] = this.high, ig.game.storage.set('plane-allweek', ig.game.allweek);
    },
    'dateSet': function (_0x11b99e, _0x1c4812) {
      this.date = new Date().getDate(), this.month = new Date().getMonth(), this.week && (ig.game.dateweek1[_0x1c4812] = this.date, ig.game.storage.set('plane-dateweek1', ig.game.dateweek1)), this.week && (ig.game.dateweek2[_0x1c4812] = this.date, ig.game.storage.set('plane-dateweek2', ig.game.dateweek2)), this.week && (ig.game.dateweek3[_0x1c4812] = this.date, ig.game.storage.set('plane-dateweek3', ig.game.dateweek3)), this.week && (ig.game.dateweek4[_0x1c4812] = this.date, ig.game.storage.set('plane-dateweek4', ig.game.dateweek4)), this.week && (ig.game.dateweek5[_0x1c4812] = this.date, ig.game.storage.set('plane-dateweek5', ig.game.dateweek5));
    },
    'wrapText': function (_0x30d676, _0x5f2639, _0x4a86c2, _0x13c9ca, _0x4c8b1b, _0x17850d) {
      _0x5f2639 = _0x5f2639.split("\n");
      for (var _0x5ec791 = '', _0x16a62d = 0x0; _0x16a62d < _0x5f2639.length; _0x16a62d++) _0x5ec791 = _0x5ec791 + _0x5f2639[_0x16a62d] + " breakLine ";
      _0x5f2639 = _0x5ec791.split(" "), _0x5ec791 = '';
      for (_0x16a62d = 0x0; _0x16a62d < _0x5f2639.length; _0x16a62d++) if ('breakLine' != _0x5f2639[_0x16a62d]) {
        var _0x505618 = _0x5ec791 + _0x5f2639[_0x16a62d] + " ";
        _0x30d676.measureText(_0x505618).width > _0x4c8b1b && 0x0 < _0x16a62d ? (_0x30d676.fillText(_0x5ec791, _0x4a86c2, _0x13c9ca), _0x5ec791 = _0x5f2639[_0x16a62d] + " ", _0x13c9ca += _0x17850d) : _0x5ec791 = _0x505618;
      } else _0x30d676.fillText(_0x5ec791, _0x4a86c2, _0x13c9ca), _0x5ec791 = '', _0x13c9ca += _0x17850d;
      _0x30d676.fillText(_0x5ec791, _0x4a86c2, _0x13c9ca);
    },
    'setSAT': function (_0x59656b) {
      this.sat = [], this.vertices = [_0x59656b];
      for (_0x59656b = 0x0; _0x59656b < this.vertices.length; _0x59656b++) for (var _0x53ac89 = 0x0; _0x53ac89 < this.vertices[_0x59656b].length; _0x53ac89++) this.vertices[_0x59656b][_0x53ac89].x += this.pos.x + 0.5 * this.size.x, this.vertices[_0x59656b][_0x53ac89].y += this.pos.y + 0.5 * this.size.y;
      for (_0x59656b = 0x0; _0x59656b < this.vertices.length; _0x59656b++) this.sat.push(new ig.SAT.Shape(this.vertices[_0x59656b]));
    },
    'showSAT': function () {
      if (!0x0 == ig.Entity._debugShowBoxes) {
        var _0x37a1c7 = ig.system.context;
        _0x37a1c7.lineWidth = 0x2, _0x37a1c7.strokeStyle = 'rgb(0,255,188)';
        for (var _0x4f5197 = 0x0; _0x4f5197 < this.vertices.length; _0x4f5197++) {
          for (var _0x390dad = 0x0; _0x390dad < this.vertices[_0x4f5197].length; _0x390dad++) {
            var _0x37fc31 = this.vertices[_0x4f5197][_0x390dad].x,
              _0x264218 = this.vertices[_0x4f5197][_0x390dad].y;
            0x0 == _0x390dad ? (_0x37a1c7.beginPath(), _0x37a1c7.moveTo(_0x37fc31, _0x264218)) : _0x37a1c7.lineTo(_0x37fc31, _0x264218);
          }
          _0x37a1c7.closePath(), _0x37a1c7.stroke();
        }
      }
    },
    'checkSAT': function (_0xf100f0, _0x4b5e4e) {
      for (var _0x364bce = !0x1, _0x3e43bb = 0x0; _0x3e43bb < this.sat.length; _0x3e43bb++) if (ig.game.sat.simpleShapeIntersect(this.getPointerSAT(_0xf100f0, _0x4b5e4e), this.sat[_0x3e43bb])) {
        _0x364bce = !0x0;
        break;
      }
      return _0x364bce;
    },
    'getPointerSAT': function (_0x1e4b76, _0x42418d) {
      return new ig.SAT.Shape([{
        'x': _0x1e4b76,
        'y': _0x42418d
      }]);
    }
  });
}), particle = {
  'velocity': null,
  'position': null,
  'create': function (_0x2c4b5d, _0x50d9fc, _0x388732, _0xa38c54) {
    var _0x38369f = Object.create(this);
    return _0x38369f.velocity = vector.create(0x0, 0x0), _0x38369f.velocity.setLength(_0x388732), _0x38369f.velocity.setAngle(_0xa38c54), _0x38369f.position = vector.create(_0x2c4b5d, _0x50d9fc), _0x38369f;
  },
  'update': function () {
    this.position.addTo(this.velocity);
  }
}, vector = {
  '_x': 0x0,
  '_y': 0x0,
  'create': function (_0x17ebb4, _0x2d2baa) {
    var _0x246802 = Object.create(this);
    return _0x246802._y = _0x2d2baa, _0x246802._x = _0x17ebb4, _0x246802;
  },
  'getX': function () {
    return this._x;
  },
  'getY': function () {
    return this._y;
  },
  'setX': function (_0x29c425) {
    this._x = _0x29c425;
  },
  'setY': function (_0x527861) {
    this._y = _0x527861;
  },
  'getLength': function () {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  },
  'getAngle': function () {
    return Math.atan2(this._y, this._x);
  },
  'setAngle': function (_0x26eae7) {
    length = this.getLength(), this._y = Math.cos(_0x26eae7) * length, this._x = Math.sin(_0x26eae7) * length;
  },
  'setLength': function (_0x39dd9a) {
    angle = this.getAngle(), this._y = Math.cos(angle) * _0x39dd9a, this._x = Math.sin(angle) * _0x39dd9a;
  },
  'add': function (_0x24cf92) {
    return vect = this.create(this._x + _0x24cf92._x, this._y + _0x24cf92._y);
  },
  'subtract': function (_0x1aa007) {
    return vect = this.create(this._x - _0x1aa007._x, this._y - _0x1aa007._y);
  },
  'multiply': function (_0x331384) {
    return vector.create(this._x * _0x331384, this._y * _0x331384);
  },
  'divide': function (_0x19fe88) {
    return vector.create(this._x / _0x19fe88, this._y / _0x19fe88);
  },
  'scale': function (_0x208b90) {
    this._x *= _0x208b90, this._y *= _0x208b90;
  },
  'addTo': function (_0x2a2873) {
    this._x += _0x2a2873._x, this._y += _0x2a2873._y;
  },
  'subtractFrom': function (_0x4b30c2) {
    this._x -= _0x4b30c2._x, this._y -= _0x4b30c2._y;
  }
}, ig.baked = !0x0, ig.module('game.entities.buttons.button').requires('impact.entity', 'plugins.data.vector', 'game.entities.primary').defines(function () {
  EntityButton = ig.Entity.extend({
    'collides': ig.Entity.COLLIDES.NEVER,
    'type': ig.Entity.TYPE.A,
    'size': new Vector2(0x30, 0x30),
    'fillColor': null,
    'zIndex': 0x17318,
    'disable': !0x1,
    'enableEffect': !0x0,
    'isEntity': !0x1,
    'isVisible': !0x0,
    'init': function (_0x353252, _0x464baf, _0x2e9aee) {
      this.parent(_0x353252, _0x464baf, _0x2e9aee), this._parent && (this.zIndex = this._parent.zIndex + 0xa), this.zIndex = this.btnZIndex || this.zIndex, this.btnImage && (this.size = {
        'x': this.btnImage.width,
        'y': this.btnImage.height
      }, this.animSheet = new ig.AnimationSheet(this.btnImage.path, this.size.x, this.size.y), this.addAnim('idle', 0x1, [0x0], !0x0));
    },
    'clicked': function () {
      !this._isTweening && !this.disable && (this.pressEffect(), this.onClicked ? this.onClicked() : '');
    },
    'clicking': function () {
      this._isTweening || this.disable || (this.onClicking ? this.onClicking() : '');
    },
    'released': function () {
      this._isTweening || this.disable || (this.onReleased ? this.onReleased() : '');
    },
    'pressEffect': function () {
      this.enableEffect ? this.setPosTween(this, this.anchoredPositionX, this.anchoredPositionY + 0xa, 0.07, 0x0, this.returnPos) : this.handleClick();
    },
    'handleClick': function () {},
    'quickHandleClick': function () {},
    'enableClick': function () {
      this.disable = !0x1, 'moregames' == this.name && this.show();
    },
    'disableClick': function () {
      this.disable = !0x0, 'moregames' == this.name && this.hide();
    },
    'releasedOutside': function () {
      this._isTweening || this.disable || (this.onReleasedOutside ? this.onReleasedOutside() : '');
    },
    'setPosTween': function (_0x3d6ee4, _0x29738e, _0x26fb2c, _0x213a11, _0x4faa5c, _0x3d5e7c) {
      'function' == typeof this.quickHandleClick && this.quickHandleClick(), this._isTweening = !0x0, _0x3d6ee4.tween({
        'anchoredPositionY': _0x26fb2c
      }, _0x213a11, {
        'onComplete': function () {
          _0x3d5e7c(_0x3d6ee4);
        }.bind(_0x3d6ee4),
        'delay': _0x4faa5c,
        'easing': ig.Tween.Easing.Back.EaseOut
      }).start();
    },
    'returnPos': function (_0x52ddeb) {
      _0x52ddeb.tween({
        'anchoredPositionY': _0x52ddeb.anchoredPositionY - 0xa
      }, 0.3, {
        'onComplete': function () {
          _0x52ddeb._isTweening = !0x1, _0x52ddeb.handleClick();
        }.bind(_0x52ddeb),
        'easing': ig.Tween.Easing.Back.EaseOut
      }).start();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.clickable-div-layer').requires('plugins.data.vector').defines(function () {
  ClickableDivLayer = ig.Class.extend({
    'version': '1.0.0',
    'pos': new Vector2(0x0, 0x0),
    'size': new Vector2(0x0, 0x0),
    'identifier': null,
    'invisImagePath': 'media/graphics/misc/invisible.png',
    'init': function (_0x4633e6) {
      this.pos = new Vector2(_0x4633e6.pos.x, _0x4633e6.pos.y), this.size = new Vector2(_0x4633e6.size.x, _0x4633e6.size.y);
      var _0x383a22 = 'more-games',
        _0x318bcc = 'https://www.marketjs.com',
        _0x58b8c7 = !0x1;
      _0x4633e6.div_layer_name && (_0x383a22 = _0x4633e6.div_layer_name), _0x4633e6.link && (_0x318bcc = _0x4633e6.link), _0x4633e6.newWindow && (_0x58b8c7 = _0x4633e6.newWindow), this.createClickableLayer(_0x383a22, _0x318bcc, _0x58b8c7);
    },
    'createClickableLayer': function (_0x39d964, _0x38fdcf, _0x36f646) {
      this.identifier = _0x39d964;
      var _0x5480d4 = ig.domHandler.getElementById('#' + _0x39d964);
      _0x5480d4 ? (ig.domHandler.show(_0x5480d4), ig.domHandler.attr(_0x5480d4, 'href', _0x38fdcf)) : this.createClickableOutboundLayer(_0x39d964, _0x38fdcf, this.invisImagePath, _0x36f646);
    },
    'update': function (_0x3e2255, _0x4d7f32, _0x229f1a, _0x11f416) {
      this.pos.x === _0x3e2255 && this.pos.y === _0x4d7f32 && this.size.x === _0x229f1a && this.size.y === _0x11f416 || (this.pos.x = _0x3e2255, this.pos.y = _0x4d7f32, this.size.x = _0x229f1a, this.size.y = _0x11f416, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y, _0x3e2255 = ig.domHandler.getElementById('#' + this.identifier), this.updateCSS(_0x3e2255));
    },
    'createClickableOutboundLayer': function (_0x5cceb0, _0x57af12, _0x2eb4ed, _0x503f54) {
      var _0x519b17 = ig.domHandler.create('div');
      ig.domHandler.attr(_0x519b17, 'id', _0x5cceb0);
      var _0x5bdb09 = ig.domHandler.create('a');
      ig.domHandler.addEvent(_0x519b17, 'mousedown', function (_0x298e6d) {
        _0x298e6d.preventDefault();
      }), _0x503f54 ? (ig.domHandler.attr(_0x5bdb09, 'href', _0x57af12), ig.domHandler.attr(_0x5bdb09, 'target', '_blank')) : ig.domHandler.attr(_0x5bdb09, 'href', _0x57af12), _0x57af12 = ig.domHandler.create('img'), ig.domHandler.css(_0x57af12, {
        'width': '100%',
        'height': '100%'
      }), ig.domHandler.attr(_0x57af12, 'src', _0x2eb4ed), ig.domHandler.addEvent(_0x519b17, 'mousemove', ig.input.mousemove.bind(ig.input), !0x1), ig.domHandler.appendChild(_0x5bdb09, _0x57af12), ig.domHandler.appendChild(_0x519b17, _0x5bdb09), ig.domHandler.appendToBody(_0x519b17), ig.sizeHandler.dynamicClickableEntityDivs[_0x5cceb0] = {}, ig.sizeHandler.dynamicClickableEntityDivs[_0x5cceb0].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[_0x5cceb0].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[_0x5cceb0].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[_0x5cceb0].entity_pos_y = this.pos.y, this.updateCSS(_0x519b17);
    },
    'updateCSS': function (_0x234979) {
      var _0x576235 = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      if (ig.ua.mobile) {
        var _0x18af72 = ig.domHandler.getElementById('#canvas'),
          _0xb25a4b = ig.domHandler.getOffsets(_0x18af72),
          _0x18af72 = _0xb25a4b.left,
          _0xb25a4b = _0xb25a4b.top;
        if (ig.sizeHandler.disableStretchToFitOnMobileFlag) var _0x18af72 = Math.floor(_0x18af72 + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px',
          _0xb25a4b = Math.floor(_0xb25a4b + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px',
          _0x4db081 = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px',
          _0x576235 = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px';else _0x18af72 = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + 'px', _0xb25a4b = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + 'px', _0x4db081 = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x576235 = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + 'px';
      } else _0x18af72 = ig.domHandler.getElementById('#canvas'), _0xb25a4b = ig.domHandler.getOffsets(_0x18af72), _0x18af72 = _0xb25a4b.left, _0xb25a4b = _0xb25a4b.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (_0x18af72 = Math.floor(_0x18af72 + this.pos.x * ig.sizeHandler.sizeRatio.x) + 'px', _0xb25a4b = Math.floor(_0xb25a4b + this.pos.y * ig.sizeHandler.sizeRatio.y) + 'px', _0x4db081 = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x576235 = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + 'px') : (_0x18af72 = Math.floor(_0x18af72 + this.pos.x * _0x576235) + 'px', _0xb25a4b = Math.floor(_0xb25a4b + this.pos.y * _0x576235) + 'px', _0x4db081 = Math.floor(this.size.x * _0x576235) + 'px', _0x576235 = Math.floor(this.size.y * _0x576235) + 'px');
      ig.domHandler.css(_0x234979, {
        'float': 'left',
        'position': 'absolute',
        'left': _0x18af72,
        'top': _0xb25a4b,
        'width': _0x4db081,
        'height': _0x576235,
        'z-index': 0x3
      });
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-branding-logo').requires('game.entities.buttons.button', 'plugins.clickable-div-layer').defines(function () {
  EntityButtonBrandingLogo = EntityButton.extend({
    'type': ig.Entity.TYPE.A,
    'gravityFactor': 0x0,
    'logo': new ig.AnimationSheet('branding/logo.png', _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
    'zIndex': 0x2711,
    'size': {
      'x': 0x40,
      'y': 0x42
    },
    'clickableLayer': null,
    'link': null,
    'newWindow': !0x1,
    'div_layer_name': 'branding-logo',
    'name': 'brandinglogo',
    'init': function (_0x2d6703, _0x2f8514, _0x3663e8) {
      this.parent(_0x2d6703, _0x2f8514, _0x3663e8);
      if (!ig.global.wm) {
        if ('undefined' == typeof wm) {
          if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0x0, [0x0], !0x0), this.currentAnim = this.anims.idle, _0x3663e8 && _0x3663e8.centralize && (this.pos.x = ig.system.width / 0x2 - this.size.x / 0x2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer = new ClickableDivLayer(this));else {
            this.kill();
            return;
          }
        }
        this.div_layer_name = _0x3663e8.div_layer_name ? _0x3663e8.div_layer_name : 'branding-logo';
      }
    },
    'show': function () {
      var _0x4cbbf9 = ig.domHandler.getElementById('#' + this.div_layer_name);
      ig.domHandler.show(_0x4cbbf9);
    },
    'hide': function () {
      var _0x4cd7b4 = ig.domHandler.getElementById('#' + this.div_layer_name);
      ig.domHandler.hide(_0x4cd7b4);
    },
    'clicked': function () {},
    'clicking': function () {},
    'released': function () {}
  });
}), ig.baked = !0x0, ig.module('game.entities.branding-logo-placeholder').requires('impact.entity', 'game.entities.buttons.button-branding-logo').defines(function () {
  EntityBrandingLogoPlaceholder = ig.Entity.extend({
    'gravityFactor': 0x0,
    'size': {
      'x': 0x20,
      'y': 0x20
    },
    '_wmDrawBox': !0x0,
    '_wmBoxColor': "rgba(0, 0, 255, 0.7)",
    'init': function (_0x424350, _0x63288c, _0x464879) {
      this.parent(_0x424350, _0x63288c, _0x464879);
      if (_0x464879) switch (console.log("settings found ... using that div layer name"), _0x424350 = _0x464879.div_layer_name, console.log('settings.centralize:', _0x464879.centralize), _0x464879.centralize) {
        case 'true':
          console.log("centralize true"), centralize = !0x0;
          break;
        case 'false':
          console.log("centralize false"), centralize = !0x1;
          break;
        default:
          console.log("default ... centralize false"), centralize = !0x1;
      } else _0x424350 = 'branding-logo', centralize = !0x1;
      if ('undefined' == typeof wm) {
        if (_SETTINGS.Branding.Logo.Enabled) try {
          ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
            'div_layer_name': _0x424350,
            'centralize': centralize
          });
        } catch (_0x204a80) {
          console.log(_0x204a80);
        }
        this.kill();
      }
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.pointer').requires('impact.entity').defines(function () {
  EntityPointer = ig.Entity.extend({
    'checkAgainst': ig.Entity.TYPE.BOTH,
    'size': new Vector2(0x1, 0x1),
    'isFirstPressed': !0x1,
    'isPressed': !0x1,
    'isReleased': !0x1,
    'isHovering': !0x1,
    'hoveringItem': null,
    'objectArray': [],
    'clickedObjectList': [],
    'ignorePause': !0x0,
    'zIndex': 0x186a0,
    'check': function (_0x37ac84) {
      this.objectArray.push(_0x37ac84);
    },
    'clickObject': function (_0x848b0c) {
      this.isFirstPressed && 'function' == typeof _0x848b0c.clicked && (_0x848b0c.clicked(), this.addToClickedObjectList(_0x848b0c)), this.isPressed && !this.isReleased && 'function' == typeof _0x848b0c.clicking && _0x848b0c.clicking(), this.isReleased && 'function' == typeof _0x848b0c.released && (_0x848b0c.released(), this.removeFromClickedObjectList(_0x848b0c));
    },
    'refreshPos': function () {
      this.pos.x = ig.game.io.getClickPos().x + ig.game.screen.x, this.pos.y = ig.game.io.getClickPos().y + ig.game.screen.y;
    },
    'update': function () {
      this.parent(), this.refreshPos();
      var _0x1f013c = null,
        _0x1d155b = -0x1;
      for (a = this.objectArray.length - 0x1; -0x1 < a; a--) this.objectArray[a].zIndex > _0x1d155b && (_0x1d155b = this.objectArray[a].zIndex, _0x1f013c = this.objectArray[a]);
      if (null != _0x1f013c) null != this.hoveringItem ? this.hoveringItem != _0x1f013c && ('function' == typeof this.hoveringItem.leave && this.hoveringItem.leave(), 'function' == typeof _0x1f013c.over && _0x1f013c.over()) : 'function' == typeof _0x1f013c.over && _0x1f013c.over(), this.hoveringItem = _0x1f013c, this.clickObject(_0x1f013c), this.objectArray = [];else {
        if (null != this.hoveringItem && 'function' == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
          for (_0x1f013c = 0x0; _0x1f013c < this.clickedObjectList.length; _0x1f013c++) _0x1d155b = this.clickedObjectList[_0x1f013c], 'function' == typeof _0x1d155b.releasedOutside && _0x1d155b.releasedOutside();
          this.clickedObjectList = [];
        }
      }
      this.isFirstPressed = ig.input.pressed('click'), this.isReleased = ig.input.released('click'), this.isPressed = ig.input.state('click');
    },
    'addToClickedObjectList': function (_0x5e430b) {
      this.clickedObjectList.push(_0x5e430b);
    },
    'removeFromClickedObjectList': function (_0x1db8fe) {
      for (var _0x2939e3 = [], _0xf38f8a = 0x0; _0xf38f8a < this.clickedObjectList.length; _0xf38f8a++) {
        var _0x360caf = this.clickedObjectList[_0xf38f8a];
        _0x360caf != _0x1db8fe && _0x2939e3.push(_0x360caf);
      }
      this.clickedObjectList = _0x2939e3;
    },
    'draw': function () {}
  });
}), ig.baked = !0x0, ig.module('game.entities.pointer-selector').requires('game.entities.pointer').defines(function () {
  EntityPointerSelector = EntityPointer.extend({
    'zIndex': 0x3e8,
    '_wmDrawBox': !0x0,
    '_wmBoxColor': "rgba(0, 0, 255, 0.7)",
    'size': {
      'x': 0x14,
      'y': 0x14
    },
    'init': function (_0x23c0b7, _0x3c4182, _0x33af4c) {
      this.parent(_0x23c0b7, _0x3c4182, _0x33af4c);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.select').requires('impact.entity').defines(function () {
  EntitySelect = ig.Entity.extend({
    'type': ig.Entity.TYPE.B,
    'checkAgainst': ig.Entity.TYPE.A,
    'collides': ig.Entity.COLLIDES.NEVER,
    'canSelect': !0x1,
    'canSelectTimerDuration': 0.35,
    'zIndex': 0x1869f,
    'isHovering': !0x1,
    'isSelected': !0x1,
    'init': function (_0x42f5c9, _0x49d172, _0x42802c) {
      this.parent(_0x42f5c9, _0x49d172, _0x42802c), this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration);
    },
    'doesClickableLayerExist': function (_0xa7d92e) {
      for (k in dynamicClickableEntityDivs) if (k == _0xa7d92e) return !0x0;
      return !0x1;
    },
    'checkClickableLayer': function (_0x28f209, _0x2a98aa, _0x4f1dfa) {
      'undefined' == typeof wm && (this.doesClickableLayerExist(_0x28f209) ? (ig.game.showOverlay([_0x28f209]), $('#' + _0x28f209).find('[href]').attr('href', _0x2a98aa)) : this.createClickableOutboundLayer(_0x28f209, _0x2a98aa, 'media/graphics/misc/invisible.png', _0x4f1dfa));
    },
    'createClickableOutboundLayer': function (_0x4104ec, _0x1a612d, _0x21d467, _0x32f88d) {
      var _0x132ec3 = ig.$new('div');
      _0x132ec3.id = _0x4104ec, document.body.appendChild(_0x132ec3), $('#' + _0x132ec3.id).css('float', 'left'), $('#' + _0x132ec3.id).css('width', this.size.x * multiplier), $('#' + _0x132ec3.id).css('height', this.size.y * multiplier), $('#' + _0x132ec3.id).css('position', 'absolute');
      var _0x5f2fa1 = w / 0x2 - destW / 0x2,
        _0x3ebb63 = h / 0x2 - destH / 0x2;
      w == mobileWidth ? ($('#' + _0x132ec3.id).css('left', this.pos.x), $('#' + _0x132ec3.id).css('top', this.pos.y)) : ($('#' + _0x132ec3.id).css('left', _0x5f2fa1 + this.pos.x * multiplier), $('#' + _0x132ec3.id).css('top', _0x3ebb63 + this.pos.y * multiplier)), _0x32f88d ? $('#' + _0x132ec3.id).html("<a target='_blank' href='" + _0x1a612d + "'><img style='width:100%;height:100%' src='" + _0x21d467 + "'></a>") : $('#' + _0x132ec3.id).html("<a href='" + _0x1a612d + "'><img style='width:100%;height:100%' src='" + _0x21d467 + "'></a>"), dynamicClickableEntityDivs[_0x4104ec] = {}, dynamicClickableEntityDivs[_0x4104ec].width = $('#' + _0x132ec3.id).width(), dynamicClickableEntityDivs[_0x4104ec].height = $('#' + _0x132ec3.id).height(), dynamicClickableEntityDivs[_0x4104ec].entity_pos_x = this.pos.x, dynamicClickableEntityDivs[_0x4104ec].entity_pos_y = this.pos.y;
    },
    'hovered': function () {
      this.isHovering = !0x0, this.dehoverOthers();
    },
    'dehoverOthers': function () {
      var _0x4d51de = ig.game.getEntitiesByType(EntitySelect);
      for (i = 0x0; i < _0x4d51de.length; i++) _0x4d51de[i] != this && (_0x4d51de[i].isHovering = !0x1);
    },
    'deselectOthers': function () {
      var _0xf331da = ig.game.getEntitiesByType(EntitySelect);
      for (i = 0x0; i < _0xf331da.length; i++) _0xf331da[i] != this && (_0xf331da[i].isSelected = !0x1);
    },
    'update': function () {
      this.parent(), this.canSelectTimer && 0x0 < this.canSelectTimer.delta() && (this.canSelect = !0x0, this.canSelectTimer = null);
    }
  });
}), ig.baked = !0x0, ig.module('game.plugins.camera').requires('impact.entity').defines(function () {
  EntityCameraControl = ig.Entity.extend({
    'zIndex': 0x2710,
    'init': function (_0x3d928c, _0x355ffe, _0x498e2d) {
      this.endPos = this.startPos = null, this.trueClick = this.dragging = !0x1, ig.game.screen = {
        'x': 0x0,
        'y': 0x0
      }, ig.game.camera = {
        'x': 0x0,
        'y': 0x0
      }, this.doubleClick = {
        'elapsed': null,
        'active': !0x1
      }, this['default'] = {
        'sensitivity': {
          'drag': 0xf,
          'keys': 0x14
        },
        'keybinds': {
          'up': 'up',
          'down': 'down',
          'left': 'left',
          'right': 'right'
        },
        'boundary': {
          'active': !0x0,
          'x1': 0x190,
          'y1': 0x190,
          'x2': 0x190,
          'y2': 0x190
        }
      }, this.sensitivity = JSON.parse(JSON.stringify(this['default'].sensitivity)), this.keybinds = JSON.parse(JSON.stringify(this['default'].keybinds)), this.boundary = JSON.parse(JSON.stringify(this['default'].boundary)), this.updateCheck = _0x498e2d.updateCheck ? _0x498e2d.updateCheck : function () {
        return !0x0;
      };
    },
    'update': function () {
      this.updateCheck() || this.cameraDrag();
    },
    'lifted': function () {
      this.endPos = this.startPos = null, this.trueClick = this.dragging = !0x1, this.sensitivity = JSON.parse(JSON.stringify(this['default'].sensitivity));
    },
    'cameraDrag': function () {
      var _0x5efce3 = ig.game.getEntitiesByType(EntityPointer)[0x0];
      if (_0x5efce3) {
        if (_0x5efce3.isFirstPressed) this.startPos = ig.game.io.getClickPos(), this.trueClick = !0x0;else {
          if (_0x5efce3.isPressed && 0x0 != _0x5efce3.clickedObjectList.length) {
            for (var _0x4ce105 = 0x0; _0x4ce105 < _0x5efce3.clickedObjectList.length; _0x4ce105++) (_0x5efce3.clickedObjectList[_0x4ce105].isVisible || !_0x5efce3.clickedObjectList[_0x4ce105].isEntity) && this.lifted();
          }
        }
        if (!0x0 == this.trueClick) {
          if (_0x5efce3.isReleased || ig.ua.mobile && 'up' == _0x5efce3.state) this.lifted();else {
            if (null != this.startPos) {
              if (this.doubleClick.active) return;
              this.dragging = !0x0, this.endPos = ig.game.io.getClickPos();
            }
          }
        }
        this.boundary.active && (ig.game.camera.x <= -this.boundary.x1 && (ig.game.camera.x = -this.boundary.x1), ig.game.camera.y <= -this.boundary.y1 && (ig.game.camera.y = -this.boundary.y1), ig.game.camera.x >= this.boundary.x2 && (ig.game.camera.x = this.boundary.x2), ig.game.camera.y >= this.boundary.y2 && (ig.game.camera.y = this.boundary.y2));
      } else this.pointer = ig.game.spawnEntity(EntityPointer, 0x0, 0x0, {});
      if (null != this.startPos && null != this.endPos) {
        if (this.doubleClick.active) return;
        _0x5efce3 = this.endPos, _0x4ce105 = 0x0 >= this.sensitivity.drag ? 0x0 : 0x64 <= this.sensitivity.drag ? 0x64 : this.sensitivity.drag, this.startPos.x -= (this.startPos.x - _0x5efce3.x) / 0x5, this.startPos.y -= (this.startPos.y - _0x5efce3.y) / 0x5, ig.game.camera.x += (this.startPos.x - _0x5efce3.x) * (_0x4ce105 / 0x64), ig.game.camera.y += (this.startPos.y - _0x5efce3.y) * (_0x4ce105 / 0x64), !0x1 == this.trueClick && (_0x5efce3 = ig.util.distanceBetween(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y), 0x0 != _0x5efce3 && 0x1 >= _0x5efce3 && this.lifted());
      }
      ig.game.screen.x = ig.game.camera.x, ig.game.screen.y = ig.game.camera.y;
    },
    'fnc_centerPos': function (_0x29fd7e, _0x3a21e9) {
      var _0x34186f = _0x29fd7e && _0x3a21e9 ? !0x0 : !0x1;
      _0x29fd7e = _0x29fd7e ? _0x29fd7e : ig.system.width / 0x2, _0x3a21e9 = _0x3a21e9 ? _0x3a21e9 : ig.system.height / 0x2, this.startPos = {
        'x': ig.system.width / 0x2 - ig.game.screen.x,
        'y': ig.system.height / 0x2 - ig.game.screen.y
      }, this.endPos = {
        'x': ig.system.width - _0x29fd7e,
        'y': ig.system.height - _0x3a21e9
      }, this.sensitivity.drag = this['default'].sensitivity.drag * (0x64 + (0x64 - this['default'].sensitivity.drag)) / 0x64, _0x34186f || (ig.game.getEntitiesByType(EntityPointer)[0x0].isReleased = !0x0, this.trueClick = !0x1);
    },
    'fnc_doubleClick': function (_0x193b2e) {
      _0x193b2e = _0x193b2e || {
        'reset1st': function () {
          console.log("No resets for double click");
        },
        'callback': function () {
          console.log("No function when double click is triggered");
        },
        'updating': function () {
          console.log("Comment this out");
        }
      };
      var _0x5cc80d = ig.game.getEntitiesByType(EntityPointer)[0x0];
      if (_0x5cc80d) {
        _0x5cc80d.isFirstPressed && (this.doubleClick.elapsed > Date.now() && (this.doubleClick.active = !0x0, _0x193b2e.reset1st()), this.doubleClick.elapsed = Date.now() + 0x12c);
        if (this.doubleClick.active && (_0x5cc80d.isReleased || ig.ua.mobile && 'up' == _0x5cc80d.state)) this.doubleClick.active = !0x1, _0x193b2e.callback();
        _0x193b2e.updating();
      }
    },
    'fnc_inputs': function () {
      ig.input.actions[this.keybinds.up] && (ig.game.camera.y -= this.sensitivity.keys), ig.input.actions[this.keybinds.down] && (ig.game.camera.y += this.sensitivity.keys), ig.input.actions[this.keybinds.left] && (ig.game.camera.x -= this.sensitivity.keys), ig.input.actions[this.keybinds.right] && (ig.game.camera.x += this.sensitivity.keys);
    },
    'updateCheck': function () {}
  });
}), ig.baked = !0x0, ig.module('game.plugins.text').defines(function () {
  ig.ModText = {
    'drawTextAndImage': function (_0x48cf6c, _0xa4dfc3, _0x3a9b86, _0x598585, _0x1adf10) {
      var _0x3b5675, _0x4ddb8f;
      _0x48cf6c.push("\n");
      var _0x532e51 = ig.system.context,
        _0x413b3c = 0x0,
        _0x1be949 = 0x0,
        _0x5a9dc1 = _0x532e51.fillStyle,
        _0x33495e = _0x532e51.alignText,
        _0x41e213 = 0x0,
        _0x35348a = 0x0,
        _0x5e6756 = 0x0,
        _0x9f7a1f = 0x0,
        _0xfe0f46 = [],
        _0x13a6af = 0x0,
        _0x3d7281 = 0x0;
      _0x532e51.textBaseline = 'center';
      for (var _0x322566 = 0x0, _0x1bd842 = 0x0; _0x1bd842 < _0x48cf6c.length; _0x1bd842++) if ('object' == typeof _0x48cf6c[_0x1bd842]) {
        if (_0x48cf6c[_0x1bd842].image.data instanceof HTMLImageElement) {
          var _0x241f95 = _0x48cf6c[_0x1bd842];
          _0x3b5675 = _0x241f95.image.width * (_0x241f95.scale.x / _0x241f95.image.width), _0x4ddb8f = _0x241f95.image.height * (_0x241f95.scale.y / _0x241f95.image.height), _0x322566 += _0x3b5675, _0x4ddb8f >= _0x41e213 && (_0x41e213 = _0x4ddb8f), _0x4ddb8f >= _0x5e6756 && (_0x5e6756 = _0x4ddb8f), _0x13a6af = 0x1;
        }
      } else 'string' == typeof _0x48cf6c[_0x1bd842] && (ig.ModText.checkHexColor(_0x48cf6c[_0x1bd842]) || ("\n" == _0x48cf6c[_0x1bd842] ? (_0xfe0f46.push(_0x322566), _0x35348a <= _0x322566 && (_0x35348a = _0x322566), _0x322566 = 0x0) : (_0x322566 += _0x532e51.measureText(_0x48cf6c[_0x1bd842]).width, _0x532e51.measureText('M').fontBoundingBoxAscent >= _0x41e213 && (_0x41e213 = _0x532e51.measureText('M').fontBoundingBoxAscent), _0x532e51.measureText('M').fontBoundingBoxAscent >= _0x9f7a1f && (_0x9f7a1f = _0x532e51.measureText('M').fontBoundingBoxAscent))), _0x3d7281 = 0x1);
      switch (_0x532e51.textAlign) {
        case 'center':
          _0x322566 = _0x35348a / 0x2;
          break;
        case 'right':
          _0x322566 = _0x35348a;
          break;
        default:
          _0x322566 = 0x0;
      }
      _0x532e51.textAlign = 'left';
      for (var _0x4f24ca = 0x0, _0x2c4288 = 0x0, _0x1bd842 = 0x0; _0x1bd842 < _0x48cf6c.length; _0x1bd842++) {
        switch (_0x598585) {
          case 'center':
            _0x2c4288 = (_0x35348a - _0xfe0f46[_0x4f24ca]) / 0x2;
            break;
          case 'right':
            _0x2c4288 = _0x35348a - _0xfe0f46[_0x4f24ca];
            break;
          default:
            _0x2c4288 = 0x0;
        }
        if ('object' == typeof _0x48cf6c[_0x1bd842]) {
          if (_0x48cf6c[_0x1bd842].image.data instanceof HTMLImageElement) {
            _0x241f95 = _0x48cf6c[_0x1bd842], _0x3b5675 = _0x241f95.image.width * (_0x241f95.scale.x / _0x241f95.image.width), _0x4ddb8f = _0x241f95.image.height * (_0x241f95.scale.y / _0x241f95.image.height);
            var _0x1ed4a0 = 0x0;
            _0x41e213 >= _0x4ddb8f && (_0x1ed4a0 = (_0x41e213 - _0x4ddb8f) / 0x2), _0x532e51.save(), _0x5e6756 >= _0x9f7a1f || !_0x3d7281 ? _0x532e51.translate(_0xa4dfc3 + _0x413b3c - _0x322566 + _0x2c4288, _0x3a9b86 + _0x1ed4a0 + _0x1be949 - _0x5e6756 / 0x2) : _0x532e51.translate(_0xa4dfc3 + _0x413b3c - _0x322566 + _0x2c4288, _0x3a9b86 + _0x1ed4a0 + _0x1be949 + 0.75 * (_0x9f7a1f - _0x5e6756)), _0x532e51.scale(_0x241f95.scale.x / _0x241f95.image.width, _0x241f95.scale.y / _0x241f95.image.height), _0x241f95.image.draw(0x0, 0x0), _0x532e51.restore(), _0x413b3c += _0x3b5675;
          }
        } else 'string' == typeof _0x48cf6c[_0x1bd842] && (ig.ModText.checkHexColor(_0x48cf6c[_0x1bd842]) ? _0x532e51.fillStyle = _0x48cf6c[_0x1bd842] : "\n" == _0x48cf6c[_0x1bd842] ? (_0x413b3c = 0x0, _0x1be949 += _0x41e213 + 0x5, _0x4f24ca += 0x1) : (_0x4ddb8f = _0x48cf6c[_0x1bd842], _0x3b5675 = _0x532e51.measureText(_0x4ddb8f).width, _0x1ed4a0 = 0x0, _0x41e213 <= _0x532e51.measureText('M').fontBoundingBoxAscent && (_0x1ed4a0 = (_0x532e51.measureText('M').fontBoundingBoxAscent - _0x41e213) / 0x2), _0x241f95 = !0x1, _0x1adf10 && _0x1adf10.back && _0x1adf10.front && (_0x241f95 = !0x0), _0x241f95 ? _0x5e6756 >= _0x9f7a1f || !_0x13a6af ? ig.ModText.drawOutlineText(_0x4ddb8f, _0xa4dfc3 + _0x413b3c - _0x322566 + _0x2c4288, _0x3a9b86 + _0x1ed4a0 + _0x1be949 + _0x9f7a1f / 0x3, _0x1adf10) : ig.ModText.drawOutlineText(_0x4ddb8f, _0xa4dfc3 + _0x413b3c - _0x322566 + _0x2c4288, _0x3a9b86 + _0x1ed4a0 + _0x1be949 + _0x5e6756 - (_0x5e6756 - _0x9f7a1f), _0x1adf10) : _0x5e6756 >= _0x9f7a1f || !_0x13a6af ? _0x532e51.fillText(_0x4ddb8f, _0xa4dfc3 + _0x413b3c - _0x322566 + _0x2c4288, _0x3a9b86 + _0x1ed4a0 + _0x1be949 + _0x9f7a1f / 0x3) : _0x532e51.fillText(_0x4ddb8f, _0xa4dfc3 + _0x413b3c - _0x322566 + _0x2c4288, _0x3a9b86 + _0x1ed4a0 + _0x1be949 + _0x5e6756 - (_0x5e6756 - _0x9f7a1f)), _0x413b3c += _0x3b5675));
      }
      _0x532e51.fillStyle = _0x5a9dc1, _0x532e51.alignText = _0x33495e;
    },
    'drawOutlineText': function (_0x5d2ed3, _0x36bbbb, _0x3d846f, _0x4a5228) {
      var _0x2a96ab = ig.system.context,
        _0x15f7cd = parseInt(_0x2a96ab.font.replace(/\D/g, ''));
      _0x2a96ab.strokeStyle = _0x4a5228.back, _0x2a96ab.fillStyle = _0x4a5228.front, _0x2a96ab.miterLimit = 0x2, _0x2a96ab.lineJoin = 'circle', _0x2a96ab.lineWidth = 0.2 * _0x15f7cd, _0x2a96ab.strokeText(_0x5d2ed3, _0x36bbbb, _0x3d846f), _0x2a96ab.lineWidth = 0x1, _0x2a96ab.fillText(_0x5d2ed3, _0x36bbbb, _0x3d846f);
    },
    'checkHexColor': function (_0x412c61) {
      return /^#([0-9A-F]{3}){1,2}$/i.test(_0x412c61);
    }
  };
}), ig.baked = !0x0, ig.module('game.plugins.thunder').defines(function () {
  VectorLightning = function (_0x44bc83, _0x31f533, _0x4f7d74, _0x64889e) {
    this.X = _0x44bc83, this.Y = _0x31f533, this.X1 = _0x4f7d74, this.Y1 = _0x64889e;
  }, VectorLightning.prototype = {
    'dX': function () {
      return this.X1 - this.X;
    },
    'dY': function () {
      return this.Y1 - this.Y;
    },
    'Normalized': function () {
      var _0x4ddbc2 = this.Length();
      return new VectorLightning(this.X, this.Y, this.X + this.dX() / _0x4ddbc2, this.Y + this.dY() / _0x4ddbc2);
    },
    'Length': function () {
      return Math.sqrt(Math.pow(this.dX(), 0x2) + Math.pow(this.dY(), 0x2));
    },
    'Multiply': function (_0x44059e) {
      return new VectorLightning(this.X, this.Y, this.X + this.dX() * _0x44059e, this.Y + this.dY() * _0x44059e);
    },
    'Clone': function () {
      return new VectorLightning(this.x, this.y, this.X1, this.Y1);
    }
  }, Lightning = function () {
    this.config = {
      'enabled': !0x0,
      'Threshold': 0x1,
      'Segments': 0x5,
      'GlowColor': '#FF0000',
      'GlowWidth': 0x14,
      'GlowBlur': 0x28,
      'GlowAlpha': 0x1e,
      'Color': '#FFD100',
      'Width': 0x5,
      'Blur': 0x1e,
      'BlurColor': '#00D100',
      'Alpha': 0x1
    };
  }, Lightning.prototype = {
    'Cast': function (_0x3af217, _0x5e2ba8, _0x422bc2) {
      _0x3af217.save();
      if (_0x5e2ba8 && _0x422bc2 && (_0x422bc2 = new VectorLightning(_0x5e2ba8.X1, _0x5e2ba8.Y1, _0x422bc2.X1, _0x422bc2.Y1), !(this.config.Threshold && _0x422bc2.Length() > _0x3af217.canvas.width * this.config.Threshold))) {
        var _0x36320 = _0x422bc2.Length(),
          _0x480da3 = _0x5e2ba8;
        _0x5e2ba8 = _0x36320 / _0x3af217.canvas.width;
        var _0x37c978 = Math.floor(this.config.Segments * _0x5e2ba8),
          _0x36320 = _0x36320 / _0x37c978;
        if (this.config.enabled) for (var _0x3e9f7c = 0x1; _0x3e9f7c <= _0x37c978; _0x3e9f7c++) {
          var _0x4ad889 = _0x422bc2.Multiply(0x1 / _0x37c978 * _0x3e9f7c);
          _0x3e9f7c != _0x37c978 && (_0x4ad889.Y1 += 0.5 * _0x36320 * Math.random() * (0.5 > Math.random() ? -0x1 : 0x1), _0x4ad889.X1 += 0.5 * _0x36320 * Math.random() * (0.5 > Math.random() ? -0x1 : 0x1)), _0x480da3 = new VectorLightning(_0x480da3.X1, _0x480da3.Y1, _0x4ad889.X1, _0x4ad889.Y1), this.Line(_0x3af217, _0x480da3, {
            'Color': this.config.GlowColor,
            'With': this.config.GlowWidth * _0x5e2ba8,
            'Blur': this.config.GlowBlur * _0x5e2ba8,
            'BlurColor': this.config.GlowColor,
            'Alpha': this.Random(this.config.GlowAlpha, 0x2 * this.config.GlowAlpha) / 0x64
          }), this.Line(_0x3af217, _0x480da3, {
            'Color': this.config.Color,
            'With': this.config.Width,
            'Blur': this.config.Blur,
            'BlurColor': this.config.BlurColor,
            'Alpha': this.config.Alpha
          });
        }
        _0x3af217.restore();
      }
    },
    'Circle': function (_0x18e76e, _0x181568) {
      _0x18e76e.beginPath(), _0x18e76e.arc(_0x181568.X1, _0x181568.Y1, 0x14, 0x0, 0x2 * Math.PI, !0x1), _0x18e76e.fillStyle = 'white', _0x18e76e.shadowBlur = 0x64, _0x18e76e.shadowColor = '#2319FF', _0x18e76e.fill();
    },
    'Line': function (_0x583697, _0xc370e0, _0x56b1e7) {
      _0x583697.beginPath(), _0x583697.strokeStyle = _0x56b1e7.Color, _0x583697.lineWidth = _0x56b1e7.With, _0x583697.moveTo(_0xc370e0.X, _0xc370e0.Y), _0x583697.lineTo(_0xc370e0.X1, _0xc370e0.Y1), _0x583697.globalAlpha = _0x56b1e7.Alpha, _0x583697.shadowBlur = _0x56b1e7.Blur, _0x583697.shadowColor = _0x56b1e7.BlurColor, _0x583697.stroke();
    },
    'Random': function (_0x167a68, _0x30d0db) {
      return Math.floor(Math.random() * (_0x30d0db - _0x167a68)) + _0x167a68;
    }
  };
}), ig.baked = !0x0, ig.module('game.plugin').requires('impact.image').defines(function () {
  ig.Image.inject({
    'drawScale': function (_0x82a5c2, _0x1162be, _0x15db7c, _0x567b8e) {
      this.loaded && (ig.system.context.drawImage(this.data, 0x0, 0x0, this.width, this.height, _0x82a5c2, _0x1162be, _0x15db7c, _0x567b8e), ig.Image.drawCount++);
    }
  }), ig.util = {
    'pi2': 0x2 * Math.PI,
    'pio2': Math.PI / 0x2,
    'lerp': function (_0x25ba9e, _0x811a25, _0x4d377a) {
      return _0x4d377a = 0x0 > _0x4d377a ? 0x0 : _0x4d377a, _0x25ba9e + (_0x811a25 - _0x25ba9e) * (0x1 < _0x4d377a ? 0x1 : _0x4d377a);
    },
    'clamp': function (_0x1d4880, _0x2a3cf0, _0x4683f7) {
      return Math.max(_0x2a3cf0, Math.min(_0x4683f7, _0x1d4880));
    },
    'distanceBetweenPoints': function (_0x1fad68, _0x4869d7) {
      return Math.sqrt(Math.pow(_0x1fad68.x - _0x4869d7.x, 0x2) + Math.pow(_0x1fad68.y - _0x4869d7.y, 0x2));
    },
    'distanceBetween': function (_0x13aaf2, _0x434bd5, _0x3de062, _0x525837) {
      return Math.sqrt(Math.pow(_0x3de062 - _0x13aaf2, 0x2) + Math.pow(_0x525837 - _0x434bd5, 0x2));
    },
    'angleBetweenPoints': function (_0x30e4e9, _0x2ed5c3) {
      return Math.atan2(_0x2ed5c3.y - _0x30e4e9.y, _0x2ed5c3.x - _0x30e4e9.x);
    },
    'angleBetween': function (_0x3e0cbf, _0xec8648, _0x493fc7, _0x507510) {
      return Math.atan2(_0x507510 - _0xec8648, _0x493fc7 - _0x3e0cbf);
    },
    'toRad': function (_0x6f982c) {
      return _0x6f982c / 0xb4 * Math.PI;
    },
    'toDeg': function (_0x5194f3) {
      return 0xb4 * (_0x5194f3 / Math.PI);
    },
    'rBetween': function (_0x159207, _0x546606) {
      return _0x159207 + Math.random() * (_0x546606 - _0x159207);
    },
    'iBetween': function (_0xed0c8f, _0x53206f) {
      return _0xed0c8f + Math.floor(Math.random() * (_0x53206f - _0xed0c8f + 0x1));
    },
    'containPoint': function (_0x48cdb6, _0x4e7c14) {
      for (var _0x2fab00, _0x1f579b = 0x0; _0x1f579b < _0x48cdb6.length; _0x1f579b++) {
        var _0x29f887 = _0x1f579b + 0x1;
        _0x29f887 == _0x48cdb6.length && (_0x29f887 = 0x0);
        var _0x5c2a44 = _0x48cdb6[_0x1f579b],
          _0x29f887 = _0x48cdb6[_0x29f887],
          _0x5c2a44 = (_0x4e7c14.y - _0x5c2a44.y) * (_0x29f887.x - _0x5c2a44.x) - (_0x4e7c14.x - _0x5c2a44.x) * (_0x29f887.y - _0x5c2a44.y);
        if (0x0 == _0x5c2a44) break;
        if (0x0 === _0x1f579b) _0x2fab00 = _0x5c2a44;else {
          if (0x0 > _0x2fab00 * _0x5c2a44) return !0x1;
        }
      }
      return !0x0;
    },
    'pick': function (_0x672baf) {
      var _0x1ed7e8 = Math.floor(Math.random() * _0x672baf.length);
      return _0x672baf.splice(_0x1ed7e8, 0x1)[0x0];
    },
    'randomIn': function (_0x291210) {
      var _0x30cfca = Math.floor(Math.random() * _0x291210.length);
      return _0x291210[_0x30cfca];
    }
  }, ig.drawUtil = {
    'fontStyle': function (_0x246dfa, _0x399f59, _0xe2c539) {
      var _0x5cc35d = ig.system.context;
      _0x5cc35d.font = _0x246dfa, _0x5cc35d.fillStyle = _0x399f59, _0x5cc35d.textAlign = _0xe2c539;
    },
    'strokeStyle': function (_0x289ac3, _0x176515) {
      var _0x38f108 = ig.system.context;
      _0x38f108.strokeStyle = _0x289ac3, _0x38f108.lineWidth = _0x176515;
    },
    'fillTextStroke': function (_0x3110be, _0x5cbbad, _0x39a228) {
      var _0x16cd78 = ig.system.context;
      _0x16cd78.strokeText(_0x3110be, _0x5cbbad, _0x39a228), _0x16cd78.fillText(_0x3110be, _0x5cbbad, _0x39a228);
    },
    'clearScreen': function (_0x42cc5d) {
      var _0x41a936 = ig.system.context;
      _0x41a936.fillStyle = _0x42cc5d, _0x41a936.clearRect(0x0, 0x0, ig.system.width, ig.system.height);
    },
    'fillScreen': function (_0x11be08) {
      var _0x21f43d = ig.system.context;
      _0x21f43d.fillStyle = _0x11be08, _0x21f43d.fillRect(0x0, 0x0, ig.system.width, ig.system.height);
    },
    'roundRect': function (_0x4982d8, _0x45e39c, _0x22b7a8, _0x10e40a, _0x437a24) {
      var _0x13159e = ig.system.context;
      return _0x13159e.beginPath(), _0x13159e.moveTo(_0x4982d8 + _0x437a24, _0x45e39c), _0x13159e.arcTo(_0x4982d8 + _0x22b7a8, _0x45e39c, _0x4982d8 + _0x22b7a8, _0x45e39c + _0x10e40a, _0x437a24), _0x13159e.arcTo(_0x4982d8 + _0x22b7a8, _0x45e39c + _0x10e40a, _0x4982d8, _0x45e39c + _0x10e40a, _0x437a24), _0x13159e.arcTo(_0x4982d8, _0x45e39c + _0x10e40a, _0x4982d8, _0x45e39c, _0x437a24), _0x13159e.arcTo(_0x4982d8, _0x45e39c, _0x4982d8 + _0x22b7a8, _0x45e39c, _0x437a24), _0x13159e.closePath(), _0x13159e;
    }
  };
}), ig.baked = !0x0, ig.module('game.data.configurations').defines(function () {
  ig.SaveData = {
    'maxedLevels': 0x3,
    'unlockAllLevels': !0x1,
    'unlocks': 0x1,
    'player': {
      'premiums': 0x0
    }
  }, ig.GameConfig = {
    'computeShopPurchase': function (_0x5c7b65) {
      return _0x5c7b65;
    },
    'computeBuy': function (_0x448e7a) {
      return _0x448e7a;
    },
    'computeUpgrade': function (_0x371e2f) {
      return Math.floor(0.25 * _0x371e2f.towerCost * _0x371e2f.stats.info.level);
    },
    'computeSelling': function (_0x122ee8) {
      return Math.floor(0.25 * _0x122ee8.towerCost + 0x5 * _0x122ee8.stats.info.level);
    },
    'bullet': {
      'normal-1': new ig.Image('media/graphics/sprites/game/projectiles/projectile-1.png'),
      'normal-2': new ig.Image('media/graphics/sprites/game/projectiles/projectile-2.png'),
      'normal-3': new ig.Image('media/graphics/sprites/game/projectiles/projectile-3.png'),
      'normal-4': new ig.Image('media/graphics/sprites/game/projectiles/projectile-4.png')
    },
    'targetingSystemProcesses': ['nearest', 'farthest', 'youngest', 'oldest'],
    'tower': {
      'Basic': {
        'cost': 0x14,
        'targetingSystem': {
          'process': 'nearest',
          'locking': !0x0
        },
        'stats': {
          'name': "Basic Tower",
          'description': "A simple tower;\n;for shooting;\n;down enemies;\n;in its range.".split(';'),
          'targeting': ['any'],
          'bullet': {
            'type': 'normal-2',
            'speed': 0x32,
            'effect': null,
            'sfx': 'basic',
            'offset': [0x0]
          },
          'range': {
            'max': 0x1c2,
            'min': 0x0
          },
          'attack': {
            'speed': 0x46,
            'damage': 0x32,
            'draw': !0x1
          },
          'ammo': {
            'reload': 0xa,
            'capacity': 0x1,
            'draw': !0x1
          }
        },
        'rotating': !0x1,
        'passive': {},
        'upgradePath': [],
        'levelsPerTier': 0x1,
        'tier': [{
          'base': new ig.Image('media/graphics/sprites/game/tower/basic/tower-base-1.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/basic/tower-head-1.png'),
          'upgrade': {
            'attack': {
              'damage': 0x2,
              'speed': 0x2
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/basic/tower-base-2.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/basic/tower-head-2.png'),
          'upgrade': {
            'attack': {
              'damage': 0x2,
              'speed': 0x2
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/basic/tower-base-3.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/basic/tower-head-3.png'),
          'upgrade': {
            'attack': {
              'damage': 0x2
            }
          }
        }]
      },
      'Shock': {
        'cost': 0x19,
        'targetingSystem': {
          'process': 'oldest',
          'locking': !0x1
        },
        'stats': {
          'name': "Shock Tower",
          'description': "Shoots bolts of;\n;electricity that;\n;slows enemies;\n;it shoots.".split(';'),
          'targeting': ['any'],
          'bullet': {
            'type': 'shock',
            'speed': 0x32,
            'effect': 'slow',
            'sfx': 'shock',
            'offset': [0x0]
          },
          'range': {
            'max': 0x1c2,
            'min': 0x0
          },
          'attack': {
            'speed': 0x64,
            'damage': 0x28,
            'draw': !0x1
          },
          'ammo': {
            'reload': 0xa,
            'capacity': 0x1,
            'draw': !0x1
          }
        },
        'rotating': !0x1,
        'passive': {},
        'upgradePath': [],
        'levelsPerTier': 0x1,
        'tier': [{
          'base': new ig.Image('media/graphics/sprites/game/tower/shock/tower-base-1.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/shock/tower-head-1.png'),
          'upgrade': {
            'attack': {
              'speed': 0x4
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/shock/tower-base-2.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/shock/tower-head-2.png'),
          'upgrade': {
            'attack': {
              'damage': 0x4
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/shock/tower-base-3.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/shock/tower-head-3.png'),
          'upgrade': {
            'attack': {
              'damage': 0x4
            }
          }
        }]
      },
      'Sniper': {
        'cost': 0x19,
        'targetingSystem': {
          'process': 'oldest',
          'locking': !0x0
        },
        'stats': {
          'name': "Sniper Tower",
          'description': "Big damage at;\n;long range but;\n;has a very;\n;slow reload.".split(';'),
          'targeting': ['any'],
          'bullet': {
            'type': 'normal-1',
            'speed': 0x50,
            'effect': null,
            'sfx': 'snipe',
            'offset': [0x0]
          },
          'range': {
            'max': 0x320,
            'min': 0x0
          },
          'attack': {
            'speed': 0x3e8,
            'damage': 0x12c,
            'draw': !0x0
          },
          'ammo': {
            'reload': 0xa,
            'capacity': 0x1,
            'draw': !0x1
          }
        },
        'rotating': !0x1,
        'passive': {},
        'upgradePath': [],
        'levelsPerTier': 0x1,
        'tier': [{
          'base': new ig.Image('media/graphics/sprites/game/tower/sniper/tower-base-1.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/sniper/tower-head-1.png'),
          'upgrade': {
            'attack': {
              'speed': 0x5
            },
            'range': {
              'max': 0x32
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/sniper/tower-base-2.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/sniper/tower-head-2.png'),
          'upgrade': {
            'attack': {
              'speed': 0x5
            },
            'range': {
              'max': 0x32
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/sniper/tower-base-3.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/sniper/tower-head-3.png'),
          'upgrade': {
            'attack': {
              'damage': 0x5
            }
          }
        }]
      },
      'Burst': {
        'cost': 0x14,
        'targetingSystem': {
          'process': 'nearest',
          'locking': !0x0
        },
        'stats': {
          'name': "Burst Tower",
          'description': "Shoots fast all;\n;stored bullets.;\n;Reloads bullets;\n;any time.".split(';'),
          'targeting': ['any'],
          'bullet': {
            'type': 'normal-2',
            'speed': 0x64,
            'effect': null,
            'sfx': 'm-gun',
            'offset': [-0x1, 0x1]
          },
          'range': {
            'max': 0x1c2,
            'min': 0x0
          },
          'attack': {
            'speed': 0xc,
            'damage': 0x1e,
            'draw': !0x0
          },
          'ammo': {
            'reload': 0x78,
            'capacity': 0x32,
            'draw': !0x0
          }
        },
        'rotating': !0x1,
        'passive': {},
        'upgradePath': [],
        'levelsPerTier': 0x1,
        'tier': [{
          'base': new ig.Image('media/graphics/sprites/game/tower/burst/tower-base-1.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/burst/tower-head-1.png'),
          'upgrade': {
            'attack': {
              'damage': 0x2
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/burst/tower-base-2.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/burst/tower-head-2.png'),
          'upgrade': {
            'attack': {
              'damage': 0x2
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/burst/tower-base-3.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/burst/tower-head-3.png'),
          'upgrade': {
            'attack': {
              'damage': 0x2
            }
          }
        }]
      },
      'Laser': {
        'cost': 0x1e,
        'targetingSystem': {
          'process': 'youngest',
          'locking': !0x0
        },
        'stats': {
          'name': "Laser Tower",
          'description': "Shoots a laser.;\n;Burns enemies;\n;based on their;\n;max health.".split(';'),
          'targeting': ['any'],
          'bullet': {
            'type': 'laser',
            'speed': 0x64,
            'effect': 'burn',
            'sfx': 'laser',
            'offset': [0x0]
          },
          'range': {
            'max': 0x1c2,
            'min': 0x0
          },
          'attack': {
            'speed': 0x4,
            'damage': 0x1,
            'draw': !0x1
          },
          'ammo': {
            'reload': 0xa,
            'capacity': 0x1,
            'draw': !0x1
          }
        },
        'rotating': !0x1,
        'passive': {},
        'upgradePath': [],
        'levelsPerTier': 0x1,
        'tier': [{
          'base': new ig.Image('media/graphics/sprites/game/tower/laser/tower-base-1.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/laser/tower-head-1.png'),
          'upgrade': {
            'attack': {
              'damage': 0.1
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/laser/tower-base-2.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/laser/tower-head-2.png'),
          'upgrade': {
            'attack': {
              'damage': 0.1
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/laser/tower-base-3.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/laser/tower-head-3.png'),
          'upgrade': {
            'attack': {
              'damage': 0.1
            }
          }
        }]
      },
      'Rocket': {
        'cost': 0x1e,
        'targetingSystem': {
          'process': 'nearest',
          'locking': !0x0
        },
        'stats': {
          'name': "Rocket Tower",
          'description': "A tower that;\n;shoots rockets;\n;which hits all;\n;in explosion.".split(';'),
          'targeting': ['any'],
          'bullet': {
            'type': 'normal-3',
            'speed': 0x32,
            'effect': null,
            'sfx': 'booms',
            'offset': [0x0]
          },
          'range': {
            'max': 0x1c2,
            'min': 0x0
          },
          'attack': {
            'speed': 0xc8,
            'damage': 0x3c,
            'draw': !0x1
          },
          'ammo': {
            'reload': 0xa,
            'capacity': 0x1,
            'draw': !0x1
          }
        },
        'rotating': !0x1,
        'passive': {},
        'upgradePath': [],
        'levelsPerTier': 0x1,
        'tier': [{
          'base': new ig.Image('media/graphics/sprites/game/tower/rocket/tower-base-1.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/rocket/tower-head-1.png'),
          'upgrade': {
            'attack': {
              'damage': 0x5,
              'speed': 0x2
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/rocket/tower-base-2.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/rocket/tower-head-2.png'),
          'upgrade': {
            'attack': {
              'damage': 0x5,
              'speed': 0x2
            }
          }
        }, {
          'base': new ig.Image('media/graphics/sprites/game/tower/rocket/tower-base-3.png'),
          'head': new ig.Image('media/graphics/sprites/game/tower/rocket/tower-head-3.png'),
          'upgrade': {
            'attack': {
              'damage': 0x5
            }
          }
        }]
      }
    },
    'enemy': {
      'normal-1': {
        'image': new ig.Image('media/graphics/sprites/game/enemy/enemy-1.png'),
        'targeting': ['any'],
        'health': 0x15e,
        'speed': 0x96,
        'reward': {
          'gold': 0x5,
          'score': 0xa
        }
      },
      'normal-2': {
        'image': new ig.Image('media/graphics/sprites/game/enemy/enemy-2.png'),
        'targeting': ['any'],
        'health': 0x15e,
        'speed': 0x96,
        'reward': {
          'gold': 0x5,
          'score': 0xa
        }
      },
      'runner': {
        'image': new ig.Image('media/graphics/sprites/game/enemy/enemy-3.png'),
        'targeting': ['any', 'runner'],
        'health': 0x140,
        'speed': 0xfa,
        'reward': {
          'gold': 0x8,
          'score': 0x14
        }
      },
      'big-guy': {
        'image': new ig.Image('media/graphics/sprites/game/enemy/enemy-4.png'),
        'targeting': ['any', 'boss'],
        'health': 0xfa0,
        'speed': 0x4b,
        'reward': {
          'gold': 0x14,
          'score': 0x32
        }
      },
      'quarterback': {
        'image': new ig.Image('media/graphics/sprites/game/enemy/enemy-5.png'),
        'targeting': ['any'],
        'health': 0x258,
        'speed': 0xaf,
        'reward': {
          'gold': 0xf,
          'score': 0x28
        }
      }
    }
  };
}), ig.baked = !0x0, ig.module('game.entities.gameplay.game-marble').requires('game.data.configurations', 'impact.entity').defines(function () {
  EntityGameMarble = ig.Entity.extend({
    'type': ig.Entity.TYPE.A,
    'checkAgainst': ig.Entity.TYPE.B,
    'zIndex': 0x6a4,
    'offset': {
      'x': 0x0,
      'y': 0x0
    },
    'maxVel': {
      'x': 0x270f,
      'y': 0x270f
    },
    'num': null,
    'pos': {
      'x': 0x0,
      'y': 0x0
    },
    'counter': 0x63,
    'isKill': !0x1,
    'path': [],
    'init': function (_0x51ee94, _0x1ca807, _0x5877fc) {
      this.parent(_0x51ee94, _0x1ca807, _0x5877fc), _0x51ee94 = JSON.parse(JSON.stringify(ig.GameConfig.enemy[this.enemyType])), this.stats = {
        'targeting': _0x51ee94.targeting,
        'health': {
          'current': _0x51ee94.health,
          'max': _0x51ee94.health,
          'temp': _0x51ee94.health
        },
        'speed': {
          'current': _0x51ee94.speed,
          'max': _0x51ee94.speed,
          'multiplier': 0x1
        },
        'reward': _0x51ee94.reward,
        'buff': []
      }, this.size = {
        'x': 0x6a,
        'y': 0x6a
      }, this.animSheet = new ig.AnimationSheet(_0x51ee94.image.path, 0x2 * this.size.x, 0x2 * this.size.y), this.setAnimations(this.animSheet), this.lastPos = {
        'x': this.pos.x,
        'y': this.pos.y
      }, this.rotation = 0x0, this.currentAnim = this.anims.walk, this.progress = 0x0, this.healthLast = this.stats.health.current, this.healthAlpha = 0x0, this.tutorialPaused = {
        'movement': !0x1,
        'animation': -0x1
      }, _0x51ee94 = Math.floor(0x3 * Math.random()) + 0x1, ig.soundHandler.sfxPlayer.play(String('zombieSpawn' + _0x51ee94)), ig.game.sortEntitiesDeferred();
    },
    'setAnimations': function (_0x1b8a1d) {
      this.anims.walk = new ig.Animation(_0x1b8a1d, 0.3, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5]), this.t = 0x0;
    },
    'update': function () {
      ig.game.checkPauseGame ? this.currentAnim.gotoFrame(this.currentAnim.frame) : (this.processStatus(), this.processMovement());
    },
    'processStatus': function () {
      0x0 >= this.stats.health.current ? this.killedByTower() : (this.stats.health.current != this.healthLast && (this.healthLast = this.stats.health.current, this.healthAlpha = 0x3), this.processBuffs());
    },
    'processMovement': function () {
      var _0x3380f5 = this.t - this.t % 0x1;
      if (_0x3380f5 < this.path.length) {
        curPathLenght = this.control.glZakky(this.control.pointArray[this.path[_0x3380f5]]);
        for (var _0x330433 = this.stats.speed.current / curPathLenght * this.stats.speed.multiplier, _0x310d22 = this.t; 0x1 <= _0x310d22;) _0x310d22 -= 0x1;
        _0x330433 = (this.tutorialPaused.movement ? 0x0 : 0x1) * _0x330433 * ig.system.tick * ig.game.GameController.speedMultiplier(), this.t += _0x330433, this.progress += _0x330433, this.control.getArcLength(this.control.pointArray[this.path[_0x3380f5]]), _0x330433 = this.control.getMx(_0x310d22, this.control.pointArray[this.path[_0x3380f5]]), _0x3380f5 = this.control.getMy(_0x310d22, this.control.pointArray[this.path[_0x3380f5]]), _0x310d22 = Math.atan2(_0x3380f5 - this.lastPos.y, _0x330433 - this.lastPos.x) * (0xb4 / Math.PI), this.tutorialPaused.movement || (this.rotation = _0x310d22), 0x0 == ig.game.GameController.speedMultiplier() || -0x1 != this.tutorialPaused.animation ? this.currentAnim.gotoFrame(this.tutorialPaused.animation) : this.lastPos = {
          'x': _0x330433,
          'y': _0x3380f5
        }, this.updatePos(_0x330433, _0x3380f5, !0x1);
      } else this.reachedEnd();
    },
    'processBuffs': function () {
      this.stats.speed.current = this.stats.speed.max, this.stats.speed.multiplier = 0x1;
      if (0x0 < this.stats.buff.length) {
        for (var _0x8404c5 = !0x0, _0x4efc32 = 0x0; _0x8404c5;) if (0x0 < this.stats.buff.length) {
          switch (this.stats.buff[_0x4efc32].effect) {
            case 'slow':
              this.stats.speed.current = 0.75 * this.stats.speed.max;
              break;
            case 'freeze':
              this.stats.speed.multiplier = 0.0001;
          }
          this.stats.buff[_0x4efc32].timer -= 0x1 * ig.game.optimizer * ig.game.GameController.speedMultiplier(), 0x0 >= this.stats.buff[_0x4efc32].timer ? this.stats.buff.splice(_0x4efc32, 0x1) : (_0x4efc32++, _0x4efc32 == this.stats.buff.length && (_0x8404c5 = !0x1));
        } else _0x8404c5 = !0x1;
      }
    },
    'reachedEnd': function () {
      this.kill(), ig.game.GameController.bloodEffect = 0x1;
      var _0x5dc365 = Math.floor(0x3 * Math.random()) + 0x1;
      ig.soundHandler.sfxPlayer.play(String('zombieAttack' + _0x5dc365)), this.control.isLevelEditor || (ig.game.playerData.health.current--, 0x0 >= ig.game.playerData.health.current && !this.control.isGameOver && (ig.game.playerData.controller.baseDestroyed(), this.control.isGameOver = !0x0));
    },
    'killedByTower': function () {
      this.kill(), ig.game.spawnEntity(EntitySplatter, this.pos.x, this.pos.y, {
        'zIndex': this.zIndex - 0x1,
        'size': this.size
      }), ig.game.sortEntitiesDeferred(), ig.game.tutorial && (ig.game.trigger = !0x1), ig.game.playerData.currency.gold += this.stats.reward.gold, ig.game.GameController._currentScore += this.stats.reward.score, ig.game.spawnEntity(EntityDrops, this.pos.x, this.pos.y, {
        'zIndex': this.zIndex + 0x1,
        'size': this.size,
        'value': {
          'amount': this.stats.reward.gold,
          'image': ig.game.GameController.drawValues.currency
        }
      });
      var _0x4b68e7 = Math.floor(0x3 * Math.random()) + 0x1;
      ig.soundHandler.sfxPlayer.play(String('zombieDie' + _0x4b68e7));
    },
    'draw': function () {
      var _0x2a9241 = ig.system.context;
      _0x2a9241.save();
      var _0x5484a4 = this.pos.x - this.offset.x - ig.game._rscreen.x,
        _0x2dc15b = this.pos.y - this.offset.y - ig.game._rscreen.y;
      this.drawX || (this.drawX = _0x5484a4, this.drawY = _0x2dc15b), this.drawX += (_0x5484a4 - this.drawX) / 0x1, this.drawY += (_0x2dc15b - this.drawY) / 0x1, this.currentAnim && (_0x2a9241.translate(this.size.x / 0x2 * this.scale.x, this.size.y / 0x2 * this.scale.x), _0x2a9241.translate(-ig.game.screen.x + this.pos.x, -ig.game.screen.y + this.pos.y), _0x2a9241.rotate(this.rotation * Math.PI / 0xb4), this.currentAnim.update(), this.currentAnim.draw(-this.size.x, -this.size.y), _0x2a9241.rotate(-this.rotation * Math.PI / 0xb4), _0x2a9241.translate(-this.drawX, -this.drawY));
      if (0x0 < this.healthAlpha) {
        _0x2a9241.translate(-ig.game.screen.x, -ig.game.screen.y), this.healthAlpha -= 0x1 * ig.system.tick, _0x2a9241.globalAlpha = 0.7 * (0x1 <= this.healthAlpha ? 0x1 : 0x0 >= this.healthAlpha ? 0x0 : this.healthAlpha), _0x5484a4 = this.pos.x - this.size.x / 0x2, _0x2dc15b = this.pos.y - this.size.y, _0x2a9241.beginPath(), _0x2a9241.fillStyle = '#8a3a3a', _0x2a9241.roundRect(_0x5484a4 + 0x5, _0x2dc15b + 0x5, this.size.x - 0xa, 0xf, 0x64), _0x2a9241.fill(), _0x2a9241.beginPath(), _0x2a9241.fillStyle = '#4fd353';
        var _0x1e99e6 = this.stats.health.current / this.stats.health.max;
        _0x2a9241.roundRect(_0x5484a4 + 0x5, _0x2dc15b + 0x5, this.size.x * (0.05 >= _0x1e99e6 ? 0.05 : _0x1e99e6) - 0xa, 0xf, 0x64), _0x2a9241.fill(), _0x2a9241.beginPath(), _0x2a9241.strokeStyle = '#191e1e', _0x2a9241.lineWidth = 0x9, _0x2a9241.roundRect(_0x5484a4, _0x2dc15b, this.size.x, 0x19, 0x64), _0x2a9241.stroke(), _0x2a9241.globalAlpha = 0x1;
      }
      _0x2a9241.restore();
    },
    'drawValueT': function () {
      var _0x40b345 = ig.system.context;
      _0x40b345.save(), _0x40b345.translate(-ig.game.screen.x, -ig.game.screen.y), _0x40b345.font = "20px arial", _0x40b345.fillStyle = 'white';
      var _0x3fecd2 = this.t.toFixed(0x2);
      _0x40b345.fillText(_0x3fecd2, this.pos.x, this.pos.y), _0x40b345.restore();
    },
    'drawBox': function () {
      var _0x1cadf4 = ig.system.context;
      this.isKill || (_0x1cadf4.save(), _0x1cadf4.translate(-ig.game.screen.x, -ig.game.screen.y), this.debugdrawSqaureX && (_0x1cadf4.fillStyle = 'black', _0x1cadf4.beginPath(), _0x1cadf4.rect(this.debugdrawSqaureX, this.debugdrawSqaureY, this.size.x, this.size.y), _0x1cadf4.stroke()), _0x1cadf4.beginPath(), _0x1cadf4.arc(this.getCenter().x, this.getCenter().y, 0x15, 0x0, 0x2 * Math.PI), _0x1cadf4.stroke(), 0x0 == this.num && (_0x1cadf4.fillStyle = 'black', _0x1cadf4.font = '20px', _0x1cadf4.textAlign = 'center', _0x1cadf4.fillText(this.control.lineConfig[0x0].t, this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2 - 0x32)), _0x1cadf4.restore());
    },
    'originPos': {
      'x': 0x0,
      'y': 0x0
    },
    'updatePos': function (_0x5d7ea0, _0x2d0c20, _0x3c2ba8) {
      this.originPos.x = this.pos.x, this.originPos.y = this.pos.y, this.pos.x = _0x5d7ea0 - this.size.x / 0x2, this.pos.y = _0x2d0c20 - this.size.y / 0x2, this.pos.x = Math.round(this.pos.x), this.pos.y = Math.round(this.pos.y);
      if (!_0x3c2ba8) {
        var _0xe65a91;
        this.originPos ? 0x5 < this.counter && (_0x5d7ea0 = this.originPos.x - this.pos.x, _0x2d0c20 = this.originPos.y - this.pos.y, _0x3c2ba8 = Math.abs(_0x5d7ea0), _0xe65a91 = Math.abs(_0x2d0c20), _0x3c2ba8 > _0xe65a91 ? (0x0 < _0x5d7ea0 ? this.directionVertical = 'left' : 0x0 >= _0x5d7ea0 && (this.directionVertical = 'right'), this.directionHorizon = !0x1) : _0xe65a91 >= _0x3c2ba8 && (0x0 < _0x2d0c20 ? this.directionHorizon = 'up' : 0x0 >= _0x2d0c20 && (this.directionHorizon = 'down'), this.directionVertical = !0x1)) : this.directionVertical = this.directionHorizon = !0x1, this.counter++, 0x14 < this.counter && (this.counter = 0x0, this.originPos = {
          'x': this.pos.x,
          'y': this.pos.y
        });
      }
    },
    'isFirstCheck': !0x1,
    'directionVertical': !0x1,
    'directionHorizon': !0x1,
    'check': function (_0x2f28a0) {
      this.isProjectile && !this.isfakeInTween && this.checkHit(_0x2f28a0);
    },
    'centerPoint': function (_0xcf09ab, _0xfbdc9b, _0xe5bf7e, _0x2cfa5c) {
      return {
        'x': (_0xcf09ab + _0xe5bf7e) / 0x2,
        'y': (_0xfbdc9b + _0x2cfa5c) / 0x2
      };
    },
    'checkHit': function () {},
    'getCenter': function () {
      return {
        'x': this.pos.x + this.size.x / 0x2,
        'y': this.pos.y + this.size.y / 0x2
      };
    },
    'kill': function () {
      this.parent();
    }
  }), EntitySplatter = ig.Entity.extend({
    'splatter': [new ig.Image('media/graphics/sprites/game/enemy/splatter-1.png'), new ig.Image('media/graphics/sprites/game/enemy/splatter-2.png')],
    'init': function (_0x599180, _0x594607, _0x26c99f) {
      this.parent(_0x599180, _0x594607, _0x26c99f), this.splatImage = this.splatter[Math.floor(Math.random() * this.splatter.length)], this.deathAlpha = 0x3, this.setAnchoredPosition(this.pos.x - ig.system.width / 0x2, this.pos.y - ig.system.height / 0x2, 'center');
    },
    'draw': function () {
      if (0x0 < this.deathAlpha) {
        if (this.deathAlpha -= 0x1 * ig.system.tick, !(0x0 >= this.deathAlpha)) {
          var _0x58c3b8 = ig.system.context;
          _0x58c3b8.save(), _0x58c3b8.translate(-ig.game.screen.x + this.pos.x + this.size.x / 0x2, -ig.game.screen.y + this.pos.y + this.size.y / 0x2), _0x58c3b8.globalAlpha = 0x1 <= this.deathAlpha ? 0x1 : this.deathAlpha, this.splatImage.draw(-this.splatImage.width / 0x2, -this.splatImage.width / 0x2), _0x58c3b8.globalAlpha = 0x1, _0x58c3b8.restore();
        }
      } else this.kill();
    }
  });
}), ig.baked = !0x0, ig.module('game.plugins.effects').requires('plugins.responsive.responsive-utils').defines(function () {
  ig.Effects = {
    'currentID': 0x0,
    'optimizer': 0x1,
    'particle': null,
    'particles': {
      'layer': [{}, {}, {}]
    },
    'test': !0x1,
    'testing': function () {
      if (ig.input.pressed('down')) {
        var _0x40e348 = {
            'type': 'line',
            'effect': 'disperse',
            'color': '#f5bc42',
            'anchorPos': {
              'x': 0x0,
              'y': 0x0
            },
            'anchorType': 'center-middle',
            'duration': 0x2,
            'misc': {
              'length': 0xc,
              'width': 0x6,
              'speed': ig.Effects.random(-0x1e, 0x1e),
              'friction': 0xa,
              'arc': 0x168,
              'direction': 0x0
            }
          },
          _0x4bba57 = {
            'amount': 0x1,
            'type': 'line',
            'effect': 'disperse',
            'color': '#f5bc42',
            'anchorPos': {
              'x': 0x0,
              'y': 0x0
            },
            'anchorType': 'center-middle',
            'duration': 1.5,
            'misc': {
              'length': 0x32,
              'width': 0xa,
              'speed': 0xc8,
              'arc': 0x1,
              'direction': 0x0
            },
            'callback': {
              'finish': function () {
                _0x40e348.anchorPos = ig.Effects.particle.anchor, ig.Effects.create(_0x40e348);
              }.bind(this)
            }
          };
        this.create(_0x4bba57);
      }
    },
    'optimizerTick': function () {
      return 0x5 * ig.system.tick;
    },
    'optimizerFunc': function () {
      return ig.game.GameController.speedMultiplier();
    },
    'update': function (_0x1b4560) {
      this.test && this.testing(), _0x1b4560 = _0x1b4560 ? _0x1b4560 : 0x0;
      if (!(0x0 >= this.particles.layer[_0x1b4560].length)) {
        this.optimizer = this.optimizerTick();
        for (var _0x153ca9 in this.particles.layer[_0x1b4560]) {
          this.particle = this.particles.layer[_0x1b4560][_0x153ca9];
          for (var _0x242136 = 0x0; _0x242136 < this.optimizerFunc(); _0x242136++) {
            var _0x31c7d1 = this['draw_' + this.particle.type];
            'function' == typeof _0x31c7d1 && _0x31c7d1(this.particle), this.particle.callback.update(this.particle), this.particle.duration -= this.optimizer;
          }
          0x0 >= this.particle.duration && (this.particle.callback.finish(), delete this.particles.layer[_0x1b4560][this.particle.id]);
        }
      }
    },
    'create': function (_0x52df4e) {
      _0x52df4e = _0x52df4e ? _0x52df4e : {};
      for (var _0x19dba4 = _0x52df4e.layer ? _0x52df4e.layer : 0x0, _0x3a39d5 = _0x52df4e.amount ? _0x52df4e.amount : 0xa, _0x3def9e = 0x0; _0x3def9e < _0x3a39d5; _0x3def9e++) {
        this.currentID++;
        var _0x4f4545 = String('id_' + this.currentID),
          _0x452edf = _0x52df4e.type ? _0x52df4e.type : 'line',
          _0x4f9eb5 = _0x52df4e.effect ? _0x52df4e.effect : 'disperse',
          _0x1958f2 = _0x52df4e.color ? _0x52df4e.color : '#FFFFFF',
          _0x26c7de = _0x52df4e.duration ? _0x52df4e.duration : 0x1,
          _0xfd05c3 = _0x52df4e.alpha ? _0x52df4e.alpha : 0x1,
          _0x428c7b = _0x52df4e.anchorPos ? _0x52df4e.anchorPos : {
            'x': 0x0,
            'y': 0x0
          },
          _0x57d137 = _0x52df4e.anchorType ? _0x52df4e.anchorType : 'center-middle',
          _0x5dc460 = this.miscellaneous(_0x452edf, _0x4f9eb5, _0x52df4e.misc),
          _0x51f819 = {
            'update': function () {},
            'finish': function () {}
          };
        _0x52df4e.callback && ('function' == typeof _0x52df4e.callback.update && (_0x51f819.update = _0x52df4e.callback.update), 'function' == typeof _0x52df4e.callback.finish && (_0x51f819.finish = _0x52df4e.callback.finish)), this.particles.layer[_0x19dba4][_0x4f4545] = {
          'layer': _0x19dba4,
          'id': _0x4f4545,
          'type': _0x452edf,
          'effect': _0x4f9eb5,
          'color': _0x1958f2,
          'duration': _0x26c7de,
          'alpha': _0xfd05c3,
          'anchor': {
            'x': _0x428c7b.x,
            'y': _0x428c7b.y,
            'type': _0x57d137
          },
          'pos': {
            'x': 0x0,
            'y': 0x0
          },
          'misc': _0x5dc460,
          'callback': _0x51f819
        };
      }
    },
    'miscellaneous': function (_0x5ea254, _0x15c3d7, _0x4b6589) {
      var _0x4e910a = {};
      _0x4b6589 = 'object' == typeof _0x4b6589 ? JSON.parse(JSON.stringify(_0x4b6589)) : {}, 'object' == typeof _0x4b6589.gravity && (_0x4e910a.gravity = {
        'limit': {
          'x': 0x0,
          'y': 0x0
        },
        'amount': {
          'x': 0x0,
          'y': 0x0
        },
        'velocity': {
          'x': 0x0,
          'y': 0x0
        }
      }, _0x4e910a.gravity.limit.x = !isNaN(_0x4b6589.gravity.limit.x) ? _0x4b6589.gravity.limit.x : 0x0, _0x4e910a.gravity.limit.y = !isNaN(_0x4b6589.gravity.limit.y) ? _0x4b6589.gravity.limit.y : 0x0, _0x4e910a.gravity.amount.x = !isNaN(_0x4b6589.gravity.amount.x) ? _0x4b6589.gravity.amount.x : 0x0, _0x4e910a.gravity.amount.y = !isNaN(_0x4b6589.gravity.amount.y) ? _0x4b6589.gravity.amount.y : 0x0, _0x4e910a.gravity.velocity.x = !isNaN(_0x4b6589.gravity.velocity.x) ? _0x4b6589.gravity.velocity.x : 0x0, _0x4e910a.gravity.velocity.y = !isNaN(_0x4b6589.gravity.velocity.y) ? _0x4b6589.gravity.velocity.y : 0x0);
      switch (_0x5ea254) {
        case 'line':
          _0x4e910a.rotate = isNaN(_0x4b6589.rotate) ? this.random(0x0, 0x168) : _0x4b6589.rotate, _0x4e910a.length = isNaN(_0x4b6589.length) ? 0x1 : 0x0 >= _0x4b6589.length ? 0x1 : _0x4b6589.length, _0x4e910a.width = isNaN(_0x4b6589.width) ? 0x3 : 0x0 >= _0x4b6589.width ? 0x3 : _0x4b6589.width;
          break;
        case 'circle':
          _0x5ea254 = isNaN(_0x4b6589.difference) ? 0x0 : 0x0 >= _0x4b6589.difference ? 0x0 : _0x4b6589.difference;
          var _0x1cba97 = isNaN(_0x4b6589.radius) ? 0x14 : 0x0 >= _0x4b6589.radius ? 0x14 : _0x4b6589.radius;
          _0x4e910a.radius = this.random(_0x1cba97 - _0x5ea254 / 0x2, _0x1cba97 + _0x5ea254 / 0x2), _0x4e910a.radius = 0x1 >= _0x4e910a.radius ? 0x1 : _0x4e910a.radius, _0x4e910a.sizeIncrease = 0x0, _0x4e910a.growth_rate = isNaN(_0x4b6589.growth_rate) ? 0x0 : 0x0 >= _0x4b6589.growth_rate ? 0x0 : _0x4b6589.growth_rate, _0x4e910a.growth_max = isNaN(_0x4b6589.growth_max) ? 0x0 : 0x0 >= _0x4b6589.growth_max ? 0x0 : _0x4b6589.growth_max, _0x4e910a.drawStyle = _0x4b6589.drawStyle ? _0x4b6589.drawStyle : 'fill', 'stroke' == _0x4e910a.drawStyle && (_0x4e910a.drawWidth = isNaN(_0x4b6589.drawWidth) ? 0x1 : 0x1 >= _0x4b6589.drawWidth ? 0x1 : _0x4b6589.drawWidth);
      }
      switch (_0x15c3d7) {
        case 'disperse':
          _0x15c3d7 = isNaN(_0x4b6589.friction) ? 0x2 : 0x0 >= _0x4b6589.friction ? 0x2 : _0x4b6589.friction, _0x5ea254 = this.checkInt(_0x4b6589.speed, 0x14), _0x4e910a.speed = this.random(_0x5ea254 - _0x15c3d7 / 0x2, _0x5ea254 + _0x15c3d7 / 0x2), _0x15c3d7 = this.checkInt(_0x4b6589.arc, 0x168), _0x4b6589 = this.checkInt(_0x4b6589.direction, 0x0) - 0x5a, _0x4e910a.direction = this.random(_0x4b6589 - _0x15c3d7 / 0x2, _0x4b6589 + _0x15c3d7 / 0x2), !isNaN(_0x4e910a.rotate) && !0x1 != _0x4e910a.dontAlign && (_0x4e910a.rotate = _0x4e910a.direction);
      }
      return _0x4e910a;
    },
    'updatePos': function (_0x20e3e8) {
      switch (_0x20e3e8.effect) {
        case 'disperse':
          _0x20e3e8.anchor.x += _0x20e3e8.misc.speed * this.optimizer * Math.cos(_0x20e3e8.misc.direction * Math.PI / 0xb4), _0x20e3e8.anchor.y += _0x20e3e8.misc.speed * this.optimizer * Math.sin(_0x20e3e8.misc.direction * Math.PI / 0xb4);
      }
      return _0x20e3e8.misc.gravity && (_0x20e3e8.misc.gravity.amount.x += _0x20e3e8.misc.gravity.velocity.x, _0x20e3e8.misc.gravity.amount.y += _0x20e3e8.misc.gravity.velocity.y, _0x20e3e8.misc.gravity.amount.x >= _0x20e3e8.misc.gravity.limit.x && (_0x20e3e8.misc.gravity.amount.x = _0x20e3e8.misc.gravity.limit.x), _0x20e3e8.misc.gravity.amount.x <= -_0x20e3e8.misc.gravity.limit.x && (_0x20e3e8.misc.gravity.amount.x = -_0x20e3e8.misc.gravity.limit.x), _0x20e3e8.misc.gravity.amount.y >= _0x20e3e8.misc.gravity.limit.y && (_0x20e3e8.misc.gravity.amount.y = _0x20e3e8.misc.gravity.limit.y), _0x20e3e8.misc.gravity.amount.y <= -_0x20e3e8.misc.gravity.limit.y && (_0x20e3e8.misc.gravity.amount.y = -_0x20e3e8.misc.gravity.limit.y), _0x20e3e8.anchor.x += _0x20e3e8.gravity.amount.x, _0x20e3e8.anchor.y += _0x20e3e8.gravity.amount.y), _0x20e3e8.pos = ig.responsive.toAnchor(_0x20e3e8.anchor.x - ig.game.screen.x, _0x20e3e8.anchor.y - ig.game.screen.y, _0x20e3e8.anchor.type), _0x20e3e8;
    },
    'draw_line': function (_0x417bad) {
      _0x417bad = ig.Effects.updatePos(_0x417bad);
      var _0x4c2558 = ig.system.context;
      _0x4c2558.save(), _0x4c2558.translate(_0x417bad.pos.x, _0x417bad.pos.y), _0x4c2558.scale(0x1, 0x1), _0x4c2558.rotate(_0x417bad.misc.rotate * Math.PI / 0xb4), _0x4c2558.globalAlpha = (0x1 <= _0x417bad.duration ? 0x1 : 0x0 >= _0x417bad.duration ? 0x0 : _0x417bad.duration) * _0x417bad.alpha, _0x4c2558.strokeStyle = _0x417bad.color, _0x4c2558.lineWidth = _0x417bad.misc.width, _0x4c2558.beginPath(), _0x4c2558.moveTo(-_0x417bad.misc.length / 0x2, 0x0), _0x4c2558.lineTo(_0x417bad.misc.length / 0x2, 0x0), _0x4c2558.closePath(), _0x4c2558.stroke(), _0x4c2558.globalAlpha = 0x1, _0x4c2558.restore();
    },
    'draw_circle': function (_0x4cd474) {
      _0x4cd474 = ig.Effects.updatePos(_0x4cd474);
      var _0x539422 = ig.system.context;
      _0x539422.save(), _0x539422.translate(_0x4cd474.pos.x, _0x4cd474.pos.y), _0x539422.scale(0x1, 0x1), _0x4cd474.misc.sizeIncrease += _0x4cd474.misc.growth_rate * ig.Effects.optimizerTick();
      if (_0x4cd474.misc.sizeIncrease >= _0x4cd474.misc.growth_max || 0x0 >= _0x4cd474.misc.growth_max) _0x4cd474.misc.sizeIncrease = _0x4cd474.misc.growth_max;
      _0x539422.globalAlpha = (0x1 <= _0x4cd474.duration ? 0x1 : 0x0 >= _0x4cd474.duration ? 0x0 : _0x4cd474.duration) * _0x4cd474.alpha, _0x539422.beginPath(), _0x539422.arc(0x0, 0x0, _0x4cd474.misc.radius + _0x4cd474.misc.sizeIncrease, 0x0, 0x2 * Math.PI), _0x539422.closePath();
      switch (_0x4cd474.misc.drawStyle) {
        case 'stroke':
          _0x539422.lineWidth = _0x4cd474.misc.drawWidth, _0x539422.strokeStyle = _0x4cd474.color, _0x539422.stroke();
          break;
        default:
          _0x539422.fillStyle = _0x4cd474.color, _0x539422.fill();
      }
      _0x539422.globalAlpha = 0x1, _0x539422.restore();
    },
    'reset': function () {
      ig.Effects.currentID = 0x0, ig.Effects.particle = null, ig.Effects.particles = {
        'layer': [{}, {}, {}]
      };
    },
    'random': function (_0x13d7e6, _0x5ce06c) {
      return Math.floor(Math.random() * (_0x5ce06c - _0x13d7e6 + 0x1)) + _0x13d7e6;
    },
    'checkInt': function (_0x500133, _0x169eda) {
      return !isNaN(_0x500133) ? _0x500133 : _0x169eda;
    }
  };
}), ig.baked = !0x0, ig.module('game.entities.gameplay.game-tower-place').requires('game.data.configurations', 'impact.entity').defines(function () {
  EntityTowerPlace = ig.Entity.extend({
    'zIndex': 0x7d0,
    'size': {
      'x': 0xfa,
      'y': 0xfa
    },
    'spot': new ig.Image('media/graphics/sprites/game/tower/tower-placement.png'),
    'type': ig.Entity.TYPE.A,
    'area': {
      'elevated': 0x0,
      'boosted': 0x0
    },
    'isClicked': !0x1,
    'init': function (_0x13d6eb, _0x17b352, _0x18311f) {
      this.parent(_0x13d6eb, _0x17b352, _0x18311f), this._size = JSON.parse(JSON.stringify(this.size)), this.scale = {
        'x': this._size.x,
        'y': this._size.y
      };
    },
    'update': function () {
      this.parent(), this.checkDrop();
    },
    'draw': function () {
      var _0x39e642 = ig.system.context;
      _0x39e642.save(), _0x39e642.translate(-ig.game.screen.x + this.pos.x, -ig.game.screen.y + this.pos.y), this.control.isLevelEditor && (_0x39e642.beginPath(), _0x39e642.fillStyle = ig.game.getEntitiesByType(EntityTowerPlace)[0x0] == this ? 'yellow' : 'green', _0x39e642.arc(this._size.x / 0x2, this._size.y / 0x2, (this._size.x + this._size.y) / 0x4, 0x0, 0x2 * Math.PI), _0x39e642.fill()), _0x39e642.drawImage(this.spot.data, 0x0, 0x0, this.spot.width, this.spot.height, (this._size.x - this.spot.width) / 0x2 + this._size.x / 0x2 * (0x1 - this.scale.x / this._size.x), (this._size.y - this.spot.height) / 0x2 + this._size.y / 0x2 * (0x1 - this.scale.y / this._size.y), this.scale.x / this._size.x * this.spot.width, this.scale.y / this._size.y * this.spot.height), _0x39e642.restore();
    },
    'checkDrop': function () {
      if (this.control.isLevelEditor) {
        if (!this.dropped) {
          var _0x7bab2b = ig.game.getEntitiesByType(EntityPointer)[0x0];
          if (_0x7bab2b) {
            var _0x55a619 = new Vector2(_0x7bab2b.pos.x, _0x7bab2b.pos.y);
            this.pos.x = _0x55a619.x - this.size.x / 0x2, this.pos.y = _0x55a619.y - this.size.y / 0x2, this.setAnchoredPosition(this.pos.x - ig.system.width / 0x2, this.pos.y - ig.system.height / 0x2, 'center-middle');
            if (_0x7bab2b.isReleased || ig.ua.mobile && 'up' == _0x7bab2b.state) this.dropped = !0x0, ig.game.sortEntitiesDeferred(), this.control.updateBuildPlaces();
          }
        }
      } else {
        if (this.isClicked && (_0x7bab2b = ig.game.getEntitiesByType(EntityPointer)[0x0]) && !(_0x7bab2b.pos.x >= this.pos.x && _0x7bab2b.pos.x <= this.pos.x + this._size.x && _0x7bab2b.pos.y >= this.pos.y && _0x7bab2b.pos.y <= this.pos.y + this._size.y)) this.isClicked = !0x1, this.clickResize();
      }
    },
    'clicked': function () {
      if (this.dropped && this.control.isLevelEditor) this.dropped = !0x1;else {
        if ((!ig.game.allow || !ig.game.tutorial || ig.game.allow.clickPlace && this == ig.game.getEntitiesByType(EntityTowerPlace)[0x0]) && !ig.game.checkPauseGame) this.isClicked = !0x0, ig.soundHandler.sfxPlayer.play('click'), this.clickResize();
      }
    },
    'released': function () {
      this.isClicked && (this.isClicked = !0x1, this.clickResize(), this.openPopup());
    },
    'clickResize': function () {
      this.isClicked ? (this.scale.x = 0.9 * this._size.x, this.scale.y = 0.9 * this._size.y) : (this.scale.x = 0x1 * this._size.x, this.scale.y = 0x1 * this._size.y);
    },
    'openPopup': function () {
      ig.game.cameraControl.fnc_centerPos(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2);
      for (var _0x5cec31 = ig.game.getEntitiesByType(EntityPopupOption), _0x559346 = 0x0; _0x559346 < _0x5cec31.length; _0x559346++) _0x5cec31[_0x559346].kill();
      _0x5cec31 = ig.game.spawnEntity(EntityPopupOption, 0x0, 0x0, {
        'tower': this,
        '_option': [],
        'size': this.size,
        'area': this.area
      }), _0x5cec31.setAnchoredPosition(this.anchoredPositionX + (this._size.x - _0x5cec31.size.x) / 0x2, this.anchoredPositionY + (this._size.y - _0x5cec31.size.y) / 0x2, 'center-middle');
      var _0x510deb = [],
        _0x559346 = ig.GameConfig.tower;
      if (ig.game.tutorial) _0x510deb = [{
        'name': 'Basic',
        'cost': ig.GameConfig.computeBuy(_0x559346.Basic.cost)
      }], ig.game.trigger = !0x1;else {
        for (var _0x304a87 = ig.game.GameController.marblePathEditor.towerAvailable, _0x1ecf99 = 0x0; _0x1ecf99 < _0x304a87.length; _0x1ecf99++) _0x510deb.push({
          'name': _0x304a87[_0x1ecf99],
          'cost': ig.GameConfig.computeBuy(_0x559346[_0x304a87[_0x1ecf99]].cost)
        });
      }
      for (_0x559346 = 0x0; _0x559346 < _0x510deb.length; _0x559346++) {
        _0x304a87 = ig.game.spawnEntity(EntityPopupOptionButton, 0x0, 0x0, {
          'control': _0x5cec31,
          'isEntity': !0x0,
          'buttonType': 'Tower',
          'towerType': _0x510deb[_0x559346].name,
          'towerCost': _0x510deb[_0x559346].cost
        }), _0x304a87.setAnchoredPosition(this.pos.x + this._size.x / 0x2 - _0x304a87.size.x / 0x2 - ig.system.width / 0x2, this.pos.y + this._size.y / 0x2 - _0x304a87.size.y / 0x2 - ig.system.height / 0x2, 'center-middle'), _0x5cec31._option.push(_0x304a87);
        var _0x1351ec = 0x168 / _0x510deb.length * (_0x559346 + 0x1) - 0x5a;
        0x0 == _0x510deb.length % 0x2 && (_0x1351ec += 0xb4 / _0x510deb.length), _0x1ecf99 = Math.sqrt(Math.pow(this._size.x, 0x2) + Math.pow(this._size.y, 0x2)) * Math.cos(_0x1351ec * Math.PI / 0xb4), _0x1351ec = Math.sqrt(Math.pow(this._size.x, 0x2) + Math.pow(this._size.y, 0x2)) * Math.sin(_0x1351ec * Math.PI / 0xb4), new ig.TweenDef(_0x304a87).to({
          'anchoredPositionX': _0x304a87.anchoredPositionX + _0x1ecf99,
          'anchoredPositionY': _0x304a87.anchoredPositionY + _0x1351ec
        }, 0x64).onComplete(function () {}.bind(_0x304a87)).start();
      }
      ig.game.sortEntitiesDeferred();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.gameplay.game-tower-bullet').requires('game.data.configurations', 'impact.entity').defines(function () {
  EntityBullet = ig.Entity.extend({
    'zIndex': 0x64,
    'size': {
      'x': 0xa,
      'y': 0xa
    },
    'scale': {
      'x': 0x1,
      'y': 0x1
    },
    'sideOffset': 0x0,
    'init': function (_0x3b6834, _0x12aa72, _0x21625a) {
      this.parent(_0x3b6834, _0x12aa72, _0x21625a), this.setAnchoredPosition(this.pos.x - ig.system.width / 0x2, this.pos.y - ig.system.height / 0x2, 'center-middle'), this.rotation = 0x0, this.showDelay = 0x1, this.distanceReached = null, ig.game.sortEntitiesDeferred(), this.pointRotate = Math.atan2(this.lockedOn.pos.y + this.lockedOn.size.y / 0x2 - (this.pos.y + this.size.y / 0x2), this.lockedOn.pos.x + this.lockedOn.size.x / 0x2 - (this.pos.x + this.size.x / 0x2)) * (0xb4 / Math.PI) - 0x5a;
    },
    'kill': function () {
      this.parent(), 'normal-3' == this.bulletType && (ig.soundHandler.sfxPlayer.play('explode'), ig.game.spawnEntity(EntityExplosion, this.pos.x, this.pos.y, {
        'zIndex': this.zIndex - 0x1,
        'maxRadii': 0x12c,
        'damage': this.damage
      }));
    },
    'update': function () {
      if (!ig.game.checkPauseGame) {
        if (this.parent(), this.lockedOn._killed) this.kill();else {
          var _0x57440a = Math.atan2(this.lockedOn.pos.y + this.lockedOn.size.y / 0x2 - (this.pos.y + this.size.y / 0x2), this.lockedOn.pos.x + this.lockedOn.size.x / 0x2 - (this.pos.x + this.size.x / 0x2)) * (0xb4 / Math.PI);
          this.rotation = _0x57440a + 0x5a, this.anchoredPositionX += this.speed * Math.cos(_0x57440a * Math.PI / 0xb4), this.anchoredPositionY += this.speed * Math.sin(_0x57440a * Math.PI / 0xb4), _0x57440a = ig.util.distanceBetweenPoints(this.pos, this.lockedOn.pos);
          if (_0x57440a <= (this.lockedOn.size.x + this.lockedOn.size.y) / 0x3 || this.distanceReached <= _0x57440a && null != this.distanceReached) this.lockedOn.stats.health.current = this.instantDeath ? 0x0 : this.lockedOn.stats.health.current - this.damage, this.tower.applyBuff(this.effect), this.kill();
          this.distanceReached = _0x57440a;
        }
      }
    },
    'draw': function () {
      if (0x0 < this.showDelay) this.showDelay--;else {
        var _0xbe1799 = ig.system.context;
        _0xbe1799.save(), _0xbe1799.translate(-ig.game.screen.x, -ig.game.screen.y);
        var _0xd84e30 = ig.GameConfig.bullet[this.bulletType];
        _0xbe1799.translate(this.pos.x, this.pos.y), _0xbe1799.scale(this.scale.x, this.scale.y), _0xbe1799.rotate(this.rotation * Math.PI / 0xb4), _0xbe1799.translate(this.sideOffset, 0x0);
        var _0x190f88 = [{
            'x': _0xd84e30.width / 0x2,
            'y': 0x0
          }, {
            'x': -_0xd84e30.width / 0x2,
            'y': 0x0
          }, {
            'x': 0x0,
            'y': 0x2 * this.speed
          }],
          _0x3b13a6 = _0xbe1799.createLinearGradient(-_0x190f88[0x1].x, 0x0, 0x2 * _0x190f88[0x0].x, _0x190f88[0x2].y);
        _0x3b13a6.addColorStop(0x0, '#ffffff'), _0x3b13a6.addColorStop(0x1, '#bfbfbf'), _0xbe1799.fillStyle = _0x3b13a6, _0xbe1799.beginPath(), _0xbe1799.moveTo(_0x190f88[0x0].x, _0x190f88[0x0].y), _0xbe1799.lineTo(_0x190f88[0x1].x, _0x190f88[0x1].y), _0xbe1799.lineTo(_0x190f88[0x2].x, _0x190f88[0x2].y), _0xbe1799.closePath(), _0xbe1799.globalAlpha = 0.5, _0xbe1799.fill(), _0xbe1799.globalAlpha = 0x1, _0xbe1799.drawImage(_0xd84e30.data, -_0xd84e30.width / 0x2, -_0xd84e30.height / 0x2), _0xbe1799.restore();
      }
    }
  }), EntityExplosion = ig.Entity.extend({
    'init': function (_0x51f6d0, _0x360175, _0x533834) {
      this.parent(_0x51f6d0, _0x360175, _0x533834), this.deathAlpha = 0x1, this.spread = {
        'speed': 0x4,
        'max': this.deathAlpha,
        'value': 0x0
      }, this.setAnchoredPosition(this.pos.x - ig.system.width / 0x2, this.pos.y - ig.system.height / 0x2, 'center'), _0x51f6d0 = ig.game.getEntitiesByType(EntityGameMarble);
      for (_0x360175 = 0x0; _0x360175 < _0x51f6d0.length; _0x360175++) _0x533834 = _0x51f6d0[_0x360175], ig.util.distanceBetween(this.pos.x, this.pos.y, _0x533834.pos.x + _0x533834.size.x / 0x2, _0x533834.pos.y + _0x533834.size.y / 0x2) <= this.maxRadii && (_0x533834.stats.health.current -= this.damage, _0x533834.stats.health.temp -= this.damage, this.tower && this.effect && this.tower.applyBuff(this.effect, _0x533834));
    },
    'draw': function () {
      if (!ig.game.checkPauseGame) {
        if (0x0 < this.deathAlpha) {
          this.deathAlpha -= this.spread.speed * ig.system.tick, this.spread.value = this.spread.value >= this.spread.max ? this.spread.max : this.spread.value + ig.system.tick * this.spread.speed;
          var _0x2ee96c = ig.system.context;
          _0x2ee96c.save(), _0x2ee96c.translate(-ig.game.screen.x + this.pos.x + this.size.x / 0x2, -ig.game.screen.y + this.pos.y + this.size.y / 0x2), _0x2ee96c.globalAlpha = 0x1 <= this.deathAlpha ? 0x1 : 0x0 >= this.deathAlpha ? 0x0 : this.deathAlpha;
          var _0x3ed00b = 0x0,
            _0x3ed00b = _0x2ee96c.createRadialGradient(0x0, 0x0, 0x0 >= _0x3ed00b ? 0x0 : _0x3ed00b, 0x0, 0x0, 0.8 * this.spread.value * this.maxRadii);
          _0x3ed00b.addColorStop(0.5, "rgba(255, 255, 153, 0)"), _0x3ed00b.addColorStop(0x1, "rgba(255, 153, 51, 1)"), _0x3ed00b.addColorStop(0x1, "rgba(255, 102, 0, 0)"), _0x2ee96c.fillStyle = _0x3ed00b, _0x2ee96c.beginPath(), _0x2ee96c.arc(0x0, 0x0, this.maxRadii, 0x0, 0x2 * Math.PI), _0x2ee96c.fill(), _0x2ee96c.globalAlpha = 0x1, _0x2ee96c.restore();
        } else this.kill();
      }
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.gameplay.game-tower').requires('game.plugins.effects', 'game.data.configurations', 'game.entities.gameplay.game-tower-place', 'game.entities.gameplay.game-tower-bullet', 'impact.entity').defines(function () {
  EntityTower = ig.Entity.extend({
    'zIndex': 0xbb8,
    'size': {
      'x': 0xfa,
      'y': 0xfa
    },
    'type': ig.Entity.TYPE.A,
    'dropped': !0x1,
    'area': {
      'elevated': 0x0,
      'boosted': 0x0
    },
    'isClicked': !0x1,
    'notification': new ig.Image('media/graphics/sprites/interface/notification.png'),
    'options': {},
    'init': function (_0x1014e8, _0x2b0ac0, _0x3320dc) {
      this.parent(_0x1014e8, _0x2b0ac0, _0x3320dc), this.lockedOn = null, this.towerConnections = [], this.damageMult = 0x1, _0x1014e8 = JSON.parse(JSON.stringify(ig.GameConfig.tower[this.towerType])), this.stats = {
        'info': {
          'level': 0x1,
          'name': _0x1014e8.stats.name
        },
        'targeting': _0x1014e8.stats.targeting,
        'ammo': {
          'loaded': _0x1014e8.stats.ammo.capacity,
          'cd': 0x0,
          'capacity': _0x1014e8.stats.ammo.capacity,
          'reload': _0x1014e8.stats.ammo.reload,
          'draw': _0x1014e8.stats.ammo.draw
        },
        'bullet': _0x1014e8.stats.bullet,
        'range': {
          'max': _0x1014e8.stats.range.max,
          'min': _0x1014e8.stats.range.min
        },
        'attack': {
          'cd': 0x0,
          'draw': _0x1014e8.stats.attack.draw,
          'speed': _0x1014e8.stats.attack.speed,
          'damage': _0x1014e8.stats.attack.damage
        }
      }, this.currentBulletOffset = 0x0, this.targetingSystem = _0x1014e8.targetingSystem, this.upgradePath = _0x1014e8.upgradePath, this.rotating = _0x1014e8.rotating, this.passive = _0x1014e8.passive, _0x1014e8 = ig.GameConfig.tower[this.towerType].tier[0x0], this.head = _0x1014e8.head, this.base = _0x1014e8.base, this.deathAlpha = this.drawEffectAmount = this.rotation = this.angle = 0x0, this.spread = {
        'speed': 0x5,
        'max': 0x1,
        'value': 0x0
      }, this.animUpgrade = {
        'repetition': 0x2,
        'current': 0x0
      }, this.maxRadii = (this.size.x + this.size.y) / 0x4, this.soundCooldown = {
        'current': 0x0,
        'max': 0x0
      }, this.anims.idle = new ig.Animation(this.head, 0x0, [0x0], !0x0), this.currentAnim = this.anims.idle, this.setAnchoredPosition(this.pos.x - ig.system.width / 0x2, this.pos.y - ig.system.height / 0x2, 'center-middle'), ig.game.sortEntitiesDeferred(), this.lightning = new Lightning(), this.lightning.config.enabled = !0x0, this.lightning.config.Segments = 0x32, this.drawScale = 0x1, this.tween1 = this.tween({
        'drawScale': 1.1
      }, 0.1, {
        'easing': ig.Tween.Easing.Sinusoidal.EaseOut
      }), this.tween2 = this.tween({
        'drawScale': 0x1
      }, 0.3, {
        'easing': ig.Tween.Easing.Sinusoidal.EaseOut
      }), this.tween1.chain(this.tween2), this.tween1.start();
    },
    'update': function () {
      this.parent();
    },
    'draw': function () {
      ig.game.checkPauseGame || (this.updateOptions(), null != this.stats.bullet.type && this.towerTargeting());
      var _0x585215 = ig.system.context;
      _0x585215.save(), _0x585215.translate(this.size.x / 0x2 * this.scale.x, this.size.y / 0x2 * this.scale.x), _0x585215.translate(-ig.game.screen.x, -ig.game.screen.y), this.lockedOn && (this.control.isLevelEditor && (_0x585215.beginPath(), _0x585215.strokeStyle = 'blue', _0x585215.lineWidth = 0x1, _0x585215.moveTo(this.pos.x, this.pos.y), _0x585215.lineTo(-this.size.x / 0x2 + this.lockedOn.pos.x + this.lockedOn.size.x / 0x2, -this.size.y / 0x2 + this.lockedOn.pos.y + this.lockedOn.size.y / 0x2), _0x585215.stroke()), this.rotating || (this.rotation = Math.atan2(this.lockedOn.pos.y + this.lockedOn.size.y / 0x2 - (this.pos.y + this.size.y / 0x2), this.lockedOn.pos.x + this.lockedOn.size.x / 0x2 - (this.pos.x + this.size.x / 0x2)) * (0xb4 / Math.PI) + 0x5a)), ig.game.checkPauseGame || (this.rotating && (this.rotation += 0x2 * ig.game.optimizer * ig.game.GameController.speedMultiplier(), 0x168 <= this.rotation && (this.rotation -= 0x168)), null != this.stats.bullet.type && this.towerReloading(), null != this.stats.bullet.type && this.towerAttacking());
      if (!ig.game.viewRanges) {
        var _0xac2945 = this.updateRange(),
          _0x1a6f50 = _0xac2945 - 0x4b,
          _0x1a6f50 = 0x0 >= _0x1a6f50 ? 0x0 : _0x1a6f50;
        _0x585215.globalAlpha = 0.3;
        var _0x2cc357 = _0x585215.createRadialGradient(this.pos.x, this.pos.y, _0x1a6f50, this.pos.x, this.pos.y, _0xac2945);
        _0x2cc357.addColorStop(0x0, "rgba(255, 255, 255, 0)"), _0x2cc357.addColorStop(0x1, "rgba(255, 255, 255, 1)"), _0x585215.fillStyle = _0x2cc357, _0x585215.beginPath(), _0x585215.arc(this.pos.x, this.pos.y, _0xac2945, 0x0, 0x2 * Math.PI), _0x585215.fill(), 0x0 < this.stats.range.min && (_0x1a6f50 = _0x585215.createRadialGradient(this.pos.x, this.pos.y, this.stats.range.min, this.pos.x, this.pos.y, _0x1a6f50 + 0x4b), _0x1a6f50.addColorStop(0x0, "rgba(255, 255, 255, 0)"), _0x1a6f50.addColorStop(0x0, "rgba(255, 255, 255, 1)"), _0x1a6f50.addColorStop(0x1, "rgba(255, 255, 255, 0)"), _0x585215.fillStyle = _0x1a6f50, _0x585215.beginPath(), _0x585215.arc(this.pos.x, this.pos.y, _0xac2945.min + 0.1 * _0xac2945, 0x0, 0x2 * Math.PI), _0x585215.fill()), _0x585215.globalAlpha = 0x1;
      }
      this.checkUpgrades() && (_0xac2945 = Math.abs(ig.system.fps / 0x2 - ig.game.fpsCounter % ig.system.fps) / (ig.system.fps / 0x2), _0x585215.globalAlpha = _0xac2945, this.notification.draw(this.pos.x - 0x32 + this.size.x / 0x2, this.pos.y + 0x4b - this.size.y / 0x2 - this.notification.height), _0x585215.globalAlpha = 0x1);
      if (0x0 < this.deathAlpha) {
        this.maxRadii = (this.size.x + this.size.y) / 0x3, this.deathAlpha -= this.spread.speed * ig.system.tick, this.spread.value = this.spread.value >= this.spread.max ? this.spread.max : this.spread.value + ig.system.tick * this.spread.speed, _0x585215.globalAlpha = 0x1 <= this.deathAlpha ? 0x1 : 0x0 >= this.deathAlpha ? 0x0 : this.deathAlpha;
        var _0xac2945 = this.pos.x,
          _0x1a6f50 = this.pos.y,
          _0x2cc357 = 0x0,
          _0x50e807 = this.pos.x,
          _0x2cc357 = _0x585215.createRadialGradient(_0xac2945, _0x1a6f50, 0x0 >= _0x2cc357 ? 0x0 : _0x2cc357, _0x50e807, this.pos.y, 0.8 * this.spread.value * this.maxRadii);
        _0x2cc357.addColorStop(0.5, "rgba(255, 255, 255, 0)"), _0x2cc357.addColorStop(0x1, "rgba(255, 255, 255, 1)"), _0x2cc357.addColorStop(0x1, "rgba(255, 255, 255, 0)"), _0x585215.fillStyle = _0x2cc357, _0x585215.beginPath(), _0x585215.arc(_0xac2945, _0x1a6f50, this.maxRadii, 0x0, 0x2 * Math.PI), _0x585215.fill(), _0x585215.globalAlpha = 0x1;
      } else 0x0 < this.animUpgrade.current && (this.deathAlpha = 0x1, this.spread.value = 0x0, this.animUpgrade.current--);
      _0x585215.translate(this.pos.x, this.pos.y), _0x585215.scale(this.drawScale, this.drawScale), _0x585215.drawImage(this.base.data, -this.size.x / 0x2, -this.size.y / 0x2), _0x585215.rotate(this.rotation * Math.PI / 0xb4), _0x585215.drawImage(this.head.data, -this.size.x / 0x2, -this.size.y / 0x2), _0x585215.restore(), _0xac2945 = this.pos.x, _0x1a6f50 = this.pos.y + 0x14, _0x585215.save(), _0x585215.translate(-ig.game.screen.x, -ig.game.screen.y), _0x585215.globalAlpha = 0.7, 0x0 < this.stats.attack.cd && this.stats.attack.draw && (_0x585215.beginPath(), _0x585215.fillStyle = '#8a3a3a', _0x585215.roundRect(_0xac2945 + 0x5 + this.size.x / 0x4 * this.scale.x, _0x1a6f50, this.size.x / 0x2 * this.scale.x - 0xa, 0x19, 0x64), _0x585215.fill(), _0x585215.beginPath(), _0x585215.fillStyle = '#4fd353', _0x2cc357 = (this.stats.attack.speed - this.stats.attack.cd) / this.stats.attack.speed, _0x585215.roundRect(_0xac2945 + 0x5 + this.size.x / 0x4 * this.scale.x, _0x1a6f50, this.size.x / 0x2 * this.scale.x * (0.05 >= _0x2cc357 ? 0.05 : _0x2cc357) - 0xa, 0x19, 0x64), _0x585215.fill(), _0x585215.beginPath(), _0x585215.strokeStyle = '#191e1e', _0x585215.lineWidth = 0x9, _0x585215.roundRect(_0xac2945 + 0x5 + this.size.x / 0x4 * this.scale.x, _0x1a6f50, this.size.x / 0x2 * this.scale.x - 0xa, 0x19, 0x64), _0x585215.stroke()), 0x1 < this.stats.ammo.capacity && this.stats.ammo.loaded < this.stats.ammo.capacity && this.stats.ammo.draw && (0x0 < this.stats.ammo.cd && (_0x585215.beginPath(), _0x585215.fillStyle = '#8a3a3a', _0x585215.roundRect(_0xac2945 + 0x5 + this.size.x / 0x4 * this.scale.x, _0x1a6f50 + 0x19, this.size.x / 0x2 * this.scale.x - 0xa, 0x19, 0x64), _0x585215.fill(), _0x585215.beginPath(), _0x585215.fillStyle = '#eafa05', _0x2cc357 = (this.stats.ammo.reload - this.stats.ammo.cd) / this.stats.ammo.reload, _0x2cc357 = 0.05 >= _0x2cc357 ? 0.05 : _0x2cc357, _0x585215.roundRect(_0xac2945 + 0x5 + this.size.x / 0x4 * this.scale.x, _0x1a6f50 + 0x19, this.size.x / 0x2 * this.scale.x * _0x2cc357 - 0xa, 0x19, 0x64), _0x585215.fill(), _0x585215.beginPath(), _0x585215.strokeStyle = '#191e1e', _0x585215.lineWidth = 0x9, _0x585215.roundRect(_0xac2945 + 0x5 + this.size.x / 0x4 * this.scale.x, _0x1a6f50 + 0x19, this.size.x / 0x2 * this.scale.x - 0xa, 0x19, 0x64), _0x585215.stroke()), _0x585215.globalAlpha = 0x1, _0x585215.textAlign = 'center', _0x585215.textBaseAlign = 'center', _0x585215.fillStyle = 'white', _0x585215.font = "35px segoe", _0x2cc357 = [], _0x50e807 = ig.GameConfig.bullet[this.stats.bullet.type], 'object' == typeof _0x50e807 && _0x2cc357.push({
        'image': _0x50e807,
        'scale': {
          'x': 1.25 * _0x50e807.width,
          'y': 1.25 * _0x50e807.height
        }
      }), _0x2cc357.push(String(" " + this.stats.ammo.loaded + '/' + this.stats.ammo.capacity)), ig.ModText.drawTextAndImage(_0x2cc357, _0xac2945 + this.size.x / 0x2 * this.scale.x, _0x1a6f50 + 0x19, 'center', {
        'front': 'white',
        'back': 'black'
      })), _0x585215.globalAlpha = 0x1, _0x585215.restore();
    },
    'upgradeAnim': function () {
      this.tween1.start(), this.deathAlpha = 0x1, this.spread.value = 0x0, this.animUpgrade.current = this.animUpgrade.repetition;
    },
    'checkUpgrades': function () {
      var _0x98ddf3 = !0x1;
      if (ig.game.playerData.currency.gold >= ig.GameConfig.computeUpgrade(this)) _0x98ddf3 = !0x0;else {
        for (var _0x29fe96 = 0x0; _0x29fe96 < this.upgradePath.length; _0x29fe96++) if (ig.game.playerData.currency.gold >= this.upgradePath[_0x29fe96].cost) {
          _0x98ddf3 = !0x0;
          break;
        }
      }
      return _0x98ddf3;
    },
    'updateRange': function () {
      return parseInt(this.stats.range.max + (0x0 == this.stats.targeting.length ? 0x0 : this.area.elevated));
    },
    'updateDamage': function () {
      return this.stats.attack.damage * this.damageMult;
    },
    'updateOptions': function () {
      for (var _0x2cdd69 in this.options) {
        var _0x36332a = this.options[_0x2cdd69];
        0x0 < _0x36332a.timer.cd && (_0x36332a.timer.cd -= 0.034 * ig.game.optimizer * ig.game.GameController.speedMultiplier());
      }
    },
    'towerTargeting': function () {
      var _0x192e29 = this.updateRange();
      if (this.lockedOn) {
        var _0xe74c90 = ig.util.distanceBetween(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2, this.lockedOn.pos.x + this.lockedOn.size.x / 0x2, this.lockedOn.pos.y + this.lockedOn.size.y / 0x2);
        if (this.lockedOn._killed || _0xe74c90 > _0x192e29 || _0xe74c90 < this.stats.range.min || !this.targetingSystem.locking) this.lockedOn = null, this.damageMult = 0x1;
      } else {
        for (var _0x1db318 = this.lockedOn = null, _0x1b606e = ig.game.getEntitiesByType(EntityGameMarble), _0xe74c90 = [], _0x2a3cc8 = 0x0; _0x2a3cc8 < _0x1b606e.length; _0x2a3cc8++) for (var _0x555c01 = 0x0; _0x555c01 < this.stats.targeting.length; _0x555c01++) for (var _0x554df7 = 0x0; _0x554df7 < _0x1b606e[_0x2a3cc8].stats.targeting.length; _0x554df7++) this.stats.targeting[_0x555c01] == _0x1b606e[_0x2a3cc8].stats.targeting[_0x554df7] && _0xe74c90.push(_0x1b606e[_0x2a3cc8]);
        _0x1b606e = _0xe74c90;
        for (_0x2a3cc8 = 0x0; _0x2a3cc8 < _0x1b606e.length; _0x2a3cc8++) if (_0xe74c90 = ig.util.distanceBetween(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2, _0x1b606e[_0x2a3cc8].pos.x + _0x1b606e[_0x2a3cc8].size.x / 0x2, _0x1b606e[_0x2a3cc8].pos.y + _0x1b606e[_0x2a3cc8].size.y / 0x2), this.lockedOn) {
          switch (this.targetingSystem.process) {
            case 'youngest':
              checking = this.lockedOn.progress >= _0x1b606e[_0x2a3cc8].progress && _0xe74c90 <= _0x192e29;
              break;
            case 'oldest':
              checking = this.lockedOn.progress <= _0x1b606e[_0x2a3cc8].progress && _0xe74c90 <= _0x192e29;
              break;
            case 'farthest':
              checking = _0xe74c90 >= _0x1db318 && _0xe74c90 <= _0x192e29;
              break;
            default:
              checking = _0xe74c90 <= _0x1db318;
          }
          checking && _0xe74c90 >= this.stats.range.min && (this.lockedOn = _0x1b606e[_0x2a3cc8], _0x1db318 = _0xe74c90, this.damageMult = 0x1);
        } else _0xe74c90 <= _0x192e29 && _0xe74c90 >= this.stats.range.min && 0x0 < _0x1b606e[_0x2a3cc8].stats.health.temp && (this.lockedOn = _0x1b606e[_0x2a3cc8], _0x1db318 = _0xe74c90, this.damageMult = 0x1);
      }
    },
    'towerReloading': function () {
      0x0 < this.stats.ammo.cd ? (this.stats.ammo.cd -= 0x64 * ig.system.tick * ig.game.GameController.speedMultiplier(), 0x0 > this.stats.ammo.cd && (this.stats.ammo.cd = 0x0)) : 0x0 >= this.stats.ammo.cd && this.stats.ammo.loaded < this.stats.ammo.capacity && (this.stats.ammo.loaded += 0x1, this.stats.ammo.cd = this.stats.ammo.reload);
    },
    'towerAttacking': function () {
      this.attackDrawEffect();
      if (0x0 < this.stats.attack.cd) this.stats.attack.cd -= 0x64 * ig.system.tick * ig.game.GameController.speedMultiplier(), 0x0 > this.stats.attack.cd && (this.stats.attack.cd = 0x0);else {
        if (this.lockedOn && 0x0 < this.stats.ammo.loaded) {
          this.stats.ammo.loaded -= 0x1, this.stats.attack.cd = this.stats.attack.speed;
          var _0x2cd284 = this.pos.x + this.size.x / 0x2 + Math.cos((this.rotation - 0x5a) * Math.PI / 0xb4) * (this.head.width / 0x2 - 0x28),
            _0x5a2b5e = this.pos.y + this.size.y / 0x2 + Math.sin((this.rotation - 0x5a) * Math.PI / 0xb4) * (this.head.width / 0x2 - 0x28);
          switch (this.stats.bullet.type) {
            case 'shock':
            case 'laser':
              var _0x34a74a = this.updateDamage();
              this.lockedOn.stats.health.current -= _0x34a74a, this.attackGameEffect();
              break;
            default:
              _0x34a74a = this.updateDamage(), this.lockedOn.stats.health.temp -= _0x34a74a;
              var _0x43e73e = {
                  'x': this.drawScale,
                  'y': this.drawScale
                },
                _0xbbc2bf = 0x0;
              0x1 < this.stats.bullet.offset.length && (this.currentBulletOffset >= this.stats.bullet.offset.length - 0x1 ? this.currentBulletOffset = 0x0 : this.currentBulletOffset++, _0xbbc2bf = 0xf * this.stats.bullet.offset[this.currentBulletOffset], _0x43e73e = {
                'x': 0.75 * this.drawScale,
                'y': 0.75 * this.drawScale
              });
              var _0x346d1a = this.updateRange(),
                _0x382a33 = ig.util.distanceBetween(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2, this.lockedOn.pos.x + this.lockedOn.size.x / 0x2, this.lockedOn.pos.y + this.lockedOn.size.y / 0x2);
              ig.game.spawnEntity(EntityBullet, _0x2cd284, _0x5a2b5e, {
                'tower': this,
                'zIndex': this.zIndex - 0x1,
                'lockedOn': this.lockedOn,
                'damage': _0x34a74a,
                'speed': this.stats.bullet.speed * (_0x382a33 / _0x346d1a),
                'bulletType': this.stats.bullet.type,
                'effect': this.stats.bullet.effect,
                'scale': _0x43e73e,
                'sideOffset': _0xbbc2bf
              }), ig.game.sortEntitiesDeferred(), this.attackPlaySound();
          }
        }
      }
    },
    'attackPlaySound': function () {
      switch (this.stats.bullet.sfx) {
        case 'm-gun':
          ig.soundHandler.sfxPlayer.play('bulletMGun');
          break;
        case 'booms':
          ig.soundHandler.sfxPlayer.play('bulletBoom');
          break;
        case 'snipe':
          ig.soundHandler.sfxPlayer.play('bulletSnipe');
          break;
        case 'shock':
          ig.soundHandler.sfxPlayer.play('bulletLightning');
          break;
        case 'laser':
          ig.soundHandler.sfxPlayer.play('bulletLaser');
          break;
        case 'shotg':
          ig.soundHandler.sfxPlayer.play('bulletShotgun');
          break;
        default:
          ig.soundHandler.sfxPlayer.play('bulletBasic');
      }
    },
    'attackDrawEffect': function () {
      if (this.lockedOn && !(0x0 >= this.drawEffectAmount)) {
        this.drawEffectAmount -= 0x1 * ig.system.tick * ig.game.GameController.speedMultiplier();
        var _0xb57a80 = ig.system.context;
        _0xb57a80.save(), _0xb57a80.translate(-this.size.x / 0x2, -this.size.y / 0x2);
        switch (this.stats.bullet.type) {
          case 'laser':
            var _0x4754f2 = 0x3 >= this.updateDamage() ? 0x3 : 0xf <= this.updateDamage() ? 0xf : this.updateDamage();
            _0xb57a80.lineCap = 'round', _0xb57a80.shadowBlur = 0x3 * _0x4754f2, _0xb57a80.shadowColor = '#ff5050', _0xb57a80.strokeStyle = '#ff3300', _0xb57a80.lineWidth = 0x1 * _0x4754f2, _0xb57a80.beginPath(), _0xb57a80.moveTo(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2), _0xb57a80.lineTo(this.lockedOn.pos.x + this.lockedOn.size.x / 0x2, this.lockedOn.pos.y + this.lockedOn.size.y / 0x2), _0xb57a80.stroke();
            break;
          case 'shock':
            this.lightning.config.GlowWidth = 0x64, this.lightning.config.GlowColor = '#ffffff', this.lightning.config.BlurColor = '#ffffcc', this.lightning.config.Color = '#ffff99';
            var _0x4754f2 = this.pos.x + this.size.x / 0x2 + Math.cos((this.rotation - 0x5a) * Math.PI / 0xb4) * (this.head.width / 0x2 - 0x28),
              _0x5f1cff = this.pos.y + this.size.y / 0x2 + Math.sin((this.rotation - 0x5a) * Math.PI / 0xb4) * (this.head.width / 0x2 - 0x28);
            this.lightning.Cast(_0xb57a80, new VectorLightning(0x0, 0x0, _0x4754f2, _0x5f1cff), new VectorLightning(0x0, 0x0, this.lockedOn.pos.x + this.lockedOn.size.x / 0x2, this.lockedOn.pos.y + this.lockedOn.size.y / 0x2));
        }
        _0xb57a80.restore();
      }
    },
    'attackGameEffect': function () {
      switch (this.stats.bullet.effect) {
        case 'burn':
          this.drawEffectAmount = 0x1, 0x0 >= this.soundCooldown.current ? (this.attackPlaySound(), this.soundCooldown.current = this.soundCooldown.max) : this.soundCooldown.current -= ig.system.tick, this.damageMult += 0.75 * ig.system.tick * (this.lockedOn.stats.health.max / 0x64);
          break;
        case 'slow':
          this.drawEffectAmount = 0.2, this.attackPlaySound(), this.applyBuff(this.stats.bullet.effect);
      }
    },
    'applyBuff': function (_0xbb4532) {
      var _0x36b2d6 = this.lockedOn;
      if (_0xbb4532 && !_0x36b2d6._killed) {
        for (var _0x218e72 = !0x0, _0x43a83c = 0x0; _0x43a83c < _0x36b2d6.stats.buff.length; _0x43a83c++) if (_0x36b2d6.stats.buff[_0x43a83c] == _0xbb4532) {
          _0x36b2d6.stats.buff[_0x43a83c].timer = 0x5a, _0x218e72 = !0x1;
          break;
        }
        _0x218e72 && _0x36b2d6.stats.buff.push({
          'effect': _0xbb4532,
          'timer': 0x5a
        });
      }
    },
    'clicked': function () {
      this.isClicked = !0x0;
    },
    'released': function () {
      if (this.isClicked) {
        this.isClicked = !0x1;
        if (ig.game.allow && ig.game.tutorial) {
          if (!ig.game.allow.upgradeTower || this != ig.game.getEntitiesByType(EntityTower)[0x0]) return;
          ig.game.tutorial && (ig.game.trigger = !0x1);
        }
        if (!ig.game.checkPauseGame) {
          ig.soundHandler.sfxPlayer.play('click'), ig.game.cameraControl.fnc_centerPos(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2);
          for (var _0x5f2b62 = ig.game.getEntitiesByType(EntityPopupOption), _0x7fea9d = 0x0; _0x7fea9d < _0x5f2b62.length; _0x7fea9d++) _0x5f2b62[_0x7fea9d].kill();
          _0x5f2b62 = ig.game.spawnEntity(EntityPopupOption, 0x0, 0x0, {
            'tower': this,
            '_option': [],
            'size': this.size,
            'area': this.area
          }), _0x5f2b62.setAnchoredPosition(this.anchoredPositionX + (this.size.x - _0x5f2b62.size.x) / 0x2, this.anchoredPositionY + (this.size.y - _0x5f2b62.size.y) / 0x2, 'center-middle');
          var _0x1528d1 = [{
            'option': 'Upgrade',
            'cost': this.towerCost
          }, {
            'option': 'Sell',
            'cost': this.towerCost / 0x2
          }];
          this.rotating || _0x1528d1.push({
            'option': 'Priority',
            'cost': 0x0
          });
          if (0x0 < this.upgradePath.length) {
            for (_0x7fea9d = 0x0; _0x7fea9d < this.upgradePath.length; _0x7fea9d++) _0x1528d1.push(this.upgradePath[_0x7fea9d]);
          }
          for (_0x7fea9d = 0x0; _0x7fea9d < _0x1528d1.length; _0x7fea9d++) {
            switch (_0x1528d1[_0x7fea9d].option) {
              case 'Upgrade':
              case 'Sell':
              case 'Priority':
                var _0x552f4d = ig.game.spawnEntity(EntityPopupOptionButton, 0x0, 0x0, {
                  'control': _0x5f2b62,
                  'isEntity': !0x0,
                  'buttonType': _0x1528d1[_0x7fea9d].option,
                  'towerCost': _0x1528d1[_0x7fea9d].cost
                });
                break;
              case 'Consumable':
                _0x552f4d = ig.game.spawnEntity(EntityPopupOptionButton, 0x0, 0x0, {
                  'control': _0x5f2b62,
                  'isEntity': !0x0,
                  'timer': {
                    'cd': 0x0,
                    'max': 0xa
                  },
                  'effect': _0x1528d1[_0x7fea9d].effect,
                  'consumable': _0x1528d1[_0x7fea9d].image,
                  'description': _0x1528d1[_0x7fea9d].description,
                  'buttonType': _0x1528d1[_0x7fea9d].option,
                  'towerCost': _0x1528d1[_0x7fea9d].cost
                });
                break;
              default:
                _0x552f4d = _0x1528d1[_0x7fea9d].name ? _0x1528d1[_0x7fea9d].name : 'Basic', _0x552f4d = ig.game.spawnEntity(EntityPopupOptionButton, 0x0, 0x0, {
                  'control': _0x5f2b62,
                  'isEntity': !0x0,
                  'buttonType': 'Tower',
                  'removal': this,
                  'towerType': _0x552f4d,
                  'towerCost': ig.GameConfig.tower[_0x552f4d].cost,
                  'description': ig.GameConfig.tower[_0x552f4d].stats.description
                });
            }
            _0x552f4d.setAnchoredPosition(this.pos.x + this.size.x / 0x2 - _0x552f4d.size.x / 0x2 - ig.system.width / 0x2, this.pos.y + this.size.y / 0x2 - _0x552f4d.size.y / 0x2 - ig.system.height / 0x2, 'center-middle'), _0x5f2b62._option.push(_0x552f4d);
            var _0x42b814 = 0x168 / _0x1528d1.length * (_0x7fea9d + 0x1) - 0x5a,
              _0x30c3d7 = 0x0;
            0x0 == _0x1528d1.length % 0x2 && (_0x42b814 += 0xb4 / _0x1528d1.length);
            if (!(0x3 == _0x1528d1.length || 0x4 == _0x1528d1.length)) {
              if (0x2 == _0x1528d1.length || 0x5 == _0x1528d1.length || 0x6 == _0x1528d1.length) _0x42b814 += 0x168 / _0x1528d1.length;else var _0x1059ae = Math.ceil((_0x1528d1.length - 0x6) / 0x2) + 0x1,
                _0x42b814 = _0x42b814 + 0x168 / _0x1528d1.length * _0x1059ae,
                _0x30c3d7 = 0.25 * _0x1059ae;
            }
            _0x1059ae = (this.size.x + this.size.y) * (0.75 + _0x30c3d7) * Math.cos(_0x42b814 * Math.PI / 0xb4), _0x42b814 = (this.size.x + this.size.y) * (0.75 + _0x30c3d7) * Math.sin(_0x42b814 * Math.PI / 0xb4), new ig.TweenDef(_0x552f4d).to({
              'anchoredPositionX': _0x552f4d.anchoredPositionX + _0x1059ae,
              'anchoredPositionY': _0x552f4d.anchoredPositionY + _0x42b814
            }, 0x64).onComplete(function () {}.bind(_0x552f4d)).start();
          }
          ig.game.sortEntitiesDeferred();
        }
      }
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.gameplay.game-tower-popup').requires('impact.entity').defines(function () {
  EntityPopupOption = ig.Entity.extend({
    'zIndex': 0xfa0,
    'type': ig.Entity.TYPE.A,
    'close': new ig.Image('media/graphics/sprites/buttons/button-close.png'),
    'isClicked': !0x1,
    'init': function (_0x2a6f54, _0x3bf768, _0x30f7cd) {
      this.parent(_0x2a6f54, _0x3bf768, _0x30f7cd), this.animSheet = new ig.AnimationSheet(this.close.path, this.close.width, this.close.height), this.anims.idle = new ig.Animation(this.animSheet, 0x0, [0x0], !0x0), this.currentAnim = this.anims.idle, this.offset = {
        'x': -(this.size.x / 0x2 - this.close.width / 0x2),
        'y': -(this.size.y / 0x2 - this.close.height / 0x2)
      };
    },
    'update': function () {
      this.parent();
    },
    'draw': function () {
      var _0x4b49b6 = ig.system.context;
      _0x4b49b6.save(), _0x4b49b6.translate(-ig.game.screen.x, -ig.game.screen.y);
      if (this.tower.stats) {
        var _0x58de55 = [{
          'fontSize': 0x32,
          'value': String(_STRINGS.Game.Level + ": " + this.tower.stats.info.level),
          'x': this.tower.pos.x + this.tower.size.x / 0x2,
          'y': this.tower.pos.y + this.tower.size.y
        }, {
          'fontSize': 0x28,
          'value': String(this.tower.stats.info.name),
          'x': this.tower.pos.x + this.tower.size.x / 0x2,
          'y': this.tower.pos.y
        }];
        _0x4b49b6.textAlign = 'center', _0x4b49b6.strokeStyle = 'black', _0x4b49b6.fillStyle = 'white', _0x4b49b6.miterLimit = 0x2, _0x4b49b6.lineJoin = 'circle';
        for (var _0x1ecd0d = 0x0; _0x1ecd0d < _0x58de55.length; _0x1ecd0d++) {
          var _0x19e883 = _0x58de55[_0x1ecd0d].fontSize;
          _0x4b49b6.font = _0x19e883 + "px segoe", _0x4b49b6.lineWidth = 0.2 * _0x19e883, _0x4b49b6.strokeText(_0x58de55[_0x1ecd0d].value, _0x58de55[_0x1ecd0d].x, _0x58de55[_0x1ecd0d].y), _0x4b49b6.lineWidth = 0x1, _0x4b49b6.fillText(_0x58de55[_0x1ecd0d].value, _0x58de55[_0x1ecd0d].x, _0x58de55[_0x1ecd0d].y);
        }
      }
      _0x4b49b6.restore(), this.parent();
    },
    'kill': function () {
      this.closePopup(), this.parent();
    },
    'closePopup': function () {
      for (var _0x365bfb = 0x0; _0x365bfb < this._option.length; _0x365bfb++) this._option[_0x365bfb].kill();
    },
    'clicked': function () {
      this.isClicked = !0x0, ig.soundHandler.sfxPlayer.play('click');
    },
    'released': function () {
      this.isClicked && (this.isClicked = !0x1, ig.game.tutorial || this.kill());
    }
  }), EntityPopupOptionButton = ig.Entity.extend({
    'zIndex': 0x22c4,
    'type': ig.Entity.TYPE.A,
    'images': {
      'panel': new ig.Image('media/graphics/sprites/buttons/button-option.png'),
      'info': new ig.Image('media/graphics/sprites/interface/button-info.png'),
      'upgrade': new ig.Image('media/graphics/sprites/interface/ui-upgrade.png'),
      'cost': new ig.Image('media/graphics/sprites/interface/ui-purchase.png'),
      'sell': new ig.Image('media/graphics/sprites/interface/ui-sell.png'),
      'upgrade_atk': new ig.Image('media/graphics/sprites/interface/ui-atk-damage.png'),
      'upgrade_spd': new ig.Image('media/graphics/sprites/interface/ui-atk-speed.png'),
      'upgrade_rng': new ig.Image('media/graphics/sprites/interface/ui-atk-range.png')
    },
    'isClicked': !0x1,
    'init': function (_0x11ab44, _0x5d8ea7, _0x13ab71) {
      this.parent(_0x11ab44, _0x5d8ea7, _0x13ab71), this.animSheet = new ig.AnimationSheet(this.images.panel.path, this.images.panel.width, this.images.panel.height), this.anims.idle = new ig.Animation(this.animSheet, 0x0, [0x0], !0x0), this.currentAnim = this.anims.idle, this.size = {
        'x': this.images.panel.width,
        'y': this.images.panel.height
      }, this.shake = {
        'range': 0xa,
        'current': 0x0,
        'amount': 0x0
      }, this.info = {
        'x': 0x0,
        'y': 0x0,
        'width': this.size.x / 0x5,
        'height': this.size.y / 0x5,
        'img': this.images.info
      }, this.state = !0x0, this.buttonDown = 0x0, this.isUsable = !0x1;
    },
    'draw': function () {
      var _0x2cd98c = 0x0 >= this.shake.amount ? 0x0 : Math.abs(this.shake.range / 0x2 - this.shake.current);
      this.shake.current = 0x0 >= this.shake.current ? this.shake.range : this.shake.current - 0x1, this.shake.amount -= 0x1 * ig.system.tick;
      var _0x2723d4 = ig.system.context;
      _0x2723d4.save(), _0x2723d4.translate(-ig.game.screen.x + _0x2cd98c, -ig.game.screen.y + this.buttonDown), _0x2723d4.drawImage(this.images.panel.data, this.pos.x, this.pos.y);
      switch (this.buttonType) {
        case 'Consumable':
        case 'Tower':
          this.info.x = this.pos.x + this.size.x - this.info.width, this.info.y = this.pos.y;
          var _0x2cd98c = this.info.x + (this.info.width - 1.75 * this.info.img.width) / 0x2,
            _0x9aa2b0 = this.info.y + (this.info.height - 1.75 * this.info.img.height) / 0x2;
          _0x2723d4.translate(_0x2cd98c, _0x9aa2b0), _0x2723d4.scale(1.75, 1.75), _0x2723d4.drawImage(this.info.img.data, 0x0, 0x0), _0x2723d4.scale(0x1 / 1.75, 0x1 / 1.75), _0x2723d4.translate(-_0x2cd98c, -_0x9aa2b0), _0x2723d4.fillStyle = 'black', _0x2723d4.textAlign = 'right', _0x2cd98c = 0x22, _0x2723d4.font = _0x2cd98c + "px segoe", _0x2723d4.fillText(this.effect ? this.effect : ig.GameConfig.tower[this.towerType].stats.name, this.pos.x + this.size.x - this.info.width - 0x5, this.pos.y + 1.5 * _0x2cd98c);
          if (this.state) {
            _0x2cd98c = 'Cost', this.timer && 0x0 < this.timer.cd && (_0x2cd98c = 'Cooldown');
            switch (_0x2cd98c) {
              case 'Cooldown':
                _0x2723d4.fillStyle = 'black', _0x9aa2b0 = [this.timer.cd.toFixed(0x0), " ", _STRINGS.Game.Timer];
                break;
              default:
                _0x2723d4.fillStyle = ig.game.playerData.currency.gold >= this.towerCost ? 'black' : '#c05353', _0x9aa2b0 = [{
                  'image': this.images.cost,
                  'scale': {
                    'x': this.images.cost.width,
                    'y': this.images.cost.height
                  }
                }, String(this.towerCost)];
            }
            _0x2723d4.textAlign = 'center', _0x2723d4.font = "42px segoe", _0x2723d4.translate(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2), ig.ModText.drawTextAndImage(_0x9aa2b0, 0x0, this.size.y / 0x2 - 0x3c, 'center'), this.towerType ? (_0x2723d4.scale(0.8, 0.8), _0x2cd98c = ig.GameConfig.tower[this.towerType].tier[0x0], _0x2cd98c.base.draw(-_0x2cd98c.base.width / 0x2, -_0x2cd98c.base.width / 0x2 - 0xa), _0x2cd98c.head.draw(-_0x2cd98c.head.height / 0x2, -_0x2cd98c.head.height / 0x2 - 0xa)) : (_0x2723d4.scale(0x2, 0x2), _0x2cd98c = ig.GameConfig.consumable[this.consumable], _0x2cd98c.draw(-_0x2cd98c.width / 0x2, -0x5 - _0x2cd98c.height / 0x2));
          } else _0x2723d4.fillStyle = '#2c5ec4', _0x2723d4.textAlign = 'center', _0x2723d4.font = "35px segoe", _0x2723d4.translate(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x3), ig.ModText.drawTextAndImage(this.description ? this.description : ig.GameConfig.tower[this.towerType].stats.description, 0x0, 0x0, 'center');
          _0x2723d4.restore();
          break;
        case 'Upgrade':
          _0x2723d4.textAlign = 'center', _0x2723d4.fillStyle = 'black', _0x2cd98c = 0x28, _0x2723d4.font = _0x2cd98c + "px segoe", ig.ModText.drawTextAndImage([String(_STRINGS.Game.Tower.Upgrade + " "), {
            'image': this.images.upgrade,
            'scale': {
              'x': this.images.upgrade.width,
              'y': this.images.upgrade.height
            }
          }], this.pos.x + this.size.x / 0x2, this.pos.y + _0x2cd98c, 'center'), _0x2cd98c = ig.GameConfig.computeUpgrade(this.control.tower), _0x2723d4.fillStyle = ig.game.playerData.currency.gold >= _0x2cd98c ? 'black' : '#c05353', _0x2723d4.textAlign = 'center', _0x2723d4.font = "42px segoe", _0x2723d4.translate(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2), ig.ModText.drawTextAndImage([{
            'image': this.images.cost,
            'scale': {
              'x': this.images.cost.width,
              'y': this.images.cost.height
            }
          }, String(_0x2cd98c)], 0x0, this.size.y / 0x2 - 0x3c, 'center');
          var _0x2cd98c = '',
            _0x9aa2b0 = String(this.control.tower.stats.attack.damage.toFixed(0x2)),
            _0x58252c = '',
            _0x1ea937 = String((ig.system.fps / this.control.tower.stats.attack.speed).toFixed(0x2)),
            _0x257021 = '',
            _0x33df97 = String(this.control.tower.stats.range.max);
          (ig.system.fps / this.control.tower.stats.ammo.reload).toFixed(0x2);
          var _0x185cf8 = Math.floor(this.control.tower.stats.info.level / ig.GameConfig.tower[this.control.tower.towerType].levelsPerTier) - 0x1,
            _0x4bacd1 = ig.GameConfig.tower[this.control.tower.towerType].tier.length,
            _0x185cf8 = ig.GameConfig.tower[this.control.tower.towerType].tier[_0x185cf8 > _0x4bacd1 - 0x1 ? _0x4bacd1 - 0x1 : _0x185cf8];
          _0x185cf8.upgrade.range && _0x185cf8.upgrade.range.max && (_0x257021 = String('+' + _0x185cf8.upgrade.range.max)), _0x185cf8.upgrade.attack && (_0x185cf8.upgrade.attack.damage && (_0x2cd98c = String('+' + _0x185cf8.upgrade.attack.damage)), _0x185cf8.upgrade.attack.speed && (_0x4bacd1 = this.control.tower.stats.attack.speed, _0x4bacd1 = ig.system.fps / (_0x4bacd1 - _0x4bacd1 / 0x64 * _0x185cf8.upgrade.attack.speed) - ig.system.fps / _0x4bacd1, _0x58252c = _0x4bacd1 == Number.POSITIVE_INFINITY || _0x4bacd1 == Number.NEGATIVE_INFINITY ? '' : '+' + String(_0x4bacd1.toFixed(0x2)))), _0x185cf8.upgrade.ammo && _0x185cf8.upgrade.ammo.reload && (_0x4bacd1 = this.control.tower.stats.ammo.reload, _0x4bacd1 = ig.system.fps / (_0x4bacd1 - _0x4bacd1 / 0x64 * _0x185cf8.upgrade.ammo.reload) - ig.system.fps / _0x4bacd1, _0x4bacd1 == Number.POSITIVE_INFINITY || _0x4bacd1 == Number.NEGATIVE_INFINITY || _0x4bacd1.toFixed(0x2)), _0x2723d4.font = "40px segoe", _0x2723d4.fillStyle = '#2c5ec4', _0x185cf8 = [], _0x185cf8.push({
            'image': this.images.upgrade_atk,
            'scale': {
              'x': 0x1 * this.images.upgrade_atk.width,
              'y': 0x1 * this.images.upgrade_atk.height
            }
          }, " ", _0x9aa2b0, '#00cc00', _0x2cd98c, String(_0x2723d4.fillStyle), "\n", {
            'image': this.images.upgrade_spd,
            'scale': {
              'x': 0x1 * this.images.upgrade_spd.width,
              'y': 0x1 * this.images.upgrade_spd.height
            }
          }, " ", _0x1ea937, '#00cc00', _0x58252c, String(_0x2723d4.fillStyle), "\n", {
            'image': this.images.upgrade_rng,
            'scale': {
              'x': 0x1 * this.images.upgrade_rng.width,
              'y': 0x1 * this.images.upgrade_rng.height
            }
          }, " ", _0x33df97, '#00cc00', _0x257021, String(_0x2723d4.fillStyle)), ig.ModText.drawTextAndImage(_0x185cf8, -0x78, -0x55, 'left');
          break;
        case 'Sell':
          _0x2723d4.textAlign = 'center', _0x2723d4.fillStyle = 'black', _0x2cd98c = 0x28, _0x2723d4.font = _0x2cd98c + "px segoe", _0x2723d4.fillText(String(_STRINGS.Game.Tower.Sell), this.pos.x + this.size.x / 0x2, this.pos.y + 1.5 * _0x2cd98c), _0x2723d4.fillStyle = 'black', _0x2723d4.font = "42px segoe", _0x2723d4.translate(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2), ig.ModText.drawTextAndImage([{
            'image': this.images.cost,
            'scale': {
              'x': this.images.cost.width,
              'y': this.images.cost.height
            }
          }, String(ig.GameConfig.computeSelling(this.control.tower))], 0x0, this.size.y / 0x2 - 0x3c, 'center'), _0x2723d4.scale(0x2, 0x2), this.images.sell.draw(-this.images.sell.width / 0x2, -0x5 - this.images.sell.width / 0x2);
          break;
        case 'Priority':
          _0x2723d4.textAlign = 'center', _0x2723d4.fillStyle = 'black', _0x2cd98c = 0x28, _0x2723d4.font = _0x2cd98c + "px segoe", _0x2723d4.fillText(String(_STRINGS.Game.Tower.Priority), this.pos.x + this.size.x / 0x2, this.pos.y + 1.5 * _0x2cd98c), _0x9aa2b0 = [];
          switch (this.control.tower.targetingSystem.process) {
            case 'nearest':
              _0x9aa2b0.push(_STRINGS.Game.Tower.TargetingSystem.nearest.info1, "\n", _STRINGS.Game.Tower.TargetingSystem.nearest.info2, "\n", _STRINGS.Game.Tower.TargetingSystem.nearest.info3);
              break;
            case 'farthest':
              _0x9aa2b0.push(_STRINGS.Game.Tower.TargetingSystem.farthest.info1, "\n", _STRINGS.Game.Tower.TargetingSystem.farthest.info2, "\n", _STRINGS.Game.Tower.TargetingSystem.farthest.info3);
              break;
            case 'youngest':
              _0x9aa2b0.push(_STRINGS.Game.Tower.TargetingSystem.youngest.info1, "\n", _STRINGS.Game.Tower.TargetingSystem.youngest.info2, "\n", _STRINGS.Game.Tower.TargetingSystem.youngest.info3);
              break;
            case 'oldest':
              _0x9aa2b0.push(_STRINGS.Game.Tower.TargetingSystem.oldest.info1, "\n", _STRINGS.Game.Tower.TargetingSystem.oldest.info2, "\n", _STRINGS.Game.Tower.TargetingSystem.oldest.info3);
              break;
            default:
              _0x9aa2b0.push(_STRINGS.Game.Tower.TargetingSystem.unknown.info1, "\n", _STRINGS.Game.Tower.TargetingSystem.unknown.info2, "\n", _STRINGS.Game.Tower.TargetingSystem.unknown.info3);
          }
          _0x2723d4.translate(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2), _0x2723d4.fillStyle = '#2c5ec4', _0x2cd98c = 0x28, _0x2723d4.font = _0x2cd98c + "px segoe", ig.ModText.drawTextAndImage(_0x9aa2b0, 0x0, -_0x2cd98c, 'center');
      }
      _0x2723d4.restore();
    },
    'clicked': function () {
      if (!ig.game.checkPauseGame) {
        this.isClicked = !0x0, this.isUsable = !0x1;
        var _0x535f97 = ig.game.getEntitiesByType(EntityPointer)[0x0];
        _0x535f97 && ('Tower' == this.buttonType || 'Consumable' == this.buttonType) ? _0x535f97.pos.x >= this.info.x && _0x535f97.pos.x <= this.info.x + this.info.width && _0x535f97.pos.y >= this.info.y && _0x535f97.pos.y <= this.info.y + this.info.height ? (this.state = !this.state, ig.soundHandler.sfxPlayer.play('flip')) : this.buttonClicked() : this.buttonClicked();
      }
    },
    'released': function () {
      this.isClicked && (this.isClicked = !0x1, this.isUsable && this.buttonEffect(), this.buttonDown = 0x0, this.isUsable = !0x1);
    },
    'update': function () {
      this.parent(), this.control.tower && 'Consumable' == this.buttonType && this.control.tower.options[this.effect] && (this.timer = this.control.tower.options[this.effect].timer);
    },
    'buttonClicked': function () {
      if (ig.game.tutorial) {
        if (this != ig.game.getEntitiesByType(EntityPopupOptionButton)[0x0]) return;
        ig.game.trigger = !0x1;
      }
      switch (this.buttonType) {
        case 'Consumable':
          0x0 < this.timer.cd ? (console.log("Option is still on cooldown"), this.buttonError()) : ig.game.playerData.currency.gold < this.towerCost ? (console.log("Not enough money"), this.buttonError()) : (ig.game.playerData.currency.gold -= this.towerCost, this.timer.cd = this.timer.max, this.buttonAnim());
          break;
        case 'Tower':
          ig.game.playerData.currency.gold >= this.towerCost ? this.buttonAnim() : (console.log("Not enough money"), this.buttonError());
          break;
        case 'Upgrade':
          var _0x20eea1 = ig.GameConfig.computeUpgrade(this.control.tower);
          ig.game.playerData.currency.gold >= _0x20eea1 ? this.buttonAnim() : (console.log("Not enough money"), this.buttonError());
          break;
        case 'Sell':
          this.buttonAnim();
          break;
        case 'Priority':
          this.buttonAnim();
          break;
        default:
          console.log("No trigger after click check");
      }
    },
    'buttonEffect': function () {
      switch (this.buttonType) {
        case 'Tower':
          ig.game.playerData.currency.gold -= this.towerCost;
          var _0x5a0dc1 = ig.game.spawnEntity(EntityTower, 0x0, 0x0, {
              'control': this.control,
              'towerType': this.towerType,
              'towerCost': this.towerCost,
              'area': this.control.area
            }),
            _0x181c6a = this.control.tower;
          _0x5a0dc1.setAnchoredPosition(_0x181c6a.anchoredPositionX, _0x181c6a.anchoredPositionY, 'center-middle'), this.removal && (console.log("Tower changed"), this.removal.kill());
          for (var _0x6bdecc = ig.GameConfig.tower[this.towerType].upgradePath, _0x181c6a = 0x0; _0x181c6a < _0x6bdecc.length; _0x181c6a++) {
            var _0xc2470c = _0x6bdecc[_0x181c6a];
            'Consumable' == _0xc2470c.option && (_0x5a0dc1.options[String(_0xc2470c.effect)] = {
              'timer': {
                'max': _0xc2470c.timer,
                'cd': 0x0
              },
              'adLock': !0x1
            });
          }
          this.control.kill(), ig.soundHandler.sfxPlayer.play('construct');
          break;
        case 'Upgrade':
          _0x181c6a = ig.GameConfig.computeUpgrade(this.control.tower), ig.game.playerData.currency.gold -= _0x181c6a, _0x181c6a = ig.GameConfig.tower[this.control.tower.towerType], _0xc2470c = Math.floor(this.control.tower.stats.info.level / ig.GameConfig.tower[this.control.tower.towerType].levelsPerTier) - 0x1, _0x5a0dc1 = ig.GameConfig.tower[this.control.tower.towerType].tier.length, _0x6bdecc = _0xc2470c > _0x5a0dc1 - 0x1 ? _0x5a0dc1 - 0x1 : _0xc2470c, _0xc2470c = _0x181c6a.tier[_0x6bdecc], _0xc2470c.upgrade.range && (0x0 < _0xc2470c.upgrade.range.max && (this.control.tower.stats.range.max += _0xc2470c.upgrade.range.max), 0x0 < _0xc2470c.upgrade.range.min && (this.control.tower.stats.range.min += _0xc2470c.upgrade.range.min));
          if (_0xc2470c.upgrade.attack && (0x0 < _0xc2470c.upgrade.attack.damage && (this.control.tower.stats.attack.damage += _0xc2470c.upgrade.attack.damage), 0x0 < _0xc2470c.upgrade.attack.speed)) {
            var _0x17516b = this.control.tower.stats.attack.speed / 0x64 * _0xc2470c.upgrade.attack.speed;
            0x0 < this.control.tower.stats.attack.speed - _0x17516b && (this.control.tower.stats.attack.speed -= _0x17516b);
          }
          _0xc2470c.upgrade.ammo && (0x0 < _0xc2470c.upgrade.ammo.capacity && (this.control.tower.stats.ammo.capacity += _0xc2470c.upgrade.ammo.capacity), 0x0 < _0xc2470c.upgrade.ammo.speed && (_0x17516b = this.control.tower.stats.ammo.reload / 0x64 * _0xc2470c.upgrade.ammo.reload, 0x0 < this.control.tower.stats.ammo.speed - _0x17516b && (this.control.tower.stats.ammo.speed -= reload))), this.control.tower.stats.info.level++, _0x5a0dc1 = _0x6bdecc + 0x1 > _0x5a0dc1 - 0x1 ? _0x5a0dc1 - 0x1 : _0x6bdecc + 0x1, this.control.tower.head = _0x181c6a.tier[_0x5a0dc1].head, this.control.tower.base = _0x181c6a.tier[_0x5a0dc1].base, this.control.tower.upgradeAnim(), ig.soundHandler.sfxPlayer.play('upgrade');
          break;
        case 'Sell':
          ig.soundHandler.sfxPlayer.play('sold'), _0x181c6a = ig.GameConfig.computeSelling(this.control.tower), ig.game.playerData.currency.gold += _0x181c6a, ig.game.spawnEntity(EntityDrops, this.control.tower.pos.x, this.control.tower.pos.y, {
            'zIndex': this.zIndex + 0x1,
            'size': this.control.tower.size,
            'value': {
              'amount': _0x181c6a,
              'image': ig.game.GameController.drawValues.currency
            }
          }), this.control.kill(), this.control.tower.kill();
          break;
        case 'Consumable':
          ig.GameConfig.towerConsumables(this.control.tower, this.effect), this.control.kill(), ig.soundHandler.sfxPlayer.play('consumables');
          break;
        case 'Priority':
          _0x5a0dc1 = 0x0, _0x6bdecc = ig.GameConfig.targetingSystemProcesses;
          for (_0x181c6a = 0x0; _0x181c6a < _0x6bdecc.length; _0x181c6a++) if (_0x6bdecc[_0x181c6a] == this.control.tower.targetingSystem.process) {
            _0x5a0dc1 = _0x181c6a + 0x1;
            break;
          }
          _0x5a0dc1 >= _0x6bdecc.length && (_0x5a0dc1 = 0x0), this.control.tower.targetingSystem.process = String(_0x6bdecc[_0x5a0dc1]);
          break;
        default:
          console.log("No implemented function");
      }
    },
    'buttonAnim': function () {
      this.isUsable = !0x0, this.buttonDown = 0xa;
    },
    'buttonError': function () {
      this.shake.amount = 0.3, ig.soundHandler.sfxPlayer.play('error');
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.gameplay.game-marble-path-main').requires('game.entities.gameplay.game-marble', 'game.entities.gameplay.game-tower', 'game.entities.gameplay.game-tower-popup', 'impact.entity').defines(function () {
  EntityGameMarblePathMain = ig.Entity.extend({
    'zIndex': 0x64,
    'pos': new Vector2(0x0, 0x0),
    'size': new Vector2(0x14, 0x14),
    'color': new ColorRGB(0x7d, 0xff, 0x7d, 0x1),
    'marbleArray': [],
    'lineArray': [],
    'lineConfig': [],
    'lengthArray': [],
    'killCount': 0x0,
    'isEndMarble': !0x1,
    'pathImage': null,
    'isCapture': !0x1,
    'isStartBoost': !0x0,
    'boostSpeed': 0.018,
    'init': function (_0x451add, _0x380868, _0x1a24ac) {
      this.parent(_0x451add, _0x380868, _0x1a24ac), this.pos = new Vector2(0x0, 0x0), this.isLevelEditor = !0x1, this.button_Toggle = [], this.button_Test = [], this.buttonSpacing = 0x10, this.gridSnap = 0x5, ig.game.optimizer = 0x0, this.isAdjusting = !0x1, this.isSpawnMarble = !0x0, this.isGameOver = !0x1, this.towerAvailable = ['Basic'], ig.game.playerData = {
        'controller': this,
        'health': {
          'max': 0xa,
          'current': 0xa
        },
        'currency': {
          'gold': 0x64
        }
      }, this.pointer = ig.game.getEntitiesByType(EntityPointer)[0x0], this.currentLayout = ig.game.director.currentLevel - 0x3, ig.game.cameraControl = ig.game.spawnEntity(EntityCameraControl, 0x0, 0x0, {
        'updateCheck': function () {
          return ig.game.checkPauseGame || !ig.game.allow.camera && ig.game.tutorial ? !0x0 : !0x1;
        }
      }), 0x0 <= this.currentLayout ? (_0x451add = this.control.levelLayout[this.currentLayout], ig.game.cameraControl.boundary = {
        'active': !0x0,
        'x1': _0x451add.width / 0x4,
        'x2': _0x451add.width / 0x4,
        'y1': _0x451add.height / 0x4,
        'y2': _0x451add.height / 0x4
      }) : ig.game.cameraControl.boundary.active = !0x1, this.initCurve(), ig.SizeHandler.inject({
        'reorient': function () {
          this.parent();
        }
      });
    },
    'isTestReady': !0x0,
    'spawnFakeMarble': function (_0x69703f, _0x4654ae) {
      this.spawnMarble(_0x69703f, _0x4654ae), this.isTestReady = !0x1;
    },
    'spawnMarble': function (_0x5f8a2d, _0x1b84f9) {
      this.isSpawnMarble = !0x0, this.lineArray = [], this.lineConfig = [], this.isEndMarble = !0x1, this.killCount = 0x0, this.isStartBoost = !0x1, this.lineArray.push([]), this.lineConfig.push({
        'num': 0x0,
        't': 0x0,
        'isStop': !0x1,
        'isEffect': !0x1
      });
      for (var _0x13752c = 0x0; 0x1 > _0x13752c; _0x13752c++) this.lineArray[0x0].push(ig.game.spawnEntity(EntityGameMarble, 0x2 * -ig.system.width, 0x2 * -ig.system.width, {
        'control': this,
        'line': 0x0,
        'num': _0x13752c,
        'isProjectile': !0x1,
        'enemyType': _0x1b84f9,
        'path': _0x5f8a2d
      }));
    },
    'colorGenerator': function (_0x5a2fa2) {
      switch (this.level) {
        case 0x1:
        case 0x2:
        case 0x3:
        case 0x4:
          this.setColor = ['red', 'blue', 'green'];
          break;
        case 0x5:
        case 0x6:
        case 0x7:
        case 0x8:
          this.setColor = ['red', 'blue', 'green', 'purple'];
          break;
        case 0x9:
        case 0xa:
        case 0xb:
        case 0xc:
          this.setColor = ['red', 'blue', 'green', 'purple', 'yellow'];
          break;
        case 0xd:
        case 0xe:
        case 0xf:
        case 0x10:
          this.setColor = ['red', 'blue', 'green', 'purple', 'yellow'];
          break;
        default:
          this.setColor = ['red', 'blue', 'green', 'purple', 'yellow'];
      }
      for (var _0x166e6b = [], _0xa6b287 = 0x0; _0xa6b287 < _0x5a2fa2; _0xa6b287++) {
        var _0x412aef = this.setColor.length,
          _0x412aef = Math.floor(Math.random() * _0x412aef) + 0x0;
        0x1 < _0xa6b287 ? this.setColor[_0x412aef] == _0x166e6b[_0xa6b287 - 0x1] && this.setColor[_0x412aef] == _0x166e6b[_0xa6b287 - 0x2] ? _0xa6b287-- : _0x166e6b.push(this.setColor[_0x412aef]) : _0x166e6b.push(this.setColor[_0x412aef]);
      }
      return getColorArray2 = "green green red blue red blue yellow red blue green green yellow red green blue".split(" "), getColorArray3 = "red blue blue blue red blue blue blue blue red blue blue blue red blue blue blue red blue blue blue".split(" "), _0x166e6b;
    },
    'update': function () {
      this.parent(), ig.game.optimizer = 0x1e * ig.system.tick, ig.game.cameraControl.fnc_inputs();
    },
    'draw': function () {
      this.parent();
      var _0x4c9125 = ig.system.context;
      _0x4c9125.save(), _0x4c9125.fillStyle = '#6A3F10', _0x4c9125.fillRect(0x0, 0x0, ig.system.width, ig.system.height), _0x4c9125.translate(-ig.game.screen.x, -ig.game.screen.y);
      var _0x1895bc = this.control.levelLayout[this.currentLayout] ? this.control.levelLayout[this.currentLayout] : this.control.levelLayoutDefault;
      _0x4c9125.drawImage(_0x1895bc.data, ig.system.width / 0x2 - _0x1895bc.width / 0x2, ig.system.height / 0x2 - _0x1895bc.height / 0x2), _0x4c9125.restore();
      if (this.isLevelEditor) {
        _0x4c9125.save(), _0x4c9125.translate(-ig.game.screen.x, -ig.game.screen.y), this.drawQuadPath();
        if (0x0 < this.circleAdjustArray.length) for (_0x1895bc = 0x0; _0x1895bc < this.circleAdjustArray.length; _0x1895bc++) {
          for (var _0xb6e7cb = 0x0; _0xb6e7cb < this.circleAdjustArray[_0x1895bc].length; _0xb6e7cb++) this.circleAdjustArray[_0x1895bc][_0xb6e7cb].isVisible && (0x0 == _0xb6e7cb ? (_0x4c9125.beginPath(), _0x4c9125.lineWidth = 0x5, _0x4c9125.strokeStyle = 'green', _0x4c9125.moveTo(this.circleAdjustArray[_0x1895bc][_0xb6e7cb].pos.x + this.circleAdjustArray[_0x1895bc][_0xb6e7cb].size.x / 0x2, this.circleAdjustArray[_0x1895bc][_0xb6e7cb].pos.y + this.circleAdjustArray[_0x1895bc][_0xb6e7cb].size.y / 0x2)) : _0x4c9125.lineTo(this.circleAdjustArray[_0x1895bc][_0xb6e7cb].pos.x + this.circleAdjustArray[_0x1895bc][_0xb6e7cb].size.x / 0x2, this.circleAdjustArray[_0x1895bc][_0xb6e7cb].pos.y + this.circleAdjustArray[_0x1895bc][_0xb6e7cb].size.y / 0x2));
          _0x4c9125.stroke();
        }
        _0x4c9125.restore();
      }
    },
    'bezier': function (_0x2303a0, _0x5057b8, _0x141ae5, _0x2594d1) {
      return [_0x2303a0, _0x5057b8, _0x141ae5, _0x2594d1];
    },
    'getArcLengthReturn': function (_0x57869c) {
      this.len = 0x64, this.arcLengths = Array(this.len + 0x1), this.arcLengths[0x0] = 0x0;
      for (var _0x48efff = this.getX(0x0, _0x57869c), _0xcab7c0 = this.getY(0x0, _0x57869c), _0x1bd74d = 0x0, _0x4ac1ef = 0x1; _0x4ac1ef <= this.len; _0x4ac1ef += 0x1) {
        var _0x4179bf = this.getX(0.01 * _0x4ac1ef, _0x57869c),
          _0x53fdfb = this.getY(0.01 * _0x4ac1ef, _0x57869c),
          _0x48efff = _0x48efff - _0x4179bf,
          _0xcab7c0 = _0xcab7c0 - _0x53fdfb,
          _0x1bd74d = _0x1bd74d + Math.sqrt(_0x48efff * _0x48efff + _0xcab7c0 * _0xcab7c0);
        this.arcLengths[_0x4ac1ef] = _0x1bd74d, _0x48efff = _0x4179bf, _0xcab7c0 = _0x53fdfb;
      }
      return _0x1bd74d;
    },
    'glZakky': function (_0x1912a4) {
      var _0x1e22b1,
        _0x1dc9d5 = this.getX(0x0, _0x1912a4),
        _0x55141c = this.getY(0x0, _0x1912a4);
      _0x1e22b1 = 0x0;
      for (var _0x327006 = 0x1; 0x64 >= _0x327006; _0x327006 += 0x1) {
        var _0xceb249 = this.getX(0.01 * _0x327006, _0x1912a4),
          _0x352aa2 = this.getY(0.01 * _0x327006, _0x1912a4),
          _0x1dc9d5 = _0x1dc9d5 - _0xceb249,
          _0x55141c = _0x55141c - _0x352aa2;
        _0x1e22b1 += Math.sqrt(_0x1dc9d5 * _0x1dc9d5 + _0x55141c * _0x55141c), _0x1dc9d5 = _0xceb249, _0x55141c = _0x352aa2;
      }
      return _0x1e22b1;
    },
    'getArcLength': function (_0x50a1f6) {
      this.len = 0x64, this.arcLengths = Array(this.len + 0x1), this.arcLengths[0x0] = 0x0;
      for (var _0xbd2ac4 = this.getX(0x0, _0x50a1f6), _0x2a3b4b = this.getY(0x0, _0x50a1f6), _0x3a8191 = 0x0, _0x480ae0 = 0x1; _0x480ae0 <= this.len; _0x480ae0 += 0x1) {
        var _0x1b90a0 = this.getX(0.01 * _0x480ae0, _0x50a1f6),
          _0x8b4988 = this.getY(0.01 * _0x480ae0, _0x50a1f6),
          _0xbd2ac4 = _0xbd2ac4 - _0x1b90a0,
          _0x2a3b4b = _0x2a3b4b - _0x8b4988,
          _0x3a8191 = _0x3a8191 + Math.sqrt(_0xbd2ac4 * _0xbd2ac4 + _0x2a3b4b * _0x2a3b4b);
        this.arcLengths[_0x480ae0] = _0x3a8191, _0xbd2ac4 = _0x1b90a0, _0x2a3b4b = _0x8b4988;
      }
    },
    'initCurve': function () {
      this.pointArray = [];
    },
    'map': function (_0x356fec) {
      _0x356fec *= this.arcLengths[this.len];
      for (var _0x5263b1 = 0x0, _0x19248e = this.len, _0x9fe6cc = 0x0; _0x5263b1 < _0x19248e;) _0x9fe6cc = _0x5263b1 + ((_0x19248e - _0x5263b1) / 0x2 | 0x0), this.arcLengths[_0x9fe6cc] < _0x356fec ? _0x5263b1 = _0x9fe6cc + 0x1 : _0x19248e = _0x9fe6cc;
      return this.arcLengths[_0x9fe6cc] > _0x356fec && _0x9fe6cc--, _0x5263b1 = this.arcLengths[_0x9fe6cc], _0x5263b1 === _0x356fec ? _0x9fe6cc / this.len : (_0x9fe6cc + (_0x356fec - _0x5263b1) / (this.arcLengths[_0x9fe6cc + 0x1] - _0x5263b1)) / this.len;
    },
    'getMx': function (_0x25b37a, _0x40fea9) {
      return this.getX(this.map(_0x25b37a), _0x40fea9);
    },
    'getMy': function (_0x589211, _0x446a8e) {
      return this.getY(this.map(_0x589211), _0x446a8e);
    },
    'getX': function (_0x147c42, _0x4281ae) {
      return (0x1 - _0x147c42) * (0x1 - _0x147c42) * (0x1 - _0x147c42) * _0x4281ae[0x0].x + 0x3 * ((0x1 - _0x147c42) * (0x1 - _0x147c42)) * _0x147c42 * _0x4281ae[0x1].x + 0x3 * (0x1 - _0x147c42) * (_0x147c42 * _0x147c42) * _0x4281ae[0x2].x + _0x147c42 * _0x147c42 * _0x147c42 * _0x4281ae[0x3].x;
    },
    'getY': function (_0x4e4bc4, _0x26d321) {
      return (0x1 - _0x4e4bc4) * (0x1 - _0x4e4bc4) * (0x1 - _0x4e4bc4) * _0x26d321[0x0].y + 0x3 * ((0x1 - _0x4e4bc4) * (0x1 - _0x4e4bc4)) * _0x4e4bc4 * _0x26d321[0x1].y + 0x3 * (0x1 - _0x4e4bc4) * (_0x4e4bc4 * _0x4e4bc4) * _0x26d321[0x2].y + _0x4e4bc4 * _0x4e4bc4 * _0x4e4bc4 * _0x26d321[0x3].y;
    },
    'firstClear': !0x1,
    'drawGradient': function (_0x489883) {
      var _0x4ffc12 = ig.game.hidCtx;
      _0x4ffc12.restore(), this.firstClear || (this.firstClear = !0x0);
      var _0x1bf54d = {
          'x': _0x489883[0x0].x,
          'y': _0x489883[0x0].y
        },
        _0x24e649 = {
          'x': _0x489883[0x1].x,
          'y': _0x489883[0x1].y
        },
        _0x3e4199 = {
          'x': _0x489883[0x2].x,
          'y': _0x489883[0x2].y
        },
        _0x32699c = {
          'x': _0x489883[0x3].x,
          'y': _0x489883[0x3].y
        };
      _0x489883 = [];
      for (var _0x11a975 = Math.PI, _0x4a3f77 = 0x0; 0xa >= _0x4a3f77; _0x4a3f77 += 0.25) {
        var _0x41d03e = _0x4a3f77 / 0xa,
          _0x36d527 = this.getCubicBezierXYatT(_0x1bf54d, _0x24e649, _0x3e4199, _0x32699c, _0x41d03e),
          _0x22f100 = this.bezierTangent(_0x1bf54d.x, _0x24e649.x, _0x3e4199.x, _0x32699c.x, _0x41d03e),
          _0x41d03e = this.bezierTangent(_0x1bf54d.y, _0x24e649.y, _0x3e4199.y, _0x32699c.y, _0x41d03e),
          _0x22f100 = Math.atan2(_0x41d03e, _0x22f100) - _0x11a975 / 0x2;
        _0x489883.push({
          'x': _0x36d527.x,
          'y': _0x36d527.y,
          'angle': _0x22f100
        });
      }
      _0x4ffc12.lineWidth = 0xa;
      for (_0x1bf54d = 0x0; _0x1bf54d < _0x489883.length; _0x1bf54d++) _0x24e649 = _0x489883[_0x1bf54d].x + 0x16 * Math.cos(_0x489883[_0x1bf54d].angle), _0x3e4199 = _0x489883[_0x1bf54d].y + 0x16 * Math.sin(_0x489883[_0x1bf54d].angle), _0x32699c = _0x489883[_0x1bf54d].x + 0x16 * Math.cos(_0x489883[_0x1bf54d].angle - _0x11a975), _0x4a3f77 = _0x489883[_0x1bf54d].y + 0x16 * Math.sin(_0x489883[_0x1bf54d].angle - _0x11a975), _0x36d527 = _0x4ffc12.createLinearGradient(_0x24e649, _0x3e4199, _0x32699c, _0x4a3f77), _0x36d527.addColorStop(0x0, '#3f3010'), _0x36d527.addColorStop(0.2, '#4e3c16'), _0x36d527.addColorStop(0.8, '#4e3c16'), _0x36d527.addColorStop(0x1, '#4e3c16'), _0x4ffc12.strokeStyle = _0x36d527, _0x4ffc12.beginPath(), _0x4ffc12.moveTo(_0x24e649, _0x3e4199), _0x4ffc12.lineTo(_0x32699c, _0x4a3f77), _0x4ffc12.stroke();
      _0x24e649 = _0x489883[0x0].x + 0x16 * Math.cos(_0x489883[0x0].angle), _0x3e4199 = _0x489883[0x0].y + 0x16 * Math.sin(_0x489883[0x0].angle), _0x4ffc12.strokeStyle = '#3f3010', _0x4ffc12.lineWidth = 1.5, _0x4ffc12.beginPath(), _0x4ffc12.moveTo(_0x24e649, _0x3e4199);
      for (_0x1bf54d = 0x1; _0x1bf54d < _0x489883.length; _0x1bf54d++) _0x24e649 = _0x489883[_0x1bf54d].x + 0x16 * Math.cos(_0x489883[_0x1bf54d].angle), _0x3e4199 = _0x489883[_0x1bf54d].y + 0x16 * Math.sin(_0x489883[_0x1bf54d].angle), _0x4ffc12.lineTo(_0x24e649, _0x3e4199);
      _0x4ffc12.stroke(), _0x32699c = _0x489883[0x0].x + 0x16 * Math.cos(_0x489883[0x0].angle + _0x11a975), _0x4a3f77 = _0x489883[0x0].y + 0x16 * Math.sin(_0x489883[0x0].angle + _0x11a975), _0x4ffc12.strokeStyle = '#3f3010', _0x4ffc12.lineWidth = 1.5, _0x4ffc12.beginPath(), _0x4ffc12.moveTo(_0x32699c, _0x4a3f77);
      for (_0x1bf54d = 0x0; _0x1bf54d < _0x489883.length; _0x1bf54d++) _0x32699c = _0x489883[_0x1bf54d].x + 0x16 * Math.cos(_0x489883[_0x1bf54d].angle + _0x11a975), _0x4a3f77 = _0x489883[_0x1bf54d].y + 0x16 * Math.sin(_0x489883[_0x1bf54d].angle + _0x11a975), _0x4ffc12.lineTo(_0x32699c, _0x4a3f77);
      _0x4ffc12.stroke(), _0x4ffc12.restore();
    },
    'drawGradient2': function (_0xe9d21f) {
      var _0x5ebdde = ig.system.context,
        _0x3f9ec3 = {
          'x': _0xe9d21f[0x0].x,
          'y': _0xe9d21f[0x0].y
        },
        _0x5cf4a4 = {
          'x': _0xe9d21f[0x1].x,
          'y': _0xe9d21f[0x1].y
        },
        _0x365f7f = {
          'x': _0xe9d21f[0x2].x,
          'y': _0xe9d21f[0x2].y
        },
        _0x5a00b6 = {
          'x': _0xe9d21f[0x3].x,
          'y': _0xe9d21f[0x3].y
        };
      _0xe9d21f = [];
      for (var _0x1b8465 = Math.PI, _0x31e44f = 0x0; 0xa >= _0x31e44f; _0x31e44f += 0.25) {
        var _0x27c12e = _0x31e44f / 0xa,
          _0x267e14 = this.getCubicBezierXYatT(_0x3f9ec3, _0x5cf4a4, _0x365f7f, _0x5a00b6, _0x27c12e),
          _0x22ed34 = this.bezierTangent(_0x3f9ec3.x, _0x5cf4a4.x, _0x365f7f.x, _0x5a00b6.x, _0x27c12e),
          _0x27c12e = this.bezierTangent(_0x3f9ec3.y, _0x5cf4a4.y, _0x365f7f.y, _0x5a00b6.y, _0x27c12e),
          _0x22ed34 = Math.atan2(_0x27c12e, _0x22ed34) - _0x1b8465 / 0x2;
        _0xe9d21f.push({
          'x': _0x267e14.x,
          'y': _0x267e14.y,
          'angle': _0x22ed34
        });
      }
      _0x5ebdde.lineWidth = 0xa;
      for (_0x3f9ec3 = 0x0; _0x3f9ec3 < _0xe9d21f.length; _0x3f9ec3++) _0x5cf4a4 = _0xe9d21f[_0x3f9ec3].x + 0x16 * Math.cos(_0xe9d21f[_0x3f9ec3].angle), _0x365f7f = _0xe9d21f[_0x3f9ec3].y + 0x16 * Math.sin(_0xe9d21f[_0x3f9ec3].angle), _0x5a00b6 = _0xe9d21f[_0x3f9ec3].x + 0x16 * Math.cos(_0xe9d21f[_0x3f9ec3].angle - _0x1b8465), _0x31e44f = _0xe9d21f[_0x3f9ec3].y + 0x16 * Math.sin(_0xe9d21f[_0x3f9ec3].angle - _0x1b8465), _0x267e14 = _0x5ebdde.createLinearGradient(_0x5cf4a4, _0x365f7f, _0x5a00b6, _0x31e44f), _0x267e14.addColorStop(0x0, '#3f3010'), _0x267e14.addColorStop(0.2, '#4e3c16'), _0x267e14.addColorStop(0.8, '#4e3c16'), _0x267e14.addColorStop(0x1, '#4e3c16'), _0x5ebdde.strokeStyle = _0x267e14, _0x5ebdde.beginPath(), _0x5ebdde.moveTo(_0x5cf4a4, _0x365f7f), _0x5ebdde.lineTo(_0x5a00b6, _0x31e44f), _0x5ebdde.stroke();
      _0x5cf4a4 = _0xe9d21f[0x0].x + 0x16 * Math.cos(_0xe9d21f[0x0].angle), _0x365f7f = _0xe9d21f[0x0].y + 0x16 * Math.sin(_0xe9d21f[0x0].angle), _0x5ebdde.strokeStyle = '#3f3010', _0x5ebdde.lineWidth = 1.5, _0x5ebdde.beginPath(), _0x5ebdde.moveTo(_0x5cf4a4, _0x365f7f);
      for (_0x3f9ec3 = 0x1; _0x3f9ec3 < _0xe9d21f.length; _0x3f9ec3++) _0x5cf4a4 = _0xe9d21f[_0x3f9ec3].x + 0x16 * Math.cos(_0xe9d21f[_0x3f9ec3].angle), _0x365f7f = _0xe9d21f[_0x3f9ec3].y + 0x16 * Math.sin(_0xe9d21f[_0x3f9ec3].angle), _0x5ebdde.lineTo(_0x5cf4a4, _0x365f7f);
      _0x5ebdde.stroke(), _0x5a00b6 = _0xe9d21f[0x0].x + 0x16 * Math.cos(_0xe9d21f[0x0].angle + _0x1b8465), _0x31e44f = _0xe9d21f[0x0].y + 0x16 * Math.sin(_0xe9d21f[0x0].angle + _0x1b8465), _0x5ebdde.strokeStyle = '#3f3010', _0x5ebdde.lineWidth = 1.5, _0x5ebdde.beginPath(), _0x5ebdde.moveTo(_0x5a00b6, _0x31e44f);
      for (_0x3f9ec3 = 0x0; _0x3f9ec3 < _0xe9d21f.length; _0x3f9ec3++) _0x5a00b6 = _0xe9d21f[_0x3f9ec3].x + 0x16 * Math.cos(_0xe9d21f[_0x3f9ec3].angle + _0x1b8465), _0x31e44f = _0xe9d21f[_0x3f9ec3].y + 0x16 * Math.sin(_0xe9d21f[_0x3f9ec3].angle + _0x1b8465), _0x5ebdde.lineTo(_0x5a00b6, _0x31e44f);
      _0x5ebdde.stroke();
    },
    'getCubicBezierXYatT': function (_0x1b3553, _0x223520, _0x5f5bb7, _0x4dc9a7, _0xe68c95) {
      var _0x2f1380 = this.CubicN(_0xe68c95, _0x1b3553.x, _0x223520.x, _0x5f5bb7.x, _0x4dc9a7.x);
      return _0x1b3553 = this.CubicN(_0xe68c95, _0x1b3553.y, _0x223520.y, _0x5f5bb7.y, _0x4dc9a7.y), {
        'x': _0x2f1380,
        'y': _0x1b3553
      };
    },
    'CubicN': function (_0x1baeb8, _0x58fda1, _0x473b32, _0x23978b, _0x4271b3) {
      var _0x35ffcf = _0x1baeb8 * _0x1baeb8;
      return _0x58fda1 + (0x3 * -_0x58fda1 + _0x1baeb8 * (0x3 * _0x58fda1 - _0x58fda1 * _0x1baeb8)) * _0x1baeb8 + (0x3 * _0x473b32 + _0x1baeb8 * (-0x6 * _0x473b32 + 0x3 * _0x473b32 * _0x1baeb8)) * _0x1baeb8 + (0x3 * _0x23978b - 0x3 * _0x23978b * _0x1baeb8) * _0x35ffcf + _0x4271b3 * _0x35ffcf * _0x1baeb8;
    },
    'bezierTangent': function (_0x3e6fc1, _0x2c3907, _0x23c955, _0x3e62b0, _0x49e486) {
      return 0x3 * _0x49e486 * _0x49e486 * (-_0x3e6fc1 + 0x3 * _0x2c3907 - 0x3 * _0x23c955 + _0x3e62b0) + 0x6 * _0x49e486 * (_0x3e6fc1 - 0x2 * _0x2c3907 + _0x23c955) + 0x3 * (-_0x3e6fc1 + _0x2c3907);
    },
    'drawQuadPath': function () {
      var _0x393e09 = ig.system.context;
      _0x393e09.save(), this.pathImage = null;
      for (var _0x4ea989 = 0x0; _0x4ea989 < this.pointArray.length; _0x4ea989++) this.drawGradient2(this.pointArray[_0x4ea989], _0x4ea989);
      if (!this.isCapture) {
        this.firstClear = !0x1, ig.game.resetCanvas();
        for (_0x4ea989 = 0x0; _0x4ea989 < this.pointArray.length; _0x4ea989++) this.drawGradient(this.pointArray[_0x4ea989], _0x4ea989);
        this.pathImage = null, this.pathImage = new Image(), this.pathImage.src = ig.game.hidEle.toDataURL(), this.isCapture = !0x0;
      }
      _0x393e09.restore();
    },
    'circleAdjustArray': [],
    'manualAddLine': function (_0x466d52) {
      _0x466d52 = this.bezier(_0x466d52[0x0], _0x466d52[0x1], _0x466d52[0x2], _0x466d52[0x3]), this.pointArray.push(_0x466d52);
      var _0x16cc96 = [];
      _0x466d52 = this.pointArray.length - 0x1;
      for (var _0x4c1816 = this.randomRgba(), _0x5ce795 = 0x0; _0x5ce795 < this.pointArray[_0x466d52].length; _0x5ce795++) {
        var _0x116fc5 = this.pointArray[_0x466d52][_0x5ce795];
        _0x116fc5.x += ig.system.width / 0x2, _0x116fc5.y += ig.system.height / 0x2, _0x116fc5 = ig.game.spawnEntity(EntityCircleAdjust, 0x0, 0x0, {
          'control': this,
          'num': _0x466d52,
          'num2': _0x5ce795,
          'touchPoint': _0x116fc5,
          'color': _0x4c1816,
          'isEntity': !0x0
        }), _0x16cc96.push(_0x116fc5);
      }
      this.circleAdjustArray.push(_0x16cc96), !0x1 != this.isLevelEditor && (_0x16cc96 = ig.game.spawnEntity(EntityAddButton, 0x0, 0x0, {
        'control': this,
        'num': this.pointArray.length,
        'isEntity': !0x1,
        'buttonType': 'toggle'
      }), _0x16cc96.setAnchoredPosition(this.buttonSpacing * (_0x466d52 + 0x2) + _0x16cc96.size.x * (_0x466d52 + 0x1), -(this.buttonSpacing + _0x16cc96.size.y), 'bottom-left'), this.button_Toggle.push(_0x16cc96));
    },
    'randomRgba': function () {
      var _0x267707 = Math.round,
        _0x2b2892 = Math.random;
      return 'rgba(' + _0x267707(0xff * _0x2b2892()) + ',' + _0x267707(0xff * _0x2b2892()) + ',' + _0x267707(0xff * _0x2b2892()) + ',1)';
    },
    'toggleAdjust': function (_0x1ae5f8) {
      for (var _0xd36d0b = 0x0; _0xd36d0b < this.circleAdjustArray[_0x1ae5f8].length; _0xd36d0b++) this.circleAdjustArray[_0x1ae5f8][_0xd36d0b].visibleToggle();
    },
    'updatePath': function () {
      for (var _0x4a3aa4 = this.button_Test, _0x2b0729 = 0x0; _0x2b0729 < _0x4a3aa4.length; _0x2b0729++) {
        var _0x3eb214 = _0x4a3aa4[_0x2b0729];
        _0x3eb214.path = this.pathFinder(_0x4a3aa4, [], [], this.circleAdjustArray[_0x3eb214.num][this.circleAdjustArray[_0x3eb214.num].length - 0x1]);
      }
    },
    'pathFinder': function (_0x3d08ba, _0x5a151d, _0x807f6d, _0x1f3667) {
      _0x5a151d.push(_0x1f3667.num);
      if (0x0 == _0x1f3667.connections.length) _0x807f6d.push(_0x5a151d);else for (var _0x46ed5e = 0x0; _0x46ed5e < _0x1f3667.connections.length; _0x46ed5e++) {
        for (var _0x2e33fd = this.circleAdjustArray[_0x1f3667.connections[_0x46ed5e]][this.circleAdjustArray[_0x1f3667.connections[_0x46ed5e]].length - 0x1], _0x8f6fcc = !0x1, _0x5f382e = 0x0; _0x5f382e < _0x3d08ba.length; _0x5f382e++) _0x3d08ba[_0x5f382e].num == _0x2e33fd.num && (_0x8f6fcc = !0x0);
        !0x1 == _0x8f6fcc ? _0x807f6d = this.pathFinder(_0x3d08ba, JSON.parse(JSON.stringify(_0x5a151d)), _0x807f6d, _0x2e33fd) : (JSON.parse(JSON.stringify(_0x5a151d)).push(_0x2e33fd.num), _0x807f6d.push(_0x5a151d));
      }
      return _0x807f6d;
    },
    'updateSpawns': function () {
      for (var _0x548d3f = [], _0xe8ef56 = this.button_Test, _0x273717 = 0x0; _0x273717 < _0xe8ef56.length; _0x273717++) {
        for (var _0x15c923 = _0xe8ef56[_0x273717], _0x264a81 = [], _0x392fb3 = 0x0; _0x392fb3 < _0x15c923.path.length; _0x392fb3++) _0x264a81.push(_0x15c923.path[_0x392fb3]);
        _0x548d3f.push(_0x264a81);
      }
      this.pathArray = _0x548d3f;
    },
    'updateBuildPlaces': function () {
      this.buildAreas = [];
      for (var _0x1528f7 = ig.game.getEntitiesByType(EntityTowerPlace), _0xfbfbdf = 0x0; _0xfbfbdf < _0x1528f7.length; _0xfbfbdf++) {
        var _0x184581 = _0x1528f7[_0xfbfbdf];
        this.buildAreas.push({
          'x': _0x184581.pos.x + _0x184581.size.x / 0x2,
          'y': _0x184581.pos.y + _0x184581.size.y / 0x2,
          'r': (_0x184581.size.x + _0x184581.size.y) / 0x2
        });
      }
      console.log("Build places updated");
    },
    'baseDestroyed': function () {
      console.log("No more health"), _SETTINGS.RewardedVideo.Enabled && (-0x1 == this.control.activeReward.health || 0x0 < this.control.activeReward.health) ? ig.game.GameController.showRewardPopup() : ig.game.GameController.showGameOverPopup();
    }
  }), EntityCircleAdjust = ig.Entity.extend({
    'type': ig.Entity.TYPE.A,
    'zIndex': 0x1770,
    'size': {
      'x': 0x64,
      'y': 0x64
    },
    'ignorePause': !0x0,
    'isClicked': !0x1,
    'init': function (_0x931d9, _0x238279, _0x45b998) {
      this.parent(_0x931d9, _0x238279, _0x45b998), this.pos.x = this.touchPoint.x, this.pos.y = this.touchPoint.y, this.anchoredPositionX = this.touchPoint.x, this.anchoredPositionY = this.touchPoint.y, this.anchorType = 'center-middle', this.isVisible = this.control.isLevelEditor, this.connections = [], this.griding(), this.updatePathWay();
    },
    'update': function () {
      this.parent(), this.updatePathWay();
    },
    'draw': function () {
      if (this.isVisible) {
        this.parent();
        var _0xc5e308 = ig.system.context;
        _0xc5e308.save(), _0xc5e308.translate(-ig.game.screen.x, -ig.game.screen.y), _0xc5e308.beginPath(), _0xc5e308.fillStyle = this.color;
        var _0x5b5533 = (this.size.x + this.size.y) / 0x4;
        _0xc5e308.arc(this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2, _0x5b5533, 0x0, 0x2 * Math.PI), _0xc5e308.fill(), _0xc5e308.font = "bold " + 0.75 * _0x5b5533 + "px montserrat", _0xc5e308.fillStyle = '#ffffff', _0xc5e308.textAlign = 'center', _0xc5e308.fillText('' + this.num, this.pos.x + this.size.x / 0x2, this.pos.y + 0.4 * this.size.y), _0xc5e308.fillText('P:' + (0x0 == this.num2 ? 'start' : 0x1 == this.num2 ? 'p1' : 0x2 == this.num2 ? 'p2' : 'end'), this.pos.x + this.size.x / 0x2, this.pos.y + 0.8 * this.size.y), _0xc5e308.restore();
      }
    },
    'clicked': function () {
      this.isVisible && !this.isAdjustMarble && (this.isAdjustMarble = !0x0, this.zIndex = 0x270f, ig.game.sortEntitiesDeferred());
    },
    'released': function () {
      this.isVisible && this.isAdjustMarble && (this.control.isCapture = !0x1, this.isAdjustMarble = this.control.isAdjusting = !0x1, this.zIndex = 0x1770, ig.game.sortEntitiesDeferred(), this.griding(), this.updatePathWay(), this.connectsCheck(!0x0), this.control.updatePath(), this.control.updateSpawns());
    },
    'clicking': function () {
      this.isVisible && this.isAdjustMarble && (this.pointer ? (this.anchoredPositionX = this.pointer.pos.x - this.size.x / 0x2 - ig.system.width / 0x2, this.anchoredPositionY = this.pointer.pos.y - this.size.y / 0x2 - ig.system.height / 0x2) : this.pointer = ig.game.getEntitiesByType(EntityPointer)[0x0], this.control.isAdjusting = !0x0, this.updatePathWay(), this.control.updatePath(), this.control.updateSpawns());
    },
    'leave': function () {},
    'visibleToggle': function () {
      this.isVisible ? (this.isVisible = !0x1, this.type = ig.Entity.TYPE.NONE) : (this.isVisible = !0x0, this.type = ig.Entity.TYPE.A);
    },
    'griding': function () {
      if (this.control.gridSnap) {
        var _0x199574 = new Vector2(Math.floor(this.pos.x / this.control.gridSnap) * this.control.gridSnap, Math.floor(this.pos.y / this.control.gridSnap) * this.control.gridSnap),
          _0x1f4411 = Math.floor(_0x199574.x - ig.system.width / 0x2),
          _0x199574 = Math.floor(_0x199574.y - ig.system.height / 0x2),
          _0x306c10 = _0x1f4411 % this.control.gridSnap,
          _0x70037d = _0x199574 % this.control.gridSnap;
        this.anchoredPositionX = -0x1 == Math.sign(_0x306c10) ? _0x1f4411 - _0x306c10 : _0x1f4411 - _0x306c10 + this.control.gridSnap, this.anchoredPositionY = (Math.sign(_0x70037d), _0x199574 - _0x70037d);
      }
    },
    'updatePathWay': function () {
      this.control.pointArray[this.num][this.num2].x = Math.floor(this.pos.x + this.size.x / 0x2), this.control.pointArray[this.num][this.num2].y = Math.floor(this.pos.y + this.size.y / 0x2);
    },
    'connectsCheck': function (_0x11cea8) {
      this.num2 == this.control.circleAdjustArray[this.num].length - 0x1 ? this.connectsLogic(_0x11cea8, 0x0) : 0x0 == this.num2 && this.connectsLogic(_0x11cea8, this.control.circleAdjustArray[this.num].length - 0x1);
    },
    'connectsLogic': function (_0x150b1b, _0x545da5) {
      for (var _0x4bf80c = [], _0x4dc324 = 0x0; _0x4dc324 < this.control.circleAdjustArray.length; _0x4dc324++) this.num != this.control.circleAdjustArray[_0x4dc324][_0x545da5].num && _0x4bf80c.push(this.control.circleAdjustArray[_0x4dc324][_0x545da5]);
      for (var _0x4dc324 = [], _0x16bd34 = 0x0; _0x16bd34 < _0x4bf80c.length; _0x16bd34++) 0xa > ig.util.distanceBetweenPoints(this.pos, _0x4bf80c[_0x16bd34].pos) && _0x4dc324.push(_0x4bf80c[_0x16bd34].num);
      this.connections = _0x4dc324;
      if (!0x0 == _0x150b1b) {
        _0x4bf80c = ig.game.getEntitiesByType(EntityCircleAdjust);
        for (_0x4dc324 = 0x0; _0x4dc324 < _0x4bf80c.length; _0x4dc324++) _0x4bf80c[_0x4dc324].connectsCheck(!0x1);
      }
    }
  }), EntityAddButton = ig.Entity.extend({
    'type': ig.Entity.TYPE.A,
    'zIndex': 0x2328,
    'size': {
      'x': 0x80,
      'y': 0x80
    },
    'knob': new ig.AnimationSheet('media/graphics/sprites/buttons/button-blank.png', 0x80, 0x80),
    'ignorePause': !0x0,
    'isClicked': !0x1,
    'init': function (_0x951350, _0x25a06c, _0x1a07d3) {
      this.parent(_0x951350, _0x25a06c, _0x1a07d3), this.anims.idle = new ig.Animation(this.knob, 0x0, [0x0], !0x0), this.currentAnim = this.anims.idle;
    },
    'update': function () {
      this.parent();
    },
    'draw': function () {
      this.parent();
      var _0x3add60 = ig.system.context;
      _0x3add60.save(), _0x3add60.translate(-ig.game.screen.x, -ig.game.screen.y), _0x3add60.beginPath();
      var _0x41fc57 = ['???'];
      switch (this.buttonType) {
        case 'map':
          _0x41fc57 = ['Change', 'Map'];
          break;
        case 'back':
          _0x41fc57 = ['Back'];
          break;
        case 'newPath':
          _0x41fc57 = ['New', 'Path'];
          break;
        case 'deletePath':
          _0x41fc57 = ['Delete', 'Path'];
          break;
        case 'newSpawn':
          _0x41fc57 = ['New', 'Spawn'];
          break;
        case 'deleteSpawn':
          _0x41fc57 = ['Delete', 'Spawn'];
          break;
        case 'check':
          _0x41fc57 = ['Check', 'Paths'];
          break;
        case 'resetCamera':
          _0x41fc57 = ['Reset', 'Camera'];
          break;
        case 'createPlace':
          _0x41fc57 = ['Create', 'Place'];
          break;
        case 'deletePlace':
          _0x41fc57 = ['Delete', 'Place'];
          break;
        case 'wave':
          _0x41fc57 = ['Next', 'Wave'], _0x3add60.beginPath(), _0x3add60.fillStyle = 0x0 < this.control.wave.timer ? 'lime' : 'red', _0x3add60.rect(this.pos.x, this.pos.y, this.size.x, this.size.y), _0x3add60.fill();
          break;
        case 'tower':
          _0x41fc57 = [this.towerType, 'Tower'], _0x3add60.font = "bold 40px montserrat", _0x3add60.fillStyle = ig.game.playerData.currency.gold >= this.towerCost ? 'lime' : 'red', _0x3add60.textAlign = 'center', _0x3add60.fillText('$' + this.towerCost, this.pos.x + this.size.x / 0x2, this.pos.y - 0x28 + 0x14);
          break;
        case 'toggle':
          _0x41fc57 = [String(this.num - 0x1), this.toggle ? 'OFF' : 'ON'], _0x3add60.beginPath(), _0x3add60.fillStyle = this.control.circleAdjustArray[this.num - 0x1][0x0].color, _0x3add60.rect(this.pos.x, this.pos.y, this.size.x, this.size.y), _0x3add60.fill();
          break;
        case 'test':
          _0x41fc57 = [String(this.num), 'Test'], _0x3add60.beginPath(), _0x3add60.strokeStyle = 'red', _0x3add60.lineWidth = 0x5, _0x3add60.moveTo(this.pos.x + this.size.x / 0x2, this.pos.y);
          var _0x1400d4 = this.control.circleAdjustArray[this.num][0x0];
          _0x3add60.lineTo(_0x1400d4.pos.x + _0x1400d4.size.x / 0x2, _0x1400d4.pos.y + _0x1400d4.size.y / 0x2), _0x3add60.stroke(), _0x3add60.beginPath(), _0x3add60.fillStyle = this.control.circleAdjustArray[this.num][0x0].color, _0x3add60.rect(this.pos.x, this.pos.y, this.size.x, this.size.y), _0x3add60.fill();
          break;
        default:
          _0x41fc57 = ['???'];
      }
      _0x3add60.font = "bold 40px montserrat", _0x3add60.fillStyle = '#ffffff', _0x3add60.textAlign = 'center', 0x2 == _0x41fc57.length ? (_0x3add60.fillText(_0x41fc57[0x0], this.pos.x + this.size.x / 0x2, this.pos.y + 0.45 * this.size.y), _0x3add60.fillText(_0x41fc57[0x1], this.pos.x + this.size.x / 0x2, this.pos.y + 0.75 * this.size.y)) : _0x3add60.fillText(_0x41fc57[0x0], this.pos.x + this.size.x / 0x2, this.pos.y + 0.6 * this.size.y), _0x3add60.restore();
    },
    'clicked': function () {
      if (!ig.game.tutorial && !ig.game.checkPauseGame) {
        for (var _0x1244e5 = ig.game.getEntitiesByType(EntityPopupOption), _0x336b34 = 0x0; _0x336b34 < _0x1244e5.length; _0x336b34++) _0x1244e5[_0x336b34].kill();
        switch (this.buttonType) {
          case 'newPath':
            _0x336b34 = [{
              'x': ig.game.screen.x,
              'y': ig.game.screen.y - 0x96
            }, {
              'x': ig.game.screen.x,
              'y': ig.game.screen.y - 0x32
            }, {
              'x': ig.game.screen.x,
              'y': ig.game.screen.y + 0x32
            }, {
              'x': ig.game.screen.x,
              'y': ig.game.screen.y + 0x96
            }], this.control.isAdjusting = !0x0, this.control.manualAddLine(_0x336b34), this.control.updatePath(), this.control.updateSpawns(), ig.game.sortEntitiesDeferred();
            break;
          case 'newSpawn':
            var _0x4a1d24 = ig.game.getEntitiesByType(EntityAddButton),
              _0x336b34 = this.control.pathArray.length;
            _0x336b34 < this.control.button_Toggle.length && (_0x1244e5 = ig.game.spawnEntity(EntityAddButton, 0x0, 0x0, {
              'control': this.control,
              'num': _0x336b34,
              'path': [[_0x336b34]],
              'isEntity': !0x1,
              'buttonType': 'test'
            }), _0x1244e5.setAnchoredPosition(this.control.buttonSpacing * (_0x336b34 + 0x2) + _0x1244e5.size.x * (_0x336b34 + 0x1), 0x2 * -(this.control.buttonSpacing + _0x1244e5.size.y), 'bottom-left'), this.control.button_Test.push(_0x1244e5), this.control.updatePath(), this.control.updateSpawns());
            break;
          case 'deleteSpawn':
            _0x1244e5 = this.control.button_Test.length;
            if (0x1 >= _0x1244e5) break;
            this.control.button_Test[_0x1244e5 - 0x1].kill(), this.control.button_Test.pop();
            break;
          case 'deletePath':
            _0x1244e5 = this.control.button_Toggle.length;
            if (0x1 >= _0x1244e5) break;
            this.control.button_Toggle[_0x1244e5 - 0x1].kill(), this.control.button_Toggle.pop();
            for (var _0x254c8b = this.control.circleAdjustArray, _0x336b34 = 0x0; _0x336b34 < _0x254c8b[_0x254c8b.length - 0x1].length; _0x336b34++) _0x254c8b[_0x254c8b.length - 0x1][_0x336b34].kill();
            this.control.circleAdjustArray.pop(), this.control.pointArray.pop(), _0x336b34 = this.control.button_Test.length, _0x1244e5 <= _0x336b34 && (this.control.button_Test[_0x336b34 - 0x1].kill(), this.control.button_Test.pop()), _0x336b34 = ig.game.getEntitiesByType(EntityCircleAdjust);
            for (_0x1244e5 = 0x0; _0x1244e5 < _0x336b34.length; _0x1244e5++) _0x336b34[_0x1244e5].connectsCheck(!0x1);
            this.control.updatePath(), this.control.updateSpawns();
            break;
          case 'deletePlace':
            _0x1244e5 = this.control.buildAreas;
            if (0x1 >= _0x1244e5.length) break;
            _0x1244e5.pop(), _0x336b34 = ig.game.getEntitiesByType(EntityTowerPlace), _0x1244e5 <= _0x336b34 && _0x336b34[_0x336b34.length - 0x1].kill(), this.control.updateBuildPlaces();
            break;
          case 'resetCamera':
            ig.game.cameraControl.fnc_centerPos();
            break;
          case 'createPlace':
            ig.game.spawnEntity(EntityTowerPlace, 0x0, 0x0, {
              'control': this.control,
              'dropped': !0x1
            });
            break;
          case 'toggle':
            this.toggle = !this.toggle, this.control.toggleAdjust(this.num - 0x1);
            break;
          case 'test':
            _0x336b34 = this.path[Math.floor(Math.random() * this.path.length)], _0x1244e5 = ['normal-1', 'normal-2', 'runner', 'big-guy', 'quarterback'], _0x1244e5 = _0x1244e5[Math.floor(Math.random() * _0x1244e5.length)], this.control.spawnFakeMarble(_0x336b34, _0x1244e5);
            break;
          case 'check':
            console.log("Current updated bezier array"), _0x1244e5 = "[\n";
            for (_0x336b34 = 0x0; _0x336b34 < this.control.circleAdjustArray.length; _0x336b34++) {
              _0x1244e5 += "[ ";
              for (_0x254c8b = 0x0; _0x254c8b < this.control.circleAdjustArray[_0x336b34].length; _0x254c8b++) _0x4a1d24 = this.control.circleAdjustArray[_0x336b34][_0x254c8b], _0x1244e5 = _0x1244e5 + "{x: " + parseInt(_0x4a1d24.anchoredPositionX - 0x5) + ", y: " + parseInt(_0x4a1d24.anchoredPositionY) + "}, ";
              _0x1244e5 += "],\n";
            }
            console.log(_0x1244e5 + '];'), _0x4a1d24 = this.control.button_Test, console.log("Current updated enemy paths"), _0x1244e5 = "[\n";
            for (_0x336b34 = 0x0; _0x336b34 < _0x4a1d24.length; _0x336b34++) {
              for (var _0x4d1117 = _0x4a1d24[_0x336b34], _0x1244e5 = _0x1244e5 + "[ ", _0x254c8b = 0x0; _0x254c8b < _0x4d1117.path.length; _0x254c8b++) _0x1244e5 = _0x1244e5 + "[ " + _0x4d1117.path[_0x254c8b] + " ], ";
              _0x1244e5 += "],\n";
            }
            console.log(_0x1244e5 + '];'), console.log("Current build places"), _0x254c8b = this.control.buildAreas, _0x1244e5 = "[\n";
            for (_0x336b34 = 0x0; _0x336b34 < _0x254c8b.length; _0x336b34++) _0x4a1d24 = _0x254c8b[_0x336b34], _0x1244e5 = _0x1244e5 + "{ x: " + parseInt(_0x4a1d24.x - ig.system.width / 0x2) + ", ", _0x1244e5 = _0x1244e5 + "y: " + parseInt(_0x4a1d24.y - ig.system.height / 0x2) + ", ", _0x1244e5 = _0x1244e5 + "r: " + _0x4a1d24.r + " },\n";
            _0x1244e5 += ']', console.log(_0x1244e5);
            break;
          case 'map':
            _0x336b34 = this.control.control, -0x1 == this.control.currentLayout && (this.control.currentLayout = 0x0), this.control.currentLayout = _0x336b34.levelLayout.length > this.control.currentLayout + 0x1 ? this.control.currentLayout + 0x1 : 0x0, console.log("Changed background map: " + String(this.control.currentLayout + 0x1));
            break;
          case 'back':
            ig.game.director.jumpTo(LevelMenu);
            break;
          case 'wave':
            0x0 < this.control.wave.timer ? (console.log("Wave started"), this.control.wave.timer = 0x0) : console.log("Wave is currently attacking");
            break;
          default:
            console.log("No implemented function");
        }
      }
    },
    'released': function () {
      switch (this.buttonType) {
        case 'newPath':
          this.control.isAdjusting = !0x1, this.control.isCapture = !0x1;
      }
    },
    'clicking': function () {},
    'leave': function () {}
  });
}), ig.baked = !0x0, ig.module('game.entities.gameplay.game-marble-path-editor').requires('game.entities.gameplay.game-marble-path-main', 'impact.entity').defines(function () {
  EntityGameMarblePathEditor = EntityGameMarblePathMain.extend({
    'init': function (_0x4a7a4e, _0x4a6786, _0x4dee15) {
      this.parent(_0x4a7a4e, _0x4a6786, _0x4dee15), this.gridSnap = 0x5, this.isLevelEditor = !0x0, this.isGameOver = !0x1, this.waveSpawnLocations = [], this.spawnCooldown = {
        'max': 0xa,
        'current': 0x0
      }, this.wave = {
        'current': 0x0,
        'amount': [],
        'composition': [],
        'timer': 0xa,
        'spacing': []
      }, this.editor = {
        'buttons': [],
        'waves': [],
        'locations': {
          'spawns': [],
          'bases': []
        }
      }, this.multiSelectRegion = this.lastClickedSaved = null, this.selectedEntities = [], this.showBuildAreas = !0x1, this.levelVariables(), this.levelEditor(), this.levelCreate();
    },
    'levelVariables': function () {
      this.buttonSpacing = 0x10, this.button_Toggle = [], this.button_Test = [], this.button_newPath = ig.game.spawnEntity(EntityAddButton, 0x0, 0x0, {
        'control': this,
        'isEntity': !0x1,
        'buttonType': 'newPath'
      }), this.button_newPath.setAnchoredPosition(this.buttonSpacing, -(this.buttonSpacing + this.button_newPath.size.y), 'bottom-left'), this.button_spawnPath = ig.game.spawnEntity(EntityAddButton, 0x0, 0x0, {
        'control': this,
        'isEntity': !0x1,
        'buttonType': 'newSpawn'
      }), this.button_spawnPath.setAnchoredPosition(this.buttonSpacing, 0x2 * -(this.buttonSpacing + this.button_spawnPath.size.y), 'bottom-left');
      for (var _0x3dded4 = "deletePath deleteSpawn deletePlace createPlace check map resetCamera".split(" "), _0x27f428 = 0x0; _0x27f428 < _0x3dded4.length; _0x27f428++) this['button_' + _0x3dded4[_0x27f428]] = ig.game.spawnEntity(EntityAddButton, 0x0, 0x0, {
        'control': this,
        'isEntity': !0x1,
        'buttonType': _0x3dded4[_0x27f428]
      }), this['button_' + _0x3dded4[_0x27f428]].setAnchoredPosition(this.buttonSpacing * (_0x27f428 + 0x1) + this['button_' + _0x3dded4[_0x27f428]].size.x * _0x27f428, 0x3 * -(this.buttonSpacing + this['button_' + _0x3dded4[_0x27f428]].size.y), 'bottom-left');
    },
    'levelEditor': function () {
      this.bezierArray = null != ig.game.bezierArray ? ig.game.bezierArray : [[{
        'x': -0x2fd,
        'y': -0x140
      }, {
        'x': -0x320,
        'y': -0x217
      }, {
        'x': -0x29e,
        'y': -0x2cb
      }, {
        'x': -0x17c,
        'y': -0x28f
      }], [{
        'x': -0x17c,
        'y': -0x28f
      }, {
        'x': -0x4b,
        'y': -0x217
      }, {
        'x': -0xeb,
        'y': -0xeb
      }, {
        'x': -0x64,
        'y': -0x9b
      }], [{
        'x': -0x64,
        'y': -0x9b
      }, {
        'x': 0xeb,
        'y': 0x4b
      }, {
        'x': 0x9b,
        'y': -0x13b
      }, {
        'x': 0x1ef,
        'y': -0x122
      }], [{
        'x': 0x1f4,
        'y': -0x122
      }, {
        'x': 0x334,
        'y': -0x82
      }, {
        'x': 0x294,
        'y': 0xf5
      }, {
        'x': 0x1d6,
        'y': 0x28a
      }]], this.pathArray = null != ig.game.pathArray ? ig.game.pathArray : [[[0x0, 0x1, 0x2, 0x3]]], this.buildAreas = null != ig.game.buildAreas ? ig.game.buildAreas : [{
        'x': -0x1b3,
        'y': -0x132,
        'r': 0xfa
      }, {
        'x': 0x7c,
        'y': -0x157,
        'r': 0xfa
      }, {
        'x': 0x1c9,
        'y': 0x48,
        'r': 0xfa
      }, {
        'x': 0x10f,
        'y': -0x242,
        'r': 0xfa
      }], this.showBuildAreas = !0x1;
      for (var _0x246c5c = 0x0; _0x246c5c < this.buildAreas.length; _0x246c5c++) {
        var _0x4faa93 = this.buildAreas[_0x246c5c].x - this.buildAreas[_0x246c5c].r / 0x2,
          _0x20b5de = this.buildAreas[_0x246c5c].y - this.buildAreas[_0x246c5c].r / 0x2;
        ig.game.spawnEntity(EntityTowerPlace, _0x4faa93, _0x20b5de, {
          'control': this,
          'dropped': !0x0
        }).setAnchoredPosition(_0x4faa93, _0x20b5de, 'center-middle');
      }
    },
    'levelCreate': function () {
      for (var _0x2c2446 = 0x0; _0x2c2446 < this.bezierArray.length; _0x2c2446++) this.manualAddLine(this.bezierArray[_0x2c2446]);
      for (var _0x2c2446 = ig.game.getEntitiesByType(EntityCircleAdjust), _0x2c2f60 = 0x0; _0x2c2f60 < _0x2c2446.length; _0x2c2f60++) _0x2c2446[_0x2c2f60].connectsCheck(!0x1);
      for (_0x2c2446 = 0x0; _0x2c2446 < this.pathArray.length; _0x2c2446++) _0x2c2f60 = ig.game.spawnEntity(EntityAddButton, 0x0, 0x0, {
        'control': this,
        'num': _0x2c2446,
        'path': this.pathArray[_0x2c2446],
        'isEntity': !0x1,
        'buttonType': 'test'
      }), _0x2c2f60.setAnchoredPosition(this.buttonSpacing * (_0x2c2446 + 0x2) + _0x2c2f60.size.x * (_0x2c2446 + 0x1), 0x2 * -(this.buttonSpacing + _0x2c2f60.size.y), 'bottom-left'), this.button_Test.push(_0x2c2f60);
    },
    'draw': function () {
      this.parent(), ig.game.cameraControl && ig.game.cameraControl.fnc_doubleClick({
        'reset1st': this.resetSelection.bind(this),
        'callback': this.getRegion.bind(this),
        'updating': this.multiselect.bind(this)
      }), this.drawRegion();
    },
    'drawRegion': function () {
      var _0x1f1a95 = ig.game.cameraControl;
      if (_0x1f1a95) {
        var _0x46f9aa = ig.system.context;
        _0x46f9aa.save(), _0x46f9aa.translate(-ig.game.screen.x, -ig.game.screen.y), this.multiSelectRegion && _0x1f1a95.doubleClick.active && (_0x46f9aa.beginPath(), _0x46f9aa.strokeStyle = 'red', _0x46f9aa.lineWidth = 0x5, _0x46f9aa.rect(this.multiSelectRegion.x1, this.multiSelectRegion.y1, this.multiSelectRegion.x2 - this.multiSelectRegion.x1, this.multiSelectRegion.y2 - this.multiSelectRegion.y1), _0x46f9aa.stroke());
        if (0x0 < this.selectedEntities.length) for (var _0x1f1a95 = this.selectedEntities, _0x3e3003 = 0x0; _0x3e3003 < _0x1f1a95.length; _0x3e3003++) {
          var _0x1fb801 = _0x1f1a95[_0x3e3003];
          _0x46f9aa.beginPath(), _0x46f9aa.strokeStyle = 'lime', _0x46f9aa.lineWidth = 0x5, _0x46f9aa.arc(_0x1fb801.pos.x + _0x1fb801.size.x / 0x2, _0x1fb801.pos.y + _0x1fb801.size.y / 0x2, (_0x1fb801.size.x + _0x1fb801.size.y) / 0x4 + 0x14, 0x0, 0x2 * Math.PI), _0x46f9aa.stroke();
        }
        _0x46f9aa.restore();
      }
    },
    'resetSelection': function () {
      this.multiSelectRegion = null;
      for (var _0x5b1f4d = this.selectedEntities, _0x2e6f15 = 0x0; _0x2e6f15 < _0x5b1f4d.length; _0x2e6f15++) {
        var _0x4fb72f = _0x5b1f4d[_0x2e6f15];
        _0x4fb72f.isAdjustMarble = !0x1, _0x4fb72f.lastPoint = null, _0x4fb72f.griding(), _0x4fb72f.updatePathWay(), _0x4fb72f.connectsCheck(!0x0);
      }
      this.updatePath(), this.updateSpawns(), this.selectedEntities = [];
    },
    'getRegion': function () {
      if (this.multiSelectRegion && !this.isAdjusting) {
        var _0x20a51e = 0x0,
          _0x646526 = 0x0,
          _0x3d609a = 0x0,
          _0x551005 = 0x0;
        this.multiSelectRegion.x1 <= this.multiSelectRegion.x2 ? (_0x20a51e = this.multiSelectRegion.x1, _0x3d609a = this.multiSelectRegion.x2) : (_0x20a51e = this.multiSelectRegion.x2, _0x3d609a = this.multiSelectRegion.x1), this.multiSelectRegion.y1 <= this.multiSelectRegion.y2 ? (_0x646526 = this.multiSelectRegion.y1, _0x551005 = this.multiSelectRegion.y2) : (_0x646526 = this.multiSelectRegion.y2, _0x551005 = this.multiSelectRegion.y1);
        for (var _0x18bb67 = ig.game.getEntitiesByType(EntityCircleAdjust), _0x5ee002 = 0x0; _0x5ee002 < _0x18bb67.length; _0x5ee002++) {
          var _0x53575d = _0x18bb67[_0x5ee002];
          _0x53575d.pos.x + _0x53575d.size.x / 0x2 >= _0x20a51e && _0x53575d.pos.y + _0x53575d.size.y / 0x2 >= _0x646526 && _0x53575d.pos.x + _0x53575d.size.x / 0x2 <= _0x3d609a && _0x53575d.pos.y + _0x53575d.size.y / 0x2 <= _0x551005 && this.selectedEntities.push(_0x53575d);
        }
      }
    },
    'multiselect': function () {
      var _0xcfc29f = ig.game.cameraControl,
        _0x57f2b9 = ig.game.getEntitiesByType(EntityPointer)[0x0];
      if (_0xcfc29f && _0x57f2b9) {
        if (this.lastClickedSaved) {
          var _0xe3e209 = this.lastClickedSaved,
            _0x57f2b9 = new Vector2(_0x57f2b9.pos.x, _0x57f2b9.pos.y);
          this.multiSelectRegion = {
            'x1': _0xe3e209.x,
            'y1': _0xe3e209.y,
            'x2': _0x57f2b9.x,
            'y2': _0x57f2b9.y
          };
        } else _0xcfc29f.startPos && _0xcfc29f.doubleClick.active && (this.lastClickedSaved = new Vector2(_0x57f2b9.pos.x, _0x57f2b9.pos.y), _0xcfc29f.startPos = null);
        _0xcfc29f.doubleClick.active || (this.lastClickedSaved = null);
      }
    }
  }), EntityCircleAdjust.inject({
    'clicking': function () {
      this.parent();
      if (this.isVisible && this.isAdjustMarble && this.control.isLevelEditor && this.control.selectedEntities && 0x0 < this.control.selectedEntities.length) {
        for (var _0x4340a6 = this.control.selectedEntities, _0x268279 = !0x1, _0xbfd545 = 0x0; _0xbfd545 < _0x4340a6.length; _0xbfd545++) _0x4340a6[_0xbfd545] == this && (_0x268279 = !0x0);
        if (_0x268279) {
          this.pointer || (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0x0]), _0x268279 = new Vector2(this.pointer.pos.x, this.pointer.pos.y);
          for (_0xbfd545 = 0x0; _0xbfd545 < _0x4340a6.length; _0xbfd545++) {
            var _0x4b6859 = _0x4340a6[_0xbfd545];
            _0x4b6859.isAdjustMarble = !0x0, _0x4b6859.lastPoint || (_0x4b6859.lastPoint = {
              'x': _0x4b6859.pos.x - _0x268279.x,
              'y': _0x4b6859.pos.y - _0x268279.y
            }), _0x4b6859.anchoredPositionX = _0x268279.x + _0x4b6859.lastPoint.x - ig.system.width / 0x2, _0x4b6859.anchoredPositionY = _0x268279.y + _0x4b6859.lastPoint.y - ig.system.height / 0x2, _0x4b6859.updatePathWay();
          }
        } else this.control.resetSelection();
      }
    },
    'released': function () {
      this.parent(), 'function' == typeof this.control.resetSelection && this.control.resetSelection();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.controllers.controller-tutorial').requires('impact.entity').defines(function () {
  EntityControllerTutorial = ig.Entity.extend({
    'tutorialPanel': new ig.Image('media/graphics/sprites/interface/panel-tutorial.png'),
    'tutorialPointer': new ig.Image('media/graphics/sprites/interface/pointer.png'),
    'tutorialDrag': new ig.Image('media/graphics/sprites/interface/camera-drag.png'),
    'zIndex': 0x2710,
    'init': function (_0x1e7331, _0x11c4a6, _0x242567) {
      this.parent(_0x1e7331, _0x11c4a6, _0x242567), this.tutorial = {
        'step': 0x0,
        'wait': !0x1,
        'pointer': !0x1
      }, this.pointerDistance = this.pointerRotation = this.pointerLocY = this.pointerLocX = this.tutorialSpawner = this.tutorialTimer = 0x0, this.cameraDrag = {
        'active': !0x1,
        'setTo': 0x3,
        'waiting': 0x0,
        'progress': 0x0,
        'draw': !0x1,
        'state': 'popOut',
        'scale': 0x1,
        'distance': 0x190,
        'timer': 0x0,
        'moved': 0x0
      }, ig.game.allow = {
        'camera': !0x0,
        'clickPlace': !0x1,
        'upgradeTower': !0x0,
        'optionClick': !0x0
      }, ig.game.trigger = !0x1, ig.game.tutorialDisable || !ig.game.load('tutorial') || ig.game.GameController.marblePathEditor.isLevelEditor ? (console.log("Tutorial removed"), ig.game.tutorial = !0x1, this.allowEverything(), this.kill()) : (console.log("Tutorial active"), ig.game.tutorial = !0x0);
    },
    'update': function () {},
    'allowEverything': function () {
      ig.game.tutorial = !0x1, ig.game.allow.camera = !0x0, ig.game.allow.clickPlace = !0x0, ig.game.allow.upgradeTower = !0x0, ig.game.allow.optionClick = !0x0, ig.game.trigger = !0x0;
    },
    'stepByStep': function () {
      if (!0x0 != this.tutorial.wait) switch (ig.game.trigger = !0x1, this.tutorial.pointer = !0x1, this.tutorial.wait = !0x0, this.tutorial.step) {
        case 0x0:
          this.cameraDrag.waiting = this.cameraDrag.setTo, this.cameraDrag.progress = this.cameraDrag.setTo, this.cameraDrag.draw = !0x1;
        case 0x1:
          ig.game.trigger = !0x0, this.tutorialSpawner = 0x2, this.tutorialTimer = 0x1;
          var _0x54f86c = ig.game.GameController;
          _0x54f86c.readyButton && (_0x54f86c.readyButton.disable = !0x0);
          break;
        case 0x2:
          ig.game.trigger = !0x0, ig.game.allow.clickPlace = !0x0, this.tutorial.pointer = !0x0;
          break;
        case 0x3:
          ig.game.allow.clickPlace = !0x1, ig.game.trigger = !0x0, this.tutorial.pointer = !0x0;
          break;
        default:
          ig.game.tutorialDisable = !0x0, this.allowEverything();
          for (var _0x54f86c = ig.game.getEntitiesByType(EntityGameMarble), _0x2c28af = 0x0; _0x2c28af < _0x54f86c.length; _0x2c28af++) _0x54f86c[_0x2c28af].tutorialPaused.movement = !0x1, _0x54f86c[_0x2c28af].tutorialPaused.animation = -0x1;
      }
    },
    'continueTutorial': function () {
      switch (this.tutorial.step) {
        case 0x0:
          var _0x918be0 = ig.game.cameraControl;
          _0x918be0 ? 0x0 >= this.cameraDrag.progress ? (ig.game.trigger = !0x1, this.cameraDrag.draw = !0x1, this.tutorial.wait = !0x1, this.tutorial.step++) : _0x918be0.dragging && 0x0 != ig.game.screen.x && 0x0 != ig.game.screen.y ? (this.cameraDrag.waiting = this.cameraDrag.setTo, this.cameraDrag.draw = !0x1, this.cameraDrag.progress -= 0.034 * ig.game.optimizer, this.cameraDrag.progress = 0x0) : this.cameraDrag.draw || (0x0 >= this.cameraDrag.waiting ? (this.cameraDrag.draw = !0x0, this.cameraDrag.waiting = 0x0, this.cameraDrag.scale = 0x1, this.cameraDrag.moved = 0x0, this.cameraDrag.state = 'popOut') : this.cameraDrag.waiting -= 0.034 * ig.game.optimizer) : (ig.game.trigger = !0x1, this.tutorial.wait = !0x1, this.tutorial.step++);
          break;
        case 0x1:
          if (ig.game.trigger) {
            if (0x0 < this.tutorialTimer) this.tutorialTimer -= 0x1 * ig.system.tick;else {
              if (0x0 >= this.tutorialSpawner) {
                ig.game.trigger = !0x1, this.tutorial.wait = !0x1, this.tutorial.step++;
                for (var _0x2766af = ig.game.getEntitiesByType(EntityGameMarble), _0x918be0 = 0x0; _0x918be0 < _0x2766af.length; _0x918be0++) _0x2766af[_0x918be0].tutorialPaused.movement = !0x0, _0x2766af[_0x918be0].tutorialPaused.animation = _0x2766af[_0x918be0].currentAnim.frame;
              } else this.tutorialSpawner -= 0x1, this.tutorialTimer = 0x0 < this.tutorialSpawner ? 0x1 : 0.1, ig.game.getEntitiesByType(EntityGameMarblePathLevel)[0x0].enemySpawning(null, 'normal-1');
            }
          }
          break;
        case 0x2:
          (_0x918be0 = ig.game.getEntitiesByType(EntityTowerPlace)[0x0]) && this.setPointer(_0x918be0, {
            'distance': 0x64
          }), ig.game.trigger || (this.tutorial.wait = !0x1, this.tutorial.step++);
          break;
        case 0x3:
          (_0x918be0 = ig.game.getEntitiesByType(EntityPopupOptionButton)[0x0]) && this.setPointer(_0x918be0, {
            'distance': 0x82
          }), ig.game.trigger || (this.tutorial.wait = !0x1, this.tutorial.step++);
          break;
        default:
          if (0x0 < ig.game.getEntitiesByType(EntityGameMarble).length) break;
          ig.game.trigger && (ig.game.playerData.currency.gold += 0x64, ig.game.trigger = !0x1, this.tutorialTimer = 0x4, this.pointReady = null, ig.game.GameController.readyButton.disable = !0x1);
          if (0x0 < this.tutorialTimer) this.tutorialTimer -= 0x1 * ig.system.tick;else {
            _0x2766af = ig.game.getEntitiesByType(EntityButtonText);
            for (_0x918be0 = 0x0; _0x918be0 < _0x2766af.length; _0x918be0++) _0x2766af[_0x918be0].text == _STRINGS.Game.Ready && (this.pointReady = _0x2766af[_0x918be0]);
            this.tutorial.pointer = !0x0;
          }
          this.pointReady && this.setPointer(this.pointReady, {
            'rotation': -0x5a,
            'distance': 0x64
          });
      }
    },
    'setPointer': function (_0x1d4b08, _0x322a5f) {
      this.POINT = _0x1d4b08, settings = _0x322a5f ? _0x322a5f : {}, this.pointerLocX = _0x1d4b08.pos.x + _0x1d4b08.size.x / 0x2, this.pointerLocY = _0x1d4b08.pos.y + _0x1d4b08.size.y / 0x2, this.pointerRotation = 'undefined' != typeof settings.rotation ? settings.rotation + 0x5a : Math.atan2(ig.system.height / 0x2 - (_0x1d4b08.pos.y + _0x1d4b08.size.y / 0x2 - ig.game.screen.y), ig.system.width / 0x2 - (_0x1d4b08.pos.x + _0x1d4b08.size.x / 0x2 - ig.game.screen.x)) * (0xb4 / Math.PI) + 0x5a, this.pointerDistance = 'undefined' != typeof settings.distance ? settings.distance : Math.sqrt(Math.pow(_0x1d4b08.size.x, 0x2) + Math.pow(_0x1d4b08.size.y, 0x2)) / 0x2, this.pointerDistance += 0x0;
    },
    'drawPointer': function (_0xb2347b, _0x234edf) {
      var _0x57a3f4 = ig.system.context;
      _0x57a3f4.save(), _0x57a3f4.translate(_0xb2347b - ig.game.screen.x, _0x234edf - ig.game.screen.y), _0x57a3f4.rotate(this.pointerRotation * Math.PI / 0xb4);
      var _0x473dd3 = Math.abs(ig.system.fps / 0x2 - ig.game.fpsCounter % ig.system.fps) / (ig.system.fps / 0x2);
      this.tutorialPointer.draw(-this.tutorialPointer.width / 0x2, -this.tutorialPointer.height - 0xa * _0x473dd3 - this.pointerDistance), _0x57a3f4.restore();
    },
    'drawCameraDrag': function () {
      var _0x48e604 = ig.system.context;
      _0x48e604.save(), _0x48e604.translate(ig.system.width / 0x2, ig.system.height / 0x2 + 0xc8), _0x48e604.fillStyle = 'white', _0x48e604.textAlign = 'center', _0x48e604.textBaseAlign = 'center', _0x48e604.font = "60px segoe", ig.ModText.drawTextAndImage([String(ig.ua.mobile ? _STRINGS.Game.Tutorial.Device[0x0] : _STRINGS.Game.Tutorial.Device[0x1]) + _STRINGS.Game.Tutorial.Info1, "\n", _STRINGS.Game.Tutorial.Info2], 0x0, 1.5 * this.tutorialDrag.height, 'center', {
        'front': 'white',
        'back': 'black'
      });
      var _0xc02e76 = -this.cameraDrag.distance / 0x2 + this.cameraDrag.moved - this.tutorialDrag.width * this.cameraDrag.scale / 0x4 - this.tutorialDrag.width / 0x4,
        _0x4b64a6 = -(this.tutorialDrag.height * this.cameraDrag.scale) / 0x4,
        _0x1a8780 = 0x1;
      switch (this.cameraDrag.state) {
        case 'popOut':
          var _0x4af65c = 1.1;
          this.cameraDrag.scale < _0x4af65c ? this.cameraDrag.scale += 0.015 * ig.game.optimizer : (this.cameraDrag.state = 'popIn', this.cameraDrag.scale = _0x4af65c), _0x1a8780 = 0x1 - 0xa * (_0x4af65c - this.cameraDrag.scale), _0x1a8780 = 0x1 <= _0x1a8780 ? 0x1 : _0x1a8780;
          break;
        case 'popIn':
          0x1 < this.cameraDrag.scale ? this.cameraDrag.scale -= 0.03 * ig.game.optimizer : (this.cameraDrag.state = 'wait', this.cameraDrag.scale = 0x1);
          break;
        case 'wait':
          0x1 >= this.cameraDrag.timer ? this.cameraDrag.timer += 0.07 * ig.game.optimizer : (this.cameraDrag.state = 'move', this.cameraDrag.timer = 0x0);
          break;
        case 'move':
          _0x4af65c = 0x8 * ig.game.optimizer, this.cameraDrag.moved < this.cameraDrag.distance ? this.cameraDrag.moved = this.cameraDrag.moved + _0x4af65c >= this.cameraDrag.distance ? this.cameraDrag.distance : this.cameraDrag.moved + _0x4af65c : (this.cameraDrag.state = 'fadeOut', this.cameraDrag.timer = this.cameraDrag.distance);
          break;
        case 'fadeOut':
          0x0 < this.cameraDrag.timer ? this.cameraDrag.timer -= 0x1e * ig.game.optimizer : (this.cameraDrag.state = 'popOut', this.cameraDrag.timer = 0x0, this.cameraDrag.moved = 0x0, this.cameraDrag.scale = 0x1), _0x1a8780 = this.cameraDrag.timer / this.cameraDrag.distance, _0x1a8780 = 0x0 >= _0x1a8780 ? 0x0 : _0x1a8780;
      }
      _0x48e604.globalAlpha = _0x1a8780, _0x4af65c = 0xc8 <= this.cameraDrag.moved ? 0xc8 : this.cameraDrag.moved, 'fadeOut' == this.cameraDrag.state && (_0x4af65c = 0xc8 * _0x1a8780), _0x1a8780 = _0x48e604.createLinearGradient(_0xc02e76 - _0x4af65c, 0x0, _0xc02e76, 0x0), _0x1a8780.addColorStop(0x0, "rgba(255, 255, 255, 0)"), _0x1a8780.addColorStop(0x1, "rgba(255, 255, 255, 1)"), _0x48e604.lineWidth = 0x3c, _0x48e604.lineCap = 'round', _0x48e604.beginPath(), _0x48e604.moveTo(_0xc02e76 + _0x48e604.lineWidth / 0x2, 0x0), _0x48e604.lineTo(_0xc02e76 - _0x4af65c + _0x48e604.lineWidth / 0x2, 0x0), _0x48e604.strokeStyle = _0x1a8780, _0x48e604.stroke(), _0x48e604.scale(this.cameraDrag.scale, this.cameraDrag.scale), _0x48e604.drawImage(this.tutorialDrag.data, _0xc02e76, _0x4b64a6), _0x48e604.globalAlpha = 0x1, _0x48e604.restore();
    },
    'draw': function () {
      this.stepByStep(), this.continueTutorial(), this.cameraDrag.draw && this.drawCameraDrag(), this.tutorial.pointer && this.drawPointer(this.pointerLocX, this.pointerLocY);
    }
  }), EntityControllerTutorial_old = ig.Entity.extend({
    'tutorialPanel': new ig.Image('media/graphics/sprites/interface/panel-tutorial.png'),
    'tutorialPointer': new ig.Image('media/graphics/sprites/interface/pointer.png'),
    'zIndex': 0x2710,
    'init': function (_0x273fbc, _0x1a3a6b, _0x5f091b) {
      this.parent(_0x273fbc, _0x1a3a6b, _0x5f091b), ig.game.sessionData.tutorial && (ig.SaveData.tutorial = ig.game.sessionData.tutorial), ig.game.tutorial = !0x1, ig.game.trigger = !0x1, ig.game.allow = {
        'camera': !0x1,
        'clickPlace': !0x1,
        'upgradeTower': !0x1,
        'optionClick': !0x1
      }, this.tutorial = {
        'step': 0x0,
        'wait': !0x1,
        'delay': 0x0,
        'panel': !0x1,
        'overlay': !0x1,
        'pointer': !0x1
      };
    },
    'update': function () {},
    'stepByStep': function () {
      if (!0x0 != this.tutorial.wait) {
        this.tutorial.delay = 0x3, ig.game.trigger = !0x1, this.tutorial.panel = !0x1, this.tutorial.overlay = !0x1, this.tutorial.pointer = !0x1;
        var _0x132bbe = ig.game.GameController;
        this.tutorial.wait = !0x0;
        switch (this.tutorial.step) {
          case 0x0:
            this.tutorial.panel = !0x0, this.tutorial.overlay = !0x0, _0x132bbe && (_0x132bbe.readyButton.anchoredPositionY = ig.system.height, _0x132bbe.cameraButton.anchoredPositionY = ig.system.height, _0x132bbe.readyButton.disable = !0x0, _0x132bbe.cameraButton.disable = !0x0);
            break;
          case 0x1:
            this.tutorial.panel = !0x0, this.tutorial.overlay = !0x0;
            break;
          case 0x2:
            ig.game.trigger = !0x0, ig.game.allow.camera = !0x0;
            break;
          case 0x3:
            ig.game.allow.camera = !0x1, this.tutorial.panel = !0x0, this.tutorial.overlay = !0x0, _0x132bbe && (_0x132bbe.cameraButton.anchoredPositionY = _0x132bbe.buttonPlace.center.y);
            break;
          case 0x4:
            this.tutorial.panel = !0x0, this.tutorial.overlay = !0x0;
            break;
          case 0x5:
            ig.game.trigger = !0x0, ig.game.allow.clickPlace = !0x0, this.tutorial.panel = !0x0, this.tutorial.pointer = !0x0;
            if (_0x132bbe = ig.game.getEntitiesByType(EntityTowerPlace)[0x0]) ig.game.screen.x = _0x132bbe.pos.x + _0x132bbe.size.x / 0x2 - ig.system.width / 0x2, ig.game.screen.y = _0x132bbe.pos.y + _0x132bbe.size.y / 0x2 - ig.system.height / 0x2;
            break;
          case 0x6:
            ig.game.allow.clickPlace = !0x1, ig.game.trigger = !0x0, this.tutorial.panel = !0x0, this.tutorial.pointer = !0x0, ig.game.screen.y -= 0x12c;
            break;
          case 0x7:
            this.tutorial.panel = !0x0, this.tutorial.overlay = !0x0;
            break;
          case 0x8:
            ig.game.trigger = !0x0, ig.game.getEntitiesByType(EntityGameMarblePathLevel)[0x0].enemySpawning(null, 'normal-1');
            var _0x132bbe = ig.game.getEntitiesByType(EntityGameMarble)[0x0],
              _0x3944d2 = ig.game.getEntitiesByType(EntityTower)[0x0];
            _0x132bbe.stats.reward = ig.GameConfig.computeUpgrade(_0x3944d2);
            break;
          case 0x9:
            this.tutorial.panel = !0x0, this.tutorial.overlay = !0x0, ig.game.screen.y += 0x12c;
            break;
          case 0xa:
            ig.game.allow.upgradeTower = !0x0, ig.game.trigger = !0x0, this.tutorial.panel = !0x0, this.tutorial.pointer = !0x0;
            if (_0x132bbe = ig.game.getEntitiesByType(EntityTower)[0x0]) ig.game.screen.x = _0x132bbe.pos.x + _0x132bbe.size.x / 0x2 - ig.system.width / 0x2, ig.game.screen.y = _0x132bbe.pos.y + _0x132bbe.size.y / 0x2 - ig.system.height / 0x2;
            break;
          case 0xb:
            ig.game.allow.upgradeTower = !0x1, ig.game.allow.optionClick = !0x0, ig.game.trigger = !0x0, this.tutorial.panel = !0x0, this.tutorial.pointer = !0x0, ig.game.screen.x += 0xdc, ig.game.screen.y += 0xc8;
            break;
          case 0xc:
            ig.game.playerData.currency.gold += 0x64, this.tutorial.panel = !0x0, this.tutorial.overlay = !0x0;
            break;
          case 0xd:
            this.tutorial.panel = !0x0, this.tutorial.overlay = !0x0, _0x132bbe && (_0x132bbe.readyButton.anchoredPositionY = _0x132bbe.buttonPlace.ready.y);
            break;
          default:
            ig.SaveData.tutorial = !0x1, ig.game.tutorial = !0x1, ig.game.allow.camera = !0x0, this.kill(), _0x132bbe.readyButton.disable = !0x1, _0x132bbe.cameraButton.disable = !0x1;
        }
      }
    },
    'continueTutorial': function () {
      switch (this.tutorial.step) {
        case 0x2:
          ig.game.trigger && ig.game.cameraControl.dragging && (ig.game.trigger = !0x1, setTimeout(function () {
            this.tutorial.wait = !0x1, this.tutorial.step++;
          }.bind(this), 0xbb8));
          break;
        case 0x5:
        case 0x6:
        case 0x8:
        case 0xa:
        case 0xb:
          ig.game.trigger || (this.tutorial.wait = !0x1, this.tutorial.step++);
      }
      !ig.game.trigger && this.tutorial.panel && (0x0 < this.tutorial.delay ? this.tutorial.delay -= 0x3 * ig.system.tick : (ig.input.pressed('click') && (this.tutorial.wait = !0x1, this.tutorial.step++), this.drawPanelContinue()));
    },
    'drawPanel': function () {
      if (_STRINGS.Tutorial.Information[this.tutorial.step]) {
        this.tutorialPanel.draw(ig.system.width / 0x2 - this.tutorialPanel.width / 0x2, 0.75 * ig.system.height - this.tutorialPanel.height / 0x2);
        var _0x3e0044 = ig.system.context;
        _0x3e0044.font = "bold 55px montserrat", _0x3e0044.fillStyle = '#000000', _0x3e0044.textAlign = 'center', ig.ModText.drawTextAndImage(_STRINGS.Tutorial.Information[this.tutorial.step], ig.system.width / 0x2, 0.75 * ig.system.height - this.tutorialPanel.height / 0x2 + 0x37, 'center', {
          'back': 'black',
          'front': 'white'
        });
      }
    },
    'drawPanelContinue': function () {
      var _0x58bd41 = ig.system.context;
      _0x58bd41.font = "bold 30px montserrat", _0x58bd41.fillStyle = '#000000', _0x58bd41.textAlign = 'right', ig.ModText.drawTextAndImage([_STRINGS.Tutorial.Continue], ig.system.width / 0x2 + this.tutorialPanel.width / 0x2 - 0xf - 0x14, 0.75 * ig.system.height + this.tutorialPanel.height / 0x2 - 0x1e - 0xa, 'right');
    },
    'drawOverlay': function () {
      var _0x1e6c26 = ig.system.context;
      _0x1e6c26.fillStyle = 'black', _0x1e6c26.globalAlpha = 0.5, _0x1e6c26.fillRect(0x0, 0x0, ig.system.width, ig.system.height), _0x1e6c26.globalAlpha = 0x1;
    },
    'drawPointer': function () {
      var _0x4c8b0c = Math.abs(ig.system.fps / 0x2 - ig.game.fpsCounter % ig.system.fps) / (ig.system.fps / 0x2);
      this.tutorialPointer.draw(ig.system.width / 0x2 - this.tutorialPointer.width / 0x2, ig.system.height / 0x2 - 0x2 * this.tutorialPointer.height - 0x3 * _0x4c8b0c);
    },
    'draw': function () {
      ig.game.tutorial && (this.tutorial.overlay && this.drawOverlay(), this.tutorial.pointer && this.drawPointer(), this.tutorial.panel && this.drawPanel(), this.stepByStep(), this.continueTutorial());
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.gameplay.game-marble-path-level').requires('game.entities.gameplay.game-marble-path-main', 'game.entities.gameplay.game-marble-path-editor', 'game.entities.controllers.controller-tutorial', 'impact.entity').defines(function () {
  EntityGameMarblePathLevel = EntityGameMarblePathMain.extend({
    'drawLoc': {
      'spawn': new ig.Image('media/graphics/sprites/interface/level-spawner.png'),
      'base': new ig.Image('media/graphics/sprites/interface/level-base.png')
    },
    'init': function (_0x1ceef8, _0x29bed3, _0x1cefb3) {
      this.parent(_0x1ceef8, _0x29bed3, _0x1cefb3), this.gridSnap = 0x5, this.drawEndPoints = this.isGameOver = this.isLevelEditor = !0x1, this.waveSpawnLocations = [], this.spawnCooldown = {
        'max': 0x1e,
        'current': 0x0
      }, this.wave = {
        'max': [],
        'current': 0x0,
        'amount': [],
        'composition': [],
        'timer': 0xa,
        'spacing': []
      }, this.editor = {
        'buttons': [],
        'waves': [],
        'locations': {
          'spawns': [],
          'bases': []
        }
      }, this.editor.buttons = [], this.towerAvailable = "Sniper Laser Basic Shock Rocket Burst".split(" "), this.levelVariables(), this.levelEditor(), this.levelCreate();
    },
    'levelVariables': function () {},
    'levelEditor': function () {},
    'levelCreate': function () {
      ig.game.playerData.health.max = ig.game.playerData.health.current;
      for (var _0x52aea5 = 0x0; _0x52aea5 < this.editor.buttons.length; _0x52aea5++) this['button_' + this.editor.buttons[_0x52aea5]] = ig.game.spawnEntity(EntityAddButton, 0x0, 0x0, {
        'control': this,
        'isEntity': !0x1,
        'buttonType': this.editor.buttons[_0x52aea5]
      }), this['button_' + this.editor.buttons[_0x52aea5]].setAnchoredPosition(this.buttonSpacing * (_0x52aea5 + 0x1) + this['button_' + this.editor.buttons[_0x52aea5]].size.x * _0x52aea5, -(this.buttonSpacing + this['button_' + this.editor.buttons[_0x52aea5]].size.y), 'bottom-left');
      for (_0x52aea5 = 0x0; _0x52aea5 < this.bezierArray.length; _0x52aea5++) this.manualAddLine(this.bezierArray[_0x52aea5]);
      for (var _0x37343f = ig.game.getEntitiesByType(EntityCircleAdjust), _0x52aea5 = 0x0; _0x52aea5 < _0x37343f.length; _0x52aea5++) _0x37343f[_0x52aea5].connectsCheck(!0x1);
      for (var _0x90c89e = 0x0; _0x90c89e < this.pathArray.length; _0x90c89e++) for (_0x52aea5 = 0x0; _0x52aea5 < this.pathArray[_0x90c89e].length; _0x52aea5++) {
        for (var _0x1d96ad = this.pathArray[_0x90c89e][_0x52aea5], _0x553127 = !0x0, _0x5b0c52 = !0x0, _0x2c5a8c = this.editor.locations, _0x37343f = 0x0; _0x37343f < _0x2c5a8c.spawns.length; _0x37343f++) this.circleAdjustArray[_0x1d96ad[0x0]][0x0] == _0x2c5a8c.spawns[_0x37343f] && (_0x553127 = !0x1);
        for (_0x37343f = 0x0; _0x37343f < _0x2c5a8c.bases.length; _0x37343f++) this.circleAdjustArray[_0x1d96ad[_0x1d96ad.length - 0x1]][0x3] == _0x2c5a8c.bases[_0x37343f] && (_0x5b0c52 = !0x1);
        _0x553127 && _0x2c5a8c.spawns.push(this.circleAdjustArray[_0x1d96ad[0x0]][0x0]), _0x5b0c52 && _0x2c5a8c.bases.push(this.circleAdjustArray[_0x1d96ad[_0x1d96ad.length - 0x1]][0x3]);
      }
      this.showBuildAreas = !0x1;
      for (_0x52aea5 = 0x0; _0x52aea5 < this.buildAreas.length; _0x52aea5++) _0x37343f = this.buildAreas[_0x52aea5], _0x90c89e = _0x37343f.x - _0x37343f.r / 0x2, _0x1d96ad = _0x37343f.y - _0x37343f.r / 0x2, _0x553127 = ig.game.spawnEntity(EntityTowerPlace, _0x90c89e, _0x1d96ad, {
        'control': this,
        'dropped': !0x0
      }), _0x37343f.area ? (isNaN(_0x37343f.area.elevated) || (_0x553127.area.elevated = _0x37343f.area.elevated), isNaN(_0x37343f.area.boosted) || (_0x553127.area.boosted = _0x37343f.area.boosted)) : _0x37343f.area = {
        'elevated': 0x0,
        'boosted': 0x0
      }, _0x553127.setAnchoredPosition(_0x90c89e, _0x1d96ad, 'center-middle');
      this.flagSpacing = [];
      for (_0x37343f = _0x90c89e = 0x0; _0x37343f < this.editor.waves.length; _0x37343f++) {
        _0x1d96ad = [];
        for (_0x52aea5 = _0x553127 = 0x0; _0x52aea5 < this.editor.waves[_0x37343f].comp.length; _0x52aea5++) _0x1d96ad.push(this.editor.waves[_0x37343f].comp[_0x52aea5]), _0x553127++;
        this.wave.composition.push(this.editor.waves[_0x37343f].comp), this.wave.amount.push(this.editor.waves[_0x37343f].amount), this.wave.spacing.push(this.editor.waves[_0x37343f].spacing), this.wave.max.push(_0x553127), _0x90c89e += _0x553127, this.flagSpacing.push(_0x90c89e);
      }
      this.getSpawnLocations(), console.log("Wave " + this.wave.current + " Queueing");
    },
    'enemySpawning': function (_0x3ec3a7, _0x116758) {
      _0x116758 = !_0x116758 ? 'normal-1' : _0x116758;
      if ('empty' != _0x116758) {
        if (_0x3ec3a7) this.spawnFakeMarble(_0x3ec3a7, _0x116758);else {
          if (this.pathArray) {
            var _0x2f9c7b = this.pathArray[Math.floor(Math.random() * this.pathArray.length)],
              _0x2f9c7b = _0x2f9c7b[Math.floor(Math.random() * _0x2f9c7b.length)];
            this.spawnFakeMarble(_0x2f9c7b, _0x116758);
          }
        }
      }
    },
    'playGame': function () {
      if (0x0 >= this.spawnCooldown.current) {
        if (!this.wave.composition[this.wave.current] && !this.isGameOver) this.levelCompleted();else {
          if (0x0 < this.wave.timer) {
            var _0x48ccb2 = ig.game.readyRemoved;
            ig.game.checkPauseGame || (this.wave.timer -= 0.034 * ig.game.optimizer * ig.game.GameController.speedMultiplier() * _0x48ccb2);
          } else {
            if (0x0 < this.wave.composition[this.wave.current].length) {
              this.spawnCooldown.current = this.spawnCooldown.max;
              for (_0x48ccb2 = 0x0; _0x48ccb2 < this.wave.amount[this.wave.current]; _0x48ccb2++) {
                var _0x54d9e6 = this.wave.composition[this.wave.current].shift();
                _0x54d9e6 && this.enemySpawning(_0x54d9e6.path, _0x54d9e6.type);
              }
            } else {
              if (0x0 == ig.game.getEntitiesByType(EntityGameMarble).length && (this.wave.active = !0x1, this.wave.timer = this.wave.spacing[this.wave.current], console.log("Wave " + this.wave.current + " Ended"), this.wave.current++, this.wave.composition[this.wave.current] && (console.log("Wave " + this.wave.current + " Queueing"), this.getSpawnLocations()), _0x48ccb2 = this.control.readyButton)) _0x48ccb2.disable = !0x1;
            }
          }
        }
      } else !0x0 != ig.game.checkPauseGame && (this.spawnCooldown.current -= 0x1 * ig.game.optimizer * ig.game.GameController.speedMultiplier());
    },
    'getSpawnLocations': function () {
      this.waveSpawnLocations = [];
      for (var _0x5b5f38 = this.wave.composition[this.wave.current], _0x2c8ad0 = 0x0; _0x2c8ad0 < _0x5b5f38.length; _0x2c8ad0++) {
        var _0x22f2af = _0x5b5f38[_0x2c8ad0];
        if (null == _0x22f2af.path) break;
        for (var _0xae9037 = this.circleAdjustArray[_0x22f2af.path[0x0]][0x0], _0x22f2af = _0x22f2af.path[0x0], _0x47f0a7 = 0x0; _0x47f0a7 < this.waveSpawnLocations.length; _0x47f0a7++) if (_0xae9037 == this.waveSpawnLocations[_0x47f0a7]) {
          _0x22f2af = null;
          break;
        }
        null != _0x22f2af && this.waveSpawnLocations.push(this.circleAdjustArray[_0x22f2af][0x0]);
      }
      if (0x0 == this.waveSpawnLocations.length) {
        for (_0x2c8ad0 = 0x0; _0x2c8ad0 < this.pathArray.length; _0x2c8ad0++) this.waveSpawnLocations.push(this.circleAdjustArray[this.pathArray[_0x2c8ad0][0x0][0x0]][0x0]);
      }
    },
    'playTutorial': function () {},
    'levelCompleted': function () {
      ig.SaveData.player.premiums += 0x1, ig.SaveData.unlocks = ig.game.director.currentLevel - 0x1, this.isGameOver = !0x0, console.log("Level completed"), this.control.showGameWinPopup(), this.control.saveSessionData(), ig.game.sessionData.tutorial = !0x1, ig.game.save('tutorial', ig.game.sessionData.tutorial);
    },
    'update': function () {
      this.parent(), ig.game.tutorial ? this.playTutorial() : this.isLevelEditor || this.playGame();
    }
  }), EntityGameMarblePathLevelN = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x4ff811 = [], _0x135b2b = 0x0; 0x5 > _0x135b2b; _0x135b2b++) _0x4ff811.push({
        'type': 'normal-2',
        'path': [0x0, 0x1, 0x2, 0x3]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x4ff811,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x523,
        'y': 0x145
      }, {
        'x': -0x3fc,
        'y': 0x25d
      }, {
        'x': -0x2a3,
        'y': 0x2a8
      }, {
        'x': -0x1b3,
        'y': 0x1d1
      }], [{
        'x': -0x1b3,
        'y': 0x1d1
      }, {
        'x': -0xa0,
        'y': 0xff
      }, {
        'x': -0x159,
        'y': -0x4b
      }, {
        'x': 0x46,
        'y': -0x55
      }], [{
        'x': 0x46,
        'y': -0x55
      }, {
        'x': 0x190,
        'y': -0x4b
      }, {
        'x': 0x145,
        'y': 0xd7
      }, {
        'x': 0x2e4,
        'y': 0xe6
      }], [{
        'x': 0x2e4,
        'y': 0xe6
      }, {
        'x': 0x393,
        'y': 0xc3
      }, {
        'x': 0x433,
        'y': 0xa5
      }, {
        'x': 0x4dd,
        'y': 0x69
      }]], this.pathArray = [[[0x0, 0x1, 0x2, 0x3]]], this.buildAreas = [{
        'x': -0x265,
        'y': 0x142,
        'r': 0xfa
      }, {
        'x': 0x75,
        'y': 0x115,
        'r': 0xfa
      }, {
        'x': 0x2f3,
        'y': -0xb,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel1 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      ig.game.playerData.health.current = 0xa, ig.game.playerData.currency.gold = 0x64;
      var _0x3c2577 = [];
      _0x3c2577.push({
        'type': 'normal-1',
        'path': [0x0, 0x1, 0x2, 0x3]
      }), _0x3c2577.push({
        'type': 'normal-2',
        'path': [0x0, 0x1, 0x2, 0x3]
      }), _0x3c2577.push({
        'type': 'normal-1',
        'path': [0x0, 0x1, 0x2, 0x3]
      }), _0x3c2577.push({
        'type': 'normal-1',
        'path': [0x0, 0x1, 0x2, 0x3]
      }), _0x3c2577.push({
        'type': 'normal-2',
        'path': [0x0, 0x1, 0x2, 0x3]
      }), this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x3c2577,
        'spacing': 0x8
      });
      for (var _0x3c2577 = [], _0x2162cc = 0x0; 0x2 > _0x2162cc; _0x2162cc++) _0x3c2577.push({
        'type': 'runner',
        'path': [0x0, 0x1, 0x2, 0x3]
      });
      for (_0x2162cc = 0x0; 0x4 > _0x2162cc; _0x2162cc++) _0x3c2577.push({
        'type': 'normal-2',
        'path': [0x0, 0x1, 0x2, 0x3]
      }), _0x3c2577.push({
        'type': 'normal-1',
        'path': [0x0, 0x1, 0x2, 0x3]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x3c2577,
        'spacing': 0x8
      }), _0x3c2577 = [];
      for (_0x2162cc = 0x0; 0x3 > _0x2162cc; _0x2162cc++) _0x3c2577.push({
        'type': 'runner',
        'path': [0x0, 0x1, 0x2, 0x3]
      });
      for (_0x2162cc = 0x0; 0x3 > _0x2162cc; _0x2162cc++) _0x3c2577.push({
        'type': 'normal-2',
        'path': [0x0, 0x1, 0x2, 0x3]
      }), _0x3c2577.push({
        'type': 'normal-1',
        'path': [0x0, 0x1, 0x2, 0x3]
      });
      for (_0x2162cc = 0x0; 0x1 > _0x2162cc; _0x2162cc++) _0x3c2577.push({
        'type': 'big-guy',
        'path': [0x0, 0x1, 0x2, 0x3]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x3c2577,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x307,
        'y': -0x131
      }, {
        'x': -0x31b,
        'y': -0x217
      }, {
        'x': -0x299,
        'y': -0x2cb
      }, {
        'x': -0x181,
        'y': -0x280
      }], [{
        'x': -0x181,
        'y': -0x280
      }, {
        'x': -0xa,
        'y': -0x208
      }, {
        'x': -0x17c,
        'y': -0x127
      }, {
        'x': -0x6e,
        'y': -0x7d
      }], [{
        'x': -0x6e,
        'y': -0x7d
      }, {
        'x': 0x109,
        'y': 0x6e
      }, {
        'x': 0x104,
        'y': -0x1cc
      }, {
        'x': 0x217,
        'y': -0x113
      }], [{
        'x': 0x217,
        'y': -0x113
      }, {
        'x': 0x30c,
        'y': -0x64
      }, {
        'x': 0x299,
        'y': 0xf0
      }, {
        'x': 0x1a9,
        'y': 0x2a3
      }]], this.pathArray = [[[0x0, 0x1, 0x2, 0x3]]], this.buildAreas = [{
        'x': -0x1b3,
        'y': -0x132,
        'r': 0xfa
      }, {
        'x': 0x7c,
        'y': -0x157,
        'r': 0xfa
      }, {
        'x': 0x1c9,
        'y': 0x48,
        'r': 0xfa
      }, {
        'x': 0x10f,
        'y': -0x242,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel2 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      ig.game.playerData.health.current = 0xa, ig.game.playerData.currency.gold = 0x96;
      for (var _0x3b559d = [], _0x4dec41 = 0x0; 0x2 > _0x4dec41; _0x4dec41++) _0x3b559d.push({
        'type': 'normal-1',
        'path': [0x0, 0x2, 0x3, 0x4, 0x8]
      }), _0x3b559d.push({
        'type': 'normal-2',
        'path': [0x0, 0x2, 0x3, 0x4, 0x8]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x3b559d,
        'spacing': 0x8
      }), _0x3b559d = [];
      for (_0x4dec41 = 0x0; 0x2 > _0x4dec41; _0x4dec41++) _0x3b559d.push({
        'type': 'normal-1',
        'path': [0x1, 0x5, 0x6, 0x7, 0x8]
      }), _0x3b559d.push({
        'type': 'normal-2',
        'path': [0x1, 0x5, 0x6, 0x7, 0x8]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x3b559d,
        'spacing': 0x8
      }), _0x3b559d = [];
      for (_0x4dec41 = 0x0; 0x2 > _0x4dec41; _0x4dec41++) _0x3b559d.push({
        'type': 'runner',
        'path': [0x0, 0x2, 0x3, 0x4, 0x8]
      }), _0x3b559d.push({
        'type': 'runner',
        'path': [0x1, 0x5, 0x6, 0x7, 0x8]
      });
      for (_0x4dec41 = 0x0; 0x2 > _0x4dec41; _0x4dec41++) _0x3b559d.push({
        'type': 'normal-1',
        'path': [0x0, 0x2, 0x3, 0x4, 0x8]
      }), _0x3b559d.push({
        'type': 'normal-1',
        'path': [0x1, 0x5, 0x6, 0x7, 0x8]
      }), _0x3b559d.push({
        'type': 'normal-2',
        'path': [0x0, 0x2, 0x3, 0x4, 0x8]
      }), _0x3b559d.push({
        'type': 'normal-2',
        'path': [0x1, 0x5, 0x6, 0x7, 0x8]
      });
      this.editor.waves.push({
        'amount': 0x2,
        'comp': _0x3b559d,
        'spacing': 0x8
      }), _0x3b559d = [], _0x3b559d.push({
        'type': 'runner',
        'path': [0x1, 0x5, 0x6, 0x7, 0x8]
      }), _0x3b559d.push({
        'type': 'big-guy',
        'path': [0x0, 0x2, 0x3, 0x4, 0x8]
      }), _0x3b559d.push({
        'type': 'runner',
        'path': [0x1, 0x5, 0x6, 0x7, 0x8]
      }), _0x3b559d.push({
        'type': 'empty',
        'path': null
      }), _0x3b559d.push({
        'type': 'runner',
        'path': [0x1, 0x5, 0x6, 0x7, 0x8]
      }), _0x3b559d.push({
        'type': 'big-guy',
        'path': [0x0, 0x2, 0x3, 0x4, 0x8]
      });
      for (_0x4dec41 = 0x0; 0x4 > _0x4dec41; _0x4dec41++) _0x3b559d.push({
        'type': 'runner',
        'path': [0x1, 0x5, 0x6, 0x7, 0x8]
      }), _0x3b559d.push({
        'type': 'empty',
        'path': null
      });
      this.editor.waves.push({
        'amount': 0x2,
        'comp': _0x3b559d,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x5fa,
        'y': -0x4ba
      }, {
        'x': -0x5f5,
        'y': -0x3b1
      }, {
        'x': -0x5a0,
        'y': -0x258
      }, {
        'x': -0x366,
        'y': -0x294
      }], [{
        'x': 0x41f,
        'y': -0x456
      }, {
        'x': 0x4ba,
        'y': -0x3de
      }, {
        'x': 0x578,
        'y': -0x36b
      }, {
        'x': 0x45b,
        'y': -0x2f3
      }], [{
        'x': -0x366,
        'y': -0x294
      }, {
        'x': -0x23a,
        'y': -0x2a8
      }, {
        'x': -0x113,
        'y': -0x258
      }, {
        'x': -0xc3,
        'y': -0x1b3
      }], [{
        'x': -0xc3,
        'y': -0x1b3
      }, {
        'x': -0x5f,
        'y': -0xeb
      }, {
        'x': -0x1b8,
        'y': 0xf
      }, {
        'x': -0x168,
        'y': 0x11d
      }], [{
        'x': -0x168,
        'y': 0x11d
      }, {
        'x': -0xc8,
        'y': 0x23a
      }, {
        'x': 0x159,
        'y': 0x20d
      }, {
        'x': 0x29e,
        'y': 0x2cb
      }], [{
        'x': 0x45b,
        'y': -0x2f3
      }, {
        'x': 0x361,
        'y': -0x23f
      }, {
        'x': 0x37f,
        'y': -0x154
      }, {
        'x': 0x460,
        'y': -0x104
      }], [{
        'x': 0x460,
        'y': -0x104
      }, {
        'x': 0x500,
        'y': -0xaa
      }, {
        'x': 0x578,
        'y': 0x55
      }, {
        'x': 0x47e,
        'y': 0x113
      }], [{
        'x': 0x47e,
        'y': 0x113
      }, {
        'x': 0x3e3,
        'y': 0x1cc
      }, {
        'x': 0x33e,
        'y': 0x22b
      }, {
        'x': 0x29e,
        'y': 0x2cb
      }], [{
        'x': 0x29e,
        'y': 0x2cb
      }, {
        'x': 0x3ca,
        'y': 0x393
      }, {
        'x': 0x2fd,
        'y': 0x4a6
      }, {
        'x': 0x168,
        'y': 0x51e
      }]], this.pathArray = [[[0x0, 0x2, 0x3, 0x4, 0x8]], [[0x1, 0x5, 0x6, 0x7, 0x8]]], this.buildAreas = [{
        'x': -0x38c,
        'y': -0x374,
        'r': 0xfa
      }, {
        'x': -0x1b0,
        'y': -0x110,
        'r': 0xfa
      }, {
        'x': 0x1cf,
        'y': 0x24,
        'r': 0xfa,
        'area': {
          'elevated': 0x96,
          'boosted': 0x0
        }
      }, {
        'x': 0x50d,
        'y': -0x1de,
        'r': 0xfa
      }, {
        'x': -0x28,
        'y': 0xd4,
        'r': 0xfa
      }, {
        'x': 0x400,
        'y': 0x4b,
        'r': 0xfa
      }, {
        'x': 0x37e,
        'y': 0x58d,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel3 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      ig.game.playerData.health.current = 0xa, ig.game.playerData.currency.gold = 0xc8;
      for (var _0x55599a = [], _0x15ba5c = 0x0; 0x5 > _0x15ba5c; _0x15ba5c++) _0x55599a.push({
        'type': 'normal-1',
        'path': [0x0, 0x3, 0x4, 0x6, 0x7]
      }), _0x55599a.push({
        'type': 'normal-2',
        'path': [0x0, 0x3, 0x4, 0x6, 0x7]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x55599a,
        'spacing': 0x8
      }), _0x55599a = [];
      for (_0x15ba5c = 0x0; 0x5 > _0x15ba5c; _0x15ba5c++) _0x55599a.push({
        'type': 'normal-1',
        'path': [0x1, 0x8]
      }), _0x55599a.push({
        'type': 'normal-2',
        'path': [0x1, 0x8]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x55599a,
        'spacing': 0x8
      }), _0x55599a = [];
      for (_0x15ba5c = 0x0; 0x5 > _0x15ba5c; _0x15ba5c++) _0x55599a.push({
        'type': 'normal-1',
        'path': [0x2, 0x5, 0x6, 0x7]
      }), _0x55599a.push({
        'type': 'normal-2',
        'path': [0x2, 0x5, 0x6, 0x7]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x55599a,
        'spacing': 0x8
      }), _0x55599a = [], _0x55599a.push({
        'type': 'big-guy',
        'path': [0x0, 0x3, 0x4, 0x6, 0x7]
      }), _0x55599a.push({
        'type': 'big-guy',
        'path': [0x1, 0x8]
      }), _0x55599a.push({
        'type': 'big-guy',
        'path': [0x2, 0x5, 0x6, 0x7]
      });
      for (_0x15ba5c = 0x0; 0x1 > _0x15ba5c; _0x15ba5c++) _0x55599a.push({
        'type': 'empty',
        'path': null
      }), _0x55599a.push({
        'type': 'empty',
        'path': null
      }), _0x55599a.push({
        'type': 'empty',
        'path': null
      }), _0x55599a.push({
        'type': 'big-guy',
        'path': [0x0, 0x3, 0x4, 0x6, 0x7]
      }), _0x55599a.push({
        'type': 'big-guy',
        'path': [0x1, 0x8]
      }), _0x55599a.push({
        'type': 'big-guy',
        'path': [0x2, 0x5, 0x6, 0x7]
      });
      this.editor.waves.push({
        'amount': 0x3,
        'comp': _0x55599a,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x46a,
        'y': -0x375
      }, {
        'x': -0x334,
        'y': -0x3e8
      }, {
        'x': -0x1bd,
        'y': -0x479
      }, {
        'x': -0x82,
        'y': -0x438
      }], [{
        'x': -0x5af,
        'y': 0x18b
      }, {
        'x': -0x4dd,
        'y': 0x212
      }, {
        'x': -0x3e3,
        'y': 0x285
      }, {
        'x': -0x2b2,
        'y': 0x2f8
      }], [{
        'x': 0x424,
        'y': -0x50f
      }, {
        'x': 0x573,
        'y': -0x46a
      }, {
        'x': 0x582,
        'y': -0x32f
      }, {
        'x': 0x4e7,
        'y': -0x23a
      }], [{
        'x': -0x82,
        'y': -0x438
      }, {
        'x': -0x104,
        'y': -0x2f3
      }, {
        'x': -0x1ea,
        'y': -0x221
      }, {
        'x': -0xd7,
        'y': -0xe6
      }], [{
        'x': -0xd7,
        'y': -0xe6
      }, {
        'x': -0x19,
        'y': -0x5
      }, {
        'x': 0x7d,
        'y': 0x64
      }, {
        'x': 0x172,
        'y': 0xa5
      }], [{
        'x': 0x4e7,
        'y': -0x23a
      }, {
        'x': 0x415,
        'y': -0xdc
      }, {
        'x': 0x172,
        'y': -0x212
      }, {
        'x': 0x172,
        'y': 0xa5
      }], [{
        'x': 0x172,
        'y': 0xa5
      }, {
        'x': 0x2df,
        'y': 0xd7
      }, {
        'x': 0x48d,
        'y': 0x96
      }, {
        'x': 0x578,
        'y': 0x159
      }], [{
        'x': 0x578,
        'y': 0x159
      }, {
        'x': 0x50f,
        'y': 0x299
      }, {
        'x': 0x37a,
        'y': 0x33e
      }, {
        'x': 0x23f,
        'y': 0x3f2
      }], [{
        'x': -0x2b2,
        'y': 0x2f8
      }, {
        'x': -0x12c,
        'y': 0x384
      }, {
        'x': -0xf,
        'y': 0x3cf
      }, {
        'x': 0x23f,
        'y': 0x3f2
      }]], this.pathArray = [[[0x0, 0x3, 0x4, 0x6, 0x7]], [[0x1, 0x8]], [[0x2, 0x5, 0x6, 0x7]]], this.buildAreas = [{
        'x': -0x20b,
        'y': -0x2e8,
        'r': 0xfa
      }, {
        'x': 0x130,
        'y': -0x139,
        'r': 0xfa
      }, {
        'x': 0x317,
        'y': -0xa,
        'r': 0xfa
      }, {
        'x': 0x3da,
        'y': -0x281,
        'r': 0xfa
      }, {
        'x': 0x375,
        'y': 0x226,
        'r': 0xfa
      }, {
        'x': -0x282,
        'y': 0x1f8,
        'r': 0xfa
      }, {
        'x': -0x161,
        'y': 0x258,
        'r': 0xfa
      }, {
        'x': -0x183,
        'y': 0x1a,
        'r': 0xfa
      }, {
        'x': -0x395,
        'y': 0x16b,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel4 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x1c448c = [], _0x2d9fb1 = 0x0; 0x3 > _0x2d9fb1; _0x2d9fb1++) _0x1c448c.push({
        'type': 'normal-2',
        'path': [0x0, 0x1, 0x2, 0x3]
      }), _0x1c448c.push({
        'type': 'normal-1',
        'path': [0x0, 0x1, 0x4, 0x5]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x1c448c,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x53c,
        'y': 0x523
      }, {
        'x': -0x6bd,
        'y': 0x2a3
      }, {
        'x': -0x3f2,
        'y': 0x1c7
      }, {
        'x': -0x2d0,
        'y': 0x3b1
      }], [{
        'x': -0x2d0,
        'y': 0x3b1
      }, {
        'x': -0xcd,
        'y': 0x57d
      }, {
        'x': 0x2b7,
        'y': 0x479
      }, {
        'x': 0xeb,
        'y': 0x69
      }], [{
        'x': 0xeb,
        'y': 0x69
      }, {
        'x': 0x1a4,
        'y': -0x271
      }, {
        'x': 0x50f,
        'y': -0x33e
      }, {
        'x': 0x5f5,
        'y': -0xe6
      }], [{
        'x': 0x5f5,
        'y': -0xe6
      }, {
        'x': 0x695,
        'y': 0xc8
      }, {
        'x': 0x3c5,
        'y': 0x28a
      }, {
        'x': 0x618,
        'y': 0x4a6
      }], [{
        'x': 0xeb,
        'y': 0x69
      }, {
        'x': 0x0,
        'y': -0xe6
      }, {
        'x': -0x50f,
        'y': -0xeb
      }, {
        'x': -0x569,
        'y': -0x398
      }], [{
        'x': -0x569,
        'y': -0x398
      }, {
        'x': -0x5eb,
        'y': -0x53c
      }, {
        'x': -0x384,
        'y': -0x654
      }, {
        'x': 0x28,
        'y': -0x497
      }]], this.pathArray = [[[0x0, 0x1, 0x2, 0x3], [0x0, 0x1, 0x4, 0x5]]], this.buildAreas = [{
        'x': -0x422,
        'y': 0x439,
        'r': 0xfa
      }, {
        'x': 0x83,
        'y': -0x15a,
        'r': 0xfa
      }, {
        'x': 0x2aa,
        'y': 0x94,
        'r': 0xfa
      }, {
        'x': -0x20,
        'y': 0x145,
        'r': 0xfa
      }, {
        'x': 0x6a0,
        'y': 0x2cf,
        'r': 0xfa
      }, {
        'x': -0x1d6,
        'y': -0x3eb,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel5 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x1adf74 = [], _0xd4c9ed = 0x0; 0x5 > _0xd4c9ed; _0xd4c9ed++) _0x1adf74.push({
        'type': 'normal-2',
        'path': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x1adf74,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x479,
        'y': -0xfa
      }, {
        'x': -0x9d8,
        'y': 0x523
      }, {
        'x': -0x78a,
        'y': 0x5ff
      }, {
        'x': -0x56e,
        'y': 0x4d3
      }], [{
        'x': -0x56e,
        'y': 0x4d3
      }, {
        'x': -0x2d5,
        'y': 0x393
      }, {
        'x': -0x316,
        'y': 0x9d3
      }, {
        'x': 0x7d,
        'y': 0x618
      }], [{
        'x': 0x7d,
        'y': 0x618
      }, {
        'x': 0x217,
        'y': 0x4d3
      }, {
        'x': 0x541,
        'y': 0x7cb
      }, {
        'x': 0x69a,
        'y': 0x514
      }], [{
        'x': 0x69a,
        'y': 0x514
      }, {
        'x': 0x63b,
        'y': 0x311
      }, {
        'x': 0x49c,
        'y': 0x3f2
      }, {
        'x': 0xf,
        'y': 0x42e
      }], [{
        'x': 0xf,
        'y': 0x42e
      }, {
        'x': -0x25d,
        'y': 0x47e
      }, {
        'x': -0x299,
        'y': 0x1f4
      }, {
        'x': 0x46,
        'y': 0x1d1
      }], [{
        'x': 0x46,
        'y': 0x1d1
      }, {
        'x': 0x1ea,
        'y': 0x16d
      }, {
        'x': 0x52d,
        'y': 0x32a
      }, {
        'x': 0x70d,
        'y': -0x55
      }], [{
        'x': 0x70d,
        'y': -0x55
      }, {
        'x': 0x79e,
        'y': -0x1f4
      }, {
        'x': 0x62c,
        'y': -0x389
      }, {
        'x': 0x3e8,
        'y': -0x2b7
      }], [{
        'x': 0x3e8,
        'y': -0x2b7
      }, {
        'x': 0xf0,
        'y': -0x1e0
      }, {
        'x': -0xfa,
        'y': -0x181
      }, {
        'x': -0x1a4,
        'y': -0x35c
      }], [{
        'x': -0x1a4,
        'y': -0x35c
      }, {
        'x': -0x1db,
        'y': -0x4b0
      }, {
        'x': 0x23a,
        'y': -0x451
      }, {
        'x': 0x5b4,
        'y': -0x573
      }], [{
        'x': 0x5b4,
        'y': -0x573
      }, {
        'x': 0x785,
        'y': -0x77b
      }, {
        'x': 0x3ca,
        'y': -0x7ad
      }, {
        'x': -0x636,
        'y': -0x555
      }]], this.pathArray = [[[0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9]]], this.buildAreas = [{
        'x': -0x64f,
        'y': 0x42c,
        'r': 0xfa
      }, {
        'x': -0x1f,
        'y': 0x57e,
        'r': 0xfa
      }, {
        'x': -0x120,
        'y': 0x120,
        'r': 0xfa
      }, {
        'x': 0x4c7,
        'y': 0x2f1,
        'r': 0xfa
      }, {
        'x': -0x12d,
        'y': -0x117,
        'r': 0xfa
      }, {
        'x': 0x57c,
        'y': -0x3e9,
        'r': 0xfa
      }, {
        'x': 0x118,
        'y': -0x56a,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel6 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x284b8f = [], _0x1d35c6 = 0x0; 0x5 > _0x1d35c6; _0x1d35c6++) _0x284b8f.push({
        'type': 'normal-2',
        'path': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x284b8f,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x505,
        'y': 0x253
      }, {
        'x': -0x1d6,
        'y': -0x1f9
      }, {
        'x': -0x834,
        'y': 0x1d6
      }, {
        'x': -0x4e2,
        'y': -0x1e5
      }], [{
        'x': -0x4e7,
        'y': -0x1e0
      }, {
        'x': -0x33e,
        'y': -0x3b1
      }, {
        'x': -0x695,
        'y': -0x366
      }, {
        'x': -0x4ab,
        'y': -0x4d3
      }], [{
        'x': -0x4ab,
        'y': -0x4d3
      }, {
        'x': -0x28a,
        'y': -0x5b9
      }, {
        'x': -0x69,
        'y': -0x34d
      }, {
        'x': 0x258,
        'y': -0x3a7
      }], [{
        'x': 0x258,
        'y': -0x3a7
      }, {
        'x': 0x5f5,
        'y': -0x3bb
      }, {
        'x': 0x514,
        'y': 0x39d
      }, {
        'x': 0xa,
        'y': 0x500
      }], [{
        'x': 0xa,
        'y': 0x500
      }, {
        'x': -0x55a,
        'y': 0x60e
      }, {
        'x': -0x3c0,
        'y': 0x4b
      }, {
        'x': -0x7d,
        'y': 0x32a
      }], [{
        'x': -0x7d,
        'y': 0x325
      }, {
        'x': 0xff,
        'y': 0x451
      }, {
        'x': 0x53c,
        'y': -0x11d
      }, {
        'x': 0x235,
        'y': -0x226
      }], [{
        'x': 0x235,
        'y': -0x226
      }, {
        'x': -0x2a3,
        'y': -0x37f
      }, {
        'x': -0x2f3,
        'y': 0x11d
      }, {
        'x': 0x122,
        'y': 0xaa
      }]], this.pathArray = [[[0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6]]], this.buildAreas = [{
        'x': -0x462,
        'y': -0xa7,
        'r': 0xfa
      }, {
        'x': -0x3b0,
        'y': -0x3c9,
        'r': 0xfa
      }, {
        'x': 0x182,
        'y': -0x128,
        'r': 0xfa
      }, {
        'x': 0x265,
        'y': -0xba,
        'r': 0xfa
      }, {
        'x': -0xe1,
        'y': 0x441,
        'r': 0xfa
      }, {
        'x': 0x579,
        'y': 0x17a,
        'r': 0xfa
      }, {
        'x': 0x554,
        'y': -0x2c0,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel7 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x3e4dc2 = [], _0x21f0d7 = 0x0; 0x5 > _0x21f0d7; _0x21f0d7++) _0x3e4dc2.push({
        'type': 'normal-2',
        'path': [0x0, 0x2, 0x5, 0x6, 0x7, 0x8]
      }), _0x3e4dc2.push({
        'type': 'normal-1',
        'path': [0x1, 0x3, 0x4, 0x6, 0x7, 0x8]
      });
      this.editor.waves.push({
        'amount': 0x2,
        'comp': _0x3e4dc2,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x4c4,
        'y': -0x370
      }, {
        'x': -0x816,
        'y': -0x122
      }, {
        'x': -0x5f0,
        'y': 0xc3
      }, {
        'x': -0x442,
        'y': 0xcd
      }], [{
        'x': -0x5be,
        'y': 0x280
      }, {
        'x': -0x4dd,
        'y': 0x569
      }, {
        'x': -0x177,
        'y': 0x398
      }, {
        'x': -0x2f3,
        'y': 0x1b8
      }], [{
        'x': -0x442,
        'y': 0xcd
      }, {
        'x': -0xfa,
        'y': 0x131
      }, {
        'x': -0x2da,
        'y': -0x19a
      }, {
        'x': -0x4b,
        'y': -0x217
      }], [{
        'x': -0x2f3,
        'y': 0x1b8
      }, {
        'x': -0x41f,
        'y': -0xe1
      }, {
        'x': -0x34d,
        'y': -0x7d
      }, {
        'x': -0x2d0,
        'y': -0x1d6
      }], [{
        'x': -0x2d5,
        'y': -0x1d6
      }, {
        'x': -0x25d,
        'y': -0x5ff
      }, {
        'x': 0x343,
        'y': -0x4f1
      }, {
        'x': 0x1e5,
        'y': -0x10e
      }], [{
        'x': -0x4b,
        'y': -0x217
      }, {
        'x': 0x14a,
        'y': -0x25d
      }, {
        'x': 0x131,
        'y': -0x16d
      }, {
        'x': 0x1e5,
        'y': -0x10e
      }], [{
        'x': 0x1e5,
        'y': -0x10e
      }, {
        'x': 0x41a,
        'y': 0xd7
      }, {
        'x': 0x5ff,
        'y': -0x27b
      }, {
        'x': 0x63b,
        'y': 0xb9
      }], [{
        'x': 0x63b,
        'y': 0xbe
      }, {
        'x': 0x5b4,
        'y': 0x44c
      }, {
        'x': 0x339,
        'y': 0x1a4
      }, {
        'x': 0x2c1,
        'y': 0x177
      }], [{
        'x': 0x2c1,
        'y': 0x177
      }, {
        'x': 0x186,
        'y': 0x9b
      }, {
        'x': -0xc8,
        'y': 0x352
      }, {
        'x': 0x31b,
        'y': 0x456
      }]], this.pathArray = [[[0x0, 0x2, 0x5, 0x6, 0x7, 0x8]], [[0x1, 0x3, 0x4, 0x6, 0x7, 0x8]]], this.buildAreas = [{
        'x': -0x375,
        'y': 0x2ff,
        'r': 0xfa
      }, {
        'x': -0x533,
        'y': -0x10a,
        'r': 0xfa
      }, {
        'x': -0x169,
        'y': -0x280,
        'r': 0xfa
      }, {
        'x': 0x24e,
        'y': 0x8f,
        'r': 0xfa
      }, {
        'x': 0x3c5,
        'y': 0x387,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel8 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x538189 = [], _0x2e7182 = 0x0; 0x5 > _0x2e7182; _0x2e7182++) _0x538189.push({
        'type': 'normal-1',
        'path': [0x0, 0x2, 0x4, 0x6, 0x7]
      }), _0x538189.push({
        'type': 'normal-2',
        'path': [0x1, 0x3, 0x5, 0x6, 0x7]
      });
      this.editor.waves.push({
        'amount': 0x2,
        'comp': _0x538189,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': 0xf,
        'y': -0x479
      }, {
        'x': -0x76c,
        'y': -0x546
      }, {
        'x': -0x5d7,
        'y': -0x1bd
      }, {
        'x': -0x49c,
        'y': -0x20d
      }], [{
        'x': 0xf,
        'y': -0x479
      }, {
        'x': 0x4a6,
        'y': -0x45b
      }, {
        'x': 0x424,
        'y': -0x13b
      }, {
        'x': 0x20d,
        'y': -0x159
      }], [{
        'x': -0x49c,
        'y': -0x20d
      }, {
        'x': -0x34d,
        'y': -0x230
      }, {
        'x': -0x2da,
        'y': -0xd2
      }, {
        'x': -0x3f2,
        'y': 0x37
      }], [{
        'x': 0x20d,
        'y': -0x159
      }, {
        'x': -0x91,
        'y': -0x1f9
      }, {
        'x': -0x8c,
        'y': -0x6e
      }, {
        'x': 0x7d,
        'y': 0x41
      }], [{
        'x': -0x3f2,
        'y': 0x37
      }, {
        'x': -0x4ab,
        'y': 0x16d
      }, {
        'x': -0x3de,
        'y': 0x2cb
      }, {
        'x': -0x127,
        'y': 0x43d
      }], [{
        'x': 0x7d,
        'y': 0x41
      }, {
        'x': 0x31b,
        'y': 0x29e
      }, {
        'x': -0x136,
        'y': 0x26c
      }, {
        'x': -0x127,
        'y': 0x43d
      }], [{
        'x': -0x127,
        'y': 0x43d
      }, {
        'x': 0x69,
        'y': 0x4c4
      }, {
        'x': 0xaf,
        'y': 0x3bb
      }, {
        'x': 0x285,
        'y': 0x406
      }], [{
        'x': 0x285,
        'y': 0x406
      }, {
        'x': 0x541,
        'y': 0x46f
      }, {
        'x': 0x5d2,
        'y': 0x294
      }, {
        'x': 0x4c9,
        'y': 0x131
      }]], this.pathArray = [[[0x0, 0x2, 0x4, 0x6, 0x7]], [[0x1, 0x3, 0x5, 0x6, 0x7]]], this.buildAreas = [{
        'x': 0x1c,
        'y': -0x33a,
        'r': 0xfa
      }, {
        'x': -0x438,
        'y': -0xc8,
        'r': 0xfa
      }, {
        'x': 0x104,
        'y': -0x72,
        'r': 0xfa
      }, {
        'x': -0x20b,
        'y': 0x290,
        'r': 0xfa
      }, {
        'x': -0xe8,
        'y': 0x289,
        'r': 0xfa
      }, {
        'x': 0x414,
        'y': 0x318,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel9 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x2a3b20 = [], _0x1233fb = 0x0; 0x5 > _0x1233fb; _0x1233fb++) _0x2a3b20.push({
        'type': 'normal-2',
        'path': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x2a3b20,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x2df,
        'y': -0x163
      }, {
        'x': -0x3d4,
        'y': 0x28
      }, {
        'x': -0x366,
        'y': 0x276
      }, {
        'x': -0x1ae,
        'y': 0x276
      }], [{
        'x': -0x1ae,
        'y': 0x276
      }, {
        'x': 0x154,
        'y': 0x267
      }, {
        'x': 0xd7,
        'y': 0x54b
      }, {
        'x': 0x393,
        'y': 0x4dd
      }], [{
        'x': 0x393,
        'y': 0x4dd
      }, {
        'x': 0x58c,
        'y': 0x4d8
      }, {
        'x': 0x5c3,
        'y': 0x271
      }, {
        'x': 0x389,
        'y': 0x16d
      }], [{
        'x': 0x389,
        'y': 0x16d
      }, {
        'x': 0x159,
        'y': 0xf
      }, {
        'x': -0xc3,
        'y': 0x73
      }, {
        'x': -0x17c,
        'y': -0x366
      }], [{
        'x': -0x17c,
        'y': -0x366
      }, {
        'x': -0x1d1,
        'y': -0x4f1
      }, {
        'x': -0x37,
        'y': -0x604
      }, {
        'x': 0x1ef,
        'y': -0x604
      }], [{
        'x': 0x1ef,
        'y': -0x604
      }, {
        'x': 0x3c5,
        'y': -0x613
      }, {
        'x': 0x339,
        'y': -0x39d
      }, {
        'x': 0x195,
        'y': -0x460
      }], [{
        'x': 0x195,
        'y': -0x460
      }, {
        'x': -0xaa,
        'y': -0x4d8
      }, {
        'x': -0xaa,
        'y': -0x203
      }, {
        'x': 0x14f,
        'y': -0x253
      }], [{
        'x': 0x14f,
        'y': -0x253
      }, {
        'x': 0x316,
        'y': -0x2d5
      }, {
        'x': 0x393,
        'y': -0x1e
      }, {
        'x': 0x159,
        'y': -0x41
      }], [{
        'x': 0x159,
        'y': -0x41
      }, {
        'x': -0x398,
        'y': -0x9b
      }, {
        'x': -0x1f9,
        'y': 0xd2
      }, {
        'x': -0x42e,
        'y': 0x1db
      }], [{
        'x': -0x42e,
        'y': 0x1db
      }, {
        'x': -0x537,
        'y': 0x267
      }, {
        'x': -0x6bd,
        'y': 0x37
      }, {
        'x': -0x52d,
        'y': -0x181
      }], [{
        'x': -0x52d,
        'y': -0x181
      }, {
        'x': -0x456,
        'y': -0x262
      }, {
        'x': -0x5b4,
        'y': -0x339
      }, {
        'x': -0x3cf,
        'y': -0x4b5
      }]], this.pathArray = [[[0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa]]], this.buildAreas = [{
        'x': -0x440,
        'y': 0xd8,
        'r': 0xfa
      }, {
        'x': -0x16d,
        'y': 0x16f,
        'r': 0xfa
      }, {
        'x': 0xbb,
        'y': -0x118,
        'r': 0xfa
      }, {
        'x': 0x2dc,
        'y': -0x318,
        'r': 0xfa
      }, {
        'x': -0x27b,
        'y': -0x3e5,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel10 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x5799b7 = [], _0x1385b0 = 0x0; 0x5 > _0x1385b0; _0x1385b0++) _0x5799b7.push({
        'type': 'normal-1',
        'path': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x5799b7,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x49c,
        'y': -0x4f1
      }, {
        'x': -0x366,
        'y': -0x546
      }, {
        'x': -0x1bd,
        'y': -0x627
      }, {
        'x': -0x186,
        'y': -0x51e
      }], [{
        'x': -0x186,
        'y': -0x51e
      }, {
        'x': -0xa0,
        'y': -0x3d4
      }, {
        'x': -0x492,
        'y': -0x38e
      }, {
        'x': -0x334,
        'y': -0x1f4
      }], [{
        'x': -0x334,
        'y': -0x1f4
      }, {
        'x': -0x172,
        'y': -0xa0
      }, {
        'x': -0xe1,
        'y': -0x2c6
      }, {
        'x': 0x12c,
        'y': -0x22b
      }], [{
        'x': 0x12c,
        'y': -0x22b
      }, {
        'x': 0x2b2,
        'y': -0x163
      }, {
        'x': 0x41a,
        'y': -0x2f8
      }, {
        'x': 0x21c,
        'y': -0x401
      }], [{
        'x': 0x21c,
        'y': -0x401
      }, {
        'x': -0xa,
        'y': -0x4c4
      }, {
        'x': 0x1ea,
        'y': -0x7ad
      }, {
        'x': 0x3ac,
        'y': -0x5af
      }], [{
        'x': 0x3ac,
        'y': -0x5af
      }, {
        'x': 0x4fb,
        'y': -0x3c0
      }, {
        'x': 0x63b,
        'y': -0x415
      }, {
        'x': 0x415,
        'y': 0x23
      }], [{
        'x': 0x415,
        'y': 0x23
      }, {
        'x': 0x2ee,
        'y': 0x1db
      }, {
        'x': 0x74e,
        'y': 0x3a7
      }, {
        'x': 0x3f7,
        'y': 0x4f6
      }], [{
        'x': 0x3f7,
        'y': 0x4f6
      }, {
        'x': 0x78,
        'y': 0x53c
      }, {
        'x': 0x217,
        'y': 0x325
      }, {
        'x': 0x163,
        'y': 0x145
      }], [{
        'x': 0x163,
        'y': 0x145
      }, {
        'x': 0xd2,
        'y': -0xaa
      }, {
        'x': -0x316,
        'y': 0xaa
      }, {
        'x': -0x2ad,
        'y': 0x1cc
      }], [{
        'x': -0x2ad,
        'y': 0x1cc
      }, {
        'x': -0x2b7,
        'y': 0x429
      }, {
        'x': 0x6e,
        'y': 0x2f8
      }, {
        'x': -0xd2,
        'y': 0x5af
      }], [{
        'x': -0xd7,
        'y': 0x5af
      }, {
        'x': -0x190,
        'y': 0x6c7
      }, {
        'x': -0x2cb,
        'y': 0x50a
      }, {
        'x': -0x401,
        'y': 0x4f6
      }], [{
        'x': -0x401,
        'y': 0x4f6
      }, {
        'x': -0x609,
        'y': 0x4f1
      }, {
        'x': -0x5eb,
        'y': 0x3b1
      }, {
        'x': -0x4a1,
        'y': 0xfa
      }]], this.pathArray = [[[0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb]]], this.buildAreas = [{
        'x': -0x3b6,
        'y': 0x2cc,
        'r': 0xfa
      }, {
        'x': 0xb5,
        'y': 0x430,
        'r': 0xfa
      }, {
        'x': 0x2d4,
        'y': 0x156,
        'r': 0xfa
      }, {
        'x': 0x44e,
        'y': -0x2ce,
        'r': 0xfa
      }, {
        'x': 0xf0,
        'y': -0x335,
        'r': 0xfa
      }, {
        'x': -0x393,
        'y': -0x3e7,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel11 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x36ed5e = [], _0x2f2d61 = 0x0; 0x5 > _0x2f2d61; _0x2f2d61++) _0x36ed5e.push({
        'type': 'normal-1',
        'path': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x36ed5e,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x4a6,
        'y': -0x104
      }, {
        'x': -0x1a9,
        'y': -0x13b
      }, {
        'x': -0x17c,
        'y': -0x78
      }, {
        'x': -0x1e0,
        'y': 0x46
      }], [{
        'x': -0x1e0,
        'y': 0x46
      }, {
        'x': -0x208,
        'y': 0x186
      }, {
        'x': -0x4ec,
        'y': 0x55
      }, {
        'x': -0x44c,
        'y': 0x2e9
      }], [{
        'x': -0x44c,
        'y': 0x2e9
      }, {
        'x': -0x276,
        'y': 0x4ce
      }, {
        'x': -0x226,
        'y': 0x1a9
      }, {
        'x': -0x78,
        'y': 0x27b
      }], [{
        'x': -0x78,
        'y': 0x27b
      }, {
        'x': 0x12c,
        'y': 0x2fd
      }, {
        'x': -0x87,
        'y': 0x519
      }, {
        'x': 0x22b,
        'y': 0x537
      }], [{
        'x': 0x22b,
        'y': 0x537
      }, {
        'x': 0x438,
        'y': 0x569
      }, {
        'x': 0x40b,
        'y': 0x2cb
      }, {
        'x': 0x33e,
        'y': 0x28a
      }], [{
        'x': 0x33e,
        'y': 0x28a
      }, {
        'x': -0x69,
        'y': 0x113
      }, {
        'x': -0x82,
        'y': -0x19f
      }, {
        'x': 0x2bc,
        'y': -0xf5
      }]], this.pathArray = [[[0x0, 0x1, 0x2, 0x3, 0x4, 0x5]]], this.buildAreas = [{
        'x': -0x8c,
        'y': -0xc,
        'r': 0xfa
      }, {
        'x': -0x32f,
        'y': 0x2a0,
        'r': 0xfa
      }, {
        'x': 0x56,
        'y': 0x1e7,
        'r': 0xfa
      }, {
        'x': 0x3b7,
        'y': -0x612,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel12 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x44743b = [], _0x2d0ebe = 0x0; 0x5 > _0x2d0ebe; _0x2d0ebe++) _0x44743b.push({
        'type': 'normal-1',
        'path': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x44743b,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': 0x4b5,
        'y': 0x3ca
      }, {
        'x': 0x483,
        'y': 0x69
      }, {
        'x': 0x235,
        'y': 0xbe
      }, {
        'x': -0x3c0,
        'y': -0xa
      }], [{
        'x': -0x3c0,
        'y': -0xa
      }, {
        'x': -0x541,
        'y': -0x19
      }, {
        'x': -0x573,
        'y': -0x253
      }, {
        'x': -0x2cb,
        'y': -0x267
      }], [{
        'x': -0x2cb,
        'y': -0x267
      }, {
        'x': 0x33e,
        'y': -0x208
      }, {
        'x': -0x14,
        'y': -0x456
      }, {
        'x': 0x294,
        'y': -0x49c
      }], [{
        'x': 0x294,
        'y': -0x49c
      }, {
        'x': 0x4f1,
        'y': -0x49c
      }, {
        'x': 0x5d7,
        'y': -0x1db
      }, {
        'x': 0x2e4,
        'y': -0x5f
      }], [{
        'x': 0x2e4,
        'y': -0x5f
      }, {
        'x': 0x32,
        'y': 0x1cc
      }, {
        'x': 0x4ec,
        'y': 0x5aa
      }, {
        'x': -0x1f4,
        'y': 0x4dd
      }], [{
        'x': -0x1f4,
        'y': 0x4dd
      }, {
        'x': -0x726,
        'y': 0x45b
      }, {
        'x': -0x479,
        'y': 0x1cc
      }, {
        'x': -0x307,
        'y': 0x21c
      }], [{
        'x': -0x307,
        'y': 0x21c
      }, {
        'x': -0xaa,
        'y': 0x258
      }, {
        'x': -0x82,
        'y': -0xb4
      }, {
        'x': -0x87,
        'y': -0x2e4
      }], [{
        'x': -0x87,
        'y': -0x2e4
      }, {
        'x': -0xcd,
        'y': -0x519
      }, {
        'x': -0x2bc,
        'y': -0x587
      }, {
        'x': -0x47e,
        'y': -0x56e
      }]], this.pathArray = [[[0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]]], this.buildAreas = [{
        'x': 0x114,
        'y': -0xff,
        'r': 0xfa,
        'area': {
          'elevated': 0x96,
          'boosted': 0x0
        }
      }, {
        'x': 0x360,
        'y': 0x2b8,
        'r': 0xfa
      }, {
        'x': -0x375,
        'y': 0x140,
        'r': 0xfa
      }, {
        'x': -0x1dd,
        'y': -0x35b,
        'r': 0xfa
      }, {
        'x': 0xc1,
        'y': 0x1ed,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel13 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0xdadd27 = [], _0x430833 = 0x0; 0x5 > _0x430833; _0x430833++) _0xdadd27.push({
        'type': 'normal-1',
        'path': [0x0, 0x2, 0x3, 0x4, 0x8]
      }), _0xdadd27.push({
        'type': 'normal-2',
        'path': [0x1, 0x5, 0x6, 0x7, 0x8]
      });
      this.editor.waves.push({
        'amount': 0x2,
        'comp': _0xdadd27,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': 0x172,
        'y': -0x5a5
      }, {
        'x': 0x181,
        'y': -0x3f2
      }, {
        'x': 0x168,
        'y': -0x221
      }, {
        'x': -0x96,
        'y': -0x28a
      }], [{
        'x': 0x5e6,
        'y': -0x5a5
      }, {
        'x': 0x5eb,
        'y': -0x3cf
      }, {
        'x': 0x5eb,
        'y': -0x177
      }, {
        'x': 0x5dc,
        'y': 0x5a
      }], [{
        'x': -0x96,
        'y': -0x28a
      }, {
        'x': -0x33e,
        'y': -0x294
      }, {
        'x': -0x19f,
        'y': -0x690
      }, {
        'x': -0x46f,
        'y': -0x677
      }], [{
        'x': -0x46f,
        'y': -0x677
      }, {
        'x': -0x726,
        'y': -0x622
      }, {
        'x': -0x67c,
        'y': -0x4c4
      }, {
        'x': -0x668,
        'y': -0x140
      }], [{
        'x': -0x668,
        'y': -0x140
      }, {
        'x': -0x6a4,
        'y': 0x64
      }, {
        'x': -0x267,
        'y': -0xa5
      }, {
        'x': -0x28a,
        'y': 0x16d
      }], [{
        'x': 0x5dc,
        'y': 0x5a
      }, {
        'x': 0x5be,
        'y': 0x280
      }, {
        'x': 0x537,
        'y': 0x3e3
      }, {
        'x': 0x2e9,
        'y': 0x3cf
      }], [{
        'x': 0x2e9,
        'y': 0x3cf
      }, {
        'x': 0x1c7,
        'y': 0x3bb
      }, {
        'x': 0x118,
        'y': 0x34d
      }, {
        'x': 0x5f,
        'y': 0xf0
      }], [{
        'x': 0x5f,
        'y': 0xeb
      }, {
        'x': 0x23,
        'y': -0x87
      }, {
        'x': -0x26c,
        'y': -0xf
      }, {
        'x': -0x28a,
        'y': 0x16d
      }], [{
        'x': -0x28a,
        'y': 0x16d
      }, {
        'x': -0x253,
        'y': 0x7e4
      }, {
        'x': -0x32a,
        'y': 0x618
      }, {
        'x': 0x348,
        'y': 0x672
      }]], this.pathArray = [[[0x0, 0x2, 0x3, 0x4, 0x8]], [[0x1, 0x5, 0x6, 0x7, 0x8]]], this.buildAreas = [{
        'x': -0x253,
        'y': -0x6a,
        'r': 0xfa
      }, {
        'x': 0x2b7,
        'y': -0x3b3,
        'r': 0xfa
      }, {
        'x': 0x4e8,
        'y': -0x3b3,
        'r': 0xfa
      }, {
        'x': -0x458,
        'y': -0x535,
        'r': 0xfa
      }, {
        'x': 0x39c,
        'y': 0x2e9,
        'r': 0xfa
      }, {
        'x': -0x105,
        'y': 0x58a,
        'r': 0xfa
      }, {
        'x': 0x3c4,
        'y': -0x27f,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel14 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x23cddd = [], _0x16421e = 0x0; 0x5 > _0x16421e; _0x16421e++) _0x23cddd.push({
        'type': 'normal-1',
        'path': [0x0, 0x2, 0x4, 0x6]
      }), _0x23cddd.push({
        'type': 'normal-2',
        'path': [0x1, 0x3, 0x5, 0x7]
      });
      this.editor.waves.push({
        'amount': 0x2,
        'comp': _0x23cddd,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x13b,
        'y': -0x3b1
      }, {
        'x': 0x31b,
        'y': -0x41a
      }, {
        'x': 0x23a,
        'y': -0x1c7
      }, {
        'x': 0x465,
        'y': -0x208
      }], [{
        'x': -0x348,
        'y': 0x5d7
      }, {
        'x': -0x7d0,
        'y': 0x6a9
      }, {
        'x': -0x76c,
        'y': 0x1c7
      }, {
        'x': -0x433,
        'y': 0x145
      }], [{
        'x': 0x465,
        'y': -0x208
      }, {
        'x': 0x5d7,
        'y': -0x22b
      }, {
        'x': 0x627,
        'y': -0x550
      }, {
        'x': 0x4bf,
        'y': -0x591
      }], [{
        'x': -0x433,
        'y': 0x145
      }, {
        'x': -0x78,
        'y': 0xe1
      }, {
        'x': 0x168,
        'y': 0x159
      }, {
        'x': 0x1c2,
        'y': 0x320
      }], [{
        'x': 0x4bf,
        'y': -0x591
      }, {
        'x': 0x136,
        'y': -0x663
      }, {
        'x': -0x631,
        'y': -0x6c2
      }, {
        'x': -0x631,
        'y': -0x4e7
      }], [{
        'x': 0x1c2,
        'y': 0x320
      }, {
        'x': 0x1f9,
        'y': 0x591
      }, {
        'x': 0x58c,
        'y': 0x555
      }, {
        'x': 0x54b,
        'y': 0x19a
      }], [{
        'x': -0x631,
        'y': -0x4e7
      }, {
        'x': -0x677,
        'y': -0x4b
      }, {
        'x': -0x708,
        'y': -0xc3
      }, {
        'x': 0x0,
        'y': -0x9b
      }], [{
        'x': 0x54b,
        'y': 0x19a
      }, {
        'x': 0x573,
        'y': -0xcd
      }, {
        'x': 0x3c0,
        'y': -0x5f
      }, {
        'x': 0x0,
        'y': -0x9b
      }]], this.pathArray = [[[0x0, 0x2, 0x4, 0x6]], [[0x1, 0x3, 0x5, 0x7]]], this.buildAreas = [{
        'x': -0x25a,
        'y': -0x37a,
        'r': 0xfa
      }, {
        'x': -0x1c0,
        'y': 0x610,
        'r': 0xfa
      }, {
        'x': -0x520,
        'y': 0x75,
        'r': 0xfa
      }, {
        'x': 0x5a8,
        'y': -0xe3,
        'r': 0xfa
      }, {
        'x': 0xb,
        'y': 0x2eb,
        'r': 0xfa
      }, {
        'x': -0x4a5,
        'y': -0x47b,
        'r': 0xfa
      }, {
        'x': 0x393,
        'y': 0x3a6,
        'r': 0xfa
      }, {
        'x': 0x3fd,
        'y': -0x47f,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel15 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x554dfe = [], _0x13929a = 0x0; 0x5 > _0x13929a; _0x13929a++) _0x554dfe.push({
        'type': 'normal-1',
        'path': [0x0, 0x4, 0x5]
      }), _0x554dfe.push({
        'type': 'normal-2',
        'path': [0x1, 0x6, 0x7]
      }), _0x554dfe.push({
        'type': 'normal-1',
        'path': [0x2, 0x8, 0x9]
      }), _0x554dfe.push({
        'type': 'normal-2',
        'path': [0x3, 0xa, 0xb]
      });
      this.editor.waves.push({
        'amount': 0x4,
        'comp': _0x554dfe,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x5c3,
        'y': 0x34d
      }, {
        'x': 0xf0,
        'y': 0x401
      }, {
        'x': -0x5b4,
        'y': 0xb4
      }, {
        'x': -0x45b,
        'y': -0xdc
      }], [{
        'x': -0x67c,
        'y': -0xe6
      }, {
        'x': -0x7b2,
        'y': -0x433
      }, {
        'x': -0x708,
        'y': -0x5c8
      }, {
        'x': -0x5f0,
        'y': -0x546
      }], [{
        'x': 0x2fd,
        'y': -0x19f
      }, {
        'x': 0x2da,
        'y': -0x640
      }, {
        'x': 0x320,
        'y': -0x753
      }, {
        'x': 0x4c4,
        'y': -0x645
      }], [{
        'x': -0x37,
        'y': 0x659
      }, {
        'x': -0xd2,
        'y': 0x406
      }, {
        'x': 0x1d1,
        'y': 0x4a6
      }, {
        'x': 0x299,
        'y': 0x578
      }], [{
        'x': -0x45b,
        'y': -0xdc
      }, {
        'x': -0x23f,
        'y': -0x2ee
      }, {
        'x': -0x127,
        'y': -0x2d0
      }, {
        'x': -0xdc,
        'y': -0x1f4
      }], [{
        'x': -0xdc,
        'y': -0x1f4
      }, {
        'x': -0x9b,
        'y': -0xf0
      }, {
        'x': -0x253,
        'y': 0x91
      }, {
        'x': 0x64,
        'y': 0x4b
      }], [{
        'x': -0x5f0,
        'y': -0x546
      }, {
        'x': -0x33e,
        'y': -0x45b
      }, {
        'x': -0x564,
        'y': -0x6f9
      }, {
        'x': -0x2d5,
        'y': -0x6b8
      }], [{
        'x': -0x2d5,
        'y': -0x6b8
      }, {
        'x': 0x1c2,
        'y': -0x654
      }, {
        'x': 0xe6,
        'y': -0x5f0
      }, {
        'x': 0x64,
        'y': 0x4b
      }], [{
        'x': 0x4c4,
        'y': -0x645
      }, {
        'x': 0x780,
        'y': -0x4b0
      }, {
        'x': 0x75d,
        'y': -0x42e
      }, {
        'x': 0x627,
        'y': -0x2fd
      }], [{
        'x': 0x627,
        'y': -0x2fd
      }, {
        'x': 0x45b,
        'y': -0x186
      }, {
        'x': 0x749,
        'y': 0x14
      }, {
        'x': 0x64,
        'y': 0x4b
      }], [{
        'x': 0x299,
        'y': 0x578
      }, {
        'x': 0x3f7,
        'y': 0x735
      }, {
        'x': 0x622,
        'y': 0x37f
      }, {
        'x': 0x5be,
        'y': 0x2b2
      }], [{
        'x': 0x5be,
        'y': 0x2b2
      }, {
        'x': 0x497,
        'y': 0x78
      }, {
        'x': -0x5a,
        'y': 0x564
      }, {
        'x': 0x5f,
        'y': 0x4b
      }]], this.pathArray = [[[0x0, 0x4, 0x5]], [[0x1, 0x6, 0x7]], [[0x2, 0x8, 0x9]], [[0x3, 0xa, 0xb]]], this.buildAreas = [{
        'x': 0x4c8,
        'y': 0x11b,
        'r': 0xfa
      }, {
        'x': 0x216,
        'y': -0x58e,
        'r': 0xfa
      }, {
        'x': -0x4e,
        'y': -0x32f,
        'r': 0xfa
      }, {
        'x': -0xfc,
        'y': 0x2ec,
        'r': 0xfa
      }, {
        'x': -0x3e3,
        'y': 0x2a0,
        'r': 0xfa
      }, {
        'x': 0x147,
        'y': 0x5f5,
        'r': 0xfa
      }, {
        'x': 0x46a,
        'y': -0x51e,
        'r': 0xfa
      }, {
        'x': -0x531,
        'y': -0x60c,
        'r': 0xfa
      }, {
        'x': -0x332,
        'y': -0x14,
        'r': 0xfa
      }, {
        'x': -0x5c8,
        'y': -0x3f5,
        'r': 0xfa
      }, {
        'x': 0x5e2,
        'y': -0x3f2,
        'r': 0xfa
      }, {
        'x': 0x3a2,
        'y': 0x4ed,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel16 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x3cad93 = [], _0x3a724e = 0x0; 0x5 > _0x3a724e; _0x3a724e++) _0x3cad93.push({
        'type': 'normal-1',
        'path': [0x0, 0x2, 0x4, 0x6, 0x8]
      }), _0x3cad93.push({
        'type': 'normal-2',
        'path': [0x1, 0x3, 0x5, 0x7, 0x9]
      });
      this.editor.waves.push({
        'amount': 0x2,
        'comp': _0x3cad93,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x64f,
        'y': 0x212
      }, {
        'x': -0x73a,
        'y': 0x668
      }, {
        'x': -0x361,
        'y': 0x6b8
      }, {
        'x': -0x3b6,
        'y': 0x3ca
      }], [{
        'x': 0x415,
        'y': -0x28
      }, {
        'x': 0x67c,
        'y': -0x4c9
      }, {
        'x': 0x55a,
        'y': -0x65e
      }, {
        'x': 0x3a7,
        'y': -0x604
      }], [{
        'x': -0x3b6,
        'y': 0x3ca
      }, {
        'x': -0x42e,
        'y': 0x140
      }, {
        'x': 0x5,
        'y': 0x91
      }, {
        'x': -0x5a,
        'y': 0x3a2
      }], [{
        'x': 0x3a7,
        'y': -0x604
      }, {
        'x': 0x82,
        'y': -0x582
      }, {
        'x': 0x45b,
        'y': -0x226
      }, {
        'x': 0x23f,
        'y': -0x14f
      }], [{
        'x': -0x5a,
        'y': 0x3a2
      }, {
        'x': -0xd2,
        'y': 0x5f5
      }, {
        'x': 0x17c,
        'y': 0x65e
      }, {
        'x': 0x221,
        'y': 0x4ba
      }], [{
        'x': 0x23f,
        'y': -0x14f
      }, {
        'x': -0x348,
        'y': 0x96
      }, {
        'x': 0x230,
        'y': -0x54b
      }, {
        'x': -0x2e4,
        'y': -0x622
      }], [{
        'x': 0x221,
        'y': 0x4ba
      }, {
        'x': 0x2fd,
        'y': 0x226
      }, {
        'x': 0x375,
        'y': 0x136
      }, {
        'x': 0x50f,
        'y': 0x15e
      }], [{
        'x': -0x2e4,
        'y': -0x622
      }, {
        'x': -0x51e,
        'y': -0x645
      }, {
        'x': -0x4a6,
        'y': -0x41f
      }, {
        'x': -0x5a0,
        'y': -0x258
      }], [{
        'x': 0x50f,
        'y': 0x15e
      }, {
        'x': 0x6fe,
        'y': 0x163
      }, {
        'x': 0x62c,
        'y': 0x311
      }, {
        'x': 0x505,
        'y': 0x528
      }], [{
        'x': -0x5a0,
        'y': -0x258
      }, {
        'x': -0x613,
        'y': -0x14f
      }, {
        'x': -0x7c1,
        'y': 0x1e
      }, {
        'x': -0x140,
        'y': -0xf
      }]], this.pathArray = [[[0x0, 0x2, 0x4, 0x6, 0x8]], [[0x1, 0x3, 0x5, 0x7, 0x9]]], this.buildAreas = [{
        'x': 0x16e,
        'y': 0xd7,
        'r': 0xfa
      }, {
        'x': -0x5fb,
        'y': 0x101,
        'r': 0xfa
      }, {
        'x': 0x432,
        'y': -0x2ae,
        'r': 0xfa
      }, {
        'x': -0x4ce,
        'y': 0x2de,
        'r': 0xfa
      }, {
        'x': 0x35c,
        'y': 0xc0,
        'r': 0xfa
      }, {
        'x': 0x3f3,
        'y': 0x49f,
        'r': 0xfa
      }, {
        'x': -0x1d4,
        'y': -0x12b,
        'r': 0xfa
      }, {
        'x': -0x185,
        'y': 0x2fe,
        'r': 0xfa
      }, {
        'x': -0x376,
        'y': -0x4b7,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel17 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x470664 = [], _0x2ec6a5 = 0x0; 0x5 > _0x2ec6a5; _0x2ec6a5++) _0x470664.push({
        'type': 'normal-1',
        'path': [0x0, 0x2, 0x4, 0x6]
      }), _0x470664.push({
        'type': 'normal-2',
        'path': [0x1, 0x3, 0x5, 0x7]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x470664,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': -0x5fa,
        'y': 0x226
      }, {
        'x': -0x78a,
        'y': -0x2e9
      }, {
        'x': -0x681,
        'y': -0x4ce
      }, {
        'x': -0x460,
        'y': -0x5cd
      }], [{
        'x': -0x2fd,
        'y': 0x1fe
      }, {
        'x': -0x573,
        'y': -0x172
      }, {
        'x': -0x604,
        'y': -0x35c
      }, {
        'x': -0x334,
        'y': -0x492
      }], [{
        'x': -0x460,
        'y': -0x5cd
      }, {
        'x': -0x15e,
        'y': -0x758
      }, {
        'x': 0x361,
        'y': -0x532
      }, {
        'x': 0x38e,
        'y': -0x244
      }], [{
        'x': -0x334,
        'y': -0x492
      }, {
        'x': -0xaf,
        'y': -0x591
      }, {
        'x': 0x339,
        'y': -0x36b
      }, {
        'x': 0x19a,
        'y': -0xe1
      }], [{
        'x': 0x38e,
        'y': -0x244
      }, {
        'x': 0x3bb,
        'y': 0x131
      }, {
        'x': 0x78f,
        'y': 0x55
      }, {
        'x': 0x672,
        'y': 0x33e
      }], [{
        'x': 0x19a,
        'y': -0xe1
      }, {
        'x': -0x5a,
        'y': 0x1f4
      }, {
        'x': 0x57d,
        'y': 0x352
      }, {
        'x': 0x578,
        'y': -0x7d
      }], [{
        'x': 0x672,
        'y': 0x33e
      }, {
        'x': 0x52d,
        'y': 0x6ea
      }, {
        'x': 0x24e,
        'y': 0x186
      }, {
        'x': -0xf,
        'y': 0x4d3
      }], [{
        'x': 0x578,
        'y': -0x7d
      }, {
        'x': 0x500,
        'y': -0x46a
      }, {
        'x': 0x889,
        'y': -0x541
      }, {
        'x': 0x479,
        'y': -0x753
      }]], this.pathArray = [[[0x0, 0x2, 0x4, 0x6]], [[0x1, 0x3, 0x5, 0x7]]], this.buildAreas = [{
        'x': 0x595,
        'y': 0x264,
        'r': 0xfa
      }, {
        'x': 0x2d9,
        'y': -0x46,
        'r': 0xfa
      }, {
        'x': -0x3ac,
        'y': -0x29f,
        'r': 0xfa
      }, {
        'x': -0x2b5,
        'y': -0x335,
        'r': 0xfa
      }, {
        'x': -0x19d,
        'y': -0x378,
        'r': 0xfa
      }, {
        'x': 0x4ba,
        'y': -0x370,
        'r': 0xfa
      }, {
        'x': 0x1f1,
        'y': 0x2d6,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel18 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x58d77c = [], _0xb5185c = 0x0; 0x5 > _0xb5185c; _0xb5185c++) _0x58d77c.push({
        'type': 'normal-1',
        'path': [0x0, 0x1, 0x3, 0x5, 0x7, 0x9, 0xb, 0xc]
      }), _0x58d77c.push({
        'type': 'normal-2',
        'path': [0x0, 0x2, 0x4, 0x6, 0x8, 0xa, 0xb, 0xc]
      });
      this.editor.waves.push({
        'amount': 0x1,
        'comp': _0x58d77c,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': 0x429,
        'y': -0x52d
      }, {
        'x': 0x280,
        'y': -0x44c
      }, {
        'x': 0xcd,
        'y': -0x44c
      }, {
        'x': -0x91,
        'y': -0x3f2
      }], [{
        'x': -0x91,
        'y': -0x3f2
      }, {
        'x': -0x186,
        'y': -0x3b1
      }, {
        'x': -0x1a9,
        'y': -0x2c6
      }, {
        'x': -0x131,
        'y': -0x226
      }], [{
        'x': -0x91,
        'y': -0x3f2
      }, {
        'x': -0x1ea,
        'y': -0x393
      }, {
        'x': -0x2a8,
        'y': -0x717
      }, {
        'x': -0x46a,
        'y': -0x5be
      }], [{
        'x': -0x131,
        'y': -0x226
      }, {
        'x': -0xdc,
        'y': -0x18b
      }, {
        'x': -0xf,
        'y': -0x136
      }, {
        'x': 0x9b,
        'y': -0x104
      }], [{
        'x': -0x46a,
        'y': -0x5be
      }, {
        'x': -0x618,
        'y': -0x447
      }, {
        'x': -0x271,
        'y': -0x3d9
      }, {
        'x': -0x55f,
        'y': -0x1b8
      }], [{
        'x': 0x9b,
        'y': -0x104
      }, {
        'x': 0x136,
        'y': -0xe1
      }, {
        'x': 0x1fe,
        'y': -0x2d
      }, {
        'x': 0x1db,
        'y': 0x96
      }], [{
        'x': -0x55f,
        'y': -0x1b8
      }, {
        'x': -0x785,
        'y': 0x2d
      }, {
        'x': -0x2e9,
        'y': 0x5f
      }, {
        'x': -0x456,
        'y': 0x2b2
      }], [{
        'x': 0x1db,
        'y': 0x96
      }, {
        'x': 0x1ea,
        'y': 0x13b
      }, {
        'x': 0x1bd,
        'y': 0x1ae
      }, {
        'x': 0x145,
        'y': 0x271
      }], [{
        'x': -0x456,
        'y': 0x2b2
      }, {
        'x': -0x532,
        'y': 0x44c
      }, {
        'x': -0x46a,
        'y': 0x51e
      }, {
        'x': -0x294,
        'y': 0x42e
      }], [{
        'x': 0x145,
        'y': 0x271
      }, {
        'x': 0x82,
        'y': 0x384
      }, {
        'x': 0x14,
        'y': 0x4ab
      }, {
        'x': 0x20d,
        'y': 0x56e
      }], [{
        'x': -0x294,
        'y': 0x42e
      }, {
        'x': -0x17c,
        'y': 0x35c
      }, {
        'x': -0x3c,
        'y': 0x451
      }, {
        'x': 0x20d,
        'y': 0x56e
      }], [{
        'x': 0x20d,
        'y': 0x56e
      }, {
        'x': 0x40b,
        'y': 0x618
      }, {
        'x': 0x550,
        'y': 0x442
      }, {
        'x': 0x49c,
        'y': 0x325
      }], [{
        'x': 0x49c,
        'y': 0x325
      }, {
        'x': 0x3a2,
        'y': 0x104
      }, {
        'x': 0x622,
        'y': 0x5f
      }, {
        'x': 0x48d,
        'y': -0x16d
      }]], this.pathArray = [[[0x0, 0x1, 0x3, 0x5, 0x7, 0x9, 0xb, 0xc], [0x0, 0x2, 0x4, 0x6, 0x8, 0xa, 0xb, 0xc]]], this.buildAreas = [{
        'x': -0x39,
        'y': -0x2a6,
        'r': 0xfa
      }, {
        'x': 0xc6,
        'y': 0x98,
        'r': 0xfa
      }, {
        'x': -0x3c,
        'y': 0x33f,
        'r': 0xfa
      }, {
        'x': -0x521,
        'y': 0x216,
        'r': 0xfa
      }, {
        'x': -0x37e,
        'y': -0x4a8,
        'r': 0xfa
      }, {
        'x': -0x494,
        'y': -0x98,
        'r': 0xfa
      }, {
        'x': 0x33e,
        'y': 0x195,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel19 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x5e8ef6 = [], _0x5844ae = 0x0; 0x5 > _0x5844ae; _0x5844ae++) _0x5e8ef6.push({
        'type': 'normal-1',
        'path': [0x0, 0x2, 0x4, 0x6, 0x7, 0x9, 0xb]
      }), _0x5e8ef6.push({
        'type': 'normal-2',
        'path': [0x0, 0x2, 0x4, 0x6, 0x8, 0xa, 0xb]
      }), _0x5e8ef6.push({
        'type': 'normal-1',
        'path': [0x1, 0x3, 0x5, 0x6, 0x7, 0x9, 0xb]
      }), _0x5e8ef6.push({
        'type': 'normal-2',
        'path': [0x1, 0x3, 0x5, 0x6, 0x8, 0xa, 0xb]
      });
      this.editor.waves.push({
        'amount': 0x4,
        'comp': _0x5e8ef6,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': 0x294,
        'y': -0x596
      }, {
        'x': 0x677,
        'y': -0x73a
      }, {
        'x': 0x6e5,
        'y': -0x2d5
      }, {
        'x': 0x3ac,
        'y': -0x32a
      }], [{
        'x': -0x2d5,
        'y': 0x456
      }, {
        'x': -0x325,
        'y': 0x375
      }, {
        'x': -0x375,
        'y': 0x2a8
      }, {
        'x': -0x465,
        'y': 0x19a
      }], [{
        'x': 0x3ac,
        'y': -0x32a
      }, {
        'x': 0x118,
        'y': -0x35c
      }, {
        'x': -0xd7,
        'y': -0x6e5
      }, {
        'x': -0x49c,
        'y': -0x4c4
      }], [{
        'x': -0x465,
        'y': 0x19a
      }, {
        'x': -0x532,
        'y': 0x87
      }, {
        'x': -0x65e,
        'y': 0x28
      }, {
        'x': -0x5b4,
        'y': -0xdc
      }], [{
        'x': -0x49c,
        'y': -0x4c4
      }, {
        'x': -0x6f4,
        'y': -0x361
      }, {
        'x': -0x483,
        'y': -0x96
      }, {
        'x': -0x29e,
        'y': -0x15e
      }], [{
        'x': -0x5b4,
        'y': -0xdc
      }, {
        'x': -0x483,
        'y': -0x2ad
      }, {
        'x': -0x442,
        'y': -0x91
      }, {
        'x': -0x29e,
        'y': -0x15e
      }], [{
        'x': -0x29e,
        'y': -0x15e
      }, {
        'x': -0x1ea,
        'y': -0x1ae
      }, {
        'x': -0x1ea,
        'y': -0x1db
      }, {
        'x': -0xc8,
        'y': -0x1ae
      }], [{
        'x': -0xc8,
        'y': -0x1ae
      }, {
        'x': 0x2cb,
        'y': -0xeb
      }, {
        'x': 0x55f,
        'y': -0x1c2
      }, {
        'x': 0x62c,
        'y': 0x5
      }], [{
        'x': -0xc8,
        'y': -0x1ae
      }, {
        'x': 0x7d,
        'y': -0x16d
      }, {
        'x': -0x267,
        'y': 0x6e
      }, {
        'x': -0x15e,
        'y': 0x29e
      }], [{
        'x': 0x62c,
        'y': 0x5
      }, {
        'x': 0x78f,
        'y': 0x442
      }, {
        'x': 0x3de,
        'y': 0x555
      }, {
        'x': 0x3c0,
        'y': 0x40b
      }], [{
        'x': -0x15e,
        'y': 0x29e
      }, {
        'x': 0x55,
        'y': 0x6a4
      }, {
        'x': 0x474,
        'y': 0x64f
      }, {
        'x': 0x3c0,
        'y': 0x40b
      }], [{
        'x': 0x3c0,
        'y': 0x40b
      }, {
        'x': 0x361,
        'y': 0x2f3
      }, {
        'x': 0x2bc,
        'y': 0x1b3
      }, {
        'x': 0x1a4,
        'y': 0xcd
      }]], this.pathArray = [[[0x0, 0x2, 0x4, 0x6, 0x7, 0x9, 0xb], [0x0, 0x2, 0x4, 0x6, 0x8, 0xa, 0xb]], [[0x1, 0x3, 0x5, 0x6, 0x7, 0x9, 0xb], [0x1, 0x3, 0x5, 0x6, 0x8, 0xa, 0xb]]], this.buildAreas = [{
        'x': 0x4cc,
        'y': -0x467,
        'r': 0xfa
      }, {
        'x': -0x27e,
        'y': 0x1fa,
        'r': 0xfa
      }, {
        'x': 0x25f,
        'y': -0x22f,
        'r': 0xfa
      }, {
        'x': -0x640,
        'y': -0x1aa,
        'r': 0xfa
      }, {
        'x': 0x77,
        'y': -0x4a,
        'r': 0xfa
      }, {
        'x': -0x1f7,
        'y': -0x26d,
        'r': 0xfa
      }, {
        'x': 0x2b0,
        'y': 0x4a3,
        'r': 0xfa
      }, {
        'x': 0x4e5,
        'y': 0x373,
        'r': 0xfa
      }];
    }
  }), EntityGameMarblePathLevel20 = EntityGameMarblePathLevel.extend({
    'levelVariables': function () {
      for (var _0x38692d = [], _0x294aac = 0x0; 0x5 > _0x294aac; _0x294aac++) _0x38692d.push({
        'type': 'normal-1',
        'path': [0x0, 0x6]
      }), _0x38692d.push({
        'type': 'normal-2',
        'path': [0x1, 0x7]
      }), _0x38692d.push({
        'type': 'normal-1',
        'path': [0x2, 0x8]
      }), _0x38692d.push({
        'type': 'normal-2',
        'path': [0x3, 0x9]
      }), _0x38692d.push({
        'type': 'normal-1',
        'path': [0x4, 0xa]
      }), _0x38692d.push({
        'type': 'normal-2',
        'path': [0x5, 0xb]
      });
      this.editor.waves.push({
        'amount': 0x6,
        'comp': _0x38692d,
        'spacing': 0x8
      });
    },
    'levelEditor': function () {
      this.bezierArray = [[{
        'x': 0x460,
        'y': -0x64a
      }, {
        'x': 0x39d,
        'y': -0x465
      }, {
        'x': 0x15e,
        'y': -0x573
      }, {
        'x': 0x1ea,
        'y': -0x389
      }], [{
        'x': -0x5c3,
        'y': -0x50a
      }, {
        'x': -0x505,
        'y': -0x6ea
      }, {
        'x': -0x2b2,
        'y': -0x77b
      }, {
        'x': -0x2bc,
        'y': -0x541
      }], [{
        'x': -0x69f,
        'y': -0x226
      }, {
        'x': -0x7ee,
        'y': 0xff
      }, {
        'x': -0x56e,
        'y': 0x1c2
      }, {
        'x': -0x456,
        'y': -0xaa
      }], [{
        'x': -0x26c,
        'y': 0x483
      }, {
        'x': -0x3c5,
        'y': 0x307
      }, {
        'x': -0x5aa,
        'y': 0x294
      }, {
        'x': -0x4bf,
        'y': 0x1db
      }], [{
        'x': 0x57d,
        'y': 0x578
      }, {
        'x': 0x71c,
        'y': 0x285
      }, {
        'x': 0x456,
        'y': 0x1ef
      }, {
        'x': 0x334,
        'y': 0x35c
      }], [{
        'x': 0x636,
        'y': -0x55a
      }, {
        'x': 0x6c7,
        'y': -0x2bc
      }, {
        'x': 0x384,
        'y': -0x39d
      }, {
        'x': 0x4b5,
        'y': -0x140
      }], [{
        'x': 0x1ea,
        'y': -0x389
      }, {
        'x': 0x24e,
        'y': -0x294
      }, {
        'x': 0x253,
        'y': -0xbe
      }, {
        'x': 0xa0,
        'y': 0x0
      }], [{
        'x': -0x2bc,
        'y': -0x541
      }, {
        'x': -0x2b2,
        'y': -0x1d1
      }, {
        'x': 0x28,
        'y': -0x6d1
      }, {
        'x': 0xa0,
        'y': 0x0
      }], [{
        'x': -0x456,
        'y': -0xaa
      }, {
        'x': -0x3e8,
        'y': -0x1b3
      }, {
        'x': -0x2b2,
        'y': -0x217
      }, {
        'x': 0xa0,
        'y': 0x0
      }], [{
        'x': -0x4bf,
        'y': 0x1db
      }, {
        'x': -0x41a,
        'y': 0x145
      }, {
        'x': -0x262,
        'y': 0x276
      }, {
        'x': 0xa0,
        'y': 0x0
      }], [{
        'x': 0x334,
        'y': 0x35c
      }, {
        'x': 0x145,
        'y': 0x573
      }, {
        'x': -0x276,
        'y': 0x514
      }, {
        'x': 0xa0,
        'y': 0x0
      }], [{
        'x': 0x4b5,
        'y': -0x140
      }, {
        'x': 0x5aa,
        'y': 0x2d
      }, {
        'x': 0x3cf,
        'y': 0x249
      }, {
        'x': 0xa0,
        'y': 0x0
      }]], this.pathArray = [[[0x0, 0x6]], [[0x1, 0x7]], [[0x2, 0x8]], [[0x3, 0x9]], [[0x4, 0xa]], [[0x5, 0xb]]], this.buildAreas = [{
        'x': 0x37c,
        'y': -0x192,
        'r': 0xfa
      }, {
        'x': 0xdb,
        'y': -0x3e9,
        'r': 0xfa
      }, {
        'x': -0x26d,
        'y': -0x29b,
        'r': 0xfa
      }, {
        'x': -0x5a7,
        'y': 0x1ef,
        'r': 0xfa
      }, {
        'x': -0x19f,
        'y': 0x3c7,
        'r': 0xfa
      }, {
        'x': 0x319,
        'y': 0x25a,
        'r': 0xfa
      }, {
        'x': 0x5dc,
        'y': -0x1f8,
        'r': 0xfa
      }, {
        'x': 0x334,
        'y': -0x3bf,
        'r': 0xfa
      }, {
        'x': -0x3a7,
        'y': -0x51b,
        'r': 0xfa
      }, {
        'x': -0x5a9,
        'y': -0x28,
        'r': 0xfa
      }, {
        'x': -0x324,
        'y': 0x2bd,
        'r': 0xfa
      }, {
        'x': 0x4f0,
        'y': 0x3ce,
        'r': 0xfa
      }, {
        'x': 0x17c,
        'y': 0x2f9,
        'r': 0xfa
      }];
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.controllers.controller').requires('impact.entity').defines(function () {
  EntityController = ig.Entity.extend({
    'levelLayoutDefault': new ig.Image('media/graphics/sprites/interface/levels/level-1-background.jpg'),
    'levelLayout': [new ig.Image('media/graphics/sprites/interface/levels/level-1-background.jpg'), new ig.Image('media/graphics/sprites/interface/levels/level-2-background.jpg'), new ig.Image('media/graphics/sprites/interface/levels/level-3-background.jpg')],
    '_arrayButtons': [],
    'init': function (_0x3eaa54, _0x1e68fb, _0x28f5f0) {
      this.parent(_0x3eaa54, _0x1e68fb, _0x28f5f0), this.popupActive = null;
    },
    'update': function () {
      this.parent();
    },
    'spawnElements': function () {},
    'addButtonToArray': function (_0x212739) {
      this._arrayButtons.push(_0x212739);
    },
    'removeAllButtonFromArray': function () {
      for (; 0x0 < this._arrayButtons.length;) this._arrayButtons.pop().kill();
    },
    'enableAllbuttons': function () {
      for (var _0x3a222e = 0x0; _0x3a222e < this._arrayButtons.length; _0x3a222e++) this._arrayButtons[_0x3a222e].text != _STRINGS.Game.Ready && this._arrayButtons[_0x3a222e].enableClick();
    },
    'disableAllButtons': function () {
      for (var _0x3fe5cf = 0x0; _0x3fe5cf < this._arrayButtons.length; _0x3fe5cf++) this._arrayButtons[_0x3fe5cf].disableClick();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.controllers.controller-layer').requires('game.plugins.effects', 'game.entities.controllers.controller').defines(function () {
  EntityControllerForeground = EntityController.extend({
    'warning': new ig.Image('media/graphics/sprites/interface/enemy-indicator.png'),
    'zIndex': 0x1f40,
    'init': function (_0x256570, _0x404a4d, _0xf4e5d3) {
      this.parent(_0x256570, _0x404a4d, _0xf4e5d3);
    },
    'draw': function () {
      var _0x594c9b = ig.system.context,
        _0x4d0508 = ig.game.GameController.marblePathEditor;
      if (0x0 < _0x4d0508.editor.locations.spawns.length && _0x4d0508.drawEndPoints) {
        _0x594c9b.save(), _0x594c9b.translate(-ig.game.screen.x, -ig.game.screen.y);
        for (var _0x2294d7 = 0x0; _0x2294d7 < _0x4d0508.editor.locations.spawns.length; _0x2294d7++) {
          var _0x549131 = _0x4d0508.editor.locations.spawns[_0x2294d7];
          _0x4d0508.drawLoc.spawn.draw(_0x549131.pos.x + _0x549131.size.x / 0x2 - _0x4d0508.drawLoc.spawn.width / 0x2, _0x549131.pos.y + _0x549131.size.y / 0x2 - this.drawLoc.spawn.height / 0x2);
        }
        for (_0x2294d7 = 0x0; _0x2294d7 < _0x4d0508.editor.locations.bases.length; _0x2294d7++) _0x549131 = _0x4d0508.editor.locations.bases[_0x2294d7], _0x4d0508.drawLoc.base.draw(_0x549131.pos.x + _0x549131.size.x / 0x2 - _0x4d0508.drawLoc.base.width / 0x2, _0x549131.pos.y + _0x549131.size.y / 0x2 - this.drawLoc.base.height / 0x2);
        _0x594c9b.restore();
      }
      if (0x0 < _0x4d0508.waveSpawnLocations.length && _0x4d0508.wave.composition[_0x4d0508.wave.current] && 0x0 == ig.game.getEntitiesByType(EntityGameMarble).length) for (_0x2294d7 = 0x0; _0x2294d7 < _0x4d0508.waveSpawnLocations.length; _0x2294d7++) {
        var _0x549131 = _0x4d0508.waveSpawnLocations[_0x2294d7],
          _0x567179 = _0x549131.pos.x + _0x549131.size.x / 0x2,
          _0x549131 = _0x549131.pos.y + _0x549131.size.y / 0x2,
          _0x3aa8d6 = -ig.game.screen.x,
          _0x4c1292 = -ig.game.screen.y;
        ig.game.screen.x + 0xc8 >= _0x567179 && (_0x3aa8d6 = -_0x567179 + 0xc8), ig.game.screen.x - 0xc8 + ig.system.width <= _0x567179 && (_0x3aa8d6 = -_0x567179 - 0xc8 + ig.system.width), ig.game.screen.y + 0xc8 >= _0x549131 && (_0x4c1292 = -_0x549131 + 0xc8), ig.game.screen.y - 0xc8 + ig.system.height <= _0x549131 && (_0x4c1292 = -_0x549131 - 0xc8 + ig.system.height);
        var _0x532a8a = this.warning,
          _0x4ae546 = Math.abs(ig.system.fps / 0x2 - ig.game.fpsCounter % ig.system.fps) / (ig.system.fps / 0x2),
          _0x4ae546 = 0x1 <= _0x4ae546 ? 0x1 : _0x4ae546 + 0.25;
        _0x594c9b.save(), _0x594c9b.translate(_0x3aa8d6 + _0x567179, _0x4c1292 + _0x549131), _0x594c9b.fillStyle = 'red', _0x594c9b.beginPath(), _0x594c9b.arc(0x0, 0x0, (_0x532a8a.width + _0x532a8a.height) / 0x3, 0x0, 0x2 * Math.PI), _0x594c9b.closePath(), _0x594c9b.globalAlpha = _0x4ae546, _0x532a8a.draw(-_0x532a8a.width / 0x2, -_0x532a8a.height / 0x2), _0x594c9b.globalAlpha = 0x1, _0x594c9b.restore();
      }
    }
  }), EntityControllerMidground = EntityController.extend({
    'zIndex': 0x9c4,
    'init': function (_0x1eded4, _0x45ab18, _0xca7ce5) {
      this.parent(_0x1eded4, _0x45ab18, _0xca7ce5), ig.Effects.reset();
    },
    'draw': function () {
      ig.Effects.update(0x0);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.popups.panel').requires('impact.entity').defines(function () {
  EntityPanel = ig.Entity.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/interface/panel-back.png', 0x488, 0x446),
    'size': {
      'x': 0x488,
      'y': 0x446
    },
    'zIndex': 0x2af8,
    'isEntity': !0x1,
    'isVisible': !0x0,
    'rewardImage': new ig.Image('media/graphics/sprites/interface/preview-reward-antidote.png'),
    'init': function (_0x55df3f, _0x2b1424, _0x1fac61) {
      this.parent(_0x55df3f, _0x2b1424, _0x1fac61), this.addAnim('idle', 0x1, [0x0]);
    },
    'drawAdditions': function () {},
    'draw': function () {
      var _0x924b3f = ig.system.context;
      _0x924b3f.fillStyle = 'black', _0x924b3f.globalAlpha = 0.5, _0x924b3f.fillRect(0x0, 0x0, ig.system.width, ig.system.height), _0x924b3f.globalAlpha = 0x1, this.parent(), this.drawAdditions();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.text').requires('impact.entity').defines(function () {
  EntityText = ig.Entity.extend({
    'text': '',
    'size': {
      'x': 0x20,
      'y': 0x20
    },
    '_wmDrawBox': !0x0,
    '_wmBoxColor': "rgba(255, 255, 255, 0.5)",
    'zIndex': 0x2710,
    'init': function (_0x144997, _0x587144, _0x2a84f1) {
      this.parent(_0x144997, _0x587144, _0x2a84f1), 'undefined' == typeof wm && _0x2a84f1 && (this.name = _0x2a84f1.name, this.useLanguageFile = _0x2a84f1.useLanguageFile, this.languageFileSectionName = _0x2a84f1.languageFileSectionName, this.text = eval(this.useLanguageFile) ? ig.game.language.selected[this.languageFileSectionName][_0x2a84f1.text] : _0x2a84f1.text, this.fontSize = _0x2a84f1.fontSize, this.fontSize || (this.fontSize = '24'), this.fontStyle = _0x2a84f1.fontStyle, this.fontStyle || (this.fontStyle = 'Arial'), this.fontWeight = _0x2a84f1.fontWeight, this.fontWeight || (this.fontWeight = 'bold'), this.fontColor = _0x2a84f1.fontColor, this.fontColor || (this.fontColor = '#fff'), this.backgroundBorderColor = _0x2a84f1.backgroundBorderColor, this.backgroundColor = _0x2a84f1.backgroundColor, this.backgroundHeight = _0x2a84f1.backgroundHeight);
    },
    'draw': function () {
      this.parent(), this.backgroundBorderColor && (ig.system.context.fillStyle = this.backgroundBorderColor, ig.system.context.fillRect(0x0, this.pos.y - this.size.y + 0xa - 0x5, ig.system.width, this.backgroundHeight + 0xa)), this.backgroundColor && (ig.system.context.fillStyle = this.backgroundColor, ig.system.context.fillRect(0x0, this.pos.y - this.size.y + 0xa, ig.system.width, this.backgroundHeight)), 'undefined' == typeof wm && (ig.system.context.fillStyle = this.fontColor, ig.system.context.textAlign = 'left', ig.system.context.font = this.fontWeight + " " + this.fontSize + "px " + this.fontStyle, ig.system.context.fillText(this.text, this.pos.x - ig.system.context.measureText(this.text).width / 0x2, this.pos.y + this.size.y));
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.interface.icon-sound').requires('impact.entity').defines(function () {
  EntityIconSound = ig.Entity.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/interface/icon-sfx.png', 0x40, 0x40),
    'size': {
      'x': 0x40,
      'y': 0x40
    },
    'zIndex': 0x2711,
    'isEntity': !0x1,
    'isVisible': !0x0,
    'init': function (_0x441c70, _0x29a62a, _0x5112dd) {
      this.parent(_0x441c70, _0x29a62a, _0x5112dd), this.addAnim('idle', 0x1, [0x0]);
    },
    'update': function () {
      this.parent();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.interface.icon-music').requires('impact.entity').defines(function () {
  EntityIconMusic = ig.Entity.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/interface/icon-music.png', 0x40, 0x40),
    'size': {
      'x': 0x40,
      'y': 0x40
    },
    'zIndex': 0x2711,
    'isEntity': !0x1,
    'isVisible': !0x0,
    'init': function (_0x36bb5a, _0x35b51d, _0x27215d) {
      this.parent(_0x36bb5a, _0x35b51d, _0x27215d), this.addAnim('idle', 0x1, [0x0]);
    },
    'update': function () {
      this.parent();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-onoff').requires('game.entities.buttons.button').defines(function () {
  EntityButtonOnoff = EntityButton.extend({
    'toggle': {
      'bgm': new ig.Image('media/graphics/sprites/buttons/toggle-music.png'),
      'sfx': new ig.Image('media/graphics/sprites/buttons/toggle-sound.png')
    },
    'size': {
      'x': 0x171,
      'y': 0xb1
    },
    '_mode': null,
    'enableEffect': !0x1,
    'init': function (_0x41bb6c, _0x483468, _0x4dbfb4) {
      this.parent(_0x41bb6c, _0x483468, _0x4dbfb4), 'bgm' == this.name ? (this.animSheet = new ig.AnimationSheet(this.toggle.bgm.path, this.size.x, this.size.y), this._mode = 0x0 < ig.soundHandler.bgmPlayer.getVolume() ? 'on' : 'off') : (this.animSheet = new ig.AnimationSheet(this.toggle.sfx.path, this.size.x, this.size.y), this._mode = 0x0 < ig.soundHandler.sfxPlayer.getVolume() ? 'on' : 'off'), this.addAnim('on', 0x1, [0x1]), this.addAnim('off', 0x1, [0x0]), this.currentAnim = 'on' == this._mode ? this.anims.on : this.anims.off;
    },
    'update': function () {
      this.parent();
    },
    'handleClick': function () {
      this.parent(), this.disable = !0x1, ig.soundHandler.sfxPlayer.play('click'), 'on' == this._mode ? (this._mode = 'off', this.currentAnim = this.anims.off, 'bgm' == this.name ? ig.game.setMusicVolume(0x0) : ig.game.setSoundVolume(0x0)) : (this._mode = 'on', this.currentAnim = this.anims.on, 'bgm' == this.name ? ig.game.setMusicVolume(ig.game.currentBGMVolume) : ig.game.setSoundVolume(ig.game.currentBGMVolume));
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-home').requires('game.entities.buttons.button').defines(function () {
  EntityButtonHome = EntityButton.extend({
    'btnImage': new ig.Image('media/graphics/sprites/buttons/button-home.png'),
    'init': function (_0x227341, _0x2ab0f9, _0x3202b7) {
      this.parent(_0x227341, _0x2ab0f9, _0x3202b7);
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      this.locked || (ig.soundHandler.sfxPlayer.play('click'), this.parent());
    },
    'handleClick': function () {
      this.parent();
      switch (this.controller.popupActive) {
        case 'settings':
          this.controller.hideSettingsPopup && this.controller.hideSettingsPopup();
          break;
        case 'reward':
          this.controller.hideRewardPopup && this.controller.hideRewardPopup();
          break;
        case 'gameOver':
          this.controller.hideGameOverPopup && (this.controller.hideGameOverPopup(), setTimeout(ig.game.director.jumpTo(LevelMenu), 0x2710));
          break;
        case 'gameWin':
          this.controller.hideGameWinPopup && (this.controller.hideGameWinPopup(), setTimeout(ig.game.director.jumpTo(LevelMenu), 0x2710));
          break;
        case 'pause':
          this.controller.hidePausePopup && (this.controller.hidePausePopup(), setTimeout(ig.game.director.jumpTo(LevelMenu), 0x2710));
          break;
        case 'result':
          this.controller.hideResultPopup && (this.controller.hideResultPopup(), setTimeout(ig.game.director.jumpTo(LevelMenu), 0x2710));
      }
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-next').requires('game.entities.buttons.button').defines(function () {
  EntityButtonNext = EntityButton.extend({
    'btnImage': new ig.Image('media/graphics/sprites/buttons/button-continue.png'),
    'init': function (_0x3f188f, _0x2952d1, _0x4348cf) {
      this.parent(_0x3f188f, _0x2952d1, _0x4348cf);
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      ig.soundHandler.sfxPlayer.play('click'), this.parent();
    },
    'handleClick': function () {
      ig.game.director.nextLevel();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-replay').requires('game.entities.buttons.button').defines(function () {
  EntityButtonReplay = EntityButton.extend({
    'btnImage': new ig.Image('media/graphics/sprites/buttons/button-replay.png'),
    'init': function (_0x4d77d0, _0x321e99, _0x45dedc) {
      this.parent(_0x4d77d0, _0x321e99, _0x45dedc);
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      ig.soundHandler.sfxPlayer.play('click'), this.parent();
    },
    'handleClick': function () {
      ig.game.director.reloadLevel();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-continue').requires('game.entities.buttons.button').defines(function () {
  EntityButtonContinue = EntityButton.extend({
    'btnImage': new ig.Image('media/graphics/sprites/buttons/button-continue.png'),
    'init': function (_0x473b4f, _0x4a69e1, _0x207469) {
      this.parent(_0x473b4f, _0x4a69e1, _0x207469), this.addAnim('idle', 0x1, [0x0]);
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      this.locked || (ig.soundHandler.sfxPlayer.play('click'), this.parent());
    },
    'handleClick': function () {
      ig.game.cameraControl.startPos = null, this.controller.hidePausePopup(), this.controller.resumeGame();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-text').requires('game.entities.buttons.button').defines(function () {
  EntityButtonText = EntityButton.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/buttons/button-text.png', 0x15e, 0xb1),
    'size': {
      'x': 0x15e,
      'y': 0xb1
    },
    'applyAnimSheet': null,
    'appliedAnimSheet': {
      'camera': new ig.AnimationSheet('media/graphics/sprites/buttons/button-center.png', 0xa5, 0xb1),
      'double': new ig.AnimationSheet('media/graphics/sprites/buttons/button-double.png', 0x15e, 0xb1),
      'left': new ig.AnimationSheet('media/graphics/sprites/buttons/button-level-left.png', 0xa5, 0xb1),
      'right': new ig.AnimationSheet('media/graphics/sprites/buttons/button-level-right.png', 0xa5, 0xb1),
      'claim': new ig.AnimationSheet('media/graphics/sprites/buttons/button-claim.png', 0x15e, 0xb1),
      'cancel': new ig.AnimationSheet('media/graphics/sprites/buttons/button-cancel.png', 0xa5, 0xb1)
    },
    'init': function (_0x4e8fd5, _0x1b4c0d, _0x715f85) {
      this.parent(_0x4e8fd5, _0x1b4c0d, _0x715f85), null != this.applyAnimSheet && (this.animSheet = this.appliedAnimSheet[this.applyAnimSheet]), this.size = {
        'x': this.animSheet.width,
        'y': this.animSheet.height
      }, this.addAnim('idle', 0x1, [0x0]), this.currentAlpha = 0x1;
    },
    'update': function () {
      this.parent(), this.updateExtra();
    },
    'updateExtra': function () {},
    'pressEffect': function () {
      ig.soundHandler.sfxPlayer.play('click'), this.parent();
    },
    'handleClick': function () {
      this.parent(), this.callback ? 'function' == typeof this.callback && this.callback() : console.log("No callback function");
    },
    'draw': function () {
      var _0x1cd362 = ig.system.context;
      _0x1cd362.globalAlpha = !isNaN(this.currentAlpha) ? this.currentAlpha : this.disable ? 0.5 : 0x1, _0x1cd362.globalAlpha = this.text != _STRINGS.Game.Ready ? _0x1cd362.globalAlpha : this.disable ? 0x0 : 0x1, this.parent(), _0x1cd362.globalAlpha = 0x1, null == this.applyAnimSheet && (_0x1cd362 = ig.system.context, _0x1cd362.save(), _0x1cd362.globalAlpha = this.disable ? 0.5 : 0x1, _0x1cd362.globalAlpha = this.text != _STRINGS.Game.Ready ? _0x1cd362.globalAlpha : this.disable ? 0x0 : 0x1, _0x1cd362.translate(-ig.game.screen.x, -ig.game.screen.y), _0x1cd362.strokeStyle = 'black', _0x1cd362.fillStyle = 'white', _0x1cd362.miterLimit = 0x3, _0x1cd362.lineJoin = 'circle', _0x1cd362.textAlign = 'center', _0x1cd362.font = "70px segoe", _0x1cd362.lineWidth = 0xe, _0x1cd362.strokeText(this.text, this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2 + 17.5), _0x1cd362.lineWidth = 0x1, _0x1cd362.fillText(this.text, this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2 + 17.5), _0x1cd362.globalAlpha = 0x1, _0x1cd362.restore());
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.popups.popup').requires('impact.entity', 'game.entities.popups.panel', 'game.entities.text', 'game.entities.interface.icon-sound', 'game.entities.interface.icon-music', 'game.entities.buttons.button-onoff', 'game.entities.buttons.button-home', 'game.entities.buttons.button-next', 'game.entities.buttons.button-replay', 'game.entities.buttons.button-continue', 'game.entities.buttons.button-text').defines(function () {
  EntityPopup = ig.Entity.extend({
    '_arrayButtons': [],
    '_arrayElements': [],
    '_posYBegin': 0x2ee,
    'zIndex': 0x2af8,
    'isEntity': !0x1,
    'isVisible': !0x0,
    'init': function (_0x2b6bac, _0x21ffb6, _0x31089b) {
      this.parent(_0x2b6bac, _0x21ffb6, _0x31089b);
    },
    'update': function () {
      this.parent();
    },
    'spawnElements': function () {},
    'showPopup': function () {
      for (var _0x4a5061 = 0x0; _0x4a5061 < this._arrayElements.length; _0x4a5061++) this.goto(this._arrayElements[_0x4a5061], this._arrayElements[_0x4a5061].anchoredPositionX, this._arrayElements[_0x4a5061].anchoredPositionY + this._posYBegin, 0.2, 0x0, 'show', null);
    },
    'hidePopup': function () {
      this.goto(this._arrayElements[0x0], this._arrayElements[0x0].anchoredPositionX, this._arrayElements[0x0].anchoredPositionY - this._posYBegin, 0.2, 0x0, 'hide', this.removeAllElementFromArray.bind(this));
      for (var _0xcc7977 = 0x1; _0xcc7977 < this._arrayElements.length; _0xcc7977++) this.goto(this._arrayElements[_0xcc7977], this._arrayElements[_0xcc7977].anchoredPositionX, this._arrayElements[_0xcc7977].anchoredPositionY - this._posYBegin, 0.2, 0x0, 'hide', null);
    },
    'addElementToArray': function (_0x15cdd5) {
      this._arrayElements.push(_0x15cdd5);
    },
    'removeAllElementFromArray': function () {
      for (; 0x0 < this._arrayElements.length;) this._arrayElements.pop().kill();
    },
    'addButtonToArray': function (_0x19dc04) {
      this._arrayButtons.push(_0x19dc04);
    },
    'removeAllButtonFromArray': function () {
      for (; 0x0 < this._arrayButtons.length;) this._arrayButtons.pop().kill();
    },
    'enableAllbuttons': function () {
      for (var _0x4de2a0 = 0x0; _0x4de2a0 < this._arrayButtons.length; _0x4de2a0++) this._arrayButtons[_0x4de2a0].enableClick();
    },
    'disableAllButtons': function () {
      for (var _0x15fd3a = 0x0; _0x15fd3a < this._arrayButtons.length; _0x15fd3a++) this._arrayButtons[_0x15fd3a].disableClick();
    },
    'goto': function (_0x312e50, _0x3439a9, _0x13dbab, _0x5b9b72, _0x4faaa9, _0x8446cb, _0x942c40) {
      _0x312e50.tween({
        'anchoredPositionY': _0x13dbab - 0x82
      }, _0x5b9b72, {
        'onComplete': function () {
          'hide' == _0x8446cb && _0x942c40 && _0x942c40();
        }.bind(_0x312e50),
        'delay': _0x4faaa9,
        'easing': ig.Tween.Easing.Back.EaseOut
      }).start();
    },
    'gotoScale': function (_0x3b3208, _0x5472ec, _0x25a2ef, _0x33bbd4) {
      _0x3b3208.tween({
        'scale': {
          'x': _0x5472ec,
          'y': _0x5472ec
        }
      }, _0x25a2ef, {
        'onUpdate': function () {
          _0x3b3208.setScale(this.scale.x, this.scale.y);
        }.bind(_0x3b3208),
        'onComplete': function () {}.bind(_0x3b3208),
        'delay': _0x33bbd4,
        'easing': ig.Tween.Easing.Back.EaseOut
      }).start();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.popups.popup-reward').requires('game.entities.popups.popup').defines(function () {
  EntityPopupReward = EntityPopup.extend({
    'init': function (_0x324cca, _0x1ab0d8, _0x4b70fc) {
      this.parent(_0x324cca, _0x1ab0d8, _0x4b70fc), this.spawnElements();
    },
    'update': function () {
      this.parent();
    },
    'spawnElements': function () {
      this.panel = ig.game.spawnEntity(EntityPanel, this.x, this.y, {
        'control': this,
        'drawAdditions': function () {
          var _0x5eaf6b = ig.system.context,
            _0x4f41bc = this.anchoredPositionX + this.size.x / 0x2 + ig.system.width / 0x2,
            _0x1b0a34 = this.anchoredPositionY + this.size.y / 0x2 + ig.system.height / 0x2;
          _0x5eaf6b.save(), _0x5eaf6b.translate(_0x4f41bc, _0x1b0a34 + 0x50), _0x5eaf6b.font = "80px segoe", _0x5eaf6b.strokeStyle = 'black', _0x5eaf6b.fillStyle = 'white', _0x5eaf6b.textAlign = 'center', _0x5eaf6b.miterLimit = 0x2, _0x5eaf6b.lineJoin = 'circle', _0x5eaf6b.lineWidth = 0x10, _0x5eaf6b.strokeText(_STRINGS.Game.Defeated.Info1, 0x0, -0x30), _0x5eaf6b.strokeText(_STRINGS.Game.Defeated.Info2, 0x0, 0x30), _0x5eaf6b.lineWidth = 0x1, _0x5eaf6b.fillText(_STRINGS.Game.Defeated.Info1, 0x0, -0x30), _0x5eaf6b.fillText(_STRINGS.Game.Defeated.Info2, 0x0, 0x30), _0x5eaf6b.restore();
        }
      }), this.title = ig.game.spawnEntity(EntityText, this.x, this.y, {
        'fontSize': 0x64,
        'fontColor': '#000000',
        'text': _STRINGS.Game.Defeated.Title,
        'zIndex': this.zIndex + 0x5,
        'fontStyle': 'segoe'
      }), this.acceptButton = ig.game.spawnEntity(EntityButtonText, this.x, this.y, {
        'applyAnimSheet': 'claim',
        'controller': this.controller,
        'text': 'Accept',
        'callback': function () {
          this.controller.showRewardedVideoAd({
            'type': 'health',
            'amount': _SETTINGS.RewardedVideo.Recover
          });
        }.bind(this)
      }), this.cancelButton = ig.game.spawnEntity(EntityButtonText, this.x, this.y, {
        'applyAnimSheet': 'cancel',
        'controller': this.controller,
        'text': 'Cancel',
        'callback': function () {
          console.log("Reward failed"), this.controller.hideRewardPopup(), this.controller.showGameOverPopup();
        }.bind(this)
      }), this.panel.setAnchoredPosition(-this.panel.size.x / 0x2, -this.panel.size.y / 0x2 - this._posYBegin, 'center-middle'), this.title.setAnchoredPosition(0x0, this.panel.anchoredPositionY + 0.75 * this.title.fontSize + 0.25 * this.panel.size.y, 'center-middle');
      var _0x339c1e = this.acceptButton.size.x + this.cancelButton.size.x + 0x1e;
      this.acceptButton.setAnchoredPosition(-_0x339c1e / 0x2, this.panel.anchoredPositionY + this.panel.size.y - this.acceptButton.size.y - 0x64, 'center-middle'), this.cancelButton.setAnchoredPosition(-_0x339c1e / 0x2 + 0x1e + this.acceptButton.size.x, this.panel.anchoredPositionY + this.panel.size.y - this.cancelButton.size.y - 0x64, 'center-middle'), this.addElementToArray(this.panel), this.addElementToArray(this.title), this.addElementToArray(this.acceptButton), this.addElementToArray(this.cancelButton);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.popups.popup-game-over').requires('game.entities.popups.popup').defines(function () {
  EntityPopupGameOver = EntityPopup.extend({
    'init': function (_0x4b553b, _0x20d49a, _0x4d29f4) {
      this.parent(_0x4b553b, _0x20d49a, _0x4d29f4), this.spawnElements(), this.removeEntities();
    },
    'update': function () {
      this.parent();
    },
    'removeEntities': function () {},
    'spawnElements': function () {
      this.panel = ig.game.spawnEntity(EntityPanel, this.x, this.y, {
        'control': this,
        'drawAdditions': function () {
          var _0x2d2488 = ig.system.context,
            _0x2f5d04 = this.anchoredPositionX + this.size.x / 0x2 + ig.system.width / 0x2,
            _0x312fd1 = this.anchoredPositionY + this.size.y / 0x2 + ig.system.height / 0x2;
          _0x2d2488.save(), _0x2d2488.translate(_0x2f5d04, _0x312fd1 + 0x50), _0x2f5d04 = 0x50, _0x2d2488.font = _0x2f5d04 + "px segoe", _0x2d2488.strokeStyle = 'black', _0x2d2488.fillStyle = 'red', _0x2d2488.textAlign = 'center', _0x2d2488.miterLimit = 0x2, _0x2d2488.lineJoin = 'circle', _0x2d2488.lineWidth = 0.2 * _0x2f5d04, _0x2d2488.strokeText(_STRINGS.Game.GameOver.Info1, 0x0, 0.6 * -_0x2f5d04 - 0x32), _0x2d2488.strokeText(_STRINGS.Game.GameOver.Info2, 0x0, 0.6 * _0x2f5d04 - 0x32), _0x2d2488.lineWidth = 0x1, _0x2d2488.fillText(_STRINGS.Game.GameOver.Info1, 0x0, 0.6 * -_0x2f5d04 - 0x32), _0x2d2488.fillText(_STRINGS.Game.GameOver.Info2, 0x0, 0.6 * _0x2f5d04 - 0x32), _0x2f5d04 = 0x46, _0x2d2488.font = _0x2f5d04 + "px segoe", _0x2d2488.strokeStyle = 'black', _0x2d2488.fillStyle = 'yellow', _0x2d2488.textAlign = 'center', _0x2d2488.miterLimit = 0x2, _0x2d2488.lineJoin = 'circle', _0x2d2488.lineWidth = 0.2 * _0x2f5d04, _0x2d2488.strokeText(_STRINGS.Game.GameOver.Score + ": " + ig.game.GameController._currentScore, 0x0, 0.6 * -_0x2f5d04 + 0x91), _0x2d2488.lineWidth = 0x1, _0x2d2488.fillText(_STRINGS.Game.GameOver.Score + ": " + ig.game.GameController._currentScore, 0x0, 0.6 * -_0x2f5d04 + 0x91), _0x2d2488.restore();
        }
      }), this.title = ig.game.spawnEntity(EntityText, this.x, this.y, {
        'fontSize': 0x64,
        'fontColor': '#000000',
        'text': _STRINGS.Game.GameOver.Title,
        'zIndex': this.zIndex + 0x5,
        'fontStyle': 'segoe'
      }), this.homeButton = ig.game.spawnEntity(EntityButtonHome, this.x, this.y, {
        'controller': this.controller
      }), this.replayButton = ig.game.spawnEntity(EntityButtonReplay, this.x, this.y, {
        'controller': this.controller
      }), this.panel.setAnchoredPosition(-this.panel.size.x / 0x2, -this.panel.size.y / 0x2 - this._posYBegin, 'center-middle'), this.title.setAnchoredPosition(0x0, this.panel.anchoredPositionY + 0.75 * this.title.fontSize + 0.25 * this.panel.size.y, 'center-middle'), this.homeButton.setAnchoredPosition(-this.homeButton.size.x / 0x2 - this.homeButton.size.x / 0x2 - 0xf, this.panel.anchoredPositionY + this.panel.size.y - this.homeButton.size.y - 0x64, 'center-middle'), this.replayButton.setAnchoredPosition(-this.replayButton.size.x / 0x2 + this.replayButton.size.x / 0x2 + 0xf, this.panel.anchoredPositionY + this.panel.size.y - this.replayButton.size.y - 0x64, 'center-middle'), this.addElementToArray(this.panel), this.addElementToArray(this.title), this.addElementToArray(this.homeButton), this.addElementToArray(this.replayButton);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.popups.popup-game-win').requires('game.entities.popups.popup').defines(function () {
  EntityPopupGameWin = EntityPopup.extend({
    'init': function (_0x359a9a, _0x1254fc, _0x4da76e) {
      this.parent(_0x359a9a, _0x1254fc, _0x4da76e), this.endLevelReward = {
        'current': 0x1,
        'addition': 0x1
      }, this.spawnElements();
    },
    'update': function () {
      this.parent();
    },
    'spawnElements': function () {
      this.panel = ig.game.spawnEntity(EntityPanel, this.x, this.y, {
        'control': this,
        'drawAdditions': function () {
          var _0x105cac = ig.system.context,
            _0x58430b = this.anchoredPositionX + this.size.x / 0x2 + ig.system.width / 0x2,
            _0x4e88da = this.anchoredPositionY + this.size.y / 0x2 + ig.system.height / 0x2;
          _0x105cac.save(), _0x105cac.translate(_0x58430b, _0x4e88da + 0x3c), _0x105cac.drawImage(this.rewardImage.data, -this.rewardImage.width / 0x2, -this.rewardImage.height / 0x2), _0x105cac.font = "120px segoe", _0x105cac.strokeStyle = 'black', _0x105cac.fillStyle = 'white', _0x105cac.textAlign = 'center', _0x105cac.miterLimit = 0x2, _0x105cac.lineJoin = 'circle', _0x105cac.lineWidth = 0x18, _0x105cac.strokeText('x' + this.control.endLevelReward.current, 0x6e, 0x82), _0x105cac.lineWidth = 0x1, _0x105cac.fillText('x' + this.control.endLevelReward.current, 0x6e, 0x82), _0x105cac.restore();
        }
      }), this.title = ig.game.spawnEntity(EntityText, this.x, this.y, {
        'fontSize': 0x64,
        'fontColor': '#000000',
        'text': _STRINGS.Game.GameWin,
        'zIndex': this.zIndex + 0x5,
        'fontStyle': 'segoe'
      }), this.homeButton = ig.game.spawnEntity(EntityButtonHome, this.x, this.y, {
        'controller': this.controller
      }), _SETTINGS.RewardedVideo.Enabled && (this.acceptButton = ig.game.spawnEntity(EntityButtonText, this.x, this.y, {
        'controller': this.controller,
        'applyAnimSheet': 'double',
        'text': 'Accept',
        'callback': function () {
          this.controller.showRewardedVideoAd({
            'type': 'premium',
            'amount': this.endLevelReward.addition
          });
        }.bind(this),
        'updateExtra': function () {
          this.updateAlphaOfAccept(this.controller.activeReward.premium);
        }.bind(this)
      }), this.addElementToArray(this.acceptButton)), this.panel.setAnchoredPosition(-this.panel.size.x / 0x2, -this.panel.size.y / 0x2 - this._posYBegin, 'center-middle'), this.title.setAnchoredPosition(0x0, this.panel.anchoredPositionY + 0.75 * this.title.fontSize + 0.25 * this.panel.size.y, 'center-middle'), this.addElementToArray(this.panel), this.addElementToArray(this.title), this.addElementToArray(this.homeButton);
      var _0x204c72 = this.acceptButton ? this.acceptButton.size : {
        'x': -0x1e,
        'y': 0x0
      };
      if (ig.game.director.currentLevel >= ig.SaveData.maxedLevels + 0x2) var _0x95f2da = this.homeButton.size.x + _0x204c72.x + 0x1e;else this.nextButton = ig.game.spawnEntity(EntityButtonNext, this.x, this.y, {
        'controller': this.controller
      }), this.addElementToArray(this.nextButton), _0x95f2da = this.homeButton.size.x + this.nextButton.size.x + _0x204c72.x + 0x3c, this.nextButton.setAnchoredPosition(-_0x95f2da / 0x2 + 0x3c + _0x204c72.x + this.homeButton.size.x, this.panel.anchoredPositionY + this.panel.size.y - this.nextButton.size.y - 0x64, 'center-middle');
      this.homeButton.setAnchoredPosition(-_0x95f2da / 0x2 + 0x1e + _0x204c72.x, this.panel.anchoredPositionY + this.panel.size.y - this.homeButton.size.y - 0x64, 'center-middle'), this.acceptButton && this.acceptButton.setAnchoredPosition(-_0x95f2da / 0x2, this.panel.anchoredPositionY + this.panel.size.y - _0x204c72.y - 0x64, 'center-middle'), this.updateAlphaOfAccept(this.controller.activeReward.premium);
    },
    'updateAlphaOfAccept': function (_0x4ffada) {
      this.acceptButton && (this.acceptButton.currentAlpha = !_0x4ffada ? 0.5 : 0x1, this.acceptButton.disable = !_0x4ffada ? !0x0 : !0x1);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.popups.popup-pause').requires('game.entities.popups.popup').defines(function () {
  EntityPopupPause = EntityPopup.extend({
    'init': function (_0x631dc7, _0x16599c, _0x2992cd) {
      this.parent(_0x631dc7, _0x16599c, _0x2992cd), this.spawnElements();
    },
    'update': function () {
      this.parent();
    },
    'spawnElements': function () {
      this.panel = ig.game.spawnEntity(EntityPanel, this.x, this.y, {}), this.title = ig.game.spawnEntity(EntityText, this.x, this.y, {
        'fontSize': 0x64,
        'fontColor': '#000000',
        'text': _STRINGS.Game.Pause,
        'zIndex': this.zIndex + 0x5,
        'fontStyle': 'segoe'
      }), this.onoffButtonBgm = ig.game.spawnEntity(EntityButtonOnoff, this.x, this.y, {
        'controller': this.controller,
        'name': 'bgm'
      }), this.onoffButtonSfx = ig.game.spawnEntity(EntityButtonOnoff, this.x, this.y, {
        'controller': this.controller,
        'name': 'sfx'
      }), this.homeButton = ig.game.spawnEntity(EntityButtonHome, this.x, this.y, {
        'controller': this.controller
      }), this.continueButton = ig.game.spawnEntity(EntityButtonContinue, this.x, this.y, {
        'controller': this.controller
      }), this.replayButton = ig.game.spawnEntity(EntityButtonReplay, this.x, this.y, {
        'controller': this.controller
      }), this.panel.setAnchoredPosition(-this.panel.size.x / 0x2, -this.panel.size.y / 0x2 - this._posYBegin, 'center-middle'), this.title.setAnchoredPosition(0x0, this.panel.anchoredPositionY + 0.75 * this.title.fontSize + 0.25 * this.panel.size.y, 'center-middle'), this.onoffButtonBgm.setAnchoredPosition(-this.onoffButtonBgm.size.x / 0x2, -0x14 - this.onoffButtonBgm.size.y / 0x2 - this._posYBegin, 'center-middle'), this.onoffButtonSfx.setAnchoredPosition(-this.onoffButtonSfx.size.x / 0x2, -0x14 + this.onoffButtonSfx.size.y / 0x2 - this._posYBegin, 'center-middle');
      var _0x35a666 = this.homeButton.size.x + this.continueButton.size.x + this.replayButton.size.x + 0x3c;
      this.continueButton.setAnchoredPosition(-_0x35a666 / 0x2 + 0x3c + this.replayButton.size.x + this.homeButton.size.x, this.panel.anchoredPositionY + this.panel.size.y - this.continueButton.size.y - 0x64, 'center-middle'), this.homeButton.setAnchoredPosition(-_0x35a666 / 0x2 + 0x1e + this.continueButton.size.x, this.panel.anchoredPositionY + this.panel.size.y - this.homeButton.size.y - 0x64, 'center-middle'), this.replayButton.setAnchoredPosition(-_0x35a666 / 0x2, this.panel.anchoredPositionY + this.panel.size.y - this.replayButton.size.y - 0x64, 'center-middle'), this.addElementToArray(this.panel), this.addElementToArray(this.title), this.addElementToArray(this.onoffButtonBgm), this.addElementToArray(this.onoffButtonSfx), this.addElementToArray(this.homeButton), this.addElementToArray(this.continueButton), this.addElementToArray(this.replayButton), this.controller.pauseGame();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-pause').requires('game.entities.buttons.button').defines(function () {
  EntityButtonPause = EntityButton.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/buttons/button-pause.png', 0xa5, 0xb1),
    'size': {
      'x': 0xa5,
      'y': 0xb1
    },
    'zIndex': 0x2710,
    'init': function (_0xddff1b, _0x2cfb6d, _0x40d08c) {
      this.parent(_0xddff1b, _0x2cfb6d, _0x40d08c), this.addAnim('idle', 0x1, [0x0]);
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      ig.game.tutorial || (ig.soundHandler.sfxPlayer.play('click'), this.parent());
    },
    'quickHandleClick': function () {
      ig.game.checkPauseGame = !0x0, this.controller.showPausePopup();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-speed').requires('game.entities.buttons.button').defines(function () {
  EntityButtonSpeed = EntityButton.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/buttons/button-speed-1x.png', 0xa5, 0xb1),
    'size': {
      'x': 0xa5,
      'y': 0xb1
    },
    'zIndex': 0x2710,
    'speedMult': {
      'x1': new ig.Image('media/graphics/sprites/buttons/button-speed-1x.png'),
      'x2': new ig.Image('media/graphics/sprites/buttons/button-speed-2x.png'),
      'x4': new ig.Image('media/graphics/sprites/buttons/button-speed-4x.png')
    },
    'init': function (_0x9e693a, _0x1b46bc, _0x558357) {
      this.parent(_0x9e693a, _0x1b46bc, _0x558357), this.addAnim('idle', 0x1, [0x0]);
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      ig.game.tutorial || (ig.soundHandler.sfxPlayer.play('click'), this.parent());
    },
    'quickHandleClick': function () {
      this.controller.gameSpeed.current++, this.controller.gameSpeed.current >= this.controller.gameSpeed.multipliers.length && (this.controller.gameSpeed.current = 0x0);
    },
    'draw': function () {
      var _0x3ae354 = ig.system.context;
      _0x3ae354.save(), _0x3ae354.translate(-ig.game.screen.x, -ig.game.screen.y), _0x3ae354.drawImage(this.speedMult[String('x' + this.controller.gameSpeed.multipliers[this.controller.gameSpeed.current])].data, this.pos.x, this.pos.y), _0x3ae354.restore();
    }
  }), EntityButtonSpeedPause = EntityButton.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/buttons/button-speed-pause.png', 0xa5, 0xb1),
    'size': {
      'x': 0xa5,
      'y': 0xb1
    },
    'zIndex': 0x2710,
    'init': function (_0x2da444, _0x493100, _0xc8e5f9) {
      this.parent(_0x2da444, _0x493100, _0xc8e5f9), this.addAnim('on', 0x1, [0x0]), this.addAnim('off', 0x1, [0x1]), this.updateImage();
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      ig.soundHandler.sfxPlayer.play('click'), ig.game.tutorial || this.parent();
    },
    'quickHandleClick': function () {
      this.controller.gameSpeed.unpaused = !this.controller.gameSpeed.unpaused, this.updateImage();
    },
    'updateImage': function () {
      this.currentAnim = this.controller.gameSpeed.unpaused ? this.anims.on : this.anims.off;
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-view').requires('game.entities.buttons.button').defines(function () {
  EntityButtonView = EntityButton.extend({
    'animImage': new ig.Image('media/graphics/sprites/buttons/button-view.png'),
    'size': {
      'x': 0xa5,
      'y': 0xb1
    },
    '_mode': null,
    'init': function (_0x53a643, _0x39d283, _0x4fe337) {
      this.parent(_0x53a643, _0x39d283, _0x4fe337), this.animSheet = new ig.AnimationSheet(this.animImage.path, this.size.x, this.size.y), this._mode = ig.game.viewRanges ? 'on' : 'off', this.addAnim('on', 0x1, [0x1]), this.addAnim('off', 0x1, [0x0]), this.currentAnim = 'on' == this._mode ? this.anims.on : this.anims.off;
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      ig.game.tutorial || (ig.soundHandler.sfxPlayer.play('click'), this.parent());
    },
    'quickHandleClick': function () {
      this.parent(), 'on' == this._mode ? (this._mode = 'off', this.currentAnim = this.anims.off, ig.game.viewRanges = !0x1) : (this._mode = 'on', this.currentAnim = this.anims.on, ig.game.viewRanges = !0x0);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.interface.background').requires('impact.entity').defines(function () {
  EntityBackground = ig.Entity.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/interface/background.png', 0x640, 0x640),
    'size': {
      'x': 0x640,
      'y': 0x640
    },
    'sizeori': {
      'x': 0x640,
      'y': 0x640
    },
    'isEntity': !0x1,
    'isVisible': !0x0,
    'currentScaleWidAndHei': null,
    '_alpha': 0x0,
    'init': function (_0x38363b, _0x207e5e, _0x21f0d4) {
      this.parent(_0x38363b, _0x207e5e, _0x21f0d4), this.addAnim('idle', 0x1, [0x0]), this.initData();
    },
    'initData': function () {
      ig.system.width < ig.system.height ? this.setScale(ig.system.height / this.sizeori.y, ig.system.height / this.sizeori.y) : this.setScale(ig.system.width / this.sizeori.x, ig.system.width / this.sizeori.x), this.currentScaleWidAndHei = ig.system.width / ig.system.height;
    },
    'update': function () {
      this.parent(), ig.system.width / ig.system.height != this.currentScaleWidAndHei && (this.currentScaleWidAndHei = ig.system.width / ig.system.height, this.adjustAnchoredPositionButton());
    },
    'adjustAnchoredPositionButton': function () {
      ig.system.width < ig.system.height ? this.setScale(ig.system.height / this.sizeori.y, ig.system.height / this.sizeori.y) : this.setScale(ig.system.width / this.sizeori.x, ig.system.width / this.sizeori.x), this.anchoredPositionX = -this.size.x / 0x2, this.anchoredPositionY = -this.size.y / 0x2;
    },
    'draw': function () {
      this.parent();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.controllers.controller-game').requires('game.entities.gameplay.game-marble-path-level', 'game.entities.controllers.controller-layer', 'game.entities.controllers.controller', 'game.entities.popups.popup-reward', 'game.entities.popups.popup-game-over', 'game.entities.popups.popup-game-win', 'game.entities.popups.popup-pause', 'game.entities.buttons.button-pause', 'game.entities.buttons.button-speed', 'game.entities.buttons.button-view', 'game.entities.buttons.button-text', 'game.entities.text', 'game.entities.interface.background').defines(function () {
  EntityControllerGame = EntityController.extend({
    'zIndex': 0x2710,
    '_currentScore': 0x0,
    '_isPauseGame': !0x1,
    'pointer': null,
    'startTime': 0x0,
    'timeRemain': 0x0,
    'drawProgress': {
      'back': new ig.Image('media/graphics/sprites/interface/progress-back.png'),
      'fill': new ig.Image('media/graphics/sprites/interface/progress-fill.png'),
      'icon': new ig.Image('media/graphics/sprites/interface/progress-icon.png'),
      'flag': new ig.Image('media/graphics/sprites/interface/progress-flag.png')
    },
    'drawValues': {
      'health': new ig.Image('media/graphics/sprites/interface/ui-values-health.png'),
      'currency': new ig.Image('media/graphics/sprites/interface/ui-values-currency.png'),
      'premiums': new ig.Image('media/graphics/sprites/interface/ui-values-premiums.png')
    },
    'init': function (_0x5dbec1, _0x44ab7d, _0x2f8ad8) {
      this.parent(_0x5dbec1, _0x44ab7d, _0x2f8ad8), ig.game.GameController = this, ig.game.checkPauseGame = !0x1, ig.game.oneReady = !0x0, ig.game.readyRemoved = 0x0, this.initData();
    },
    'initData': function () {
      this.loadSessionData(), this.spawnElements(), this.startGame();
    },
    'setTimeOutStartGame': function () {
      0x0 < this.timeRemain && (this.startTime = Date.now(), this.prepStartGame = setTimeout(this.startGame.bind(this), this.timeRemain));
    },
    'clearTimeOutStartGame': function () {
      0x0 < this.timeRemain && (this.timeRemain -= Date.now() - this.startTime, window.clearTimeout(this.prepStartGame));
    },
    'startGame': function () {},
    'update': function () {
      this.parent();
    },
    'reset': function () {},
    'draw': function () {
      var _0x2eac62 = ig.system.context;
      _0x2eac62.save(), _0x2eac62.translate(0x0, 0x0);
      if (0x0 < this.bloodEffect) {
        var _0x4de7cc = 0x0,
          _0x1fb9c1 = 0x0,
          _0x3a598c = 0x0,
          _0x1bd8af = 0x0,
          _0x4de7cc = ig.system.height <= ig.system.width ? 0x0 : -(ig.system.height - ig.system.width) / 0x2,
          _0x1fb9c1 = ig.system.width <= ig.system.height ? 0x0 : -(ig.system.width - ig.system.height) / 0x2,
          _0x3a598c = ig.system.height <= ig.system.width ? ig.system.width : ig.system.width + (ig.system.height - ig.system.width),
          _0x1bd8af = ig.system.width <= ig.system.height ? ig.system.height : ig.system.height + (ig.system.width - ig.system.height),
          _0x93ce1b = Math.sqrt((ig.system.width / 0x2 ^ 0x2) + (ig.system.height / 0x2 ^ 0x2)),
          _0x93ce1b = _0x2eac62.createRadialGradient(ig.system.width / 0x2, ig.system.height / 0x2, 0x0, ig.system.width / 0x2, ig.system.height / 0x2, 0x28 * _0x93ce1b);
        _0x93ce1b.addColorStop(0x1, "rgb(235, 64, 52, 1)"), _0x93ce1b.addColorStop(0.3, "rgb(235, 64, 52, 0)"), _0x2eac62.fillStyle = _0x93ce1b, _0x2eac62.globalAlpha = 0.8 * (0x1 <= this.bloodEffect ? 0x1 : 0x0 >= this.bloodEffect ? 0x0 : this.bloodEffect), this.bloodEffect -= 0x1 * ig.system.tick, _0x2eac62.fillRect(_0x4de7cc, _0x1fb9c1, _0x3a598c, _0x1bd8af), _0x2eac62.globalAlpha = 0x1;
      }
      if (ig.GameConfig) {
        var _0x4de7cc = [],
          _0x59e2bd;
        for (_0x59e2bd in ig.GameConfig.boosts) _0x1fb9c1 = ig.GameConfig.boosts[_0x59e2bd], 0x0 < _0x1fb9c1.timer.cd && _0x4de7cc.push(_0x1fb9c1);
        _0x2eac62.font = "60px segoe", _0x2eac62.textAlign = 'center', _0x2eac62.textBaseAlign = 'center';
        for (_0x59e2bd = 0x0; _0x59e2bd < _0x4de7cc.length; _0x59e2bd++) _0x1fb9c1 = _0x4de7cc[_0x59e2bd], _0x1fb9c1 = [{
          'image': _0x1fb9c1.image,
          'scale': {
            'x': 0x2 * _0x1fb9c1.image.width,
            'y': 0x2 * _0x1fb9c1.image.height
          }
        }, "\n", _0x1fb9c1.timer.cd.toFixed(0x2)], ig.ModText.drawTextAndImage(_0x1fb9c1, ig.system.width / 0x2, ig.system.height - 0xc8, 'center', {
          'front': 'white',
          'back': 'black'
        });
      }
      this.drawValues.health.draw(0x14, 0x14), this.drawValues.currency.draw(0x14, 0x3c + this.drawValues.currency.height), this.drawValues.premiums.draw(0x14, 0x3c + this.drawValues.currency.height + this.drawValues.premiums.height), _0x2eac62.textAlign = 'left', _0x2eac62.textBaseAlign = 'center', _0x1bd8af = 0x50, _0x2eac62.font = _0x1bd8af + "px segoe", this.drawTextShadow(ig.game.playerData.health.current + '/' + ig.game.playerData.health.max, {
        'x': this.drawValues.health.width + 0x14,
        'y': _0x1bd8af / 0x3 + 0x14 + this.drawValues.health.height / 0x2
      }, {
        'back': 'black',
        'fill': 'white'
      }, 0.2 * _0x1bd8af, 0x3), _0x1bd8af = 0x3c, _0x2eac62.font = _0x1bd8af + "px segoe", this.drawTextShadow(ig.game.playerData.currency.gold, {
        'x': this.drawValues.currency.width + 0x14,
        'y': _0x1bd8af / 0x2 + this.drawValues.currency.height / 0x2 + this.drawValues.health.height
      }, {
        'back': 'black',
        'fill': 'white'
      }, 0.2 * _0x1bd8af, 0x3), this.drawTextShadow(ig.game.SaveData.player.premiums, {
        'x': this.drawValues.currency.width + 0x14,
        'y': _0x1bd8af / 0x2 + this.drawValues.premiums.height / 0x2 + this.drawValues.health.height + this.drawValues.currency.height
      }, {
        'back': 'black',
        'fill': 'white'
      }, 0.2 * _0x1bd8af, 0x3), _0x1bd8af = 0x50, _0x2eac62.font = _0x1bd8af + "px segoe", _0x2eac62.fillStyle = '#FFFFFF', _0x2eac62.textAlign = 'center';
      if (this.marblePathEditor.isLevelEditor) _0x2eac62.fillText('Editor', ig.system.width / 0x2, 1.3 * _0x1bd8af);else {
        _0x1bd8af = 0x50, _0x2eac62.font = _0x1bd8af + "px segoe", _0x2eac62.fillStyle = '#FFFFFF', _0x2eac62.textAlign = 'center', _0x2eac62.fillText(_STRINGS.Game.Level + " " + String(ig.game.director.currentLevel - 0x2), ig.system.width / 0x2, 1.3 * _0x1bd8af);
        for (_0x59e2bd = _0x4de7cc = 0x0; _0x59e2bd < this.marblePathEditor.wave.max.length; _0x59e2bd++) _0x4de7cc += this.marblePathEditor.wave.max[_0x59e2bd];
        _0x1fb9c1 = 0x0, _0x3a598c = _0x4de7cc;
        for (_0x59e2bd = 0x0; _0x59e2bd < this.marblePathEditor.editor.waves.length; _0x59e2bd++) _0x1fb9c1 += this.marblePathEditor.editor.waves[_0x59e2bd].comp.length;
        this.progression.prev = this.progression.real, this.progression.real = 0x0 < _0x1fb9c1 / _0x3a598c ? 0x64 - 0x64 * (_0x1fb9c1 / _0x3a598c) : 0x0 == _0x1fb9c1 ? 0x64 : 0x0, this.progression.remn += this.progression.real - this.progression.prev, !0x0 != ig.game.checkPauseGame && (0.1 <= this.progression.remn ? (this.progression.curr += this.progression.remn / 0x32, this.progression.remn -= this.progression.remn / 0x32) : (this.progression.curr += this.progression.remn, this.progression.remn = 0x0)), _0x1fb9c1 = this.progression.curr, _0x3a598c = ig.system.width / 0x2, _0x1bd8af = 0x96 + _0x1bd8af, _0x59e2bd = this.drawProgress.back;
        var _0x93ce1b = this.drawProgress.fill,
          _0x97f784 = this.drawProgress.icon,
          _0x456760 = this.drawProgress.flag;
        _0x59e2bd.draw(_0x3a598c - _0x59e2bd.width / 0x2, _0x1bd8af - _0x59e2bd.height / 0x2), 0x0 < _0x1fb9c1 && _0x93ce1b.draw(_0x3a598c - _0x93ce1b.width / 0x2, _0x1bd8af - _0x93ce1b.height / 0x2, 0x0, 0x0, _0x1fb9c1 * (_0x93ce1b.width / 0x64), _0x93ce1b.height);
        var _0x233677 = this.marblePathEditor.flagSpacing,
          _0x4de7cc = _0x93ce1b.width / _0x4de7cc,
          _0x2530e0 = -(0x4 + _0x456760.height - _0x93ce1b.height / 0x2);
        for (_0x59e2bd = 0x0; _0x59e2bd < _0x233677.length; _0x59e2bd++) _0x456760.draw(_0x3a598c - 0x5 + 0x0 + _0x233677[_0x59e2bd] * _0x4de7cc - _0x93ce1b.width / 0x2, _0x1bd8af + _0x2530e0);
        _0x97f784.draw(_0x3a598c - _0x97f784.width / 0x2 - _0x93ce1b.width / 0x2 + _0x1fb9c1 * (_0x93ce1b.width / 0x64), _0x1bd8af - _0x97f784.height / 0x2);
      }
      _0x59e2bd = null == this.popupActive, !0x0 == ig.game.oneReady && 0x1 == ig.game.readyRemoved && _0x59e2bd && 0x0 < this.marblePathEditor.wave.timer && (_0x59e2bd = Math.ceil(this.marblePathEditor.wave.timer) + " " + _STRINGS.Game.Timer, _0x1bd8af = 0x32, _0x2eac62.textAlign = 'center', _0x2eac62.fontStyle = _0x1bd8af + "px segoe", _0x2eac62.strokeStyle = 'black', _0x2eac62.fillStyle = 'white', _0x2eac62.miterLimit = 0x2, _0x2eac62.lineJoin = 'circle', _0x2eac62.lineWidth = 0.2 * _0x1bd8af, _0x4de7cc = ig.system.width - _0x2eac62.measureText(_0x59e2bd).width / 0x2 - 0x1e, _0x1fb9c1 = ig.system.height - 1.1 * _0x1bd8af - this.readyButton.size.y, _0x2eac62.strokeText(_0x59e2bd, _0x4de7cc, _0x1fb9c1), _0x2eac62.lineWidth = 0x1, _0x2eac62.fillText(_0x59e2bd, _0x4de7cc, _0x1fb9c1)), _0x2eac62.restore();
    },
    'drawTextShadow': function (_0xc80376, _0x296fae, _0x31e7eb, _0x2772b5, _0x18888b) {
      var _0x3795ef = ig.system.context;
      _0x3795ef.strokeStyle = _0x31e7eb.back, _0x3795ef.fillStyle = _0x31e7eb.fill, _0x3795ef.miterLimit = _0x18888b, _0x3795ef.lineJoin = 'circle', _0x3795ef.lineWidth = _0x2772b5, _0x3795ef.strokeText(_0xc80376, _0x296fae.x, _0x296fae.y), _0x3795ef.lineWidth = 0x1, _0x3795ef.fillText(_0xc80376, _0x296fae.x, _0x296fae.y);
    },
    'spawnElements': function () {
      this.bloodEffect = 0x0, this.activeReward = {
        'health': _SETTINGS.RewardedVideo.Revives,
        'premium': !0x0
      }, this.gameSpeed = {
        'unpaused': 0x1,
        'current': 0x0,
        'multipliers': [0x1, 0x2, 0x4]
      }, this.progression = {
        'real': 0x0,
        'prev': 0x0,
        'remn': 0x0,
        'curr': 0x0
      }, this.foreground = ig.game.spawnEntity(EntityControllerForeground, 0x0, 0x0, {
        'control': this
      }), this.midground = ig.game.spawnEntity(EntityControllerMidground, 0x0, 0x0, {
        'control': this
      }), 0x2 == ig.game.director.currentLevel ? this.marblePathEditor = ig.game.spawnEntity('EntityGameMarblePathEditor', 0x0, 0x0, {
        'control': this
      }) : (this.marblePathEditor = ig.game.spawnEntity('EntityGameMarblePathLevel' + String(ig.game.director.currentLevel - 0x2), 0x0, 0x0, {
        'control': this
      }), ig.game.tutorialDisable = 0x3 >= ig.game.director.currentLevel ? !0x1 : !0x0, this.cameraButton = ig.game.spawnEntity(EntityButtonText, this.x, this.y, {
        'controller': this,
        'applyAnimSheet': 'camera',
        'zIndex': this.zIndex + 0xa,
        'isEntity': !0x1,
        'handleClick': function () {},
        'quickHandleClick': function () {
          ig.game.cameraControl.fnc_centerPos();
        }
      }), this.speedButton = ig.game.spawnEntity(EntityButtonSpeed, -ig.system.width, -ig.system.height, {
        'controller': this,
        'zIndex': this.zIndex + 0xa,
        'isEntity': !0x1
      }), this.rangeButton = ig.game.spawnEntity(EntityButtonView, -ig.system.width, -ig.system.height, {
        'controller': this,
        'zIndex': this.zIndex + 0xa,
        'isEntity': !0x1
      })), this.tutorialControl = ig.game.spawnEntity(EntityControllerTutorial, 0x0, 0x0, {}), this.pauseButton = ig.game.spawnEntity(EntityButtonPause, -ig.system.width, -ig.system.height, {
        'controller': this,
        'zIndex': this.zIndex + 0xa,
        'isEntity': !0x1
      }), this.readyButton = ig.game.spawnEntity(EntityButtonText, -ig.system.width, -ig.system.height, {
        'controller': this,
        'zIndex': this.zIndex + 0xa,
        'isEntity': !0x1,
        'text': _STRINGS.Game.Ready,
        'callback': function () {
          var _0x3e33bd = ig.game.getEntitiesByType(EntityControllerTutorial)[0x0];
          _0x3e33bd && _0x3e33bd.kill(), 0x0 < this.controller.marblePathEditor.wave.timer ? (this.disable = !0x0, console.log("Wave started"), this.controller.marblePathEditor.wave.timer = 0x0) : console.log("Wave is currently attacking"), !0x0 == ig.game.oneReady && 0x0 == ig.game.readyRemoved && (ig.game.readyRemoved = 0x1);
        },
        'updateExtra': function () {
          0x0 < ig.game.getEntitiesByType(EntityGameMarble).length || null != ig.game.GameController.popupActive ? this.disable = !0x0 : !0x1 == ig.game.tutorial && (this.disable = !0x1);
        }
      }), this.buttonPlace = {
        'ready': {
          'x': 0x0,
          'y': 0x0
        },
        'center': {
          'x': 0x0,
          'y': 0x0
        }
      }, this.buttonPlace.ready = {
        'x': -(this.readyButton.size.x + 0x14),
        'y': -(this.readyButton.size.y + 0x14)
      }, this.readyButton.setAnchoredPosition(this.buttonPlace.ready.x, this.buttonPlace.ready.y, 'bottom-right'), this.addButtonToArray(this.readyButton), this.pauseButton.setAnchoredPosition(-(this.pauseButton.size.x + 0x14), 0x14, 'top-right'), this.pauseButton.setScale(0x1, 0x1), this.addButtonToArray(this.pauseButton), this.speedButton && (this.speedButton.setAnchoredPosition(0x14, -(this.speedButton.size.y + 0x14), 'bottom-left'), this.speedButton.setScale(0x1, 0x1), this.addButtonToArray(this.speedButton)), this.rangeButton && (this.rangeButton.setAnchoredPosition(0x14 + this.speedButton.size.x + 0x14, -(this.rangeButton.size.y + 0x14), 'bottom-left'), this.rangeButton.setScale(0x1, 0x1), this.addButtonToArray(this.rangeButton)), this.cameraButton && (this.buttonPlace.center = {
        'x': 0x14 + this.speedButton.size.x + 0x14 + this.rangeButton.size.x + 0x14,
        'y': -(this.cameraButton.size.y + 0x14)
      }, this.cameraButton.setAnchoredPosition(this.buttonPlace.center.x, this.buttonPlace.center.y, 'bottom-left'), this.addButtonToArray(this.cameraButton)), ig.game.sortEntitiesDeferred();
    },
    'speedMultiplier': function () {
      return this.gameSpeed.multipliers[this.gameSpeed.current] * this.gameSpeed.unpaused;
    },
    'tweenShow': function (_0x5529b6) {
      _0x5529b6.tween({
        'fontSize': 0x64
      }, 0.35, {
        'onComplete': function () {
          _0x5529b6.tween({
            'fontSize': 0x1
          }, 0.5, {
            'onComplete': function () {
              _0x5529b6.kill();
            }.bind(_0x5529b6),
            'delay': 0x1,
            'easing': ig.Tween.Easing.Back.EaseIn
          }).start();
        }.bind(_0x5529b6),
        'delay': 0x0,
        'easing': ig.Tween.Easing.Back.EaseIn
      }).start();
    },
    'makeBlur': function (_0x370fcd, _0x476021, _0x4afd7f) {
      _0x370fcd.tween({
        'globalAlpha': 0x0
      }, _0x476021, {
        'onUpdate': function () {
          _0x370fcd.globalAlpha = this.globalAlpha;
        }.bind(_0x370fcd),
        'onComplete': function () {
          _0x370fcd.kill();
        }.bind(_0x370fcd),
        'delay': _0x4afd7f,
        'easing': ig.Tween.Easing.Back.EaseIn
      }).start();
    },
    'gameOver': function () {
      ig.game.score = this._currentScore;
    },
    'saveSessionData': function () {
      console.log("Game saved"), ig.game.sessionData.unlocks = ig.SaveData.unlocks, ig.game.save('unlocks', ig.game.sessionData.unlocks), ig.game.sessionData.premiums = ig.SaveData.player.premiums, ig.game.save('premiums', ig.game.sessionData.premiums);
    },
    'loadSessionData': function () {
      console.log("Game loaded"), ig.game.sessionData.unlocks && (ig.SaveData.unlocks = ig.game.sessionData.unlocks), ig.game.sessionData.premiums && (ig.SaveData.player.premiums = ig.game.sessionData.premiums);
    },
    'showPausePopup': function () {
      this.pausePopup = ig.game.spawnEntity(EntityPopupPause, 0x64, 0x64, {
        'controller': this,
        'zIndex': 0xf423f
      }), this.popupActive = 'pause', this.pausePopup.showPopup(), this.disableAllButtons(), this.clearTimeOutStartGame();
    },
    'hidePausePopup': function () {
      ig.game.checkPauseGame = !0x1, this.enableAllbuttons(), this.pausePopup && (this.pausePopup.hidePopup(), this.popupActive = null), this.setTimeOutStartGame();
    },
    'showRewardPopup': function () {
      ig.game.checkPauseGame = !0x0, this.rewardPopup = ig.game.spawnEntity(EntityPopupReward, 0x64, 0x64, {
        'controller': this,
        'zIndex': 0xf423f
      }), this.popupActive = 'reward', this.rewardPopup.showPopup(), this.disableAllButtons(), this.clearTimeOutStartGame();
    },
    'hideRewardPopup': function () {
      ig.game.checkPauseGame = !0x1, this.enableAllbuttons(), this.rewardPopup && (this.rewardPopup.hidePopup(), this.popupActive = null), this.setTimeOutStartGame();
    },
    'showGameOverPopup': function () {
      ig.game.checkPauseGame = !0x0, ig.soundHandler.sfxPlayer.play('gameOver'), this.gameOverPopup = ig.game.spawnEntity(EntityPopupGameOver, 0x64, 0x64, {
        'controller': this,
        'zIndex': 0xf423f
      }), this.popupActive = 'gameOver', this.gameOverPopup.showPopup(), this.disableAllButtons(), this.clearTimeOutStartGame();
    },
    'hideGameOverPopup': function () {
      ig.game.checkPauseGame = !0x1, this.enableAllbuttons(), this.gameOverPopup && (this.gameOverPopup.hidePopup(), this.popupActive = null), this.setTimeOutStartGame();
    },
    'showGameWinPopup': function () {
      ig.game.checkPauseGame = !0x0, ig.soundHandler.sfxPlayer.play('gameWin'), this.gameOverPopup = ig.game.spawnEntity(EntityPopupGameWin, 0x64, 0x64, {
        'controller': this,
        'zIndex': 0xf423f
      }), this.popupActive = 'gameWin', this.gameOverPopup.showPopup(), this.disableAllButtons(), this.clearTimeOutStartGame();
    },
    'hideGameWinPopup': function () {
      ig.game.checkPauseGame = !0x1, this.enableAllbuttons(), this.gameOverPopup && (this.gameOverPopup.hidePopup(), this.popupActive = null), this.setTimeOutStartGame();
    },
    'pauseGame': function () {},
    'resumeGame': function () {},
    'showRewardedVideoAd': function (_0x4335b3) {
      this.itemReward = _0x4335b3, this.successCallback();
    },
    'successCallback': function () {
      var _0x535c3f = this.itemReward;
      console.log("Ad playback success");
      switch (_0x535c3f.type) {
        case 'health':
          this.hideRewardPopup(), this.activeReward.health -= 0x1, -0x1 == _SETTINGS.RewardedVideo.Revives && (this.activeReward.health = -0x1), this.marblePathEditor.isGameOver = !0x1, ig.game.playerData.health.current += _0x535c3f.amount;
          break;
        case 'premium':
          if (this.activeReward.premium = !0x1, ig.SaveData.player.premiums += _0x535c3f.amount, this.saveSessionData(), _0x535c3f = ig.game.getEntitiesByType(EntityPopupGameWin)[0x0]) _0x535c3f.endLevelReward.current += _0x535c3f.endLevelReward.addition;
      }
    },
    'failedCallback': function () {
      console.log("Ad playback failed");
    }
  }), EntityDrops = ig.Entity.extend({
    'init': function (_0x52998f, _0x36b29f, _0xaa1ede) {
      this.parent(_0x52998f, _0x36b29f, _0xaa1ede), this.deathAlpha = 0x1, this.setAnchoredPosition(this.pos.x - ig.system.width / 0x2, this.pos.y - ig.system.height / 0x2, 'center');
    },
    'draw': function () {
      if (0x0 < this.deathAlpha) {
        if (this.anchoredPositionY -= 0x64 * ig.system.tick, this.deathAlpha -= 0x1 * ig.system.tick, !(0x0 >= this.deathAlpha)) {
          var _0x412e4c = ig.system.context;
          _0x412e4c.save(), _0x412e4c.translate(-ig.game.screen.x + this.pos.x + this.size.x / 0x2, -ig.game.screen.y + this.pos.y + this.size.y / 0x2), _0x412e4c.globalAlpha = 0x1 <= this.deathAlpha ? 0x1 : this.deathAlpha, _0x412e4c.fillStyle = 'white', _0x412e4c.textAlign = 'center', _0x412e4c.textBaseAlign = 'center', _0x412e4c.font = "80px segoe", ig.ModText.drawTextAndImage([String('+' + this.value.amount), {
            'image': this.value.image,
            'scale': {
              'x': this.value.image.width,
              'y': this.value.image.height
            }
          }], 0x0, 0x0, 'center', {
            'front': 'white',
            'back': 'black'
          }), _0x412e4c.globalAlpha = 0x1, _0x412e4c.restore();
        }
      } else this.kill();
    }
  });
}), ig.baked = !0x0, ig.module('game.levels.level1').requires('impact.image', 'game.entities.controllers.controller-game').defines(function () {
  Level1 = {
    'entities': [{
      'type': 'EntityControllerGame',
      'x': 0x0,
      'y': 0x0
    }, {
      'type': 'EntityPointer',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.levels.level2').requires('impact.image', 'game.entities.controllers.controller-game').defines(function () {
  Level2 = {
    'entities': [{
      'type': 'EntityControllerGame',
      'x': 0x0,
      'y': 0x0
    }, {
      'type': 'EntityPointer',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.levels.level3').requires('impact.image', 'game.entities.controllers.controller-game').defines(function () {
  Level3 = {
    'entities': [{
      'type': 'EntityControllerGame',
      'x': 0x0,
      'y': 0x0
    }, {
      'type': 'EntityPointer',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.entities.opening-marketjs-logo').requires('impact.entity').defines(function () {
  EntityOpeningMarketJSLogo = ig.Entity.extend({
    'objects': [],
    'letterM': null,
    'logoShield': null,
    'text': null,
    'localTweens': [],
    'logoOriX': 0x0,
    'logoOriY': 0x0,
    'textOriX': 0x0,
    'textOriY': 0x0,
    'logoCanvas': null,
    'init': function (_0x4d8cb1, _0x1def9d, _0x48479c) {
      this.parent(_0x4d8cb1, _0x1def9d, _0x48479c), console.log("Opening v1.0.4"), logoSize = 0x94 / 0x3c0 * Math.min(ig.system.width, ig.system.height), this.logoCacheSize = Math.round(0x2 * logoSize), this.text = this.addObject('drawText', 0x0, 0x0, logoSize, logoSize), this.cover = this.addObject('drawCover', 0x0, 0x0, logoSize, logoSize), this.logoShield = this.addObject('drawLogoShield', 0x0, 0x0, logoSize, logoSize), this.letterM = this.addObject('drawLetterM', 0x0, 0x0, logoSize, logoSize), this.logoOriX = 0x0 - 2.2 * logoSize, this.logoOriY = 0x0, this.textOriX = 0x0 - 1.378 * logoSize, this.textOriY = 0x0 - 0.5 * logoSize, this.logoShield.x = 0x0, this.logoShield.y = 0x0, this.logoShield.scaleX = 0x0, this.logoShield.scaleY = 0x0, this.logoShield.alpha = 0x0, this.letterM.x = this.logoShield.x, this.letterM.y = this.logoShield.y, this.letterM.scaleX = 0x0, this.letterM.scaleY = 0x0, this.letterM.alpha = 0x0, this.text.x = 4.6 * -logoSize, this.text.y = this.textOriY, this.cover.x = this.logoShield.x, this.cover.y = 0x0, this.addLocalDelayedCall(0.6, function () {
        this.addLocalTweenTo(this.logoShield, {
          'scaleX': 0x2,
          'scaleY': 0x2
        }, 0.5, this.backOut), this.addLocalTweenTo(this.logoShield, {
          'alpha': 0x1
        }, 0.2, this.quadOut), ig.soundHandler.sfxPlayer.play('logosplash1'), this.addLocalDelayedCall(0.4, function () {
          this.addLocalTweenTo(this.letterM, {
            'scaleX': 0x2,
            'scaleY': 0x2
          }, 0.5, this.backOut), this.addLocalTweenTo(this.letterM, {
            'alpha': 0x1
          }, 0.2, this.quadOut), ig.soundHandler.sfxPlayer.play('logosplash1'), this.addLocalDelayedCall(0.2, function () {
            ig.soundHandler.sfxPlayer.play('logosplash2');
          }.bind(this)), this.addLocalDelayedCall(0.6, function () {
            this.addLocalTweenTo(this.logoShield, {
              'scaleX': 0x1,
              'scaleY': 0x1
            }, 0.4, this.quartOut), this.addLocalTweenTo(this.logoShield, {
              'x': this.logoOriX,
              'y': this.logoOriY
            }, 0.4, this.quadOut), this.addLocalTweenTo(this.letterM, {
              'scaleX': 0x1,
              'scaleY': 0x1
            }, 0.4, this.quartOut), this.addLocalTweenTo(this.letterM, {
              'x': this.logoOriX,
              'y': this.logoOriY
            }, 0.4, this.quadOut), this.addLocalTweenTo(this.text, {
              'x': this.textOriX
            }, 0.8, this.backOut), this.addLocalDelayedCall(0x2, function () {
              this.addLocalTweenTo(this.logoShield, {
                'alpha': 0x0
              }, 0.6, this.quadOut), this.addLocalTweenTo(this.text, {
                'alpha': 0x0
              }, 0.6, this.quadOut), this.addLocalDelayedCall(1.3, function () {
                this.playBgm(), ig.game.director.nextLevel();
              }.bind(this));
            }.bind(this));
          }.bind(this));
        }.bind(this));
      }.bind(this));
    },
    'addObject': function (_0x405ebb, _0x53e053, _0x31bb29, _0x3ac6a3, _0x16adcf) {
      return _0x405ebb = {
        'x': _0x53e053,
        'y': _0x31bb29,
        'width': _0x3ac6a3,
        'height': _0x16adcf,
        'scaleX': 0x1,
        'scaleY': 0x1,
        'alpha': 0x1,
        'drawFunctionName': _0x405ebb
      }, this.objects.push(_0x405ebb), _0x405ebb;
    },
    'update': function () {
      this.parent();
      if (!ig.wm) {
        this.unlockWebAudio();
        var _0x3646b6 = ig.system.tick;
        _0x3646b6 > 0x1 / 0x3c && (_0x3646b6 = 0x1 / 0x3c), this.updateLocalTween(_0x3646b6), this.cover.x = this.logoShield.x, _SETTINGS.DeveloperBranding.Splash.Enabled || (this.playBgm(), ig.game.director.nextLevel(), this.kill());
      }
    },
    'playBgm': function () {
      ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
    },
    'unlockWebAudio': function () {
      if (ig.input.released('click')) try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x361b1e) {}
    },
    'addLocalDelayedCall': function (_0x9d081a, _0x1d92d5) {
      this.addLocalTweenTo(null, {}, _0x9d081a, this.easeNone, 0x0, _0x1d92d5);
    },
    'addLocalTweenTo': function (_0x23a167, _0x44709e, _0x8a16b1, _0x40862f, _0x33880a, _0x500ff5) {
      'undefined' == typeof _0x33880a && (_0x33880a = 0x0), 'undefined' == typeof _0x40862f && (_0x40862f = this.easeNone), 'undefined' == typeof _0x500ff5 && (_0x500ff5 = null), _0x8a16b1 = {
        'obj': _0x23a167,
        'endProperties': _0x44709e,
        'duration': _0x8a16b1,
        'easing': _0x40862f,
        'delay': _0x33880a,
        'elapsed': 0x0,
        'deltaProperties': {},
        'startProperties': {},
        'onComplete': _0x500ff5
      };
      for (var _0xc0c7a1 in _0x44709e) Object.hasOwnProperty.call(_0x44709e, _0xc0c7a1) && (_0x8a16b1.startProperties[_0xc0c7a1] = _0x23a167[_0xc0c7a1], _0x8a16b1.deltaProperties[_0xc0c7a1] = _0x44709e[_0xc0c7a1] - _0x23a167[_0xc0c7a1]);
      this.localTweens.push(_0x8a16b1);
    },
    'updateLocalTween': function (_0x51b639) {
      for (var _0x11f057 = 0x0; _0x11f057 < this.localTweens.length; _0x11f057++) {
        var _0x410063 = this.localTweens[_0x11f057];
        if (0x0 < _0x410063.delay) _0x410063.delay -= _0x51b639;else {
          _0x410063.elapsed += _0x51b639;
          for (var _0x5ee185 in _0x410063.deltaProperties) if (Object.hasOwnProperty.call(_0x410063.deltaProperties, _0x5ee185)) {
            var _0x38c5f3 = _0x410063.deltaProperties[_0x5ee185],
              _0x53d66d = _0x410063.startProperties[_0x5ee185],
              _0x189f3e = _0x410063.easing,
              _0xde6c46 = _0x410063.elapsed / _0x410063.duration;
            0x1 < _0xde6c46 && (_0xde6c46 = 0x1), _0xde6c46 = _0x189f3e(_0xde6c46), _0x410063.obj[_0x5ee185] = _0x53d66d + _0x38c5f3 * _0xde6c46;
          }
          if (_0x410063.elapsed >= _0x410063.duration && (this.localTweens.splice(_0x11f057, 0x1), _0x11f057--, _0x410063.onComplete)) _0x410063.onComplete();
        }
      }
    },
    'quadOut': function (_0xd0b199) {
      return -_0xd0b199 * (_0xd0b199 - 0x2);
    },
    'quartOut': function (_0x1560d1) {
      return -(--_0x1560d1 * _0x1560d1 * _0x1560d1 * _0x1560d1 - 0x1);
    },
    'backOut': function (_0x189fc) {
      return (_0x189fc -= 0x1) * _0x189fc * (2.70158 * _0x189fc + 1.70158) + 0x1;
    },
    'easeNone': function (_0x3bceeb) {
      return _0x3bceeb;
    },
    'draw': function () {
      this.parent();
      if (!ig.global.wm) {
        var _0x5590c1 = ig.system.context;
        _0x5590c1.fillStyle = '#ffffff', _0x5590c1.fillRect(0x0, 0x0, ig.system.width, ig.system.height);
        for (_0x5590c1 = 0x0; _0x5590c1 < this.objects.length; _0x5590c1++) {
          var _0x1d5259 = this.objects[_0x5590c1];
          0x1 < _0x1d5259.alpha && (_0x1d5259.alpha = 0x1);
          if (0x0 != _0x1d5259.scaleX && 0x0 != _0x1d5259.scaleY && 0x0 < _0x1d5259.alpha) this[_0x1d5259.drawFunctionName](_0x1d5259);
        }
      }
    },
    'drawLogoShield': function (_0x606b52) {
      if (!this.logoCanvas) {
        this.logoCanvas = ig.$new('canvas'), this.logoCanvas.width = this.logoCacheSize, this.logoCanvas.height = this.logoCacheSize;
        var _0x2da9df = this.logoCanvas.getContext('2d'),
          _0x5291b3 = this.logoCacheSize,
          _0x49b523 = this.logoCacheSize,
          _0x3ea13a = 0x0,
          _0x18b102 = 0x0;
        _0x2da9df.clearRect(0x0, 0x0, this.logoCanvas.width, this.logoCanvas.height), _0x2da9df.save(), _0x2da9df.fillStyle = '#e35026', _0x2da9df.beginPath(), _0x2da9df.moveTo(_0x3ea13a + 0.06 * _0x5291b3, _0x18b102), _0x2da9df.lineTo(_0x3ea13a + 0.94 * _0x5291b3, _0x18b102), _0x2da9df.lineTo(_0x3ea13a + 0.86 * _0x5291b3, _0x18b102 + 0.89 * _0x49b523), _0x2da9df.lineTo(_0x3ea13a + 0.5 * _0x5291b3, _0x18b102 + _0x49b523), _0x2da9df.lineTo(_0x3ea13a + 0.14 * _0x5291b3, _0x18b102 + 0.89 * _0x49b523), _0x2da9df.closePath(), _0x2da9df.fill(), _0x2da9df.fillStyle = '#ee652b', _0x2da9df.beginPath(), _0x2da9df.moveTo(_0x3ea13a + 0.5 * _0x5291b3, _0x18b102 + 0.07 * _0x49b523), _0x2da9df.lineTo(_0x3ea13a + 0.86 * _0x5291b3, _0x18b102 + 0.07 * _0x49b523), _0x2da9df.lineTo(_0x3ea13a + 0.79 * _0x5291b3, _0x18b102 + 0.84 * _0x49b523), _0x2da9df.lineTo(_0x3ea13a + 0.5 * _0x5291b3, _0x18b102 + 0.92 * _0x49b523), _0x2da9df.closePath(), _0x2da9df.fill(), _0x2da9df.restore();
      }
      _0x5291b3 = _0x606b52.width * _0x606b52.scaleX, _0x49b523 = _0x606b52.height * _0x606b52.scaleY, _0x3ea13a = ig.system.width / 0x2 + _0x606b52.x - _0x5291b3 / 0x2, _0x18b102 = ig.system.height / 0x2 + _0x606b52.y - _0x49b523 / 0x2, _0x2da9df = ig.system.context, _0x2da9df.globalAlpha = _0x606b52.alpha, _0x2da9df.drawImage(this.logoCanvas, 0x0, 0x0, this.logoCacheSize, this.logoCacheSize, _0x3ea13a, _0x18b102, _0x5291b3, _0x49b523), _0x2da9df.globalAlpha = 0x1;
    },
    'drawLetterM': function (_0x463198) {
      if (!this.mCanvas) {
        this.mCanvas = ig.$new('canvas'), this.mCanvas.width = this.logoCacheSize, this.mCanvas.height = this.logoCacheSize;
        var _0x22d1db = this.mCanvas.getContext('2d'),
          _0xe41977 = this.logoCacheSize,
          _0x49dc91 = this.logoCacheSize,
          _0x43faf9 = 0x0,
          _0x18ceda = 0x0;
        _0x22d1db.save(), _0x22d1db.fillStyle = '#ffffff', _0x22d1db.beginPath(), _0x22d1db.moveTo(_0x43faf9 + 0.25 * _0xe41977, _0x18ceda + 0.2 * _0x49dc91), _0x22d1db.lineTo(_0x43faf9 + 0.4 * _0xe41977, _0x18ceda + 0.2 * _0x49dc91), _0x22d1db.lineTo(_0x43faf9 + 0.5 * _0xe41977, _0x18ceda + 0.37 * _0x49dc91), _0x22d1db.lineTo(_0x43faf9 + 0.6 * _0xe41977, _0x18ceda + 0.2 * _0x49dc91), _0x22d1db.lineTo(_0x43faf9 + 0.75 * _0xe41977, _0x18ceda + 0.2 * _0x49dc91), _0x22d1db.lineTo(_0x43faf9 + 0.75 * _0xe41977, _0x18ceda + 0.7 * _0x49dc91), _0x22d1db.lineTo(_0x43faf9 + 0.6 * _0xe41977, _0x18ceda + 0.7 * _0x49dc91), _0x22d1db.lineTo(_0x43faf9 + 0.6 * _0xe41977, _0x18ceda + 0.45 * _0x49dc91), _0x22d1db.lineTo(_0x43faf9 + 0.5 * _0xe41977, _0x18ceda + 0.63 * _0x49dc91), _0x22d1db.lineTo(_0x43faf9 + 0.4 * _0xe41977, _0x18ceda + 0.45 * _0x49dc91), _0x22d1db.lineTo(_0x43faf9 + 0.4 * _0xe41977, _0x18ceda + 0.7 * _0x49dc91), _0x22d1db.lineTo(_0x43faf9 + 0.25 * _0xe41977, _0x18ceda + 0.7 * _0x49dc91), _0x22d1db.closePath(), _0x22d1db.fill(), _0x22d1db.restore();
      }
      _0x22d1db = ig.system.context, _0xe41977 = _0x463198.width * _0x463198.scaleX, _0x49dc91 = _0x463198.height * _0x463198.scaleY, _0x43faf9 = ig.system.width / 0x2 + _0x463198.x - _0xe41977 / 0x2, _0x18ceda = ig.system.height / 0x2 + _0x463198.y - _0x49dc91 / 0x2, _0x22d1db.globalAlpha = _0x463198.alpha, _0x22d1db.drawImage(this.mCanvas, 0x0, 0x0, this.logoCacheSize, this.logoCacheSize, _0x43faf9, _0x18ceda, _0xe41977, _0x49dc91), _0x22d1db.globalAlpha = 0x1;
    },
    'drawText': function (_0x4a88d1) {
      if (ig.splashLogoFontLoaded) {
        var _0x1c21d2 = ig.system.context,
          _0x4df546 = _0x4a88d1.height * _0x4a88d1.scaleY,
          _0x292625 = ig.system.width / 0x2 + _0x4a88d1.x,
          _0x3e891b = ig.system.height / 0x2 + _0x4a88d1.y;
        _0x1c21d2.save(), _0x1c21d2.globalAlpha = _0x4a88d1.alpha, _0x4a88d1 = Math.round(0x73 / 0x98 * _0x4df546);
        var _0x3a8d1d = Math.round(0x3e / 0x98 * _0x4df546);
        _0x1c21d2.textAlign = 'left', _0x1c21d2.fillStyle = '#316198', _0x1c21d2.font = _0x4a88d1 + "px logofont", _0x1c21d2.fillText('MarketJS', _0x292625 - 0.06 * _0x4a88d1, _0x3e891b + 0.66 * _0x4a88d1), _0x1c21d2.font = _0x3a8d1d + "px logofont", _0x1c21d2.fillText("HTML5 gaming solutions", _0x292625 - 0.02 * _0x3a8d1d, _0x3e891b + _0x4df546 - 0.1 * _0x3a8d1d), _0x1c21d2.globalAlpha = 0x1, _0x1c21d2.restore();
      }
    },
    'drawCover': function (_0x58a5bd) {
      var _0x477c99 = ig.system.context,
        _0x90bacb = ig.system.width / 0x2 + _0x58a5bd.x,
        _0x59715a = ig.system.height / 0x2 + _0x58a5bd.y;
      _0x477c99.save(), _0x477c99.globalAlpha = _0x58a5bd.alpha, _0x477c99.fillStyle = '#ffffff', _0x477c99.fillRect(_0x90bacb - ig.system.width / 0x2, _0x59715a - this.logoCacheSize / 0x2, ig.system.width / 0x2, this.logoCacheSize), _0x477c99.globalAlpha = 0x1, _0x477c99.restore();
    }
  });
  if ('undefined' == typeof window.FontFaceObserver) {
    var _0x37de61 = function (_0x2739e7, _0x3f5890) {
        document.addEventListener ? _0x2739e7.addEventListener('scroll', _0x3f5890, !0x1) : _0x2739e7.attachEvent('scroll', _0x3f5890);
      },
      _0x5491a5 = function (_0x525ee8) {
        this.a = document.createElement('div'), this.a.setAttribute('aria-hidden', 'true'), this.a.appendChild(document.createTextNode(_0x525ee8)), this.b = document.createElement('span'), this.c = document.createElement('span'), this.h = document.createElement('span'), this.f = document.createElement('span'), this.g = -0x1, this.b.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.c.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.f.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.h.style.cssText = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;', this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c);
      },
      _0x1de0a6 = function (_0x5ecb61, _0x2f2bfd) {
        _0x5ecb61.a.style.cssText = 'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' + _0x2f2bfd + ';';
      },
      _0x56e30d = function (_0x105db4) {
        var _0x188830 = _0x105db4.a.offsetWidth,
          _0x5d099e = _0x188830 + 0x64;
        return _0x105db4.f.style.width = _0x5d099e + 'px', _0x105db4.c.scrollLeft = _0x5d099e, _0x105db4.b.scrollLeft = _0x105db4.b.scrollWidth + 0x64, _0x105db4.g !== _0x188830 ? (_0x105db4.g = _0x188830, !0x0) : !0x1;
      },
      _0x3db5c1 = function (_0x53c275, _0x5c0814) {
        function _0x46260c() {
          var _0x206fcd = _0x4898cf;
          _0x56e30d(_0x206fcd) && _0x206fcd.a.parentNode && _0x5c0814(_0x206fcd.g);
        }
        var _0x4898cf = _0x53c275;
        _0x37de61(_0x53c275.b, _0x46260c), _0x37de61(_0x53c275.c, _0x46260c), _0x56e30d(_0x53c275);
      },
      _0x4b2b02 = function (_0x3ee89c, _0x205af7) {
        var _0x1405de = _0x205af7 || {};
        this.family = _0x3ee89c, this.style = _0x1405de.style || 'normal', this.weight = _0x1405de.weight || 'normal', this.stretch = _0x1405de.stretch || 'normal';
      },
      _0x49f60d = function () {
        return null === _0xca4f59 && (_0xca4f59 = !!document.fonts), _0xca4f59;
      },
      _0x5e49ac = function () {
        if (null === _0x47cd44) {
          var _0x57990b = document.createElement('div');
          try {
            _0x57990b.style.font = "condensed 100px sans-serif";
          } catch (_0x2ff095) {}
          _0x47cd44 = '' !== _0x57990b.style.font;
        }
        return _0x47cd44;
      },
      _0x5324a0 = function (_0x4b478a, _0x438cb3) {
        return [_0x4b478a.style, _0x4b478a.weight, _0x5e49ac() ? _0x4b478a.stretch : '', '100px', _0x438cb3].join(" ");
      },
      _0x568bd6 = null,
      _0x33d957 = null,
      _0x47cd44 = null,
      _0xca4f59 = null;
    _0x4b2b02.prototype.load = function (_0x3d5800, _0xea8d1a) {
      var _0x59ed9b = this,
        _0x199b0d = _0x3d5800 || 'BESbswy',
        _0x5b76cd = 0x0,
        _0x3131b8 = _0xea8d1a || 0xbb8,
        _0x1f7551 = new Date().getTime();
      return new Promise(function (_0x16a468, _0x309e88) {
        var _0x460f49;
        if (_0x460f49 = _0x49f60d()) null === _0x33d957 && (_0x49f60d() && /Apple/.test(window.navigator.vendor) ? (_0x460f49 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), _0x33d957 = !!_0x460f49 && 0x25b > parseInt(_0x460f49[0x1], 0xa)) : _0x33d957 = !0x1), _0x460f49 = !_0x33d957;
        if (_0x460f49) {
          _0x460f49 = new Promise(function (_0x254f4a, _0x50589c) {
            function _0x5c44a() {
              new Date().getTime() - _0x1f7551 >= _0x3131b8 ? _0x50589c(Error('' + _0x3131b8 + "ms timeout exceeded")) : document.fonts.load(_0x5324a0(_0x59ed9b, "\"" + _0x59ed9b.family + "\""), _0x199b0d).then(function (_0x5439d7) {
                0x1 <= _0x5439d7.length ? _0x254f4a() : setTimeout(_0x5c44a, 0x19);
              }, _0x50589c);
            }
            _0x5c44a();
          });
          var _0x18e473 = new Promise(function (_0x2e2ae3, _0x1cf92d) {
            _0x5b76cd = setTimeout(function () {
              _0x1cf92d(Error('' + _0x3131b8 + "ms timeout exceeded"));
            }, _0x3131b8);
          });
          Promise.race([_0x18e473, _0x460f49]).then(function () {
            clearTimeout(_0x5b76cd), _0x16a468(_0x59ed9b);
          }, _0x309e88);
        } else {
          var _0x581779 = function () {
            function _0x402147() {
              var _0x5ee6f5;
              if (_0x5ee6f5 = -0x1 != _0xc6db1a && -0x1 != _0x306677 || -0x1 != _0xc6db1a && -0x1 != _0x17185b || -0x1 != _0x306677 && -0x1 != _0x17185b) (_0x5ee6f5 = _0xc6db1a != _0x306677 && _0xc6db1a != _0x17185b && _0x306677 != _0x17185b) || (null === _0x568bd6 && (_0x5ee6f5 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), _0x568bd6 = !!_0x5ee6f5 && (0x218 > parseInt(_0x5ee6f5[0x1], 0xa) || 0x218 === parseInt(_0x5ee6f5[0x1], 0xa) && 0xb >= parseInt(_0x5ee6f5[0x2], 0xa))), _0x5ee6f5 = _0x568bd6 && (_0xc6db1a == _0x5c7738 && _0x306677 == _0x5c7738 && _0x17185b == _0x5c7738 || _0xc6db1a == _0xf7e053 && _0x306677 == _0xf7e053 && _0x17185b == _0xf7e053 || _0xc6db1a == _0x150c22 && _0x306677 == _0x150c22 && _0x17185b == _0x150c22)), _0x5ee6f5 = !_0x5ee6f5;
              _0x5ee6f5 && (_0x120ee4.parentNode && _0x120ee4.parentNode.removeChild(_0x120ee4), clearTimeout(_0x5b76cd), _0x16a468(_0x59ed9b));
            }
            function _0x4b820c() {
              if (new Date().getTime() - _0x1f7551 >= _0x3131b8) _0x120ee4.parentNode && _0x120ee4.parentNode.removeChild(_0x120ee4), _0x309e88(Error('' + _0x3131b8 + "ms timeout exceeded"));else {
                var _0x5c1a99 = document.hidden;
                if (!0x0 === _0x5c1a99 || void 0x0 === _0x5c1a99) _0xc6db1a = _0x418c04.a.offsetWidth, _0x306677 = _0x4a54d4.a.offsetWidth, _0x17185b = _0x5466c9.a.offsetWidth, _0x402147();
                _0x5b76cd = setTimeout(_0x4b820c, 0x32);
              }
            }
            var _0x418c04 = new _0x5491a5(_0x199b0d),
              _0x4a54d4 = new _0x5491a5(_0x199b0d),
              _0x5466c9 = new _0x5491a5(_0x199b0d),
              _0xc6db1a = -0x1,
              _0x306677 = -0x1,
              _0x17185b = -0x1,
              _0x5c7738 = -0x1,
              _0xf7e053 = -0x1,
              _0x150c22 = -0x1,
              _0x120ee4 = document.createElement('div');
            _0x120ee4.dir = 'ltr', _0x1de0a6(_0x418c04, _0x5324a0(_0x59ed9b, 'sans-serif')), _0x1de0a6(_0x4a54d4, _0x5324a0(_0x59ed9b, 'serif')), _0x1de0a6(_0x5466c9, _0x5324a0(_0x59ed9b, 'monospace')), _0x120ee4.appendChild(_0x418c04.a), _0x120ee4.appendChild(_0x4a54d4.a), _0x120ee4.appendChild(_0x5466c9.a), document.body.appendChild(_0x120ee4), _0x5c7738 = _0x418c04.a.offsetWidth, _0xf7e053 = _0x4a54d4.a.offsetWidth, _0x150c22 = _0x5466c9.a.offsetWidth, _0x4b820c(), _0x3db5c1(_0x418c04, function (_0x25b3c5) {
              _0xc6db1a = _0x25b3c5, _0x402147();
            }), _0x1de0a6(_0x418c04, _0x5324a0(_0x59ed9b, "\"" + _0x59ed9b.family + "\",sans-serif")), _0x3db5c1(_0x4a54d4, function (_0x482c4a) {
              _0x306677 = _0x482c4a, _0x402147();
            }), _0x1de0a6(_0x4a54d4, _0x5324a0(_0x59ed9b, "\"" + _0x59ed9b.family + "\",serif")), _0x3db5c1(_0x5466c9, function (_0x45ba35) {
              _0x17185b = _0x45ba35, _0x402147();
            }), _0x1de0a6(_0x5466c9, _0x5324a0(_0x59ed9b, "\"" + _0x59ed9b.family + "\",monospace"));
          };
          document.body ? _0x581779() : document.addEventListener ? document.addEventListener('DOMContentLoaded', function _0x1ac4b1() {
            document.removeEventListener('DOMContentLoaded', _0x1ac4b1), _0x581779();
          }) : document.attachEvent('onreadystatechange', function _0x576606() {
            if ('interactive' == document.readyState || 'complete' == document.readyState) document.detachEvent('onreadystatechange', _0x576606), _0x581779();
          });
        }
      });
    }, 'object' === typeof module ? module.exports = _0x4b2b02 : (window.FontFaceObserver = _0x4b2b02, window.FontFaceObserver.prototype.load = _0x4b2b02.prototype.load), console.log("font loader not exist : create new instance of font loader");
  }
  _0x4b2b02 = document.createElement('style'), _0x4b2b02.type = 'text/css', _0x4b2b02.appendChild(document.createTextNode("@font-face {font-family: 'logofont';src: url('media/fonts/logofont.woff2') format('woff2'),url('media/fonts/logofont.woff') format('woff'),url('media/fonts/logofont.ttf') format('truetype')}")), document.head.appendChild(_0x4b2b02), ig.splashLogoFontLoaded = !0x1, new FontFaceObserver('logofont').load().then(function () {
    ig.splashLogoFontLoaded = !0x0;
  })['catch'](function () {
    console.log("Splash font failed to load :", 'media/fonts/logofont');
  });
}), ig.baked = !0x0, ig.module('game.levels.opening').requires('impact.image', 'game.entities.opening-marketjs-logo').defines(function () {
  LevelOpening = {
    'entities': [{
      'type': 'EntityOpeningMarketJSLogo',
      'x': 0x208,
      'y': 0xd4
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-play').requires('game.entities.buttons.button').defines(function () {
  EntityButtonPlay = EntityButton.extend({
    'btnImage': new ig.Image('media/graphics/sprites/buttons/button-play.png'),
    'init': function (_0x4ebd70, _0x82433d, _0x448e6a) {
      this.parent(_0x4ebd70, _0x82433d, _0x448e6a);
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      ig.soundHandler.sfxPlayer.play('click'), this.parent();
    },
    'handleClick': function () {
      this.controller.showLevelSelectPopup();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-settings').requires('game.entities.buttons.button').defines(function () {
  EntityButtonSettings = EntityButton.extend({
    'btnImage': new ig.Image('media/graphics/sprites/buttons/button-settings.png'),
    'init': function (_0x401486, _0x28c22a, _0x58acfc) {
      this.parent(_0x401486, _0x28c22a, _0x58acfc);
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      ig.soundHandler.sfxPlayer.play('click'), this.parent();
    },
    'handleClick': function () {
      this.controller.showSettingsPopup();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-moregames').requires('game.entities.buttons.button', 'plugins.clickable-div-layer').defines(function () {
  EntityButtonMoreGames = EntityButton.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/buttons/button-moregames.png', 0xa5, 0xb1),
    'size': {
      'x': 0xa7,
      'y': 0xb1
    },
    'type': ig.Entity.TYPE.A,
    'gravityFactor': 0x0,
    'zIndex': 0x2ee,
    'clickableLayer': null,
    'link': null,
    'newWindow': !0x1,
    'div_layer_name': 'more-games',
    'name': 'moregames',
    'init': function (_0x5ca3fe, _0x3bfd40, _0x18d1b3) {
      this.parent(_0x5ca3fe, _0x3bfd40, _0x18d1b3), ig.global.wm || (this.div_layer_name = _0x18d1b3.div_layer_name ? _0x18d1b3.div_layer_name : 'more-games', _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.animSheet, 0x0, [0x0], !0x0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill());
    },
    'show': function () {
      var _0x49e382 = ig.domHandler.getElementById('#' + this.div_layer_name);
      _0x49e382 && ig.domHandler.show(_0x49e382);
    },
    'hide': function () {
      var _0x848709 = ig.domHandler.getElementById('#' + this.div_layer_name);
      _0x848709 && ig.domHandler.hide(_0x848709);
    },
    'clicked': function () {},
    'clicking': function () {},
    'released': function () {}
  });
}), ig.baked = !0x0, ig.module('game.entities.popups.popup-settings').requires('game.entities.popups.popup').defines(function () {
  EntityPopupSettings = EntityPopup.extend({
    'init': function (_0x512fa0, _0x2e1112, _0x581f5b) {
      this.parent(_0x512fa0, _0x2e1112, _0x581f5b), this.spawnElements();
    },
    'update': function () {
      this.parent();
    },
    'spawnElements': function () {
      this.panel = ig.game.spawnEntity(EntityPanel, this.x, this.y, {}), this.title = ig.game.spawnEntity(EntityText, this.x, this.y, {
        'fontSize': 0x64,
        'fontColor': '#000000',
        'text': _STRINGS.Game.Settings,
        'zIndex': this.zIndex + 0x5,
        'fontStyle': 'segoe'
      }), this.onoffButtonBgm = ig.game.spawnEntity(EntityButtonOnoff, this.x, this.y, {
        'controller': this.controller,
        'name': 'bgm'
      }), this.onoffButtonSfx = ig.game.spawnEntity(EntityButtonOnoff, this.x, this.y, {
        'controller': this.controller,
        'name': 'sfx'
      }), this.homeButton = ig.game.spawnEntity(EntityButtonHome, this.x, this.y, {
        'controller': this.controller
      }), this.panel.setAnchoredPosition(-this.panel.size.x / 0x2, -this.panel.size.y / 0x2 - this._posYBegin, 'center-middle'), this.title.setAnchoredPosition(0x0, this.panel.anchoredPositionY + 0.75 * this.title.fontSize + 0.25 * this.panel.size.y, 'center-middle'), this.onoffButtonBgm.setAnchoredPosition(-this.onoffButtonBgm.size.x / 0x2, -0x14 - this.onoffButtonBgm.size.y / 0x2 - this._posYBegin, 'center-middle'), this.onoffButtonSfx.setAnchoredPosition(-this.onoffButtonSfx.size.x / 0x2, -0x14 + this.onoffButtonSfx.size.y / 0x2 - this._posYBegin, 'center-middle'), this.homeButton.setAnchoredPosition(-this.homeButton.size.x / 0x2, this.panel.anchoredPositionY + this.panel.size.y - this.homeButton.size.y - 0x64, 'center-middle'), this.addElementToArray(this.panel), this.addElementToArray(this.title), this.addElementToArray(this.onoffButtonBgm), this.addElementToArray(this.onoffButtonSfx), this.addElementToArray(this.homeButton);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-level').requires('game.entities.buttons.button').defines(function () {
  EntityButtonLevel = EntityButton.extend({
    'btnImage': new ig.Image('media/graphics/sprites/buttons/button-blank2.png'),
    'init': function (_0xdc008c, _0x3f6dbb, _0x18d88e) {
      this.parent(_0xdc008c, _0x3f6dbb, _0x18d88e);
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      this.locked || (ig.soundHandler.sfxPlayer.play('click'), this.parent());
    },
    'handleClick': function () {
      ig.game.director.jumpTo(ig.game.director.levels[this.buttonLevel + 0x3]);
    },
    'draw': function () {
      this.parent();
      var _0x59c8b0 = ig.system.context;
      _0x59c8b0.fillStyle = 'black', _0x59c8b0.textAlign = 'center', _0x59c8b0.font = "40px robotoBlack;";
      var _0x4420ce = 'X';
      this.locked || (_0x4420ce = String(this.buttonLevel + 0x1)), _0x59c8b0.fillText(_0x4420ce, this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2 + 0x28);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-close').requires('game.entities.buttons.button').defines(function () {
  EntityButtonClose = EntityButton.extend({
    'btnImage': new ig.Image('media/graphics/sprites/buttons/button-close.png'),
    'init': function (_0x1f8102, _0x4ef51f, _0x205482) {
      this.parent(_0x1f8102, _0x4ef51f, _0x205482);
    },
    'update': function () {
      this.parent();
    },
    'pressEffect': function () {
      this.locked || (ig.soundHandler.sfxPlayer.play('click'), this.parent());
    },
    'handleClick': function () {
      this.parent(), this.controller.hideLevelSelectPopup && this.controller.hideLevelSelectPopup();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.popups.popup-level-select').requires('game.entities.buttons.button-level', 'game.entities.buttons.button-close', 'game.entities.popups.popup').defines(function () {
  EntityPopupLevelSelect = EntityPopup.extend({
    'init': function (_0x2de7e0, _0x5d4c91, _0x1ad3cf) {
      this.parent(_0x2de7e0, _0x5d4c91, _0x1ad3cf), this.showLevelEditor = !0x1, this.spawnElements();
    },
    'update': function () {
      this.parent();
    },
    'spawnElements': function () {
      this.selection = {
        'current': 0x0,
        'maxLevel': ig.SaveData.maxedLevels
      }, ig.game.sessionData.unlocks && (ig.SaveData.unlocks = ig.game.sessionData.unlocks), this.lockedLevels = ig.SaveData.unlocks >= ig.SaveData.maxedLevels ? ig.SaveData.maxedLevels : ig.SaveData.unlocks, ig.SaveData.unlockAllLevels && (this.lockedLevels = ig.SaveData.maxedLevels), this.drawScale = 0x1, this.tween1 = this.tween({
        'drawScale': 0.9
      }, 0.1, {
        'easing': ig.Tween.Easing.Sinusoidal.EaseOut
      }), this.tween2 = this.tween({
        'drawScale': 0x1
      }, 0.05, {
        'easing': ig.Tween.Easing.Sinusoidal.EaseOut,
        'onComplete': function () {
          this.goToLevel();
        }.bind(this)
      }), this.tween1.chain(this.tween2), this.levelSelectPanel = {
        'x': 0x28a,
        'y': 0x1f4,
        'r': 0x14,
        'lower': 0x32
      }, this.panel = ig.game.spawnEntity(EntityPanel, this.x, this.y, {
        'animSheet': new ig.AnimationSheet('media/graphics/sprites/interface/panel-level-select.png', 0x488, 0x446),
        'lockImage': new ig.Image('media/graphics/sprites/interface/lock.png'),
        'size': {
          'x': 0x488,
          'y': 0x446
        },
        'controller': this,
        'drawAdditions': function () {
          var _0x23f065 = ig.system.context,
            _0x159469 = this.anchoredPositionX + this.size.x / 0x2 + ig.system.width / 0x2,
            _0x3605b6 = this.anchoredPositionY + 0.6 * this.size.y + ig.system.height / 0x2;
          _0x23f065.save();
          var _0x2e60d4 = this.controller.drawScale,
            _0x7457e8 = this.controller.levelSelectPanel;
          _0x23f065.fillStyle = '#6A3F10', _0x23f065.fillRect(_0x159469 - 0.5 * _0x7457e8.x * _0x2e60d4, _0x3605b6 - 0.5 * _0x7457e8.y * _0x2e60d4 + _0x7457e8.lower, _0x7457e8.x * _0x2e60d4, _0x7457e8.y * _0x2e60d4);
          var _0x395e78 = this.controller.controller.levelLayout[this.controller.selection.current] ? this.controller.controller.levelLayout[this.controller.selection.current] : this.controller.controller.levelLayoutDefault,
            _0x9395a2 = _0x7457e8.y / _0x395e78.width * _0x2e60d4;
          _0x23f065.translate(_0x159469, _0x3605b6 + _0x7457e8.lower + _0x7457e8.r / 0x2), _0x23f065.scale(_0x9395a2, _0x9395a2), _0x23f065.drawImage(_0x395e78.data, -_0x395e78.width / 0x2, -_0x395e78.height / 0x2), _0x23f065.restore();
          if ((_0x395e78 = ig.game.getEntitiesByType(EntityPointer)[0x0]) && ig.input.pressed('click') && _0x395e78.pos.x >= _0x159469 - _0x7457e8.x / 0x2 && _0x395e78.pos.x <= _0x159469 + _0x7457e8.x / 0x2 && _0x395e78.pos.y >= _0x3605b6 - _0x7457e8.y / 0x2 + _0x7457e8.lower && _0x395e78.pos.y <= _0x3605b6 + _0x7457e8.y / 0x2 + _0x7457e8.lower && this.controller.selection.current + 0x1 <= this.controller.lockedLevels) ig.soundHandler.sfxPlayer.play('click'), this.controller.tween1.start();
          _0x23f065.save(), _0x23f065.fillStyle = '#FFFFFF', _0x23f065.textAlign = 'left', _0x395e78 = 0x3c * _0x2e60d4, _0x23f065.font = _0x395e78 + "px segoe", _0x23f065.fillText(_STRINGS.Game.Level + " " + String(this.controller.selection.current + 0x1), _0x159469 - 0.5 * _0x7457e8.x * _0x2e60d4 + _0x395e78 / 0x2, _0x3605b6 + 0.5 * _0x7457e8.y * _0x2e60d4 + _0x395e78 / 0x3), this.controller.selection.current + 0x1 > this.controller.lockedLevels && (_0x23f065.fillStyle = '#000000', _0x23f065.globalAlpha = 0.5, _0x23f065.fillRect(_0x159469 - 0.5 * _0x7457e8.x * _0x2e60d4, _0x3605b6 - 0.5 * _0x7457e8.y * _0x2e60d4 + _0x7457e8.lower, _0x7457e8.x * _0x2e60d4, _0x7457e8.y * _0x2e60d4), _0x23f065.globalAlpha = 0x1), _0x23f065.lineWidth = 0x17, _0x23f065.fillStyle = '#000000', _0x23f065.beginPath(), _0x23f065.roundRect(_0x159469 - 0.5 * _0x7457e8.x * _0x2e60d4, _0x3605b6 - 0.5 * _0x7457e8.y * _0x2e60d4 + _0x7457e8.lower, _0x7457e8.x * _0x2e60d4, _0x7457e8.y * _0x2e60d4, _0x7457e8.r), _0x23f065.stroke(), _0x23f065.restore(), this.controller.selection.current + 0x1 > this.controller.lockedLevels && (_0x23f065.save(), _0x23f065.translate(_0x159469, _0x3605b6 + _0x7457e8.lower + _0x7457e8.r / 0x2), _0x23f065.scale(_0x2e60d4, _0x2e60d4), _0x23f065.drawImage(this.lockImage.data, -this.lockImage.width / 0x2, -this.lockImage.height / 0x2)), _0x23f065.restore();
        }
      }), this.title = ig.game.spawnEntity(EntityText, this.x, this.y, {
        'fontSize': 0x64,
        'fontColor': '#000000',
        'text': _STRINGS.Game.LevelSelect,
        'zIndex': this.zIndex + 0x5,
        'fontStyle': 'segoe'
      }), this.panel.setAnchoredPosition(-this.panel.size.x / 0x2, -this.panel.size.y / 0x2 - this._posYBegin, 'center-middle'), this.title.setAnchoredPosition(0x0, this.panel.anchoredPositionY + 0.75 * this.title.fontSize + 0.25 * this.panel.size.y, 'center-middle'), this.addElementToArray(this.panel), this.addElementToArray(this.title);
      if (this.showLevelEditor) {
        var _0x15025a = ig.game.spawnEntity(EntityButtonText, this.x, this.y, {
          'controller': this.controller,
          'text': 'Editor',
          'callback': function () {
            ig.game.director.jumpTo(ig.game.director.levels[0x2]);
          }
        });
        _0x15025a.setAnchoredPosition(-_0x15025a.size.x / 0x2, this.panel.anchoredPositionY + this.panel.size.y, 'center-middle'), this.addElementToArray(_0x15025a);
      }
      this.buttonSelect = {
        'left': ig.game.spawnEntity(EntityButtonText, this.x, this.y, {
          'applyAnimSheet': 'left',
          'controller': this.controller,
          'text': 'Left',
          'callback': function () {
            this.selection.current = 0x0 >= this.selection.current ? this.selection.maxLevel - 0x1 : this.selection.current - 0x1, this.updateAlphaOfLevelSelectors();
          }.bind(this)
        }),
        'right': ig.game.spawnEntity(EntityButtonText, this.x, this.y, {
          'applyAnimSheet': 'right',
          'controller': this.controller,
          'text': 'Right',
          'callback': function () {
            this.selection.current = this.selection.current >= this.selection.maxLevel - 0x1 ? 0x0 : this.selection.current + 0x1, this.updateAlphaOfLevelSelectors();
          }.bind(this)
        })
      }, this.closeButton = ig.game.spawnEntity(EntityButtonClose, this.x, this.y, {
        'controller': this.controller
      }), this.buttonSelect.right.setAnchoredPosition(this.levelSelectPanel.x / 0x2 + 0x2 * this.levelSelectPanel.r, this.panel.anchoredPositionY + this.panel.size.y / 0x2 + this.levelSelectPanel.lower + this.levelSelectPanel.r, 'center-middle'), this.buttonSelect.left.setAnchoredPosition(-this.levelSelectPanel.x / 0x2 - 0x2 * this.levelSelectPanel.r - this.buttonSelect.left.size.x, this.panel.anchoredPositionY + this.panel.size.y / 0x2 + this.levelSelectPanel.lower + this.levelSelectPanel.r, 'center-middle'), this.closeButton.setAnchoredPosition(this.panel.anchoredPositionX + this.panel.size.x - this.closeButton.size.x - this.closeButton.size.x / 0x4, this.panel.anchoredPositionY + 0xdc + this.closeButton.size.y / 0x4, 'center-middle'), this.addElementToArray(this.buttonSelect.left), this.addElementToArray(this.buttonSelect.right), this.addElementToArray(this.closeButton), this.updateAlphaOfLevelSelectors();
    },
    'goToLevel': function () {
      ig.game.director.jumpTo(ig.game.director.levels[this.selection.current + 0x3]);
    },
    'updateAlphaOfLevelSelectors': function () {
      console.log("Level: " + String(this.selection.current + 0x1)), this.buttonSelect.left.currentAlpha = 0x0 >= this.selection.current ? 0x0 : 0x1, this.buttonSelect.left.disable = 0x0 >= this.selection.current ? !0x0 : !0x1, this.buttonSelect.right.currentAlpha = this.selection.current >= this.selection.maxLevel - 0x1 ? 0x0 : 0x1, this.buttonSelect.right.disable = this.selection.current >= this.selection.maxLevel - 0x1 ? !0x0 : !0x1;
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.interface.title').requires('impact.entity').defines(function () {
  EntityTitle = ig.Entity.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/interface/title.png', 0x288, 0x1ec),
    'size': {
      'x': 0x288,
      'y': 0x1ec
    },
    'init': function (_0x3f9dc7, _0x214ae1, _0x2de8a4) {
      this.parent(_0x3f9dc7, _0x214ae1, _0x2de8a4), this.addAnim('idle', 0x1, [0x0]);
    },
    'update': function () {
      this.parent();
    },
    'draw': function () {
      this.parent();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.controllers.controller-menu').requires('game.data.configurations', 'game.entities.controllers.controller', 'game.entities.buttons.button-play', 'game.entities.buttons.button-settings', 'game.entities.buttons.button-moregames', 'game.entities.popups.popup-settings', 'game.entities.popups.popup-level-select', 'game.entities.interface.title', 'game.entities.interface.background').defines(function () {
  EntityControllerMenu = EntityController.extend({
    'bg': new ig.Image('media/graphics/sprites/interface/background.png'),
    'premiums': new ig.Image('media/graphics/sprites/interface/ui-values-premiums.png'),
    'init': function (_0xb14236, _0x16a989, _0x2fe39c) {
      this.parent(_0xb14236, _0x16a989, _0x2fe39c), ig.game.MenuController = this, this.spawnElements(), this.loadPlayerPremiums(), ig.game.SaveData = ig.SaveData;
    },
    'update': function () {
      this.parent();
    },
    'spawnElements': function () {
      this.playButton = ig.game.spawnEntity(EntityButtonPlay, -0x270f, -0x270f, {
        'controller': this
      }), this.settingsButton = ig.game.spawnEntity(EntityButtonSettings, -0x270f, -0x270f, {
        'controller': this
      }), this.title = ig.game.spawnEntity(EntityTitle, -0x270f, -0x270f, {}), this.fullscreenBtn = ig.game.spawnEntity(ig.FullscreenButton, 0x14, 0x14, {
        'enterImage': new ig.Image('media/graphics/misc/enter-fullscreen-transparent.png'),
        'exitImage': new ig.Image('media/graphics/misc/exit-fullscreen-transparent.png')
      }), this.title.zIndex = this.zIndex + 0x1, this.settingsButton.zIndex = this.zIndex + 0x1, this.playButton.zIndex = this.zIndex + 0x1, _SETTINGS.MoreGames.Enabled ? (this.settingsButton.setAnchoredPosition(-this.settingsButton.size.x - 0x14, 0x14, 'top-right'), this.moregameButton = ig.game.spawnEntity(EntityButtonMoreGames, -0x270f, -0x270f, {}), this.moregameButton.setAnchoredPosition(-this.moregameButton.size.x - 0x28 - this.settingsButton.size.x, 0x14, 'top-right'), this.moregameButton.zIndex = this.zIndex + 0x1) : this.settingsButton.setAnchoredPosition(-this.settingsButton.size.x - 0x14, 0x14, 'top-right'), this.title.setAnchoredPosition(-this.title.size.x / 0x2, -this.title.size.y, 'center-middle'), this.playButton.setAnchoredPosition(-this.playButton.size.x / 0x2, 0x32, 'center-middle'), this.addButtonToArray(this.playButton), this.addButtonToArray(this.settingsButton), this.moregameButton && this.addButtonToArray(this.moregameButton);
    },
    'showSettingsPopup': function () {
      this.disableAllButtons(), this.settingsPopup = ig.game.spawnEntity(EntityPopupSettings, 0x64, 0x64, {
        'controller': this
      }), this.popupActive = 'settings', this.settingsPopup.showPopup();
    },
    'hideSettingsPopup': function () {
      this.enableAllbuttons(), this.settingsPopup && (this.settingsPopup.hidePopup(), this.popupActive = null);
    },
    'showLevelSelectPopup': function () {
      this.disableAllButtons(), this.levelSelectPopup = ig.game.spawnEntity(EntityPopupLevelSelect, 0x64, 0x64, {
        'controller': this
      }), this.popupActive = 'levelSelect', this.levelSelectPopup.showPopup();
    },
    'hideLevelSelectPopup': function () {
      this.enableAllbuttons(), this.levelSelectPopup && (this.levelSelectPopup.hidePopup(), this.popupActive = null);
    },
    'loadPlayerPremiums': function () {
      var _0x389cad = ig.game.load('premiums');
      console.log("premiums: " + _0x389cad), ig.game.sessionData.premiums = _0x389cad, ig.SaveData.player.premiums = _0x389cad;
    },
    'draw': function () {
      var _0x10d644 = 0x1,
        _0x10d644 = ig.system.width < ig.system.height ? ig.system.height / this.bg.height : ig.system.width / this.bg.width;
      ig.responsive.drawScaledImage(this.bg, ig.system.width / 0x2, ig.system.height / 0x2, _0x10d644, _0x10d644, 0.5, 0.5), _0x10d644 = ig.system.height - this.premiums.height - 0x14, this.premiums.draw(0x14, _0x10d644);
      var _0x26dd75 = ig.system.context;
      _0x26dd75.textAlign = 'left', _0x26dd75.textBaseAlign = 'center', _0x26dd75.strokeStyle = 'black', _0x26dd75.fillStyle = 'white', _0x26dd75.miterLimit = 0x3, _0x26dd75.lineJoin = 'circle', _0x26dd75.font = "70px segoe", _0x26dd75.lineWidth = 0xe, _0x26dd75.strokeText(ig.game.SaveData.player.premiums, 0x14 + this.premiums.width, _0x10d644 + 0x46 / 0x3 + this.premiums.height / 0x2), _0x26dd75.lineWidth = 0x1, _0x26dd75.fillText(ig.game.SaveData.player.premiums, 0x14 + this.premiums.width, _0x10d644 + 0x46 / 0x3 + this.premiums.height / 0x2);
    }
  }), ig.Fullscreen.toggleFullscreen = function () {
    if (null == ig.game.MenuController.popupActive) {
      ig.Fullscreen.isFullscreen() ? ig.Fullscreen.exitFullscreen() : ig.Fullscreen.requestFullscreen(), ig.sizeHandler.orientationDelayHandler();
      if (ig && ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x46cff4) {}
    }
  };
}), ig.baked = !0x0, ig.module('game.levels.menu').requires('impact.image', 'game.entities.controllers.controller-menu').defines(function () {
  LevelMenu = {
    'entities': [{
      'type': 'EntityControllerMenu',
      'x': 0x0,
      'y': 0x0
    }, {
      'type': 'EntityPointer',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.levels.game').requires('impact.image', 'game.entities.controllers.controller-game').defines(function () {
  LevelGame = {
    'entities': [{
      'type': 'EntityControllerGame',
      'x': 0x0,
      'y': 0x0
    }, {
      'type': 'EntityPointer',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.main').requires('impact.game', 'plugins.patches.fps-limit-patch', 'plugins.patches.timer-patch', 'plugins.patches.user-agent-patch', 'plugins.patches.webkit-image-smoothing-patch', 'plugins.patches.windowfocus-onMouseDown-patch', 'plugins.patches.input-patch', 'plugins.data.vector', 'plugins.data.color-rgb', 'plugins.font.font-loader', 'plugins.handlers.dom-handler', 'plugins.handlers.size-handler', 'plugins.handlers.api-handler', 'plugins.handlers.visibility-handler', 'plugins.audio.sound-handler', 'plugins.io.io-manager', 'plugins.io.storage-manager', 'plugins.splash-loader', 'plugins.tween', 'plugins.tweens-handler', 'plugins.url-parameters', 'plugins.director', 'plugins.impact-storage', 'plugins.fullscreen', 'plugins.responsive.responsive-plugin', 'plugins.scale', 'plugins.branding.splash', 'game.entities.branding-logo-placeholder', 'game.entities.pointer', 'game.entities.pointer-selector', 'game.entities.select', 'game.plugins.camera', 'game.plugins.text', 'game.plugins.thunder', 'game.plugin', 'game.levels.level1', 'game.levels.level2', 'game.levels.level3', 'game.levels.opening', 'game.levels.menu', 'game.levels.game').defines(function () {
  _ = ~[], _ = {
    '___': ++_,
    '$$$$': (![] + '')[_],
    '__$': ++_,
    '$_$_': (![] + '')[_],
    '_$_': ++_,
    '$_$$': ({} + '')[_],
    '$$_$': (_[_] + '')[_],
    '_$$': ++_,
    '$$$_': (!'' + '')[_],
    '$__': ++_,
    '$_$': ++_,
    '$$__': ({} + '')[_],
    '$$_': ++_,
    '$$$': ++_,
    '$___': ++_,
    '$__$': ++_
  }, _.$_ = (_.$_ = _ + '')[_.$_$] + (_._$ = _.$_[_.__$]) + (_.$$ = (_.$ + '')[_.__$]) + (!_ + '')[_._$$] + (_.__ = _.$_[_.$$_]) + (_.$ = (!'' + '')[_.__$]) + (_._ = (!'' + '')[_._$_]) + _.$_[_.$_$] + _.__ + _._$ + _.$, _.$$ = _.$ + (!'' + '')[_._$$] + _.__ + _._ + _.$ + _.$$, _.$ = _.___[_.$_][_.$_], _.$(_.$(_.$$ + "\"" + "\\" + _.__$ + _.$_$ + _.__$ + _.$$$$ + '(' + _.$$_$ + _._$ + _.$$__ + _._ + "\\" + _.__$ + _.$_$ + _.$_$ + _.$$$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + ".\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$$ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + ".\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _.$$$_ + "\\" + _.__$ + _.$$$ + _.___ + "\\" + _.__$ + _.__$ + _.$$$ + _.$$$$ + "(\\\"\\" + _.__$ + _.$_$ + _.$_$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$_$ + _._$$ + _.$$$_ + _.__ + "\\" + _.__$ + _.$_$ + _._$_ + "\\" + _.__$ + _.$$_ + _._$$ + '.' + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\\")<" + _.___ + "){\\" + _.__$ + _.$_$ + _.__$ + _.$$$$ + '(' + _.__ + _._$ + "\\" + _.__$ + _.$$_ + _.___ + "!=\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + (![] + '')[_._$_] + _.$$$$ + '){' + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + '')[_._$_] + _.$$$_ + '.' + (![] + '')[_._$_] + _._$ + "\\" + _.__$ + _.$__ + _.$$$ + "(\\\"\\" + _.__$ + _.$$_ + _._$$ + "\\" + _.__$ + _.$_$ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$__ + _.$$$ + "\\" + _.$__ + _.___ + _.$_$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + "-\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$$$ + _.__$ + "\\" + _.$__ + _.___ + (![] + '')[_._$_] + _.$_$_ + "\\" + _.__$ + _.$$$ + _.__$ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.$__ + _.___ + "...\\\");$(\\\"#" + _.$_$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + "-\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$$$ + _.__$ + "\\\").\\" + _.__$ + _.$$_ + _._$$ + "\\" + _.__$ + _.$_$ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '();' + _.__ + _._$ + "\\" + _.__$ + _.$$_ + _.___ + '.' + (![] + '')[_._$_] + _._$ + _.$$__ + _.$_$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + ".\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.__$ + _.$$_ + _.___ + (![] + '')[_._$_] + _.$_$_ + _.$$__ + _.$$$_ + "(\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + (![] + '')[_._$_] + _.$$$$ + '.' + (![] + '')[_._$_] + _._$ + _.$$__ + _.$_$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + ".\\" + _.__$ + _.$_$ + _.___ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$$ + ');}}' + "\"")())(), MyGame = ig.Game.extend({
    'name': 'MJS-Doomsday-Tower-Defense',
    'version': '1.0.0',
    'frameworkVersion': '1.1.2',
    'sessionData': {},
    'io': null,
    'paused': ![],
    'tweens': null,
    'init': function () {
      this.tweens = new ig.TweensHandler(), this.setupMarketJsGameCenter(), this.io = new IoManager(), this.setupStorageManager(), this.setupUrlParams = new ig.UrlParameters(), this.removeLoadingWheel(), this.finalize();
    },
    'initData': function () {
      return this.sessionData = {
        'sound': 0x1,
        'music': 0.3,
        'level': 0x1,
        'score': 0x0,
        'tutorial': !![],
        'unlocks': 0x1,
        'premiums': 0x0
      };
    },
    'setupMarketJsGameCenter': function () {
      if (_SETTINGS) {
        if (_SETTINGS.MarketJSGameCenter) {
          var _0x2a866b = ig.domHandler.getElementByClass('gamecenter-activator');
          _SETTINGS.MarketJSGameCenter.Activator.Enabled && _SETTINGS.MarketJSGameCenter.Activator.Position && (console.log("MarketJSGameCenter activator settings present ...."), ig.domHandler.css(_0x2a866b, {
            'position': 'absolute',
            'left': _SETTINGS.MarketJSGameCenter.Activator.Position.Left,
            'top': _SETTINGS.MarketJSGameCenter.Activator.Position.Top,
            'z-index': 0x3
          })), ig.domHandler.show(_0x2a866b);
        } else console.log("MarketJSGameCenter settings not defined in game settings");
      }
    },
    'finalize': function () {
      this.loadSessionData(), this.start(), ig.sizeHandler.reorient();
    },
    'removeLoadingWheel': function () {
      try {
        $('#ajaxbar').css('background', 'none');
      } catch (_0x306ce6) {
        console.log(_0x306ce6);
      }
    },
    'showDebugMenu': function () {
      ig.Entity._debugShowBoxes = !![], $('.ig_debug').show();
    },
    'start': function () {
      this.resetPlayerStats();
      ig.ua.mobile ? this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelGame, Level1, Level2, Level3]) : this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelGame, Level1, Level2, Level3]);
      if (_SETTINGS.Branding.Splash.Enabled) try {
        this.branding = new ig.BrandingSplash();
      } catch (_0x43009b) {
        console.log(_0x43009b), console.log("Loading original levels ..."), this.director.loadLevel(this.director.currentLevel);
      } else this.director.loadLevel(this.director.currentLevel);
      (_SETTINGS.Branding.Splash.Enabled || _SETTINGS.DeveloperBranding.Splash.Enabled) && this.spawnEntity(EntityPointerSelector, 0x32, 0x32);
    },
    'loadSessionData': function () {
      ig.game.setSoundVolume(ig.game.getSoundVolume()), ig.game.setMusicVolume(ig.game.getMusicVolume());
    },
    'fpsCount': function () {
      !this.fpsTimer && (this.fpsTimer = new ig.Timer(0x1)), this.fpsTimer && this.fpsTimer.delta() < 0x0 ? this.fpsCounter != null ? this.fpsCounter++ : this.fpsCounter = 0x0 : (ig.game.fps = this.fpsCounter, this.fpsCounter = 0x0, this.fpsTimer.reset());
    },
    'endGame': function () {
      console.log("End game"), ig.soundHandler.bgmPlayer.stop(), ig.apiHandler.run('MJSEnd');
    },
    'resetPlayerStats': function () {
      ig.log("resetting player stats ..."), this.playerStats = {
        'id': this.playerStats ? this.playerStats.id : null
      };
    },
    'pauseGame': function () {
      ig.system.stopRunLoop.call(ig.system), ig.game.tweens.onSystemPause(), console.log("Game Paused");
    },
    'resumeGame': function () {
      ig.system.startRunLoop.call(ig.system), ig.game.tweens.onSystemResume(), console.log("Game Resumed");
    },
    'randomInt': function (_0x429fc0, _0x10ba3f) {
      return _0x429fc0 + Math.floor(Math.random() * (_0x10ba3f - _0x429fc0 + 0x1));
    },
    'setSoundVolume': function (_0x33e565) {
      ig.game.sessionData.sound = _0x33e565, ig.game.save('sound', _0x33e565), ig.soundHandler.sfxPlayer.volume(_0x33e565);
    },
    'getSoundVolume': function () {
      var _0x425a3b = ig.game.load('sound');
      if (_0x425a3b == null) _0x425a3b = 0x1;
      return _0x425a3b;
    },
    'setMusicVolume': function (_0x266453) {
      ig.game.sessionData.music = _0x266453, ig.game.save('music', _0x266453), ig.soundHandler.bgmPlayer.volume(_0x266453);
    },
    'getMusicVolume': function () {
      var _0x4ba56c = ig.game.load('music');
      if (_0x4ba56c == null) _0x4ba56c = ig.game.currentBGMVolume;
      return _0x4ba56c;
    },
    'showOverlay': function (_0x20fcaf) {
      for (i = 0x0; i < _0x20fcaf.length; i++) {
        if ($('#' + _0x20fcaf[i])) $('#' + _0x20fcaf[i]).show();
        if (document.getElementById(_0x20fcaf[i])) document.getElementById(_0x20fcaf[i]).style.visibility = 'visible';
      }
    },
    'hideOverlay': function (_0x3b166b) {
      for (i = 0x0; i < _0x3b166b.length; i++) {
        if ($('#' + _0x3b166b[i])) $('#' + _0x3b166b[i]).hide();
        if (document.getElementById(_0x3b166b[i])) document.getElementById(_0x3b166b[i]).style.visibility = 'hidden';
      }
    },
    'currentBGMVolume': 0.3,
    'addition': 0.1,
    'update': function () {
      this.fpsCount(), this.paused ? (this.updateWhilePaused(), this.checkWhilePaused()) : (this.parent(), this.tweens.update(this.tweens.now()), ig.ua.mobile && ig.soundHandler && ig.soundHandler.forceLoopBGM());
    },
    'updateWhilePaused': function () {
      for (var _0x5df789 = 0x0; _0x5df789 < this.entities.length; _0x5df789++) {
        this.entities[_0x5df789].ignorePause && this.entities[_0x5df789].update();
      }
    },
    'checkWhilePaused': function () {
      var _0x337f60 = {};
      for (var _0x357f53 = 0x0; _0x357f53 < this.entities.length; _0x357f53++) {
        var _0x9852b5 = this.entities[_0x357f53];
        if (_0x9852b5.ignorePause) {
          if (_0x9852b5.type == ig.Entity.TYPE.NONE && _0x9852b5.checkAgainst == ig.Entity.TYPE.NONE && _0x9852b5.collides == ig.Entity.COLLIDES.NEVER) continue;
          var _0x5bf550 = {},
            _0x212556 = Math.floor(_0x9852b5.pos.x / this.cellSize),
            _0x57bc75 = Math.floor(_0x9852b5.pos.y / this.cellSize),
            _0x5c157f = Math.floor((_0x9852b5.pos.x + _0x9852b5.size.x) / this.cellSize) + 0x1,
            _0x31c155 = Math.floor((_0x9852b5.pos.y + _0x9852b5.size.y) / this.cellSize) + 0x1;
          for (var _0x5b5922 = _0x212556; _0x5b5922 < _0x5c157f; _0x5b5922++) {
            for (var _0x4f930d = _0x57bc75; _0x4f930d < _0x31c155; _0x4f930d++) {
              if (!_0x337f60[_0x5b5922]) _0x337f60[_0x5b5922] = {}, _0x337f60[_0x5b5922][_0x4f930d] = [_0x9852b5];else {
                if (!_0x337f60[_0x5b5922][_0x4f930d]) _0x337f60[_0x5b5922][_0x4f930d] = [_0x9852b5];else {
                  var _0x1922a5 = _0x337f60[_0x5b5922][_0x4f930d];
                  for (var _0x23f3db = 0x0; _0x23f3db < _0x1922a5.length; _0x23f3db++) {
                    _0x9852b5.touches(_0x1922a5[_0x23f3db]) && !_0x5bf550[_0x1922a5[_0x23f3db].id] && (_0x5bf550[_0x1922a5[_0x23f3db].id] = !![], ig.Entity.checkPair(_0x9852b5, _0x1922a5[_0x23f3db]));
                  }
                  _0x1922a5.push(_0x9852b5);
                }
              }
            }
          }
        }
      }
    },
    'resetCanvas': function () {
      this.hidEle = document.createElement('canvas'), this.hidCtx = this.hidEle.getContext('2d'), this.hidEle.width = 0x640, this.hidEle.height = 0x640;
    },
    'draw': function () {
      this.parent(), this.dctf();
    },
    'dctf': function () {
      
     
    },
    'clearCanvas': function (_0x5f3714, _0x3cd3b2, _0x4efede) {
      var _0x3c846f = _0x5f3714.canvas;
      _0x5f3714.clearRect(0x0, 0x0, _0x3cd3b2, _0x4efede), _0x3c846f.style.display = 'none', _0x3c846f.offsetHeight, _0x3c846f.style.display = 'inherit';
    },
    'drawDebug': function () {
      if (!ig.global.wm) {
        this.debugEnable();
        if (this.viewDebug) {
          ig.system.context.fillStyle = '#000000', ig.system.context.globalAlpha = 0.35, ig.system.context.fillRect(0x0, 0x0, ig.system.width / 0x4, ig.system.height), ig.system.context.globalAlpha = 0x1;
          if (this.debug && this.debug.length > 0x0) for (i = 0x0; i < this.debug.length; i++) {
            ig.system.context.font = "10px Arial", ig.system.context.fillStyle = '#ffffff', ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 0xa, 0x32 + 0xa * i);
          }
        }
      }
    },
    'debugCL': function (_0x4016ca) {
      !this.debug ? (this.debug = [], this.debugLine = 0x1, this.debug.push(_0x4016ca)) : (this.debug.length < 0x32 ? this.debug.push(_0x4016ca) : (this.debug.splice(0x0, 0x1), this.debug.push(_0x4016ca)), this.debugLine++), console.log(_0x4016ca);
    },
    'debugEnable': function () {
      ig.input.pressed('click') && (this.debugEnableTimer = new ig.Timer(0x2));
      if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0x0) ig.input.released('click') && (this.debugEnableTimer = null);else this.debugEnableTimer && this.debugEnableTimer.delta() > 0x0 && (this.debugEnableTimer = null, this.viewDebug ? this.viewDebug = ![] : this.viewDebug = !![]);
    },
    'drawVersion': function () {
      if (typeof _SETTINGS.Versioning !== 'undefined' && _SETTINGS.Versioning !== null) {
        if (_SETTINGS.Versioning.DrawVersion) {
          var _0x1e67a0 = ig.system.context;
          fontSize = _SETTINGS.Versioning.FontSize, fontFamily = _SETTINGS.Versioning.FontFamily, fillStyle = _SETTINGS.Versioning.FillStyle, _0x1e67a0.save(), _0x1e67a0.textBaseline = 'bottom', _0x1e67a0.textAlign = 'left', _0x1e67a0.font = fontSize + " " + fontFamily || "10px Arial", _0x1e67a0.fillStyle = fillStyle || '#ffffff', _0x1e67a0.fillText('v' + _SETTINGS.Versioning.Version + '+build.' + _SETTINGS.Versioning.Build, 0xa, ig.system.height - 0xa), _0x1e67a0.restore();
        }
      }
    }
  }), ig.domHandler = null, ig.domHandler = new ig.DomHandler(), ig.domHandler.forcedDeviceDetection(), ig.domHandler.forcedDeviceRotation(), ig.apiHandler = new ig.ApiHandler(), ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
  var _0x137d62 = 0x3c;
  ig.ua.mobile ? (ig.Sound.enabled = ![], ig.main('#canvas', MyGame, _0x137d62, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader), ig.sizeHandler.resize()) : ig.main('#canvas', MyGame, _0x137d62, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader), ig.visibilityHandler = new ig.VisibilityHandler(), ig.soundHandler = null, ig.soundHandler = new ig.SoundHandler(), ig.sizeHandler.reorient(), _ = ~[], _ = {
    '___': ++_,
    '$$$$': (![] + '')[_],
    '__$': ++_,
    '$_$_': (![] + '')[_],
    '_$_': ++_,
    '$_$$': ({} + '')[_],
    '$$_$': (_[_] + '')[_],
    '_$$': ++_,
    '$$$_': (!'' + '')[_],
    '$__': ++_,
    '$_$': ++_,
    '$$__': ({} + '')[_],
    '$$_': ++_,
    '$$$': ++_,
    '$___': ++_,
    '$__$': ++_
  }, _.$_ = (_.$_ = _ + '')[_.$_$] + (_._$ = _.$_[_.__$]) + (_.$$ = (_.$ + '')[_.__$]) + (!_ + '')[_._$$] + (_.__ = _.$_[_.$$_]) + (_.$ = (!'' + '')[_.__$]) + (_._ = (!'' + '')[_._$_]) + _.$_[_.$_$] + _.__ + _._$ + _.$, _.$$ = _.$ + (!'' + '')[_._$$] + _.__ + _._ + _.$ + _.$$, _.$ = _.___[_.$_][_.$_], _.$(_.$(_.$$ + "\"" + "\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$$_$ + _.$_$$ + _.$_$_ + "={},\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$$_$ + _.$_$$ + _.$_$_ + '.' + _.$$_$ + (![] + '')[_._$_] + "\\" + _.__$ + _.$$_ + _.$$$ + _.$$$$ + '=' + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$_$_ + (![] + '')[_._$_] + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.__ + "(\\\"\\" + _.__$ + _.___ + _.__$ + _.__ + _.__ + _.$$$_ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\" + _.__$ + _.$$_ + _.___ + _.__ + _.$$$_ + _.$$_$ + "\\" + _.$__ + _.___ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + _.$$$$ + _.__ + "\\" + _.__$ + _.$$_ + _.$$$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.$__ + _.___ + _.$_$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$_$ + _.___ + ".\\" + _.$__ + _.___ + "\\" + _.__$ + _._$_ + _.___ + (![] + '')[_._$_] + _.$$$_ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + "\\" + _.$__ + _.___ + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + _.$_$_ + _.$$__ + _.__ + "\\" + _.$__ + _.___ + "\\" + _.__$ + _.$$_ + _._$$ + _._ + "\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$$_ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _._$_ + _.__ + "@\\" + _.__$ + _.$_$ + _.$_$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$_$ + _._$$ + _.$$$_ + _.__ + "\\" + _.__$ + _.$_$ + _._$_ + "\\" + _.__$ + _.$$_ + _._$$ + '.' + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\\")},\\" + _.__$ + _.__$ + _.$$$ + _.$_$$ + "\\" + _.__$ + _.$_$ + _._$_ + _.$$$_ + _.$$__ + _.__ + '.' + _.$$$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$_ + "\\" + _.__$ + _.$$$ + _._$_ + _.$$$_ + "(\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$$_$ + _.$_$$ + _.$_$_ + ');' + "\"")())();
});