'use strict'

const PRELOAD = ['./core', './commands']

for(let name of PRELOAD) require(name)

const subMod = require('./require')

module.exports = function SkillPrediction(mod) {
	for(let name of PRELOAD) subMod(mod, name)
}