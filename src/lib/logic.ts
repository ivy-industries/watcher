import type { CLILogic, ParsedArgv } from '@ivy-industries/input';

import { extends_proto } from '@ivy-industries/ansi';
import { cli, run } from '@ivy-industries/input';

import { definition } from './input/definition.js';
extends_proto();

/**
 * <u>entry point of the watcher CLI</u>.
 * @param parsed_argv
 */
export const logic: CLILogic = async ( parsed_argv: ParsedArgv ): Promise<void> => {

  await definition().catch( console.error );

  await cli( parsed_argv )
    .catch( console.error );
};

export async function entry_point( argv: string[] = undefined ): Promise<void> {

  await run( argv || process.argv, logic, 'ivy-watcher', {
    key_value_pairs_options: true,
    no_warnings: true,
    parse_json: true,
    show_no_warnings_warn: false,
  } )
    .catch( console.error );
}
