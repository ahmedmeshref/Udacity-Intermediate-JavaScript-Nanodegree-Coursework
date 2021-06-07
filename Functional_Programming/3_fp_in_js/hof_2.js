weaponsWithNoises = [
	{ name: 'Phaser', noise: 'bssszzsssss', universe: 'Star Trek' },
	{ name: 'Blaster', noise: 'Pew Pew', universe: 'Star Wars' },
	{ name: 'Sonic Screwdriver', noise: 'Pew Pew', universe: 'Dr. Who' },
	{ name: 'Lightsaber', noise: 'Pew Pew', universe: 'Star Wars' },
	{ name: 'Noisy Cricket', noise: 'Pew Pew', universe: 'Men in Black' }
]

/**
 * Check if a giving weapon name is part of the giving universe
 */
function weaponsFromUniverse(universe) {
	const weaponsBelongToUniverse = {};
	weaponsWithNoises.forEach(weapon => {
		if (weapon.universe === universe) {
			weaponsBelongToUniverse[weapon.name] = weapon.noise;
		}
	})

	const useWeapon = (weaponName) => {
		if (weaponName in weaponsBelongToUniverse) {
			console.log(`used ${weaponName}: ${weaponsBelongToUniverse["weaponName"]}`)
		}
		else {
			console.log(`${weaponName} is not a part of the ${universe} universe`)
		}
	}

	return useWeapon
}

const useStarWarsWeapon = weaponsFromUniverse('Star Wars');

useStarWarsWeapon('Blaster'); // console logs 'used Blaster: Pew Pew'
useStarWarsWeapon('Noisy Cricket'); // console logs 'Noisy Cricket is not a part of the Star Wars universe'
