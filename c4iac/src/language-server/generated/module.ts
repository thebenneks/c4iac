/******************************************************************************
 * This file was generated by langium-cli 0.5.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumGeneratedSharedServices, LangiumSharedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { C4IacAstReflection } from './ast';
import { C4IacGrammar } from './grammar';

export const C4IacLanguageMetaData: LanguageMetaData = {
    languageId: 'c-4-iac',
    fileExtensions: ['.c4iac'],
    caseInsensitive: false
};

export const C4IacGeneratedSharedModule: Module<LangiumSharedServices, LangiumGeneratedSharedServices> = {
    AstReflection: () => new C4IacAstReflection()
};

export const C4IacGeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => C4IacGrammar(),
    LanguageMetaData: () => C4IacLanguageMetaData,
    parser: {}
};
