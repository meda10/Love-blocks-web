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
\tlove.graphics.draw(image, 400, 300)
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

  return {
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
  }
}
