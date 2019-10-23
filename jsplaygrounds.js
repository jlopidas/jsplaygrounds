const infinitygauntlet = {
  	time_stone: {power: 'control time', equipped: true},
    soul_stone: {power: 'lifeanddeath', equipped: true },
		power_stone: {power: 'strength', equipped: true},
		mind_stone: {power: 'mind_control', equipped: true},
		reality_stone: {power: 'control_reality', equipped: true},
		space_stone: {power: 'control_space', equipped: true},
    snap() {
			if ( infinitygauntlet.time_stone.equipped === true &&
          infinitygauntlet.soul_stone.equipped === true &&
          infinitygauntlet.power_stone.equipped === true &&
          infinitygauntlet.mind_stone.equipped === true &&
          infinitygauntlet.reality_stone.equipped === true &&
          infinitygauntlet.space_stone.equipped === true ) {
  return 'wipe half of all life in the universe'
} else {
  	return 'power not available'
				}
		}
}
infinitygauntlet.snap()
infinitygauntlet.time_stone.equipped = false
infinitygauntlet.snap()
