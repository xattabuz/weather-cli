#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printError, printHelp, printSuccess } from './services/log.service.js'
import { saveKeyValue } from './services/storage.service.js'

const saveToken = async token => {
	try {
		await saveKeyValue('token', token)
		printSuccess('Токен сохранён')
	} catch (error) {
		printError(error.message)
	}
}

const initCli = () => {
	const args = getArgs(process.argv)
	if (args.h) {
		printHelp()
	}
	if (args.s) {
	}
	if (args.t) {
		saveToken(args.t)
	}
}

initCli()
