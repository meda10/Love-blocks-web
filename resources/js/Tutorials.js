export default () => {
  const loadImageBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'love_draw',
        id: '#,^Bz1J+EGM*RQ3.\\/3FE',
        x: 88,
        y: 338,
        inputs: {
          input: {
            block: {
              type: 'graphics_draw',
              id: 'F[4\\/$^UtWHx`mOQ:$^lf',
              fields: { x: 0, y: 0, r: 0, sx: 1, sy: 1, ox: 0, oy: 0, kx: 0, ky: 0 },
              inputs: {
                drawable: {
                  block: {
                    type: 'variables_get',
                    id: '(@P*=6NP3dOfO|(]@K(p',
                    fields: { VAR: { id: '%m+~Mk2-i;D(WWLR-sFo' } },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'love_load',
        id: 'Ht:*\\/+=hj?GU#4Cc?glI',
        x: 88,
        y: 263,
        inputs: {
          input: {
            block: {
              type: 'variables_set',
              id: 'i-VuoGuTYi=_2Cn^mR!@',
              fields: { VAR: { id: '%m+~Mk2-i;D(WWLR-sFo' } },
              inputs: {
                VALUE: {
                  block: {
                    type: 'graphics_newimage',
                    id: '1%.7j,_}D$CDaraLc^1i',
                    fields: { filename: 'resources\\/image.jpg' },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, { name: 'image', id: '%m+~Mk2-i;D(WWLR-sFo' }],
  }
  const loadImageCode = `function love.load()
\timage = love.graphics.newImage("resources/image.jpg")
end

function love.draw()
\tlove.graphics.draw(image, 0, 0)
end`

  const keyIsDownBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'love_draw',
        id: '#,^Bz1J+EGM*RQ3.\\/3FE',
        x: 88,
        y: 413,
        inputs: {
          input: {
            block: {
              type: 'controls_if',
              id: 'H.iufD]w=nLPI99;EOGw',
              extraState: { hasElse: true },
              inputs: {
                IF0: { block: { type: 'keyboard_isdown', id: '#)XDt53C-mvry)hLcpuz', fields: { key: 'x' } } },
                DO0: {
                  block: {
                    type: 'graphics_print',
                    id: 'vn%27J|ytG\\/kjsV(p7^b',
                    inputs: {
                      text: {
                        block: {
                          type: 'text',
                          id: 'sW*SOJ.Za65VdQ#wzx=X',
                          fields: { TEXT: 'The "X" key is down' },
                        },
                      },
                      x: { block: { type: 'math_number', id: 'Ij!xb_@rq%w#E%}b=G}@', fields: { NUM: 50 } } },
                      y: { block: { type: 'math_number', id: '-e|#e^$SAWJ(W8aXt{K^', fields: { NUM: 50 } } },
                      r: { block: { type: 'math_number', id: '=h.htWX}y+E.laJ^P(aL', fields: { NUM: 0 } } },
                      sx: { block: { type: 'math_number', id: '}v-j;Xvoejk33?`O[DHS', fields: { NUM: 1 } } },
                      sy: { block: { type: 'math_number', id: 'D)4LN$eYJJVU;,t$DH5E', fields: { NUM: 1 } } },
                      ox: { block: { type: 'math_number', id: 'j8rd-(H[Ibj{kwO{,SC1', fields: { NUM: 0 } } },
                      oy: { block: { type: 'math_number', id: 'H$MOGh9-:i=$g{C7Pbbt', fields: { NUM: 0 } } },
                      kx: { block: { type: 'math_number', id: 'CirueS8CSo~|ZRyCpCkW', fields: { NUM: 0 } } },
                      ky: { block: { type: 'math_number', id: 'j:_$\\/b_0]uLR~+T{%8+_', fields: { NUM: 0 } } },
                    },
                  },
                },
                ELSE: {
                  block: {
                    type: 'graphics_print',
                    id: 'ifL-Q!p:CUySbBbIEleV',
                    inputs: {
                      text: {
                        block: {
                          type: 'text',
                          id: 'fy}Cyu:|E+!OR?4xrO~:',
                          fields: { TEXT: 'The "X" key is NOT down' },
                        },
                      },
                      x: { block: { type: 'math_number', id: '5=|.K.Ur%eUJ*+da1:!X', fields: { NUM: 50 } } },
                      y: { block: { type: 'math_number', id: 'Y-^ql({tg5#{31oE`1Ql', fields: { NUM: 50 } } },
                      r: { block: { type: 'math_number', id: 'pqf`(bb1?XOu}uvoWa0@', fields: { NUM: 0 } } },
                      sx: { block: { type: 'math_number', id: 'N{0u}lb\\/0?Agwa5QO0i8', fields: { NUM: 1 } } },
                      sy: { block: { type: 'math_number', id: 'S:[=qP}u|:{|YvXw{@3I', fields: { NUM: 1 } } },
                      ox: { block: { type: 'math_number', id: 'uSEGegpbz6SZ}WMbOt!.', fields: { NUM: 0 } } },
                      oy: { block: { type: 'math_number', id: 'uVz8*VIFU`[zvCrHr{%H', fields: { NUM: 0 } } },
                      kx: { block: { type: 'math_number', id: 'j4fY7_b,(1tJ$^9JgttE', fields: { NUM: 0 } } },
                      ky: { block: { type: 'math_number', id: 'WBCjAXLG.$IDmg,Lk@+m', fields: { NUM: 0 } } },
                    },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'love_load',
        id: 'Ht:*\\/+=hj?GU#4Cc?glI',
        x: 88,
        y: 313,
        inputs: {
          input: {
            block: {
              type: 'graphics_setnewfont',
              id: '6WLD{:r9+T4LHrw9Zrk(',
              inputs: { size: { block: { type: 'math_number', id: 'R2hVAPigu{$I,=+|*Tj?', fields: { NUM: 12 } } } },
            },
          },
        },
      }],
    },
    variables: [{ name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, { name: 'image', id: '%m+~Mk2-i;D(WWLR-sFo' }],
  }
  const keyIsDownCode = `function love.load()
  love.graphics.setNewFont( 12 )
end

function love.draw()
  if love.keyboard.isDown("x") then
    love.graphics.print('The "X" key is down', 50, 50, 0, 1, 1 , 0, 0, 0, 0)
  else
    love.graphics.print('The "X" key is NOT down', 50, 50, 0, 1, 1 , 0, 0, 0, 0)
  end
end`

  const moveWithKeyboardBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'love_draw',
        id: '#,^Bz1J+EGM*RQ3.\\/3FE',
        x: 88,
        y: 413,
        inputs: {
          input: {
            block: {
              type: 'graphics_setcolor',
              id: '}x({cd9wx}y7)99]hMB-',
              fields: { red: 1, green: 0, blue: 0, alpha: 1 },
              next: {
                block: {
                  type: 'graphics_rectangle',
                  id: 'u@;iw)FN:{XeIfseTs-\\/',
                  fields: { mode: 'fill' },
                  inputs: {
                    x: {
                      block: {
                        type: 'variables_get',
                        id: '1a{J}jzhw,1F7emO!8EB',
                        fields: { VAR: { id: 'IJ7]gk-LGS!XJjIjc5ie' } },
                      },
                    },
                    y: {
                      block: {
                        type: 'variables_get',
                        id: '.;U(6c#$UAbltyutxzUU',
                        fields: { VAR: { id: 'V^)X29B$\\/zH~5@~EHeQ+' } },
                      },
                    },
                    width: { block: { type: 'math_number', id: '=h.htWX}y+E.laJ^P(aL', fields: { NUM: 20 } } },
                    height: { block: { type: 'math_number', id: '}v-j;Xvoejk33?`O[DHS', fields: { NUM: 20 } } },
                    rx: { block: { type: 'math_number', id: 'j8rd-(H[Ibj{kwO{,SC1', fields: { NUM: 0 } } },
                    ry: { block: { type: 'math_number', id: 'H$MOGh9-:i=$g{C7Pbbt', fields: { NUM: 0 } } },
                    segments: { block: { type: 'math_number', id: 'CirueS8CSo~|ZRyCpCkW', fields: { NUM: 0 } } },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'love_load',
        id: 'Ht:*\\/+=hj?GU#4Cc?glI',
        x: 88,
        y: 263,
        inputs: {
          input: {
            block: {
              type: 'variables_set',
              id: '0oLxu1=8z}?~xm;:U2Cn',
              fields: { VAR: { id: 'V^)X29B$\\/zH~5@~EHeQ+' } },
              inputs: { VALUE: { block: { type: 'math_number', id: 'Ij!xb_@rq%w#E%}b=G}@', fields: { NUM: 50 } } } },
              next: {
                block: {
                  type: 'variables_set',
                  id: 'nMKlnt%c|(|8h`HB,wnw',
                  fields: { VAR: { id: 'IJ7]gk-LGS!XJjIjc5ie' } },
                  inputs: {
                    VALUE: {
                      block: {
                        type: 'math_number',
                        id: '-e|#e^$SAWJ(W8aXt{K^',
                        fields: { NUM: 50 },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'love_update',
        id: '|2mj5d{U=7]WREtc=r7k',
        x: 88,
        y: 788,
        fields: { dt: { id: '~yyeQE:X,}]nh;!S@!y8' } },
        inputs: {
          input: {
            block: {
              type: 'controls_if',
              id: 'G|Ugr1a}4Q7@6P(]eo9k',
              extraState: { elseIfCount: 3 },
              inputs: {
                IF0: { block: { type: 'keyboard_isdown', id: '!q;IjBaE3x;R}Tg^gkiX', fields: { key: 'down' } } },
                DO0: {
                  block: {
                    type: 'variables_set',
                    id: 'IfrT_3E)y101f?=_3`UP',
                    fields: { VAR: { id: 'V^)X29B$\\/zH~5@~EHeQ+' } },
                    inputs: {
                      VALUE: {
                        block: {
                          type: 'math_arithmetic',
                          id: '`Q8-RLt)\\/m%Uo|@Iwg)=',
                          fields: { OP: 'ADD' },
                          inputs: {
                            A: {
                              shadow: {
                                type: 'math_number',
                                id: 'E=LoTrDTW[S7b}~5J=`A',
                                fields: { NUM: 1 },
                              },
                              block: {
                                type: 'variables_get',
                                id: 'txF1hZDerso]R^YYQ14E',
                                fields: { VAR: { id: 'V^)X29B$\\/zH~5@~EHeQ+' } },
                              },
                            },
                            B: {
                              shadow: { type: 'math_number', id: 'jS0JVNC9F]mr0^PmF5Ja', fields: { NUM: 1 } },
                              block: {
                                type: 'math_arithmetic',
                                id: 'En\\/RF0!?U\\/d=flXjJVDN',
                                fields: { OP: 'MULTIPLY' },
                                inputs: {
                                  A: {
                                    shadow: {
                                      type: 'math_number',
                                      id: 'vM\\/Sk+?t_wcW[jR857VK',
                                      fields: { NUM: 100 },
                                    },
                                  },
                                  B: {
                                    shadow: { type: 'math_number', id: '(_RMJ,i[#VoE6(7M1*`o', fields: { NUM: 1 } },
                                    block: {
                                      type: 'variables_get',
                                      id: '1s0CoEl9(xTR]9rw5EiY',
                                      fields: { VAR: { id: '~yyeQE:X,}]nh;!S@!y8' } },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                IF1: { block: { type: 'keyboard_isdown', id: '~!UPdXwh1y99fxDy=i#j', fields: { key: 'up' } } },
                DO1: {
                  block: {
                    type: 'variables_set',
                    id: '(I40{u5d]Xdp?_[vHFH3',
                    fields: { VAR: { id: 'V^)X29B$\\/zH~5@~EHeQ+' } },
                    inputs: {
                      VALUE: {
                        block: {
                          type: 'math_arithmetic',
                          id: 'aE.Lm7%~sQG1Jcj0XM0c',
                          fields: { OP: 'MINUS' },
                          inputs: {
                            A: {
                              shadow: {
                                type: 'math_number',
                                id: 'E=LoTrDTW[S7b}~5J=`A',
                                fields: { NUM: 1 },
                              },
                              block: {
                                type: 'variables_get',
                                id: 'H{Nb-jXDy%7M\\/OJb$d},',
                                fields: { VAR: { id: 'V^)X29B$\\/zH~5@~EHeQ+' } },
                              },
                            },
                            B: {
                              shadow: { type: 'math_number', id: 'WJ~i2tZDc_4z@yq4yzCi', fields: { NUM: 1 } },
                              block: {
                                type: 'math_arithmetic',
                                id: 'pnaMJTu~+Dz4b.#=Y)4U',
                                fields: { OP: 'MULTIPLY' },
                                inputs: {
                                  A: {
                                    shadow: {
                                      type: 'math_number',
                                      id: ',]5jyPT=L+xVa_=ne_D5',
                                      fields: { NUM: 100 },
                                    },
                                  },
                                  B: {
                                    shadow: { type: 'math_number', id: 'p1-\\/UNvVM`1.002iwgF6', fields: { NUM: 1 } },
                                    block: {
                                      type: 'variables_get',
                                      id: '3=tcO6fsIBGoQ-g(m9cq',
                                      fields: { VAR: { id: '~yyeQE:X,}]nh;!S@!y8' } },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                IF2: { block: { type: 'keyboard_isdown', id: '[W40xI6ML7)_(`{_J+=I', fields: { key: 'right' } } },
                DO2: {
                  block: {
                    type: 'variables_set',
                    id: 'sE(IJTL}KwX2Nvv|ai6u',
                    fields: { VAR: { id: 'IJ7]gk-LGS!XJjIjc5ie' } },
                    inputs: {
                      VALUE: {
                        block: {
                          type: 'math_arithmetic',
                          id: ':76kl*xuNX~uOvd@mydQ',
                          fields: { OP: 'ADD' },
                          inputs: {
                            A: {
                              shadow: {
                                type: 'math_number',
                                id: 'KvqfFQ`L5;{a81^=K]s(',
                                fields: { NUM: 1 },
                              },
                              block: {
                                type: 'variables_get',
                                id: 'ozKwOuxHZ9.U(Cq{q8mD',
                                fields: { VAR: { id: 'IJ7]gk-LGS!XJjIjc5ie' } },
                              },
                            },
                            B: {
                              shadow: { type: 'math_number', id: 'mdiRhM(C|F_Du|G@]U_*', fields: { NUM: 1 } },
                              block: {
                                type: 'math_arithmetic',
                                id: 'H7DEi~V(hNdwGD;b;)F3',
                                fields: { OP: 'MULTIPLY' },
                                inputs: {
                                  A: {
                                    shadow: {
                                      type: 'math_number',
                                      id: 's$jo(2\\/b5HTIT$0T+hxA',
                                      fields: { NUM: 100 },
                                    },
                                  },
                                  B: {
                                    shadow: { type: 'math_number', id: 'l*oKPlGFAPP{9aJ+sx(G', fields: { NUM: 1 } },
                                    block: {
                                      type: 'variables_get',
                                      id: 'dE3kkSn_;d6ggUTyqfQB',
                                      fields: { VAR: { id: '~yyeQE:X,}]nh;!S@!y8' } },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                IF3: { block: { type: 'keyboard_isdown', id: '0ky$f~DJ~z7c{O#^qaw}', fields: { key: 'left' } } },
                DO3: {
                  block: {
                    type: 'variables_set',
                    id: 'Hrd16u_3?CuLNjDhbnVq',
                    fields: { VAR: { id: 'IJ7]gk-LGS!XJjIjc5ie' } },
                    inputs: {
                      VALUE: {
                        block: {
                          type: 'math_arithmetic',
                          id: '3E;DqCpd*I_#n9@T#Y)A',
                          fields: { OP: 'MINUS' },
                          inputs: {
                            A: {
                              shadow: {
                                type: 'math_number',
                                id: '(8xv07T\\/VSlASN|f257v',
                                fields: { NUM: 1 },
                              },
                              block: {
                                type: 'variables_get',
                                id: 'A\\/kiAdgpvL{#{^m:j%\\/5',
                                fields: { VAR: { id: 'IJ7]gk-LGS!XJjIjc5ie' } },
                              },
                            },
                            B: {
                              shadow: { type: 'math_number', id: '-IQgJaWqC,C$u_z*ovJ!', fields: { NUM: 1 } },
                              block: {
                                type: 'math_arithmetic',
                                id: '|SA5FB1Wod.i|GOo{J`]',
                                fields: { OP: 'MULTIPLY' },
                                inputs: {
                                  A: {
                                    shadow: {
                                      type: 'math_number',
                                      id: 'i?1A)NgL?YE[g}Z)MUHN',
                                      fields: { NUM: 100 },
                                    },
                                  },
                                  B: {
                                    shadow: { type: 'math_number', id: 'cW{^eEdIWO%`ImoS)doo', fields: { NUM: 1 } },
                                    block: {
                                      type: 'variables_get',
                                      id: 'QZP:4)EcOf!BKsay3lav',
                                      fields: { VAR: { id: '~yyeQE:X,}]nh;!S@!y8' } },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'image',
      id: '%m+~Mk2-i;D(WWLR-sFo',
    }, { name: 'key', id: 'xiOVc1oKN+vHL$5lr}lc' }, {
      name: 'scancode',
      id: '9bnUU$RUX^a9X3o\\/A1Z1',
    }, { name: 'isrepeat', id: '+7S8:wuI+iYu-AA}JHzX' }, { name: 'direction', id: 'i^,fPz+*a_EN.LrqfXpV' }, {
      name: 'y',
      id: 'V^)X29B$\\/zH~5@~EHeQ+',
    }, { name: 'x', id: 'IJ7]gk-LGS!XJjIjc5ie' }],
  }
  const moveWithKeyboardCode = `function love.load()
  y = 50
  x = 50
end

function love.draw()
  love.graphics.setColor(1, 0, 0, 1)
  love.graphics.rectangle("fill", x, y, 20, 20, 0, 0, 0)
end

function love.update( dt )
  if love.keyboard.isDown("down") then
    y = y + 100 * dt
  elseif love.keyboard.isDown("up") then
    y = y - 100 * dt
  elseif love.keyboard.isDown("right") then
    x = x + 100 * dt
  elseif love.keyboard.isDown("left") then
    x = x - 100 * dt
  end
end
`

  const shootBlocklyLoad = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'love_load',
        id: 'Ht:*\\/+=hj?GU#4Cc?glI',
        x: 116,
        y: 144,
        inputs: {
          input: {
            block: {
              type: 'variables_set',
              id: '0oLxu1=8z}?~xm;:U2Cn',
              fields: { VAR: { id: 'V^)X29B$\\/zH~5@~EHeQ+' } },
              inputs: { VALUE: { block: { type: 'math_number', id: 'Ij!xb_@rq%w#E%}b=G}@', fields: { NUM: 250 } } } },
              next: {
                block: {
                  type: 'variables_set',
                  id: ':Ey~~YhGO1(9Yq-haz0=',
                  fields: { VAR: { id: 'Ikt@YU{LJ;z{72MZMduV' } },
                  inputs: {
                    VALUE: {
                      block: {
                        type: 'lists_create_with',
                        id: 'zPBac6Hb{8a(f,1Tl02k',
                        extraState: { itemCount: 0 },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: 'variables_set',
                      id: 'nMKlnt%c|(|8h`HB,wnw',
                      fields: { VAR: { id: 'IJ7]gk-LGS!XJjIjc5ie' } },
                      inputs: {
                        VALUE: {
                          block: {
                            type: 'math_number',
                            id: '90Icq+O,S_[ISj1[(ChB',
                            fields: { NUM: 250 },
                          },
                        },
                      },
                      next: {
                        block: {
                          type: 'variables_set',
                          id: 'F*j\\/3GyHP-#o2APB}mRB',
                          fields: { VAR: { id: 'HrYu!x=_GCNfv-KXil4|' } },
                          inputs: {
                            VALUE: {
                              block: {
                                type: 'math_number',
                                id: ':4Ki;vUkGdo=oz@9%=~_',
                                fields: { NUM: 250 },
                              },
                            },
                          },
                          next: {
                            block: {
                              type: 'variables_set',
                              id: 'q!I5\\/BWJJYv5y]q[JDvG',
                              fields: { VAR: { id: '1y?LmN9o\\/~Qp`S*|{DH:' } },
                              inputs: {
                                VALUE: {
                                  block: {
                                    type: 'math_number',
                                    id: '4mA+_2`@KQ:4:P7[s%sW',
                                    fields: { NUM: 50 },
                                  },
                                },
                              },
                              next: {
                                block: {
                                  type: 'variables_set',
                                  id: 't}|DI|e70#NXCH9G!KF@',
                                  fields: { VAR: { id: '5=26Gq-40{hdQ@p.!EK`' } },
                                  inputs: {
                                    VALUE: {
                                      block: {
                                        type: 'math_number',
                                        id: '[{Vx3!LRWA~yw6qS*nkU',
                                        fields: { NUM: 50 },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, { name: 'presses', id: 'iz$Tq($zc`@meSeT|IAF' }, {
      name: 'ddd',
      id: 'h#)@FWoA4^tHcFZM5Gl0',
    }, { name: 'istouch', id: '0*Y;vSg$+l.$](h)NqUg' }, { name: 'i', id: 'IlHu%)$@1c{Ll!\\/\\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, { name: 'dy', id: 'tL]gH\\/RgkyzW})oL2Q8h' }, {
      name: 'pressure',
      id: 'rzU#N_N[#L.5Ex-J{cjc',
    }, { name: 'SPEED', id: 'V^)X29B$\\/zH~5@~EHeQ+' }, {
      name: 'bullets',
      id: 'Ikt@YU{LJ;z{72MZMduV',
    }, { name: 'StartPosX', id: 'IJ7]gk-LGS!XJjIjc5ie' }, {
      name: 'StartPosY',
      id: 'HrYu!x=_GCNfv-KXil4|',
    }, { name: 'width', id: '1y?LmN9o\\/~Qp`S*|{DH:' }, { name: 'height', id: '5=26Gq-40{hdQ@p.!EK`' }],
  }
  const shootBlocklyDraw = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'love_draw',
        id: '#,^Bz1J+EGM*RQ3.\\/3FE',
        x: 116,
        y: 394,
        inputs: {
          input: {
            block: {
              type: 'graphics_setcolor',
              id: '}x({cd9wx}y7)99]hMB-',
              fields: { red: 1, green: 0, blue: 0, alpha: 1 },
              next: {
                block: {
                  type: 'controls_forEach',
                  id: 'Ge+HhBUl#z$Tf1dp+HGx',
                  fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                  inputs: {
                    LIST: {
                      block: {
                        type: 'variables_get',
                        id: 'oPtmO%9E8qWQP.mVfbOn',
                        fields: { VAR: { id: 'Ikt@YU{LJ;z{72MZMduV' } },
                      },
                    },
                    DO: {
                      block: {
                        type: 'graphics_circle',
                        id: 'dv,T2^tVC1]4fBnE?3Fe',
                        fields: { mode: 'fill' },
                        inputs: {
                          x: {
                            block: {
                              type: 'lists_getIndex',
                              id: 'ffEQ@Rw|rQ`G*UEA?-nR',
                              extraState: '<mutation statement="false" at="true"></mutation>',
                              fields: { MODE: 'GET', WHERE: 'FROM_START' },
                              inputs: {
                                VALUE: {
                                  block: {
                                    type: 'variables_get',
                                    id: '}G36hL1+eo@Z[7#9+3:0',
                                    fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                  },
                                },
                                AT: { block: { type: 'math_number', id: 'kt_4Sf]a^qhv.e@|-wI[', fields: { NUM: 1 } } },
                              },
                            },
                          },
                          y: {
                            block: {
                              type: 'lists_getIndex',
                              id: 's~E{GC{YdP1=A\\/`bp^OO',
                              extraState: '<mutation statement="false" at="true"></mutation>',
                              fields: { MODE: 'GET', WHERE: 'FROM_START' },
                              inputs: {
                                VALUE: {
                                  block: {
                                    type: 'variables_get',
                                    id: ',HNy`Gn7E5Z~[mYGU4(|',
                                    fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                  },
                                },
                                AT: {
                                  block: {
                                    type: 'math_number',
                                    id: 'io*P@WO9e\\/H@A1EKgV5B',
                                    fields: { NUM: 2 },
                                  },
                                },
                              },
                            },
                          },
                          radius: { block: { type: 'math_number', id: 'J0GNWg6s,a%ZiJF*:s%W', fields: { NUM: 2 } } },
                        },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: 'graphics_setcolor',
                      id: 'JB0*RN+d1C-ysdT)_gdt',
                      fields: { red: 0, green: 1, blue: 1, alpha: 1 },
                      next: {
                        block: {
                          type: 'graphics_print',
                          id: 'nBwE2{B`+3aZ{x;TFweD',
                          inputs: {
                            text: {
                              block: {
                                type: 'text',
                                id: '[n=6i*zEsjgdeK\\/qoUoF',
                                fields: { TEXT: 'Fire with left click' },
                              },
                            },
                            x: { block: { type: 'math_number', id: '}m8%j!:nt0dU$SOJ}@`v', fields: { NUM: 50 } } },
                            y: { block: { type: 'math_number', id: '1Dd%S8?O*gmx-GL!71*4', fields: { NUM: 50 } } },
                            r: { block: { type: 'math_number', id: '?cdXK.`ym{bkeQ6N%bwQ', fields: { NUM: 0 } } },
                            sx: { block: { type: 'math_number', id: '?fY3yC.AJ%\\/r0b]TEc{r', fields: { NUM: 0 } } },
                            sy: { block: { type: 'math_number', id: '=+9!1Y736PP(E[6]5rZE', fields: { NUM: 0 } } },
                            ox: { block: { type: 'math_number', id: 'z4o:k]h:[MU{]xcMu@%4', fields: { NUM: 0 } } },
                            oy: { block: { type: 'math_number', id: '.i_aD|s\\/W@vf3fXzuz}s', fields: { NUM: 0 } } },
                            kx: { block: { type: 'math_number', id: '!kKM-QxCTu4l@dyDw^wi', fields: { NUM: 0 } } },
                            ky: { block: { type: 'math_number', id: 'GO;falf6U7rWUYdh?58p', fields: { NUM: 0 } } },
                          },
                          next: {
                            block: {
                              type: 'graphics_rectangle',
                              id: '4eep~.h:A}fnEM++aX`d',
                              fields: { mode: 'line' },
                              inputs: {
                                x: {
                                  block: {
                                    type: 'variables_get',
                                    id: '|yR2B7_,:O0SS-FFhD)4',
                                    fields: { VAR: { id: 'IJ7]gk-LGS!XJjIjc5ie' } },
                                  },
                                },
                                y: {
                                  block: {
                                    type: 'variables_get',
                                    id: '^HJC!ue*|1idwI`3D@p,',
                                    fields: { VAR: { id: 'HrYu!x=_GCNfv-KXil4|' } },
                                  },
                                },
                                width: {
                                  block: {
                                    type: 'variables_get',
                                    id: '=pT}M3br0zrk[N9c)cf!',
                                    fields: { VAR: { id: '1y?LmN9o\\/~Qp`S*|{DH:' } },
                                  },
                                },
                                height: {
                                  block: {
                                    type: 'variables_get',
                                    id: '{h8QoI8#d$D]pTstY0`D',
                                    fields: { VAR: { id: '5=26Gq-40{hdQ@p.!EK`' } },
                                  },
                                },
                                rx: { block: { type: 'math_number', id: ']fB`1g_P7V_rd{7#zwt@', fields: { NUM: 0 } } },
                                ry: { block: { type: 'math_number', id: ')g4.K5MvrXBBWGTMJc,T', fields: { NUM: 0 } } },
                                segments: {
                                  block: {
                                    type: 'math_number',
                                    id: 'wom*AU.s^UBFq[8Lhc)R',
                                    fields: { NUM: 0 },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, { name: 'presses', id: 'iz$Tq($zc`@meSeT|IAF' }, {
      name: 'ddd',
      id: 'h#)@FWoA4^tHcFZM5Gl0',
    }, { name: 'istouch', id: '0*Y;vSg$+l.$](h)NqUg' }, { name: 'i', id: 'IlHu%)$@1c{Ll!\\/\\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, { name: 'dy', id: 'tL]gH\\/RgkyzW})oL2Q8h' }, {
      name: 'pressure',
      id: 'rzU#N_N[#L.5Ex-J{cjc',
    }, { name: 'SPEED', id: 'V^)X29B$\\/zH~5@~EHeQ+' }, {
      name: 'bullets',
      id: 'Ikt@YU{LJ;z{72MZMduV',
    }, { name: 'StartPosX', id: 'IJ7]gk-LGS!XJjIjc5ie' }, {
      name: 'StartPosY',
      id: 'HrYu!x=_GCNfv-KXil4|',
    }, { name: 'width', id: '1y?LmN9o\\/~Qp`S*|{DH:' }, {
      name: 'height',
      id: '5=26Gq-40{hdQ@p.!EK`',
    }, { name: 'bullet', id: 'ptn8UybJM48DSX}-Hh0G' }],
  }
  const shootBlocklyBullet = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'love_update',
        id: '|2mj5d{U=7]WREtc=r7k',
        x: 113,
        y: 888,
        fields: { dt: { id: '~yyeQE:X,}]nh;!S@!y8' } },
        inputs: {
          input: {
            block: {
              type: 'controls_if',
              id: 'xZ[JhN.GV%mE~hG}FN-p',
              inputs: {
                IF0: {
                  block: {
                    type: 'mouse_isdown',
                    id: 'Cza!F{`gEne2+xxo0|Ul',
                    inputs: {
                      button: {
                        block: {
                          type: 'math_number',
                          id: 'j,c^~`zG!PC(SG;gVD|p',
                          fields: { NUM: 1 },
                        },
                      },
                    },
                  },
                },
                DO0: {
                  block: {
                    type: 'variables_set',
                    id: 'eNaF|W^aZ]Y|Smg9=#v\\/',
                    fields: { VAR: { id: 'y^.~f-*hinMPmYApRQ#6' } },
                    inputs: {
                      VALUE: {
                        block: {
                          type: 'math_arithmetic',
                          id: 'IdR{y64H95\\/l+Te:bkNo',
                          fields: { OP: 'ADD' },
                          inputs: {
                            A: {
                              shadow: {
                                type: 'math_number',
                                id: 'ou3^,bdP-{8}sW@\\/djDx',
                                fields: { NUM: 1 },
                              },
                              block: {
                                type: 'variables_get',
                                id: '@nc@M75eiC)^o}=Vld]9',
                                fields: { VAR: { id: 'IJ7]gk-LGS!XJjIjc5ie' } },
                              },
                            },
                            B: {
                              shadow: { type: 'math_number', id: 'OJL{:eVI6kO+O_%$d0hs', fields: { NUM: 1 } },
                              block: {
                                type: 'math_arithmetic',
                                id: 'Cbz391w?A^ZheE~X[3:|',
                                fields: { OP: 'DIVIDE' },
                                inputs: {
                                  A: {
                                    shadow: {
                                      type: 'math_number',
                                      id: 'bF)D-}m$lHI`vc+tCYoP',
                                      fields: { NUM: 1 },
                                    },
                                    block: {
                                      type: 'variables_get',
                                      id: 'T$cIY#N77pQGUy0p,beM',
                                      fields: { VAR: { id: '1y?LmN9o\\/~Qp`S*|{DH:' } },
                                    },
                                  },
                                  B: {
                                    shadow: {
                                      type: 'math_number',
                                      id: '+QP%w`@.!E087tR]NrK4',
                                      fields: { NUM: 2 },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    next: {
                      block: {
                        type: 'variables_set',
                        id: 'jD[-[O0Yv,`jZ|B`[0dn',
                        fields: { VAR: { id: 'MAEs]3BFw99dpzi+@7e+' } },
                        inputs: {
                          VALUE: {
                            block: {
                              type: 'math_arithmetic',
                              id: '{Qw}h.n%3L8.\\/Q3*(qaI',
                              fields: { OP: 'ADD' },
                              inputs: {
                                A: {
                                  shadow: {
                                    type: 'math_number',
                                    id: 'yAf}esB5v(qyw{hP2pG5',
                                    fields: { NUM: 1 },
                                  },
                                  block: {
                                    type: 'variables_get',
                                    id: '#~wc$!}j#w{1ndEsyINF',
                                    fields: { VAR: { id: 'HrYu!x=_GCNfv-KXil4|' } },
                                  },
                                },
                                B: {
                                  shadow: { type: 'math_number', id: 'OJL{:eVI6kO+O_%$d0hs', fields: { NUM: 1 } },
                                  block: {
                                    type: 'math_arithmetic',
                                    id: 'vLN=[moPHN!94jJB[Wpb',
                                    fields: { OP: 'DIVIDE' },
                                    inputs: {
                                      A: {
                                        shadow: {
                                          type: 'math_number',
                                          id: '2wzaaSww*WAUyP@Mr#q[',
                                          fields: { NUM: 1 },
                                        },
                                        block: {
                                          type: 'variables_get',
                                          id: '{#BC%MNV[reaq[SWB.i4',
                                          fields: { VAR: { id: '5=26Gq-40{hdQ@p.!EK`' } },
                                        },
                                      },
                                      B: {
                                        shadow: {
                                          type: 'math_number',
                                          id: 'a=$x07Iqg~dQaBxe=95w',
                                          fields: { NUM: 2 },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        next: {
                          block: {
                            type: 'variables_set',
                            id: 'q4~QQ2f{yl!*$g!o}(Uj',
                            fields: { VAR: { id: 'USmkA#!6OOi2srMLINeV' } },
                            inputs: { VALUE: { block: { type: 'mouse_getx', id: 'Y5V8ag}SwUeHG{I~#8MS' } } },
                            next: {
                              block: {
                                type: 'variables_set',
                                id: 'Vj6-6X\\/POF(5U]Ji4J8n',
                                fields: { VAR: { id: 'z_p0dER?xLmZQ9In__^K' } },
                                inputs: { VALUE: { block: { type: 'mouse_gety', id: '%kkw^,*qf[%{!T;:nhwJ' } } },
                                next: {
                                  block: {
                                    type: 'variables_set',
                                    id: 'XfxZ2wP@u)Dsq%T3_)jZ',
                                    fields: { VAR: { id: 'h6$rJt^$f99@WKbR=Tnb' } },
                                    inputs: {
                                      VALUE: {
                                        block: {
                                          type: 'math_atan2',
                                          id: 'QG\\/Z5(3R[9hNAWS}_Zs[',
                                          inputs: {
                                            y: {
                                              block: {
                                                type: 'math_arithmetic',
                                                id: '^S-C+rYENeP\\/TUqlzT3A',
                                                fields: { OP: 'MINUS' },
                                                inputs: {
                                                  A: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: 'L-D=vUnSQUrN}3-KN0Yl',
                                                      fields: { NUM: 1 },
                                                    },
                                                    block: {
                                                      type: 'variables_get',
                                                      id: '+xUNL1c[,pgOA,}#5L`s',
                                                      fields: { VAR: { id: 'z_p0dER?xLmZQ9In__^K' } },
                                                    },
                                                  },
                                                  B: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: '}b-e{nru:ge}Myc(!*o^',
                                                      fields: { NUM: 1 },
                                                    },
                                                    block: {
                                                      type: 'variables_get',
                                                      id: '9hmAhKu(;#4PDsQJD{Ef',
                                                      fields: { VAR: { id: 'MAEs]3BFw99dpzi+@7e+' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            x: {
                                              block: {
                                                type: 'math_arithmetic',
                                                id: '#0FsH{|*D-[0o^9Tjq?I',
                                                fields: { OP: 'MINUS' },
                                                inputs: {
                                                  A: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: 'PcOq9f4pcf$~G^BSBd3w',
                                                      fields: { NUM: 1 },
                                                    },
                                                    block: {
                                                      type: 'variables_get',
                                                      id: '6$C=4vH@EUg;es@LmIL.',
                                                      fields: { VAR: { id: 'USmkA#!6OOi2srMLINeV' } },
                                                    },
                                                  },
                                                  B: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: '^X9=?qxO|D|em`,@Tl#+',
                                                      fields: { NUM: 1 },
                                                    },
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'tkp^_ZEm~KbW,8UeYV0r',
                                                      fields: { VAR: { id: 'y^.~f-*hinMPmYApRQ#6' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    next: {
                                      block: {
                                        type: 'variables_set',
                                        id: 'xMYBUPRL}yc~b.OPmZG|',
                                        fields: { VAR: { id: '6G3v3,Xs1%!t||~8v@um' } },
                                        inputs: {
                                          VALUE: {
                                            block: {
                                              type: 'lists_create_with',
                                              id: '%0|]J\\/v}Zd|4puvc?)Rf',
                                              extraState: { itemCount: 3 },
                                              inputs: {
                                                ADD0: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: 'G)D[lb8,AX~G_)k;y$5]',
                                                    fields: { VAR: { id: 'y^.~f-*hinMPmYApRQ#6' } },
                                                  },
                                                },
                                                ADD1: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: '$!t=[^wpEke|fs92YMkv',
                                                    fields: { VAR: { id: 'MAEs]3BFw99dpzi+@7e+' } },
                                                  },
                                                },
                                                ADD2: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: 'rZ9{Fw]5s:%r]j]s|jc(',
                                                    fields: { VAR: { id: 'h6$rJt^$f99@WKbR=Tnb' } },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                        next: {
                                          block: {
                                            type: 'lists_setIndex',
                                            id: 'Rn$2Cr(z;tcF1Q^{AFmN',
                                            extraState: '<mutation at="false"></mutation>',
                                            fields: { MODE: 'INSERT', WHERE: 'LAST' },
                                            inputs: {
                                              LIST: {
                                                block: {
                                                  type: 'variables_get',
                                                  id: 'DJgw;3+,`o]Ru`tW(`@K',
                                                  fields: { VAR: { id: 'Ikt@YU{LJ;z{72MZMduV' } },
                                                },
                                              },
                                              TO: {
                                                block: {
                                                  type: 'variables_get',
                                                  id: 'yiFjeIbUy}[_^w_P7y.-',
                                                  fields: { VAR: { id: '6G3v3,Xs1%!t||~8v@um' } },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, { name: 'presses', id: 'iz$Tq($zc`@meSeT|IAF' }, {
      name: 'ddd',
      id: 'h#)@FWoA4^tHcFZM5Gl0',
    }, { name: 'istouch', id: '0*Y;vSg$+l.$](h)NqUg' }, { name: 'i', id: 'IlHu%)$@1c{Ll!\\/\\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, { name: 'dy', id: 'tL]gH\\/RgkyzW})oL2Q8h' }, {
      name: 'pressure',
      id: 'rzU#N_N[#L.5Ex-J{cjc',
    }, { name: 'SPEED', id: 'V^)X29B$\\/zH~5@~EHeQ+' }, {
      name: 'bullets',
      id: 'Ikt@YU{LJ;z{72MZMduV',
    }, { name: 'StartPosX', id: 'IJ7]gk-LGS!XJjIjc5ie' }, {
      name: 'StartPosY',
      id: 'HrYu!x=_GCNfv-KXil4|',
    }, { name: 'width', id: '1y?LmN9o\\/~Qp`S*|{DH:' }, {
      name: 'height',
      id: '5=26Gq-40{hdQ@p.!EK`',
    }, { name: 'bullet', id: 'ptn8UybJM48DSX}-Hh0G' }, { name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'startX',
      id: 'y^.~f-*hinMPmYApRQ#6',
    }, { name: 'startY', id: 'MAEs]3BFw99dpzi+@7e+' }, {
      name: 'targetX',
      id: 'USmkA#!6OOi2srMLINeV',
    }, { name: 'targetY', id: 'z_p0dER?xLmZQ9In__^K' }, {
      name: 'angle',
      id: 'h6$rJt^$f99@WKbR=Tnb',
    }, { name: 'newBullet', id: '6G3v3,Xs1%!t||~8v@um' }],
  }
  const shootBlocklyMove = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'love_update',
        id: 'E~-7cqsO9OP2.Y}a!tAz',
        x: 238,
        y: 963,
        fields: { dt: { id: '~yyeQE:X,}]nh;!S@!y8' } },
        inputs: {
          input: {
            block: {
              type: 'for_index_item',
              id: '#_Web4hus6\\/3,uwxa)o`',
              fields: { index: { id: 'A$6xm\\/gl*D}X~0cKi^@*' }, item: { id: 'ptn8UybJM48DSX}-Hh0G' } },
              inputs: {
                array: {
                  block: {
                    type: 'variables_get',
                    id: 'TrKp$aye%d-hX1r`d017',
                    fields: { VAR: { id: 'Ikt@YU{LJ;z{72MZMduV' } },
                  },
                },
                input: {
                  block: {
                    type: 'variables_set',
                    id: '{\\/-gcP!!NU.{Z8^1~Cxq',
                    fields: { VAR: { id: '5x]bpr[}W0Yf~Sk$Poi`' } },
                    inputs: {
                      VALUE: {
                        block: {
                          type: 'math_arithmetic',
                          id: 'fsbg7bgwG)7Q(2S9VJ?D',
                          fields: { OP: 'MULTIPLY' },
                          inputs: {
                            A: {
                              shadow: {
                                type: 'math_number',
                                id: 'i4uFjxaV=X5~g-sBf#h-',
                                fields: { NUM: 1 },
                              },
                              block: {
                                type: 'variables_get',
                                id: '`$@.Hz7HFbD];OE::9L8',
                                fields: { VAR: { id: 'V^)X29B$\\/zH~5@~EHeQ+' } },
                              },
                            },
                            B: {
                              shadow: { type: 'math_number', id: 'z*7_ps3#D7%fW?Inr~bl', fields: { NUM: 1 } },
                              block: {
                                type: 'math_cos',
                                id: '~xF%]%fI;(5N+:QB~q7D',
                                inputs: {
                                  val: {
                                    block: {
                                      type: 'lists_getIndex',
                                      id: 'Ih9\\/z_;eI_F2Zg0A1$!5',
                                      extraState: '<mutation statement="false" at="true"></mutation>',
                                      fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                      inputs: {
                                        VALUE: {
                                          block: {
                                            type: 'variables_get',
                                            id: '3Qa[?2rns`h2WB0gDs|5',
                                            fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                          },
                                        },
                                        AT: {
                                          block: {
                                            type: 'math_number',
                                            id: 'I1sypqu#,5}fZ0s3cLP0',
                                            fields: { NUM: 3 },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    next: {
                      block: {
                        type: 'variables_set',
                        id: '=M.B~Z3d]R?G6blocUji',
                        fields: { VAR: { id: 'tL]gH\\/RgkyzW})oL2Q8h' } },
                        inputs: {
                          VALUE: {
                            block: {
                              type: 'math_arithmetic',
                              id: '$u7grgR{Rp}het5!3*#:',
                              fields: { OP: 'MULTIPLY' },
                              inputs: {
                                A: {
                                  shadow: {
                                    type: 'math_number',
                                    id: 'i4uFjxaV=X5~g-sBf#h-',
                                    fields: { NUM: 1 },
                                  },
                                  block: {
                                    type: 'variables_get',
                                    id: 'PTC[3N8|.Ghta0P[1%}~',
                                    fields: { VAR: { id: 'V^)X29B$\\/zH~5@~EHeQ+' } },
                                  },
                                },
                                B: {
                                  shadow: { type: 'math_number', id: 'c}rK9ow%F0?d3a*3XA!K', fields: { NUM: 1 } },
                                  block: {
                                    type: 'math_sin',
                                    id: '}.Vx!,Vz]*%zPL_xWbCa',
                                    inputs: {
                                      value: {
                                        block: {
                                          type: 'lists_getIndex',
                                          id: 'm.}9w5*R!l`Y;{Gsf|fj',
                                          extraState: '<mutation statement="false" at="true"></mutation>',
                                          fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                          inputs: {
                                            VALUE: {
                                              block: {
                                                type: 'variables_get',
                                                id: 'd?9sRl!8{K2(Iz7P\\/{3H',
                                                fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                              },
                                            },
                                            AT: {
                                              block: {
                                                type: 'math_number',
                                                id: 'MQ1+s[.oEi-FVv|mkF@n',
                                                fields: { NUM: 3 },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        next: {
                          block: {
                            type: 'lists_setIndex',
                            id: '6Alo|}YUe-G|?l;!I7Y`',
                            extraState: '<mutation at="true"></mutation>',
                            fields: { MODE: 'SET', WHERE: 'FROM_START' },
                            inputs: {
                              LIST: {
                                block: {
                                  type: 'variables_get',
                                  id: 'omq+MWuKHo[p@Tt\\/F7s!',
                                  fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                },
                              },
                              AT: { block: { type: 'math_number', id: 's_NrQC$Lne.{foP4p=[7', fields: { NUM: 1 } } },
                              TO: {
                                block: {
                                  type: 'math_arithmetic',
                                  id: '~\\/N4%4$${=U\\/po1Ax;EB',
                                  fields: { OP: 'ADD' },
                                  inputs: {
                                    A: {
                                      shadow: {
                                        type: 'math_number',
                                        id: '|j6!-d7vosY~7`aVZc-6',
                                        fields: { NUM: 1 },
                                      },
                                      block: {
                                        type: 'lists_getIndex',
                                        id: 'XaHq`Q3${`K\\/xVq]4$~.',
                                        extraState: '<mutation statement="false" at="true"></mutation>',
                                        fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                        inputs: {
                                          VALUE: {
                                            block: {
                                              type: 'variables_get',
                                              id: '}xXlqCv\\/P8s|P0@5@@tY',
                                              fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                            },
                                          },
                                          AT: {
                                            block: {
                                              type: 'math_number',
                                              id: 'y*-C8%7Cgu9vcJ*lE3Gp',
                                              fields: { NUM: 1 },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    B: {
                                      shadow: {
                                        type: 'math_number',
                                        id: 'C7.TDwt:7U#kwR~noh5|',
                                        fields: { NUM: 1 },
                                      },
                                      block: {
                                        type: 'math_arithmetic',
                                        id: 'rRxtwJ0y%SZDuLC!O#7q',
                                        fields: { OP: 'MULTIPLY' },
                                        inputs: {
                                          A: {
                                            shadow: {
                                              type: 'math_number',
                                              id: 'Z:6%1|+I.CsN-OSU]fz2',
                                              fields: { NUM: 1 },
                                            },
                                            block: {
                                              type: 'variables_get',
                                              id: '9qJeW`LWSb%:d%~[g||6',
                                              fields: { VAR: { id: '5x]bpr[}W0Yf~Sk$Poi`' } },
                                            },
                                          },
                                          B: {
                                            shadow: {
                                              type: 'math_number',
                                              id: '1`D-Zn)C=sg4{K%C:3KJ',
                                              fields: { NUM: 1 },
                                            },
                                            block: {
                                              type: 'variables_get',
                                              id: '5R`3RY60dca~v]PAdMzn',
                                              fields: { VAR: { id: '~yyeQE:X,}]nh;!S@!y8' } },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            next: {
                              block: {
                                type: 'lists_setIndex',
                                id: 'clnec[xPK}NY(P(k+Q[M',
                                extraState: '<mutation at="true"></mutation>',
                                fields: { MODE: 'SET', WHERE: 'FROM_START' },
                                inputs: {
                                  LIST: {
                                    block: {
                                      type: 'variables_get',
                                      id: '}cxk-ie)k=Ux}T\\/*93YQ',
                                      fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                    },
                                  },
                                  AT: {
                                    block: {
                                      type: 'math_number',
                                      id: 'dv=m}tt[x@V^`[T+j~iT',
                                      fields: { NUM: 2 },
                                    },
                                  },
                                  TO: {
                                    block: {
                                      type: 'math_arithmetic',
                                      id: 'P*trr;%!G1h2%l=Id5;s',
                                      fields: { OP: 'ADD' },
                                      inputs: {
                                        A: {
                                          shadow: {
                                            type: 'math_number',
                                            id: '}bOYd1P`Jil@{mxk,~a@',
                                            fields: { NUM: 1 },
                                          },
                                          block: {
                                            type: 'lists_getIndex',
                                            id: 'DFiaOQ+N)nr\\/5o{RUz#1',
                                            extraState: '<mutation statement="false" at="true"></mutation>',
                                            fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                            inputs: {
                                              VALUE: {
                                                block: {
                                                  type: 'variables_get',
                                                  id: '1eyrI`xmq:8CvYGW7Z{Y',
                                                  fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                                },
                                              },
                                              AT: {
                                                block: {
                                                  type: 'math_number',
                                                  id: 'qyu1p?Cf:Q.p-6:B2b-$',
                                                  fields: { NUM: 2 },
                                                },
                                              },
                                            },
                                          },
                                        },
                                        B: {
                                          shadow: {
                                            type: 'math_number',
                                            id: 'C7.TDwt:7U#kwR~noh5|',
                                            fields: { NUM: 1 },
                                          },
                                          block: {
                                            type: 'math_arithmetic',
                                            id: '?^ot9t@yi))shB[9?1v|',
                                            fields: { OP: 'MULTIPLY' },
                                            inputs: {
                                              A: {
                                                shadow: {
                                                  type: 'math_number',
                                                  id: 'Z:6%1|+I.CsN-OSU]fz2',
                                                  fields: { NUM: 1 },
                                                },
                                                block: {
                                                  type: 'variables_get',
                                                  id: 'A3-wpYq4Wldx+iLhE%]c',
                                                  fields: { VAR: { id: 'tL]gH\\/RgkyzW})oL2Q8h' } },
                                                },
                                              },
                                              B: {
                                                shadow: {
                                                  type: 'math_number',
                                                  id: '1`D-Zn)C=sg4{K%C:3KJ',
                                                  fields: { NUM: 1 },
                                                },
                                                block: {
                                                  type: 'variables_get',
                                                  id: 'FwNBZnvHa9O0J8.P)Ox[',
                                                  fields: { VAR: { id: '~yyeQE:X,}]nh;!S@!y8' } },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                next: {
                                  block: {
                                    type: 'text_print',
                                    id: 'Y-gFE_)`VJhm#.3og[U\\/',
                                    enabled: false,
                                    inputs: {
                                      TEXT: {
                                        shadow: {
                                          type: 'text',
                                          id: 'j-}P9k2V,hd[Sct[VWPS',
                                          fields: { TEXT: 'Remove bullets outside screan' },
                                        },
                                      },
                                    },
                                    next: {
                                      block: {
                                        type: 'controls_if',
                                        id: 'NXBjiHqg!\\/:4z0g7=pA,',
                                        extraState: { elseIfCount: 3 },
                                        inputs: {
                                          IF0: {
                                            block: {
                                              type: 'logic_compare',
                                              id: '`2E*C7937MkB[WVykkO4',
                                              fields: { OP: 'GT' },
                                              inputs: {
                                                A: {
                                                  block: {
                                                    type: 'lists_getIndex',
                                                    id: 'aK-Vkf#R.Wa(E[9W+~OP',
                                                    extraState: '<mutation statement="false" at="true"></mutation>',
                                                    fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                                    inputs: {
                                                      VALUE: {
                                                        block: {
                                                          type: 'variables_get',
                                                          id: 'aJ)dQodW.kn0kg6kYpe\\/',
                                                          fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                                        },
                                                      },
                                                      AT: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: 'Y$OL\\/tmh3yTO:~C(]5=Q',
                                                          fields: { NUM: 1 },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                B: { block: { type: 'graphics_getwidth', id: '7)3D?eD$[e!5Nt`Cs57=' } },
                                              },
                                            },
                                          },
                                          DO0: {
                                            block: {
                                              type: 'teble_remove',
                                              id: ';{;`;ju`x5w%l6LE=}kL',
                                              inputs: {
                                                table: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: 'q|opY\\/\\/?ly5HoBXB]^wc',
                                                    fields: { VAR: { id: 'Ikt@YU{LJ;z{72MZMduV' } },
                                                  },
                                                },
                                                index: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: ']v3)x6m.LYm1#BcL:9?Y',
                                                    fields: { VAR: { id: 'A$6xm\\/gl*D}X~0cKi^@*' } },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          IF1: {
                                            block: {
                                              type: 'logic_compare',
                                              id: '=@xA^rUhHj7ax[VLn`kK',
                                              fields: { OP: 'GT' },
                                              inputs: {
                                                A: {
                                                  block: {
                                                    type: 'lists_getIndex',
                                                    id: 'FO5gy.w6n?tv7c-:|x[@',
                                                    extraState: '<mutation statement="false" at="true"></mutation>',
                                                    fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                                    inputs: {
                                                      VALUE: {
                                                        block: {
                                                          type: 'variables_get',
                                                          id: 'EgU^g}iuC*V5*9|9M2C8',
                                                          fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                                        },
                                                      },
                                                      AT: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: 'jw}+$Wu|iK5h%Nar#2LT',
                                                          fields: { NUM: 2 },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                B: {
                                                  block: {
                                                    type: 'graphics_getheight',
                                                    id: 'G%nQWP0rUcU6Ri`A5jQ!',
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          DO1: {
                                            block: {
                                              type: 'teble_remove',
                                              id: '{DOuD.2`(UG}?g2%B;dz',
                                              inputs: {
                                                table: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: '(IlNwo^gpO|PfQMg+~RE',
                                                    fields: { VAR: { id: 'Ikt@YU{LJ;z{72MZMduV' } },
                                                  },
                                                },
                                                index: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: 'OfA{Ho;u^xR0_I@U3l%t',
                                                    fields: { VAR: { id: 'A$6xm\\/gl*D}X~0cKi^@*' } },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          IF2: {
                                            block: {
                                              type: 'logic_compare',
                                              id: '1~ThUj1rwE1i]O*TW%S1',
                                              fields: { OP: 'LT' },
                                              inputs: {
                                                A: {
                                                  block: {
                                                    type: 'lists_getIndex',
                                                    id: 'E0iQr\\/Hzufyxqu:tfo$s',
                                                    extraState: '<mutation statement="false" at="true"></mutation>',
                                                    fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                                    inputs: {
                                                      VALUE: {
                                                        block: {
                                                          type: 'variables_get',
                                                          id: 'n8GVKM{J~t!T.w1O~$hA',
                                                          fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                                        },
                                                      },
                                                      AT: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: 'ewpG6w6eGZmPyABTEIiL',
                                                          fields: { NUM: 1 },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                B: {
                                                  block: {
                                                    type: 'math_number',
                                                    id: 'UQ-HY|+,S;}*Rs8mV%Wd',
                                                    fields: { NUM: 0 },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          DO2: {
                                            block: {
                                              type: 'teble_remove',
                                              id: '#)VLnJ#!H@21Rp]4!ji5',
                                              inputs: {
                                                table: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: 'p.k0WOdiE(FsQjIJ{}f}',
                                                    fields: { VAR: { id: 'Ikt@YU{LJ;z{72MZMduV' } },
                                                  },
                                                },
                                                index: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: 'oQx?-bIH*0!k?Yjq}ieQ',
                                                    fields: { VAR: { id: 'A$6xm\\/gl*D}X~0cKi^@*' } },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          IF3: {
                                            block: {
                                              type: 'logic_compare',
                                              id: '3otKbgmf-|?euPcDf\\/;M',
                                              fields: { OP: 'LT' },
                                              inputs: {
                                                A: {
                                                  block: {
                                                    type: 'lists_getIndex',
                                                    id: '4qf%;W}cl=Iasb5D+G(9',
                                                    extraState: '<mutation statement="false" at="true"></mutation>',
                                                    fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                                    inputs: {
                                                      VALUE: {
                                                        block: {
                                                          type: 'variables_get',
                                                          id: 'V|LQ61+-B1wzHc1X+EiF',
                                                          fields: { VAR: { id: 'ptn8UybJM48DSX}-Hh0G' } },
                                                        },
                                                      },
                                                      AT: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: 'et)El6Cr*.Wi6kW;I0^M',
                                                          fields: { NUM: 2 },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                B: {
                                                  block: {
                                                    type: 'math_number',
                                                    id: '%^|`mMl=X4^HFau^}sM*',
                                                    fields: { NUM: 0 },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          DO3: {
                                            block: {
                                              type: 'teble_remove',
                                              id: 'K:y8v2V{OvGBp6@ELrM*',
                                              inputs: {
                                                table: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: 'EUEC9wka1x3?T?$jZpgT',
                                                    fields: { VAR: { id: 'Ikt@YU{LJ;z{72MZMduV' } },
                                                  },
                                                },
                                                index: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: 'lpnQEK*%jggB7O5AxH6p',
                                                    fields: { VAR: { id: 'A$6xm\\/gl*D}X~0cKi^@*' } },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, { name: 'presses', id: 'iz$Tq($zc`@meSeT|IAF' }, {
      name: 'ddd',
      id: 'h#)@FWoA4^tHcFZM5Gl0',
    }, { name: 'istouch', id: '0*Y;vSg$+l.$](h)NqUg' }, { name: 'i', id: 'IlHu%)$@1c{Ll!\\/\\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, { name: 'dy', id: 'tL]gH\\/RgkyzW})oL2Q8h' }, {
      name: 'pressure',
      id: 'rzU#N_N[#L.5Ex-J{cjc',
    }, { name: 'SPEED', id: 'V^)X29B$\\/zH~5@~EHeQ+' }, {
      name: 'bullets',
      id: 'Ikt@YU{LJ;z{72MZMduV',
    }, { name: 'StartPosX', id: 'IJ7]gk-LGS!XJjIjc5ie' }, {
      name: 'StartPosY',
      id: 'HrYu!x=_GCNfv-KXil4|',
    }, { name: 'width', id: '1y?LmN9o\\/~Qp`S*|{DH:' }, {
      name: 'height',
      id: '5=26Gq-40{hdQ@p.!EK`',
    }, { name: 'bullet', id: 'ptn8UybJM48DSX}-Hh0G' }, { name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'startX',
      id: 'y^.~f-*hinMPmYApRQ#6',
    }, { name: 'startY', id: 'MAEs]3BFw99dpzi+@7e+' }, {
      name: 'targetX',
      id: 'USmkA#!6OOi2srMLINeV',
    }, { name: 'targetY', id: 'z_p0dER?xLmZQ9In__^K' }, {
      name: 'angle',
      id: 'h6$rJt^$f99@WKbR=Tnb',
    }, { name: 'newBullet', id: '6G3v3,Xs1%!t||~8v@um' }],
  }

  const shootCodeLoad = `function love.load()
  SPEED = 250
  bullets = {}
  StartPosX = 250
  StartPosY = 250
  width = 50
  height = 50
end`
  const shootCodeDraw = `function love.draw()
  love.graphics.setColor(1, 0, 0, 1)
  for _, bullet in ipairs(bullets) do
    love.graphics.circle("fill", (bullet[1]), (bullet[2]), 2)
  end
  love.graphics.setColor(0, 1, 1, 1)
  love.graphics.print('Fire with left click', 50, 50, 0, 0, 0 , 0, 0, 0, 0)
  love.graphics.rectangle("line", StartPosX, StartPosY, width, height, 0, 0, 0)
end
`
  const shootCodeBullet = `function love.update( dt )
  if love.mouse.isDown( 1 ) then
    startX = StartPosX + width / 2
    startY = StartPosY + height / 2
    targetX = love.mouse.getX()
    targetY = love.mouse.getY()
    angle = math.atan2 ((targetY - startY), (targetX - startX))
    newBullet = {startX, startY, angle}
    table.insert(bullets, #bullets + 1, newBullet)
  end
end
`
  const shootCodeMove = `function love.update( dt )
  for index2, bullet in ipairs(bullets) do
    dx = SPEED * (math.cos((bullet[3])))
    dy = SPEED * (math.sin((bullet[3])))
    bullet[1] = bullet[1] + dx * dt
    bullet[2] = bullet[2] + dy * dt
    if bullet[1] > (love.graphics.getWidth()) then
      table.remove(bullets, index2)
    elseif bullet[2] > (love.graphics.getHeight()) then
      table.remove(bullets, index2)
    elseif bullet[1] < 0 then
      table.remove(bullets, index2)
    elseif bullet[2] < 0 then
      table.remove(bullets, index2)
    end
  end
end
`

  const howLoveBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{ type: 'love_draw', id: '#,^Bz1J+EGM*RQ3.\\/3FE', x: 88, y: 413 }, {
        type: 'love_load',
        id: 'Ht:*\\/+=hj?GU#4Cc?glI',
        x: 88,
        y: 263,
      }, {
        type: 'love_update',
        id: 'P|cN#nYCgZS,VlZg$mIa',
        x: 88,
        y: 338,
        fields: { dt: { id: '~yyeQE:X,}]nh;!S@!y8' } },
      }],
    },
    variables: [{ name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }],
  }
  const howLoveCode = `function love.load()
end

function love.update( dt )
end

function love.draw()
end`

  const howLoveDrawBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'love_draw',
        id: '#,^Bz1J+EGM*RQ3.\\\\/3FE',
        x: 263,
        y: 513,
        inputs: {
          input: {
            block: {
              type: 'graphics_rectangle',
              id: 's.fRH_MrnXYRY*Eqzp2!',
              fields: { mode: 'fill' },
              inputs: {
                x: {
                  block: {
                    type: 'math_number',
                    id: '*@.5Hz{KOncVQzCdS$;G',
                    fields: { NUM: 100 },
                  },
                },
                y: { block: { type: 'math_number', id: 'Uq~fQCgyh0kju$1\\/jp^`', fields: { NUM: 100 } } },
                width: { block: { type: 'math_number', id: 'ysv_iG)p(JPt*v\\/K~smD', fields: { NUM: 30 } } },
                height: { block: { type: 'math_number', id: '3Wh@}.o9Cbp|VVwAn@K}', fields: { NUM: 30 } } },
                rx: { block: { type: 'math_number', id: ',;#0z}~CwtI8*?1x{n%T', fields: { NUM: 0 } } },
                ry: { block: { type: 'math_number', id: '7Q!~IJ*=oVTQ[Pyln5a*', fields: { NUM: 0 } } },
                segments: { block: { type: 'math_number', id: 'T.Gu%~6!9]{,bnb%JJ.g', fields: { NUM: 0 } } },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, {
      name: 'presses',
      id: 'iz$Tq($zc`@meSeT|IAF',
    }, { name: 'ddd', id: 'h#)@FWoA4^tHcFZM5Gl0' }, {
      name: 'istouch',
      id: '0*Y;vSg$+l.$](h)NqUg',
    }, { name: 'i', id: 'IlHu%)$@1c{Ll!\\/\\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, {
      name: 'dy',
      id: 'tL]gH\\/RgkyzW})oL2Q8h',
    }, { name: 'pressure', id: 'rzU#N_N[#L.5Ex-J{cjc' }, {
      name: 'SPEED',
      id: 'V^)X29B$\\/zH~5@~EHeQ+',
    }, { name: 'bullets', id: 'Ikt@YU{LJ;z{72MZMduV' }, {
      name: 'StartPosX',
      id: 'IJ7]gk-LGS!XJjIjc5ie',
    }, { name: 'StartPosY', id: 'HrYu!x=_GCNfv-KXil4|' }, {
      name: 'width',
      id: '1y?LmN9o\\/~Qp`S*|{DH:',
    }, { name: 'height', id: '5=26Gq-40{hdQ@p.!EK`' }, {
      name: 'bullet',
      id: 'ptn8UybJM48DSX}-Hh0G',
    }, { name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'startX',
      id: 'y^.~f-*hinMPmYApRQ#6',
    }, { name: 'startY', id: 'MAEs]3BFw99dpzi+@7e+' }, {
      name: 'targetX',
      id: 'USmkA#!6OOi2srMLINeV',
    }, { name: 'targetY', id: 'z_p0dER?xLmZQ9In__^K' }, {
      name: 'angle',
      id: 'h6$rJt^$f99@WKbR=Tnb',
    }, { name: 'newBullet', id: '6G3v3,Xs1%!t||~8v@um' }, { name: 'image', id: '%m+~Mk2-i;D(WWLR-sFo' }],
  }
  const howLoveDrawCode = `function love.draw()
  love.graphics.rectangle("fill", 100, 100, 30, 30, 0, 0, 0)
end
`

  const fifteenDrawBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'love_draw',
        id: 'taLgY$2~Q]b,:zgiEsHW',
        x: 13,
        y: 2963,
        inputs: {
          input: {
            block: {
              type: 'controls_for',
              id: '+dx+j|y~l7P^6~?u13HH',
              fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
              inputs: {
                FROM: { shadow: { type: 'math_number', id: '18lW)IJERIaFXBSIK_Mx', fields: { NUM: 1 } } },
                TO: {
                  shadow: { type: 'math_number', id: 'x6(OKQH$se\/*U[1T:u5^', fields: { NUM: 10 } },
                  block: {
                    type: 'variables_get',
                    id: '2-F0FUCycc?Gsj3ZzA^r',
                    fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                  },
                },
                BY: { shadow: { type: 'math_number', id: '2eA-`cm`yRQBF|^4zCWS', fields: { NUM: 1 } } },
                DO: {
                  block: {
                    type: 'controls_for',
                    id: '[PwK%YUc*%1Q]]8mp]WU',
                    fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                    inputs: {
                      FROM: {
                        shadow: {
                          type: 'math_number',
                          id: '}Ip@0mZOI~@uTo_ndr*4',
                          fields: { NUM: 1 },
                        },
                      },
                      TO: {
                        shadow: {
                          type: 'math_number',
                          id: 'CnNKR!F7F:q,GYq_z|w.',
                          fields: { NUM: 10 },
                        },
                        block: {
                          type: 'variables_get',
                          id: '8pQK}(]$Z%r?NO(!5M99',
                          fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                        },
                      },
                      BY: {
                        shadow: {
                          type: 'math_number',
                          id: 'dZY-Mbjtx^7vHVL@BA4W',
                          fields: { NUM: 1 },
                        },
                      },
                      DO: {
                        block: {
                          type: 'variables_set',
                          id: '8Gxiq6@-x})o($y,$aqI',
                          fields: { VAR: { id: '_meM90BYI(TFPllY^+u[' } },
                          inputs: {
                            VALUE: {
                              block: {
                                type: 'math_arithmetic',
                                id: 'iBlSCuq\/FaG:tDc)O8%Q',
                                fields: { OP: 'MINUS' },
                                inputs: {
                                  A: {
                                    shadow: {
                                      type: 'math_number',
                                      id: ',\/z`?8_HnwafZh)57PQ=',
                                      fields: { NUM: 1 },
                                    },
                                    block: {
                                      type: 'variables_get',
                                      id: 'yMBkFv_KiQq.,\/9?Kq_C',
                                      fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                                    },
                                  },
                                  B: {
                                    shadow: {
                                      type: 'math_number',
                                      id: 'z`HuOo)-)T0`?(Ej_8?7',
                                      fields: { NUM: 1 },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          next: {
                            block: {
                              type: 'graphics_setcolor',
                              id: 'wceH%n?5!sq*$*|;!dS+',
                              fields: { red: 0.4, green: 0.1, blue: 0.6, alpha: 1 },
                              next: {
                                block: {
                                  type: 'graphics_rectangle',
                                  id: '^VEA#+JEr=tL`FajkUuE',
                                  fields: { mode: 'fill' },
                                  inputs: {
                                    x: {
                                      block: {
                                        type: 'math_arithmetic',
                                        id: '!~LfAY.cCeQ=Y^#4|$Z8',
                                        fields: { OP: 'MULTIPLY' },
                                        inputs: {
                                          A: {
                                            shadow: {
                                              type: 'math_number',
                                              id: 'Ws(c8)uU:0{TOIdMT4)N',
                                              fields: { NUM: 1 },
                                            },
                                            block: {
                                              type: 'math_arithmetic',
                                              id: '+=mOQoff`i.8Nomh|()K',
                                              fields: { OP: 'MINUS' },
                                              inputs: {
                                                A: {
                                                  shadow: {
                                                    type: 'math_number',
                                                    id: '`H_DJo|cEPp}1E.SUnyl',
                                                    fields: { NUM: 1 },
                                                  },
                                                  block: {
                                                    type: 'variables_get',
                                                    id: '-Cr[+L(?q.e[cqWMl=zG',
                                                    fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                                  },
                                                },
                                                B: {
                                                  shadow: {
                                                    type: 'math_number',
                                                    id: 'K\/Wj`heyLrpF^cUAk*Li',
                                                    fields: { NUM: 1 },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          B: {
                                            shadow: {
                                              type: 'math_number',
                                              id: 'W-5`1$-+{[fH3)},_%#t',
                                              fields: { NUM: 1 },
                                            },
                                            block: {
                                              type: 'variables_get',
                                              id: 'o=P7(IW%:A0CuC8gA]*~',
                                              fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    y: {
                                      block: {
                                        type: 'math_arithmetic',
                                        id: 'X8%D:bzUy#*.U,A.%*OL',
                                        fields: { OP: 'MULTIPLY' },
                                        inputs: {
                                          A: {
                                            shadow: {
                                              type: 'math_number',
                                              id: 'Ws(c8)uU:0{TOIdMT4)N',
                                              fields: { NUM: 1 },
                                            },
                                            block: {
                                              type: 'math_arithmetic',
                                              id: 'PZ\/dU+bCD%%^6wedggp7',
                                              fields: { OP: 'MINUS' },
                                              inputs: {
                                                A: {
                                                  shadow: {
                                                    type: 'math_number',
                                                    id: 'p(o=r!dNPz[$!uLD;bt6',
                                                    fields: { NUM: 1 },
                                                  },
                                                  block: {
                                                    type: 'variables_get',
                                                    id: '^9CsFrr,;VcbkzGhR+|[',
                                                    fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                                  },
                                                },
                                                B: {
                                                  shadow: {
                                                    type: 'math_number',
                                                    id: 'go`xszOispuRe5oQ*=6|',
                                                    fields: { NUM: 1 },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          B: {
                                            shadow: {
                                              type: 'math_number',
                                              id: 'W-5`1$-+{[fH3)},_%#t',
                                              fields: { NUM: 1 },
                                            },
                                            block: {
                                              type: 'variables_get',
                                              id: 'VLItT+BRsKnjYTN,!6JY',
                                              fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    width: {
                                      block: {
                                        type: 'variables_get',
                                        id: 'zujaqm!OLEmesKfI|JHj',
                                        fields: { VAR: { id: '_meM90BYI(TFPllY^+u[' } },
                                      },
                                    },
                                    height: {
                                      block: {
                                        type: 'variables_get',
                                        id: '-q%Nej+}u}#6G9y{Fc0$',
                                        fields: { VAR: { id: '_meM90BYI(TFPllY^+u[' } },
                                      },
                                    },
                                    rx: {
                                      block: {
                                        type: 'math_number',
                                        id: 'Bd2\/kn.m@xQB,]e0qXSD',
                                        fields: { NUM: 0 },
                                      },
                                    },
                                    ry: {
                                      block: {
                                        type: 'math_number',
                                        id: 'kQlVZ,dx6fv)(wLjDYZJ',
                                        fields: { NUM: 0 },
                                      },
                                    },
                                    segments: {
                                      block: {
                                        type: 'math_number',
                                        id: 'D8~j]^S.{S#87Pv7{N^G',
                                        fields: { NUM: 0 },
                                      },
                                    },
                                  },
                                  next: {
                                    block: {
                                      type: 'graphics_setcolor',
                                      id: '5LOXjdiCB]wO71tsZrO5',
                                      fields: { red: 1, green: 1, blue: 1, alpha: 1 },
                                      next: {
                                        block: {
                                          type: 'graphics_print',
                                          id: 'fO5nHl.2~E*WB`V^s*,$',
                                          inputs: {
                                            text: {
                                              block: {
                                                type: 'text',
                                                id: 'fDj@8jAsL83okr\/ad(I|',
                                                fields: { TEXT: null },
                                              },
                                            },
                                            x: {
                                              block: {
                                                type: 'math_arithmetic',
                                                id: 'OVPwVCl+alW!z|$oxny+',
                                                fields: { OP: 'MULTIPLY' },
                                                inputs: {
                                                  A: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: 'Ws(c8)uU:0{TOIdMT4)N',
                                                      fields: { NUM: 1 },
                                                    },
                                                    block: {
                                                      type: 'math_arithmetic',
                                                      id: '5$w-n)Th|R+P^R)%zrWc',
                                                      fields: { OP: 'MINUS' },
                                                      inputs: {
                                                        A: {
                                                          shadow: {
                                                            type: 'math_number',
                                                            id: 'p(o=r!dNPz[$!uLD;bt6',
                                                            fields: { NUM: 1 },
                                                          },
                                                          block: {
                                                            type: 'variables_get',
                                                            id: 'xqM=?(*D}WzW(DSCsu7w',
                                                            fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                                          },
                                                        },
                                                        B: {
                                                          shadow: {
                                                            type: 'math_number',
                                                            id: 'Z~R,5-_LP[NW$qM8.lSQ',
                                                            fields: { NUM: 1 },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                  B: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: 'W-5`1$-+{[fH3)},_%#t',
                                                      fields: { NUM: 1 },
                                                    },
                                                    block: {
                                                      type: 'variables_get',
                                                      id: '6iRfX\/7pxv2rQyW_(?mL',
                                                      fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            y: {
                                              block: {
                                                type: 'math_arithmetic',
                                                id: 'e*qYsogA[OE\/R82NA*A2',
                                                fields: { OP: 'MULTIPLY' },
                                                inputs: {
                                                  A: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: 'Ws(c8)uU:0{TOIdMT4)N',
                                                      fields: { NUM: 1 },
                                                    },
                                                    block: {
                                                      type: 'math_arithmetic',
                                                      id: 'fV6^??[Yq0g-wGOIGS*}',
                                                      fields: { OP: 'MINUS' },
                                                      inputs: {
                                                        A: {
                                                          shadow: {
                                                            type: 'math_number',
                                                            id: 'p(o=r!dNPz[$!uLD;bt6',
                                                            fields: { NUM: 1 },
                                                          },
                                                          block: {
                                                            type: 'variables_get',
                                                            id: 'TFEUO8f;VZj%EPOZ=I~y',
                                                            fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                                          },
                                                        },
                                                        B: {
                                                          shadow: {
                                                            type: 'math_number',
                                                            id: 'Bej@9b)Ixp%9(0$-84[{',
                                                            fields: { NUM: 1 },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                  B: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: 'W-5`1$-+{[fH3)},_%#t',
                                                      fields: { NUM: 1 },
                                                    },
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'G.:ZvvvZ(n,:t?QH`L7|',
                                                      fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            r: {
                                              block: {
                                                type: 'math_number',
                                                id: 'E0]ij!V`jkqn5U^m,jWP',
                                                fields: { NUM: 0 },
                                              },
                                            },
                                            sx: {
                                              block: {
                                                type: 'math_number',
                                                id: 'A]JRhlZ9i#yLrks7OMLU',
                                                fields: { NUM: 1 },
                                              },
                                            },
                                            sy: {
                                              block: {
                                                type: 'math_number',
                                                id: '!oGpdjd?*~5XF5Di,u2D',
                                                fields: { NUM: 1 },
                                              },
                                            },
                                            ox: {
                                              block: {
                                                type: 'math_number',
                                                id: 'HQzUQs^JLjs7.j\/0x.Is',
                                                fields: { NUM: 0 },
                                              },
                                            },
                                            oy: {
                                              block: {
                                                type: 'math_number',
                                                id: ')qZ+MGJ@-RJ=,XkE.NAv',
                                                fields: { NUM: 0 },
                                              },
                                            },
                                            kx: {
                                              block: {
                                                type: 'math_number',
                                                id: 'B%:r`4FFjhY(Yi7qs!g9',
                                                fields: { NUM: 0 },
                                              },
                                            },
                                            ky: {
                                              block: {
                                                type: 'math_number',
                                                id: 'Qe\/TEf2U589s)oXx+5@+',
                                                fields: { NUM: 0 },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'love_load',
        id: 'OutyfaxPOfV3w6i^il1u',
        x: 13,
        y: 2688,
        inputs: {
          input: {
            block: {
              type: 'graphics_setnewfont',
              id: '%IE[U5~mi).P{ztVlBc:',
              inputs: {
                size: {
                  block: {
                    type: 'math_number',
                    id: '7:*6\/DHRfR@bfC^PHNrm',
                    fields: { NUM: 30 },
                  },
                },
              },
              next: {
                block: {
                  type: 'variables_set',
                  id: '%NY??6o\/zbQoXrgX4X-1',
                  fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                  inputs: {
                    VALUE: {
                      block: {
                        type: 'math_number',
                        id: '+PRB\/pxe`GQzz5O,~+:N',
                        fields: { NUM: 4 },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: 'variables_set',
                      id: 'erY9^O9rA4F~zw\/S1fT\/',
                      fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                      inputs: {
                        VALUE: {
                          block: {
                            type: 'math_number',
                            id: 'OrQueR#PUf]c@miw7+FN',
                            fields: { NUM: 4 },
                          },
                        },
                      },
                      next: {
                        block: {
                          type: 'variables_set',
                          id: '3J,}*xRNie\/X%Em%+QA.',
                          fields: { VAR: { id: 'cFe)q6W`*;@KA~,3qx;L' } },
                          inputs: {
                            VALUE: {
                              block: {
                                type: 'graphics_getheight',
                                id: 'aD`.$A_$prjLFz0RRL=~',
                              },
                            },
                          },
                          next: {
                            block: {
                              type: 'variables_set',
                              id: 'of6f5qp3C.;Z4]kss*^a',
                              fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                              inputs: {
                                VALUE: {
                                  block: {
                                    type: 'math_arithmetic',
                                    id: '$dle4Qq9FOxf+{ywl1i4',
                                    fields: { OP: 'DIVIDE' },
                                    inputs: {
                                      A: {
                                        shadow: {
                                          type: 'math_number',
                                          id: '8)?bXM[Cpq.PV`VMXq;X',
                                          fields: { NUM: 1 },
                                        },
                                        block: {
                                          type: 'math_arithmetic',
                                          id: 'p]*D}+g06-S-]Uy+#^g{',
                                          fields: { OP: 'MINUS' },
                                          inputs: {
                                            A: {
                                              shadow: {
                                                type: 'math_number',
                                                id: '8)?bXM[Cpq.PV`VMXq;X',
                                                fields: { NUM: 1 },
                                              },
                                              block: {
                                                type: 'variables_get',
                                                id: 'h=;-G`q,s$L1b@xLrRYM',
                                                fields: { VAR: { id: 'cFe)q6W`*;@KA~,3qx;L' } },
                                              },
                                            },
                                            B: {
                                              shadow: {
                                                type: 'math_number',
                                                id: 'o9-#~^#Z,n$(HkX1v7+P',
                                                fields: { NUM: 1 },
                                              },
                                              block: {
                                                type: 'math_modulo',
                                                id: 'W\/^0jyi[y(K)7+ZQ_-u*',
                                                inputs: {
                                                  DIVIDEND: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: '%quyi!-_W(-_W#0hve!T',
                                                      fields: { NUM: 64 },
                                                    },
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'vU!M.ptIpCABWRl4yL_S',
                                                      fields: { VAR: { id: 'cFe)q6W`*;@KA~,3qx;L' } },
                                                    },
                                                  },
                                                  DIVISOR: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: '\/Fer|,Tf@0MQ%MCaP4W0',
                                                      fields: { NUM: 10 },
                                                    },
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'A7(XY9z154bf!t\/zbQe~',
                                                      fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      B: {
                                        shadow: {
                                          type: 'math_number',
                                          id: 'o9-#~^#Z,n$(HkX1v7+P',
                                          fields: { NUM: 1 },
                                        },
                                        block: {
                                          type: 'variables_get',
                                          id: 's.KF2Ah_RS?|5fZB}r`2',
                                          fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              next: {
                                block: {
                                  type: 'variables_set',
                                  id: 'biS[jYhwRuvW0_7EqGy%',
                                  fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                  inputs: {
                                    VALUE: {
                                      block: {
                                        type: 'lists_create_with',
                                        id: '*6*f)tv]1]Z9lyQ()KTj',
                                        extraState: { itemCount: 0 },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, {
      name: 'presses',
      id: 'iz$Tq($zc`@meSeT|IAF',
    }, { name: 'ddd', id: 'h#)@FWoA4^tHcFZM5Gl0' }, {
      name: 'istouch',
      id: '0*Y;vSg$+l.$](h)NqUg',
    }, { name: 'i', id: 'IlHu%)$@1c{Ll!\/\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, {
      name: 'dy',
      id: 'tL]gH\/RgkyzW})oL2Q8h',
    }, { name: 'pressure', id: 'rzU#N_N[#L.5Ex-J{cjc' }, {
      name: 'SPEED',
      id: 'V^)X29B$\/zH~5@~EHeQ+',
    }, { name: 'bullets', id: 'Ikt@YU{LJ;z{72MZMduV' }, {
      name: 'StartPosX',
      id: 'IJ7]gk-LGS!XJjIjc5ie',
    }, { name: 'StartPosY', id: 'HrYu!x=_GCNfv-KXil4|' }, {
      name: 'width',
      id: '1y?LmN9o\/~Qp`S*|{DH:',
    }, { name: 'height', id: '5=26Gq-40{hdQ@p.!EK`' }, {
      name: 'bullet',
      id: 'ptn8UybJM48DSX}-Hh0G',
    }, { name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'startX',
      id: 'y^.~f-*hinMPmYApRQ#6',
    }, { name: 'startY', id: 'MAEs]3BFw99dpzi+@7e+' }, {
      name: 'targetX',
      id: 'USmkA#!6OOi2srMLINeV',
    }, { name: 'targetY', id: 'z_p0dER?xLmZQ9In__^K' }, {
      name: 'angle',
      id: 'h6$rJt^$f99@WKbR=Tnb',
    }, { name: 'newBullet', id: '6G3v3,Xs1%!t||~8v@um' }, {
      name: 'image',
      id: '%m+~Mk2-i;D(WWLR-sFo',
    }, { name: 'gridYCount', id: 'gWM+ATx0Hj]T9g245|Ve' }, {
      name: 'gridXCount',
      id: 'oU~_W`%vwMHIc:w|JKJ5',
    }, { name: 'y_list', id: 'F0zzH{*mBn~JUcOc{PGn' }, {
      name: 'grid',
      id: 'RMDCPTS))lD%h16hbnq@',
    }, { name: 'pieceDrawSize', id: '_meM90BYI(TFPllY^+u[' }, {
      name: 'pieceSize',
      id: '9=n.6Z.u;mpi\/C`,yQW$',
    }, { name: 'begin_y', id: 'yhmEH)=rTPnUu1CrCyRc' }, {
      name: 'begin_x',
      id: '}?Usv|8TYx+HESB76w2*',
    }, { name: 'end_y', id: '9W{6Zy3al!a!bvg+bm|s' }, {
      name: 'end_x',
      id: 'aw3u=#D0T9:G}6X~2OmW',
    }, { name: 'doingTouch', id: '*U_aAxzSb`{y\/eJB$Wdw' }, {
      name: 'screen_width',
      id: 'cFe)q6W`*;@KA~,3qx;L',
    }],
  }
  const fifteenDrawCode = `function love.load()
  love.graphics.setNewFont( 30 )
  gridXCount = 4
  gridYCount = 4
  screen_width = love.graphics.getHeight()
  pieceSize = (screen_width - screen_width % gridXCount) / gridXCount
  grid = {}
end

function love.draw()
  for y = 1, gridYCount do
    for x = 1, gridXCount do
      pieceDrawSize = pieceSize - 1
      love.graphics.setColor(0.4, 0.1, 0.6, 1)
      love.graphics.rectangle("fill", ((x - 1) * pieceSize), ((y - 1) * pieceSize), pieceDrawSize, pieceDrawSize, 0, 0, 0)
      love.graphics.setColor(1, 1, 1, 1)
      love.graphics.print('', ((x - 1) * pieceSize), ((y - 1) * pieceSize), 0, 1, 1 , 0, 0, 0, 0)
    end
  end
end
`

  const fifteenInitialValuesBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'procedures_defreturn',
        id: '7,]k%Oy`F(rqfwX6DDLl',
        x: 116,
        y: -106,
        extraState: {
          params: [{ name: 'x', id: 'X)kXOb(\/nIYa;FY1XeM{' }, {
            name: 'y',
            id: 'u,p.?CSC[MMUV8VzT#EG',
          }],
        },
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'get initial value' },
        inputs: {
          RETURN: {
            block: {
              type: 'math_arithmetic',
              id: 'GR.s];5y4p3!YmAm{1{r',
              fields: { OP: 'ADD' },
              inputs: {
                A: {
                  shadow: { type: 'math_number', id: 'cm;`Y?_7jCAPXR0yXuk$', fields: { NUM: 1 } },
                  block: {
                    type: 'math_arithmetic',
                    id: '{LFIS#\/O)`cA%Bd}|~eS',
                    fields: { OP: 'MULTIPLY' },
                    inputs: {
                      A: {
                        shadow: {
                          type: 'math_number',
                          id: 'cm;`Y?_7jCAPXR0yXuk$',
                          fields: { NUM: 1 },
                        },
                        block: {
                          type: 'math_arithmetic',
                          id: '*..#zQj[PaM6|bn30JYf',
                          fields: { OP: 'MINUS' },
                          inputs: {
                            A: {
                              shadow: {
                                type: 'math_number',
                                id: 'cm;`Y?_7jCAPXR0yXuk$',
                                fields: { NUM: 1 },
                              },
                              block: {
                                type: 'variables_get',
                                id: 'dW~x$nz29Zhu2P)kWo?O',
                                fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                              },
                            },
                            B: {
                              shadow: {
                                type: 'math_number',
                                id: 'o|L7eMJ3K{~D?G%%M0k#',
                                fields: { NUM: 1 },
                              },
                            },
                          },
                        },
                      },
                      B: {
                        shadow: { type: 'math_number', id: 'MI=85)*F=ps1WMJrJOtQ', fields: { NUM: 1 } },
                        block: {
                          type: 'variables_get',
                          id: '%H]K[dPcdf*d_*-uLLaU',
                          fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                        },
                      },
                    },
                  },
                },
                B: {
                  shadow: { type: 'math_number', id: 'MI=85)*F=ps1WMJrJOtQ', fields: { NUM: 1 } },
                  block: {
                    type: 'variables_get',
                    id: 'ZFjD,@r72vRV%^uIfVG=',
                    fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'procedures_defnoreturn',
        id: 'uO#z%zH}Svc@w%AhZ3-I',
        x: 113,
        y: 38,
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'reset game' },
        inputs: {
          STACK: {
            block: {
              type: 'variables_set',
              id: 'biS[jYhwRuvW0_7EqGy%',
              fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
              inputs: {
                VALUE: {
                  block: {
                    type: 'lists_create_with',
                    id: '*6*f)tv]1]Z9lyQ()KTj',
                    extraState: { itemCount: 0 },
                  },
                },
              },
              next: {
                block: {
                  type: 'text_print',
                  id: 'N3[9,W`u\/[N*rdbfV3-e',
                  enabled: false,
                  inputs: {
                    TEXT: {
                      shadow: {
                        type: 'text',
                        id: 'aB%1`9Vk~21Ss_\/cQYkD',
                        fields: { TEXT: 'fill grid with initial values' },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: 'controls_for',
                      id: 'BF0axHFLFE;?zoZ9JMU`',
                      fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                      inputs: {
                        FROM: {
                          shadow: {
                            type: 'math_number',
                            id: 'u`I@0Qsa^u\/TnEr@_8)n',
                            fields: { NUM: 1 },
                          },
                        },
                        TO: {
                          shadow: {
                            type: 'math_number',
                            id: '\/J6UjY*gRbyX4o$5K|bq',
                            fields: { NUM: 10 },
                          },
                          block: {
                            type: 'variables_get',
                            id: '*KQBd2IPvfr;G8JqsZtz',
                            fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                          },
                        },
                        BY: {
                          shadow: {
                            type: 'math_number',
                            id: '9nM|%%c`SU^_^g;^b1Cc',
                            fields: { NUM: 1 },
                          },
                        },
                        DO: {
                          block: {
                            type: 'lists_setIndex',
                            id: 'eRRMb--GaEet)Q$,gZ@g',
                            extraState: '<mutation at="false"><\/mutation>',
                            fields: { MODE: 'INSERT', WHERE: 'LAST' },
                            inputs: {
                              LIST: {
                                block: {
                                  type: 'variables_get',
                                  id: 'EKBpRj*.^8dBt}w9f%W(',
                                  fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                },
                              },
                              TO: {
                                block: {
                                  type: 'lists_create_with',
                                  id: '$l]LhDO)dc?BUp8:8gBN',
                                  extraState: { itemCount: 0 },
                                },
                              },
                            },
                            next: {
                              block: {
                                type: 'controls_for',
                                id: '|#NeMoV=29]9#flM5ZA1',
                                fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                inputs: {
                                  FROM: {
                                    shadow: {
                                      type: 'math_number',
                                      id: '.jm0OM;P96\/f(t)DCOgy',
                                      fields: { NUM: 1 },
                                    },
                                  },
                                  TO: {
                                    shadow: {
                                      type: 'math_number',
                                      id: '\/J6UjY*gRbyX4o$5K|bq',
                                      fields: { NUM: 10 },
                                    },
                                    block: {
                                      type: 'variables_get',
                                      id: '1?)=-;[0,$`%AG@HLKtQ',
                                      fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                    },
                                  },
                                  BY: {
                                    shadow: {
                                      type: 'math_number',
                                      id: 'v1~v$yy_xdI]hJQWgir1',
                                      fields: { NUM: 1 },
                                    },
                                  },
                                  DO: {
                                    block: {
                                      type: 'variables_set',
                                      id: 'u3)}xIe\/t0A0uY$orZGN',
                                      fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                                      inputs: {
                                        VALUE: {
                                          block: {
                                            type: 'lists_getIndex',
                                            id: '`qerb(gs0K[xY!DlH_f;',
                                            extraState: '<mutation statement="false" at="false"><\/mutation>',
                                            fields: { MODE: 'GET', WHERE: 'LAST' },
                                            inputs: {
                                              VALUE: {
                                                block: {
                                                  type: 'variables_get',
                                                  id: 'e*)I7R}4cXLrW-6b,?7q',
                                                  fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      next: {
                                        block: {
                                          type: 'lists_setIndex',
                                          id: '*z^=HGpc.+\/F!t:sAI![',
                                          extraState: '<mutation at="false"><\/mutation>',
                                          fields: { MODE: 'INSERT', WHERE: 'LAST' },
                                          inputs: {
                                            LIST: {
                                              block: {
                                                type: 'variables_get',
                                                id: 'zJz;Rq^e$u#}0TdPw{]%',
                                                fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                                              },
                                            },
                                            TO: {
                                              block: {
                                                type: 'procedures_callreturn',
                                                id: '~WfYy%U()bHe4ZNfu`.s',
                                                extraState: { name: 'get initial value', params: ['x', 'y'] },
                                                inputs: {
                                                  ARG0: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'vp7N!!01EQ%8%pJ;3_2a',
                                                      fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                                    },
                                                  },
                                                  ARG1: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'cnl#Nul1lWKV(D-Sa9Bk',
                                                      fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, {
      name: 'presses',
      id: 'iz$Tq($zc`@meSeT|IAF',
    }, { name: 'ddd', id: 'h#)@FWoA4^tHcFZM5Gl0' }, {
      name: 'istouch',
      id: '0*Y;vSg$+l.$](h)NqUg',
    }, { name: 'i', id: 'IlHu%)$@1c{Ll!\/\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, {
      name: 'dy',
      id: 'tL]gH\/RgkyzW})oL2Q8h',
    }, { name: 'pressure', id: 'rzU#N_N[#L.5Ex-J{cjc' }, {
      name: 'SPEED',
      id: 'V^)X29B$\/zH~5@~EHeQ+',
    }, { name: 'bullets', id: 'Ikt@YU{LJ;z{72MZMduV' }, {
      name: 'StartPosX',
      id: 'IJ7]gk-LGS!XJjIjc5ie',
    }, { name: 'StartPosY', id: 'HrYu!x=_GCNfv-KXil4|' }, {
      name: 'width',
      id: '1y?LmN9o\/~Qp`S*|{DH:',
    }, { name: 'height', id: '5=26Gq-40{hdQ@p.!EK`' }, {
      name: 'bullet',
      id: 'ptn8UybJM48DSX}-Hh0G',
    }, { name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'startX',
      id: 'y^.~f-*hinMPmYApRQ#6',
    }, { name: 'startY', id: 'MAEs]3BFw99dpzi+@7e+' }, {
      name: 'targetX',
      id: 'USmkA#!6OOi2srMLINeV',
    }, { name: 'targetY', id: 'z_p0dER?xLmZQ9In__^K' }, {
      name: 'angle',
      id: 'h6$rJt^$f99@WKbR=Tnb',
    }, { name: 'newBullet', id: '6G3v3,Xs1%!t||~8v@um' }, {
      name: 'image',
      id: '%m+~Mk2-i;D(WWLR-sFo',
    }, { name: 'gridYCount', id: 'gWM+ATx0Hj]T9g245|Ve' }, {
      name: 'gridXCount',
      id: 'oU~_W`%vwMHIc:w|JKJ5',
    }, { name: 'y_list', id: 'F0zzH{*mBn~JUcOc{PGn' }, {
      name: 'grid',
      id: 'RMDCPTS))lD%h16hbnq@',
    }, { name: 'pieceDrawSize', id: '_meM90BYI(TFPllY^+u[' }, {
      name: 'pieceSize',
      id: '9=n.6Z.u;mpi\/C`,yQW$',
    }, { name: 'begin_y', id: 'yhmEH)=rTPnUu1CrCyRc' }, {
      name: 'begin_x',
      id: '}?Usv|8TYx+HESB76w2*',
    }, { name: 'end_y', id: '9W{6Zy3al!a!bvg+bm|s' }, {
      name: 'end_x',
      id: 'aw3u=#D0T9:G}6X~2OmW',
    }, { name: 'doingTouch', id: '*U_aAxzSb`{y\/eJB$Wdw' }, {
      name: 'screen_width',
      id: 'cFe)q6W`*;@KA~,3qx;L',
    }, { name: 'direction', id: '{JR$yN^Vw{pb0=k{uu24' }, {
      name: 'emptyX',
      id: 'H=+iZY.f~;ugq.w}a1UI',
    }, { name: 'emptyY', id: '@O}4b2HfI6`9Q07K%*\/}' }, {
      name: 'newEmptyX',
      id: '`#|~ObE!JHrVeZ4iRU`P',
    }, { name: 'newEmptyY', id: 'Dc+VCVs;^34oL(Gct*_Y' }, {
      name: 'new_empty_y_list',
      id: 'ofcdeDhcQGnZw:1$:ANU',
    }, { name: 'empty_y_list', id: 'C]NQuM37]+zIo_,{8r[%' }, {
      name: 'j',
      id: 'pQ6E[A95[|,5NrqlBzZz',
    }, { name: 'moveNumber', id: 'cDm|,jC^q.nnIbkM3Is:' }, { name: 'roll', id: 'Db5aKrN@q~72i1hQ2Qn8' }],
  }
  const fifteenInitialValuesCode = `function get_initial_value(x, y)
  return (y - 1) * gridXCount + x
end


function reset_game()
  grid = {}
  for y = 1, gridYCount do
    for x = 1, gridXCount do
      y_list = grid[#grid]
      table.insert(y_list, #y_list + 1, get_initial_value(x, y))
    end
  end
end
`

  const fifteenBoardBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'procedures_defreturn',
        id: '7,]k%Oy`F(rqfwX6DDLl',
        x: 38,
        y: 2188,
        extraState: {
          params: [{ name: 'x', id: 'X)kXOb(\/nIYa;FY1XeM{' }, {
            name: 'y',
            id: 'u,p.?CSC[MMUV8VzT#EG',
          }],
        },
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'get initial value' },
        inputs: {
          RETURN: {
            block: {
              type: 'math_arithmetic',
              id: 'GR.s];5y4p3!YmAm{1{r',
              fields: { OP: 'ADD' },
              inputs: {
                A: {
                  shadow: { type: 'math_number', id: 'cm;`Y?_7jCAPXR0yXuk$', fields: { NUM: 1 } },
                  block: {
                    type: 'math_arithmetic',
                    id: '{LFIS#\/O)`cA%Bd}|~eS',
                    fields: { OP: 'MULTIPLY' },
                    inputs: {
                      A: {
                        shadow: {
                          type: 'math_number',
                          id: 'cm;`Y?_7jCAPXR0yXuk$',
                          fields: { NUM: 1 },
                        },
                        block: {
                          type: 'math_arithmetic',
                          id: '*..#zQj[PaM6|bn30JYf',
                          fields: { OP: 'MINUS' },
                          inputs: {
                            A: {
                              shadow: {
                                type: 'math_number',
                                id: 'cm;`Y?_7jCAPXR0yXuk$',
                                fields: { NUM: 1 },
                              },
                              block: {
                                type: 'variables_get',
                                id: 'dW~x$nz29Zhu2P)kWo?O',
                                fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                              },
                            },
                            B: {
                              shadow: {
                                type: 'math_number',
                                id: 'o|L7eMJ3K{~D?G%%M0k#',
                                fields: { NUM: 1 },
                              },
                            },
                          },
                        },
                      },
                      B: {
                        shadow: { type: 'math_number', id: 'MI=85)*F=ps1WMJrJOtQ', fields: { NUM: 1 } },
                        block: {
                          type: 'variables_get',
                          id: '%H]K[dPcdf*d_*-uLLaU',
                          fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                        },
                      },
                    },
                  },
                },
                B: {
                  shadow: { type: 'math_number', id: 'MI=85)*F=ps1WMJrJOtQ', fields: { NUM: 1 } },
                  block: {
                    type: 'variables_get',
                    id: 'ZFjD,@r72vRV%^uIfVG=',
                    fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'procedures_defnoreturn',
        id: 'uO#z%zH}Svc@w%AhZ3-I',
        x: 37,
        y: 2338,
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'reset game' },
        inputs: {
          STACK: {
            block: {
              type: 'variables_set',
              id: 'biS[jYhwRuvW0_7EqGy%',
              fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
              inputs: {
                VALUE: {
                  block: {
                    type: 'lists_create_with',
                    id: '*6*f)tv]1]Z9lyQ()KTj',
                    extraState: { itemCount: 0 },
                  },
                },
              },
              next: {
                block: {
                  type: 'text_print',
                  id: 'N3[9,W`u\/[N*rdbfV3-e',
                  enabled: false,
                  inputs: {
                    TEXT: {
                      shadow: {
                        type: 'text',
                        id: 'aB%1`9Vk~21Ss_\/cQYkD',
                        fields: { TEXT: 'fill grid with initial values' },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: 'controls_for',
                      id: 'BF0axHFLFE;?zoZ9JMU`',
                      fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                      inputs: {
                        FROM: {
                          shadow: {
                            type: 'math_number',
                            id: 'u`I@0Qsa^u\/TnEr@_8)n',
                            fields: { NUM: 1 },
                          },
                        },
                        TO: {
                          shadow: {
                            type: 'math_number',
                            id: '\/J6UjY*gRbyX4o$5K|bq',
                            fields: { NUM: 10 },
                          },
                          block: {
                            type: 'variables_get',
                            id: '*KQBd2IPvfr;G8JqsZtz',
                            fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                          },
                        },
                        BY: {
                          shadow: {
                            type: 'math_number',
                            id: '9nM|%%c`SU^_^g;^b1Cc',
                            fields: { NUM: 1 },
                          },
                        },
                        DO: {
                          block: {
                            type: 'lists_setIndex',
                            id: 'eRRMb--GaEet)Q$,gZ@g',
                            extraState: '<mutation at="false"><\/mutation>',
                            fields: { MODE: 'INSERT', WHERE: 'LAST' },
                            inputs: {
                              LIST: {
                                block: {
                                  type: 'variables_get',
                                  id: 'EKBpRj*.^8dBt}w9f%W(',
                                  fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                },
                              },
                              TO: {
                                block: {
                                  type: 'lists_create_with',
                                  id: '$l]LhDO)dc?BUp8:8gBN',
                                  extraState: { itemCount: 0 },
                                },
                              },
                            },
                            next: {
                              block: {
                                type: 'controls_for',
                                id: '|#NeMoV=29]9#flM5ZA1',
                                fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                inputs: {
                                  FROM: {
                                    shadow: {
                                      type: 'math_number',
                                      id: '.jm0OM;P96\/f(t)DCOgy',
                                      fields: { NUM: 1 },
                                    },
                                  },
                                  TO: {
                                    shadow: {
                                      type: 'math_number',
                                      id: '\/J6UjY*gRbyX4o$5K|bq',
                                      fields: { NUM: 10 },
                                    },
                                    block: {
                                      type: 'variables_get',
                                      id: '1?)=-;[0,$`%AG@HLKtQ',
                                      fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                    },
                                  },
                                  BY: {
                                    shadow: {
                                      type: 'math_number',
                                      id: 'v1~v$yy_xdI]hJQWgir1',
                                      fields: { NUM: 1 },
                                    },
                                  },
                                  DO: {
                                    block: {
                                      type: 'variables_set',
                                      id: 'u3)}xIe\/t0A0uY$orZGN',
                                      fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                                      inputs: {
                                        VALUE: {
                                          block: {
                                            type: 'lists_getIndex',
                                            id: '`qerb(gs0K[xY!DlH_f;',
                                            extraState: '<mutation statement="false" at="false"><\/mutation>',
                                            fields: { MODE: 'GET', WHERE: 'LAST' },
                                            inputs: {
                                              VALUE: {
                                                block: {
                                                  type: 'variables_get',
                                                  id: 'e*)I7R}4cXLrW-6b,?7q',
                                                  fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      next: {
                                        block: {
                                          type: 'lists_setIndex',
                                          id: '*z^=HGpc.+\/F!t:sAI![',
                                          extraState: '<mutation at="false"><\/mutation>',
                                          fields: { MODE: 'INSERT', WHERE: 'LAST' },
                                          inputs: {
                                            LIST: {
                                              block: {
                                                type: 'variables_get',
                                                id: 'zJz;Rq^e$u#}0TdPw{]%',
                                                fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                                              },
                                            },
                                            TO: {
                                              block: {
                                                type: 'procedures_callreturn',
                                                id: '~WfYy%U()bHe4ZNfu`.s',
                                                extraState: { name: 'get initial value', params: ['x', 'y'] },
                                                inputs: {
                                                  ARG0: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'vp7N!!01EQ%8%pJ;3_2a',
                                                      fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                                    },
                                                  },
                                                  ARG1: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'cnl#Nul1lWKV(D-Sa9Bk',
                                                      fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'love_draw',
        id: 'taLgY$2~Q]b,:zgiEsHW',
        x: 38,
        y: 3038,
        inputs: {
          input: {
            block: {
              type: 'controls_for',
              id: '+dx+j|y~l7P^6~?u13HH',
              fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
              inputs: {
                FROM: { shadow: { type: 'math_number', id: '18lW)IJERIaFXBSIK_Mx', fields: { NUM: 1 } } },
                TO: {
                  shadow: { type: 'math_number', id: 'x6(OKQH$se\/*U[1T:u5^', fields: { NUM: 10 } },
                  block: {
                    type: 'variables_get',
                    id: '2-F0FUCycc?Gsj3ZzA^r',
                    fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                  },
                },
                BY: { shadow: { type: 'math_number', id: '2eA-`cm`yRQBF|^4zCWS', fields: { NUM: 1 } } },
                DO: {
                  block: {
                    type: 'controls_for',
                    id: '[PwK%YUc*%1Q]]8mp]WU',
                    fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                    inputs: {
                      FROM: {
                        shadow: {
                          type: 'math_number',
                          id: '}Ip@0mZOI~@uTo_ndr*4',
                          fields: { NUM: 1 },
                        },
                      },
                      TO: {
                        shadow: {
                          type: 'math_number',
                          id: 'CnNKR!F7F:q,GYq_z|w.',
                          fields: { NUM: 10 },
                        },
                        block: {
                          type: 'variables_get',
                          id: '8pQK}(]$Z%r?NO(!5M99',
                          fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                        },
                      },
                      BY: {
                        shadow: {
                          type: 'math_number',
                          id: 'dZY-Mbjtx^7vHVL@BA4W',
                          fields: { NUM: 1 },
                        },
                      },
                      DO: {
                        block: {
                          type: 'variables_set',
                          id: 'T|}ED:)5Zr$dDHN?7n*W',
                          fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                          inputs: {
                            VALUE: {
                              block: {
                                type: 'lists_getIndex',
                                id: 'rAh)a5|)lWtm2duoqF?T',
                                extraState: '<mutation statement="false" at="true"><\/mutation>',
                                fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                inputs: {
                                  VALUE: {
                                    block: {
                                      type: 'variables_get',
                                      id: 'VkdA3A\/e+ePs$5npXR`y',
                                      fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                    },
                                  },
                                  AT: {
                                    block: {
                                      type: 'variables_get',
                                      id: 't,`~DL2WdCE?Rhgc4Lrp',
                                      fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          next: {
                            block: {
                              type: 'controls_if',
                              id: '`3?|d9vxnE6QNY(7:aCs',
                              inputs: {
                                IF0: {
                                  block: {
                                    type: 'logic_compare',
                                    id: '.;fa:kEtJ0ZJk7hz^^NY',
                                    fields: { OP: 'NEQ' },
                                    inputs: {
                                      A: {
                                        block: {
                                          type: 'lists_getIndex',
                                          id: '-3-:;u][GhQ%z~BxqSMR',
                                          extraState: '<mutation statement="false" at="true"><\/mutation>',
                                          fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                          inputs: {
                                            VALUE: {
                                              block: {
                                                type: 'variables_get',
                                                id: 'RbrRB!trSMC(+1h(\/)d^',
                                                fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                                              },
                                            },
                                            AT: {
                                              block: {
                                                type: 'variables_get',
                                                id: 'xi]9vcA0g@#802%ss~d|',
                                                fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      B: {
                                        block: {
                                          type: 'math_arithmetic',
                                          id: 'zCmc:O!D,rnp]mt$|dw-',
                                          fields: { OP: 'MULTIPLY' },
                                          inputs: {
                                            A: {
                                              shadow: {
                                                type: 'math_number',
                                                id: '_az!5Am\/R(XoN_n#joZs',
                                                fields: { NUM: 1 },
                                              },
                                              block: {
                                                type: 'variables_get',
                                                id: '#:z1htYrXWm@*d5!l9mg',
                                                fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                              },
                                            },
                                            B: {
                                              shadow: {
                                                type: 'math_number',
                                                id: 'keUk,R~s9L7p(a9+2NNQ',
                                                fields: { NUM: 1 },
                                              },
                                              block: {
                                                type: 'variables_get',
                                                id: 'GQ8sFsIzYd9fQukxeNcF',
                                                fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                DO0: {
                                  block: {
                                    type: 'variables_set',
                                    id: '8Gxiq6@-x})o($y,$aqI',
                                    fields: { VAR: { id: '_meM90BYI(TFPllY^+u[' } },
                                    inputs: {
                                      VALUE: {
                                        block: {
                                          type: 'math_arithmetic',
                                          id: 'iBlSCuq\/FaG:tDc)O8%Q',
                                          fields: { OP: 'MINUS' },
                                          inputs: {
                                            A: {
                                              shadow: {
                                                type: 'math_number',
                                                id: ',\/z`?8_HnwafZh)57PQ=',
                                                fields: { NUM: 1 },
                                              },
                                              block: {
                                                type: 'variables_get',
                                                id: 'yMBkFv_KiQq.,\/9?Kq_C',
                                                fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                                              },
                                            },
                                            B: {
                                              shadow: {
                                                type: 'math_number',
                                                id: 'z`HuOo)-)T0`?(Ej_8?7',
                                                fields: { NUM: 1 },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    next: {
                                      block: {
                                        type: 'graphics_setcolor',
                                        id: 'wceH%n?5!sq*$*|;!dS+',
                                        fields: { red: 0.4, green: 0.1, blue: 0.6, alpha: 1 },
                                        next: {
                                          block: {
                                            type: 'graphics_rectangle',
                                            id: '^VEA#+JEr=tL`FajkUuE',
                                            fields: { mode: 'fill' },
                                            inputs: {
                                              x: {
                                                block: {
                                                  type: 'math_arithmetic',
                                                  id: '!~LfAY.cCeQ=Y^#4|$Z8',
                                                  fields: { OP: 'MULTIPLY' },
                                                  inputs: {
                                                    A: {
                                                      shadow: {
                                                        type: 'math_number',
                                                        id: 'Ws(c8)uU:0{TOIdMT4)N',
                                                        fields: { NUM: 1 },
                                                      },
                                                      block: {
                                                        type: 'math_arithmetic',
                                                        id: '+=mOQoff`i.8Nomh|()K',
                                                        fields: { OP: 'MINUS' },
                                                        inputs: {
                                                          A: {
                                                            shadow: {
                                                              type: 'math_number',
                                                              id: '`H_DJo|cEPp}1E.SUnyl',
                                                              fields: { NUM: 1 },
                                                            },
                                                            block: {
                                                              type: 'variables_get',
                                                              id: '-Cr[+L(?q.e[cqWMl=zG',
                                                              fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                                            },
                                                          },
                                                          B: {
                                                            shadow: {
                                                              type: 'math_number',
                                                              id: 'K\/Wj`heyLrpF^cUAk*Li',
                                                              fields: { NUM: 1 },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                    B: {
                                                      shadow: {
                                                        type: 'math_number',
                                                        id: 'W-5`1$-+{[fH3)},_%#t',
                                                        fields: { NUM: 1 },
                                                      },
                                                      block: {
                                                        type: 'variables_get',
                                                        id: 'o=P7(IW%:A0CuC8gA]*~',
                                                        fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                              y: {
                                                block: {
                                                  type: 'math_arithmetic',
                                                  id: 'X8%D:bzUy#*.U,A.%*OL',
                                                  fields: { OP: 'MULTIPLY' },
                                                  inputs: {
                                                    A: {
                                                      shadow: {
                                                        type: 'math_number',
                                                        id: 'Ws(c8)uU:0{TOIdMT4)N',
                                                        fields: { NUM: 1 },
                                                      },
                                                      block: {
                                                        type: 'math_arithmetic',
                                                        id: 'PZ\/dU+bCD%%^6wedggp7',
                                                        fields: { OP: 'MINUS' },
                                                        inputs: {
                                                          A: {
                                                            shadow: {
                                                              type: 'math_number',
                                                              id: 'p(o=r!dNPz[$!uLD;bt6',
                                                              fields: { NUM: 1 },
                                                            },
                                                            block: {
                                                              type: 'variables_get',
                                                              id: '^9CsFrr,;VcbkzGhR+|[',
                                                              fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                                            },
                                                          },
                                                          B: {
                                                            shadow: {
                                                              type: 'math_number',
                                                              id: 'go`xszOispuRe5oQ*=6|',
                                                              fields: { NUM: 1 },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                    B: {
                                                      shadow: {
                                                        type: 'math_number',
                                                        id: 'W-5`1$-+{[fH3)},_%#t',
                                                        fields: { NUM: 1 },
                                                      },
                                                      block: {
                                                        type: 'variables_get',
                                                        id: 'VLItT+BRsKnjYTN,!6JY',
                                                        fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                              width: {
                                                block: {
                                                  type: 'variables_get',
                                                  id: 'zujaqm!OLEmesKfI|JHj',
                                                  fields: { VAR: { id: '_meM90BYI(TFPllY^+u[' } },
                                                },
                                              },
                                              height: {
                                                block: {
                                                  type: 'variables_get',
                                                  id: '-q%Nej+}u}#6G9y{Fc0$',
                                                  fields: { VAR: { id: '_meM90BYI(TFPllY^+u[' } },
                                                },
                                              },
                                              rx: {
                                                block: {
                                                  type: 'math_number',
                                                  id: 'Bd2\/kn.m@xQB,]e0qXSD',
                                                  fields: { NUM: 0 },
                                                },
                                              },
                                              ry: {
                                                block: {
                                                  type: 'math_number',
                                                  id: 'kQlVZ,dx6fv)(wLjDYZJ',
                                                  fields: { NUM: 0 },
                                                },
                                              },
                                              segments: {
                                                block: {
                                                  type: 'math_number',
                                                  id: 'D8~j]^S.{S#87Pv7{N^G',
                                                  fields: { NUM: 0 },
                                                },
                                              },
                                            },
                                            next: {
                                              block: {
                                                type: 'graphics_setcolor',
                                                id: '5LOXjdiCB]wO71tsZrO5',
                                                fields: { red: 1, green: 1, blue: 1, alpha: 1 },
                                                next: {
                                                  block: {
                                                    type: 'graphics_print',
                                                    id: 'fO5nHl.2~E*WB`V^s*,$',
                                                    inputs: {
                                                      text: {
                                                        block: {
                                                          type: 'lists_getIndex',
                                                          id: 'Dn34vo6ym\/IM_LP,jrS@',
                                                          extraState: '<mutation statement="false" at="true"><\/mutation>',
                                                          fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                                          inputs: {
                                                            VALUE: {
                                                              block: {
                                                                type: 'variables_get',
                                                                id: '2tb`F(5R=ll@Ut:WG^~N',
                                                                fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                                                              },
                                                            },
                                                            AT: {
                                                              block: {
                                                                type: 'variables_get',
                                                                id: '],-wWR2BP=t+@QC-TF[2',
                                                                fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                      x: {
                                                        block: {
                                                          type: 'math_arithmetic',
                                                          id: 'OVPwVCl+alW!z|$oxny+',
                                                          fields: { OP: 'MULTIPLY' },
                                                          inputs: {
                                                            A: {
                                                              shadow: {
                                                                type: 'math_number',
                                                                id: 'Ws(c8)uU:0{TOIdMT4)N',
                                                                fields: { NUM: 1 },
                                                              },
                                                              block: {
                                                                type: 'math_arithmetic',
                                                                id: '5$w-n)Th|R+P^R)%zrWc',
                                                                fields: { OP: 'MINUS' },
                                                                inputs: {
                                                                  A: {
                                                                    shadow: {
                                                                      type: 'math_number',
                                                                      id: 'p(o=r!dNPz[$!uLD;bt6',
                                                                      fields: { NUM: 1 },
                                                                    },
                                                                    block: {
                                                                      type: 'variables_get',
                                                                      id: 'xqM=?(*D}WzW(DSCsu7w',
                                                                      fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                                                    },
                                                                  },
                                                                  B: {
                                                                    shadow: {
                                                                      type: 'math_number',
                                                                      id: 'Z~R,5-_LP[NW$qM8.lSQ',
                                                                      fields: { NUM: 1 },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                            B: {
                                                              shadow: {
                                                                type: 'math_number',
                                                                id: 'W-5`1$-+{[fH3)},_%#t',
                                                                fields: { NUM: 1 },
                                                              },
                                                              block: {
                                                                type: 'variables_get',
                                                                id: '6iRfX\/7pxv2rQyW_(?mL',
                                                                fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                      y: {
                                                        block: {
                                                          type: 'math_arithmetic',
                                                          id: 'e*qYsogA[OE\/R82NA*A2',
                                                          fields: { OP: 'MULTIPLY' },
                                                          inputs: {
                                                            A: {
                                                              shadow: {
                                                                type: 'math_number',
                                                                id: 'Ws(c8)uU:0{TOIdMT4)N',
                                                                fields: { NUM: 1 },
                                                              },
                                                              block: {
                                                                type: 'math_arithmetic',
                                                                id: 'fV6^??[Yq0g-wGOIGS*}',
                                                                fields: { OP: 'MINUS' },
                                                                inputs: {
                                                                  A: {
                                                                    shadow: {
                                                                      type: 'math_number',
                                                                      id: 'p(o=r!dNPz[$!uLD;bt6',
                                                                      fields: { NUM: 1 },
                                                                    },
                                                                    block: {
                                                                      type: 'variables_get',
                                                                      id: 'TFEUO8f;VZj%EPOZ=I~y',
                                                                      fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                                                    },
                                                                  },
                                                                  B: {
                                                                    shadow: {
                                                                      type: 'math_number',
                                                                      id: 'Bej@9b)Ixp%9(0$-84[{',
                                                                      fields: { NUM: 1 },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                            B: {
                                                              shadow: {
                                                                type: 'math_number',
                                                                id: 'W-5`1$-+{[fH3)},_%#t',
                                                                fields: { NUM: 1 },
                                                              },
                                                              block: {
                                                                type: 'variables_get',
                                                                id: 'G.:ZvvvZ(n,:t?QH`L7|',
                                                                fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                      r: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: 'E0]ij!V`jkqn5U^m,jWP',
                                                          fields: { NUM: 0 },
                                                        },
                                                      },
                                                      sx: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: 'A]JRhlZ9i#yLrks7OMLU',
                                                          fields: { NUM: 1 },
                                                        },
                                                      },
                                                      sy: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: '!oGpdjd?*~5XF5Di,u2D',
                                                          fields: { NUM: 1 },
                                                        },
                                                      },
                                                      ox: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: 'HQzUQs^JLjs7.j\/0x.Is',
                                                          fields: { NUM: 0 },
                                                        },
                                                      },
                                                      oy: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: ')qZ+MGJ@-RJ=,XkE.NAv',
                                                          fields: { NUM: 0 },
                                                        },
                                                      },
                                                      kx: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: 'B%:r`4FFjhY(Yi7qs!g9',
                                                          fields: { NUM: 0 },
                                                        },
                                                      },
                                                      ky: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: 'Qe\/TEf2U589s)oXx+5@+',
                                                          fields: { NUM: 0 },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'love_load',
        id: '`pYsNkzPc28d,PMCjqP:',
        x: 38,
        y: 2763,
        inputs: {
          input: {
            block: {
              type: 'graphics_setnewfont',
              id: 'z6$n*wKa`x^|Aa7(Sl{$',
              inputs: {
                size: {
                  block: {
                    type: 'math_number',
                    id: 'lv%bDL1B_GY171F(.?NM',
                    fields: { NUM: 30 },
                  },
                },
              },
              next: {
                block: {
                  type: 'variables_set',
                  id: 'B..-$k_MX45A8:qnkY)Z',
                  fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                  inputs: {
                    VALUE: {
                      block: {
                        type: 'math_number',
                        id: '~dtS:I:Id,yYg|NS1)x}',
                        fields: { NUM: 4 },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: 'variables_set',
                      id: 'i60`nSS%aO8FyZsU[;B6',
                      fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                      inputs: {
                        VALUE: {
                          block: {
                            type: 'math_number',
                            id: ')fH6m+b*sEM#*0Pp87_-',
                            fields: { NUM: 4 },
                          },
                        },
                      },
                      next: {
                        block: {
                          type: 'variables_set',
                          id: '3J,}*xRNie\/X%Em%+QA.',
                          fields: { VAR: { id: 'cFe)q6W`*;@KA~,3qx;L' } },
                          inputs: {
                            VALUE: {
                              block: {
                                type: 'graphics_getheight',
                                id: 'aD`.$A_$prjLFz0RRL=~',
                              },
                            },
                          },
                          next: {
                            block: {
                              type: 'variables_set',
                              id: 'N4=Xm.kLS}s|Y=*f!a7$',
                              fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                              inputs: {
                                VALUE: {
                                  block: {
                                    type: 'math_arithmetic',
                                    id: '@%L!8{Gg6Mfp,X_~3^mP',
                                    fields: { OP: 'DIVIDE' },
                                    inputs: {
                                      A: {
                                        shadow: {
                                          type: 'math_number',
                                          id: '8)?bXM[Cpq.PV`VMXq;X',
                                          fields: { NUM: 1 },
                                        },
                                        block: {
                                          type: 'math_arithmetic',
                                          id: 'b?^G}V^~#nbH:ViDa^f4',
                                          fields: { OP: 'MINUS' },
                                          inputs: {
                                            A: {
                                              shadow: {
                                                type: 'math_number',
                                                id: '8)?bXM[Cpq.PV`VMXq;X',
                                                fields: { NUM: 1 },
                                              },
                                              block: {
                                                type: 'variables_get',
                                                id: 'P%(\/HoF`\/oB9-aCTv\/)[',
                                                fields: { VAR: { id: 'cFe)q6W`*;@KA~,3qx;L' } },
                                              },
                                            },
                                            B: {
                                              shadow: {
                                                type: 'math_number',
                                                id: 'o9-#~^#Z,n$(HkX1v7+P',
                                                fields: { NUM: 1 },
                                              },
                                              block: {
                                                type: 'math_modulo',
                                                id: 'nE_^n0wnYpYRv%lHy;m)',
                                                inputs: {
                                                  DIVIDEND: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: '%quyi!-_W(-_W#0hve!T',
                                                      fields: { NUM: 64 },
                                                    },
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'bJe,:l(x14q!V.ZM5VN4',
                                                      fields: { VAR: { id: 'cFe)q6W`*;@KA~,3qx;L' } },
                                                    },
                                                  },
                                                  DIVISOR: {
                                                    shadow: {
                                                      type: 'math_number',
                                                      id: '\/Fer|,Tf@0MQ%MCaP4W0',
                                                      fields: { NUM: 10 },
                                                    },
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'F_wq4MA5-(i,m0{RcHRW',
                                                      fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      B: {
                                        shadow: {
                                          type: 'math_number',
                                          id: 'o9-#~^#Z,n$(HkX1v7+P',
                                          fields: { NUM: 1 },
                                        },
                                        block: {
                                          type: 'variables_get',
                                          id: '6~oEm2nnN[:V{5^%wF~Q',
                                          fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              next: {
                                block: {
                                  type: 'procedures_callnoreturn',
                                  id: 'yK,gMiFuRHBAUnmlci)X',
                                  extraState: { name: 'reset game' },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, {
      name: 'presses',
      id: 'iz$Tq($zc`@meSeT|IAF',
    }, { name: 'ddd', id: 'h#)@FWoA4^tHcFZM5Gl0' }, {
      name: 'istouch',
      id: '0*Y;vSg$+l.$](h)NqUg',
    }, { name: 'i', id: 'IlHu%)$@1c{Ll!\/\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, {
      name: 'dy',
      id: 'tL]gH\/RgkyzW})oL2Q8h',
    }, { name: 'pressure', id: 'rzU#N_N[#L.5Ex-J{cjc' }, {
      name: 'SPEED',
      id: 'V^)X29B$\/zH~5@~EHeQ+',
    }, { name: 'bullets', id: 'Ikt@YU{LJ;z{72MZMduV' }, {
      name: 'StartPosX',
      id: 'IJ7]gk-LGS!XJjIjc5ie',
    }, { name: 'StartPosY', id: 'HrYu!x=_GCNfv-KXil4|' }, {
      name: 'width',
      id: '1y?LmN9o\/~Qp`S*|{DH:',
    }, { name: 'height', id: '5=26Gq-40{hdQ@p.!EK`' }, {
      name: 'bullet',
      id: 'ptn8UybJM48DSX}-Hh0G',
    }, { name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'startX',
      id: 'y^.~f-*hinMPmYApRQ#6',
    }, { name: 'startY', id: 'MAEs]3BFw99dpzi+@7e+' }, {
      name: 'targetX',
      id: 'USmkA#!6OOi2srMLINeV',
    }, { name: 'targetY', id: 'z_p0dER?xLmZQ9In__^K' }, {
      name: 'angle',
      id: 'h6$rJt^$f99@WKbR=Tnb',
    }, { name: 'newBullet', id: '6G3v3,Xs1%!t||~8v@um' }, {
      name: 'image',
      id: '%m+~Mk2-i;D(WWLR-sFo',
    }, { name: 'gridYCount', id: 'gWM+ATx0Hj]T9g245|Ve' }, {
      name: 'gridXCount',
      id: 'oU~_W`%vwMHIc:w|JKJ5',
    }, { name: 'y_list', id: 'F0zzH{*mBn~JUcOc{PGn' }, {
      name: 'grid',
      id: 'RMDCPTS))lD%h16hbnq@',
    }, { name: 'pieceDrawSize', id: '_meM90BYI(TFPllY^+u[' }, {
      name: 'pieceSize',
      id: '9=n.6Z.u;mpi\/C`,yQW$',
    }, { name: 'begin_y', id: 'yhmEH)=rTPnUu1CrCyRc' }, {
      name: 'begin_x',
      id: '}?Usv|8TYx+HESB76w2*',
    }, { name: 'end_y', id: '9W{6Zy3al!a!bvg+bm|s' }, {
      name: 'end_x',
      id: 'aw3u=#D0T9:G}6X~2OmW',
    }, { name: 'doingTouch', id: '*U_aAxzSb`{y\/eJB$Wdw' }, {
      name: 'screen_width',
      id: 'cFe)q6W`*;@KA~,3qx;L',
    }, { name: 'direction', id: '{JR$yN^Vw{pb0=k{uu24' }, {
      name: 'emptyX',
      id: 'H=+iZY.f~;ugq.w}a1UI',
    }, { name: 'emptyY', id: '@O}4b2HfI6`9Q07K%*\/}' }, {
      name: 'newEmptyX',
      id: '`#|~ObE!JHrVeZ4iRU`P',
    }, { name: 'newEmptyY', id: 'Dc+VCVs;^34oL(Gct*_Y' }, {
      name: 'new_empty_y_list',
      id: 'ofcdeDhcQGnZw:1$:ANU',
    }, { name: 'empty_y_list', id: 'C]NQuM37]+zIo_,{8r[%' }, {
      name: 'j',
      id: 'pQ6E[A95[|,5NrqlBzZz',
    }, { name: 'moveNumber', id: 'cDm|,jC^q.nnIbkM3Is:' }, { name: 'roll', id: 'Db5aKrN@q~72i1hQ2Qn8' }],
  }
  const fifteenBoardCode = `function get_initial_value(x, y)
  return (y - 1) * gridXCount + x
end

function reset_game()
  grid = {}
  for y = 1, gridYCount do
    table.insert(grid, #grid + 1, {})
    for x = 1, gridXCount do
      y_list = grid[#grid]
      table.insert(y_list, #y_list + 1, get_initial_value(x, y))
    end
  end
end

function love.load()
  love.graphics.setNewFont( 30 )
  gridXCount = 4
  gridYCount = 4
  screen_width = love.graphics.getHeight()
  pieceSize = (screen_width - screen_width % gridXCount) / gridXCount
  reset_game()
end

function love.draw()
  for y = 1, gridYCount do
    for x = 1, gridXCount do
      y_list = grid[y]
      if y_list[x] ~= gridXCount * gridYCount then
        pieceDrawSize = pieceSize - 1
        love.graphics.setColor(0.4, 0.1, 0.6, 1)
        love.graphics.rectangle("fill", ((x - 1) * pieceSize), ((y - 1) * pieceSize), pieceDrawSize, pieceDrawSize, 0, 0, 0)
        love.graphics.setColor(1, 1, 1, 1)
        love.graphics.print((y_list[x]), ((x - 1) * pieceSize), ((y - 1) * pieceSize), 0, 1, 1 , 0, 0, 0, 0)
      end
    end
  end
end
`

  const fifteenMoveBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'procedures_defnoreturn',
        id: '6STjZrMWewE+dcudeyZc',
        x: 38,
        y: 1088,
        extraState: { params: [{ name: 'direction', id: '{JR$yN^Vw{pb0=k{uu24' }] },
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'move' },
        inputs: {
          STACK: {
            block: {
              type: 'text_print',
              id: '~O%ko|%{%I6\/=fE^j_XQ',
              enabled: false,
              inputs: {
                TEXT: {
                  shadow: {
                    type: 'text',
                    id: 'f7Pyh|yT)=knI(iH`ZeQ',
                    fields: { TEXT: 'Find empty field position X,Y' },
                  },
                },
              },
              next: {
                block: {
                  type: 'controls_for',
                  id: '{-UbG1Wx]o#P6}MhWFoN',
                  fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                  inputs: {
                    FROM: {
                      shadow: {
                        type: 'math_number',
                        id: '^Utj|3Q%w47Jh%()np~#',
                        fields: { NUM: 1 },
                      },
                    },
                    TO: {
                      shadow: { type: 'math_number', id: '\/J6UjY*gRbyX4o$5K|bq', fields: { NUM: 10 } },
                      block: {
                        type: 'variables_get',
                        id: ',[1:K+c#8ZmTm%5UdN%r',
                        fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                      },
                    },
                    BY: { shadow: { type: 'math_number', id: '2*j9=]w(C_E1nt}J(6^I', fields: { NUM: 1 } } },
                    DO: {
                      block: {
                        type: 'controls_for',
                        id: ']cPhdZUd@w$CNBJOktme',
                        fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                        inputs: {
                          FROM: {
                            shadow: {
                              type: 'math_number',
                              id: 'kc:WB7Er84oH^wT49nsC',
                              fields: { NUM: 1 },
                            },
                          },
                          TO: {
                            shadow: {
                              type: 'math_number',
                              id: '\/J6UjY*gRbyX4o$5K|bq',
                              fields: { NUM: 10 },
                            },
                            block: {
                              type: 'variables_get',
                              id: 'c8-hxs.TgCd2chTd9~Y2',
                              fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                            },
                          },
                          BY: {
                            shadow: {
                              type: 'math_number',
                              id: 'U.!9@D6.8fLL4z@5-|jw',
                              fields: { NUM: 1 },
                            },
                          },
                          DO: {
                            block: {
                              type: 'variables_set',
                              id: 'Hb-_KhgcDd3h%!.XUv4\/',
                              fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                              inputs: {
                                VALUE: {
                                  block: {
                                    type: 'lists_getIndex',
                                    id: '*:ybw$T[b9Xk9EI?xHe2',
                                    extraState: '<mutation statement="false" at="true"><\/mutation>',
                                    fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                    inputs: {
                                      VALUE: {
                                        block: {
                                          type: 'variables_get',
                                          id: '[r0eAC~.7Scm(wJ=+,gv',
                                          fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                        },
                                      },
                                      AT: {
                                        block: {
                                          type: 'variables_get',
                                          id: 'r(Y1=(}1kg$7w|%ymf?]',
                                          fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              next: {
                                block: {
                                  type: 'controls_if',
                                  id: 's#`]a(]y:h=IOw6|#l98',
                                  inputs: {
                                    IF0: {
                                      block: {
                                        type: 'logic_compare',
                                        id: '4l+NT,E$rTt:f2#VcUp_',
                                        fields: { OP: 'EQ' },
                                        inputs: {
                                          A: {
                                            block: {
                                              type: 'lists_getIndex',
                                              id: 'd54=.sU!B=NiG2!!^Bo.',
                                              extraState: '<mutation statement="false" at="true"><\/mutation>',
                                              fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                              inputs: {
                                                VALUE: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: 'Q%hL*it??Li{O4.%g)nq',
                                                    fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                                                  },
                                                },
                                                AT: {
                                                  block: {
                                                    type: 'variables_get',
                                                    id: ',=I$19;*AhR8Xw4I_jkz',
                                                    fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          B: {
                                            block: {
                                              type: 'math_arithmetic',
                                              id: 'Mf[$;.Qvq;(qHTen=H17',
                                              fields: { OP: 'MULTIPLY' },
                                              inputs: {
                                                A: {
                                                  shadow: {
                                                    type: 'math_number',
                                                    id: 'tN]Y*%dB=],pX0f]|V@#',
                                                    fields: { NUM: 1 },
                                                  },
                                                  block: {
                                                    type: 'variables_get',
                                                    id: 'nUdP~IZf;|kr+}?Lz2hE',
                                                    fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                                  },
                                                },
                                                B: {
                                                  shadow: {
                                                    type: 'math_number',
                                                    id: '|t*}\/tPb`XtHUv%1xc{5',
                                                    fields: { NUM: 1 },
                                                  },
                                                  block: {
                                                    type: 'variables_get',
                                                    id: '|~6|yQoEd=HDB.fwW=t[',
                                                    fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    DO0: {
                                      block: {
                                        type: 'variables_set',
                                        id: 'b^U8l,]BO3q2u5Uq?i@|',
                                        fields: { VAR: { id: 'H=+iZY.f~;ugq.w}a1UI' } },
                                        inputs: {
                                          VALUE: {
                                            block: {
                                              type: 'variables_get',
                                              id: 'nG}PC13Ba8#xPY%b5_6.',
                                              fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                            },
                                          },
                                        },
                                        next: {
                                          block: {
                                            type: 'variables_set',
                                            id: 'T^xI02jbm|2v1NII%6f~',
                                            fields: { VAR: { id: '@O}4b2HfI6`9Q07K%*\/}' } },
                                            inputs: {
                                              VALUE: {
                                                block: {
                                                  type: 'variables_get',
                                                  id: '1t=|YGP!gz%2JHQ586fc',
                                                  fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: 'variables_set',
                      id: 'dkG7GE.}5EwdE[(4t~Uj',
                      fields: { VAR: { id: '`#|~ObE!JHrVeZ4iRU`P' } },
                      inputs: {
                        VALUE: {
                          block: {
                            type: 'variables_get',
                            id: 'T}_a2iUi5:4)@qv5dJeO',
                            fields: { VAR: { id: 'H=+iZY.f~;ugq.w}a1UI' } },
                          },
                        },
                      },
                      next: {
                        block: {
                          type: 'variables_set',
                          id: 'v4eT].J@(.Up!=CvBnjP',
                          fields: { VAR: { id: 'Dc+VCVs;^34oL(Gct*_Y' } },
                          inputs: {
                            VALUE: {
                              block: {
                                type: 'variables_get',
                                id: '9_ll4j6~.(ozx4NBP,,[',
                                fields: { VAR: { id: '@O}4b2HfI6`9Q07K%*\/}' } },
                              },
                            },
                          },
                          next: {
                            block: {
                              type: 'controls_if',
                              id: 'YGHb}iw0C\/`@I%Of~7I$',
                              extraState: { elseIfCount: 3 },
                              inputs: {
                                IF0: {
                                  block: {
                                    type: 'logic_compare',
                                    id: '(U*{6(66ojMQtT*M4WC6',
                                    fields: { OP: 'EQ' },
                                    inputs: {
                                      A: {
                                        block: {
                                          type: 'variables_get',
                                          id: 'o8)88kAJMw$-A@Tj\/%`P',
                                          fields: { VAR: { id: '{JR$yN^Vw{pb0=k{uu24' } },
                                        },
                                      },
                                      B: {
                                        block: {
                                          type: 'text',
                                          id: 'B)LEJ@+ak\/VO#Y:Yn]p*',
                                          fields: { TEXT: 'down' },
                                        },
                                      },
                                    },
                                  },
                                },
                                DO0: {
                                  block: {
                                    type: 'variables_set',
                                    id: '%Z:X;.h0G^E^Wd_O!AS-',
                                    fields: { VAR: { id: 'Dc+VCVs;^34oL(Gct*_Y' } },
                                    inputs: {
                                      VALUE: {
                                        block: {
                                          type: 'math_arithmetic',
                                          id: ';]:w[3NivhH$BIw!M^5B',
                                          fields: { OP: 'MINUS' },
                                          inputs: {
                                            A: {
                                              shadow: {
                                                type: 'math_number',
                                                id: '.ORJq.*z1?]@HByRtYwZ',
                                                fields: { NUM: 1 },
                                              },
                                              block: {
                                                type: 'variables_get',
                                                id: '~}l$~4RC[4Io9n.hAg?Y',
                                                fields: { VAR: { id: '@O}4b2HfI6`9Q07K%*\/}' } },
                                              },
                                            },
                                            B: {
                                              shadow: {
                                                type: 'math_number',
                                                id: 'V[Rh-Cg~z,NEof[(*ij6',
                                                fields: { NUM: 1 },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                IF1: {
                                  block: {
                                    type: 'logic_compare',
                                    id: 'omD7tYrtg!\/%5T}EF*|x',
                                    fields: { OP: 'EQ' },
                                    inputs: {
                                      A: {
                                        block: {
                                          type: 'variables_get',
                                          id: 'AJEKr$%[!d7rY#2}8\/Fi',
                                          fields: { VAR: { id: '{JR$yN^Vw{pb0=k{uu24' } },
                                        },
                                      },
                                      B: {
                                        block: {
                                          type: 'text',
                                          id: 'sr\/)P}MAm]F1|\/^Z!za]',
                                          fields: { TEXT: 'up' },
                                        },
                                      },
                                    },
                                  },
                                },
                                DO1: {
                                  block: {
                                    type: 'variables_set',
                                    id: '#lAmmd_}:B?UD}L3m%`P',
                                    fields: { VAR: { id: 'Dc+VCVs;^34oL(Gct*_Y' } },
                                    inputs: {
                                      VALUE: {
                                        block: {
                                          type: 'math_arithmetic',
                                          id: 'a1|Di[Y@y0NA:TPATit0',
                                          fields: { OP: 'ADD' },
                                          inputs: {
                                            A: {
                                              shadow: {
                                                type: 'math_number',
                                                id: '=;NcNc9UhLhw4Z]]XQne',
                                                fields: { NUM: 1 },
                                              },
                                              block: {
                                                type: 'variables_get',
                                                id: 'Br,Z-(mgmTV[@i|5[ijW',
                                                fields: { VAR: { id: '@O}4b2HfI6`9Q07K%*\/}' } },
                                              },
                                            },
                                            B: {
                                              shadow: {
                                                type: 'math_number',
                                                id: 'pe+:vqITG\/dE?9jNgr@l',
                                                fields: { NUM: 1 },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                IF2: {
                                  block: {
                                    type: 'logic_compare',
                                    id: '{({D3sHIOh$}B+C:~QT.',
                                    fields: { OP: 'EQ' },
                                    inputs: {
                                      A: {
                                        block: {
                                          type: 'variables_get',
                                          id: 'k;-c$uYf(7{,V:2[Kz$,',
                                          fields: { VAR: { id: '{JR$yN^Vw{pb0=k{uu24' } },
                                        },
                                      },
                                      B: {
                                        block: {
                                          type: 'text',
                                          id: 'o(,V]x2yuhZ7(x\/5wPFt',
                                          fields: { TEXT: 'right' },
                                        },
                                      },
                                    },
                                  },
                                },
                                DO2: {
                                  block: {
                                    type: 'variables_set',
                                    id: 'U[Kpypo|X9d0TFzw[=n_',
                                    fields: { VAR: { id: '`#|~ObE!JHrVeZ4iRU`P' } },
                                    inputs: {
                                      VALUE: {
                                        block: {
                                          type: 'math_arithmetic',
                                          id: ';yW}.~$+;CG9^LG?s6Kv',
                                          fields: { OP: 'MINUS' },
                                          inputs: {
                                            A: {
                                              shadow: {
                                                type: 'math_number',
                                                id: '-=sJF4c-x]V~CoRi;5a2',
                                                fields: { NUM: 1 },
                                              },
                                              block: {
                                                type: 'variables_get',
                                                id: '1AX4[yJ8]jd6@)!vJGlk',
                                                fields: { VAR: { id: 'H=+iZY.f~;ugq.w}a1UI' } },
                                              },
                                            },
                                            B: {
                                              shadow: {
                                                type: 'math_number',
                                                id: 'd!I(%hoaJGX\/H{oXbdB8',
                                                fields: { NUM: 1 },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                IF3: {
                                  block: {
                                    type: 'logic_compare',
                                    id: 'H?rk\/D{hoZkak(OHgo0^',
                                    fields: { OP: 'EQ' },
                                    inputs: {
                                      A: {
                                        block: {
                                          type: 'variables_get',
                                          id: '7TpuL)*0)(lYuU1b[Mo7',
                                          fields: { VAR: { id: '{JR$yN^Vw{pb0=k{uu24' } },
                                        },
                                      },
                                      B: {
                                        block: {
                                          type: 'text',
                                          id: '=HI![^g,:kHpJ^7m0kd9',
                                          fields: { TEXT: 'left' },
                                        },
                                      },
                                    },
                                  },
                                },
                                DO3: {
                                  block: {
                                    type: 'variables_set',
                                    id: 'Pcv|PQh2e1|W_6j).oA[',
                                    fields: { VAR: { id: '`#|~ObE!JHrVeZ4iRU`P' } },
                                    inputs: {
                                      VALUE: {
                                        block: {
                                          type: 'math_arithmetic',
                                          id: 'VMkH0LwG}enPmJCer!84',
                                          fields: { OP: 'ADD' },
                                          inputs: {
                                            A: {
                                              shadow: {
                                                type: 'math_number',
                                                id: '#,2l[qs``J\/:rF!VQ#al',
                                                fields: { NUM: 1 },
                                              },
                                              block: {
                                                type: 'variables_get',
                                                id: 'K2o3vp4ePQNr,0-^[p(*',
                                                fields: { VAR: { id: 'H=+iZY.f~;ugq.w}a1UI' } },
                                              },
                                            },
                                            B: {
                                              shadow: {
                                                type: 'math_number',
                                                id: 'mEYhmjI3ogwtJ_*K5.{H',
                                                fields: { NUM: 1 },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              next: {
                                block: {
                                  type: 'text_print',
                                  id: '@}okOx\/O}-y_[);L3K7}',
                                  enabled: false,
                                  inputs: {
                                    TEXT: {
                                      shadow: {
                                        type: 'text',
                                        id: '_4T[dV9v6VsQi(`Ri?G1',
                                        fields: { TEXT: 'if can move block to new position' },
                                      },
                                    },
                                  },
                                  next: {
                                    block: {
                                      type: 'controls_if',
                                      id: '5k6m40V{2V:vhoMjbq9a',
                                      inputs: {
                                        IF0: {
                                          block: {
                                            type: 'lists_getIndex',
                                            id: '09;wC6s5XYAs=dHCZEen',
                                            extraState: '<mutation statement="false" at="true"><\/mutation>',
                                            fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                            inputs: {
                                              VALUE: {
                                                block: {
                                                  type: 'variables_get',
                                                  id: 'RbH73V#E09CVTy),u{_-',
                                                  fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                                },
                                              },
                                              AT: {
                                                block: {
                                                  type: 'variables_get',
                                                  id: 'JNz@=Pd_#!sNsHobfxak',
                                                  fields: { VAR: { id: 'Dc+VCVs;^34oL(Gct*_Y' } },
                                                },
                                              },
                                            },
                                          },
                                        },
                                        DO0: {
                                          block: {
                                            type: 'variables_set',
                                            id: 'NR++k#}}n5RjYSY=vt=b',
                                            fields: { VAR: { id: 'ofcdeDhcQGnZw:1$:ANU' } },
                                            inputs: {
                                              VALUE: {
                                                block: {
                                                  type: 'lists_getIndex',
                                                  id: '3k:@|c{K~M7#@c%Nkb9r',
                                                  extraState: '<mutation statement="false" at="true"><\/mutation>',
                                                  fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                                  inputs: {
                                                    VALUE: {
                                                      block: {
                                                        type: 'variables_get',
                                                        id: '(RF,_T(=BIuw|W=y#8]x',
                                                        fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                                      },
                                                    },
                                                    AT: {
                                                      block: {
                                                        type: 'variables_get',
                                                        id: 'FVo?zH+Be6i2]pCy8)Z3',
                                                        fields: { VAR: { id: 'Dc+VCVs;^34oL(Gct*_Y' } },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            next: {
                                              block: {
                                                type: 'variables_set',
                                                id: 'Ot6C(_qa\/oT:J^A#O_Z1',
                                                fields: { VAR: { id: 'C]NQuM37]+zIo_,{8r[%' } },
                                                inputs: {
                                                  VALUE: {
                                                    block: {
                                                      type: 'lists_getIndex',
                                                      id: 'UF3ljUimSn;27?-}{a9S',
                                                      extraState: '<mutation statement="false" at="true"><\/mutation>',
                                                      fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                                      inputs: {
                                                        VALUE: {
                                                          block: {
                                                            type: 'variables_get',
                                                            id: 'BIsC$;3J$3o_jEQ#2}0?',
                                                            fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                                          },
                                                        },
                                                        AT: {
                                                          block: {
                                                            type: 'variables_get',
                                                            id: ')5@k!hO_$pLG8gzA5,_P',
                                                            fields: { VAR: { id: '@O}4b2HfI6`9Q07K%*\/}' } },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                next: {
                                                  block: {
                                                    type: 'controls_if',
                                                    id: '4X\/)I9?\/%s3Avr#zsF|(',
                                                    inputs: {
                                                      IF0: {
                                                        block: {
                                                          type: 'lists_getIndex',
                                                          id: 'pm?B2b3-#a#kST}l1^n^',
                                                          extraState: '<mutation statement="false" at="true"><\/mutation>',
                                                          fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                                          inputs: {
                                                            VALUE: {
                                                              block: {
                                                                type: 'variables_get',
                                                                id: 'JX4Dr))`EsRjj}cQh!g5',
                                                                fields: { VAR: { id: 'ofcdeDhcQGnZw:1$:ANU' } },
                                                              },
                                                            },
                                                            AT: {
                                                              block: {
                                                                type: 'variables_get',
                                                                id: 'z:}[t^|OOV%X`js[28=5',
                                                                fields: { VAR: { id: '`#|~ObE!JHrVeZ4iRU`P' } },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                      DO0: {
                                                        block: {
                                                          type: 'variables_set',
                                                          id: 'x!3iekL6hW{=h^S_Ko]$',
                                                          fields: { VAR: { id: 'pQ6E[A95[|,5NrqlBzZz' } },
                                                          inputs: {
                                                            VALUE: {
                                                              block: {
                                                                type: 'lists_getIndex',
                                                                id: ')^M.=i6Yh:*F45sbv.Gl',
                                                                extraState: '<mutation statement="false" at="true"><\/mutation>',
                                                                fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                                                inputs: {
                                                                  VALUE: {
                                                                    block: {
                                                                      type: 'variables_get',
                                                                      id: ']@`oMlL4c-)tV0G%#4II',
                                                                      fields: { VAR: { id: 'ofcdeDhcQGnZw:1$:ANU' } },
                                                                    },
                                                                  },
                                                                  AT: {
                                                                    block: {
                                                                      type: 'variables_get',
                                                                      id: 'hJh)]CnO;cwnndWBL8UY',
                                                                      fields: { VAR: { id: '`#|~ObE!JHrVeZ4iRU`P' } },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                          next: {
                                                            block: {
                                                              type: 'variables_set',
                                                              id: 'PSyHz83Z!|ZqT|%r,#Q+',
                                                              fields: { VAR: { id: 'IlHu%)$@1c{Ll!\/\/kUeC' } },
                                                              inputs: {
                                                                VALUE: {
                                                                  block: {
                                                                    type: 'lists_getIndex',
                                                                    id: '=T4W!E^|@vdrmElnwD%k',
                                                                    extraState: '<mutation statement="false" at="true"><\/mutation>',
                                                                    fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                                                    inputs: {
                                                                      VALUE: {
                                                                        block: {
                                                                          type: 'variables_get',
                                                                          id: 'pi%Uc=1odN9#|Mt-).a7',
                                                                          fields: { VAR: { id: 'C]NQuM37]+zIo_,{8r[%' } },
                                                                        },
                                                                      },
                                                                      AT: {
                                                                        block: {
                                                                          type: 'variables_get',
                                                                          id: 'E#$:5~)xU?|XRXXuAm6$',
                                                                          fields: { VAR: { id: 'H=+iZY.f~;ugq.w}a1UI' } },
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              next: {
                                                                block: {
                                                                  type: 'lists_setIndex',
                                                                  id: 'zot9k41Kj#21#9IZQ~`W',
                                                                  extraState: '<mutation at="true"><\/mutation>',
                                                                  fields: { MODE: 'SET', WHERE: 'FROM_START' },
                                                                  inputs: {
                                                                    LIST: {
                                                                      block: {
                                                                        type: 'variables_get',
                                                                        id: 'XeV^Fcr.;kH9cEed|uLu',
                                                                        fields: { VAR: { id: 'C]NQuM37]+zIo_,{8r[%' } },
                                                                      },
                                                                    },
                                                                    AT: {
                                                                      block: {
                                                                        type: 'variables_get',
                                                                        id: 'c@j.\/lE74_gHZsS3[64Z',
                                                                        fields: { VAR: { id: 'H=+iZY.f~;ugq.w}a1UI' } },
                                                                      },
                                                                    },
                                                                    TO: {
                                                                      block: {
                                                                        type: 'variables_get',
                                                                        id: '[#~U\/q=@g;O9;jhMYI8X',
                                                                        fields: { VAR: { id: 'pQ6E[A95[|,5NrqlBzZz' } },
                                                                      },
                                                                    },
                                                                  },
                                                                  next: {
                                                                    block: {
                                                                      type: 'lists_setIndex',
                                                                      id: '9Rt.IcT4`S3D+q5bx~a{',
                                                                      extraState: '<mutation at="true"><\/mutation>',
                                                                      fields: {
                                                                        MODE: 'SET',
                                                                        WHERE: 'FROM_START',
                                                                      },
                                                                      inputs: {
                                                                        LIST: {
                                                                          block: {
                                                                            type: 'variables_get',
                                                                            id: ']zQ{w^ffg_Dgu`M}S-:#',
                                                                            fields: { VAR: { id: 'ofcdeDhcQGnZw:1$:ANU' } },
                                                                          },
                                                                        },
                                                                        AT: {
                                                                          block: {
                                                                            type: 'variables_get',
                                                                            id: '=.74?0z?TZ85_(psv+$^',
                                                                            fields: { VAR: { id: '`#|~ObE!JHrVeZ4iRU`P' } },
                                                                          },
                                                                        },
                                                                        TO: {
                                                                          block: {
                                                                            type: 'variables_get',
                                                                            id: 'fOCLj^n_|~IU+5,*@cBi',
                                                                            fields: { VAR: { id: 'IlHu%)$@1c{Ll!\/\/kUeC' } },
                                                                          },
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, {
      name: 'presses',
      id: 'iz$Tq($zc`@meSeT|IAF',
    }, { name: 'ddd', id: 'h#)@FWoA4^tHcFZM5Gl0' }, {
      name: 'istouch',
      id: '0*Y;vSg$+l.$](h)NqUg',
    }, { name: 'i', id: 'IlHu%)$@1c{Ll!\/\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, {
      name: 'dy',
      id: 'tL]gH\/RgkyzW})oL2Q8h',
    }, { name: 'pressure', id: 'rzU#N_N[#L.5Ex-J{cjc' }, {
      name: 'SPEED',
      id: 'V^)X29B$\/zH~5@~EHeQ+',
    }, { name: 'bullets', id: 'Ikt@YU{LJ;z{72MZMduV' }, {
      name: 'StartPosX',
      id: 'IJ7]gk-LGS!XJjIjc5ie',
    }, { name: 'StartPosY', id: 'HrYu!x=_GCNfv-KXil4|' }, {
      name: 'width',
      id: '1y?LmN9o\/~Qp`S*|{DH:',
    }, { name: 'height', id: '5=26Gq-40{hdQ@p.!EK`' }, {
      name: 'bullet',
      id: 'ptn8UybJM48DSX}-Hh0G',
    }, { name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'startX',
      id: 'y^.~f-*hinMPmYApRQ#6',
    }, { name: 'startY', id: 'MAEs]3BFw99dpzi+@7e+' }, {
      name: 'targetX',
      id: 'USmkA#!6OOi2srMLINeV',
    }, { name: 'targetY', id: 'z_p0dER?xLmZQ9In__^K' }, {
      name: 'angle',
      id: 'h6$rJt^$f99@WKbR=Tnb',
    }, { name: 'newBullet', id: '6G3v3,Xs1%!t||~8v@um' }, {
      name: 'image',
      id: '%m+~Mk2-i;D(WWLR-sFo',
    }, { name: 'gridYCount', id: 'gWM+ATx0Hj]T9g245|Ve' }, {
      name: 'gridXCount',
      id: 'oU~_W`%vwMHIc:w|JKJ5',
    }, { name: 'y_list', id: 'F0zzH{*mBn~JUcOc{PGn' }, {
      name: 'grid',
      id: 'RMDCPTS))lD%h16hbnq@',
    }, { name: 'pieceDrawSize', id: '_meM90BYI(TFPllY^+u[' }, {
      name: 'pieceSize',
      id: '9=n.6Z.u;mpi\/C`,yQW$',
    }, { name: 'begin_y', id: 'yhmEH)=rTPnUu1CrCyRc' }, {
      name: 'begin_x',
      id: '}?Usv|8TYx+HESB76w2*',
    }, { name: 'end_y', id: '9W{6Zy3al!a!bvg+bm|s' }, {
      name: 'end_x',
      id: 'aw3u=#D0T9:G}6X~2OmW',
    }, { name: 'doingTouch', id: '*U_aAxzSb`{y\/eJB$Wdw' }, {
      name: 'screen_width',
      id: 'cFe)q6W`*;@KA~,3qx;L',
    }, { name: 'direction', id: '{JR$yN^Vw{pb0=k{uu24' }, {
      name: 'emptyX',
      id: 'H=+iZY.f~;ugq.w}a1UI',
    }, { name: 'emptyY', id: '@O}4b2HfI6`9Q07K%*\/}' }, {
      name: 'newEmptyX',
      id: '`#|~ObE!JHrVeZ4iRU`P',
    }, { name: 'newEmptyY', id: 'Dc+VCVs;^34oL(Gct*_Y' }, {
      name: 'new_empty_y_list',
      id: 'ofcdeDhcQGnZw:1$:ANU',
    }, { name: 'empty_y_list', id: 'C]NQuM37]+zIo_,{8r[%' }, {
      name: 'j',
      id: 'pQ6E[A95[|,5NrqlBzZz',
    }, { name: 'moveNumber', id: 'cDm|,jC^q.nnIbkM3Is:' }, { name: 'roll', id: 'Db5aKrN@q~72i1hQ2Qn8' }],
  }
  const fifteenMoveCode = `function move(direction)
  for y = 1, gridYCount do
    for x = 1, gridXCount do
      y_list = grid[y]
      if y_list[x] == gridXCount * gridYCount then
        emptyX = x
        emptyY = y
      end
    end
  end
  newEmptyX = emptyX
  newEmptyY = emptyY
  if direction == 'down' then
    newEmptyY = emptyY - 1
  elseif direction == 'up' then
    newEmptyY = emptyY + 1
  elseif direction == 'right' then
    newEmptyX = emptyX - 1
  elseif direction == 'left' then
    newEmptyX = emptyX + 1
  end
  if grid[newEmptyY] then
    new_empty_y_list = grid[newEmptyY]
    empty_y_list = grid[emptyY]
    if new_empty_y_list[newEmptyX] then
      j = new_empty_y_list[newEmptyX]
      i = empty_y_list[emptyX]
      empty_y_list[emptyX] = j
      new_empty_y_list[newEmptyX] = i
    end
  end
end`

  const fifteenKeypressBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'love_keypressed',
        id: ')L=.!hLk?WkJ\/zFkO5OV',
        x: 113,
        y: 4213,
        fields: {
          key: { id: 'T#M8CDyhjr:bBJ[TnWHu' },
          scancode: { id: '3F9~uc~*ZPulEsheP]FZ' },
          isrepeat: { id: '3+2NTOFE6OQ4*=D4q:Vi' },
        },
        inputs: {
          input: {
            block: {
              type: 'controls_if',
              id: 'G|Ugr1a}4Q7@6P(]eo9k',
              extraState: { elseIfCount: 3 },
              inputs: {
                IF0: {
                  block: {
                    type: 'logic_compare',
                    id: '\/G.PJ@k_X:CSgarqBq(9',
                    fields: { OP: 'EQ' },
                    inputs: {
                      A: {
                        block: {
                          type: 'variables_get',
                          id: '#x%6V2|fUJ.{4R3VapgU',
                          fields: { VAR: { id: 'T#M8CDyhjr:bBJ[TnWHu' } },
                        },
                      },
                      B: { block: { type: 'text', id: '}U_1*@GoYG1N{`.`Bi+f', fields: { TEXT: 'down' } } },
                    },
                  },
                },
                DO0: {
                  block: {
                    type: 'procedures_callnoreturn',
                    id: 'nqvs%;h~ulT6OWigV?!U',
                    extraState: { name: 'move', params: ['direction'] },
                    inputs: {
                      ARG0: {
                        block: {
                          type: 'text',
                          id: 'C@,~pn2soL\/vQ02KP{s6',
                          fields: { TEXT: 'down' },
                        },
                      },
                    },
                  },
                },
                IF1: {
                  block: {
                    type: 'logic_compare',
                    id: 'tvGuT%.nXHFW,tj3a(mg',
                    fields: { OP: 'EQ' },
                    inputs: {
                      A: {
                        block: {
                          type: 'variables_get',
                          id: 'fkpbR]fKl!9}r:jR$3O)',
                          fields: { VAR: { id: 'T#M8CDyhjr:bBJ[TnWHu' } },
                        },
                      },
                      B: { block: { type: 'text', id: 'Y;U8w%+AS*OM]RCpzl]?', fields: { TEXT: 'up' } } },
                    },
                  },
                },
                DO1: {
                  block: {
                    type: 'procedures_callnoreturn',
                    id: '6r*E2!HSWQ;YBT^Li,\/~',
                    extraState: { name: 'move', params: ['direction'] },
                    inputs: {
                      ARG0: {
                        block: {
                          type: 'text',
                          id: 'EbaW}NnCn6~j8MX*yZcA',
                          fields: { TEXT: 'up' },
                        },
                      },
                    },
                  },
                },
                IF2: {
                  block: {
                    type: 'logic_compare',
                    id: 'CwM$+6NFJey!}K%+($Hp',
                    fields: { OP: 'EQ' },
                    inputs: {
                      A: {
                        block: {
                          type: 'variables_get',
                          id: 'kR#%S|mj3$njmK,P*8pZ',
                          fields: { VAR: { id: 'T#M8CDyhjr:bBJ[TnWHu' } },
                        },
                      },
                      B: { block: { type: 'text', id: 'pmN$Jc7eY6O?l]@5ied^', fields: { TEXT: 'right' } } },
                    },
                  },
                },
                DO2: {
                  block: {
                    type: 'procedures_callnoreturn',
                    id: 'I7Gq(\/-h3ytHS|!JvhHa',
                    extraState: { name: 'move', params: ['direction'] },
                    inputs: {
                      ARG0: {
                        block: {
                          type: 'text',
                          id: '(G;bu*o%}R!H03mchego',
                          fields: { TEXT: 'right' },
                        },
                      },
                    },
                  },
                },
                IF3: {
                  block: {
                    type: 'logic_compare',
                    id: '),OXEf-U:GfgTBY(Jlm1',
                    fields: { OP: 'EQ' },
                    inputs: {
                      A: {
                        block: {
                          type: 'variables_get',
                          id: '2Ax~EF}u(;;C{6%KzjM\/',
                          fields: { VAR: { id: 'T#M8CDyhjr:bBJ[TnWHu' } },
                        },
                      },
                      B: { block: { type: 'text', id: 'TD5Od8ziHg:Tn~ZeaTA8', fields: { TEXT: 'left' } } },
                    },
                  },
                },
                DO3: {
                  block: {
                    type: 'procedures_callnoreturn',
                    id: '0%;u#DK4+,:8wy\/k=Yc(',
                    extraState: { name: 'move', params: ['direction'] },
                    inputs: {
                      ARG0: {
                        block: {
                          type: 'text',
                          id: 's0tJ1R.fd=8vdWDi33R!',
                          fields: { TEXT: 'left' },
                        },
                      },
                    },
                  },
                },
              },
              next: {
                block: {
                  type: 'controls_if',
                  id: 'f]0_yPHy8CoY_k%+f7Hh',
                  inputs: {
                    IF0: {
                      block: {
                        type: 'procedures_callreturn',
                        id: 'k`O~x|gje5G(5`C*`rQF',
                        extraState: { name: 'is game complete' },
                      },
                    },
                    DO0: {
                      block: {
                        type: 'procedures_callnoreturn',
                        id: ',=[t5uo-ZsdPHb0db,tM',
                        extraState: { name: 'reset game' },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'procedures_defnoreturn',
        id: '3rAgMa_W$I}c,EBG:djq',
        x: 463,
        y: 4538,
        extraState: { params: [{ name: 'direction', id: '{JR$yN^Vw{pb0=k{uu24' }] },
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'move' },
      }, {
        type: 'procedures_defreturn',
        id: 'mR:M%su=#tJ]yyIV2pFH',
        x: 463,
        y: 4613,
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'is game complete' },
      }, {
        type: 'procedures_defnoreturn',
        id: 'Gk7V}~x[a}R(O2E1cNi9',
        x: 463,
        y: 4463,
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'reset game' },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, {
      name: 'presses',
      id: 'iz$Tq($zc`@meSeT|IAF',
    }, { name: 'ddd', id: 'h#)@FWoA4^tHcFZM5Gl0' }, {
      name: 'istouch',
      id: '0*Y;vSg$+l.$](h)NqUg',
    }, { name: 'i', id: 'IlHu%)$@1c{Ll!\/\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, {
      name: 'dy',
      id: 'tL]gH\/RgkyzW})oL2Q8h',
    }, { name: 'pressure', id: 'rzU#N_N[#L.5Ex-J{cjc' }, {
      name: 'SPEED',
      id: 'V^)X29B$\/zH~5@~EHeQ+',
    }, { name: 'bullets', id: 'Ikt@YU{LJ;z{72MZMduV' }, {
      name: 'StartPosX',
      id: 'IJ7]gk-LGS!XJjIjc5ie',
    }, { name: 'StartPosY', id: 'HrYu!x=_GCNfv-KXil4|' }, {
      name: 'width',
      id: '1y?LmN9o\/~Qp`S*|{DH:',
    }, { name: 'height', id: '5=26Gq-40{hdQ@p.!EK`' }, {
      name: 'bullet',
      id: 'ptn8UybJM48DSX}-Hh0G',
    }, { name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'startX',
      id: 'y^.~f-*hinMPmYApRQ#6',
    }, { name: 'startY', id: 'MAEs]3BFw99dpzi+@7e+' }, {
      name: 'targetX',
      id: 'USmkA#!6OOi2srMLINeV',
    }, { name: 'targetY', id: 'z_p0dER?xLmZQ9In__^K' }, {
      name: 'angle',
      id: 'h6$rJt^$f99@WKbR=Tnb',
    }, { name: 'newBullet', id: '6G3v3,Xs1%!t||~8v@um' }, {
      name: 'image',
      id: '%m+~Mk2-i;D(WWLR-sFo',
    }, { name: 'gridYCount', id: 'gWM+ATx0Hj]T9g245|Ve' }, {
      name: 'gridXCount',
      id: 'oU~_W`%vwMHIc:w|JKJ5',
    }, { name: 'y_list', id: 'F0zzH{*mBn~JUcOc{PGn' }, {
      name: 'grid',
      id: 'RMDCPTS))lD%h16hbnq@',
    }, { name: 'pieceDrawSize', id: '_meM90BYI(TFPllY^+u[' }, {
      name: 'pieceSize',
      id: '9=n.6Z.u;mpi\/C`,yQW$',
    }, { name: 'begin_y', id: 'yhmEH)=rTPnUu1CrCyRc' }, {
      name: 'begin_x',
      id: '}?Usv|8TYx+HESB76w2*',
    }, { name: 'end_y', id: '9W{6Zy3al!a!bvg+bm|s' }, {
      name: 'end_x',
      id: 'aw3u=#D0T9:G}6X~2OmW',
    }, { name: 'doingTouch', id: '*U_aAxzSb`{y\/eJB$Wdw' }, {
      name: 'screen_width',
      id: 'cFe)q6W`*;@KA~,3qx;L',
    }, { name: 'direction', id: '{JR$yN^Vw{pb0=k{uu24' }, {
      name: 'emptyX',
      id: 'H=+iZY.f~;ugq.w}a1UI',
    }, { name: 'emptyY', id: '@O}4b2HfI6`9Q07K%*\/}' }, {
      name: 'newEmptyX',
      id: '`#|~ObE!JHrVeZ4iRU`P',
    }, { name: 'newEmptyY', id: 'Dc+VCVs;^34oL(Gct*_Y' }, {
      name: 'new_empty_y_list',
      id: 'ofcdeDhcQGnZw:1$:ANU',
    }, { name: 'empty_y_list', id: 'C]NQuM37]+zIo_,{8r[%' }, {
      name: 'j',
      id: 'pQ6E[A95[|,5NrqlBzZz',
    }, { name: 'moveNumber', id: 'cDm|,jC^q.nnIbkM3Is:' }, {
      name: 'roll',
      id: 'Db5aKrN@q~72i1hQ2Qn8',
    }, { name: 'key', id: 'T#M8CDyhjr:bBJ[TnWHu' }, {
      name: 'scancode',
      id: '3F9~uc~*ZPulEsheP]FZ',
    }, { name: 'isrepeat', id: '3+2NTOFE6OQ4*=D4q:Vi' }],
  }
  const fifteenKeypressCode = `function love.keypressed( key, scancode, isrepeat )
  if key == 'down' then
    move('down')
  elseif key == 'up' then
    move('up')
  elseif key == 'right' then
    move('right')
  elseif key == 'left' then
    move('left')
  end
  if is_game_complete() then
    reset_game()
  end
end
`

  const fifteenIsCompleteBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'procedures_defreturn',
        id: 'H()w$`0*A[Y:[:U7.$:Y',
        x: 63,
        y: 838,
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'is game complete' },
        inputs: {
          STACK: {
            block: {
              type: 'controls_for',
              id: 'm~`=JiAwXE-R#^(?d0Qo',
              fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
              inputs: {
                FROM: { shadow: { type: 'math_number', id: '0HV)vGPh;?+jR`**8T$.', fields: { NUM: 1 } } },
                TO: {
                  shadow: { type: 'math_number', id: 'OV~qW7jZ.qra{I8i@O`-', fields: { NUM: 10 } },
                  block: {
                    type: 'variables_get',
                    id: 'Y.se8WF,7n~CdyY`}6Ge',
                    fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                  },
                },
                BY: { shadow: { type: 'math_number', id: 'e3wD*FL}3TO6R[*j]lHv', fields: { NUM: 1 } } },
                DO: {
                  block: {
                    type: 'controls_for',
                    id: 'NOwUVMvh`%tku=V!2!5h',
                    fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                    inputs: {
                      FROM: {
                        shadow: {
                          type: 'math_number',
                          id: '!c:k,Zh|nkPs.`\/CEk.[',
                          fields: { NUM: 1 },
                        },
                      },
                      TO: {
                        shadow: {
                          type: 'math_number',
                          id: 'WA~cJlRqwq\/nREF9G$34',
                          fields: { NUM: 10 },
                        },
                        block: {
                          type: 'variables_get',
                          id: 'rtJBSK~VS,}i~iE8v){d',
                          fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                        },
                      },
                      BY: {
                        shadow: {
                          type: 'math_number',
                          id: '59xeqC!s=[~aavnB}Vfq',
                          fields: { NUM: 1 },
                        },
                      },
                      DO: {
                        block: {
                          type: 'variables_set',
                          id: 'K?W~llIg(P3h{72}hpuA',
                          fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                          inputs: {
                            VALUE: {
                              block: {
                                type: 'lists_getIndex',
                                id: '1\/RuKMQJ;(pUX.~7!wsT',
                                extraState: '<mutation statement="false" at="true"><\/mutation>',
                                fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                inputs: {
                                  VALUE: {
                                    block: {
                                      type: 'variables_get',
                                      id: 'BB=kv;qnNcU,)K$-}nAN',
                                      fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                    },
                                  },
                                  AT: {
                                    block: {
                                      type: 'variables_get',
                                      id: '0MPscpK?!H|s:$,?12]Q',
                                      fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          next: {
                            block: {
                              type: 'procedures_ifreturn',
                              id: '|W^hM-Z1`pV+8l5v_U`j',
                              extraState: '<mutation value="1"><\/mutation>',
                              inputs: {
                                CONDITION: {
                                  block: {
                                    type: 'logic_compare',
                                    id: '3N#%G*n8cK]7D]S@^7;V',
                                    fields: { OP: 'NEQ' },
                                    inputs: {
                                      A: {
                                        block: {
                                          type: 'lists_getIndex',
                                          id: 'gzr\/aTB%q19rK`AU;d1K',
                                          extraState: '<mutation statement="false" at="true"><\/mutation>',
                                          fields: { MODE: 'GET', WHERE: 'FROM_START' },
                                          inputs: {
                                            VALUE: {
                                              block: {
                                                type: 'variables_get',
                                                id: 'Nbb=jMAzL.|Ir=ANDv72',
                                                fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                                              },
                                            },
                                            AT: {
                                              block: {
                                                type: 'variables_get',
                                                id: 'Kh.R^_vSl|_C%*6L#4$\/',
                                                fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      B: {
                                        block: {
                                          type: 'procedures_callreturn',
                                          id: 'S(hH!brzinb@[XoEl)tg',
                                          extraState: { name: 'get initial value', params: ['x', 'y'] },
                                          inputs: {
                                            ARG0: {
                                              block: {
                                                type: 'variables_get',
                                                id: ')*CO|K+%dre)1)V.jk~F',
                                                fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                              },
                                            },
                                            ARG1: {
                                              block: {
                                                type: 'variables_get',
                                                id: 'z*_ku0UHhGk{-W^d-yZ:',
                                                fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                VALUE: {
                                  block: {
                                    type: 'logic_boolean',
                                    id: 'ZDlKY?JeyZSUa5}Z.H!_',
                                    fields: { BOOL: 'FALSE' },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          RETURN: { block: { type: 'logic_boolean', id: 'JFeSjE8U~b}Uv[yNb,jw', fields: { BOOL: 'TRUE' } } },
        },
      }, {
        type: 'procedures_defreturn',
        id: 'wQK?:5$EA#QARd1NXO.b',
        x: 62,
        y: 713,
        extraState: {
          params: [{ name: 'x', id: 'X)kXOb(\/nIYa;FY1XeM{' }, {
            name: 'y',
            id: 'u,p.?CSC[MMUV8VzT#EG',
          }],
        },
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'get initial value' },
        inputs: {
          RETURN: {
            block: {
              type: 'math_arithmetic',
              id: 'GR.s];5y4p3!YmAm{1{r',
              fields: { OP: 'ADD' },
              inputs: {
                A: {
                  shadow: { type: 'math_number', id: 'cm;`Y?_7jCAPXR0yXuk$', fields: { NUM: 1 } },
                  block: {
                    type: 'math_arithmetic',
                    id: '{LFIS#\/O)`cA%Bd}|~eS',
                    fields: { OP: 'MULTIPLY' },
                    inputs: {
                      A: {
                        shadow: {
                          type: 'math_number',
                          id: 'cm;`Y?_7jCAPXR0yXuk$',
                          fields: { NUM: 1 },
                        },
                        block: {
                          type: 'math_arithmetic',
                          id: '*..#zQj[PaM6|bn30JYf',
                          fields: { OP: 'MINUS' },
                          inputs: {
                            A: {
                              shadow: {
                                type: 'math_number',
                                id: 'cm;`Y?_7jCAPXR0yXuk$',
                                fields: { NUM: 1 },
                              },
                              block: {
                                type: 'variables_get',
                                id: 'dW~x$nz29Zhu2P)kWo?O',
                                fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                              },
                            },
                            B: {
                              shadow: {
                                type: 'math_number',
                                id: 'o|L7eMJ3K{~D?G%%M0k#',
                                fields: { NUM: 1 },
                              },
                            },
                          },
                        },
                      },
                      B: {
                        shadow: { type: 'math_number', id: 'MI=85)*F=ps1WMJrJOtQ', fields: { NUM: 1 } },
                        block: {
                          type: 'variables_get',
                          id: '%H]K[dPcdf*d_*-uLLaU',
                          fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                        },
                      },
                    },
                  },
                },
                B: {
                  shadow: { type: 'math_number', id: 'MI=85)*F=ps1WMJrJOtQ', fields: { NUM: 1 } },
                  block: {
                    type: 'variables_get',
                    id: 'ZFjD,@r72vRV%^uIfVG=',
                    fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, {
      name: 'presses',
      id: 'iz$Tq($zc`@meSeT|IAF',
    }, { name: 'ddd', id: 'h#)@FWoA4^tHcFZM5Gl0' }, {
      name: 'istouch',
      id: '0*Y;vSg$+l.$](h)NqUg',
    }, { name: 'i', id: 'IlHu%)$@1c{Ll!\/\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, {
      name: 'dy',
      id: 'tL]gH\/RgkyzW})oL2Q8h',
    }, { name: 'pressure', id: 'rzU#N_N[#L.5Ex-J{cjc' }, {
      name: 'SPEED',
      id: 'V^)X29B$\/zH~5@~EHeQ+',
    }, { name: 'bullets', id: 'Ikt@YU{LJ;z{72MZMduV' }, {
      name: 'StartPosX',
      id: 'IJ7]gk-LGS!XJjIjc5ie',
    }, { name: 'StartPosY', id: 'HrYu!x=_GCNfv-KXil4|' }, {
      name: 'width',
      id: '1y?LmN9o\/~Qp`S*|{DH:',
    }, { name: 'height', id: '5=26Gq-40{hdQ@p.!EK`' }, {
      name: 'bullet',
      id: 'ptn8UybJM48DSX}-Hh0G',
    }, { name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'startX',
      id: 'y^.~f-*hinMPmYApRQ#6',
    }, { name: 'startY', id: 'MAEs]3BFw99dpzi+@7e+' }, {
      name: 'targetX',
      id: 'USmkA#!6OOi2srMLINeV',
    }, { name: 'targetY', id: 'z_p0dER?xLmZQ9In__^K' }, {
      name: 'angle',
      id: 'h6$rJt^$f99@WKbR=Tnb',
    }, { name: 'newBullet', id: '6G3v3,Xs1%!t||~8v@um' }, {
      name: 'image',
      id: '%m+~Mk2-i;D(WWLR-sFo',
    }, { name: 'gridYCount', id: 'gWM+ATx0Hj]T9g245|Ve' }, {
      name: 'gridXCount',
      id: 'oU~_W`%vwMHIc:w|JKJ5',
    }, { name: 'y_list', id: 'F0zzH{*mBn~JUcOc{PGn' }, {
      name: 'grid',
      id: 'RMDCPTS))lD%h16hbnq@',
    }, { name: 'pieceDrawSize', id: '_meM90BYI(TFPllY^+u[' }, {
      name: 'pieceSize',
      id: '9=n.6Z.u;mpi\/C`,yQW$',
    }, { name: 'begin_y', id: 'yhmEH)=rTPnUu1CrCyRc' }, {
      name: 'begin_x',
      id: '}?Usv|8TYx+HESB76w2*',
    }, { name: 'end_y', id: '9W{6Zy3al!a!bvg+bm|s' }, {
      name: 'end_x',
      id: 'aw3u=#D0T9:G}6X~2OmW',
    }, { name: 'doingTouch', id: '*U_aAxzSb`{y\/eJB$Wdw' }, {
      name: 'screen_width',
      id: 'cFe)q6W`*;@KA~,3qx;L',
    }, { name: 'direction', id: '{JR$yN^Vw{pb0=k{uu24' }, {
      name: 'emptyX',
      id: 'H=+iZY.f~;ugq.w}a1UI',
    }, { name: 'emptyY', id: '@O}4b2HfI6`9Q07K%*\/}' }, {
      name: 'newEmptyX',
      id: '`#|~ObE!JHrVeZ4iRU`P',
    }, { name: 'newEmptyY', id: 'Dc+VCVs;^34oL(Gct*_Y' }, {
      name: 'new_empty_y_list',
      id: 'ofcdeDhcQGnZw:1$:ANU',
    }, { name: 'empty_y_list', id: 'C]NQuM37]+zIo_,{8r[%' }, {
      name: 'j',
      id: 'pQ6E[A95[|,5NrqlBzZz',
    }, { name: 'moveNumber', id: 'cDm|,jC^q.nnIbkM3Is:' }, {
      name: 'roll',
      id: 'Db5aKrN@q~72i1hQ2Qn8',
    }, { name: 'key', id: 'T#M8CDyhjr:bBJ[TnWHu' }, {
      name: 'scancode',
      id: '3F9~uc~*ZPulEsheP]FZ',
    }, { name: 'isrepeat', id: '3+2NTOFE6OQ4*=D4q:Vi' }],
  }
  const fifteenIsCompleteCode = `function is_game_complete()
  for y = 1, gridYCount do
    for x = 1, gridXCount do
      y_list = grid[y]
      if y_list[x] ~= get_initial_value(x, y) then
        return false
      end
    end
  end
  return true
end
`

  const fifteenShuffleBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'procedures_defnoreturn',
        id: 'uO#z%zH}Svc@w%AhZ3-I',
        x: 112,
        y: 1137,
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'reset game' },
        inputs: {
          STACK: {
            block: {
              type: 'variables_set',
              id: 'biS[jYhwRuvW0_7EqGy%',
              fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
              inputs: {
                VALUE: {
                  block: {
                    type: 'lists_create_with',
                    id: '*6*f)tv]1]Z9lyQ()KTj',
                    extraState: { itemCount: 0 },
                  },
                },
              },
              next: {
                block: {
                  type: 'text_print',
                  id: 'N3[9,W`u\/[N*rdbfV3-e',
                  enabled: false,
                  inputs: {
                    TEXT: {
                      shadow: {
                        type: 'text',
                        id: 'aB%1`9Vk~21Ss_\/cQYkD',
                        fields: { TEXT: 'fill grid with initial values' },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: 'controls_for',
                      id: 'BF0axHFLFE;?zoZ9JMU`',
                      fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                      inputs: {
                        FROM: {
                          shadow: {
                            type: 'math_number',
                            id: 'u`I@0Qsa^u\/TnEr@_8)n',
                            fields: { NUM: 1 },
                          },
                        },
                        TO: {
                          shadow: {
                            type: 'math_number',
                            id: '\/J6UjY*gRbyX4o$5K|bq',
                            fields: { NUM: 10 },
                          },
                          block: {
                            type: 'variables_get',
                            id: '*KQBd2IPvfr;G8JqsZtz',
                            fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                          },
                        },
                        BY: {
                          shadow: {
                            type: 'math_number',
                            id: '9nM|%%c`SU^_^g;^b1Cc',
                            fields: { NUM: 1 },
                          },
                        },
                        DO: {
                          block: {
                            type: 'lists_setIndex',
                            id: 'eRRMb--GaEet)Q$,gZ@g',
                            extraState: '<mutation at="false"><\/mutation>',
                            fields: { MODE: 'INSERT', WHERE: 'LAST' },
                            inputs: {
                              LIST: {
                                block: {
                                  type: 'variables_get',
                                  id: 'EKBpRj*.^8dBt}w9f%W(',
                                  fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                },
                              },
                              TO: {
                                block: {
                                  type: 'lists_create_with',
                                  id: '$l]LhDO)dc?BUp8:8gBN',
                                  extraState: { itemCount: 0 },
                                },
                              },
                            },
                            next: {
                              block: {
                                type: 'controls_for',
                                id: '|#NeMoV=29]9#flM5ZA1',
                                fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                inputs: {
                                  FROM: {
                                    shadow: {
                                      type: 'math_number',
                                      id: '.jm0OM;P96\/f(t)DCOgy',
                                      fields: { NUM: 1 },
                                    },
                                  },
                                  TO: {
                                    shadow: {
                                      type: 'math_number',
                                      id: '\/J6UjY*gRbyX4o$5K|bq',
                                      fields: { NUM: 10 },
                                    },
                                    block: {
                                      type: 'variables_get',
                                      id: '1?)=-;[0,$`%AG@HLKtQ',
                                      fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                    },
                                  },
                                  BY: {
                                    shadow: {
                                      type: 'math_number',
                                      id: 'v1~v$yy_xdI]hJQWgir1',
                                      fields: { NUM: 1 },
                                    },
                                  },
                                  DO: {
                                    block: {
                                      type: 'variables_set',
                                      id: 'u3)}xIe\/t0A0uY$orZGN',
                                      fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                                      inputs: {
                                        VALUE: {
                                          block: {
                                            type: 'lists_getIndex',
                                            id: '`qerb(gs0K[xY!DlH_f;',
                                            extraState: '<mutation statement="false" at="false"><\/mutation>',
                                            fields: { MODE: 'GET', WHERE: 'LAST' },
                                            inputs: {
                                              VALUE: {
                                                block: {
                                                  type: 'variables_get',
                                                  id: 'e*)I7R}4cXLrW-6b,?7q',
                                                  fields: { VAR: { id: 'RMDCPTS))lD%h16hbnq@' } },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      next: {
                                        block: {
                                          type: 'lists_setIndex',
                                          id: '*z^=HGpc.+\/F!t:sAI![',
                                          extraState: '<mutation at="false"><\/mutation>',
                                          fields: { MODE: 'INSERT', WHERE: 'LAST' },
                                          inputs: {
                                            LIST: {
                                              block: {
                                                type: 'variables_get',
                                                id: 'zJz;Rq^e$u#}0TdPw{]%',
                                                fields: { VAR: { id: 'F0zzH{*mBn~JUcOc{PGn' } },
                                              },
                                            },
                                            TO: {
                                              block: {
                                                type: 'procedures_callreturn',
                                                id: '~WfYy%U()bHe4ZNfu`.s',
                                                extraState: { name: 'get initial value', params: ['x', 'y'] },
                                                inputs: {
                                                  ARG0: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'vp7N!!01EQ%8%pJ;3_2a',
                                                      fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                                                    },
                                                  },
                                                  ARG1: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'cnl#Nul1lWKV(D-Sa9Bk',
                                                      fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      next: {
                        block: {
                          type: 'text_print',
                          id: 'r!S?vHo}(3Eh;@E.|wo-',
                          enabled: false,
                          inputs: {
                            TEXT: {
                              shadow: {
                                type: 'text',
                                id: '[%)tieI6|,iS_w5p(3@@',
                                fields: { TEXT: 'move game peaces to random positions' },
                              },
                            },
                          },
                          next: {
                            block: {
                              type: 'controls_whileUntil',
                              id: 'qx|1UGEK[23,8Q+Ym}MJ',
                              fields: { MODE: 'WHILE' },
                              inputs: {
                                BOOL: {
                                  block: {
                                    type: 'procedures_callreturn',
                                    id: 'rg!l,?wdUSx_vNQ4jDM4',
                                    extraState: { name: 'is game complete' },
                                  },
                                },
                                DO: {
                                  block: {
                                    type: 'controls_for',
                                    id: 'C:{(p5n$u$q~Y?:{5An-',
                                    fields: { VAR: { id: 'cDm|,jC^q.nnIbkM3Is:' } },
                                    inputs: {
                                      FROM: {
                                        shadow: {
                                          type: 'math_number',
                                          id: '0\/)Ee!~u)Q!h]5cn?7o5',
                                          fields: { NUM: 1 },
                                        },
                                      },
                                      TO: {
                                        shadow: {
                                          type: 'math_number',
                                          id: '72x8.mPoY]T7,Gz|km;=',
                                          fields: { NUM: 1000 },
                                        },
                                      },
                                      BY: {
                                        shadow: {
                                          type: 'math_number',
                                          id: '?oX)(0y{0^$Mhs#RdOt$',
                                          fields: { NUM: 1 },
                                        },
                                      },
                                      DO: {
                                        block: {
                                          type: 'variables_set',
                                          id: 'd{f-#IE0Vu3N3ObWmtip',
                                          fields: { VAR: { id: 'Db5aKrN@q~72i1hQ2Qn8' } },
                                          inputs: {
                                            VALUE: {
                                              block: {
                                                type: 'math_random',
                                                id: 'SSz]cAE.IaiPM8Jd2?.+',
                                                inputs: {
                                                  min: {
                                                    block: {
                                                      type: 'math_number',
                                                      id: 'oD2Z|5B~sf3;#(\/K*@*}',
                                                      fields: { NUM: 1 },
                                                    },
                                                  },
                                                  max: {
                                                    block: {
                                                      type: 'math_number',
                                                      id: 'etqy;@h%j]XdO@WKEzQu',
                                                      fields: { NUM: 4 },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          next: {
                                            block: {
                                              type: 'controls_if',
                                              id: ';=hj?\/g=Mr.mzov0(6+!',
                                              extraState: { elseIfCount: 3 },
                                              inputs: {
                                                IF0: {
                                                  block: {
                                                    type: 'logic_compare',
                                                    id: '3mLT`?f3{cXd?PdqcOB\/',
                                                    fields: { OP: 'EQ' },
                                                    inputs: {
                                                      A: {
                                                        block: {
                                                          type: 'variables_get',
                                                          id: 'AlKV{HgjF[5H@{23E~v5',
                                                          fields: { VAR: { id: 'Db5aKrN@q~72i1hQ2Qn8' } },
                                                        },
                                                      },
                                                      B: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: 'MpG(v$a(euRh7;;KQws3',
                                                          fields: { NUM: 1 },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                DO0: {
                                                  block: {
                                                    type: 'procedures_callnoreturn',
                                                    id: 'Ztc\/Dql#nqWIIU#s3OHj',
                                                    extraState: { name: 'move', params: ['direction'] },
                                                    inputs: {
                                                      ARG0: {
                                                        block: {
                                                          type: 'text',
                                                          id: '^I#4Zd@(aU^diI).$LgN',
                                                          fields: { TEXT: 'down' },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                IF1: {
                                                  block: {
                                                    type: 'logic_compare',
                                                    id: 'a6qC(FOX`9Elk~V!{_%W',
                                                    fields: { OP: 'EQ' },
                                                    inputs: {
                                                      A: {
                                                        block: {
                                                          type: 'variables_get',
                                                          id: 'Hil{q6R^7GD,OI|5[6pr',
                                                          fields: { VAR: { id: 'Db5aKrN@q~72i1hQ2Qn8' } },
                                                        },
                                                      },
                                                      B: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: '=-Jsg-$4TC2-X`ac3[8D',
                                                          fields: { NUM: 2 },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                DO1: {
                                                  block: {
                                                    type: 'procedures_callnoreturn',
                                                    id: '6l:Y3Q.R=\/vjcbG(ob?N',
                                                    extraState: { name: 'move', params: ['direction'] },
                                                    inputs: {
                                                      ARG0: {
                                                        block: {
                                                          type: 'text',
                                                          id: '4\/-@UUNVa)4H9k^pX4%,',
                                                          fields: { TEXT: 'up' },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                IF2: {
                                                  block: {
                                                    type: 'logic_compare',
                                                    id: '0:H.9lGP\/GTxXf@1Cm\/K',
                                                    fields: { OP: 'EQ' },
                                                    inputs: {
                                                      A: {
                                                        block: {
                                                          type: 'variables_get',
                                                          id: 'OJo}\/sD2*h$E~P_s=Wl\/',
                                                          fields: { VAR: { id: 'Db5aKrN@q~72i1hQ2Qn8' } },
                                                        },
                                                      },
                                                      B: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: '-h)_os{51zM;*tzaD(lY',
                                                          fields: { NUM: 3 },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                DO2: {
                                                  block: {
                                                    type: 'procedures_callnoreturn',
                                                    id: 'XsD[Aj#$!vZ#z]IT#}W$',
                                                    extraState: { name: 'move', params: ['direction'] },
                                                    inputs: {
                                                      ARG0: {
                                                        block: {
                                                          type: 'text',
                                                          id: ')zNU.;4ps}YQQ]H^7g`5',
                                                          fields: { TEXT: 'right' },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                IF3: {
                                                  block: {
                                                    type: 'logic_compare',
                                                    id: 'c$#al5vBGl98=|]lwj8{',
                                                    fields: { OP: 'EQ' },
                                                    inputs: {
                                                      A: {
                                                        block: {
                                                          type: 'variables_get',
                                                          id: '_HR`#VE*jHhx]IQ]6L(T',
                                                          fields: { VAR: { id: 'Db5aKrN@q~72i1hQ2Qn8' } },
                                                        },
                                                      },
                                                      B: {
                                                        block: {
                                                          type: 'math_number',
                                                          id: '8UR1*Llz(ymN(R\/n+OZq',
                                                          fields: { NUM: 4 },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                DO3: {
                                                  block: {
                                                    type: 'procedures_callnoreturn',
                                                    id: '=-SMR*A2]=#K_]FVD.uo',
                                                    extraState: { name: 'move', params: ['direction'] },
                                                    inputs: {
                                                      ARG0: {
                                                        block: {
                                                          type: 'text',
                                                          id: 'y#Na^Dp}yPC0}8656~,~',
                                                          fields: { TEXT: 'left' },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    next: {
                                      block: {
                                        type: 'controls_for',
                                        id: '$m@LD9GZm4SCjXGH_C7r',
                                        fields: { VAR: { id: 'cDm|,jC^q.nnIbkM3Is:' } },
                                        inputs: {
                                          FROM: {
                                            shadow: {
                                              type: 'math_number',
                                              id: 'Bw!|IM)e`Q4[cqS}PLK5',
                                              fields: { NUM: 1 },
                                            },
                                          },
                                          TO: {
                                            shadow: {
                                              type: 'math_number',
                                              id: ',D[eo_wIm#lt#dN=#%H0',
                                              fields: { NUM: 10 },
                                            },
                                            block: {
                                              type: 'math_arithmetic',
                                              id: '8gBtz]lenz{8OK@k:HgK',
                                              fields: { OP: 'MINUS' },
                                              inputs: {
                                                A: {
                                                  shadow: {
                                                    type: 'math_number',
                                                    id: '^48A_fqfka6{8f*;0tEn',
                                                    fields: { NUM: 1 },
                                                  },
                                                  block: {
                                                    type: 'variables_get',
                                                    id: 'et\/I*t7[zzj{iq)3DO[m',
                                                    fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                                  },
                                                },
                                                B: {
                                                  shadow: {
                                                    type: 'math_number',
                                                    id: '-GnL+#WTEdN2|o.^k?gE',
                                                    fields: { NUM: 1 },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          BY: {
                                            shadow: {
                                              type: 'math_number',
                                              id: 'AcrE3iXJXRDu^luniI.9',
                                              fields: { NUM: 1 },
                                            },
                                          },
                                          DO: {
                                            block: {
                                              type: 'procedures_callnoreturn',
                                              id: 'C3dMtW)\/bDO}[;-Uzf-9',
                                              extraState: { name: 'move', params: ['direction'] },
                                              inputs: {
                                                ARG0: {
                                                  block: {
                                                    type: 'text',
                                                    id: '^o+Zscrg~e\/E{|,51{0p',
                                                    fields: { TEXT: 'left' },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                        next: {
                                          block: {
                                            type: 'controls_for',
                                            id: 'y{o=k5TUfy%2ENCQT}*%',
                                            fields: { VAR: { id: 'cDm|,jC^q.nnIbkM3Is:' } },
                                            inputs: {
                                              FROM: {
                                                shadow: {
                                                  type: 'math_number',
                                                  id: 'G*;bC=-CD[J:iP\/1%XjZ',
                                                  fields: { NUM: 1 },
                                                },
                                              },
                                              TO: {
                                                shadow: {
                                                  type: 'math_number',
                                                  id: ',D[eo_wIm#lt#dN=#%H0',
                                                  fields: { NUM: 10 },
                                                },
                                                block: {
                                                  type: 'math_arithmetic',
                                                  id: '!Lh|:}XQ6BvBXuXO{0q\/',
                                                  fields: { OP: 'MINUS' },
                                                  inputs: {
                                                    A: {
                                                      shadow: {
                                                        type: 'math_number',
                                                        id: '^48A_fqfka6{8f*;0tEn',
                                                        fields: { NUM: 1 },
                                                      },
                                                      block: {
                                                        type: 'variables_get',
                                                        id: 'jrTxX1[Hx8{N:6G|rvoO',
                                                        fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                                                      },
                                                    },
                                                    B: {
                                                      shadow: {
                                                        type: 'math_number',
                                                        id: '|;A@A=g4xMIMAPa@@V)a',
                                                        fields: { NUM: 1 },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                              BY: {
                                                shadow: {
                                                  type: 'math_number',
                                                  id: 'EZ{pAh_0xh%BVZ52On1$',
                                                  fields: { NUM: 1 },
                                                },
                                              },
                                              DO: {
                                                block: {
                                                  type: 'procedures_callnoreturn',
                                                  id: 'od]-Q{||#=yU_}CJ@bxj',
                                                  extraState: { name: 'move', params: ['direction'] },
                                                  inputs: {
                                                    ARG0: {
                                                      block: {
                                                        type: 'text',
                                                        id: 'yINtKh|$b;R|U~h=:~_^',
                                                        fields: { TEXT: 'up' },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'procedures_defreturn',
        id: 'bLL^U2q7qtk,LIu_fq(z',
        x: 112,
        y: 1038,
        extraState: {
          params: [{ name: 'x', id: 'X)kXOb(\/nIYa;FY1XeM{' }, {
            name: 'y',
            id: 'u,p.?CSC[MMUV8VzT#EG',
          }],
        },
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'get initial value' },
      }, {
        type: 'procedures_defreturn',
        id: '}09j{s%%n31RYyAqNzs*',
        x: 113,
        y: 862,
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'is game complete' },
      }, {
        type: 'procedures_defnoreturn',
        id: 'Ae?vLCmU)=6baL*Pri32',
        x: 113,
        y: 963,
        extraState: { params: [{ name: 'direction', id: '{JR$yN^Vw{pb0=k{uu24' }] },
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'move' },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, {
      name: 'presses',
      id: 'iz$Tq($zc`@meSeT|IAF',
    }, { name: 'ddd', id: 'h#)@FWoA4^tHcFZM5Gl0' }, {
      name: 'istouch',
      id: '0*Y;vSg$+l.$](h)NqUg',
    }, { name: 'i', id: 'IlHu%)$@1c{Ll!\/\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, {
      name: 'dy',
      id: 'tL]gH\/RgkyzW})oL2Q8h',
    }, { name: 'pressure', id: 'rzU#N_N[#L.5Ex-J{cjc' }, {
      name: 'SPEED',
      id: 'V^)X29B$\/zH~5@~EHeQ+',
    }, { name: 'bullets', id: 'Ikt@YU{LJ;z{72MZMduV' }, {
      name: 'StartPosX',
      id: 'IJ7]gk-LGS!XJjIjc5ie',
    }, { name: 'StartPosY', id: 'HrYu!x=_GCNfv-KXil4|' }, {
      name: 'width',
      id: '1y?LmN9o\/~Qp`S*|{DH:',
    }, { name: 'height', id: '5=26Gq-40{hdQ@p.!EK`' }, {
      name: 'bullet',
      id: 'ptn8UybJM48DSX}-Hh0G',
    }, { name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'startX',
      id: 'y^.~f-*hinMPmYApRQ#6',
    }, { name: 'startY', id: 'MAEs]3BFw99dpzi+@7e+' }, {
      name: 'targetX',
      id: 'USmkA#!6OOi2srMLINeV',
    }, { name: 'targetY', id: 'z_p0dER?xLmZQ9In__^K' }, {
      name: 'angle',
      id: 'h6$rJt^$f99@WKbR=Tnb',
    }, { name: 'newBullet', id: '6G3v3,Xs1%!t||~8v@um' }, {
      name: 'image',
      id: '%m+~Mk2-i;D(WWLR-sFo',
    }, { name: 'gridYCount', id: 'gWM+ATx0Hj]T9g245|Ve' }, {
      name: 'gridXCount',
      id: 'oU~_W`%vwMHIc:w|JKJ5',
    }, { name: 'y_list', id: 'F0zzH{*mBn~JUcOc{PGn' }, {
      name: 'grid',
      id: 'RMDCPTS))lD%h16hbnq@',
    }, { name: 'pieceDrawSize', id: '_meM90BYI(TFPllY^+u[' }, {
      name: 'pieceSize',
      id: '9=n.6Z.u;mpi\/C`,yQW$',
    }, { name: 'begin_y', id: 'yhmEH)=rTPnUu1CrCyRc' }, {
      name: 'begin_x',
      id: '}?Usv|8TYx+HESB76w2*',
    }, { name: 'end_y', id: '9W{6Zy3al!a!bvg+bm|s' }, {
      name: 'end_x',
      id: 'aw3u=#D0T9:G}6X~2OmW',
    }, { name: 'doingTouch', id: '*U_aAxzSb`{y\/eJB$Wdw' }, {
      name: 'screen_width',
      id: 'cFe)q6W`*;@KA~,3qx;L',
    }, { name: 'direction', id: '{JR$yN^Vw{pb0=k{uu24' }, {
      name: 'emptyX',
      id: 'H=+iZY.f~;ugq.w}a1UI',
    }, { name: 'emptyY', id: '@O}4b2HfI6`9Q07K%*\/}' }, {
      name: 'newEmptyX',
      id: '`#|~ObE!JHrVeZ4iRU`P',
    }, { name: 'newEmptyY', id: 'Dc+VCVs;^34oL(Gct*_Y' }, {
      name: 'new_empty_y_list',
      id: 'ofcdeDhcQGnZw:1$:ANU',
    }, { name: 'empty_y_list', id: 'C]NQuM37]+zIo_,{8r[%' }, {
      name: 'j',
      id: 'pQ6E[A95[|,5NrqlBzZz',
    }, { name: 'moveNumber', id: 'cDm|,jC^q.nnIbkM3Is:' }, {
      name: 'roll',
      id: 'Db5aKrN@q~72i1hQ2Qn8',
    }, { name: 'key', id: 'T#M8CDyhjr:bBJ[TnWHu' }, {
      name: 'scancode',
      id: '3F9~uc~*ZPulEsheP]FZ',
    }, { name: 'isrepeat', id: '3+2NTOFE6OQ4*=D4q:Vi' }],
  }
  const fifteenShuffleCode = `function reset_game()
  for y = 1, gridYCount do
    for x = 1, gridXCount do
      y_list = grid[#grid]
      table.insert(y_list, #y_list + 1, get_initial_value(x, y))
    end
  end
  while is_game_complete() do
    for moveNumber = 1, 1000, 1 do
      roll = love.math.random(1, 4)
      if roll == 1 then
        move('down')
      elseif roll == 2 then
        move('up')
      elseif roll == 3 then
        move('right')
      elseif roll == 4 then
        move('left')
      end
    end
    for moveNumber = 1, gridXCount - 1 do
      move('left')
    end
    for moveNumber = 1, gridYCount - 1 do
      move('up')
    end
  end
end`

  const fifteenAndroidBlockly = {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'love_mousepressed',
        id: ')^84U(]EuQ~SpE:Y_^Z8',
        x: 116,
        y: 4719,
        fields: {
          x: { id: 'X)kXOb(\/nIYa;FY1XeM{' },
          y: { id: 'u,p.?CSC[MMUV8VzT#EG' },
          button: { id: 'N:1]z3Z-~s;m}I62N-(B' },
          istouch: { id: '0*Y;vSg$+l.$](h)NqUg' },
          presses: { id: 'iz$Tq($zc`@meSeT|IAF' },
        },
        inputs: {
          input: {
            block: {
              type: 'controls_if',
              id: '-zX*Jr]T+jE7,(Y7Y[\/?',
              inputs: {
                IF0: {
                  block: {
                    type: 'logic_compare',
                    id: 'Pc}=x{gI@@:hU10G[v%#',
                    fields: { OP: 'EQ' },
                    inputs: {
                      A: {
                        block: {
                          type: 'variables_get',
                          id: 'OA}jhRUHe]7zRw@Rs(Q#',
                          fields: { VAR: { id: '*U_aAxzSb`{y\/eJB$Wdw' } },
                        },
                      },
                      B: {
                        block: {
                          type: 'logic_boolean',
                          id: 'r=\/SYYuS;cw!.b9:0$,Q',
                          fields: { BOOL: 'FALSE' },
                        },
                      },
                    },
                  },
                },
                DO0: {
                  block: {
                    type: 'variables_set',
                    id: 'WZSZGv,Q}*XVUa5G;pWp',
                    fields: { VAR: { id: 'yhmEH)=rTPnUu1CrCyRc' } },
                    inputs: {
                      VALUE: {
                        block: {
                          type: 'variables_get',
                          id: '8\/!3B4S_+Zy0!Ukrh6A7',
                          fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                        },
                      },
                    },
                    next: {
                      block: {
                        type: 'variables_set',
                        id: 'sVvW6n^$DC?Rr[2qa5%Q',
                        fields: { VAR: { id: '}?Usv|8TYx+HESB76w2*' } },
                        inputs: {
                          VALUE: {
                            block: {
                              type: 'variables_get',
                              id: 'fy^SE3C|PC9Wp6Hjoq]`',
                              fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                            },
                          },
                        },
                        next: {
                          block: {
                            type: 'variables_set',
                            id: '1yN{?U3\/bdV~@HQ`4R^`',
                            fields: { VAR: { id: '*U_aAxzSb`{y\/eJB$Wdw' } },
                            inputs: {
                              VALUE: {
                                block: {
                                  type: 'logic_boolean',
                                  id: 'c~Lb?~:V0Q*-{j;aC`5E',
                                  fields: { BOOL: 'TRUE' },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'love_mousereleased',
        id: '*#(05gv#(RTK8F#1jzAy',
        x: 116,
        y: 4919,
        fields: {
          x: { id: 'X)kXOb(\/nIYa;FY1XeM{' },
          y: { id: 'u,p.?CSC[MMUV8VzT#EG' },
          button: { id: 'N:1]z3Z-~s;m}I62N-(B' },
          istouchy: { id: 'Jpro|MiS5HJB70T:`XHT' },
          presses: { id: 'iz$Tq($zc`@meSeT|IAF' },
        },
        inputs: {
          input: {
            block: {
              type: 'variables_set',
              id: ']%Bi{Vh.[[GgBvZ.lhA%',
              fields: { VAR: { id: '9W{6Zy3al!a!bvg+bm|s' } },
              inputs: {
                VALUE: {
                  block: {
                    type: 'variables_get',
                    id: 'p@6%WN;VJn$+O=F@TZ]J',
                    fields: { VAR: { id: 'u,p.?CSC[MMUV8VzT#EG' } },
                  },
                },
              },
              next: {
                block: {
                  type: 'variables_set',
                  id: 'z,#*1\/kX4pX(y0jJG-SK',
                  fields: { VAR: { id: 'aw3u=#D0T9:G}6X~2OmW' } },
                  inputs: {
                    VALUE: {
                      block: {
                        type: 'variables_get',
                        id: 'I(?:vn^43$Nxl;(ClKfr',
                        fields: { VAR: { id: 'X)kXOb(\/nIYa;FY1XeM{' } },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: 'variables_set',
                      id: '?K:OBTB8cQlhEV.#X\/+V',
                      fields: { VAR: { id: '5x]bpr[}W0Yf~Sk$Poi`' } },
                      inputs: {
                        VALUE: {
                          block: {
                            type: 'math_single',
                            id: 'm(0^%{u{BKC8x+squALU',
                            fields: { OP: 'ABS' },
                            inputs: {
                              NUM: {
                                shadow: {
                                  type: 'math_number',
                                  id: 'cp95W.lT7`~ntLqq$~1U',
                                  fields: { NUM: 9 },
                                },
                                block: {
                                  type: 'math_arithmetic',
                                  id: ',L~.P@f[Lxb-s{3u$p$o',
                                  fields: { OP: 'MINUS' },
                                  inputs: {
                                    A: {
                                      shadow: {
                                        type: 'math_number',
                                        id: '7`Y6fb_~ne7YG\/;MzP}O',
                                        fields: { NUM: 1 },
                                      },
                                      block: {
                                        type: 'variables_get',
                                        id: 'el~$y{Kjf+wysSW@0Hhg',
                                        fields: { VAR: { id: '}?Usv|8TYx+HESB76w2*' } },
                                      },
                                    },
                                    B: {
                                      shadow: {
                                        type: 'math_number',
                                        id: 'z$n;XfdS!#?qkA-{#-v@',
                                        fields: { NUM: 1 },
                                      },
                                      block: {
                                        type: 'variables_get',
                                        id: '.UrSqi1:lXB1(MCAJcj6',
                                        fields: { VAR: { id: 'aw3u=#D0T9:G}6X~2OmW' } },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      next: {
                        block: {
                          type: 'variables_set',
                          id: 'Oec6R\/3J:CtV;npyPN_1',
                          fields: { VAR: { id: 'tL]gH\/RgkyzW})oL2Q8h' } },
                          inputs: {
                            VALUE: {
                              block: {
                                type: 'math_single',
                                id: 'FB.RIIRKIJ6lG*c+VW`u',
                                fields: { OP: 'ABS' },
                                inputs: {
                                  NUM: {
                                    shadow: {
                                      type: 'math_number',
                                      id: 'cp95W.lT7`~ntLqq$~1U',
                                      fields: { NUM: 9 },
                                    },
                                    block: {
                                      type: 'math_arithmetic',
                                      id: '~aUIm|6li9hR4@s5[]fG',
                                      fields: { OP: 'MINUS' },
                                      inputs: {
                                        A: {
                                          shadow: {
                                            type: 'math_number',
                                            id: '7`Y6fb_~ne7YG\/;MzP}O',
                                            fields: { NUM: 1 },
                                          },
                                          block: {
                                            type: 'variables_get',
                                            id: '~=J-:_inf0%1\/]u:4\/qP',
                                            fields: { VAR: { id: 'yhmEH)=rTPnUu1CrCyRc' } },
                                          },
                                        },
                                        B: {
                                          shadow: {
                                            type: 'math_number',
                                            id: 'z$n;XfdS!#?qkA-{#-v@',
                                            fields: { NUM: 1 },
                                          },
                                          block: {
                                            type: 'variables_get',
                                            id: 'TOrvRLcfNE1H*@-EHS|D',
                                            fields: { VAR: { id: '9W{6Zy3al!a!bvg+bm|s' } },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          next: {
                            block: {
                              type: 'controls_if',
                              id: '(,Rw)A]WYT.H]!A?#rI]',
                              inputs: {
                                IF0: {
                                  block: {
                                    type: 'logic_compare',
                                    id: 'J?ucAyvY62t$cbS*QAR-',
                                    fields: { OP: 'EQ' },
                                    inputs: {
                                      A: {
                                        block: {
                                          type: 'variables_get',
                                          id: '%9~p,Q\/kaw8b6)N[9=)6',
                                          fields: { VAR: { id: '*U_aAxzSb`{y\/eJB$Wdw' } },
                                        },
                                      },
                                      B: {
                                        block: {
                                          type: 'logic_boolean',
                                          id: 'c4?rKQv.)48|Yk5-s(4H',
                                          fields: { BOOL: 'TRUE' },
                                        },
                                      },
                                    },
                                  },
                                },
                                DO0: {
                                  block: {
                                    type: 'controls_if',
                                    id: ']k]JAd20zOp]Wgg*+ntX',
                                    extraState: { elseIfCount: 1, hasElse: true },
                                    inputs: {
                                      IF0: {
                                        block: {
                                          type: 'logic_compare',
                                          id: 'atrLa:OKy|L0^9Xe^?!O',
                                          fields: { OP: 'LT' },
                                          inputs: {
                                            A: {
                                              block: {
                                                type: 'variables_get',
                                                id: '^h4GG+pWpyjR(RuF[4sE',
                                                fields: { VAR: { id: '5x]bpr[}W0Yf~Sk$Poi`' } },
                                              },
                                            },
                                            B: {
                                              block: {
                                                type: 'variables_get',
                                                id: '7P@}Fm}of:_@e\/uTL*+P',
                                                fields: { VAR: { id: 'tL]gH\/RgkyzW})oL2Q8h' } },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      DO0: {
                                        block: {
                                          type: 'controls_if',
                                          id: 'IfB?4hE.%Yvvme{rN[H1',
                                          extraState: { elseIfCount: 1 },
                                          inputs: {
                                            IF0: {
                                              block: {
                                                type: 'logic_compare',
                                                id: 'k@Q~SgG[G%9LHOtaSbE#',
                                                fields: { OP: 'LT' },
                                                inputs: {
                                                  A: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'f}8:N))8*2QoE2R,P-3i',
                                                      fields: { VAR: { id: '9W{6Zy3al!a!bvg+bm|s' } },
                                                    },
                                                  },
                                                  B: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'z3JmqMg*yKLMf8;l,W-S',
                                                      fields: { VAR: { id: 'yhmEH)=rTPnUu1CrCyRc' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            DO0: {
                                              block: {
                                                type: 'text_print',
                                                id: 'hwz|U*yS^DZ9gAk[h@yd',
                                                enabled: false,
                                                inputs: {
                                                  TEXT: {
                                                    shadow: {
                                                      type: 'text',
                                                      id: '1$1ci|WI3p\/5piB;%!_S',
                                                      fields: { TEXT: 'swipe up' },
                                                    },
                                                  },
                                                },
                                                next: {
                                                  block: {
                                                    type: 'procedures_callnoreturn',
                                                    id: '68f4T\/;_?kmM*rD{aipV',
                                                    extraState: { name: 'move', params: ['direction'] },
                                                    inputs: {
                                                      ARG0: {
                                                        block: {
                                                          type: 'text',
                                                          id: ';uj48#0jRbgQW8r$m25;',
                                                          fields: { TEXT: 'up' },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            IF1: {
                                              block: {
                                                type: 'logic_compare',
                                                id: '5}~.vml.D*JyUA6eV+Z^',
                                                fields: { OP: 'GT' },
                                                inputs: {
                                                  A: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'W\/zTNn0d6XPO6lmu$0!N',
                                                      fields: { VAR: { id: '9W{6Zy3al!a!bvg+bm|s' } },
                                                    },
                                                  },
                                                  B: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'pERob0x`%0k*:gj3qJ:g',
                                                      fields: { VAR: { id: 'yhmEH)=rTPnUu1CrCyRc' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            DO1: {
                                              block: {
                                                type: 'text_print',
                                                id: 'dvR%hA+#o9pDES+k!laH',
                                                enabled: false,
                                                inputs: {
                                                  TEXT: {
                                                    shadow: {
                                                      type: 'text',
                                                      id: 'lc{o22h_vGOx`TvKuSvq',
                                                      fields: { TEXT: 'swipe down' },
                                                    },
                                                  },
                                                },
                                                next: {
                                                  block: {
                                                    type: 'procedures_callnoreturn',
                                                    id: 'ej3szygJ4]|{U`JUHuG5',
                                                    extraState: { name: 'move', params: ['direction'] },
                                                    inputs: {
                                                      ARG0: {
                                                        block: {
                                                          type: 'text',
                                                          id: 'eM7*BZwzc({j-O%YRZQ$',
                                                          fields: { TEXT: 'down' },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      IF1: {
                                        block: {
                                          type: 'logic_compare',
                                          id: '$kic~jHoHC^d545\/40P#',
                                          fields: { OP: 'GT' },
                                          inputs: {
                                            A: {
                                              block: {
                                                type: 'variables_get',
                                                id: 'J84H9J.6xbY*T]#LH~,W',
                                                fields: { VAR: { id: '5x]bpr[}W0Yf~Sk$Poi`' } },
                                              },
                                            },
                                            B: {
                                              block: {
                                                type: 'variables_get',
                                                id: 'OxEfn$V)E9~-f]VrvcK|',
                                                fields: { VAR: { id: 'tL]gH\/RgkyzW})oL2Q8h' } },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      DO1: {
                                        block: {
                                          type: 'controls_if',
                                          id: '-[l7blGM!w+OQCaYgw!Z',
                                          extraState: { elseIfCount: 1 },
                                          inputs: {
                                            IF0: {
                                              block: {
                                                type: 'logic_compare',
                                                id: 'V=~[NRuZ@Jk)2+a$|CJk',
                                                fields: { OP: 'LT' },
                                                inputs: {
                                                  A: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: '}B8qXe3?J#yTBG^=a}C*',
                                                      fields: { VAR: { id: 'aw3u=#D0T9:G}6X~2OmW' } },
                                                    },
                                                  },
                                                  B: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'Ret)cy}tCH3k|I-`^L#G',
                                                      fields: { VAR: { id: '}?Usv|8TYx+HESB76w2*' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            DO0: {
                                              block: {
                                                type: 'text_print',
                                                id: 'OXBeV]vZA:qO1MfN`o9g',
                                                enabled: false,
                                                inputs: {
                                                  TEXT: {
                                                    shadow: {
                                                      type: 'text',
                                                      id: 'z#?qMuv.(5eDlo$tTW}R',
                                                      fields: { TEXT: 'swipe left' },
                                                    },
                                                  },
                                                },
                                                next: {
                                                  block: {
                                                    type: 'procedures_callnoreturn',
                                                    id: '%n@$X5Y1`%Z@V#plL!Aw',
                                                    extraState: { name: 'move', params: ['direction'] },
                                                    inputs: {
                                                      ARG0: {
                                                        block: {
                                                          type: 'text',
                                                          id: 'ZuuB}Taqxs{!^v6J7bD|',
                                                          fields: { TEXT: 'left' },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            IF1: {
                                              block: {
                                                type: 'logic_compare',
                                                id: 'x7A5RqF:|+ZM9h%GJGt\/',
                                                fields: { OP: 'GT' },
                                                inputs: {
                                                  A: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: 'YC{42q*P[%yc_l#LPQ$+',
                                                      fields: { VAR: { id: 'aw3u=#D0T9:G}6X~2OmW' } },
                                                    },
                                                  },
                                                  B: {
                                                    block: {
                                                      type: 'variables_get',
                                                      id: '3ys$yhYp^+vZ.H$1+P$8',
                                                      fields: { VAR: { id: '}?Usv|8TYx+HESB76w2*' } },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            DO1: {
                                              block: {
                                                type: 'text_print',
                                                id: '|(jQ3.uX|*PZ+RrJ#7]y',
                                                enabled: false,
                                                inputs: {
                                                  TEXT: {
                                                    shadow: {
                                                      type: 'text',
                                                      id: 'p)q9`et:aIQHhyx-a=c9',
                                                      fields: { TEXT: 'swipe right' },
                                                    },
                                                  },
                                                },
                                                next: {
                                                  block: {
                                                    type: 'procedures_callnoreturn',
                                                    id: '|RZDSWLNE5Z,IrNviHOt',
                                                    extraState: { name: 'move', params: ['direction'] },
                                                    inputs: {
                                                      ARG0: {
                                                        block: {
                                                          type: 'text',
                                                          id: 'ld)~CNGM|d5{aNE{q,)d',
                                                          fields: { TEXT: 'right' },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      ELSE: {
                                        block: {
                                          type: 'text_print',
                                          id: '$=:e@9q5%O}76uqy8ngS',
                                          enabled: false,
                                          inputs: {
                                            TEXT: {
                                              shadow: {
                                                type: 'text',
                                                id: '+)?!xp:+Jnu-If!@5PcD',
                                                fields: { TEXT: 'touch' },
                                              },
                                            },
                                          },
                                          next: {
                                            block: {
                                              type: 'controls_if',
                                              id: '-_Ur@!nw)3b%znIr@4Ry',
                                              inputs: {
                                                IF0: {
                                                  block: {
                                                    type: 'procedures_callreturn',
                                                    id: 'vK1j;7|B+Fxy;h|mxXvc',
                                                    extraState: { name: 'is game complete' },
                                                  },
                                                },
                                                DO0: {
                                                  block: {
                                                    type: 'procedures_callnoreturn',
                                                    id: 'P\/?H79LcM_)pruj@Ur+3',
                                                    extraState: { name: 'reset game' },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    next: {
                                      block: {
                                        type: 'variables_set',
                                        id: 'Y,#u+vB6m.;,o-m\/l=:@',
                                        fields: { VAR: { id: 'yhmEH)=rTPnUu1CrCyRc' } },
                                        inputs: {
                                          VALUE: {
                                            block: {
                                              type: 'logic_null',
                                              id: '0d}e`67mrpBuV8Qs0Ho~',
                                            },
                                          },
                                        },
                                        next: {
                                          block: {
                                            type: 'variables_set',
                                            id: '^ZsLFAi|2mf|UC?5RcHz',
                                            fields: { VAR: { id: '}?Usv|8TYx+HESB76w2*' } },
                                            inputs: {
                                              VALUE: {
                                                block: {
                                                  type: 'logic_null',
                                                  id: 'dfL7R:K1%?+JN{SjPLMh',
                                                },
                                              },
                                            },
                                            next: {
                                              block: {
                                                type: 'variables_set',
                                                id: 'R,@;[HZkU1^[i7rE*}i_',
                                                fields: { VAR: { id: '9W{6Zy3al!a!bvg+bm|s' } },
                                                inputs: {
                                                  VALUE: {
                                                    block: {
                                                      type: 'logic_null',
                                                      id: 'W`Y1R)TR95.}8AxGKh]9',
                                                    },
                                                  },
                                                },
                                                next: {
                                                  block: {
                                                    type: 'variables_set',
                                                    id: '#ULSbZDrTNo9d|=Hw%2E',
                                                    fields: { VAR: { id: 'aw3u=#D0T9:G}6X~2OmW' } },
                                                    inputs: {
                                                      VALUE: {
                                                        block: {
                                                          type: 'logic_null',
                                                          id: '41P%h~PJ[IA5??MLTqdZ',
                                                        },
                                                      },
                                                    },
                                                    next: {
                                                      block: {
                                                        type: 'variables_set',
                                                        id: 'dA~8N,}(YQ*+is]=fWS%',
                                                        fields: { VAR: { id: '*U_aAxzSb`{y\/eJB$Wdw' } },
                                                        inputs: {
                                                          VALUE: {
                                                            block: {
                                                              type: 'logic_boolean',
                                                              id: '=DjUaZ.j;t5I`Ip:~:aC',
                                                              fields: { BOOL: 'FALSE' },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }, {
        type: 'procedures_defnoreturn',
        id: 'SOS+6%yXbSINKRLI6Iln',
        x: 113,
        y: 4063,
        extraState: { params: [{ name: 'direction', id: '{JR$yN^Vw{pb0=k{uu24' }] },
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'move' },
      }, {
        type: 'procedures_defreturn',
        id: 'Ddo%N;6oWb$m9?r`yiO2',
        x: 113,
        y: 4213,
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'is game complete' },
      }, {
        type: 'procedures_defnoreturn',
        id: '75DDU3y05]d:#_^_y#}a',
        x: 113,
        y: 4138,
        icons: { comment: { text: 'Describe this function...', pinned: false, height: 80, width: 160 } },
        fields: { NAME: 'reset game' },
      }, {
        type: 'love_load',
        id: 'OutyfaxPOfV3w6i^il1u',
        x: 113,
        y: 4313,
        inputs: {
          input: {
            block: {
              type: 'graphics_setnewfont',
              id: '%IE[U5~mi).P{ztVlBc:',
              inputs: {
                size: {
                  block: {
                    type: 'math_number',
                    id: '7:*6\/DHRfR@bfC^PHNrm',
                    fields: { NUM: 30 },
                  },
                },
              },
              next: {
                block: {
                  type: 'variables_set',
                  id: '%NY??6o\/zbQoXrgX4X-1',
                  fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                  inputs: {
                    VALUE: {
                      block: {
                        type: 'math_number',
                        id: '+PRB\/pxe`GQzz5O,~+:N',
                        fields: { NUM: 4 },
                      },
                    },
                  },
                  next: {
                    block: {
                      type: 'variables_set',
                      id: 'erY9^O9rA4F~zw\/S1fT\/',
                      fields: { VAR: { id: 'gWM+ATx0Hj]T9g245|Ve' } },
                      inputs: {
                        VALUE: {
                          block: {
                            type: 'math_number',
                            id: 'OrQueR#PUf]c@miw7+FN',
                            fields: { NUM: 4 },
                          },
                        },
                      },
                      next: {
                        block: {
                          type: 'variables_set',
                          id: 'GTjRt[FGz=Co5NZ.t;O1',
                          fields: { VAR: { id: 'yhmEH)=rTPnUu1CrCyRc' } },
                          inputs: { VALUE: { block: { type: 'logic_null', id: '[y:1\/c{XEX7|(j)k`l]D' } } },
                          next: {
                            block: {
                              type: 'variables_set',
                              id: '#JgI[Q~}\/V2c%itzc{IN',
                              fields: { VAR: { id: '}?Usv|8TYx+HESB76w2*' } },
                              inputs: {
                                VALUE: {
                                  block: {
                                    type: 'logic_null',
                                    id: ';o5zn(BE{0jv)OJW;muQ',
                                  },
                                },
                              },
                              next: {
                                block: {
                                  type: 'variables_set',
                                  id: 'MA,ZqRr@L:pzKTvNQv=5',
                                  fields: { VAR: { id: '9W{6Zy3al!a!bvg+bm|s' } },
                                  inputs: {
                                    VALUE: {
                                      block: {
                                        type: 'logic_null',
                                        id: 'L#fD5=Y%p;m+if[[]M^Z',
                                      },
                                    },
                                  },
                                  next: {
                                    block: {
                                      type: 'variables_set',
                                      id: 'P75~N~t{8P_k(|.gAAt*',
                                      fields: { VAR: { id: 'aw3u=#D0T9:G}6X~2OmW' } },
                                      inputs: {
                                        VALUE: {
                                          block: {
                                            type: 'logic_null',
                                            id: '3+T,6R;HP;0=pVhsK@kn',
                                          },
                                        },
                                      },
                                      next: {
                                        block: {
                                          type: 'variables_set',
                                          id: 'ww:7NILD0VSAJo.:t[sR',
                                          fields: { VAR: { id: '*U_aAxzSb`{y\/eJB$Wdw' } },
                                          inputs: {
                                            VALUE: {
                                              block: {
                                                type: 'logic_boolean',
                                                id: 'wO~6}}+eY+%^{^~*ygMt',
                                                fields: { BOOL: 'FALSE' },
                                              },
                                            },
                                          },
                                          next: {
                                            block: {
                                              type: 'variables_set',
                                              id: '3J,}*xRNie\/X%Em%+QA.',
                                              fields: { VAR: { id: 'cFe)q6W`*;@KA~,3qx;L' } },
                                              inputs: {
                                                VALUE: {
                                                  block: {
                                                    type: 'graphics_getheight',
                                                    id: 'aD`.$A_$prjLFz0RRL=~',
                                                  },
                                                },
                                              },
                                              next: {
                                                block: {
                                                  type: 'variables_set',
                                                  id: 'of6f5qp3C.;Z4]kss*^a',
                                                  fields: { VAR: { id: '9=n.6Z.u;mpi\/C`,yQW$' } },
                                                  inputs: {
                                                    VALUE: {
                                                      block: {
                                                        type: 'math_arithmetic',
                                                        id: '$dle4Qq9FOxf+{ywl1i4',
                                                        fields: { OP: 'DIVIDE' },
                                                        inputs: {
                                                          A: {
                                                            shadow: {
                                                              type: 'math_number',
                                                              id: '8)?bXM[Cpq.PV`VMXq;X',
                                                              fields: { NUM: 1 },
                                                            },
                                                            block: {
                                                              type: 'math_arithmetic',
                                                              id: 'p]*D}+g06-S-]Uy+#^g{',
                                                              fields: { OP: 'MINUS' },
                                                              inputs: {
                                                                A: {
                                                                  shadow: {
                                                                    type: 'math_number',
                                                                    id: '8)?bXM[Cpq.PV`VMXq;X',
                                                                    fields: { NUM: 1 },
                                                                  },
                                                                  block: {
                                                                    type: 'variables_get',
                                                                    id: 'h=;-G`q,s$L1b@xLrRYM',
                                                                    fields: { VAR: { id: 'cFe)q6W`*;@KA~,3qx;L' } },
                                                                  },
                                                                },
                                                                B: {
                                                                  shadow: {
                                                                    type: 'math_number',
                                                                    id: 'o9-#~^#Z,n$(HkX1v7+P',
                                                                    fields: { NUM: 1 },
                                                                  },
                                                                  block: {
                                                                    type: 'math_modulo',
                                                                    id: 'W\/^0jyi[y(K)7+ZQ_-u*',
                                                                    inputs: {
                                                                      DIVIDEND: {
                                                                        shadow: {
                                                                          type: 'math_number',
                                                                          id: '%quyi!-_W(-_W#0hve!T',
                                                                          fields: { NUM: 64 },
                                                                        },
                                                                        block: {
                                                                          type: 'variables_get',
                                                                          id: 'vU!M.ptIpCABWRl4yL_S',
                                                                          fields: { VAR: { id: 'cFe)q6W`*;@KA~,3qx;L' } },
                                                                        },
                                                                      },
                                                                      DIVISOR: {
                                                                        shadow: {
                                                                          type: 'math_number',
                                                                          id: '\/Fer|,Tf@0MQ%MCaP4W0',
                                                                          fields: { NUM: 10 },
                                                                        },
                                                                        block: {
                                                                          type: 'variables_get',
                                                                          id: 'A7(XY9z154bf!t\/zbQe~',
                                                                          fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                          B: {
                                                            shadow: {
                                                              type: 'math_number',
                                                              id: 'o9-#~^#Z,n$(HkX1v7+P',
                                                              fields: { NUM: 1 },
                                                            },
                                                            block: {
                                                              type: 'variables_get',
                                                              id: 's.KF2Ah_RS?|5fZB}r`2',
                                                              fields: { VAR: { id: 'oU~_W`%vwMHIc:w|JKJ5' } },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                  next: {
                                                    block: {
                                                      type: 'procedures_callnoreturn',
                                                      id: 'yK,gMiFuRHBAUnmlci)X',
                                                      extraState: { name: 'reset game' },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }],
    },
    variables: [{ name: 'y', id: 'u,p.?CSC[MMUV8VzT#EG' }, {
      name: 'button',
      id: 'N:1]z3Z-~s;m}I62N-(B',
    }, { name: 'istouchy', id: 'Jpro|MiS5HJB70T:`XHT' }, {
      name: 'presses',
      id: 'iz$Tq($zc`@meSeT|IAF',
    }, { name: 'ddd', id: 'h#)@FWoA4^tHcFZM5Gl0' }, {
      name: 'istouch',
      id: '0*Y;vSg$+l.$](h)NqUg',
    }, { name: 'i', id: 'IlHu%)$@1c{Ll!\/\/kUeC' }, {
      name: 'vvv',
      id: ':l6s~!yn-HPPVrGGkZ-z',
    }, { name: 'index', id: 'A$6xm\/gl*D}X~0cKi^@*' }, {
      name: 'orientation',
      id: 'vy.yJX:#k.klUj~lLps2',
    }, { name: 'path', id: 'y?TfnMT~ZXkb,YYtY_cg' }, { name: 'id', id: ';$t!vAEE`kKjqS-DY)tt' }, {
      name: 'x',
      id: 'X)kXOb(\/nIYa;FY1XeM{',
    }, { name: 'dx', id: '5x]bpr[}W0Yf~Sk$Poi`' }, {
      name: 'dy',
      id: 'tL]gH\/RgkyzW})oL2Q8h',
    }, { name: 'pressure', id: 'rzU#N_N[#L.5Ex-J{cjc' }, {
      name: 'SPEED',
      id: 'V^)X29B$\/zH~5@~EHeQ+',
    }, { name: 'bullets', id: 'Ikt@YU{LJ;z{72MZMduV' }, {
      name: 'StartPosX',
      id: 'IJ7]gk-LGS!XJjIjc5ie',
    }, { name: 'StartPosY', id: 'HrYu!x=_GCNfv-KXil4|' }, {
      name: 'width',
      id: '1y?LmN9o\/~Qp`S*|{DH:',
    }, { name: 'height', id: '5=26Gq-40{hdQ@p.!EK`' }, {
      name: 'bullet',
      id: 'ptn8UybJM48DSX}-Hh0G',
    }, { name: 'dt', id: '~yyeQE:X,}]nh;!S@!y8' }, {
      name: 'startX',
      id: 'y^.~f-*hinMPmYApRQ#6',
    }, { name: 'startY', id: 'MAEs]3BFw99dpzi+@7e+' }, {
      name: 'targetX',
      id: 'USmkA#!6OOi2srMLINeV',
    }, { name: 'targetY', id: 'z_p0dER?xLmZQ9In__^K' }, {
      name: 'angle',
      id: 'h6$rJt^$f99@WKbR=Tnb',
    }, { name: 'newBullet', id: '6G3v3,Xs1%!t||~8v@um' }, {
      name: 'image',
      id: '%m+~Mk2-i;D(WWLR-sFo',
    }, { name: 'gridYCount', id: 'gWM+ATx0Hj]T9g245|Ve' }, {
      name: 'gridXCount',
      id: 'oU~_W`%vwMHIc:w|JKJ5',
    }, { name: 'y_list', id: 'F0zzH{*mBn~JUcOc{PGn' }, {
      name: 'grid',
      id: 'RMDCPTS))lD%h16hbnq@',
    }, { name: 'pieceDrawSize', id: '_meM90BYI(TFPllY^+u[' }, {
      name: 'pieceSize',
      id: '9=n.6Z.u;mpi\/C`,yQW$',
    }, { name: 'begin_y', id: 'yhmEH)=rTPnUu1CrCyRc' }, {
      name: 'begin_x',
      id: '}?Usv|8TYx+HESB76w2*',
    }, { name: 'end_y', id: '9W{6Zy3al!a!bvg+bm|s' }, {
      name: 'end_x',
      id: 'aw3u=#D0T9:G}6X~2OmW',
    }, { name: 'doingTouch', id: '*U_aAxzSb`{y\/eJB$Wdw' }, {
      name: 'screen_width',
      id: 'cFe)q6W`*;@KA~,3qx;L',
    }, { name: 'direction', id: '{JR$yN^Vw{pb0=k{uu24' }, {
      name: 'emptyX',
      id: 'H=+iZY.f~;ugq.w}a1UI',
    }, { name: 'emptyY', id: '@O}4b2HfI6`9Q07K%*\/}' }, {
      name: 'newEmptyX',
      id: '`#|~ObE!JHrVeZ4iRU`P',
    }, { name: 'newEmptyY', id: 'Dc+VCVs;^34oL(Gct*_Y' }, {
      name: 'new_empty_y_list',
      id: 'ofcdeDhcQGnZw:1$:ANU',
    }, { name: 'empty_y_list', id: 'C]NQuM37]+zIo_,{8r[%' }, {
      name: 'j',
      id: 'pQ6E[A95[|,5NrqlBzZz',
    }, { name: 'moveNumber', id: 'cDm|,jC^q.nnIbkM3Is:' }, {
      name: 'roll',
      id: 'Db5aKrN@q~72i1hQ2Qn8',
    }, { name: 'key', id: 'T#M8CDyhjr:bBJ[TnWHu' }, {
      name: 'scancode',
      id: '3F9~uc~*ZPulEsheP]FZ',
    }, { name: 'isrepeat', id: '3+2NTOFE6OQ4*=D4q:Vi' }],
  }
  const fifteenAndroidCode = `function love.load()
  love.graphics.setNewFont( 30 )
  gridXCount = 4
  gridYCount = 4
  begin_y = nil
  begin_x = nil
  end_y = nil
  end_x = nil
  doingTouch = false
  screen_width = love.graphics.getHeight()
  pieceSize = (screen_width - screen_width % gridXCount) / gridXCount
  reset_game()
end

function love.mousepressed( x, y, button, istouch, presses )
  if doingTouch == false then
    begin_y = y
    begin_x = x
    doingTouch = true
  end
end

function love.mousereleased( x, y, button, istouchy, presses )
  end_y = y
  end_x = x
  dx = math.abs(begin_x - end_x)
  dy = math.abs(begin_y - end_y)
  if doingTouch == true then
    if dx < dy then
      if end_y < begin_y then
        move('up')
      elseif end_y > begin_y then
        move('down')
      end
    elseif dx > dy then
      if end_x < begin_x then
        move('left')
      elseif end_x > begin_x then
        move('right')
      end
    else
      if is_game_complete() then
        reset_game()
      end
    end
    begin_y = nil
    begin_x = nil
    end_y = nil
    end_x = nil
    doingTouch = false
  end
end
`

  return {
    howLoveBlockly,
    howLoveCode,
    loadImageBlockly,
    loadImageCode,
    keyIsDownBlockly,
    keyIsDownCode,
    moveWithKeyboardBlockly,
    moveWithKeyboardCode,
    shootCodeMove,
    shootCodeDraw,
    shootCodeLoad,
    shootBlocklyMove,
    shootBlocklyLoad,
    shootCodeBullet,
    shootBlocklyDraw,
    shootBlocklyBullet,
    howLoveDrawBlockly,
    howLoveDrawCode,
    fifteenDrawBlockly,
    fifteenDrawCode,
    fifteenInitialValuesBlockly,
    fifteenInitialValuesCode,
    fifteenBoardBlockly,
    fifteenBoardCode,
    fifteenMoveBlockly,
    fifteenMoveCode,
    fifteenKeypressBlockly,
    fifteenKeypressCode,
    fifteenIsCompleteBlockly,
    fifteenIsCompleteCode,
    fifteenShuffleBlockly,
    fifteenShuffleCode,
    fifteenAndroidBlockly,
    fifteenAndroidCode,
  }
}
