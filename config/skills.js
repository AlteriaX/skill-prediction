/*	Notes:
	* '*' can be used in place of the skill or sub-skill to set default values

	Races:
	0 = Male Human
	1 = Female Human
	2 = Male High Elf
	3 = Female High Elf
	4 = Male Aman
	5 = Female Aman
	6 = Male Castanic
	7 = Female Castanic
	8 = Popori
	9 = Elin
	10 = Baraka
*/

module.exports = {
	'*': { // All-class
		447: true, // Halloween Tank
		6040: true, // Crucible of Fame
		6190: true,
		/*6190: { // Snowball
			'*': {
				noRetry: true,
				cooldownEnd: 500,
                noInterrupt: [6190]
			},
            0: { level: { 9: { length: [1000, 1000, 1000] } } }
        },*/
		9010100: true, // Racial teleport
		9020100: { ignoreAttackSpeed: true }, // Racial buff 1
		9030100: { ignoreAttackSpeed: true }, // Racial buff 2
		9100100: { ignoreAttackSpeed: true } // Apex Urgency
	},
	0: { // Warrior
		'*': { consumeAbnormal: 104110 },
		1: { // Combo Attack
			'*': {
				noInterrupt: [1],
				abnormals: { 101750: { speed: 1.2 } }
			},
			0: true,
			1: true,
			2: true,
			3: true
		},
		2: { // Evasive Roll
			0: {
				forceClip: true,
				stamina: 500,
				instantStamina: true,
                noRetry: true,
				noInterrupt: [2, 10]
			}
		},
		3: { // Torrent of Blows
			0: true
		},
		4: { // Rain of Blows
			0: {
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 22, 23, 28, 29, 30, 31, 34, 35, 36, 37, 38, 39, 41, 42],
				categoryChains: { 550: 30 }
			},
			30: true
		},
		5: { // Battle Cry
			0: { cooldownEnd: 300 }
		},
		8: { // Assault Stance
			0: { stamina: 1000 },
			50: true
		},
		9: { // Defensive Stance
			0: { stamina: 1000 },
			50: true
		},
		10: { // Death From Above
			0: { noInterrupt: [2, 10] }
		},
		11: { // Poison Blade
			0: { noInterrupt: [30, 40] }
		},
		12: { // Leaping Strike
			0: true
		},
		/*13: { // Retaliate
			0: {
				noInterrupt: [13],
				noRetry: true
			}
		},*/
		16: { // Charging Slash
			0: {
				ignoreAttackSpeed: true,
				length: 1105,
				distance: 467.88,
				noInterrupt: [16]
			},
			1: { noInterrupt: [2, 10, '16-1', 32, 40, 41] }
		},
		17: { // Vortex Slash
			0: true,
			1: true,
			2: { requiredBuff: 100201 }
		},
		18: { // Combative Strike
			0: true,
			1: true,
			2: { requiredBuff: 100201 }
		},
		19: { // Rising Fury
			'*': { noInterrupt: [19] },
			0: true,
			1: true
		},
		20: { // Deadly Gamble
			0: {
				ignoreAttackSpeed: true,
				cooldownEnd: 300
			}
		},
		21: { // Cascade of Stuns
			0: true
		},
		22: { // Backstab
			0: {
				distance: 0,
				onlyTarget: true
			}
		},
		23: { // Spinning Counter
			0: {
				abnormals: { 100299: { disableSkill: true } },
				requiredBuff: 100700
			}
		},
		24: { // Smoke Aggressor
			0: { ignoreAttackSpeed: true }
		},
		25: { // Command: Attack
			0: {
				ignoreAttackSpeed: true,
				requiredBuff: 102600
			}
		},
		26: { // Command: Follow
			0: {
				ignoreAttackSpeed: true,
				requiredBuff: 102600
			}
		},
		28: { // Traverse Cut
			'*': { /*hasChains: true*/ },
			0: {
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 13, 16, 17, 19, 21, 22, 28, 29, 30, 31, 32, 34, 36, 37, 38, 39, 41, 42],
				categoryChains: {
					1011: 30,
					1012: 30,
					1018: 30,
					1040: 30
				}
			},
			30: true
		},
		29: { // Blade Draw
			'*': { /*hasChains: true*/ },
			0: {
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, '16-0', 18, '19-0', 21, 22, 23, 29, 30, 31, 34, 35, 36, 37, 38, 41, 42],
				interruptibleWithAbnormal: { 102010: [3, 4, 30, 36, 37, 38, 41] },
				consumeAbnormal: [102010, 104110],
				/*abnormalChains: {
					102010: 30,
					104110: 30
				},*/
				categoryChains: {
					1032: 30,
					550: 30
				}
			},
			30: true
		},
		30: { // Scythe
			'*': { /*hasChains: true*/ },
			0: {
				noInterrupt: [1, 3, 5, 8, 9, 10, 13, 16, 17, 18, 19, 21, 22, 23, 28, 30, 31, 34, 35, 38, 39, 41, 42],
				categoryChains: {
					1002: 30,
					1004: 30,
					1011: 30,
					1012: 30,
					1029: 30,
					1040: 30
				}
			},
			30: true
		},
		31: { // Reaping Slash
			'*': { /*hasChains: true*/ },
			0: {
				noInterrupt: [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 21, 22, 23, 28, 29, 30, 33, 34, 35, 37, 38, 39, 41, 42],
				categoryChains: { 550: 30 }
			},
			30: true
		},
		32: { // Cross Parry
			0: {
				ignoreAttackSpeed: true,
				requiredBuff: [100200, 100201],
				consumeAbnormal: [102010, 104110],
				stamina: 50
			}
		},
		34: { // Binding Sword
			0: { noInterrupt: [1, 2, 3, 4, 5, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 28, 29, 30, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42] }
		},
		35: { // Infuriate
			0: { requiredBuff: [100200, 100201] }
		},
		36: { // Rain of Blows (Deadly Gamble)
			'*': { /*hasChains: true*/ },
			0: {
				//abnormalChains: { 104110: 30 },
				categoryChains: { 550: 30 }
			},
			30: true
		},
		37: { // Blade Draw (Deadly Gamble)
			'*': {
				//hasChains: true,
				consumeAbnormal: [102010, 104110]
			},
			0: {
				//abnormalChains: { 104110: 30 },
				categoryChains: {
					1032: 30,
					550: 30
				}
			},
			30: true
		},
		38: { // Scythe (Deadly Gamble)
			'*': { /*hasChains: true*/ },
			0: {
				//abnormalChains: { 104110: 30 },
				categoryChains: {
					1002: 30,
					1004: 30,
					1011: 30,
					1012: 30,
					1029: 30,
					1040: 30
				}
			},
			30: true
		},
		39: { // Traverse Cut (Defensive Stance)
			'*': { /*hasChains: true*/ },
			0: {
				categoryChains: {
					1011: 30,
					1012: 30,
					1018: 30,
					1040: 30
				}
			},
			30: true
		},
		40: { // Blade Waltz
			'*': {
				abnormals: { 104101: { disableSkill: true } },
				triggerAbnormal: {
					104110: 2000,
                    104101: 810
				},
				noInterrupt: [40, '41-0', '41-30', 42],
				//hasChains: true,
				longRetry: true,
				cooldownEnd: 1250,
				consumeAbnormal: 104100
			},
			10: {
				abnormalChains: { 104100: 12 },
				categoryChains: { 560: 11 },
				noRetry: true
			},
			11: true,
			12: { triggerAbnormal: { 104110: 2000 } },
			20: {
				abnormalChains: { 104100: 22 },
				categoryChains: { 560: 21 },
				noRetry: true
			},
			21: { abnormalChains: { 104100: 22 } },              
			22: { triggerAbnormal: { 104110: 2000 } }
		},
		41: { // Aerial Scythe
			'*': {
				noInterrupt: ['41-31', 42],
				noRetry: true,
				//hasChains: true,
				abnormalChains: { 105100: 31 }
			},
			0: {
				triggerAbnormal: { 105100: 1800 },
				categoryChains: { 560: 30 }
			},
			30: { triggerAbnormal: { 105100: 1800 } },
			31: { consumeAbnormal: 105100 }
		},
		42: { // Blade Frenzy
			'*': { /*hasChains: true*/ },
			0: {
				noInterrupt: [1, 3, 4, 5, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 21, 22, 23, 29, 34, 35, 36, 37, 39, 40, '41-0', '41-30', 42],
				categoryChains: {
					1002: 30,
					1030: 30,
					2041: 30
				}
			},
			30: true
		}
	},
	1: { // Lancer
		1: { // Combo Attack
			'*': { noInterrupt: [1] },
			0: true,
			1: true,
			2: true
		},
		2: { // Stand Fast
			'*': {
				noRetry: true,
				ignoreAttackSpeed: true,
				stamina: 50,
				level: { 1: { stamina: 40 } }
			},
			0: true,
			30: true,
			40: { stamina: 37 }
		},
		3: { // Onslaught
			'*': {
				noInterrupt: [3, 4, 8, 9, 10, 11, 12, 13, 15, 21, 23, 24, 25, 26, 27, 28, 29],
				abnormals: { 22060: { speed: 1.25 } },
                cooldownEnd: 300,
				categoryChains: {
					2001: 30,
					2005: 30,
					2018: 30
				}
			},
			0: true,
			30: true
		},
		4: { // Challenging Shout
			'*': { cooldownEnd: 300 },
			0: {
				noInterrupt: [4, 9, 12, 23, 24, 26],
				categoryChains: {
					2001: 30,
					2003: 30,
					2005: 30,
					2008: 30,
					2010: 30,
					2013: 30,
					2015: 30,
					2018: 30,
					2021: 30,
					2024: 30,
					2025: 30,
					2028: 30
				}
			},
			30: true
		},
		5: { // Shield Bash
			0: true,
			1: true,
			2: { chains: { 10: 30 } },
			30: true
		},
		7: { // Guardian Shout
			0: {
				noInterrupt: [7],
				cooldownEnd: 300
			}
		},
		8: { // Shield Counter
			0: {
				longRetry: true,
				forceDelay: 15,
				noInterrupt: [8],
				cooldownEnd: 300,
				onlyDefenceSuccess: true
			}
		},
		9: { // Leash
			0: true
		},
		10: { // Debilitate
			'*': {
				triggerAbnormal: { 201830: 2000 },
				consumeAbnormalEnd: 201830
			},
			0: {
				noInterrupt: [3, 4, 5, 8, 9, 10, 11, 12, 13, 15, 21, 23, 24, 25, 26, 27, 28, 29],
				categoryChains: {
					2001: 30,
					2018: 30
				}
			},
			30: true
		},
		/*11: { // Retaliate
			0: {
				noInterrupt: [11],
				noRetry: true
			}
		},*/
		12: { // Infuriate
			0: true
		},
		13: { // Spring Attack
			'*': {
				triggerAbnormal: { 201831: 2000 },
				consumeAbnormalEnd: 201831,
                cooldownEnd: 300
			},
			0: {
				noInterrupt: ['1-0', '1-1', 3, 4, 9, 11, 12, 13, 15, 23, 24, 25, 26, 27, 28, 29],
				categoryChains: {
					2001: 30,
					2005: 30,
					2008: 30,
					2010: 30,
					2018: 30,
					2021: 30
				}
			},
			30: true
		},
		15: { // Charging Lunge
			0: {
				ignoreAttackSpeed: true,
				length: 1125,
				distance: 474.5,
				noInterrupt: [15]
			},
			1: { noInterrupt: [2, '15-1', 25, 28] }
		},
		16: { // Second Wind
			0: {
				ignoreAttackSpeed: true,
				cooldownEnd: 300
			}
		},
		17: { // Adrenaline Rush
			'*': {
				ignoreAttackSpeed: true,
				noInterrupt: [17],
				cooldownEnd: 300
			},
			0: true,
			40: true,
			50: true
		},
		18: { // Shield Barrage
			'*': {
				cooldownEnd: 300,
				noInterrupt: ['18-0']
			},
			0: {
				triggerAbnormal: { 201831: 2000 },
				abnormals: { 201550: { speed: 1.2 } } 
			},
			1: {
				consumeAbnormal: 201831
			}
		},
		19: { // Pledge of Protection
			0: {
				ignoreAttackSpeed: true,
				cooldownEnd: 300
			}
		},
		21: { // Lockdown Blow
			1: true,
			2: {
				categoryChains: {
					2010: 30,
					2013: 30,
					2018: 30
				}
			},
			30: true
		},
		22: { // Iron Will
			0: {
				ignoreAttackSpeed: true,
				cooldownEnd: 300
			}
		},
		23: { // Master's Leash
			0: { requiredBuff: 201000 }
		},
		24: { // Chained Leash
			'*': { consumeAbnormal: 201803 },
			1: true,
			2: true
		},
		25: { // Wallop
			0: {
				noInterrupt: [1, 3, 4, 5, 9, 11, 12, 23, 24, 25, 26, 27, 28, 29],
				categoryChains: {
					2008: 30,
					2010: 30,
					2013: 30,
					2015: 30,
					2018: 30,
					2021: 30,
					2028: 30
				}
			},
			30: true
		},
		26: { // Backstep
			0: {
				moveDir: 1,
				forceClip: true,
				stamina: 800,
				instantStamina: true,
				noInterrupt: [26]
			}
		},
		27: { // Rallying Cry
			0: { cooldownEnd: 300 }
		},
		28: { // Super Leap
			0: {
				noInterrupt: [1, 3, 4, 5, 8, 9, 10, 12, 13, 18, 21, 23, 24, 26, 28, 29],
				categoryChains: {
					2015: 1,
					2025: 1
				}
			},
			1: true
		},
		29: { // Guardian's Barrier
			0: { ignoreAttackSpeed: true }
		},
		30: { // Divine Protection
			0: true
		}
	},
	2: { // Slayer
		1: { // Combo Attack
			'*': { noInterrupt: [1] },
			0: true,
			1: true,
			2: true,
			3: true
		},
		2: { // Knockdown Strike
			'*': {
				consumeAbnormal: 23220,
				consumeAbnormalEnd: 23070,
				abnormals: { 23070: { speed: 1.25 } }
			},
			1: true,
			2: {
				noInterrupt: [1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 28],
				categoryChains: {
					3014: 30,
					3027: 30
				}
			},
			30: true
		},
		3: { // Whirlwind
			'*': {
				abnormals: {
					23080: { speed: 1.25 },
					301150: { speed: 1.20 }
				}
			},
			0: true,
			1: true,
			2: {
				noInterrupt: [1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 21, 24, 28],
				categoryChains: { 3027: 30 }
			},
			30: { requiredBuff: 301604 }
		},
		4: { // Evasive Roll
			'*': {
				noInterrupt: [4],
				forceClip: true,
				noRetry: true,
				//hasChains: true
			},
			0: { abnormalChains: { 301200: 30 } },
			30: { consumeAbnormal: 301200 }
		},
		5: { // Dash
			0: { ignoreAttackSpeed: true }
		},
		6: { // Backstab
			0: {
				distance: 0,
				onlyTarget: true
			}
		},
		8: { // Overhand Strike
			'*': {
				//hasChains: true,
				checkReset: true,
				cooldownEnd: 700
			},
			0: {
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 10, '14-0', '14-1', 17, 18, 21, 25],
				categoryChains: {
					3001: 30,
                    3002: 30,
                    3003: 30,
                    3009: 30,
                    3012: 30,
                    3013: 30,
                    3014: 30,
                    3015: 30,
                    3016: 30,
                    3024: 30,
                    3027: 30
                }
			},
			30: true
		},
		9: { // Leaping Strike
			0: true
		},
		/*10: { // Retaliate
			0: {
				noInterrupt: [10],
				noRetry: true
			}
		},*/
		12: { // Heart Thrust
			'*': {
				abnormals: {
					23060: { speed: 1.25 },
					23061: { speed: 1.35 }
				}
			},
			0: true,
			1: true,
			2: {
				noInterrupt: [1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 21, 24, 28],
				categoryChains: { 3027: 30 }
			},
			30: { requiredBuff: 301604 }
		},
		13: { // Stunning Backhand
			0: true
		},
		14: { // Distant Blade
			'*': {
				triggerAbnormal: { 23220: 2000 },
				consumeAbnormalEnd: 23220
			},
			0: true,
			1: true,
			2: true
		},
		15: { // Startling Kick
			0: {
				moveDir: 1,
				forceClip: true
			}
		},
		16: { // Fury Strike
			0: true
		},
		17: { // Headlong Rush
			0: {
				ignoreAttackSpeed: true,
				length: 980,
				distance: 413,
				cooldownEnd: 300,
				triggerAbnormal: { 300502: 10000 }
			}
		},
		18: { // Overpower
			'*': {
				cooldownEnd: 300,
				noInterrupt: [1, 2, 3, 4, 6, 8, 9, 12, 13, 14, 15, 16, 17, 18, 21, 23, 24, 25, 26, 27, 28]
			},
			0: true,
			50: true
		},
		19: { // Tenacity
			0: { ignoreAttackSpeed: true }
		},
		20: { // In Cold Blood
			0: {
				ignoreAttackSpeed: true,
				triggerAbnormal: { 23220: 2000 },
				consumeAbnormalEnd: 23220
			}
		},
		21: { // Exhausting Blow
			0: true
		},
		23: { // Measured Slice
			'*': { /*hasChains: true*/ },
			0: {
				noInterrupt: [1, 2, 3, 4, 6, 9, 10, 12, 13, 14, 15, 16, 17, 22, 23, 28],
				categoryChains: {
					3008: 30,
					3024: 30,
					3025: 30,
					3026: 30,
					3027: 30
				}
			},
			30: true
 		},
		24: { // Eviscerate
			'*': { /*hasChains: true*/ },
			0: {
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 10, 14, 16, 17, 18, 21, 22, 24, 26, 28],
				categoryChains: {
					3001: 30,
					3002: 30,
					3003: 30,
					3008: 30,
					3009: 30,
					3012: 30,
					3013: 30,
					3015: 30,
					3025: 30,
					3027: 30
				}
			},
			30: true
		},
		26: { // Punishing Blow
			'*': { /*hasChains: true*/ },
			0: {
				noInterrupt: [1, 2, 3, 4, 6, 9, 10, 12, 13, 14, 15, 16, 17, 18, 21, 22, 26, 28],
				categoryChains: {
					3008: 30,
                    3023: 30,
                    3024: 30,
                    3025: 30,
                    3027: 30,
					3099: 30
				}
			},
			30: true
		},
		27: { // Savage Strike
			'*': {
				noInterrupt: ['27-31'],
				//hasChains: true,
				noRetry: true,
				triggerAbnormal: {
					301600: 4000,
					301603: 5000,
					301604: 5000
				}
			},
			0: { categoryChains: { 9999: 30 } },
			30: true,
			31: {
				consumeAbnormal: [301600, 301603],
				triggerAbnormal: {
					301601: 4000,
					301604: 4000
				}
			}
		},
		28: { // Unsheathe
			'*': { noRetry: true },
			0: {
				chargeLevels: [1, 2, 3],
				noInterrupt: [28],
				abnormals: {
					301600: { chargeSpeed: 0.4 },
					301601: { chargeSpeed: 0.6 }
				},
				consumeAbnormalEnd: 301500
			},
			1: { noInterrupt: ['28-1'] },
			2: { noInterrupt: ['28-2'] },
			3: { noInterrupt: ['28-3'] }
		}
	},
	3: { // Berserker
		'*': { consumeAbnormal: 401404 },
		1: { // Combo Attack
			'*': { noInterrupt: [1] },
			0: true,
			1: true,
			2: true,
			3: true
		},
		2: { // Axe Block
			0: { ignoreAttackSpeed: true },
			30: { consumeAbnormal: 401701 },
			31: { ignoreAttackSpeed: true }
		},
		3: { // Thunder Strike
			'*': { abnormals: { 24170: { speed: 1.25 } } },
			0: {
				consumeAbnormal: 400900,
				overcharge: 450,
				abnormals: {
					24130: { chargeSpeed: 0.3 },
					24170: { speed: 1.25 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },
					401150: { chargeSpeed: 0.2 }
				}
			},
			10: { noInterrupt: ['3-10'] },
			11: { noInterrupt: ['3-11'] },
			12: { noInterrupt: ['3-12'] },
			13: { noInterrupt: ['3-13'] }
		},
		4: { // Flatten
			'*': {
				abnormals: {
					24100: { speed: 1.25 },
					24101: { speed: 1.30 }
				}
			},
			0: {
				noInterrupt: [1, 2, '3-10', '3-11', '3-12', '3-13', 4, '8-30', '10-10', '10-11', '10-12', 11, '10-13', 13, '15-10', '15-11', '15-12', '15-13', '15-14', 18, 24, 26, 27, 28, 29, 30, '32-0'],
				chains: {
					6: 30,
                    25: 30,
                    31: 30,
                    32: 31,
                    34: 30,
                    35: 30,
                    36: 30,
                    37: 30
				}
			},
			1: {
				chains: {
					6: 31,
					25: 31,
					31: 31,
					32: 31
				}
			},
			30: true,
			31: true
		},
		5: { // Dash
			0: { ignoreAttackSpeed: true }
		},
		6: { // Sweeping Strike
			0: {
				interruptibleWithAbnormal: { 401404: 2 },
				abnormalChains: { 401404: 30 }
			},
			30: true
		},
		8: { // Fiery Rage
			1: {
				ignoreAttackSpeed: true,
				noInterrupt: [8],
				cooldownEnd: 300
			},
			30: true
		},
		10: { // Cyclone
			'*': { noRetry: true },
			0: {
				overcharge: 365,
				cooldownEnd: 300,
				noChargeAbnormalityId: 401701,
				abnormals: {
					24190: { chargeSpeed: 0.3 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },
					401150: { chargeSpeed: 0.2 }
				}
			},
			10: true,
			11: true,
			12: true,
			13: {
				noRetry: false,
				consumeAbnormal: 401701
			}
		},
		11: { // Leaping Strike
			0: true
		},
		/*13: { // Retaliate
			0: {
				noInterrupt: [13],
				noRetry: true
			}
		},*/
		15: { // Vampiric Blow
			0: {
				consumeAbnormal: 400900,
				noInterrupt: ['3-0', '10-0', 15],
				releaseChain: {
					overcharge: true,
					chain: 14
				},
				abnormals: {
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },
					401150: { chargeSpeed: 0.2 }
				},
				chains: {
					3: 14,
					10: 14
				}
			},
			10: { noInterrupt: ['15-10'] },
			11: { noInterrupt: ['15-11'] },
			12: { noInterrupt: ['15-12'] },
			13: { noInterrupt: ['15-13'] },
			14: { noInterrupt: [15] }
		},
		16: { // Fearsome Shout
			0: { ignoreAttackSpeed: true },
			10: { ignoreAttackSpeed: true },
			20: true
		},
		18: { // Lethal Strike
			'*': { abnormals: { 24120: { speed: 1.3 } } },
			0: {
				cooldownEnd: 300,
				noInterrupt: [1, 2, 4, 6, 13, 18, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37],
				chains: {
					'3-10': 30,
					'3-11': 30,
					'3-12': 30,
					'3-13': 30,
					'10-10': 30,
					'10-11': 30,
					'10-12': 30,
					'10-13': 30,
					11: 30,
					'15-10': 30,
					'15-11': 30,
					'15-12': 30,
					'15-13': 30,
					'15-14': 30
				}
			},
			30: true
		},
		19: { // Triumphant Shout
			0: { ignoreAttackSpeed: true }
		},
		20: { // Inescapable Doom
			0: { ignoreAttackSpeed: true }
		},
		21: { // Bloodlust
			0: {
				ignoreAttackSpeed: true,
				noInterrupt: [21],
				cooldownEnd: 300
			}
		},
		24: { // Evasive Smash
			'*': {
				consumeAbnormal: [400900, 401404],
				requiredBuff: 400900
			},
			0: { requiredBuff: false },
			5: { requiredBuff: false },
			10: true,
			11: true,
			12: true,
			13: true
		},
		25: { // Raze
			0: {
				noInterrupt: [2, 4, 6, '8-30', 11, 13, 24, 25, 26, 27, 28, 29, '32-0', 34, 35, 36, 37],
				interruptibleWithAbnormal: { 401404: 2 },
				chains: {
					1: 30,
					3: 30,
					10: 30,
					'15-10': 30,
					'15-11': 30,
					'15-12': 30,
					'15-13': 30,
					'15-14': 30,
					30: 30,
					32: 30
				}
			},
			1: {
				chains: {
					1: 31,
					3: 31,
					10: 31,
					'15-10': 31,
					'15-11': 31,
					'15-12': 31,
					'15-13': 31,
					'15-14': 31,
					30: 31,
					32: 31
				}
			},
			30: true,
			31: true
		},
		26: { // Tackle
			0: true
		},
		27: { // Unbreakable
			'*': { noInterrupt: [1, 2, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 13, '15-10', '15-11', '15-12', '15-13', '15-14', 18, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33] },
			0: {
				abnormalChains: { 401705: 30 },
				interruptibleWithAbnormal: { 401705: 33 },
				chains: {
					34: 30,
					35: 30,
					36: 30,
					37: 30
				}
			},
			30: true
		},
		28: { // Intimiation
			0: true,
			50: true
		},
		29: { // Evasive Roll
			0: {
				forceClip: true,
				noInterrupt: [29],
				cooldownEnd: 300
			}
		},
		30: { // Axe Counter
			'*': {
				noInterrupt: [1, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 13, '15-10', '15-11', '15-12', '15-13', '15-14', 18, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37],
				requiredBuff: 401402,
				abnormalChains: { 401404: 30 }
			},
			0: true,
			30: true
		},
		31: { // Overwhelm
			0: {
				ignoreAttackSpeed: true,
				length: 1115,
				distance: 467.88,
				noInterrupt: [26, 31]
			},
			1: { noInterrupt: [2, 4, 10, 25, '31-1'] }
		},
		32: { // Punishing Strike
			'*': { noInterrupt: [32] },
			0: { requiredBuff: 401400 },
			1: true
		},
		33: { // Unleash
			0: { triggerAbnormal: { 401705: 18000 } }
		},
		34: { // Unleash: Dexter
			'*': {
				requiredBuff: 401705,
				abnormalChains: { 401716: 31 }
			},
			0: {
				noRetry: true,
				triggerAbnormal: { 401716: 3000 },
				noInterrupt: [27, 34, 36],
				chains: {
					33: 30,
					35: 30,
					37: 30
				}
			},
			1: true,
			30: true,
			31: true
		},
		35: { // Unleash: Sinister
			'*': {
				requiredBuff: 401705,
				abnormalChains: { 401717: 31 }
			},
			0: {
				noRetry: true,
				triggerAbnormal: { 401717: 3000 },
				noInterrupt: [27, 35, 36, 37],
				chains: {
					33: 1,
					34: 30
				}
			},
			1: true,
			30: true,
			31: true
		},
		36: { // Unleash: Rampage
			'*': {
				requiredBuff: 401705,
				abnormalChains: { 401718: 31 }
			},
			0: {
				triggerAbnormal: { 401718: 3000 },
				noInterrupt: [27, 37],
				chains: {
					34: 30,
					35: 30,
					36: 30
				}
			},
			30: true,
			31: true
		},
		37: { // Unleash: Beast Fury
			'*': {
				noInterrupt: [37],
				requiredBuff: 401705
			},
			0: {
				chains: {
					27: 30,
					33: 30,
					34: 30,
					35: 30,
					36: 30
				}
			},
			30: true
		}
	},
	4: { // Sorcerer
		1: { // Fireball
			0: true
		},
		2: { // Frost Sphere
			0: { cooldownEnd: 300 }
		},
		3: { // Lightning Trap
			0: {
				cooldownEnd: 300,
				abnormals: { 25090: { speed: 1.4 } }
			}
		},
		4: { // Arcane Pulse
            '*': { forceDelay: 15 },
			0: {
				noInterrupt: [4],
				abnormals: { 25140: { chargeSpeed: 0.3 } }
			},
			10: { noInterrupt: ['4-10'] },
			11: { noInterrupt: ['4-11'] },
			12: { noInterrupt: ['4-12'] }
		},
		5: { // Mana Infusion
			0: true
		},
		6: { // Meteor Strike
			0: {
				noInterrupt: [6, 32],
				cooldownEnd: 500,
				abnormals: { 25100: { speed: 1.25 } }
			}
		},
		7: { // Backstep
			0: {
				moveDir: 1,
				noInterrupt: [7],
				forceClip: true,
				cooldownEnd: 300
			}
		},
		8: { // Flame Pillar
			0: { abnormals: { 25070: { speed: 1.25 } } }
		},
		10: { // Mana Barrier
			0: true
		},
		11: { // Lightning Strike
			0: true
		},
		12: { // Void Pulse
			0: {
				noInterrupt: [12],
				cooldownEnd: 300
			}
		},
		13: { // Mindblast
			0: { abnormals: { 25110: { speed: 1.4 } } }
		},
		/*14: { // Retaliate
			0: {
				noInterrupt: [14],
				noRetry: true
			}
		},*/
		16: { // Painblast
			0: true
		},
		17: { // Painful Trap
			0: { cooldownEnd: 300 }
		},
		18: { // Glacial Retreat
			0: {
				moveDir: 1,
				noInterrupt: [18],
				forceClip: true,
				cooldownEnd: 300
			}
		},
		19: { // Mana Siphon
			0: { noInterrupt: [19] },
			10: { noInterrupt: ['19-10'] },
			11: { noInterrupt: ['19-11'] },
			12: { noInterrupt: ['19-12'] }
		},
		20: { // Flaming Barrage
			'*': { abnormals: { 25060: { speed: 1.25 } } },
			0: {
				type: 'lockon',
				ignoreAttackSpeed: true,
				//noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		21: { // Nerve Exhaustion
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		22: { // Burning Breath
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		23: { // Mana Volley
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		25: { // Time Gyre
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		26: { // Teleport Jaunt
			0: {
				noInterrupt: [26],
				cooldownEnd: 350,
				noRetry: true
			}
		},
		27: { // Hailstorm
			'*': {
				noInterrupt: [1, 2, 3, 6, 7, 11, 12, 17, 18, 20, 27, 30, 32, 34, 36, 39],
				cooldownEnd: 300,
				abnormals: {
					902: { speed: 1.15 },
					910: { speed: 1.15 },
					911: { speed: 1.15 },
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					929: { speed: 1.225 },
					5010009: { speed: 1.15 },
					999010000: { speed: 1.15 }
				}
			},
			0: true,
			30: true
		},
		30: { // Nova
			0: { noInterrupt: [30, 36] },
		},
		31: { // Warp Barrier
			10: true,
			20: true
		},
		32: { // Meteor Strike (Mana Boost)
			'*': {
				noInterrupt: [6, 32],
				cooldownEnd: 3000,
				abnormals: { 25100: { speed: 1.25 } },
				abnormalChains: { 501650: 50 }
			},
			0: true,
			50: true
		},
		33: { // Arcane Pulse (Mana Boost)
            '*': { forceDelay: 15 },
			10: true,
			11: true,
			12: true,
			50: true,
			51: true,
			52: true
		},
		34: { // Mana Boost
			'*': {
				noInterrupt: [34],
				cooldownEnd: 300
			},
			0: true,
			30: true,
			40: true
		},
		/*35: { // Ice Lances
			0: { ignoreSkill: true }
		},*/
		36: { // Fusion
			'*': {
				cooldownEnd: 200,
				requiredBuff: [502020, 502030, 502040, 502050, 502021]
			},
			0: { noInterrupt: [1, 2, 3, 6, 7, 11, 12, 17, 18, 20, 27, 30, 32, 34, 36, 39] }
			//20: true, // TODO: Needs S_SKILL_CATEGORY implementation (always disabled - non-critical)
			//30: { cooldownEnd: 300 }
		},
		39: { // Implosion
			0: {
				requiredBuff: 502052,
				distance: [0, 0, -219.55]
			}
		}
	},
	5: { // Archer
		1: { // Arrow
			0: { noInterrupt: [1] }
		},
		2: { // Arrow Volley
			0: {
				type: 'lockon',
				ignoreAttackSpeed: true,
				noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		3: { // Radiant Arrow
			'*': { moveDir: 1 },
			0: {
				noInterrupt: [3, 8],
				cooldownEnd: 500,
				abnormals: {
					26180: { chargeSpeed: 0.3 },
					602108: { speed: 1.3 },
					601450: { chargeSpeed: 0.5 }
				}
			},
			10: { noInterrupt: ['3-10'] },
			11: { noInterrupt: ['3-11'] },
			12: { noInterrupt: ['3-12'] },
			13: { noInterrupt: ['3-13'] }
		},
		4: { // Penetrating Arrow
			'*': { moveDir: 1 },
			0: {
				noInterrupt: [4, 8],
				cooldownEnd: 500,
				abnormals: {
					26160: { chargeSpeed: 0.3 },
					26170: { chargeSpeed: 0.3 },
					26171: { chargeSpeed: 0.4 },
					26190: { chargeSpeed: 0.3 },
					602108: { speed: 1.3 },
					601450: { chargeSpeed: 0.5 }
				}
			},
			10: { noInterrupt: ['4-10'] },
			11: { noInterrupt: ['4-11'] },
			12: { noInterrupt: ['4-12'] },
			13: { noInterrupt: ['4-13'] }
		},
		5: { // Rain of Arrows
			'*': {
				cooldownEnd: 500,
				abnormals: {
					902: { speed: 1.15 },
					910: { speed: 1.15 },
					911: { speed: 1.15 },
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					929: { speed: 1.225 },
					5010009: { speed: 1.15 },
					999010000: { speed: 1.15 }
				}
			},
			0: true,
			40: true,
			50: true
		},
		6: { // Backstep
			0: {
				moveDir: 1,
				noInterrupt: [6],
				noRetry: true,
				forceClip: true,
				instantStamina: true,
				stamina: 180
			}
		},
		7: { // Feign Death
			0: {
				ignoreAttackSpeed: true,
				moveDir: 1
			}
		},
		8: { // Rapid Fire
			'*': {
				noRetry: true,
				cooldownEnd: 300,
				forceDelay: 5
			},
			0: { noInterrupt: [6, '8-6', 20] },
			1: { noInterrupt: [6, '8-7', 20] },
			2: true,
			3: true,
			4: true,
			5: true,
			6: true,
			7: true,
			11: { noInterrupt: [6, '8-14', 20] },
			12: true,
			13: true,
			14: true
		},
		9: { // Slow Trap
			0: true
		},
		10: { // Stunning Trap
			0: {
				abnormals: {
					26110: { speed: 1.4 },
					26111: { speed: 1.5 }
				}
			}
		},
		/*14: { // Retaliate
			0: {
				noRetry: true,
				noInterrupt: [14]
			}
		},*/
		15: { // Incendiary Trap
			0: { noInterrupt: [8] }
		},
		16: { // Breakaway Bolt
			0: {
				moveDir: 1,
				forceClip: true,
				cooldownEnd: 300
			}
		},
		17: { // Web Arrow
			0: {
				noInterrupt: [22],
				cooldownEnd: 300
			}
		},
		18: { // Close Quarters
			'*': { noInterrupt: [18] },
			0: true,
			1: true
		},
		19: { // Poison Arrow
			0: {
				noInterrupt: [8, 22],
				abnormals: { 26100: { speed: 1.25 } }
			}
		},
		20: { // Restraining Arrow
			0: {
				noInterrupt: [22],
				cooldownEnd: 300
			}
		},
		22: { // Sequential Fire
			0: {
				noInterrupt: [22],
				requiredBuff: 600200,
				consumeAbnormal: 600200,
				cooldownEnd: 300,
				noRetry: true
			}
		},
		23: { // Stunning Trap Arrow
			0: { cooldownEnd: 300 }
		},
		25: { // Incendiary Trap Arrow
			0: { cooldownEnd: 300 }
		},
		29: { // Thunderbolt
			0: {
				moveDir: 1,
				cooldownEnd: 500,
				triggerAbnormal: { 600200: 6700 },
				abnormals: { 602108: { speed: 1.3 } }
			}
		},
		32: { // Find Weakness
			0: { cooldownEnd: 300 }
		},
		33: { // Chase
			0: {
				ignoreAttackSpeed: true,
				length: 1040,
				distance: 413,
				noInterrupt: [33]
			}
		},
		34: { // Wind Walk
			'*': {
				noInterrupt: [34],
				noRetry: true,
				cooldownEnd: 300,
				abnormals: { 
					602107: { stamina: -30 },
					602222: { stamina: -40 }
				}
			},
			0: {
				inPlace: {
					animSeq: [{
						duration: 766,
						xyRate: 1,
						zRate: 1,
						distance: 0
					}],
					distance: 0
				}
			},
			10: true,
			20: { moveDir: -0.5 },
			30: { moveDir: -0.25 },
			40: { moveDir: -0.75 },
			50: { moveDir: 0.5 },
			60: { moveDir: 0.25 },
			70: { moveDir: 0.75 },
			80: { moveDir: 1 }
		},
		35: { // Windsong
			'*': { cooldownEnd: 300 },
			0: true,
			40: true
		},
		36: { // Gust Arrow
			0: {
				//noRetry: true,
				chargeLevels: [null, 360213],
				noInterrupt: [3, 4, 8, 22, 29, 36],
				autoRelease: 10
			},
			10: { noInterrupt: ['36-10'] },
			13: {
				noInterrupt: ['36-13'],
				triggerAbnormal: { 600200: 6700 }
			}
		}
	},
	6: { // Priest
		'*': { consumeAbnormal: 806104 },
		1: { // Divine Radiance
			'*': { noInterrupt: [1] },
			0: true,
			1: true,
			2: true,
			3: true
		},
		2: { // Regeneration Circle
			0: {
				abnormals: {
					902: { speed: 1.15 },
					910: { speed: 1.15 },
					911: { speed: 1.15 },
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					929: { speed: 1.225 },
					5010009: { speed: 1.15 },
					999010000: { speed: 1.15 },
					805800: { disableSkill: true }
				}
			}
		},
		3: { // Healing Circle
			0: {
				abnormals: { 805800: { disableSkill: true } },
				noInterrupt: [2, 3, 5, 10, 12, 11, 14, 16, 18, 25, 27, 28, '30-10', '33-10', 34, '35-10', '37-10', '41-10', 42],
				chains: {
					'19-10': 30,
					26: 30,
					38: 30
				}
			},
			30: true
		},
		5: { // Blessing of Shakan
			0: true
		},
		6: { // Arise
			0: true
		},
		8: { // Mana Infusion
			0: { abnormals: { 805800: { disableSkill: true } } }
		},
		10: { // Purifying Circle
			0: true
		},
		11: { // Metamorphic Blast
			'*': { triggerAbnormal: { 806104: 1500 } },
			0: true,
			1: true,
			2: true
		},
		12: { // Resurrect
			0: {
				abnormals: {
					902: { speed: 1.15 },
					910: { speed: 1.15 },
					911: { speed: 1.15 },
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					929: { speed: 1.225 },
					5010009: { speed: 1.15 },
					999010000: { speed: 1.15 }
				}
			}
		},
		14: { // Summon: Group
			0: true
		},
		16: { // Shocking Implosion
			'*': {
				triggerAbnormal: { 806104: 1500 }, 
				noInterrupt: [2, 3, 5, 10, 12, 14, 16, 18, '19-10', 25, 26, 28, 29, '30-10', '33-10', 34, '35-10', '37-10', 38, 40, '41-10', 42]
			},
			0: {
				chains: {
					11: 30,
					27: 30
				}
			},
			10: {
				chains: {
					11: 11,
					27: 11
				}
			},
			11: true,
			20: {
				chains: {
					11: 21,
					27: 21
				}
			},
			21: true,
			30: true
		},
		18: { // Heal Thyself
			0: { abnormals: { 805800: { disableSkill: true } } }
		},
		19: { // Focus Heal
			0: {
				type: 'lockon',
				ignoreAttackSpeed: true,
				abnormals: { 805800: { disableSkill: true } },
				//noRetry: true
			},
			10: {
				type: 'lockonCast',
				/*level: {
					29: { // Velocity
						ignoreAttackSpeed: true,
						cooldownEnd: 100 // Workaround: Fixes ghosting while on CD - TODO: Enable global cooldown checks
					},
					30: { // Downfall
						ignoreAttackSpeed: true,
						cooldownEnd: 100 // Workaround: Fixes ghosting while on CD - TODO: Enable global cooldown checks
					},
					32: { // Heal
						ignoreAttackSpeed: true,
						cooldownEnd: 100 // Workaround: Fixes ghosting while on CD - TODO: Enable global cooldown checks
					}
				}*/
			}
		},
		22: { // Kaia's Shield
			0: { abnormals: { 805800: { disableSkill: true } } }
		},
		/*25: { // Retaliate
			0: {
				noInterrupt: [25],
				noRetry: true
			}
		},*/
		26: { // Fiery Escape
			0: {
				moveDir: 1,
				noInterrupt: [26],
				forceClip: true,
				cooldownEnd: 300
			}
		},
		27: { // Final Reprisal
			'*': { noInterrupt: [2, 3, 5, 10, 12, 14, 18, '19-10', 25, 26, 27, 28, '30-10', '33-10', 34, '35-10', '37-10', 38, '41-10', 42] },
			0: {
				abnormals: { 806104: { chain: 30 } },
				chains: {
					11: 30,
					16: 30,
					29: 30,
					40: 30
				}
			},
			10: {
				abnormals: { 806104: { chain: 11 } },
				chains: {
					11: 11,
					16: 11,
					29: 11,
					40: 11
				}
			},
			11: true,
			20: {
				abnormals: { 806104: { chain: 21 } },
				chains: {
					11: 21,
					16: 21,
					29: 21,
					40: 21
				}
			},
			21: true,
			30: true
		},
		28: { // Mana Charge / Divine Charge
			0: { noInterrupt: [28] },
			10: { noInterrupt: ['28-10'] },
			11: { noInterrupt: ['28-11'] },
			12: { noInterrupt: ['28-12'] },
			13: { noInterrupt: ['28-13'] }
		},
		29: { // Triple Nemesis
			'*': { triggerAbnormal: { 806104: 1500 } },
			0: true,
			1: true,
			2: true
		},
		30: { // Plague of Exhaustion
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				//noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		31: { // Guardian Sanctuary
			0: {
				ignoreAttackSpeed: true,
				abnormals: { 805800: { disableSkill: true } }
			}
		},
		32: { // Divine Prayer
			0: {
				length: 2200.0,
				ignoreAttackSpeed: true,
				abnormals: { 805800: { disableSkill: true } }
			}
		},
		33: { // Ishara's Lulliby
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				//noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		34: { // Restorative Burst
			0: true
		},
		35: { // Energy Stars
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				//noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		37: { // Healing Immersion
			'*': {
				ignoreAttackSpeed: true,
				abnormals: { 805800: { disableSkill: true } }
			},
			0: {
				type: 'lockon',
				noRetry: true,
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				noInterrupt: ['37-10']
			}
		},
		38: { // Backstep
			0: {
				moveDir: 1,
				noInterrupt: [26, 38],
				forceClip: true,
				cooldownEnd: 300
			}
		},
		39: { // Grace of Resurrection
			0: true
		},
		40: { // Zenobia's Vortex
			'*': {
				triggerAbnormal: { 806140: 1480 },
				cooldownEnd: 500,
				noInterrupt: [40]
			},
			0: true,
			10: true,
			20: true
		},
		41: { // Divine Intervention / Mass Divine Intervention
			0: {
				type: 'lockon',
				ignoreAttackSpeed: true,
				abnormals: { 805800: { disableSkill: true } },
				noRetry: true,
				partyOnly: true
			},
			10: { type: 'lockonCast' }
		},
		42: { // Holy Burst
			'*': { cooldownEnd: 500 },
			0: true,
			20: true,
			30: true
		},
		43: { // Edict of Judgement
			'*': {
				noInterrupt: [43],
				cooldownEnd: 500
			},
			0: true,
			50: true
		}
	},
	7: { // Mystic
		1: { // Sharan Bolt
			0: true,
			1: true,
			2: true,
			3: true
		},
		2: { // Corruption Ring
			0: { cancelChain: 11 },
			11: true,
			12: { cooldownEnd: 300 }
		},
		5: { // Titanic Favor
			0: {
				type: 'lockon',
				ignoreAttackSpeed: true,
				//noRetry: true
			},
			10: {
				type: 'lockonCast',
				level: {
					29: { // Velocity
						ignoreAttackSpeed: true,
						cooldownEnd: 100 // Workaround: Fixes ghosting while on CD - TODO: Enable global cooldown checks
					},
					30: { // Downfall
						ignoreAttackSpeed: true,
						cooldownEnd: 100 // Workaround: Fixes ghosting while on CD - TODO: Enable global cooldown checks
					}
				}
			}
		},
		6: { // Shara's Lash
			0: true
		},
		7: { // Mana Infusion
			0: true
		},
		8: { // Metamorphic Blast
			0: {
				checkReset: true,
				noInterrupt: [1, 2, 4, '5-10', 6, '9-10', 10, 13, 14, 15, 16, 17, 21, '18-10', '22-10', 37, '41-10', 43, 48],
				chains: {
					8: 30,
					23: 30
				}
			},
			30: true
		},
		9: { // Arun's Cleansing
			0: {
				type: 'lockon',
				ignoreAttackSpeed: true
			},
			10: { type: 'lockonCast' }
		},
		10: { // Resurrect
			0: {
				abnormals: {
					902: { speed: 1.15 },
					910: { speed: 1.15 },
					911: { speed: 1.15 },
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					929: { speed: 1.225 },
					5010009: { speed: 1.15 },
					999010000: { speed: 1.15 }
				}
			}
		},
		11: { // Summon: Group
			0: true
		},
		12: { // Vow of Rebirth
			0: {
				type: 'lockon',
				ignoreAttackSpeed: true,
				noRetry: true,
				partyOnly: true
			},
			10: { type: 'lockonCast' }
		},
		13: { // Aura of the Merciless
			'*': {
				noInterrupt: [13],
				cooldownEnd: 300 
			},
			0: true,
			50: true
		},
		14: { // Aura of the Swift
			'*': {
				noInterrupt: [14],
				cooldownEnd: 300 
			},
			0: true,
			50: true
		},
		15: { // Aura of the Unyielding
			'*': {
				noInterrupt: [15],
				cooldownEnd: 300 
			},
			0: true,
			50: true
		},
		16: { // Aura of the Tenacious
			'*': {
				noInterrupt: [16],
				cooldownEnd: 300
			},
			0: true,
			50: true
		},
		17: { // Teleport Jaunt
			0: {
				noInterrupt: [17],
				cooldownEnd: 350,
				noRetry: true
			}
		},
		18: { // Arun's Vitae
			'*': { noRetry: true },
			0: {
				chargeLevels: [10, 10],
				noInterrupt: [18],
				abnormals: {
					27070: { chargeSpeed: 0.25 },
					27080: { chargeSpeed: 0.25 }
				}
			},
			10: { noInterrupt: ['18-10'] }
		},
		/*21: { // Retaliate
			0: {
				noInterrupt: [21],
				noRetry: true
			}
		},*/
		22: { // Arun's Tears
			'*': { noRetry: true },
			0: {
				chargeLevels: [10, 10],
				noInterrupt: [22],
				abnormals: { 27100: { chargeSpeed: 0.25 } }
			},
			10: { noInterrupt: ['22-10'] }
		},
		23: { // Metamorphic Smite
			0: {
				noInterrupt: [1, 2, 4, '5-10', 6, '9-10', 10, 13, 14, 15, 16, 17, '18-10', 21, '22-10', 23, 37, '41-10', 43, 48],
				chains: { 8: 30 }
			},
			30: true
		},
		24: { // Volley of Curses
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				//noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		25: { // Thrall of Protection
			'*': {
				ignoreAttackSpeed: true,
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: true
		},
		27: { // Thrall of Life
			'*': {
				ignoreAttackSpeed: true,
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: true
		},
		28: { // Sonorous Dreams
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		29: { // Regression
			0: { ignoreAttackSpeed: true }
		},
		30: { // Curse of Exhaustion
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		31: { // Curse of Confusion
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		32: { // Mire
			'*': { ignoreAttackSpeed: true },
			0: {
				type: 'lockon',
				noRetry: true
			},
			10: { type: 'lockonCast' }
		},
		33: { // Thrall of Vengeance
			'*': {
				ignoreAttackSpeed: true,
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: true
		},
		34: { // Thrall of Wrath
			'*': {
				ignoreAttackSpeed: true,
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: true
		},
		35: { // Command: Attack
			0: { ignoreAttackSpeed: true }
		},
		36: { // Command: Follow
			0: { ignoreAttackSpeed: true }
		},
		37: { // Warding Totem
			0: true
		},
		41: { // Contagion
			0: {
				type: 'lockon',
				ignoreAttackSpeed: true
			},
			10: { type: 'lockonCast' }
		},
		42: { // Boomerang Pulse
			'*': {
				noInterrupt: [42],
				cooldownEnd: 300
			},
			0: true
		},
		43: { // Unsummon Thrall
			0: true
		},
		44: { // Mass Teleport
			0: {
				noInterrupt: [17],
				cooldownEnd: 350,
				noRetry: true
			}
		},
		45: { // Thrall Augmentation
			0: true,
			50: true
		},
		47: { // Arunic Release
			'*': { cooldownEnd: 300 },
			0: true
		},
		48: { // Thrall Lord
			0: { ignoreAttackSpeed: true }
		}
	},
	8: { // Reaper
		'*': { consumeAbnormal: [10151020, 10151021, 10151022, 10151023] },
		1: { // Spiral Barrage
			'*': {
				noInterrupt: [3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 23, 40],
				inPlace: {
					animSeq: [{
						duration: 766,
						xyRate: 1,
						zRate: 1,
						distance: 0
					},
					{
						duration: 346,
						xyRate: 1,
						zRate: 1,
						distance: 0
					}],
					distance: 0
				},
				noRetry: true
			},
			0: {
				triggerAbnormal: { 10151020: 2000 },
				categoryChains: { 90001: 1 }
			},
			1: { triggerAbnormal: { 10151020: 2000 } },
			2: {
				inPlace: {
					animSeq: [{
						duration: 950,
						xyRate: 1,
						zRate: 1,
						distance: 0
					},
					{
						duration: 346,
						xyRate: 1,
						zRate: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151021: 2000 }
			},
			3: {
				inPlace: {
					animSeq: [{
						duration: 616,
						xyRate: 1,
						zRate: 1,
						distance: 0
					},
					{
						duration: 346,
						xyRate: 1,
						zRate: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151022: 1800 }
			},
			4: {
				inPlace: {
					animSeq: [{
						duration: 1150,
						xyRate: 1,
						zRate: 1,
						distance: 0
					},
					{
						duration: 346,
						xyRate: 1,
						zRate: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151023: 2000 }
			},
			5: {
				inPlace: {
					animSeq: [{
						duration: 2016,
						xyRate: 1,
						zRate: 1,
						distance: 0
					}],
					distance: 0
				}
			}
		},
		3: { // Double Shear
			'*': {
				noInterrupt: ['1-0', '1-2', 3, 4, 12, 13, 14, 15, 18, 19, 20, 21, 23, 40],
				inPlace: {
					animSeq: [{
						duration: 2140,
						xyRate: 1,
						zRate: 1,
						distance: 0
					}],
					distance: 0
				}
			},
			0: {
				level: {
					2: {
						abnormalChains: { 10151010: 40 },
						abnormals: { 29030: { speed: 1.25 } }
					}
				},
				chains: {
					1: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30
				}
			},
			30: {
				level: {
					2: {
						abnormalChains: { 10151010: 41 },
						abnormals: { 29030: { speed: 1.25 } }
					}
				}
			},
			40: {
				chains: {
					1: 41,
					5: 41,
					6: 41,
					8: 41,
					9: 41,
					10: 41,
					11: 41
				}
			},
			41: true
		},
		4: { // Sundering Strike
			'*': {
				noInterrupt: [1, 4, 8, 9, 10, 11, '12-0', '12-1', 13, 14, 15, 18, 20, 21, 23],
				interruptibleWithAbnormal: { 10151250: [1, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 21, 23] },
				noRetry: true,
				triggerAbnormal: { 10151220: 3000 }
			},
			0: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30
				},
				inPlace: {
					animSeq: [
						[],
						[{
							duration: 1757,
							xyRate: 1,
							zRate: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0, 0]
				}
			},
			30: {
				connectSkillArrow: true,
				inPlace: {
					animSeq: [
						[{
							duration: 1757,
							xyRate: 1,
							zRate: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0]
				},
				noRetry: true
			},
			31: {
				inPlace: {
					animSeq: [
						[{
							duration: 1757,
							xyRate: 1,
							zRate: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0]
				}
			},
			40: {
				chains: {
					1: 60,
					3: 60,
					4: 60,
					5: 60,
					6: 60,
					8: 60,
					9: 60,
					10: 60,
					11: 60,
					12: 60
				},
				inPlace: {
					animSeq: [
						[],
						[{
							duration: 1757,
							xyRate: 1,
							zRate: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0, 0]
				}
			},
			60: {
				connectSkillArrow: true,
				inPlace: {
					animSeq: [
						[{
							duration: 1757,
							xyRate: 1,
							zRate: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0]
				},
				noRetry: true
			},
			61: {
				inPlace: {
					animSeq: [
						[{
							duration: 1757,
							xyRate: 1,
							zRate: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0]
				}
			}
		},
		5: { // Grim Strike
			'*': {
				triggerAbnormal: { 10151220: 3000 },
				inPlace: {
					animSeq: [
						[{
							duration: 2416,
							xyRate: 1,
							zRate: 1,
							distance: 0
						}],
						[{
							duration: 1065,
							xyRate: 1,
							zRate: 1,
							distance: 0
						}]
					],
					distance: [0, 0]
				}
			},
			0: {
				abnormalChains: { 10151171: 30 },
				noInterrupt: ['1-0', '1-2', 4, 12, 13, 14, 15, 18, 20, 23, 40],
				interruptibleWithAbnormal: { 10151250: [4, 12, 13, 14, 15, 18, 20, 23, 40] },
				chains: {
					1: 30,
					3: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					19: 30,
					21: 30
				}
			},
			30: true,
			31: {
				chains: {
					1: 32,
					3: 32,
					5: 32,
					6: 32,
					8: 32,
					9: 32,
					10: 32,
					11: 32,
					19: 32,
					21: 32
				}
			},
			32: true
		},
		6: { // Death Spiral
			'*': { noRetry: true },
			0: {
				abnormalChains: { 10151131: 31 },
				noInterrupt: ['6-31', 19, 21, 23],
				interruptibleWithAbnormal: { 10151131: [19, 21, 23] },
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30
				}
			},
			30: true,
			31: { consumeAbnormal: 10151131 },
			40: {
				chains: {
					1: 41,
					3: 41,
					4: 41,
					5: 41,
					6: 41,
					8: 41,
					9: 41,
					10: 41,
					11: 41,
					12: 41
				}
			},
			41: true,
			42: { consumeAbnormal: 10151131 }
		},
		8: { // Whipsaw
			'*': { noInterrupt: [4, 5, 6, 8, 9, 11, 12, 13, 14, 15, 18, 19, 20, 21, 23, 40] },
			0: {
				level: { 1: { abnormalChains: { 10151010: 40 } } },
				chains: {
					1: 30,
					3: 30,
					10: 30
				}
			},
			30: { level: { 1: { abnormalChains: { 10151010: 41 } } } },
			40: {
				chains: {
					1: 41,
					3: 41,
					10: 41
				}
			},
			41: true
		},
		9: { // Smite
			'*': {
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 23, 40],
				distance: 168,
				inPlace: {
					animSeq: [{
						duration: 1832,
						xyRate: 1,
						zRate: 1,
						distance: 0
					}],
					distance: 0
				}
			},
			0: true,
			30: true
		},
		10: { // Pendulum Strike
			'*': {
				noInterrupt: [10, 19, 21, 23],
				moveDir: 1
			},
			0: {
				level: { 1: { abnormalChains: { 10151010: 40 } } },
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30
				}
			},
			30: { level: { 1: { abnormalChains: { 10151010: 41 } } } },
			40: {
				chains: {
					1: 41,
					3: 41,
					4: 41,
					5: 41,
					6: 41,
					8: 41,
					9: 41,
					10: 41,
					11: 41,
					12: 41
				}
			},
			41: true
		},
		11: { // Shadow Lash
			'*': { noRetry: true },
			0: {
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, '11-3', 12, 13, 14, 15, 18, 19, 20, 21, 23, 40],
				triggerAbnormal: { 10151040: 2000 },
				abnormalChains: {
                    10151040: 1,
                    10151041: 2,
                    10151042: 3
                }
			},
			1: {
				triggerAbnormal: { 10151041: 2000 },
				consumeAbnormal: 10151040
			},
			2: {
				triggerAbnormal: { 10151042: 2000 },
				consumeAbnormal: 10151041
			},
			3: { consumeAbnormal: 10151042 }
		},
		12: { // Shadow Burst
			0: {
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, '12-1', '12-31', 13, 14, 15, 18, 20, 21, 23],
                interruptibleWithAbnormal: { 10151250: [1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 18, 20, 21, 23] },
				abnormalChains: { 10151250: 31 },
				chains: { 12: 1 }
			},
			1: true,
			30: true,
			31: true
		},
		/*13: { // Soul Reversal
            0: {
                abnormalChains: {
                    10151031: 30,
                    10151035: 40
                }
            },
            30: true,
            40: true
        },*/
		/*14: { // Retaliate
			0: {
				noInterrupt: [14],
				noRetry: true
			}
		},*/
		15: { // Retribution
			'*': { ignoreAttackSpeed: true },
			0: true,
			30: true,
			81: true
		},
		16: { // Shadow Reaping
			0: {
				ignoreAttackSpeed: true,
				noInterrupt: [16]
			}
		},
		/*18: { // Shrouded Escape
			0: false //C_NOTIMELINE_SKILL
		},*/
		19: { // Dark Harvest
			'*': {
				triggerAbnormal: {
                    10151250: 3000,
                    10151230: 10000
                },
				consumeAbnormalEnd: 10151230,
				inPlace: {
					animSeq: [{
						duration: 2122,
						xyRate: 1,
						zRate: 1,
						distance: 0
					}],
					distance: 0
				}
			},
			0: {
				noInterrupt: [1, 3, 6, 8, 9, 10, 11, 12, 13, 14, 19, 21, 23, 40],
				requiredBuff: 10151220,
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30
				}
			},
			30: true
		},
		/*20: { // Cable Step
			0: {
				type: 'dynamicDistance',
				length: 1250
			}
		},*/
		21: { // Recall Scythes
			'*': { requiredBuff: 10151221 },
			0: {
				noInterrupt: [1, 3, 6, 8, 9, 10, 11, 12, 13, 14, 15, 19, 20, 21, 23, 40],
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30
				}
			},
			30: true
		},
		23: { // Binding Scythes
			'*': { noInterrupt: [23] },
			31: { ignoreAttackSpeed: true },
			33: { onlyTarget: true }
		},
		40: { // Shadow Step
			'*': {
				forceClip: true,
				abnormalChains: { 10151000: 30 }
			},
			0: true,
			30: true
		}
	},
	9: { // Gunner
		'*': { consumeAbnormal: [10152000, 10152002, 10152010, 10152011, 10152053, 10152072, 10152080, 10152081, 10152083] },
		1: { // Blast
			'*': {
				ignoreAttackSpeed: true,
				noInterrupt: [1, 20],
				triggerAbnormal: {
					10152011: 3100,
					93910009: 1000
				},
				consumeAbnormal: [10152000, 10152010],
				consumeAbnormalEnd: 93910009,
				//hasChains: true,
				noRetry: true
			},
			1: true,
			2: { noRetry: true }
		},
		2: { // Bombardment
			0: {
				noRetry: true,
				ignoreAttackSpeed: true
			},
			1: {
				type: 'lockonCast',
				noInterrupt: ['2-1'],
				cooldownEnd: 300
			}
		},
		3: { // Scattershot
			'*': {
				moveDir: 1,
				triggerAbnormal: { 10152083: 4100 },
				noInterrupt: [3, 20],
				glyphs: {
					30007: {
						animSeq: [
							{
								duration: 394,
								xyRate: 1,
								zRate: 1,
								distance: 0
							},
							{
								duration: 111,
								xyRate: 1,
								zRate: 1,
								distance: 0
							},
							{
								duration: 1333,
								xyRate: 1.8,
								zRate: 1,
								distance: 64.8
							}
						],
						distance: 0.6
					}
				},
				//hasChains: true,
				categoryChains: {
					91002: 30,
					91004: 30,
					91005: 30,
					'91007,10001': 30,
					91009: 30,
					91010: 30,
					91011: 30,
					91013: 30,
					91015: 30,
					91018: 30,
					91019: 30,
					91040: 30,
					91041: 30,
					91042: 30,
					91043: 30,
					91044: 30,
					91047: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		4: { // Point Blank
			'*': {
				cooldownEnd: 2000,
				noRetry: true,
				triggerAbnormal: {
					10152000: 2100,
					10152001: 2100
				},
				noInterrupt: [4, 20],
				consumeAbnormalEnd: [10152000, 10152001],
				chains: {
					2: 30,
					3: 30,
					5: 30,
					'7-3': 30,
					9: 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					18: 30,
					19: 30,
					40: 30,
					41: 30,
					'43-1': 30,
					'43-3': 30,
					'43-30': 30,
					'43-50': 30,
					44: 30,
					47: 30,
				},
			},
			1: true,
			2: true,
			3: {
				moveDir: 1,
				triggerAbnormal: { 10152002: 4100 },
				requiredBuff: 10152000,
				noInterrupt: [1, 3, '4-3', '4-4', 5, 6, 7, 10, 11, 13, 15, 19, 20, 21, 22, 23, 40],
				chains: { 4: 4 }
			},
			4: {
				moveDir: 1,
				triggerAbnormal: { 10152002: 4100 }
			},
			30: { noInterrupt: [4] }
		},
		5: { // Burst Fire / Targeted Burst Fire
			'*': { noInterrupt: [5] },
			0: {
				noRetry: true,
				triggerAbnormal: { 10152053: 2100 }
			},
			1: {
				ignoreAttackSpeed: true,
				stamina: 75,
				level: [
					{ stamina: 50 },
					{ stamina: 55 },
					{ stamina: 60 },
					{ stamina: 65 },
					{ stamina: 70 }
				]
			},
			10: {
				noRetry: true,
				triggerAbnormal: { 10152053: 2100 }
			},
			11: {
				ignoreAttackSpeed: true,
				stamina: 75,
				level: [
					{ stamina: 50 },
					{ stamina: 55 },
					{ stamina: 60 },
					{ stamina: 65 },
					{ stamina: 70 }
				]
			},
			20: {
				noRetry: true,
				triggerAbnormal: { 10152053: 2100 }
			},
			21: {
				ignoreAttackSpeed: true,
				stamina: 90
			}
		},
		6: { // Time Bomb
			'*': {
				ignoreAttackSpeed: true,
				triggerAbnormal: { 10152010: 3100 },
				noInterrupt: [6, 20]
			},
			1: true,
			2: true
		},
		7: { // Arcane Barrage
			'*':{
				triggerAbnormal: { 10152010: 3100 },
				noInterrupt: [7, 20]
			},
			1: {
				ignoreAttackSpeed: true,
				noRetry: true
			},
			2: {
				ignoreAttackSpeed: true,
				noRetry: true
			},
			3: {
				forceDelay: 15,
				requiredBuff: 10152040,
				triggerAbnormal: { 10152081: 4100 },
				noInterrupt: ['7-3']
			},
			31: {
				ignoreAttackSpeed: true,
				noRetry: true
			},
			32: {
				ignoreAttackSpeed: true,
				noRetry: true
			},
			33: {
				forceDelay: 15,
				requiredBuff: 10152040,
				triggerAbnormal: { 10152081: 4100 },
				noInterrupt: ['7-33']
			}
		},
		9: { // Mana Missiles
			0: {
				noInterrupt: [9, 20],
				level: {
					9: {
						releaseChain: {
							connectSkills: [400102, 400132],
							chain: 12,
							grant: true
						}
					}
				}
			},
			10: {
				noInterrupt: ['9-10'],
				moveDir: 1,
				noRetry: true
			},
			11: {
				noInterrupt: ['9-11'],
				moveDir: 1,
				noRetry: true
			},
			12: {
				moveDir: 1,
				noInterrupt: ['9-12'],
				consumeAbnormal: [10152352]
			}
		},
		10: { // Arc Bomb
			'*': {
				noRetry: true,
				noInterrupt: [10, 20],
				categoryChains: {
					91002: 30,
					91003: 30,
					91004: 30,
					91005: 30,
					'91007,10001': 30,
					91009: 30,
					91010: 30,
					91011: 30,
					91013: 30,
					91015: 30,
					91018: 30,
					91019: 30,
					91040: 30,
					91041: 30,
					91043: 30,
					91044: 30,
					91047: 30
				}
			},
			1: true,
			2: true,
			30: { connectSkillArrow: true }
		},
		11: { // Rocket Jump
			'*': {
				noInterrupt: [11, 15, 20],
				//hasChains: true,
				categoryChains: {
					91002: 30,
					91003: 30,
					91004: 30,
					91005: 30,
					'91007,10001': 30,
					91009: 30,
					91010: 30,
					91011: 30,
					91013: 30,
					91018: 30,
					91019: 30,
					91040: 31,
					91041: 30,
					91043: 30,
					91044: 30,
					91047: 30
				}
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		13: { // Balder's Vengeance
			'*': {
				noRetry: true,
				cooldownEnd: 500,
				noInterrupt: [13, 44],
				moveDir: 1,
				categoryChains: {
					91002: 30,
					91003: 30,
					91004: 30,
					91005: 30,
					'91007,10001': 30,
					91009: 30,
					91010: 30,
					91011: 30,
					91015: 30,
					91018: 30,
					91019: 30,
					91040: 30,
					91044: 30
				}
			},
			1: true,
			2: true,
			30: { connectSkillArrow: true }
		},
		15: { // Replenishment
			'*': {
				ignoreAttackSpeed: true,
				triggerAbnormal: { 10152072: 4100 },
				noInterrupt: [15, 20],
				categoryChains: {
					91002: 30,
					91003: 30,
					91004: 30,
					91005: 30,
					'91007,10001': 30,
					91009: 30,
					91010: 30,
					91011: 30,
					91013: 30,
					91018: 30,
					91019: 30,
					91040: 30,
					91041: 30,
					91043: 30,
					91044: 30,
					91047: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		18: { // HB
			'*': {
				ignoreAttackSpeed: true,
				noInterrupt: [18],
				consumeAbnormal: [10152000, 10152010, 10152011]
			},
			1: true,
			2: true
		},
		19: { // ST
			'*': {
				noRetry: true,
				noInterrupt: [19],
				consumeAbnormal: [10152000, 10152010, 10152011],
				categoryChains: {
					91002: 30,
					91003: 30,
					91004: 30,
					91005: 30,
					'91007,10001': 30,
					91009: 30,
					91010: 30,
					91011: 30,
					91013: 30,
					91015: 30,
					91018: 30,
					91019: 30,
					91040: 30,
					91041: 30,
					91043: 30,
					91044: 30,
					91047: 30
				}
			},
			1: true,
			2: true,
			30: { connectSkillArrow: true }
		},
		/*20: { // Retaliate
			0: {
				noInterrupt: [20],
				noRetry: true
			}
		},*/
		40: { // Rolling Reload / Dashing Reload
			'*': {
				ignoreAttackSpeed: true,
				triggerAbnormal: {
					10152010: 3100,
					10152071: 3100,
					10152080: 4100, 
					10153093: 0x7fffffff 
				},
				noInterrupt: [11, 20],
				forceClip: true
			},
			0: true,
			1: {
				abnormalChains: { 10152354: 31 },
				triggerAbnormal: {
					10152010: 3100, 
					10152071: 3100,
					10152080: 4100,
					10152354: 4000, 
					10153093: 0x7fffffff
				}
			},
			2: {
				abnormalChains: { 10152354: 32 },
				triggerAbnormal: {
					10152010: 3100,
					10152071: 3100,
					10152080: 4100,
					10152354: 4000,
					10153093: 0x7fffffff
				}
			},
			31: true,
			32: {
				consumeAbnormal: 10152352,
				triggerAbnormal: {
                    10152010: 3100,
                    10152071: 3100,
                    10152080: 4100,
                    10152352: 3000,
                    10153093: 0x7fffffff
                }
			}
		},
		41: { // Modular Weapon System
			'*': {
				ignoreAttackSpeed: true,
				//hasChains: true,
				noInterrupt: [20, 41],
				abnormalChains: {
                    10152010: 2,
                    10152011: 2
                },
				cooldownEnd: 300,
				categoryChains: {
					91002: 30,
					91003: 30,
					91004: 30,
					91005: 30,
					'91007,10001': 30,
					91009: 30,
					91010: 30,
					91011: 30,
					91013: 30,
					91015: 30,
					91018: 30,
					91019: 30,
					91040: 30,
					91044: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		42: { // Detonate
			1: {
				ignoreAttackSpeed: true,
				noInterrupt: [5, 20, 40, 42],
				triggerAbnormal: {
					10152011: 3100,
					93910009: 600 
				},
				consumeAbnormalEnd: 93910009
			}
		},
		43: { // Remote Trigger
			'*': {
				moveDir: 1,
				//hasChains: true,
				noRetry: true,
				cooldownEnd: 500
			},
			0: { triggerAbnormal: { 10152331: 1800 } },
			1: {
				noInterrupt: ['43-31'],
				categoryChains: {
					91002: 30,
					91003: 30,
					91004: 30,
					91005: 30,
					'91007,10001': 30,
					91009: 30,
					91010: 30,
					91011: 30,
					91013: 30,
					91015: 30,
					91018: 30,
					91019: 30,
					91040: 30
				},
				abnormalChains: { 10152331: 31 },
				triggerAbnormal: { 10152331: 1800 }
			},
			3: {
				noInterrupt: ['43-51'],
				categoryChains: {
					91002: 50,
					91003: 50,
					91004: 50,
					91005: 50,
					'91007,10001': 50,
					91009: 50,
					91010: 50,
					91011: 50,
					91013: 50,
					91015: 50,
					91018: 50,
					91019: 50,
					91040: 50,
					91041: 50,
					91044: 50,
					91047: 50
				},
				requiredBuff: 10152340,
				abnormalChains: { 10152331: 51 },
				triggerAbnormal: { 10152331: 1800 }
			},
			30: { connectSkillArrow: true },
			31: {
				forceDelay: 15,
				longRetry: true,
				requiredBuff: 10152331,
				abnormals: { 93910009: { disableSkill: true } },
				consumeAbnormal: [10152000, 10152010, 10152011, 10152331]
			},
			50: { connectSkillArrow: true },
			51: {
				forceDelay: 15,
				longRetry: true,
				requiredBuff: 10152340,
				abnormals: { 93910009: { disableSkill: true } },
				consumeAbnormal: [10152000, 10152010, 10152011, 10152331]
			}
		},
		44: { // Balder's Vengeance (Modular Weapon System)
			'*': {
				noInterrupt: [20, 44],
				moveDir: 1,
				noRetry: true,
				cooldownEnd: 500,
				categoryChains: {
					91002: 30,
					91003: 30,
					91004: 30,
					91005: 30,
					'91007,10001': 30,
					91009: 30,
					91010: 30,
					91011: 30,
					91015: 30,
					91019: 30,
					91040: 30,
					91044: 30,
					91047: 30
				}
			},
			1: true,
			2: true,
			30: { connectSkillArrow: true }
		},
		47: { // Obliteration
			'*': {
				requiredBuff: 10152340,
				noInterrupt: [20, 47],
				cooldownEnd: 300,
				moveDir: 1,
				//hasChains: true,
				categoryChains: {
					91002: 30,
					91003: 30,
					91004: 30,
					91005: 30,
					'91007,10001': 30,
					91009: 30,
					91010: 30,
					91011: 30,
					91013: 30,
					91015: 30,
					91018: 30,
					91019: 30,
					91040: 30,
					91041: 30,
					91043: 30,
					91047: 30
				}
			},
			1: true,
			2: true,
			30: { connectSkillArrow: true }
		}
	},
	10: { // Brawler
		1: { // Punch
			'*': {
				//noInterrupt: ['1-3', 22, 24, 26],
				noInterrupt: ['1-3'],
				triggerAbnormal: { 10153060: 3000 },
				consumeAbnormalEnd: 10153060,
				//hasChains: true,
				categoryChains: {
					'92001,10000': 1,
					'92001,10001': 2,
					'92001,10002': 3,
					'92001,10010': 32,
					92002: 30,
					92003: 30,
					92004: 30,
					92005: 30,
					92006: 30,
					92007: 30,
					92008: 30,
					92009: 30,
					92010: 30,
					92013: 30,
					92014: 30,
					92015: 30,
					92016: 30,
					92017: 30,
					92018: 30,
					92019: 30,
					92020: 30,
					92021: 30,
					92022: 30,
					92024: 30,
					92026: 30,
					92040: 30
				},
				noRetry: true
			},
			0: true,
			1: true,
			2: true,
			3: true,
			30: true,
			31: true,
			32: true
		},
		2: { // Counter
			'*': {
				//hasChains: true,
				noRetry: true
			},
			1: {
				triggerAbnormal: { 10153001: 0x7fffffff },
				consumeAbnormalEnd: 10153001
			},
			2: {
				triggerAbnormal: { 10153002: 0x7fffffff },
				consumeAbnormalEnd: 10153002
			},
			3: {
				triggerAbnormal: { 10153003: 0x7fffffff },
				consumeAbnormalEnd: 10153003
			},
			4: {
				triggerAbnormal: { 10153004: 0x7fffffff },
				consumeAbnormalEnd: 10153004
			},
			10: {
				ignoreAttackSpeed: true,
				triggerAbnormal: { 10153006: 0x7fffffff },
				consumeAbnormalEnd: 10153006
			},
			11: {
				ignoreAttackSpeed: true,
				triggerAbnormal: { 10153005: 0x7fffffff },
				consumeAbnormalEnd: 10153005
			},
			12: {
				categoryChains: {
					'92001,10000': 1,
					'92001,10001': 2,
					'92001,10002': 3,
					'92001,10003': 4,
					'92001,10010': 1
				}
			}
		},
		3: { // Divine Wrath
			'*': {
				ignoreAttackSpeed: true,
				noRetry: true
			},
			0: true,
			1: {
				type: 'lockonCast',
				setEndpointStage: 1
			}
		},
		4: { // Ground Pound
			'*': {
				//hasChains: true,
				noInterrupt: [4]
			},
			0: { categoryChains: { 800: 30 } },
			30: true
		},
		5: { // Bullrush
			0: {
				ignoreAttackSpeed: true,
				noInterrupt: [5]
			}
		},
		6: { // Haymaker
			'*': {
				//hasChains: true,
				cooldownEnd: 400,
				abnormalChains: { 31120: 31 }
			},
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true,
			31: true,
			41: {
                abnormalChains: { 31120: 47 },
                categoryChains: { 800: 46 }
            },
            42: {
                abnormalChains: { 31120: 47 },
                categoryChains: { 800: 46 }
            },
            46: true,
            47: true,
            51: {
                abnormalChains: { 31120: 57 },
                categoryChains: { 800: 56 }
            },
            52: {
                abnormalChains: { 31120: 57 },
                categoryChains: { 800: 56 }
            },
            56: true,
            57: true,
            61: {
                abnormalChains: { 31120: 67 },
                categoryChains: { 800: 66 }
            },
            62: {
                abnormalChains: { 31120: 67 },
                categoryChains: { 800: 66 }
            },
            66: true,
            67: true
		},
		7: { // Roundhouse Kick
			'*': {
				noInterrupt: [7],
				/*hasChains: true*/
			},
			0: { categoryChains: { 800: 30 } },
			30: true,
			31: true
		},
		8: { // Piledriver
			'*': {
				//hasChains: true,
				abnormalChains: { 31120: 31 }
			},
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true,
			31: true
		},
		9: { // Jackhammer
			'*': {
				noInterrupt: [9],
				ignoreAttackSpeed: true,
				//hasChains: true,
				abnormalChains: { 31120: 31 }
			},
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true,
			31: true
		},
		10: { // Counterpunch
			'*': {
				noInterrupt: [10],
				requiredBuff: 10153000,
				/*hasChains: true*/
			},
			0: { categoryChains: { 800: 30 } },
			30: true
		},
		/*12: { // Retaliate
			0: {
				noInterrupt: [12],
				noRetry: true
			}
		},*/
		13: { // Provoke
			'*': {
				ignoreAttackSpeed: true,
				cooldownEnd: 300,
				noInterrupt: [13, 40]
			},
			1: true,
			2: true
		},
		14: { // Infuriate
			'*': {
				//hasChains: true,
				cooldownEnd: 300,
				noInterrupt: [14]
			},
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true
		},
		15: { // High Kick
			'*': {
				requiredBuff: 10153503,
				//hasChains: true,
				noInterrupt: [15]
			},
			0: { categoryChains: { 800: 30 } },
			30: true
		},
		16: { // Flip Kick
			'*': { /*hasChains: true*/ },
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true
		},
		18: { // Growing Fury
			'*': {
				requiredBuff: 10153050,
				cooldownEnd: 300,
				/*hasChains: true*/
			},
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true,
			41: { categoryChains: { 800: 43 } },
            42: { categoryChains: { 800: 43 } },
            43: true,
            61: { categoryChains: { 800: 63 } },
            62: { categoryChains: { 800: 63 } },
            63: true
		},
		19: { // Invigorating Rage
			'*': {
				ignoreAttackSpeed: true,
				noInterrupt: [19],
				stamina: 1500,
				instantStamina: true
			},
			1: true,
			2: true
		},
		21: { // Mounting Rage
			'*': {
				ignoreAttackSpeed: true,
				cooldownEnd: 300,
				noInterrupt: [21],
				abnormals: { 10153040: { disableSkill: true } }
			},
			1: true,
			2: true
		},
		22: { // Flying Kick
			'*': {
				noInterrupt: [22],
				/*hasChains: true*/
			},
			0: { categoryChains: { 800: 30 } },
			30: true
		},
		24: { // One-Inch Punch
			'*': {
				noInterrupt: [24],
				//hasChains: true,
				abnormals: { 10153540: { speed: 1.2 } }
			},
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true,
			31: true
		},
		26: { // Rythmic Blows
			'*': {
				//hasChains: true,
				noRetry: true,
				noInterrupt: [26]
			},
			0: {
				categoryChains: { 800: 2 },
				abnormalChains: {
                    10153190: 2,
                    10153191: 3,
                    10153192: 4,
                    10153193: 5,
                    10153194: 6,
                    10153195: 7
                }
			},
			1: true,
			2: {
				abnormalChains: {
                    10153190: 2,
                    10153191: 3,
                    10153192: 4,
                    10153193: 5,
                    10153194: 6,
                    10153195: 7
                }
			},
			3: true,
			4: true,
			5: true,
			6: true,
			7: true
		},
		40: { // Quick Dash
			'*': {
				ignoreAttackSpeed: true,
				forceClip: true,
				//hasChains: true,
				noRetry: true
			},
			0: true,
			1: true,
			30: true,
			31: true
		}
	},
	11: { // Ninja
		'*': { consumeAbnormal: [10154000, 10154001, 10154002, 10154003, 10154004, 10154005, 10154006] },
		1: { // Combo Attack
			'*': {
				ignoreAttackSpeed: true,
				triggerAbnormal: { 10154000: 1650 },
				//hasChains: true,
				noRetry: true
			},
			0: { categoryChains: { 900: 30 } },
			1: { triggerAbnormal: { 10154001: 1500 } },
			2: { triggerAbnormal: { 10154002: 1400 } },
			3: { triggerAbnormal: { 10154003: 1400 } },
			4: { triggerAbnormal: { 10154004: 1400 } },
			5: { triggerAbnormal: { 10154005: 1600 } },
			6: { triggerAbnormal: { 10154006: 100 } },
			30: true,
			40: { categoryChains: { 900: 70 } },
			41: { triggerAbnormal: { 10154001: 1500 } },
			42: { triggerAbnormal: { 10154002: 1400 } },
			43: { triggerAbnormal: { 10154003: 1400 } },
			44: { triggerAbnormal: { 10154004: 1400 } },
			45: { triggerAbnormal: { 10154005: 1600 } },
			46: { triggerAbnormal: { 10154006: 100 } },
			70: true
		},
		2: { // Shadow Jump
			'*': {
				ignoreAttackSpeed: true,
				forceClip: true,
				abnormalChains: { 10154010: 30 }
			},
			0: true,
			30: { cooldownEnd: 300 }
		},
		3: { // Leaves on the Wind
			'*': {
				//hasChains: true,
				noInterrupt: [3],
				abnormalChains: { 10154352: 40 }
			},
			0: {
				categoryChains: {
					911: 40,
					'9999,900': 30
				}
			},
			30: {
				connectSkillArrow: true,
				noRetry: true
			},
			40: true
		},
		4: { // Jagged Path
			1: {
				ignoreAttackSpeed: true,
				length: 665,
				distance: 469
			},
			2: {
				ignoreAttackSpeed: true,
				length: 665,
				distance: 469
			},
			10: true,
			11: true
		},
		5: { // Impact Bomb
			'*': {
				moveDir: 1,
				noInterrupt: [5],
				forceClip: true
			},
			0: { categoryChains: { 900: 30 } },
			30: { connectSkillArrow: true }
		},
		6: { // One Thousand Cuts
			'*': { /*hasChains: true*/ },
			0: { categoryChains: { 900: 30 } },
			1: {
				ignoreAttackSpeed: true,
				length: 300,
				distance: 246
			},
			10: true,
			30: true
		},
		7: { // Decoy Jutsu
			0: {
				onlyTarget: true,
				noInterrupt: [7]
			}
		},
		8: { // Fire Avalanche
			'*': {
				abnormals: {
					32033: { speed: 1.2 },
					32058: { speed: 1.3 }
				},
				//hasChains: true,
				noRetry: true
			},
			0: { categoryChains: { 900: 30 } },
			1: true,
			2: true,
			30: true,
			31: { categoryChains: { 900: 30 } },
			51: { categoryChains: { 900: 52 } },
			52: true
		},
		9: { // Smoke Bomb
			'*': {
				noInterrupt: [9],
				cooldownEnd: 300
			},
			0: { categoryChains: { 900: 30 } },
			30: { connectSkillArrow: true },
			31: true
		},
		/*10: { // Retaliate
			0: {
				noInterrupt: [10],
				noRetry: true
			}
		},*/
		11: { // Focus
			'*': {
				cooldownEnd: 300,
				noInterrupt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20]
			},
			0: true,
			50: true
		},
		12: { // Skyfall
			'*': {
				//hasChains: true,
				noInterrupt: [12]
			},
			1: { categoryChains: { 900: 30 } },
			2: { categoryChains: { 900: 30 } },
			30: true
		},
		13: { // Circle of Steel
			'*': {
				//hasChains: true,
				noInterrupt: [13]
			},
			1: { categoryChains: { 900: 30 } },
			2: { categoryChains: { 900: 30 } },
			30: true
		},
		14: { // Double Cut
			'*': {
				//hasChains: true,
				noInterrupt: [14]
			},
			1: { categoryChains: { 900: 30 } },
			2: { categoryChains: { 900: 30 } },
			30: true
		},
		15: { // Burning Heart
			'*': {
				stamina: 100,
				instantStamina: true,
				abnormals: {
					32033: { speed: 1.2 },
					32058: { speed: 1.3 }
				}
			},
			0: true,
			1: true,
			2: true,
			3: true,
			4: true,
			5: true,
			6: true,
			7: true,
			8: true,
			9: true,
			10: true,
			31: {
				categoryChains: { 900: 32 },
				noInterrupt: [15]
			},
			32: true
		},
		16: { // Death Blossom
			'*': {
				ignoreAttackSpeed: true,
				//hasChains: true,
				noInterrupt: [16]
			},
			0: { categoryChains: { 900: 30 } },
			30: { connectSkillArrow: true }
		},
		17: { // Attunement
			'*': {
				//hasChains: true,
				noInterrupt: [17],
				cooldownEnd: 300
			},
			0: { categoryChains: { 900: 30 } },
			30: true
		},
		18: { // Bladestorm
			'*': {
				//hasChains: true,
				noInterrupt: [18]
			},
			0: { categoryChains: { 900: 30 } },
			30: { connectSkillArrow: true }
		},
		19: { // Chakra Thrust
			'*': {
				//hasChains: true,
				noInterrupt: [19]
			},
			0: { categoryChains: { 900: 30 } },
			30: true
		},
		20: { // Clone Jutsu
			0: { ignoreAttackSpeed: true }
		},
		21: { // Boomerang Shuriken
			'*': {
				//hasChains: true,
				noInterrupt: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
				interruptibleWithAbnormal: { 10154351: [1, 5, 6, 7, 12, 14, 18, 22] },
			},
			0: { categoryChains: { 93003: 15 } },
			11: { categoryChains: { 93003: 17 } },
			12: { categoryChains: { 93003: 16 } },
			13: { categoryChains: { 93003: 18 } },
			15: { connectSkillArrow: true },
			16: { connectSkillArrow: true },
			17: { connectSkillArrow: true },
			18: { connectSkillArrow: true },
			50: true,
			51: true
		},
		22: { // Quick Attack
			'*': {
				cooldownEnd: 300,
				noInterrupt: [22]
			},
			10: {
				categoryChains: {
					93019: 30,
					'9999,900': 20
				}
			},
			20: true,
			30: true,
			40: {
				categoryChains: {
					93019: 60,
					'9999,900': 50
				}
			},
			50: { connectSkillArrow: true },
			60: { connectSkillArrow: true }
		},
		23: { // Inner Harmony
			'*': {
				//hasChains: true,
				noInterrupt: [23],
				cooldownEnd: 300
			},
			0: { categoryChains: { 900: 30 } },
			30: true
		}
	},
	12: { // Valkyrie
		1: { // Slash
			'*': {				
				noInterrupt:  ['1-3', 9, 11, 19],
				//hasChains: true,
				noRetry: true
			},
			0: {
				triggerAbnormal: { 10155006: 4000 },
				consumeAbnormalEnd: 10155006,
				categoryChains: { 750: 30 }
			},
			1: {
				triggerAbnormal: { 10155007: 4000 },
				consumeAbnormalEnd: 10155007
			},
			2: {
				triggerAbnormal: { 10155008: 4000 },
				consumeAbnormalEnd: 10155008
			},
			3: true,
			30: {
				triggerAbnormal: { 10155006: 4000 },
				consumeAbnormalEnd: 10155006
			}
		},
		2: { // Overhead Slash
			'*': {
				//hasChains: true,
				noInterrupt: [2]
			},
			0: { categoryChains: { 750: 30 } },
			30: true
		},
		3: { // Glaive Strike
			'*': {
				//hasChains: true,
				noInterrupt: [3],
				requiredBuff: 10155113,
				consumeAbnormal: [10155112, 10155113]
			},
			0: { categoryChains: { 750: 30 } },
			30: true
		},
		4: { // Charge
			'*': { noInterrupt: [1, 2, '4-10', '4-11', 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25] },
			0: {
				ignoreAttackSpeed: true,
				length: 550,
				distance: 436,
				noInterrupt: [4],
				noRetry: true
			},
			10: true,
			11: true
		},
		5: { // Maelstrom
			'*': {
				//hasChains: true,
				noInterrupt: [5]
			},
			0: { categoryChains: { 750: 30 } },
			30: true
		},
		6: { // Leaping Strike
			'*': {
				//hasChains: true,
				noInterrupt: [6]
			},
			0: { categoryChains: { 750: 30 } },
			30: true
		},
		7: { // Spinning Death
			'*': {
				noInterrupt: ['7-2'],
				//hasChains: true,
				noRetry: true
			},
			0: {
				triggerAbnormal: { 10155070: 5000 },
				categoryChains: { 750: 30 }
			},
			1: {
				consumeAbnormal: 10155070,
				triggerAbnormal: { 10155071: 5000 }
			},
			2: {
				consumeAbnormal: 10155071,
				triggerAbnormal: { 10155072: 1 }
			},
			30: { triggerAbnormal: { 10155070: 5000 } }
		},
		8: { // Titansbane
			'*': {
				//hasChains: true,
				noInterrupt: ['8-1']
			},
			0: {
				ignoreAttackSpeed: true,
				categoryChains: {
					'13008,10000': 1,
					750: 30
				}
			},
			1: true,
			30: { ignoreAttackSpeed: true }
		},
		9: { // Ground Bash
			'*': {
				//hasChains: true,
				noInterrupt: [9],
				requiredBuff: 10155112,
				consumeAbnormal: [10155112, 10155113]
			},
			0: { categoryChains: { 750: 30 } },
			30: true
		},
		10: { // Dream Slash
			'*': {
				noInterrupt: [10],
				//hasChains: true,
				noRetry: true
			},
			0: { categoryChains: { 750: 30 } },
			30: { connectSkillArrow: true }
		},
		11: { // Shining Crescent
			'*': { /*hasChains: true*/ },
			0: {
				noInterrupt: [11],
				categoryChains: { 750: 30 }
			},
			1: { categoryChains: { 750: 31 } },
			30: true,
			31: true
		},
		12: { // Ragnarok
			'*': {
				//hasChains: true,
				noInterrupt: [12]
			},
			0: { categoryChains: { 750: 30 } },
			30: true
		},
		13: { // Bloodflower
			'*': {
				//hasChains: true,
				noInterrupt: [13]
			},
			0: { categoryChains: { 750: 30 } },
			30: true
		},
		14: { // Evasion
			'*': {
				ignoreAttackSpeed: true,
				forceClip: true
			},
			0: { triggerAbnormal: { 10155020: 4000 } },
			1: {
				requiredBuff: 10155020,
				consumeAbnormal: 10155020
			}
		},
		15: { // Windslash
			'*': {
				//hasChains: true,
				noInterrupt: [15]
			},
			0: { categoryChains: { 750: 30 } },
			30: true
		},
		16: { // Runeburst
			'*': {
				ignoreAttackSpeed: true,
				//hasChains: true,
				noInterrupt: [16]
			},
			0: { categoryChains: { 750: 30 } },
			30: true
		},
		17: { // Balder's Tears
			0: {
				ignoreAttackSpeed: true,
				cooldownEnd: 300
			}
		},
		/*18: { // Retaliate
			0: {
				noInterrupt: [18],
				noRetry: true
			}
		},*/
		19: { // Reclamation
			'*': {
				//hasChains: true,
				noInterrupt: [19]
			},
			0: { categoryChains: { 750: 30 } },
			30: true
		},
		20: { // Backstab
			0: {
				distance: 0,
				onlyTarget: true
			}
		},
		21: { // Dark Herald
			0: {
				requiredBuff: 10155201,
				ignoreAttackSpeed: true
			}
		},
		23: { // Gungir's Bite
			'*': {
				//hasChains: true,
				noRetry: true,
				abnormals: { 10155531: { disableSkill: true } },
				triggerAbnormal: { 10155532: 2000 },
				consumeAbnormalEnd: 10155532,
				noInterrupt: [23]
			},
			0: {
				categoryChains: { 750: 1 },
				abnormalChains: { 10155530: 2 },
				triggerAbnormal: {
					10155530: 6000,
					10155531: 1050,
					10155532: 2000
				}
			},
			1: {
				abnormalChains: { 10155530: 2 },
				triggerAbnormal: {
					10155530: 6000,
					10155531: 1050,
					10155532: 2000
				}
			},
			2: { consumeAbnormalEnd: 10155530 }
		},
		24: { // Twilight Waltz
			'*': {
				abnormals: { 10155543: { disableSkill: true } },
				//hasChains: true,
				noRetry: true,
				abnormalChains: {
                    10155540: 2,
                    10155541: 3,
                    10155542: 4
                }
			},
			0: {
				categoryChains: { 750: 1 },
				triggerAbnormal: {
					10155540: 12000,
					10155543: 1000
				}
			},
			1: {
                triggerAbnormal: {
                    10155540: 12000,
                    10155543: 1000
                }
            },
            2: {
                triggerAbnormal: {
                    10155541: 12000,
                    10155543: 1000
                },
                consumeAbnormal: 10155540
            },
            3: {
                triggerAbnormal: {
                    10155542: 5000,
                    10155543: 1000
                },
                consumeAbnormal: 10155541
            },
            4: {
                triggerAbnormal: {
                    10155544: 8000,
                    10155543: 1000
                },
                consumeAbnormal: 10155542,
                consumeAbnormalEnd: 10155544
            }
		},
		25: { // Godsfall
			'*': {
				//hasChains: true,
				noRetry: true,
				noInterrupt: ['11-0', '11-30', 25]
			},
			0: {
				triggerAbnormal: { 10155511: 2000 },
				categoryChains: {
					772: 31,
					'9999,750': 1
				}
			},
			1: { triggerAbnormal: { 10155511: 2000 } },
			2: {
				distance: [-313.28, 463.28],
				categoryChains: {
					772: 32,
					'9999,750': 3
				}
			},
			3: { distance: [-313.28, 463.28] },
			31: { triggerAbnormal: { 10155511: 2000 } },
			32: { distance: [-313.28, 463.28] }
		}
	}
}