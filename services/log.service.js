import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = error => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error)
}

const printSuccess = error => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + error)
}

const printHelp = () => {
	console.log(
		dedent`
			${chalk.bgCyan(' HELP ')}\n
			Без параметров - вывод погоды
			-s [CITY] для установки города
			-a [API_KEY] для сохранения токена
			-h для вывода помощи
		`
	)
}

export { printError, printSuccess, printHelp }
