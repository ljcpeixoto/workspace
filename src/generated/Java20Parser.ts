// Generated from Java20Parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Java20ParserListener } from "./Java20ParserListener";
import { Java20ParserVisitor } from "./Java20ParserVisitor";


export class Java20Parser extends Parser {
	public static readonly EXPORTS = 1;
	public static readonly MODULE = 2;
	public static readonly NONSEALED = 3;
	public static readonly OACA = 4;
	public static readonly OPEN = 5;
	public static readonly OPENS = 6;
	public static readonly PERMITS = 7;
	public static readonly PROVIDES = 8;
	public static readonly RECORD = 9;
	public static readonly REQUIRES = 10;
	public static readonly SEALED = 11;
	public static readonly TO = 12;
	public static readonly TRANSITIVE = 13;
	public static readonly USES = 14;
	public static readonly VAR = 15;
	public static readonly WITH = 16;
	public static readonly YIELD = 17;
	public static readonly ABSTRACT = 18;
	public static readonly ASSERT = 19;
	public static readonly BOOLEAN = 20;
	public static readonly BREAK = 21;
	public static readonly BYTE = 22;
	public static readonly CASE = 23;
	public static readonly CATCH = 24;
	public static readonly CHAR = 25;
	public static readonly CLASS = 26;
	public static readonly CONST = 27;
	public static readonly CONTINUE = 28;
	public static readonly DEFAULT = 29;
	public static readonly DO = 30;
	public static readonly DOUBLE = 31;
	public static readonly ELSE = 32;
	public static readonly ENUM = 33;
	public static readonly EXTENDS = 34;
	public static readonly FINAL = 35;
	public static readonly FINALLY = 36;
	public static readonly FLOAT = 37;
	public static readonly FOR = 38;
	public static readonly IF = 39;
	public static readonly GOTO = 40;
	public static readonly IMPLEMENTS = 41;
	public static readonly IMPORT = 42;
	public static readonly INSTANCEOF = 43;
	public static readonly INT = 44;
	public static readonly INTERFACE = 45;
	public static readonly LONG = 46;
	public static readonly NATIVE = 47;
	public static readonly NEW = 48;
	public static readonly PACKAGE = 49;
	public static readonly PRIVATE = 50;
	public static readonly PROTECTED = 51;
	public static readonly PUBLIC = 52;
	public static readonly RETURN = 53;
	public static readonly SHORT = 54;
	public static readonly STATIC = 55;
	public static readonly STRICTFP = 56;
	public static readonly SUPER = 57;
	public static readonly SWITCH = 58;
	public static readonly SYNCHRONIZED = 59;
	public static readonly THIS = 60;
	public static readonly THROW = 61;
	public static readonly THROWS = 62;
	public static readonly TRANSIENT = 63;
	public static readonly TRY = 64;
	public static readonly VOID = 65;
	public static readonly VOLATILE = 66;
	public static readonly WHILE = 67;
	public static readonly UNDER_SCORE = 68;
	public static readonly IntegerLiteral = 69;
	public static readonly FloatingPointLiteral = 70;
	public static readonly BooleanLiteral = 71;
	public static readonly CharacterLiteral = 72;
	public static readonly StringLiteral = 73;
	public static readonly TextBlock = 74;
	public static readonly NullLiteral = 75;
	public static readonly LPAREN = 76;
	public static readonly RPAREN = 77;
	public static readonly LBRACE = 78;
	public static readonly RBRACE = 79;
	public static readonly LBRACK = 80;
	public static readonly RBRACK = 81;
	public static readonly SEMI = 82;
	public static readonly COMMA = 83;
	public static readonly DOT = 84;
	public static readonly ELLIPSIS = 85;
	public static readonly AT = 86;
	public static readonly COLONCOLON = 87;
	public static readonly ASSIGN = 88;
	public static readonly GT = 89;
	public static readonly LT = 90;
	public static readonly BANG = 91;
	public static readonly TILDE = 92;
	public static readonly QUESTION = 93;
	public static readonly COLON = 94;
	public static readonly ARROW = 95;
	public static readonly EQUAL = 96;
	public static readonly LE = 97;
	public static readonly GE = 98;
	public static readonly NOTEQUAL = 99;
	public static readonly AND = 100;
	public static readonly OR = 101;
	public static readonly INC = 102;
	public static readonly DEC = 103;
	public static readonly ADD = 104;
	public static readonly SUB = 105;
	public static readonly MUL = 106;
	public static readonly DIV = 107;
	public static readonly BITAND = 108;
	public static readonly BITOR = 109;
	public static readonly CARET = 110;
	public static readonly MOD = 111;
	public static readonly ADD_ASSIGN = 112;
	public static readonly SUB_ASSIGN = 113;
	public static readonly MUL_ASSIGN = 114;
	public static readonly DIV_ASSIGN = 115;
	public static readonly AND_ASSIGN = 116;
	public static readonly OR_ASSIGN = 117;
	public static readonly XOR_ASSIGN = 118;
	public static readonly MOD_ASSIGN = 119;
	public static readonly LSHIFT_ASSIGN = 120;
	public static readonly RSHIFT_ASSIGN = 121;
	public static readonly URSHIFT_ASSIGN = 122;
	public static readonly Identifier = 123;
	public static readonly WS = 124;
	public static readonly COMMENT = 125;
	public static readonly LINE_COMMENT = 126;
	public static readonly RULE_start_ = 0;
	public static readonly RULE_identifier = 1;
	public static readonly RULE_typeIdentifier = 2;
	public static readonly RULE_unqualifiedMethodIdentifier = 3;
	public static readonly RULE_contextualKeyword = 4;
	public static readonly RULE_contextualKeywordMinusForTypeIdentifier = 5;
	public static readonly RULE_contextualKeywordMinusForUnqualifiedMethodIdentifier = 6;
	public static readonly RULE_literal = 7;
	public static readonly RULE_primitiveType = 8;
	public static readonly RULE_numericType = 9;
	public static readonly RULE_integralType = 10;
	public static readonly RULE_floatingPointType = 11;
	public static readonly RULE_referenceType = 12;
	public static readonly RULE_coit = 13;
	public static readonly RULE_classOrInterfaceType = 14;
	public static readonly RULE_classType = 15;
	public static readonly RULE_interfaceType = 16;
	public static readonly RULE_typeVariable = 17;
	public static readonly RULE_arrayType = 18;
	public static readonly RULE_dims = 19;
	public static readonly RULE_typeParameter = 20;
	public static readonly RULE_typeParameterModifier = 21;
	public static readonly RULE_typeBound = 22;
	public static readonly RULE_additionalBound = 23;
	public static readonly RULE_typeArguments = 24;
	public static readonly RULE_typeArgumentList = 25;
	public static readonly RULE_typeArgument = 26;
	public static readonly RULE_wildcard = 27;
	public static readonly RULE_wildcardBounds = 28;
	public static readonly RULE_moduleName = 29;
	public static readonly RULE_packageName = 30;
	public static readonly RULE_typeName = 31;
	public static readonly RULE_packageOrTypeName = 32;
	public static readonly RULE_expressionName = 33;
	public static readonly RULE_methodName = 34;
	public static readonly RULE_ambiguousName = 35;
	public static readonly RULE_compilationUnit = 36;
	public static readonly RULE_ordinaryCompilationUnit = 37;
	public static readonly RULE_modularCompilationUnit = 38;
	public static readonly RULE_packageDeclaration = 39;
	public static readonly RULE_packageModifier = 40;
	public static readonly RULE_importDeclaration = 41;
	public static readonly RULE_singleTypeImportDeclaration = 42;
	public static readonly RULE_typeImportOnDemandDeclaration = 43;
	public static readonly RULE_singleStaticImportDeclaration = 44;
	public static readonly RULE_staticImportOnDemandDeclaration = 45;
	public static readonly RULE_topLevelClassOrInterfaceDeclaration = 46;
	public static readonly RULE_moduleDeclaration = 47;
	public static readonly RULE_moduleDirective = 48;
	public static readonly RULE_requiresModifier = 49;
	public static readonly RULE_classDeclaration = 50;
	public static readonly RULE_normalClassDeclaration = 51;
	public static readonly RULE_classModifier = 52;
	public static readonly RULE_typeParameters = 53;
	public static readonly RULE_typeParameterList = 54;
	public static readonly RULE_classExtends = 55;
	public static readonly RULE_classImplements = 56;
	public static readonly RULE_interfaceTypeList = 57;
	public static readonly RULE_classPermits = 58;
	public static readonly RULE_classBody = 59;
	public static readonly RULE_classBodyDeclaration = 60;
	public static readonly RULE_classMemberDeclaration = 61;
	public static readonly RULE_fieldDeclaration = 62;
	public static readonly RULE_fieldModifier = 63;
	public static readonly RULE_variableDeclaratorList = 64;
	public static readonly RULE_variableDeclarator = 65;
	public static readonly RULE_variableDeclaratorId = 66;
	public static readonly RULE_variableInitializer = 67;
	public static readonly RULE_unannType = 68;
	public static readonly RULE_unannPrimitiveType = 69;
	public static readonly RULE_unannReferenceType = 70;
	public static readonly RULE_unannClassOrInterfaceType = 71;
	public static readonly RULE_uCOIT = 72;
	public static readonly RULE_unannClassType = 73;
	public static readonly RULE_unannInterfaceType = 74;
	public static readonly RULE_unannTypeVariable = 75;
	public static readonly RULE_unannArrayType = 76;
	public static readonly RULE_methodDeclaration = 77;
	public static readonly RULE_methodModifier = 78;
	public static readonly RULE_methodHeader = 79;
	public static readonly RULE_result = 80;
	public static readonly RULE_methodDeclarator = 81;
	public static readonly RULE_receiverParameter = 82;
	public static readonly RULE_formalParameterList = 83;
	public static readonly RULE_formalParameter = 84;
	public static readonly RULE_variableArityParameter = 85;
	public static readonly RULE_variableModifier = 86;
	public static readonly RULE_throwsT = 87;
	public static readonly RULE_exceptionTypeList = 88;
	public static readonly RULE_exceptionType = 89;
	public static readonly RULE_methodBody = 90;
	public static readonly RULE_instanceInitializer = 91;
	public static readonly RULE_staticInitializer = 92;
	public static readonly RULE_constructorDeclaration = 93;
	public static readonly RULE_constructorModifier = 94;
	public static readonly RULE_constructorDeclarator = 95;
	public static readonly RULE_simpleTypeName = 96;
	public static readonly RULE_constructorBody = 97;
	public static readonly RULE_explicitConstructorInvocation = 98;
	public static readonly RULE_enumDeclaration = 99;
	public static readonly RULE_enumBody = 100;
	public static readonly RULE_enumConstantList = 101;
	public static readonly RULE_enumConstant = 102;
	public static readonly RULE_enumConstantModifier = 103;
	public static readonly RULE_enumBodyDeclarations = 104;
	public static readonly RULE_recordDeclaration = 105;
	public static readonly RULE_recordHeader = 106;
	public static readonly RULE_recordComponentList = 107;
	public static readonly RULE_recordComponent = 108;
	public static readonly RULE_variableArityRecordComponent = 109;
	public static readonly RULE_recordComponentModifier = 110;
	public static readonly RULE_recordBody = 111;
	public static readonly RULE_recordBodyDeclaration = 112;
	public static readonly RULE_compactConstructorDeclaration = 113;
	public static readonly RULE_interfaceDeclaration = 114;
	public static readonly RULE_normalInterfaceDeclaration = 115;
	public static readonly RULE_interfaceModifier = 116;
	public static readonly RULE_interfaceExtends = 117;
	public static readonly RULE_interfacePermits = 118;
	public static readonly RULE_interfaceBody = 119;
	public static readonly RULE_interfaceMemberDeclaration = 120;
	public static readonly RULE_constantDeclaration = 121;
	public static readonly RULE_constantModifier = 122;
	public static readonly RULE_interfaceMethodDeclaration = 123;
	public static readonly RULE_interfaceMethodModifier = 124;
	public static readonly RULE_annotationInterfaceDeclaration = 125;
	public static readonly RULE_annotationInterfaceBody = 126;
	public static readonly RULE_annotationInterfaceMemberDeclaration = 127;
	public static readonly RULE_annotationInterfaceElementDeclaration = 128;
	public static readonly RULE_annotationInterfaceElementModifier = 129;
	public static readonly RULE_defaultValue = 130;
	public static readonly RULE_annotation = 131;
	public static readonly RULE_normalAnnotation = 132;
	public static readonly RULE_elementValuePairList = 133;
	public static readonly RULE_elementValuePair = 134;
	public static readonly RULE_elementValue = 135;
	public static readonly RULE_elementValueArrayInitializer = 136;
	public static readonly RULE_elementValueList = 137;
	public static readonly RULE_markerAnnotation = 138;
	public static readonly RULE_singleElementAnnotation = 139;
	public static readonly RULE_arrayInitializer = 140;
	public static readonly RULE_variableInitializerList = 141;
	public static readonly RULE_block = 142;
	public static readonly RULE_blockStatements = 143;
	public static readonly RULE_blockStatement = 144;
	public static readonly RULE_localClassOrInterfaceDeclaration = 145;
	public static readonly RULE_localVariableDeclaration = 146;
	public static readonly RULE_localVariableType = 147;
	public static readonly RULE_localVariableDeclarationStatement = 148;
	public static readonly RULE_statement = 149;
	public static readonly RULE_statementNoShortIf = 150;
	public static readonly RULE_statementWithoutTrailingSubstatement = 151;
	public static readonly RULE_emptyStatement_ = 152;
	public static readonly RULE_labeledStatement = 153;
	public static readonly RULE_labeledStatementNoShortIf = 154;
	public static readonly RULE_expressionStatement = 155;
	public static readonly RULE_statementExpression = 156;
	public static readonly RULE_ifThenStatement = 157;
	public static readonly RULE_ifThenElseStatement = 158;
	public static readonly RULE_ifThenElseStatementNoShortIf = 159;
	public static readonly RULE_assertStatement = 160;
	public static readonly RULE_switchStatement = 161;
	public static readonly RULE_switchBlock = 162;
	public static readonly RULE_switchRule = 163;
	public static readonly RULE_switchBlockStatementGroup = 164;
	public static readonly RULE_switchLabel = 165;
	public static readonly RULE_caseConstant = 166;
	public static readonly RULE_whileStatement = 167;
	public static readonly RULE_whileStatementNoShortIf = 168;
	public static readonly RULE_doStatement = 169;
	public static readonly RULE_forStatement = 170;
	public static readonly RULE_forStatementNoShortIf = 171;
	public static readonly RULE_basicForStatement = 172;
	public static readonly RULE_basicForStatementNoShortIf = 173;
	public static readonly RULE_forInit = 174;
	public static readonly RULE_forUpdate = 175;
	public static readonly RULE_statementExpressionList = 176;
	public static readonly RULE_enhancedForStatement = 177;
	public static readonly RULE_enhancedForStatementNoShortIf = 178;
	public static readonly RULE_breakStatement = 179;
	public static readonly RULE_continueStatement = 180;
	public static readonly RULE_returnStatement = 181;
	public static readonly RULE_throwStatement = 182;
	public static readonly RULE_synchronizedStatement = 183;
	public static readonly RULE_tryStatement = 184;
	public static readonly RULE_catches = 185;
	public static readonly RULE_catchClause = 186;
	public static readonly RULE_catchFormalParameter = 187;
	public static readonly RULE_catchType = 188;
	public static readonly RULE_finallyBlock = 189;
	public static readonly RULE_tryWithResourcesStatement = 190;
	public static readonly RULE_resourceSpecification = 191;
	public static readonly RULE_resourceList = 192;
	public static readonly RULE_resource = 193;
	public static readonly RULE_variableAccess = 194;
	public static readonly RULE_yieldStatement = 195;
	public static readonly RULE_pattern = 196;
	public static readonly RULE_typePattern = 197;
	public static readonly RULE_expression = 198;
	public static readonly RULE_primary = 199;
	public static readonly RULE_primaryNoNewArray = 200;
	public static readonly RULE_pNNA = 201;
	public static readonly RULE_classLiteral = 202;
	public static readonly RULE_classInstanceCreationExpression = 203;
	public static readonly RULE_unqualifiedClassInstanceCreationExpression = 204;
	public static readonly RULE_classOrInterfaceTypeToInstantiate = 205;
	public static readonly RULE_typeArgumentsOrDiamond = 206;
	public static readonly RULE_arrayCreationExpression = 207;
	public static readonly RULE_arrayCreationExpressionWithoutInitializer = 208;
	public static readonly RULE_arrayCreationExpressionWithInitializer = 209;
	public static readonly RULE_dimExprs = 210;
	public static readonly RULE_dimExpr = 211;
	public static readonly RULE_arrayAccess = 212;
	public static readonly RULE_fieldAccess = 213;
	public static readonly RULE_methodInvocation = 214;
	public static readonly RULE_argumentList = 215;
	public static readonly RULE_methodReference = 216;
	public static readonly RULE_postfixExpression = 217;
	public static readonly RULE_pfE = 218;
	public static readonly RULE_postIncrementExpression = 219;
	public static readonly RULE_postDecrementExpression = 220;
	public static readonly RULE_unaryExpression = 221;
	public static readonly RULE_preIncrementExpression = 222;
	public static readonly RULE_preDecrementExpression = 223;
	public static readonly RULE_unaryExpressionNotPlusMinus = 224;
	public static readonly RULE_castExpression = 225;
	public static readonly RULE_multiplicativeExpression = 226;
	public static readonly RULE_additiveExpression = 227;
	public static readonly RULE_shiftExpression = 228;
	public static readonly RULE_relationalExpression = 229;
	public static readonly RULE_equalityExpression = 230;
	public static readonly RULE_andExpression = 231;
	public static readonly RULE_exclusiveOrExpression = 232;
	public static readonly RULE_inclusiveOrExpression = 233;
	public static readonly RULE_conditionalAndExpression = 234;
	public static readonly RULE_conditionalOrExpression = 235;
	public static readonly RULE_conditionalExpression = 236;
	public static readonly RULE_assignmentExpression = 237;
	public static readonly RULE_assignment = 238;
	public static readonly RULE_leftHandSide = 239;
	public static readonly RULE_assignmentOperator = 240;
	public static readonly RULE_lambdaExpression = 241;
	public static readonly RULE_lambdaParameters = 242;
	public static readonly RULE_lambdaParameterList = 243;
	public static readonly RULE_lambdaParameter = 244;
	public static readonly RULE_lambdaParameterType = 245;
	public static readonly RULE_lambdaBody = 246;
	public static readonly RULE_switchExpression = 247;
	public static readonly RULE_constantExpression = 248;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start_", "identifier", "typeIdentifier", "unqualifiedMethodIdentifier", 
		"contextualKeyword", "contextualKeywordMinusForTypeIdentifier", "contextualKeywordMinusForUnqualifiedMethodIdentifier", 
		"literal", "primitiveType", "numericType", "integralType", "floatingPointType", 
		"referenceType", "coit", "classOrInterfaceType", "classType", "interfaceType", 
		"typeVariable", "arrayType", "dims", "typeParameter", "typeParameterModifier", 
		"typeBound", "additionalBound", "typeArguments", "typeArgumentList", "typeArgument", 
		"wildcard", "wildcardBounds", "moduleName", "packageName", "typeName", 
		"packageOrTypeName", "expressionName", "methodName", "ambiguousName", 
		"compilationUnit", "ordinaryCompilationUnit", "modularCompilationUnit", 
		"packageDeclaration", "packageModifier", "importDeclaration", "singleTypeImportDeclaration", 
		"typeImportOnDemandDeclaration", "singleStaticImportDeclaration", "staticImportOnDemandDeclaration", 
		"topLevelClassOrInterfaceDeclaration", "moduleDeclaration", "moduleDirective", 
		"requiresModifier", "classDeclaration", "normalClassDeclaration", "classModifier", 
		"typeParameters", "typeParameterList", "classExtends", "classImplements", 
		"interfaceTypeList", "classPermits", "classBody", "classBodyDeclaration", 
		"classMemberDeclaration", "fieldDeclaration", "fieldModifier", "variableDeclaratorList", 
		"variableDeclarator", "variableDeclaratorId", "variableInitializer", "unannType", 
		"unannPrimitiveType", "unannReferenceType", "unannClassOrInterfaceType", 
		"uCOIT", "unannClassType", "unannInterfaceType", "unannTypeVariable", 
		"unannArrayType", "methodDeclaration", "methodModifier", "methodHeader", 
		"result", "methodDeclarator", "receiverParameter", "formalParameterList", 
		"formalParameter", "variableArityParameter", "variableModifier", "throwsT", 
		"exceptionTypeList", "exceptionType", "methodBody", "instanceInitializer", 
		"staticInitializer", "constructorDeclaration", "constructorModifier", 
		"constructorDeclarator", "simpleTypeName", "constructorBody", "explicitConstructorInvocation", 
		"enumDeclaration", "enumBody", "enumConstantList", "enumConstant", "enumConstantModifier", 
		"enumBodyDeclarations", "recordDeclaration", "recordHeader", "recordComponentList", 
		"recordComponent", "variableArityRecordComponent", "recordComponentModifier", 
		"recordBody", "recordBodyDeclaration", "compactConstructorDeclaration", 
		"interfaceDeclaration", "normalInterfaceDeclaration", "interfaceModifier", 
		"interfaceExtends", "interfacePermits", "interfaceBody", "interfaceMemberDeclaration", 
		"constantDeclaration", "constantModifier", "interfaceMethodDeclaration", 
		"interfaceMethodModifier", "annotationInterfaceDeclaration", "annotationInterfaceBody", 
		"annotationInterfaceMemberDeclaration", "annotationInterfaceElementDeclaration", 
		"annotationInterfaceElementModifier", "defaultValue", "annotation", "normalAnnotation", 
		"elementValuePairList", "elementValuePair", "elementValue", "elementValueArrayInitializer", 
		"elementValueList", "markerAnnotation", "singleElementAnnotation", "arrayInitializer", 
		"variableInitializerList", "block", "blockStatements", "blockStatement", 
		"localClassOrInterfaceDeclaration", "localVariableDeclaration", "localVariableType", 
		"localVariableDeclarationStatement", "statement", "statementNoShortIf", 
		"statementWithoutTrailingSubstatement", "emptyStatement_", "labeledStatement", 
		"labeledStatementNoShortIf", "expressionStatement", "statementExpression", 
		"ifThenStatement", "ifThenElseStatement", "ifThenElseStatementNoShortIf", 
		"assertStatement", "switchStatement", "switchBlock", "switchRule", "switchBlockStatementGroup", 
		"switchLabel", "caseConstant", "whileStatement", "whileStatementNoShortIf", 
		"doStatement", "forStatement", "forStatementNoShortIf", "basicForStatement", 
		"basicForStatementNoShortIf", "forInit", "forUpdate", "statementExpressionList", 
		"enhancedForStatement", "enhancedForStatementNoShortIf", "breakStatement", 
		"continueStatement", "returnStatement", "throwStatement", "synchronizedStatement", 
		"tryStatement", "catches", "catchClause", "catchFormalParameter", "catchType", 
		"finallyBlock", "tryWithResourcesStatement", "resourceSpecification", 
		"resourceList", "resource", "variableAccess", "yieldStatement", "pattern", 
		"typePattern", "expression", "primary", "primaryNoNewArray", "pNNA", "classLiteral", 
		"classInstanceCreationExpression", "unqualifiedClassInstanceCreationExpression", 
		"classOrInterfaceTypeToInstantiate", "typeArgumentsOrDiamond", "arrayCreationExpression", 
		"arrayCreationExpressionWithoutInitializer", "arrayCreationExpressionWithInitializer", 
		"dimExprs", "dimExpr", "arrayAccess", "fieldAccess", "methodInvocation", 
		"argumentList", "methodReference", "postfixExpression", "pfE", "postIncrementExpression", 
		"postDecrementExpression", "unaryExpression", "preIncrementExpression", 
		"preDecrementExpression", "unaryExpressionNotPlusMinus", "castExpression", 
		"multiplicativeExpression", "additiveExpression", "shiftExpression", "relationalExpression", 
		"equalityExpression", "andExpression", "exclusiveOrExpression", "inclusiveOrExpression", 
		"conditionalAndExpression", "conditionalOrExpression", "conditionalExpression", 
		"assignmentExpression", "assignment", "leftHandSide", "assignmentOperator", 
		"lambdaExpression", "lambdaParameters", "lambdaParameterList", "lambdaParameter", 
		"lambdaParameterType", "lambdaBody", "switchExpression", "constantExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'exports'", "'module'", "'non-sealed'", "'<>'", "'open'", 
		"'opens'", "'permits'", "'provides'", "'record'", "'requires'", "'sealed'", 
		"'to'", "'transitive'", "'uses'", "'var'", "'with'", "'yield'", "'abstract'", 
		"'assert'", "'boolean'", "'break'", "'byte'", "'case'", "'catch'", "'char'", 
		"'class'", "'const'", "'continue'", "'default'", "'do'", "'double'", "'else'", 
		"'enum'", "'extends'", "'final'", "'finally'", "'float'", "'for'", "'if'", 
		"'goto'", "'implements'", "'import'", "'instanceof'", "'int'", "'interface'", 
		"'long'", "'native'", "'new'", "'package'", "'private'", "'protected'", 
		"'public'", "'return'", "'short'", "'static'", "'strictfp'", "'super'", 
		"'switch'", "'synchronized'", "'this'", "'throw'", "'throws'", "'transient'", 
		"'try'", "'void'", "'volatile'", "'while'", "'_'", undefined, undefined, 
		undefined, undefined, undefined, undefined, "'null'", "'('", "')'", "'{'", 
		"'}'", "'['", "']'", "';'", "','", "'.'", "'...'", "'@'", "'::'", "'='", 
		"'>'", "'<'", "'!'", "'~'", "'?'", "':'", "'->'", "'=='", "'<='", "'>='", 
		"'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", 
		"'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", 
		"'%='", "'<<='", "'>>='", "'>>>='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EXPORTS", "MODULE", "NONSEALED", "OACA", "OPEN", "OPENS", 
		"PERMITS", "PROVIDES", "RECORD", "REQUIRES", "SEALED", "TO", "TRANSITIVE", 
		"USES", "VAR", "WITH", "YIELD", "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", 
		"BYTE", "CASE", "CATCH", "CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", 
		"DO", "DOUBLE", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", 
		"FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT", "INTERFACE", 
		"LONG", "NATIVE", "NEW", "PACKAGE", "PRIVATE", "PROTECTED", "PUBLIC", 
		"RETURN", "SHORT", "STATIC", "STRICTFP", "SUPER", "SWITCH", "SYNCHRONIZED", 
		"THIS", "THROW", "THROWS", "TRANSIENT", "TRY", "VOID", "VOLATILE", "WHILE", 
		"UNDER_SCORE", "IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral", 
		"CharacterLiteral", "StringLiteral", "TextBlock", "NullLiteral", "LPAREN", 
		"RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", 
		"ELLIPSIS", "AT", "COLONCOLON", "ASSIGN", "GT", "LT", "BANG", "TILDE", 
		"QUESTION", "COLON", "ARROW", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", 
		"OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", 
		"MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", 
		"OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", 
		"URSHIFT_ASSIGN", "Identifier", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Java20Parser._LITERAL_NAMES, Java20Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Java20Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Java20Parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return Java20Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Java20Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Java20Parser._ATN, this);
	}
	// @RuleVersion(0)
	public start_(): Start_Context {
		let _localctx: Start_Context = new Start_Context(this._ctx, this.state);
		this.enterRule(_localctx, 0, Java20Parser.RULE_start_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this.compilationUnit();
			this.state = 499;
			this.match(Java20Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Java20Parser.RULE_identifier);
		try {
			this.state = 503;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 501;
				this.match(Java20Parser.Identifier);
				}
				break;
			case Java20Parser.EXPORTS:
			case Java20Parser.MODULE:
			case Java20Parser.NONSEALED:
			case Java20Parser.OPEN:
			case Java20Parser.OPENS:
			case Java20Parser.PERMITS:
			case Java20Parser.PROVIDES:
			case Java20Parser.RECORD:
			case Java20Parser.REQUIRES:
			case Java20Parser.SEALED:
			case Java20Parser.TO:
			case Java20Parser.TRANSITIVE:
			case Java20Parser.USES:
			case Java20Parser.VAR:
			case Java20Parser.WITH:
			case Java20Parser.YIELD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 502;
				this.contextualKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeIdentifier(): TypeIdentifierContext {
		let _localctx: TypeIdentifierContext = new TypeIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Java20Parser.RULE_typeIdentifier);
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 505;
				this.match(Java20Parser.Identifier);
				}
				break;
			case Java20Parser.EXPORTS:
			case Java20Parser.MODULE:
			case Java20Parser.NONSEALED:
			case Java20Parser.OPEN:
			case Java20Parser.OPENS:
			case Java20Parser.PROVIDES:
			case Java20Parser.REQUIRES:
			case Java20Parser.TO:
			case Java20Parser.TRANSITIVE:
			case Java20Parser.USES:
			case Java20Parser.WITH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 506;
				this.contextualKeywordMinusForTypeIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unqualifiedMethodIdentifier(): UnqualifiedMethodIdentifierContext {
		let _localctx: UnqualifiedMethodIdentifierContext = new UnqualifiedMethodIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Java20Parser.RULE_unqualifiedMethodIdentifier);
		try {
			this.state = 511;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.match(Java20Parser.Identifier);
				}
				break;
			case Java20Parser.EXPORTS:
			case Java20Parser.MODULE:
			case Java20Parser.NONSEALED:
			case Java20Parser.OPEN:
			case Java20Parser.OPENS:
			case Java20Parser.PERMITS:
			case Java20Parser.PROVIDES:
			case Java20Parser.RECORD:
			case Java20Parser.REQUIRES:
			case Java20Parser.SEALED:
			case Java20Parser.TO:
			case Java20Parser.TRANSITIVE:
			case Java20Parser.USES:
			case Java20Parser.VAR:
			case Java20Parser.WITH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 510;
				this.contextualKeywordMinusForUnqualifiedMethodIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contextualKeyword(): ContextualKeywordContext {
		let _localctx: ContextualKeywordContext = new ContextualKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Java20Parser.RULE_contextualKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contextualKeywordMinusForTypeIdentifier(): ContextualKeywordMinusForTypeIdentifierContext {
		let _localctx: ContextualKeywordMinusForTypeIdentifierContext = new ContextualKeywordMinusForTypeIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Java20Parser.RULE_contextualKeywordMinusForTypeIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.WITH))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contextualKeywordMinusForUnqualifiedMethodIdentifier(): ContextualKeywordMinusForUnqualifiedMethodIdentifierContext {
		let _localctx: ContextualKeywordMinusForUnqualifiedMethodIdentifierContext = new ContextualKeywordMinusForUnqualifiedMethodIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Java20Parser.RULE_contextualKeywordMinusForUnqualifiedMethodIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Java20Parser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			_la = this._input.LA(1);
			if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Java20Parser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 521;
				this.annotation();
				}
				}
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 529;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.BYTE:
			case Java20Parser.CHAR:
			case Java20Parser.DOUBLE:
			case Java20Parser.FLOAT:
			case Java20Parser.INT:
			case Java20Parser.LONG:
			case Java20Parser.SHORT:
				{
				this.state = 527;
				this.numericType();
				}
				break;
			case Java20Parser.BOOLEAN:
				{
				this.state = 528;
				this.match(Java20Parser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericType(): NumericTypeContext {
		let _localctx: NumericTypeContext = new NumericTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Java20Parser.RULE_numericType);
		try {
			this.state = 533;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.BYTE:
			case Java20Parser.CHAR:
			case Java20Parser.INT:
			case Java20Parser.LONG:
			case Java20Parser.SHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 531;
				this.integralType();
				}
				break;
			case Java20Parser.DOUBLE:
			case Java20Parser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 532;
				this.floatingPointType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integralType(): IntegralTypeContext {
		let _localctx: IntegralTypeContext = new IntegralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Java20Parser.RULE_integralType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			_la = this._input.LA(1);
			if (!(_la === Java20Parser.BYTE || _la === Java20Parser.CHAR || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (Java20Parser.INT - 44)) | (1 << (Java20Parser.LONG - 44)) | (1 << (Java20Parser.SHORT - 44)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatingPointType(): FloatingPointTypeContext {
		let _localctx: FloatingPointTypeContext = new FloatingPointTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Java20Parser.RULE_floatingPointType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			_la = this._input.LA(1);
			if (!(_la === Java20Parser.DOUBLE || _la === Java20Parser.FLOAT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceType(): ReferenceTypeContext {
		let _localctx: ReferenceTypeContext = new ReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Java20Parser.RULE_referenceType);
		try {
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 539;
				this.classOrInterfaceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 540;
				this.typeVariable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 541;
				this.arrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coit(): CoitContext {
		let _localctx: CoitContext = new CoitContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Java20Parser.RULE_coit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this.match(Java20Parser.DOT);
			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 545;
				this.annotation();
				}
				}
				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 551;
			this.typeIdentifier();
			this.state = 553;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 552;
				this.typeArguments();
				}
				break;
			}
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 555;
				this.coit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Java20Parser.RULE_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 558;
				this.packageName();
				this.state = 559;
				this.match(Java20Parser.DOT);
				}
				break;
			}
			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 563;
				this.annotation();
				}
				}
				this.state = 568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 569;
			this.typeIdentifier();
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 570;
				this.typeArguments();
				}
				break;
			}
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 573;
				this.coit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Java20Parser.RULE_classType);
		let _la: number;
		try {
			this.state = 610;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.AT) {
					{
					{
					this.state = 576;
					this.annotation();
					}
					}
					this.state = 581;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 582;
				this.typeIdentifier();
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 583;
					this.typeArguments();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 586;
				this.packageName();
				this.state = 587;
				this.match(Java20Parser.DOT);
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.AT) {
					{
					{
					this.state = 588;
					this.annotation();
					}
					}
					this.state = 593;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 594;
				this.typeIdentifier();
				this.state = 596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 595;
					this.typeArguments();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 598;
				this.classOrInterfaceType();
				this.state = 599;
				this.match(Java20Parser.DOT);
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.AT) {
					{
					{
					this.state = 600;
					this.annotation();
					}
					}
					this.state = 605;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 606;
				this.typeIdentifier();
				this.state = 608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 607;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceType(): InterfaceTypeContext {
		let _localctx: InterfaceTypeContext = new InterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Java20Parser.RULE_interfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeVariable(): TypeVariableContext {
		let _localctx: TypeVariableContext = new TypeVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Java20Parser.RULE_typeVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 614;
				this.annotation();
				}
				}
				this.state = 619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 620;
			this.typeIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Java20Parser.RULE_arrayType);
		try {
			this.state = 631;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 622;
				this.primitiveType();
				this.state = 623;
				this.dims();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 625;
				this.classType();
				this.state = 626;
				this.dims();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 628;
				this.typeVariable();
				this.state = 629;
				this.dims();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dims(): DimsContext {
		let _localctx: DimsContext = new DimsContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Java20Parser.RULE_dims);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 633;
				this.annotation();
				}
				}
				this.state = 638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 639;
			this.match(Java20Parser.LBRACK);
			this.state = 640;
			this.match(Java20Parser.RBRACK);
			this.state = 651;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 644;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Java20Parser.AT) {
						{
						{
						this.state = 641;
						this.annotation();
						}
						}
						this.state = 646;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 647;
					this.match(Java20Parser.LBRACK);
					this.state = 648;
					this.match(Java20Parser.RBRACK);
					}
					}
				}
				this.state = 653;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Java20Parser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 654;
				this.typeParameterModifier();
				}
				}
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 660;
			this.typeIdentifier();
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.EXTENDS) {
				{
				this.state = 661;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterModifier(): TypeParameterModifierContext {
		let _localctx: TypeParameterModifierContext = new TypeParameterModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Java20Parser.RULE_typeParameterModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Java20Parser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			this.match(Java20Parser.EXTENDS);
			this.state = 675;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 667;
				this.typeVariable();
				}
				break;

			case 2:
				{
				this.state = 668;
				this.classOrInterfaceType();
				this.state = 672;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.BITAND) {
					{
					{
					this.state = 669;
					this.additionalBound();
					}
					}
					this.state = 674;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additionalBound(): AdditionalBoundContext {
		let _localctx: AdditionalBoundContext = new AdditionalBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Java20Parser.RULE_additionalBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 677;
			this.match(Java20Parser.BITAND);
			this.state = 678;
			this.interfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Java20Parser.RULE_typeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this.match(Java20Parser.LT);
			this.state = 681;
			this.typeArgumentList();
			this.state = 682;
			this.match(Java20Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentList(): TypeArgumentListContext {
		let _localctx: TypeArgumentListContext = new TypeArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Java20Parser.RULE_typeArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.typeArgument();
			this.state = 689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.COMMA) {
				{
				{
				this.state = 685;
				this.match(Java20Parser.COMMA);
				this.state = 686;
				this.typeArgument();
				}
				}
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Java20Parser.RULE_typeArgument);
		try {
			this.state = 694;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 692;
				this.referenceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 693;
				this.wildcard();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wildcard(): WildcardContext {
		let _localctx: WildcardContext = new WildcardContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Java20Parser.RULE_wildcard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 696;
				this.annotation();
				}
				}
				this.state = 701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 702;
			this.match(Java20Parser.QUESTION);
			this.state = 704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.EXTENDS || _la === Java20Parser.SUPER) {
				{
				this.state = 703;
				this.wildcardBounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wildcardBounds(): WildcardBoundsContext {
		let _localctx: WildcardBoundsContext = new WildcardBoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Java20Parser.RULE_wildcardBounds);
		try {
			this.state = 710;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.EXTENDS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 706;
				this.match(Java20Parser.EXTENDS);
				this.state = 707;
				this.referenceType();
				}
				break;
			case Java20Parser.SUPER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 708;
				this.match(Java20Parser.SUPER);
				this.state = 709;
				this.referenceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleName(): ModuleNameContext {
		let _localctx: ModuleNameContext = new ModuleNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Java20Parser.RULE_moduleName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.identifier();
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.DOT) {
				{
				this.state = 713;
				this.match(Java20Parser.DOT);
				this.state = 714;
				this.moduleName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageName(): PackageNameContext {
		let _localctx: PackageNameContext = new PackageNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Java20Parser.RULE_packageName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.identifier();
			this.state = 720;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 718;
				this.match(Java20Parser.DOT);
				this.state = 719;
				this.packageName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Java20Parser.RULE_typeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 722;
			this.packageName();
			this.state = 725;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 723;
				this.match(Java20Parser.DOT);
				this.state = 724;
				this.typeIdentifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageOrTypeName(): PackageOrTypeNameContext {
		let _localctx: PackageOrTypeNameContext = new PackageOrTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Java20Parser.RULE_packageOrTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this.identifier();
			this.state = 730;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 728;
				this.match(Java20Parser.DOT);
				this.state = 729;
				this.packageOrTypeName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionName(): ExpressionNameContext {
		let _localctx: ExpressionNameContext = new ExpressionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Java20Parser.RULE_expressionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 732;
				this.ambiguousName();
				this.state = 733;
				this.match(Java20Parser.DOT);
				}
				break;
			}
			this.state = 737;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodName(): MethodNameContext {
		let _localctx: MethodNameContext = new MethodNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Java20Parser.RULE_methodName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			this.unqualifiedMethodIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ambiguousName(): AmbiguousNameContext {
		let _localctx: AmbiguousNameContext = new AmbiguousNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Java20Parser.RULE_ambiguousName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.identifier();
			this.state = 744;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 742;
				this.match(Java20Parser.DOT);
				this.state = 743;
				this.ambiguousName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Java20Parser.RULE_compilationUnit);
		try {
			this.state = 748;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 746;
				this.ordinaryCompilationUnit();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 747;
				this.modularCompilationUnit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ordinaryCompilationUnit(): OrdinaryCompilationUnitContext {
		let _localctx: OrdinaryCompilationUnitContext = new OrdinaryCompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Java20Parser.RULE_ordinaryCompilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 750;
				this.packageDeclaration();
				}
				break;
			}
			this.state = 756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.IMPORT) {
				{
				{
				this.state = 753;
				this.importDeclaration();
				}
				}
				this.state = 758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.NONSEALED) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.ABSTRACT) | (1 << Java20Parser.CLASS))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java20Parser.ENUM - 33)) | (1 << (Java20Parser.FINAL - 33)) | (1 << (Java20Parser.INTERFACE - 33)) | (1 << (Java20Parser.PRIVATE - 33)) | (1 << (Java20Parser.PROTECTED - 33)) | (1 << (Java20Parser.PUBLIC - 33)) | (1 << (Java20Parser.STATIC - 33)) | (1 << (Java20Parser.STRICTFP - 33)))) !== 0) || _la === Java20Parser.SEMI || _la === Java20Parser.AT) {
				{
				{
				this.state = 759;
				this.topLevelClassOrInterfaceDeclaration();
				}
				}
				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modularCompilationUnit(): ModularCompilationUnitContext {
		let _localctx: ModularCompilationUnitContext = new ModularCompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Java20Parser.RULE_modularCompilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.IMPORT) {
				{
				{
				this.state = 765;
				this.importDeclaration();
				}
				}
				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 771;
			this.moduleDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Java20Parser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 773;
				this.packageModifier();
				}
				}
				this.state = 778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 779;
			this.match(Java20Parser.PACKAGE);
			this.state = 780;
			this.identifier();
			this.state = 785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.DOT) {
				{
				{
				this.state = 781;
				this.match(Java20Parser.DOT);
				this.state = 782;
				this.identifier();
				}
				}
				this.state = 787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 788;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageModifier(): PackageModifierContext {
		let _localctx: PackageModifierContext = new PackageModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Java20Parser.RULE_packageModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Java20Parser.RULE_importDeclaration);
		try {
			this.state = 796;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 792;
				this.singleTypeImportDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 793;
				this.typeImportOnDemandDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 794;
				this.singleStaticImportDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 795;
				this.staticImportOnDemandDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext {
		let _localctx: SingleTypeImportDeclarationContext = new SingleTypeImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Java20Parser.RULE_singleTypeImportDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 798;
			this.match(Java20Parser.IMPORT);
			this.state = 799;
			this.typeName();
			this.state = 800;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext {
		let _localctx: TypeImportOnDemandDeclarationContext = new TypeImportOnDemandDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Java20Parser.RULE_typeImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 802;
			this.match(Java20Parser.IMPORT);
			this.state = 803;
			this.packageOrTypeName();
			this.state = 804;
			this.match(Java20Parser.DOT);
			this.state = 805;
			this.match(Java20Parser.MUL);
			this.state = 806;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext {
		let _localctx: SingleStaticImportDeclarationContext = new SingleStaticImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Java20Parser.RULE_singleStaticImportDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
			this.match(Java20Parser.IMPORT);
			this.state = 809;
			this.match(Java20Parser.STATIC);
			this.state = 810;
			this.typeName();
			this.state = 811;
			this.match(Java20Parser.DOT);
			this.state = 812;
			this.identifier();
			this.state = 813;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext {
		let _localctx: StaticImportOnDemandDeclarationContext = new StaticImportOnDemandDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Java20Parser.RULE_staticImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.match(Java20Parser.IMPORT);
			this.state = 816;
			this.match(Java20Parser.STATIC);
			this.state = 817;
			this.typeName();
			this.state = 818;
			this.match(Java20Parser.DOT);
			this.state = 819;
			this.match(Java20Parser.MUL);
			this.state = 820;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topLevelClassOrInterfaceDeclaration(): TopLevelClassOrInterfaceDeclarationContext {
		let _localctx: TopLevelClassOrInterfaceDeclarationContext = new TopLevelClassOrInterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Java20Parser.RULE_topLevelClassOrInterfaceDeclaration);
		try {
			this.state = 825;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 822;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 823;
				this.interfaceDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 824;
				this.match(Java20Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDeclaration(): ModuleDeclarationContext {
		let _localctx: ModuleDeclarationContext = new ModuleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Java20Parser.RULE_moduleDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 827;
				this.annotation();
				}
				}
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.OPEN) {
				{
				this.state = 833;
				this.match(Java20Parser.OPEN);
				}
			}

			this.state = 836;
			this.match(Java20Parser.MODULE);
			this.state = 837;
			this.identifier();
			this.state = 842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.DOT) {
				{
				{
				this.state = 838;
				this.match(Java20Parser.DOT);
				this.state = 839;
				this.identifier();
				}
				}
				this.state = 844;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 845;
			this.match(Java20Parser.LBRACE);
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.USES))) !== 0)) {
				{
				{
				this.state = 846;
				this.moduleDirective();
				}
				}
				this.state = 851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 852;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDirective(): ModuleDirectiveContext {
		let _localctx: ModuleDirectiveContext = new ModuleDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Java20Parser.RULE_moduleDirective);
		let _la: number;
		try {
			let _alt: number;
			this.state = 911;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.REQUIRES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 854;
				this.match(Java20Parser.REQUIRES);
				this.state = 858;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 855;
						this.requiresModifier();
						}
						}
					}
					this.state = 860;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				}
				this.state = 861;
				this.moduleName();
				this.state = 862;
				this.match(Java20Parser.SEMI);
				}
				break;
			case Java20Parser.EXPORTS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 864;
				this.match(Java20Parser.EXPORTS);
				this.state = 865;
				this.packageName();
				this.state = 875;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.TO) {
					{
					this.state = 866;
					this.match(Java20Parser.TO);
					this.state = 867;
					this.moduleName();
					this.state = 872;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Java20Parser.COMMA) {
						{
						{
						this.state = 868;
						this.match(Java20Parser.COMMA);
						this.state = 869;
						this.moduleName();
						}
						}
						this.state = 874;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 877;
				this.match(Java20Parser.SEMI);
				}
				break;
			case Java20Parser.OPENS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 879;
				this.match(Java20Parser.OPENS);
				this.state = 880;
				this.packageName();
				this.state = 890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.TO) {
					{
					this.state = 881;
					this.match(Java20Parser.TO);
					this.state = 882;
					this.moduleName();
					this.state = 887;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Java20Parser.COMMA) {
						{
						{
						this.state = 883;
						this.match(Java20Parser.COMMA);
						this.state = 884;
						this.moduleName();
						}
						}
						this.state = 889;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 892;
				this.match(Java20Parser.SEMI);
				}
				break;
			case Java20Parser.USES:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 894;
				this.match(Java20Parser.USES);
				this.state = 895;
				this.typeName();
				this.state = 896;
				this.match(Java20Parser.SEMI);
				}
				break;
			case Java20Parser.PROVIDES:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 898;
				this.match(Java20Parser.PROVIDES);
				this.state = 899;
				this.typeName();
				this.state = 900;
				this.match(Java20Parser.WITH);
				this.state = 901;
				this.typeName();
				this.state = 906;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.COMMA) {
					{
					{
					this.state = 902;
					this.match(Java20Parser.COMMA);
					this.state = 903;
					this.typeName();
					}
					}
					this.state = 908;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 909;
				this.match(Java20Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requiresModifier(): RequiresModifierContext {
		let _localctx: RequiresModifierContext = new RequiresModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Java20Parser.RULE_requiresModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 913;
			_la = this._input.LA(1);
			if (!(_la === Java20Parser.TRANSITIVE || _la === Java20Parser.STATIC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Java20Parser.RULE_classDeclaration);
		try {
			this.state = 918;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 915;
				this.normalClassDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 916;
				this.enumDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 917;
				this.recordDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalClassDeclaration(): NormalClassDeclarationContext {
		let _localctx: NormalClassDeclarationContext = new NormalClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Java20Parser.RULE_normalClassDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.NONSEALED) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.ABSTRACT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java20Parser.FINAL - 35)) | (1 << (Java20Parser.PRIVATE - 35)) | (1 << (Java20Parser.PROTECTED - 35)) | (1 << (Java20Parser.PUBLIC - 35)) | (1 << (Java20Parser.STATIC - 35)) | (1 << (Java20Parser.STRICTFP - 35)))) !== 0) || _la === Java20Parser.AT) {
				{
				{
				this.state = 920;
				this.classModifier();
				}
				}
				this.state = 925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 926;
			this.match(Java20Parser.CLASS);
			this.state = 927;
			this.typeIdentifier();
			this.state = 929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.LT) {
				{
				this.state = 928;
				this.typeParameters();
				}
			}

			this.state = 932;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.EXTENDS) {
				{
				this.state = 931;
				this.classExtends();
				}
			}

			this.state = 935;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.IMPLEMENTS) {
				{
				this.state = 934;
				this.classImplements();
				}
			}

			this.state = 938;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.PERMITS) {
				{
				this.state = 937;
				this.classPermits();
				}
			}

			this.state = 940;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classModifier(): ClassModifierContext {
		let _localctx: ClassModifierContext = new ClassModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Java20Parser.RULE_classModifier);
		try {
			this.state = 952;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 942;
				this.annotation();
				}
				break;
			case Java20Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 943;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case Java20Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 944;
				this.match(Java20Parser.PROTECTED);
				}
				break;
			case Java20Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 945;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			case Java20Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 946;
				this.match(Java20Parser.ABSTRACT);
				}
				break;
			case Java20Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 947;
				this.match(Java20Parser.STATIC);
				}
				break;
			case Java20Parser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 948;
				this.match(Java20Parser.FINAL);
				}
				break;
			case Java20Parser.SEALED:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 949;
				this.match(Java20Parser.SEALED);
				}
				break;
			case Java20Parser.NONSEALED:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 950;
				this.match(Java20Parser.NONSEALED);
				}
				break;
			case Java20Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 951;
				this.match(Java20Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Java20Parser.RULE_typeParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.match(Java20Parser.LT);
			this.state = 955;
			this.typeParameterList();
			this.state = 956;
			this.match(Java20Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterList(): TypeParameterListContext {
		let _localctx: TypeParameterListContext = new TypeParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Java20Parser.RULE_typeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 958;
			this.typeParameter();
			this.state = 963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.COMMA) {
				{
				{
				this.state = 959;
				this.match(Java20Parser.COMMA);
				this.state = 960;
				this.typeParameter();
				}
				}
				this.state = 965;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classExtends(): ClassExtendsContext {
		let _localctx: ClassExtendsContext = new ClassExtendsContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Java20Parser.RULE_classExtends);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 966;
			this.match(Java20Parser.EXTENDS);
			this.state = 967;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classImplements(): ClassImplementsContext {
		let _localctx: ClassImplementsContext = new ClassImplementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Java20Parser.RULE_classImplements);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this.match(Java20Parser.IMPLEMENTS);
			this.state = 970;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceTypeList(): InterfaceTypeListContext {
		let _localctx: InterfaceTypeListContext = new InterfaceTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Java20Parser.RULE_interfaceTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			this.interfaceType();
			this.state = 977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.COMMA) {
				{
				{
				this.state = 973;
				this.match(Java20Parser.COMMA);
				this.state = 974;
				this.interfaceType();
				}
				}
				this.state = 979;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classPermits(): ClassPermitsContext {
		let _localctx: ClassPermitsContext = new ClassPermitsContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Java20Parser.RULE_classPermits);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 980;
			this.match(Java20Parser.PERMITS);
			this.state = 981;
			this.typeName();
			this.state = 986;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.COMMA) {
				{
				{
				this.state = 982;
				this.match(Java20Parser.COMMA);
				this.state = 983;
				this.typeName();
				}
				}
				this.state = 988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Java20Parser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 989;
			this.match(Java20Parser.LBRACE);
			this.state = 993;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.ABSTRACT) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.CLASS) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java20Parser.ENUM - 33)) | (1 << (Java20Parser.FINAL - 33)) | (1 << (Java20Parser.FLOAT - 33)) | (1 << (Java20Parser.INT - 33)) | (1 << (Java20Parser.INTERFACE - 33)) | (1 << (Java20Parser.LONG - 33)) | (1 << (Java20Parser.NATIVE - 33)) | (1 << (Java20Parser.PRIVATE - 33)) | (1 << (Java20Parser.PROTECTED - 33)) | (1 << (Java20Parser.PUBLIC - 33)) | (1 << (Java20Parser.SHORT - 33)) | (1 << (Java20Parser.STATIC - 33)) | (1 << (Java20Parser.STRICTFP - 33)) | (1 << (Java20Parser.SYNCHRONIZED - 33)) | (1 << (Java20Parser.TRANSIENT - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Java20Parser.VOID - 65)) | (1 << (Java20Parser.VOLATILE - 65)) | (1 << (Java20Parser.LBRACE - 65)) | (1 << (Java20Parser.SEMI - 65)) | (1 << (Java20Parser.AT - 65)) | (1 << (Java20Parser.LT - 65)))) !== 0) || _la === Java20Parser.Identifier) {
				{
				{
				this.state = 990;
				this.classBodyDeclaration();
				}
				}
				this.state = 995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 996;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Java20Parser.RULE_classBodyDeclaration);
		try {
			this.state = 1002;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 998;
				this.classMemberDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 999;
				this.instanceInitializer();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1000;
				this.staticInitializer();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1001;
				this.constructorDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMemberDeclaration(): ClassMemberDeclarationContext {
		let _localctx: ClassMemberDeclarationContext = new ClassMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Java20Parser.RULE_classMemberDeclaration);
		try {
			this.state = 1009;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1004;
				this.fieldDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1005;
				this.methodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1006;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1007;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1008;
				this.match(Java20Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Java20Parser.RULE_fieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1014;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java20Parser.FINAL - 35)) | (1 << (Java20Parser.PRIVATE - 35)) | (1 << (Java20Parser.PROTECTED - 35)) | (1 << (Java20Parser.PUBLIC - 35)) | (1 << (Java20Parser.STATIC - 35)) | (1 << (Java20Parser.TRANSIENT - 35)) | (1 << (Java20Parser.VOLATILE - 35)))) !== 0) || _la === Java20Parser.AT) {
				{
				{
				this.state = 1011;
				this.fieldModifier();
				}
				}
				this.state = 1016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1017;
			this.unannType();
			this.state = 1018;
			this.variableDeclaratorList();
			this.state = 1019;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldModifier(): FieldModifierContext {
		let _localctx: FieldModifierContext = new FieldModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Java20Parser.RULE_fieldModifier);
		try {
			this.state = 1029;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1021;
				this.annotation();
				}
				break;
			case Java20Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1022;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case Java20Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1023;
				this.match(Java20Parser.PROTECTED);
				}
				break;
			case Java20Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1024;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			case Java20Parser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1025;
				this.match(Java20Parser.STATIC);
				}
				break;
			case Java20Parser.FINAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1026;
				this.match(Java20Parser.FINAL);
				}
				break;
			case Java20Parser.TRANSIENT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1027;
				this.match(Java20Parser.TRANSIENT);
				}
				break;
			case Java20Parser.VOLATILE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1028;
				this.match(Java20Parser.VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorList(): VariableDeclaratorListContext {
		let _localctx: VariableDeclaratorListContext = new VariableDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Java20Parser.RULE_variableDeclaratorList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1031;
			this.variableDeclarator();
			this.state = 1036;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1032;
					this.match(Java20Parser.COMMA);
					this.state = 1033;
					this.variableDeclarator();
					}
					}
				}
				this.state = 1038;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Java20Parser.RULE_variableDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1039;
			this.variableDeclaratorId();
			this.state = 1042;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 1040;
				this.match(Java20Parser.ASSIGN);
				this.state = 1041;
				this.variableInitializer();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Java20Parser.RULE_variableDeclaratorId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this.identifier();
			this.state = 1046;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 1045;
				this.dims();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Java20Parser.RULE_variableInitializer);
		try {
			this.state = 1050;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.EXPORTS:
			case Java20Parser.MODULE:
			case Java20Parser.NONSEALED:
			case Java20Parser.OPEN:
			case Java20Parser.OPENS:
			case Java20Parser.PERMITS:
			case Java20Parser.PROVIDES:
			case Java20Parser.RECORD:
			case Java20Parser.REQUIRES:
			case Java20Parser.SEALED:
			case Java20Parser.TO:
			case Java20Parser.TRANSITIVE:
			case Java20Parser.USES:
			case Java20Parser.VAR:
			case Java20Parser.WITH:
			case Java20Parser.YIELD:
			case Java20Parser.BOOLEAN:
			case Java20Parser.BYTE:
			case Java20Parser.CHAR:
			case Java20Parser.DOUBLE:
			case Java20Parser.FLOAT:
			case Java20Parser.INT:
			case Java20Parser.LONG:
			case Java20Parser.NEW:
			case Java20Parser.SHORT:
			case Java20Parser.SUPER:
			case Java20Parser.SWITCH:
			case Java20Parser.THIS:
			case Java20Parser.VOID:
			case Java20Parser.IntegerLiteral:
			case Java20Parser.FloatingPointLiteral:
			case Java20Parser.BooleanLiteral:
			case Java20Parser.CharacterLiteral:
			case Java20Parser.StringLiteral:
			case Java20Parser.TextBlock:
			case Java20Parser.NullLiteral:
			case Java20Parser.LPAREN:
			case Java20Parser.AT:
			case Java20Parser.BANG:
			case Java20Parser.TILDE:
			case Java20Parser.INC:
			case Java20Parser.DEC:
			case Java20Parser.ADD:
			case Java20Parser.SUB:
			case Java20Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1048;
				this.expression();
				}
				break;
			case Java20Parser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1049;
				this.arrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannType(): UnannTypeContext {
		let _localctx: UnannTypeContext = new UnannTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Java20Parser.RULE_unannType);
		try {
			this.state = 1054;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1052;
				this.unannPrimitiveType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1053;
				this.unannReferenceType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		let _localctx: UnannPrimitiveTypeContext = new UnannPrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Java20Parser.RULE_unannPrimitiveType);
		try {
			this.state = 1058;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.BYTE:
			case Java20Parser.CHAR:
			case Java20Parser.DOUBLE:
			case Java20Parser.FLOAT:
			case Java20Parser.INT:
			case Java20Parser.LONG:
			case Java20Parser.SHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1056;
				this.numericType();
				}
				break;
			case Java20Parser.BOOLEAN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1057;
				this.match(Java20Parser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannReferenceType(): UnannReferenceTypeContext {
		let _localctx: UnannReferenceTypeContext = new UnannReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Java20Parser.RULE_unannReferenceType);
		try {
			this.state = 1063;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1060;
				this.unannClassOrInterfaceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1061;
				this.unannTypeVariable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1062;
				this.unannArrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		let _localctx: UnannClassOrInterfaceTypeContext = new UnannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Java20Parser.RULE_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1073;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 1065;
				this.packageName();
				this.state = 1066;
				this.match(Java20Parser.DOT);
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.AT) {
					{
					{
					this.state = 1067;
					this.annotation();
					}
					}
					this.state = 1072;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 1075;
			this.typeIdentifier();
			this.state = 1077;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 1076;
				this.typeArguments();
				}
				break;
			}
			this.state = 1080;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 1079;
				this.uCOIT();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uCOIT(): UCOITContext {
		let _localctx: UCOITContext = new UCOITContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Java20Parser.RULE_uCOIT);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			this.match(Java20Parser.DOT);
			this.state = 1086;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 1083;
				this.annotation();
				}
				}
				this.state = 1088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1089;
			this.typeIdentifier();
			this.state = 1091;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 1090;
				this.typeArguments();
				}
				break;
			}
			this.state = 1094;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 1093;
				this.uCOIT();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannClassType(): UnannClassTypeContext {
		let _localctx: UnannClassTypeContext = new UnannClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Java20Parser.RULE_unannClassType);
		let _la: number;
		try {
			this.state = 1115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1096;
				this.typeIdentifier();
				this.state = 1098;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 1097;
					this.typeArguments();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1102;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 1100;
					this.packageName();
					}
					break;

				case 2:
					{
					this.state = 1101;
					this.unannClassOrInterfaceType();
					}
					break;
				}
				this.state = 1104;
				this.match(Java20Parser.DOT);
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.AT) {
					{
					{
					this.state = 1105;
					this.annotation();
					}
					}
					this.state = 1110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1111;
				this.typeIdentifier();
				this.state = 1113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 1112;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannInterfaceType(): UnannInterfaceTypeContext {
		let _localctx: UnannInterfaceTypeContext = new UnannInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Java20Parser.RULE_unannInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1117;
			this.unannClassType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannTypeVariable(): UnannTypeVariableContext {
		let _localctx: UnannTypeVariableContext = new UnannTypeVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Java20Parser.RULE_unannTypeVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1119;
			this.typeIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannArrayType(): UnannArrayTypeContext {
		let _localctx: UnannArrayTypeContext = new UnannArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Java20Parser.RULE_unannArrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 1121;
				this.unannPrimitiveType();
				}
				break;

			case 2:
				{
				this.state = 1122;
				this.unannClassOrInterfaceType();
				}
				break;

			case 3:
				{
				this.state = 1123;
				this.unannTypeVariable();
				}
				break;
			}
			this.state = 1126;
			this.dims();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Java20Parser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.ABSTRACT || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java20Parser.FINAL - 35)) | (1 << (Java20Parser.NATIVE - 35)) | (1 << (Java20Parser.PRIVATE - 35)) | (1 << (Java20Parser.PROTECTED - 35)) | (1 << (Java20Parser.PUBLIC - 35)) | (1 << (Java20Parser.STATIC - 35)) | (1 << (Java20Parser.STRICTFP - 35)) | (1 << (Java20Parser.SYNCHRONIZED - 35)))) !== 0) || _la === Java20Parser.AT) {
				{
				{
				this.state = 1128;
				this.methodModifier();
				}
				}
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1134;
			this.methodHeader();
			this.state = 1135;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodModifier(): MethodModifierContext {
		let _localctx: MethodModifierContext = new MethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Java20Parser.RULE_methodModifier);
		try {
			this.state = 1147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1137;
				this.annotation();
				}
				break;
			case Java20Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1138;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case Java20Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1139;
				this.match(Java20Parser.PROTECTED);
				}
				break;
			case Java20Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1140;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			case Java20Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1141;
				this.match(Java20Parser.ABSTRACT);
				}
				break;
			case Java20Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1142;
				this.match(Java20Parser.STATIC);
				}
				break;
			case Java20Parser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1143;
				this.match(Java20Parser.FINAL);
				}
				break;
			case Java20Parser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1144;
				this.match(Java20Parser.SYNCHRONIZED);
				}
				break;
			case Java20Parser.NATIVE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1145;
				this.match(Java20Parser.NATIVE);
				}
				break;
			case Java20Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1146;
				this.match(Java20Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodHeader(): MethodHeaderContext {
		let _localctx: MethodHeaderContext = new MethodHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Java20Parser.RULE_methodHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.LT) {
				{
				this.state = 1149;
				this.typeParameters();
				this.state = 1153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.AT) {
					{
					{
					this.state = 1150;
					this.annotation();
					}
					}
					this.state = 1155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1158;
			this.result();
			this.state = 1159;
			this.methodDeclarator();
			this.state = 1161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.THROWS) {
				{
				this.state = 1160;
				this.throwsT();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Java20Parser.RULE_result);
		try {
			this.state = 1165;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.EXPORTS:
			case Java20Parser.MODULE:
			case Java20Parser.NONSEALED:
			case Java20Parser.OPEN:
			case Java20Parser.OPENS:
			case Java20Parser.PERMITS:
			case Java20Parser.PROVIDES:
			case Java20Parser.RECORD:
			case Java20Parser.REQUIRES:
			case Java20Parser.SEALED:
			case Java20Parser.TO:
			case Java20Parser.TRANSITIVE:
			case Java20Parser.USES:
			case Java20Parser.VAR:
			case Java20Parser.WITH:
			case Java20Parser.YIELD:
			case Java20Parser.BOOLEAN:
			case Java20Parser.BYTE:
			case Java20Parser.CHAR:
			case Java20Parser.DOUBLE:
			case Java20Parser.FLOAT:
			case Java20Parser.INT:
			case Java20Parser.LONG:
			case Java20Parser.SHORT:
			case Java20Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1163;
				this.unannType();
				}
				break;
			case Java20Parser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1164;
				this.match(Java20Parser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclarator(): MethodDeclaratorContext {
		let _localctx: MethodDeclaratorContext = new MethodDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Java20Parser.RULE_methodDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1167;
			this.identifier();
			this.state = 1168;
			this.match(Java20Parser.LPAREN);
			this.state = 1172;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 1169;
				this.receiverParameter();
				this.state = 1170;
				this.match(Java20Parser.COMMA);
				}
				break;
			}
			this.state = 1175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java20Parser.FINAL - 35)) | (1 << (Java20Parser.FLOAT - 35)) | (1 << (Java20Parser.INT - 35)) | (1 << (Java20Parser.LONG - 35)) | (1 << (Java20Parser.SHORT - 35)))) !== 0) || _la === Java20Parser.AT || _la === Java20Parser.Identifier) {
				{
				this.state = 1174;
				this.formalParameterList();
				}
			}

			this.state = 1177;
			this.match(Java20Parser.RPAREN);
			this.state = 1179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.LBRACK || _la === Java20Parser.AT) {
				{
				this.state = 1178;
				this.dims();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiverParameter(): ReceiverParameterContext {
		let _localctx: ReceiverParameterContext = new ReceiverParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, Java20Parser.RULE_receiverParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 1181;
				this.annotation();
				}
				}
				this.state = 1186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1187;
			this.unannType();
			this.state = 1191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD))) !== 0) || _la === Java20Parser.Identifier) {
				{
				this.state = 1188;
				this.identifier();
				this.state = 1189;
				this.match(Java20Parser.DOT);
				}
			}

			this.state = 1193;
			this.match(Java20Parser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Java20Parser.RULE_formalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1195;
			this.formalParameter();
			this.state = 1200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.COMMA) {
				{
				{
				this.state = 1196;
				this.match(Java20Parser.COMMA);
				this.state = 1197;
				this.formalParameter();
				}
				}
				this.state = 1202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Java20Parser.RULE_formalParameter);
		let _la: number;
		try {
			this.state = 1213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.FINAL || _la === Java20Parser.AT) {
					{
					{
					this.state = 1203;
					this.variableModifier();
					}
					}
					this.state = 1208;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1209;
				this.unannType();
				this.state = 1210;
				this.variableDeclaratorId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1212;
				this.variableArityParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableArityParameter(): VariableArityParameterContext {
		let _localctx: VariableArityParameterContext = new VariableArityParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, Java20Parser.RULE_variableArityParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.FINAL || _la === Java20Parser.AT) {
				{
				{
				this.state = 1215;
				this.variableModifier();
				}
				}
				this.state = 1220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1221;
			this.unannType();
			this.state = 1225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 1222;
				this.annotation();
				}
				}
				this.state = 1227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1228;
			this.match(Java20Parser.ELLIPSIS);
			this.state = 1229;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, Java20Parser.RULE_variableModifier);
		try {
			this.state = 1233;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1231;
				this.annotation();
				}
				break;
			case Java20Parser.FINAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1232;
				this.match(Java20Parser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwsT(): ThrowsTContext {
		let _localctx: ThrowsTContext = new ThrowsTContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, Java20Parser.RULE_throwsT);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1235;
			this.match(Java20Parser.THROWS);
			this.state = 1236;
			this.exceptionTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionTypeList(): ExceptionTypeListContext {
		let _localctx: ExceptionTypeListContext = new ExceptionTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, Java20Parser.RULE_exceptionTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1238;
			this.exceptionType();
			this.state = 1243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.COMMA) {
				{
				{
				this.state = 1239;
				this.match(Java20Parser.COMMA);
				this.state = 1240;
				this.exceptionType();
				}
				}
				this.state = 1245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionType(): ExceptionTypeContext {
		let _localctx: ExceptionTypeContext = new ExceptionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, Java20Parser.RULE_exceptionType);
		try {
			this.state = 1248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1246;
				this.classType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1247;
				this.typeVariable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, Java20Parser.RULE_methodBody);
		try {
			this.state = 1252;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1250;
				this.block();
				}
				break;
			case Java20Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1251;
				this.match(Java20Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instanceInitializer(): InstanceInitializerContext {
		let _localctx: InstanceInitializerContext = new InstanceInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, Java20Parser.RULE_instanceInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1254;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticInitializer(): StaticInitializerContext {
		let _localctx: StaticInitializerContext = new StaticInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, Java20Parser.RULE_staticInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1256;
			this.match(Java20Parser.STATIC);
			this.state = 1257;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, Java20Parser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (Java20Parser.PRIVATE - 50)) | (1 << (Java20Parser.PROTECTED - 50)) | (1 << (Java20Parser.PUBLIC - 50)))) !== 0) || _la === Java20Parser.AT) {
				{
				{
				this.state = 1259;
				this.constructorModifier();
				}
				}
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1265;
			this.constructorDeclarator();
			this.state = 1267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.THROWS) {
				{
				this.state = 1266;
				this.throwsT();
				}
			}

			this.state = 1269;
			this.constructorBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorModifier(): ConstructorModifierContext {
		let _localctx: ConstructorModifierContext = new ConstructorModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, Java20Parser.RULE_constructorModifier);
		try {
			this.state = 1275;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1271;
				this.annotation();
				}
				break;
			case Java20Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1272;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case Java20Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1273;
				this.match(Java20Parser.PROTECTED);
				}
				break;
			case Java20Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1274;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclarator(): ConstructorDeclaratorContext {
		let _localctx: ConstructorDeclaratorContext = new ConstructorDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, Java20Parser.RULE_constructorDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.LT) {
				{
				this.state = 1277;
				this.typeParameters();
				}
			}

			this.state = 1280;
			this.simpleTypeName();
			this.state = 1281;
			this.match(Java20Parser.LPAREN);
			this.state = 1285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 1282;
				this.receiverParameter();
				this.state = 1283;
				this.match(Java20Parser.COMMA);
				}
				break;
			}
			this.state = 1288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java20Parser.FINAL - 35)) | (1 << (Java20Parser.FLOAT - 35)) | (1 << (Java20Parser.INT - 35)) | (1 << (Java20Parser.LONG - 35)) | (1 << (Java20Parser.SHORT - 35)))) !== 0) || _la === Java20Parser.AT || _la === Java20Parser.Identifier) {
				{
				this.state = 1287;
				this.formalParameterList();
				}
			}

			this.state = 1290;
			this.match(Java20Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleTypeName(): SimpleTypeNameContext {
		let _localctx: SimpleTypeNameContext = new SimpleTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, Java20Parser.RULE_simpleTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1292;
			this.typeIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorBody(): ConstructorBodyContext {
		let _localctx: ConstructorBodyContext = new ConstructorBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, Java20Parser.RULE_constructorBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1294;
			this.match(Java20Parser.LBRACE);
			this.state = 1296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				{
				this.state = 1295;
				this.explicitConstructorInvocation();
				}
				break;
			}
			this.state = 1299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.ABSTRACT) | (1 << Java20Parser.ASSERT) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BREAK) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.CLASS) | (1 << Java20Parser.CONTINUE) | (1 << Java20Parser.DO) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java20Parser.ENUM - 33)) | (1 << (Java20Parser.FINAL - 33)) | (1 << (Java20Parser.FLOAT - 33)) | (1 << (Java20Parser.FOR - 33)) | (1 << (Java20Parser.IF - 33)) | (1 << (Java20Parser.INT - 33)) | (1 << (Java20Parser.INTERFACE - 33)) | (1 << (Java20Parser.LONG - 33)) | (1 << (Java20Parser.NEW - 33)) | (1 << (Java20Parser.PRIVATE - 33)) | (1 << (Java20Parser.PROTECTED - 33)) | (1 << (Java20Parser.PUBLIC - 33)) | (1 << (Java20Parser.RETURN - 33)) | (1 << (Java20Parser.SHORT - 33)) | (1 << (Java20Parser.STATIC - 33)) | (1 << (Java20Parser.STRICTFP - 33)) | (1 << (Java20Parser.SUPER - 33)) | (1 << (Java20Parser.SWITCH - 33)) | (1 << (Java20Parser.SYNCHRONIZED - 33)) | (1 << (Java20Parser.THIS - 33)) | (1 << (Java20Parser.THROW - 33)) | (1 << (Java20Parser.TRY - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Java20Parser.VOID - 65)) | (1 << (Java20Parser.WHILE - 65)) | (1 << (Java20Parser.IntegerLiteral - 65)) | (1 << (Java20Parser.FloatingPointLiteral - 65)) | (1 << (Java20Parser.BooleanLiteral - 65)) | (1 << (Java20Parser.CharacterLiteral - 65)) | (1 << (Java20Parser.StringLiteral - 65)) | (1 << (Java20Parser.TextBlock - 65)) | (1 << (Java20Parser.NullLiteral - 65)) | (1 << (Java20Parser.LPAREN - 65)) | (1 << (Java20Parser.LBRACE - 65)) | (1 << (Java20Parser.SEMI - 65)) | (1 << (Java20Parser.AT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 1298;
				this.blockStatements();
				}
			}

			this.state = 1301;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		let _localctx: ExplicitConstructorInvocationContext = new ExplicitConstructorInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, Java20Parser.RULE_explicitConstructorInvocation);
		let _la: number;
		try {
			this.state = 1329;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 1303;
					this.typeArguments();
					}
				}

				this.state = 1306;
				_la = this._input.LA(1);
				if (!(_la === Java20Parser.SUPER || _la === Java20Parser.THIS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1307;
				this.match(Java20Parser.LPAREN);
				this.state = 1309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 1308;
					this.argumentList();
					}
				}

				this.state = 1311;
				this.match(Java20Parser.RPAREN);
				this.state = 1312;
				this.match(Java20Parser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1315;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
				case 1:
					{
					this.state = 1313;
					this.expressionName();
					}
					break;

				case 2:
					{
					this.state = 1314;
					this.primary();
					}
					break;
				}
				this.state = 1317;
				this.match(Java20Parser.DOT);
				this.state = 1319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 1318;
					this.typeArguments();
					}
				}

				this.state = 1321;
				this.match(Java20Parser.SUPER);
				this.state = 1322;
				this.match(Java20Parser.LPAREN);
				this.state = 1324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 1323;
					this.argumentList();
					}
				}

				this.state = 1326;
				this.match(Java20Parser.RPAREN);
				this.state = 1327;
				this.match(Java20Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, Java20Parser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.NONSEALED) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.ABSTRACT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java20Parser.FINAL - 35)) | (1 << (Java20Parser.PRIVATE - 35)) | (1 << (Java20Parser.PROTECTED - 35)) | (1 << (Java20Parser.PUBLIC - 35)) | (1 << (Java20Parser.STATIC - 35)) | (1 << (Java20Parser.STRICTFP - 35)))) !== 0) || _la === Java20Parser.AT) {
				{
				{
				this.state = 1331;
				this.classModifier();
				}
				}
				this.state = 1336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1337;
			this.match(Java20Parser.ENUM);
			this.state = 1338;
			this.typeIdentifier();
			this.state = 1340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.IMPLEMENTS) {
				{
				this.state = 1339;
				this.classImplements();
				}
			}

			this.state = 1342;
			this.enumBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, Java20Parser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1344;
			this.match(Java20Parser.LBRACE);
			this.state = 1346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD))) !== 0) || _la === Java20Parser.AT || _la === Java20Parser.Identifier) {
				{
				this.state = 1345;
				this.enumConstantList();
				}
			}

			this.state = 1349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.COMMA) {
				{
				this.state = 1348;
				this.match(Java20Parser.COMMA);
				}
			}

			this.state = 1352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.SEMI) {
				{
				this.state = 1351;
				this.enumBodyDeclarations();
				}
			}

			this.state = 1354;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstantList(): EnumConstantListContext {
		let _localctx: EnumConstantListContext = new EnumConstantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, Java20Parser.RULE_enumConstantList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1356;
			this.enumConstant();
			this.state = 1361;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1357;
					this.match(Java20Parser.COMMA);
					this.state = 1358;
					this.enumConstant();
					}
					}
				}
				this.state = 1363;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, Java20Parser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 1364;
				this.enumConstantModifier();
				}
				}
				this.state = 1369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1370;
			this.identifier();
			this.state = 1376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.LPAREN) {
				{
				this.state = 1371;
				this.match(Java20Parser.LPAREN);
				this.state = 1373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 1372;
					this.argumentList();
					}
				}

				this.state = 1375;
				this.match(Java20Parser.RPAREN);
				}
			}

			this.state = 1379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.LBRACE) {
				{
				this.state = 1378;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstantModifier(): EnumConstantModifierContext {
		let _localctx: EnumConstantModifierContext = new EnumConstantModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, Java20Parser.RULE_enumConstantModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1381;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, Java20Parser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1383;
			this.match(Java20Parser.SEMI);
			this.state = 1387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.ABSTRACT) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.CLASS) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java20Parser.ENUM - 33)) | (1 << (Java20Parser.FINAL - 33)) | (1 << (Java20Parser.FLOAT - 33)) | (1 << (Java20Parser.INT - 33)) | (1 << (Java20Parser.INTERFACE - 33)) | (1 << (Java20Parser.LONG - 33)) | (1 << (Java20Parser.NATIVE - 33)) | (1 << (Java20Parser.PRIVATE - 33)) | (1 << (Java20Parser.PROTECTED - 33)) | (1 << (Java20Parser.PUBLIC - 33)) | (1 << (Java20Parser.SHORT - 33)) | (1 << (Java20Parser.STATIC - 33)) | (1 << (Java20Parser.STRICTFP - 33)) | (1 << (Java20Parser.SYNCHRONIZED - 33)) | (1 << (Java20Parser.TRANSIENT - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Java20Parser.VOID - 65)) | (1 << (Java20Parser.VOLATILE - 65)) | (1 << (Java20Parser.LBRACE - 65)) | (1 << (Java20Parser.SEMI - 65)) | (1 << (Java20Parser.AT - 65)) | (1 << (Java20Parser.LT - 65)))) !== 0) || _la === Java20Parser.Identifier) {
				{
				{
				this.state = 1384;
				this.classBodyDeclaration();
				}
				}
				this.state = 1389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordDeclaration(): RecordDeclarationContext {
		let _localctx: RecordDeclarationContext = new RecordDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, Java20Parser.RULE_recordDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.NONSEALED) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.ABSTRACT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java20Parser.FINAL - 35)) | (1 << (Java20Parser.PRIVATE - 35)) | (1 << (Java20Parser.PROTECTED - 35)) | (1 << (Java20Parser.PUBLIC - 35)) | (1 << (Java20Parser.STATIC - 35)) | (1 << (Java20Parser.STRICTFP - 35)))) !== 0) || _la === Java20Parser.AT) {
				{
				{
				this.state = 1390;
				this.classModifier();
				}
				}
				this.state = 1395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1396;
			this.match(Java20Parser.RECORD);
			this.state = 1397;
			this.typeIdentifier();
			this.state = 1399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.LT) {
				{
				this.state = 1398;
				this.typeParameters();
				}
			}

			this.state = 1401;
			this.recordHeader();
			this.state = 1403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.IMPLEMENTS) {
				{
				this.state = 1402;
				this.classImplements();
				}
			}

			this.state = 1405;
			this.recordBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordHeader(): RecordHeaderContext {
		let _localctx: RecordHeaderContext = new RecordHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, Java20Parser.RULE_recordHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1407;
			this.match(Java20Parser.LPAREN);
			this.state = 1409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.SHORT - 37)))) !== 0) || _la === Java20Parser.AT || _la === Java20Parser.Identifier) {
				{
				this.state = 1408;
				this.recordComponentList();
				}
			}

			this.state = 1411;
			this.match(Java20Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordComponentList(): RecordComponentListContext {
		let _localctx: RecordComponentListContext = new RecordComponentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, Java20Parser.RULE_recordComponentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1413;
			this.recordComponent();
			this.state = 1418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.COMMA) {
				{
				{
				this.state = 1414;
				this.match(Java20Parser.COMMA);
				this.state = 1415;
				this.recordComponent();
				}
				}
				this.state = 1420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordComponent(): RecordComponentContext {
		let _localctx: RecordComponentContext = new RecordComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, Java20Parser.RULE_recordComponent);
		let _la: number;
		try {
			this.state = 1431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.AT) {
					{
					{
					this.state = 1421;
					this.recordComponentModifier();
					}
					}
					this.state = 1426;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1427;
				this.unannType();
				this.state = 1428;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1430;
				this.variableArityRecordComponent();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableArityRecordComponent(): VariableArityRecordComponentContext {
		let _localctx: VariableArityRecordComponentContext = new VariableArityRecordComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, Java20Parser.RULE_variableArityRecordComponent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 1433;
				this.recordComponentModifier();
				}
				}
				this.state = 1438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1439;
			this.unannType();
			this.state = 1443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 1440;
				this.annotation();
				}
				}
				this.state = 1445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1446;
			this.match(Java20Parser.ELLIPSIS);
			this.state = 1447;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordComponentModifier(): RecordComponentModifierContext {
		let _localctx: RecordComponentModifierContext = new RecordComponentModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, Java20Parser.RULE_recordComponentModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1449;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordBody(): RecordBodyContext {
		let _localctx: RecordBodyContext = new RecordBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, Java20Parser.RULE_recordBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1451;
			this.match(Java20Parser.LBRACE);
			this.state = 1455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.ABSTRACT) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.CLASS) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java20Parser.ENUM - 33)) | (1 << (Java20Parser.FINAL - 33)) | (1 << (Java20Parser.FLOAT - 33)) | (1 << (Java20Parser.INT - 33)) | (1 << (Java20Parser.INTERFACE - 33)) | (1 << (Java20Parser.LONG - 33)) | (1 << (Java20Parser.NATIVE - 33)) | (1 << (Java20Parser.PRIVATE - 33)) | (1 << (Java20Parser.PROTECTED - 33)) | (1 << (Java20Parser.PUBLIC - 33)) | (1 << (Java20Parser.SHORT - 33)) | (1 << (Java20Parser.STATIC - 33)) | (1 << (Java20Parser.STRICTFP - 33)) | (1 << (Java20Parser.SYNCHRONIZED - 33)) | (1 << (Java20Parser.TRANSIENT - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Java20Parser.VOID - 65)) | (1 << (Java20Parser.VOLATILE - 65)) | (1 << (Java20Parser.LBRACE - 65)) | (1 << (Java20Parser.SEMI - 65)) | (1 << (Java20Parser.AT - 65)) | (1 << (Java20Parser.LT - 65)))) !== 0) || _la === Java20Parser.Identifier) {
				{
				{
				this.state = 1452;
				this.recordBodyDeclaration();
				}
				}
				this.state = 1457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1458;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordBodyDeclaration(): RecordBodyDeclarationContext {
		let _localctx: RecordBodyDeclarationContext = new RecordBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, Java20Parser.RULE_recordBodyDeclaration);
		try {
			this.state = 1462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1460;
				this.classBodyDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1461;
				this.compactConstructorDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compactConstructorDeclaration(): CompactConstructorDeclarationContext {
		let _localctx: CompactConstructorDeclarationContext = new CompactConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, Java20Parser.RULE_compactConstructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (Java20Parser.PRIVATE - 50)) | (1 << (Java20Parser.PROTECTED - 50)) | (1 << (Java20Parser.PUBLIC - 50)))) !== 0) || _la === Java20Parser.AT) {
				{
				{
				this.state = 1464;
				this.constructorModifier();
				}
				}
				this.state = 1469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1470;
			this.simpleTypeName();
			this.state = 1471;
			this.constructorBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, Java20Parser.RULE_interfaceDeclaration);
		try {
			this.state = 1475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1473;
				this.normalInterfaceDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1474;
				this.annotationInterfaceDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		let _localctx: NormalInterfaceDeclarationContext = new NormalInterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, Java20Parser.RULE_normalInterfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.NONSEALED) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.ABSTRACT))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (Java20Parser.PRIVATE - 50)) | (1 << (Java20Parser.PROTECTED - 50)) | (1 << (Java20Parser.PUBLIC - 50)) | (1 << (Java20Parser.STATIC - 50)) | (1 << (Java20Parser.STRICTFP - 50)))) !== 0) || _la === Java20Parser.AT) {
				{
				{
				this.state = 1477;
				this.interfaceModifier();
				}
				}
				this.state = 1482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1483;
			this.match(Java20Parser.INTERFACE);
			this.state = 1484;
			this.typeIdentifier();
			this.state = 1486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.LT) {
				{
				this.state = 1485;
				this.typeParameters();
				}
			}

			this.state = 1489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.EXTENDS) {
				{
				this.state = 1488;
				this.interfaceExtends();
				}
			}

			this.state = 1492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.PERMITS) {
				{
				this.state = 1491;
				this.interfacePermits();
				}
			}

			this.state = 1494;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceModifier(): InterfaceModifierContext {
		let _localctx: InterfaceModifierContext = new InterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, Java20Parser.RULE_interfaceModifier);
		try {
			this.state = 1505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1496;
				this.annotation();
				}
				break;
			case Java20Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1497;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case Java20Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1498;
				this.match(Java20Parser.PROTECTED);
				}
				break;
			case Java20Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1499;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			case Java20Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1500;
				this.match(Java20Parser.ABSTRACT);
				}
				break;
			case Java20Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1501;
				this.match(Java20Parser.STATIC);
				}
				break;
			case Java20Parser.SEALED:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1502;
				this.match(Java20Parser.SEALED);
				}
				break;
			case Java20Parser.NONSEALED:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1503;
				this.match(Java20Parser.NONSEALED);
				}
				break;
			case Java20Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1504;
				this.match(Java20Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceExtends(): InterfaceExtendsContext {
		let _localctx: InterfaceExtendsContext = new InterfaceExtendsContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, Java20Parser.RULE_interfaceExtends);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1507;
			this.match(Java20Parser.EXTENDS);
			this.state = 1508;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfacePermits(): InterfacePermitsContext {
		let _localctx: InterfacePermitsContext = new InterfacePermitsContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, Java20Parser.RULE_interfacePermits);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1510;
			this.match(Java20Parser.PERMITS);
			this.state = 1511;
			this.typeName();
			this.state = 1516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.COMMA) {
				{
				{
				this.state = 1512;
				this.match(Java20Parser.COMMA);
				this.state = 1513;
				this.typeName();
				}
				}
				this.state = 1518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, Java20Parser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1519;
			this.match(Java20Parser.LBRACE);
			this.state = 1523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.ABSTRACT) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.CLASS) | (1 << Java20Parser.DEFAULT) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java20Parser.ENUM - 33)) | (1 << (Java20Parser.FINAL - 33)) | (1 << (Java20Parser.FLOAT - 33)) | (1 << (Java20Parser.INT - 33)) | (1 << (Java20Parser.INTERFACE - 33)) | (1 << (Java20Parser.LONG - 33)) | (1 << (Java20Parser.PRIVATE - 33)) | (1 << (Java20Parser.PROTECTED - 33)) | (1 << (Java20Parser.PUBLIC - 33)) | (1 << (Java20Parser.SHORT - 33)) | (1 << (Java20Parser.STATIC - 33)) | (1 << (Java20Parser.STRICTFP - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Java20Parser.VOID - 65)) | (1 << (Java20Parser.SEMI - 65)) | (1 << (Java20Parser.AT - 65)) | (1 << (Java20Parser.LT - 65)))) !== 0) || _la === Java20Parser.Identifier) {
				{
				{
				this.state = 1520;
				this.interfaceMemberDeclaration();
				}
				}
				this.state = 1525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1526;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, Java20Parser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 1533;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1528;
				this.constantDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1529;
				this.interfaceMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1530;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1531;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1532;
				this.match(Java20Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclaration(): ConstantDeclarationContext {
		let _localctx: ConstantDeclarationContext = new ConstantDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, Java20Parser.RULE_constantDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java20Parser.FINAL - 35)) | (1 << (Java20Parser.PUBLIC - 35)) | (1 << (Java20Parser.STATIC - 35)))) !== 0) || _la === Java20Parser.AT) {
				{
				{
				this.state = 1535;
				this.constantModifier();
				}
				}
				this.state = 1540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1541;
			this.unannType();
			this.state = 1542;
			this.variableDeclaratorList();
			this.state = 1543;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantModifier(): ConstantModifierContext {
		let _localctx: ConstantModifierContext = new ConstantModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, Java20Parser.RULE_constantModifier);
		try {
			this.state = 1549;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1545;
				this.annotation();
				}
				break;
			case Java20Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1546;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case Java20Parser.STATIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1547;
				this.match(Java20Parser.STATIC);
				}
				break;
			case Java20Parser.FINAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1548;
				this.match(Java20Parser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, Java20Parser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.ABSTRACT || _la === Java20Parser.DEFAULT || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (Java20Parser.PRIVATE - 50)) | (1 << (Java20Parser.PUBLIC - 50)) | (1 << (Java20Parser.STATIC - 50)) | (1 << (Java20Parser.STRICTFP - 50)))) !== 0) || _la === Java20Parser.AT) {
				{
				{
				this.state = 1551;
				this.interfaceMethodModifier();
				}
				}
				this.state = 1556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1557;
			this.methodHeader();
			this.state = 1558;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let _localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, Java20Parser.RULE_interfaceMethodModifier);
		try {
			this.state = 1567;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1560;
				this.annotation();
				}
				break;
			case Java20Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1561;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case Java20Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1562;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			case Java20Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1563;
				this.match(Java20Parser.ABSTRACT);
				}
				break;
			case Java20Parser.DEFAULT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1564;
				this.match(Java20Parser.DEFAULT);
				}
				break;
			case Java20Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1565;
				this.match(Java20Parser.STATIC);
				}
				break;
			case Java20Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1566;
				this.match(Java20Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationInterfaceDeclaration(): AnnotationInterfaceDeclarationContext {
		let _localctx: AnnotationInterfaceDeclarationContext = new AnnotationInterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, Java20Parser.RULE_annotationInterfaceDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1572;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1569;
					this.interfaceModifier();
					}
					}
				}
				this.state = 1574;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
			}
			this.state = 1575;
			this.match(Java20Parser.AT);
			this.state = 1576;
			this.match(Java20Parser.INTERFACE);
			this.state = 1577;
			this.typeIdentifier();
			this.state = 1578;
			this.annotationInterfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationInterfaceBody(): AnnotationInterfaceBodyContext {
		let _localctx: AnnotationInterfaceBodyContext = new AnnotationInterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, Java20Parser.RULE_annotationInterfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1580;
			this.match(Java20Parser.LBRACE);
			this.state = 1584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.ABSTRACT) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.CLASS) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java20Parser.ENUM - 33)) | (1 << (Java20Parser.FINAL - 33)) | (1 << (Java20Parser.FLOAT - 33)) | (1 << (Java20Parser.INT - 33)) | (1 << (Java20Parser.INTERFACE - 33)) | (1 << (Java20Parser.LONG - 33)) | (1 << (Java20Parser.PRIVATE - 33)) | (1 << (Java20Parser.PROTECTED - 33)) | (1 << (Java20Parser.PUBLIC - 33)) | (1 << (Java20Parser.SHORT - 33)) | (1 << (Java20Parser.STATIC - 33)) | (1 << (Java20Parser.STRICTFP - 33)))) !== 0) || _la === Java20Parser.SEMI || _la === Java20Parser.AT || _la === Java20Parser.Identifier) {
				{
				{
				this.state = 1581;
				this.annotationInterfaceMemberDeclaration();
				}
				}
				this.state = 1586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1587;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationInterfaceMemberDeclaration(): AnnotationInterfaceMemberDeclarationContext {
		let _localctx: AnnotationInterfaceMemberDeclarationContext = new AnnotationInterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, Java20Parser.RULE_annotationInterfaceMemberDeclaration);
		try {
			this.state = 1594;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1589;
				this.annotationInterfaceElementDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1590;
				this.constantDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1591;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1592;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1593;
				this.match(Java20Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationInterfaceElementDeclaration(): AnnotationInterfaceElementDeclarationContext {
		let _localctx: AnnotationInterfaceElementDeclarationContext = new AnnotationInterfaceElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, Java20Parser.RULE_annotationInterfaceElementDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.ABSTRACT || _la === Java20Parser.PUBLIC || _la === Java20Parser.AT) {
				{
				{
				this.state = 1596;
				this.annotationInterfaceElementModifier();
				}
				}
				this.state = 1601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1602;
			this.unannType();
			this.state = 1603;
			this.identifier();
			this.state = 1604;
			this.match(Java20Parser.LPAREN);
			this.state = 1605;
			this.match(Java20Parser.RPAREN);
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.LBRACK || _la === Java20Parser.AT) {
				{
				this.state = 1606;
				this.dims();
				}
			}

			this.state = 1610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.DEFAULT) {
				{
				this.state = 1609;
				this.defaultValue();
				}
			}

			this.state = 1612;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationInterfaceElementModifier(): AnnotationInterfaceElementModifierContext {
		let _localctx: AnnotationInterfaceElementModifierContext = new AnnotationInterfaceElementModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, Java20Parser.RULE_annotationInterfaceElementModifier);
		try {
			this.state = 1617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1614;
				this.annotation();
				}
				break;
			case Java20Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1615;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case Java20Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1616;
				this.match(Java20Parser.ABSTRACT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, Java20Parser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1619;
			this.match(Java20Parser.DEFAULT);
			this.state = 1620;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, Java20Parser.RULE_annotation);
		try {
			this.state = 1625;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1622;
				this.normalAnnotation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1623;
				this.markerAnnotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1624;
				this.singleElementAnnotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalAnnotation(): NormalAnnotationContext {
		let _localctx: NormalAnnotationContext = new NormalAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, Java20Parser.RULE_normalAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1627;
			this.match(Java20Parser.AT);
			this.state = 1628;
			this.typeName();
			this.state = 1629;
			this.match(Java20Parser.LPAREN);
			this.state = 1631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD))) !== 0) || _la === Java20Parser.Identifier) {
				{
				this.state = 1630;
				this.elementValuePairList();
				}
			}

			this.state = 1633;
			this.match(Java20Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairList(): ElementValuePairListContext {
		let _localctx: ElementValuePairListContext = new ElementValuePairListContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, Java20Parser.RULE_elementValuePairList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1635;
			this.elementValuePair();
			this.state = 1640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.COMMA) {
				{
				{
				this.state = 1636;
				this.match(Java20Parser.COMMA);
				this.state = 1637;
				this.elementValuePair();
				}
				}
				this.state = 1642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, Java20Parser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1643;
			this.identifier();
			this.state = 1644;
			this.match(Java20Parser.ASSIGN);
			this.state = 1645;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, Java20Parser.RULE_elementValue);
		try {
			this.state = 1650;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1647;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1648;
				this.elementValueArrayInitializer();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1649;
				this.annotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, Java20Parser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1652;
			this.match(Java20Parser.LBRACE);
			this.state = 1654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.LBRACE - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 1653;
				this.elementValueList();
				}
			}

			this.state = 1657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.COMMA) {
				{
				this.state = 1656;
				this.match(Java20Parser.COMMA);
				}
			}

			this.state = 1659;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueList(): ElementValueListContext {
		let _localctx: ElementValueListContext = new ElementValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, Java20Parser.RULE_elementValueList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1661;
			this.elementValue();
			this.state = 1666;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1662;
					this.match(Java20Parser.COMMA);
					this.state = 1663;
					this.elementValue();
					}
					}
				}
				this.state = 1668;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public markerAnnotation(): MarkerAnnotationContext {
		let _localctx: MarkerAnnotationContext = new MarkerAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, Java20Parser.RULE_markerAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1669;
			this.match(Java20Parser.AT);
			this.state = 1670;
			this.typeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleElementAnnotation(): SingleElementAnnotationContext {
		let _localctx: SingleElementAnnotationContext = new SingleElementAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, Java20Parser.RULE_singleElementAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1672;
			this.match(Java20Parser.AT);
			this.state = 1673;
			this.typeName();
			this.state = 1674;
			this.match(Java20Parser.LPAREN);
			this.state = 1675;
			this.elementValue();
			this.state = 1676;
			this.match(Java20Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, Java20Parser.RULE_arrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1678;
			this.match(Java20Parser.LBRACE);
			this.state = 1680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.LBRACE - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 1679;
				this.variableInitializerList();
				}
			}

			this.state = 1683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.COMMA) {
				{
				this.state = 1682;
				this.match(Java20Parser.COMMA);
				}
			}

			this.state = 1685;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializerList(): VariableInitializerListContext {
		let _localctx: VariableInitializerListContext = new VariableInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, Java20Parser.RULE_variableInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1687;
			this.variableInitializer();
			this.state = 1692;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1688;
					this.match(Java20Parser.COMMA);
					this.state = 1689;
					this.variableInitializer();
					}
					}
				}
				this.state = 1694;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, Java20Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1695;
			this.match(Java20Parser.LBRACE);
			this.state = 1697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.ABSTRACT) | (1 << Java20Parser.ASSERT) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BREAK) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.CLASS) | (1 << Java20Parser.CONTINUE) | (1 << Java20Parser.DO) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java20Parser.ENUM - 33)) | (1 << (Java20Parser.FINAL - 33)) | (1 << (Java20Parser.FLOAT - 33)) | (1 << (Java20Parser.FOR - 33)) | (1 << (Java20Parser.IF - 33)) | (1 << (Java20Parser.INT - 33)) | (1 << (Java20Parser.INTERFACE - 33)) | (1 << (Java20Parser.LONG - 33)) | (1 << (Java20Parser.NEW - 33)) | (1 << (Java20Parser.PRIVATE - 33)) | (1 << (Java20Parser.PROTECTED - 33)) | (1 << (Java20Parser.PUBLIC - 33)) | (1 << (Java20Parser.RETURN - 33)) | (1 << (Java20Parser.SHORT - 33)) | (1 << (Java20Parser.STATIC - 33)) | (1 << (Java20Parser.STRICTFP - 33)) | (1 << (Java20Parser.SUPER - 33)) | (1 << (Java20Parser.SWITCH - 33)) | (1 << (Java20Parser.SYNCHRONIZED - 33)) | (1 << (Java20Parser.THIS - 33)) | (1 << (Java20Parser.THROW - 33)) | (1 << (Java20Parser.TRY - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Java20Parser.VOID - 65)) | (1 << (Java20Parser.WHILE - 65)) | (1 << (Java20Parser.IntegerLiteral - 65)) | (1 << (Java20Parser.FloatingPointLiteral - 65)) | (1 << (Java20Parser.BooleanLiteral - 65)) | (1 << (Java20Parser.CharacterLiteral - 65)) | (1 << (Java20Parser.StringLiteral - 65)) | (1 << (Java20Parser.TextBlock - 65)) | (1 << (Java20Parser.NullLiteral - 65)) | (1 << (Java20Parser.LPAREN - 65)) | (1 << (Java20Parser.LBRACE - 65)) | (1 << (Java20Parser.SEMI - 65)) | (1 << (Java20Parser.AT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 1696;
				this.blockStatements();
				}
			}

			this.state = 1699;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatements(): BlockStatementsContext {
		let _localctx: BlockStatementsContext = new BlockStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, Java20Parser.RULE_blockStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1701;
			this.blockStatement();
			this.state = 1705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.ABSTRACT) | (1 << Java20Parser.ASSERT) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BREAK) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.CLASS) | (1 << Java20Parser.CONTINUE) | (1 << Java20Parser.DO) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java20Parser.ENUM - 33)) | (1 << (Java20Parser.FINAL - 33)) | (1 << (Java20Parser.FLOAT - 33)) | (1 << (Java20Parser.FOR - 33)) | (1 << (Java20Parser.IF - 33)) | (1 << (Java20Parser.INT - 33)) | (1 << (Java20Parser.INTERFACE - 33)) | (1 << (Java20Parser.LONG - 33)) | (1 << (Java20Parser.NEW - 33)) | (1 << (Java20Parser.PRIVATE - 33)) | (1 << (Java20Parser.PROTECTED - 33)) | (1 << (Java20Parser.PUBLIC - 33)) | (1 << (Java20Parser.RETURN - 33)) | (1 << (Java20Parser.SHORT - 33)) | (1 << (Java20Parser.STATIC - 33)) | (1 << (Java20Parser.STRICTFP - 33)) | (1 << (Java20Parser.SUPER - 33)) | (1 << (Java20Parser.SWITCH - 33)) | (1 << (Java20Parser.SYNCHRONIZED - 33)) | (1 << (Java20Parser.THIS - 33)) | (1 << (Java20Parser.THROW - 33)) | (1 << (Java20Parser.TRY - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Java20Parser.VOID - 65)) | (1 << (Java20Parser.WHILE - 65)) | (1 << (Java20Parser.IntegerLiteral - 65)) | (1 << (Java20Parser.FloatingPointLiteral - 65)) | (1 << (Java20Parser.BooleanLiteral - 65)) | (1 << (Java20Parser.CharacterLiteral - 65)) | (1 << (Java20Parser.StringLiteral - 65)) | (1 << (Java20Parser.TextBlock - 65)) | (1 << (Java20Parser.NullLiteral - 65)) | (1 << (Java20Parser.LPAREN - 65)) | (1 << (Java20Parser.LBRACE - 65)) | (1 << (Java20Parser.SEMI - 65)) | (1 << (Java20Parser.AT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				{
				this.state = 1702;
				this.blockStatement();
				}
				}
				this.state = 1707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, Java20Parser.RULE_blockStatement);
		try {
			this.state = 1711;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1708;
				this.localClassOrInterfaceDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1709;
				this.localVariableDeclarationStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1710;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localClassOrInterfaceDeclaration(): LocalClassOrInterfaceDeclarationContext {
		let _localctx: LocalClassOrInterfaceDeclarationContext = new LocalClassOrInterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, Java20Parser.RULE_localClassOrInterfaceDeclaration);
		try {
			this.state = 1715;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1713;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1714;
				this.normalInterfaceDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, Java20Parser.RULE_localVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.FINAL || _la === Java20Parser.AT) {
				{
				{
				this.state = 1717;
				this.variableModifier();
				}
				}
				this.state = 1722;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1723;
			this.localVariableType();
			this.state = 1725;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				{
				this.state = 1724;
				this.variableDeclaratorList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableType(): LocalVariableTypeContext {
		let _localctx: LocalVariableTypeContext = new LocalVariableTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, Java20Parser.RULE_localVariableType);
		try {
			this.state = 1729;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1727;
				this.unannType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1728;
				this.match(Java20Parser.VAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, Java20Parser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1731;
			this.localVariableDeclaration();
			this.state = 1732;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, Java20Parser.RULE_statement);
		try {
			this.state = 1740;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1734;
				this.statementWithoutTrailingSubstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1735;
				this.labeledStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1736;
				this.ifThenStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1737;
				this.ifThenElseStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1738;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1739;
				this.forStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementNoShortIf(): StatementNoShortIfContext {
		let _localctx: StatementNoShortIfContext = new StatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, Java20Parser.RULE_statementNoShortIf);
		try {
			this.state = 1747;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1742;
				this.statementWithoutTrailingSubstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1743;
				this.labeledStatementNoShortIf();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1744;
				this.ifThenElseStatementNoShortIf();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1745;
				this.whileStatementNoShortIf();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1746;
				this.forStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext {
		let _localctx: StatementWithoutTrailingSubstatementContext = new StatementWithoutTrailingSubstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, Java20Parser.RULE_statementWithoutTrailingSubstatement);
		try {
			this.state = 1762;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1749;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1750;
				this.emptyStatement_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1751;
				this.expressionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1752;
				this.assertStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1753;
				this.switchStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1754;
				this.doStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1755;
				this.breakStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1756;
				this.continueStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1757;
				this.returnStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1758;
				this.synchronizedStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1759;
				this.throwStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1760;
				this.tryStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1761;
				this.yieldStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let _localctx: EmptyStatement_Context = new EmptyStatement_Context(this._ctx, this.state);
		this.enterRule(_localctx, 304, Java20Parser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1764;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, Java20Parser.RULE_labeledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1766;
			this.identifier();
			this.state = 1767;
			this.match(Java20Parser.COLON);
			this.state = 1768;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext {
		let _localctx: LabeledStatementNoShortIfContext = new LabeledStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, Java20Parser.RULE_labeledStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1770;
			this.identifier();
			this.state = 1771;
			this.match(Java20Parser.COLON);
			this.state = 1772;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, Java20Parser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1774;
			this.statementExpression();
			this.state = 1775;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let _localctx: StatementExpressionContext = new StatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, Java20Parser.RULE_statementExpression);
		try {
			this.state = 1784;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1777;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1778;
				this.preIncrementExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1779;
				this.preDecrementExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1780;
				this.postIncrementExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1781;
				this.postDecrementExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1782;
				this.methodInvocation();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1783;
				this.classInstanceCreationExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenStatement(): IfThenStatementContext {
		let _localctx: IfThenStatementContext = new IfThenStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, Java20Parser.RULE_ifThenStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1786;
			this.match(Java20Parser.IF);
			this.state = 1787;
			this.match(Java20Parser.LPAREN);
			this.state = 1788;
			this.expression();
			this.state = 1789;
			this.match(Java20Parser.RPAREN);
			this.state = 1790;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStatement(): IfThenElseStatementContext {
		let _localctx: IfThenElseStatementContext = new IfThenElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, Java20Parser.RULE_ifThenElseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1792;
			this.match(Java20Parser.IF);
			this.state = 1793;
			this.match(Java20Parser.LPAREN);
			this.state = 1794;
			this.expression();
			this.state = 1795;
			this.match(Java20Parser.RPAREN);
			this.state = 1796;
			this.statementNoShortIf();
			this.state = 1797;
			this.match(Java20Parser.ELSE);
			this.state = 1798;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext {
		let _localctx: IfThenElseStatementNoShortIfContext = new IfThenElseStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, Java20Parser.RULE_ifThenElseStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1800;
			this.match(Java20Parser.IF);
			this.state = 1801;
			this.match(Java20Parser.LPAREN);
			this.state = 1802;
			this.expression();
			this.state = 1803;
			this.match(Java20Parser.RPAREN);
			this.state = 1804;
			this.statementNoShortIf();
			this.state = 1805;
			this.match(Java20Parser.ELSE);
			this.state = 1806;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertStatement(): AssertStatementContext {
		let _localctx: AssertStatementContext = new AssertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, Java20Parser.RULE_assertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1808;
			this.match(Java20Parser.ASSERT);
			this.state = 1809;
			this.expression();
			this.state = 1812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.COLON) {
				{
				this.state = 1810;
				this.match(Java20Parser.COLON);
				this.state = 1811;
				this.expression();
				}
			}

			this.state = 1814;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, Java20Parser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1816;
			this.match(Java20Parser.SWITCH);
			this.state = 1817;
			this.match(Java20Parser.LPAREN);
			this.state = 1818;
			this.expression();
			this.state = 1819;
			this.match(Java20Parser.RPAREN);
			this.state = 1820;
			this.switchBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlock(): SwitchBlockContext {
		let _localctx: SwitchBlockContext = new SwitchBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, Java20Parser.RULE_switchBlock);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1848;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1822;
				this.match(Java20Parser.LBRACE);
				this.state = 1823;
				this.switchRule();
				this.state = 1827;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.CASE || _la === Java20Parser.DEFAULT) {
					{
					{
					this.state = 1824;
					this.switchRule();
					}
					}
					this.state = 1829;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1830;
				this.match(Java20Parser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1832;
				this.match(Java20Parser.LBRACE);
				this.state = 1836;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1833;
						this.switchBlockStatementGroup();
						}
						}
					}
					this.state = 1838;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
				}
				this.state = 1844;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.CASE || _la === Java20Parser.DEFAULT) {
					{
					{
					this.state = 1839;
					this.switchLabel();
					this.state = 1840;
					this.match(Java20Parser.COLON);
					}
					}
					this.state = 1846;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1847;
				this.match(Java20Parser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchRule(): SwitchRuleContext {
		let _localctx: SwitchRuleContext = new SwitchRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, Java20Parser.RULE_switchRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1850;
			this.switchLabel();
			this.state = 1851;
			this.match(Java20Parser.ARROW);
			this.state = 1857;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.EXPORTS:
			case Java20Parser.MODULE:
			case Java20Parser.NONSEALED:
			case Java20Parser.OPEN:
			case Java20Parser.OPENS:
			case Java20Parser.PERMITS:
			case Java20Parser.PROVIDES:
			case Java20Parser.RECORD:
			case Java20Parser.REQUIRES:
			case Java20Parser.SEALED:
			case Java20Parser.TO:
			case Java20Parser.TRANSITIVE:
			case Java20Parser.USES:
			case Java20Parser.VAR:
			case Java20Parser.WITH:
			case Java20Parser.YIELD:
			case Java20Parser.BOOLEAN:
			case Java20Parser.BYTE:
			case Java20Parser.CHAR:
			case Java20Parser.DOUBLE:
			case Java20Parser.FLOAT:
			case Java20Parser.INT:
			case Java20Parser.LONG:
			case Java20Parser.NEW:
			case Java20Parser.SHORT:
			case Java20Parser.SUPER:
			case Java20Parser.SWITCH:
			case Java20Parser.THIS:
			case Java20Parser.VOID:
			case Java20Parser.IntegerLiteral:
			case Java20Parser.FloatingPointLiteral:
			case Java20Parser.BooleanLiteral:
			case Java20Parser.CharacterLiteral:
			case Java20Parser.StringLiteral:
			case Java20Parser.TextBlock:
			case Java20Parser.NullLiteral:
			case Java20Parser.LPAREN:
			case Java20Parser.AT:
			case Java20Parser.BANG:
			case Java20Parser.TILDE:
			case Java20Parser.INC:
			case Java20Parser.DEC:
			case Java20Parser.ADD:
			case Java20Parser.SUB:
			case Java20Parser.Identifier:
				{
				this.state = 1852;
				this.expression();
				this.state = 1853;
				this.match(Java20Parser.SEMI);
				}
				break;
			case Java20Parser.LBRACE:
				{
				this.state = 1855;
				this.block();
				}
				break;
			case Java20Parser.THROW:
				{
				this.state = 1856;
				this.throwStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, Java20Parser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1859;
			this.switchLabel();
			this.state = 1860;
			this.match(Java20Parser.COLON);
			this.state = 1866;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.CASE || _la === Java20Parser.DEFAULT) {
				{
				{
				this.state = 1861;
				this.switchLabel();
				this.state = 1862;
				this.match(Java20Parser.COLON);
				}
				}
				this.state = 1868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1869;
			this.blockStatements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, Java20Parser.RULE_switchLabel);
		let _la: number;
		try {
			this.state = 1881;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1871;
				this.match(Java20Parser.CASE);
				this.state = 1872;
				this.caseConstant();
				this.state = 1877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.COMMA) {
					{
					{
					this.state = 1873;
					this.match(Java20Parser.COMMA);
					this.state = 1874;
					this.caseConstant();
					}
					}
					this.state = 1879;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case Java20Parser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1880;
				this.match(Java20Parser.DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseConstant(): CaseConstantContext {
		let _localctx: CaseConstantContext = new CaseConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, Java20Parser.RULE_caseConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1883;
			this.conditionalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, Java20Parser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1885;
			this.match(Java20Parser.WHILE);
			this.state = 1886;
			this.match(Java20Parser.LPAREN);
			this.state = 1887;
			this.expression();
			this.state = 1888;
			this.match(Java20Parser.RPAREN);
			this.state = 1889;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext {
		let _localctx: WhileStatementNoShortIfContext = new WhileStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, Java20Parser.RULE_whileStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1891;
			this.match(Java20Parser.WHILE);
			this.state = 1892;
			this.match(Java20Parser.LPAREN);
			this.state = 1893;
			this.expression();
			this.state = 1894;
			this.match(Java20Parser.RPAREN);
			this.state = 1895;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, Java20Parser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1897;
			this.match(Java20Parser.DO);
			this.state = 1898;
			this.statement();
			this.state = 1899;
			this.match(Java20Parser.WHILE);
			this.state = 1900;
			this.match(Java20Parser.LPAREN);
			this.state = 1901;
			this.expression();
			this.state = 1902;
			this.match(Java20Parser.RPAREN);
			this.state = 1903;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, Java20Parser.RULE_forStatement);
		try {
			this.state = 1907;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1905;
				this.basicForStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1906;
				this.enhancedForStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatementNoShortIf(): ForStatementNoShortIfContext {
		let _localctx: ForStatementNoShortIfContext = new ForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, Java20Parser.RULE_forStatementNoShortIf);
		try {
			this.state = 1911;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1909;
				this.basicForStatementNoShortIf();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1910;
				this.enhancedForStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicForStatement(): BasicForStatementContext {
		let _localctx: BasicForStatementContext = new BasicForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, Java20Parser.RULE_basicForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1913;
			this.match(Java20Parser.FOR);
			this.state = 1914;
			this.match(Java20Parser.LPAREN);
			this.state = 1916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java20Parser.FINAL - 35)) | (1 << (Java20Parser.FLOAT - 35)) | (1 << (Java20Parser.INT - 35)) | (1 << (Java20Parser.LONG - 35)) | (1 << (Java20Parser.NEW - 35)) | (1 << (Java20Parser.SHORT - 35)) | (1 << (Java20Parser.SUPER - 35)) | (1 << (Java20Parser.THIS - 35)) | (1 << (Java20Parser.VOID - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 1915;
				this.forInit();
				}
			}

			this.state = 1918;
			this.match(Java20Parser.SEMI);
			this.state = 1920;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 1919;
				this.expression();
				}
			}

			this.state = 1922;
			this.match(Java20Parser.SEMI);
			this.state = 1924;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 1923;
				this.forUpdate();
				}
			}

			this.state = 1926;
			this.match(Java20Parser.RPAREN);
			this.state = 1927;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext {
		let _localctx: BasicForStatementNoShortIfContext = new BasicForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, Java20Parser.RULE_basicForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1929;
			this.match(Java20Parser.FOR);
			this.state = 1930;
			this.match(Java20Parser.LPAREN);
			this.state = 1932;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java20Parser.FINAL - 35)) | (1 << (Java20Parser.FLOAT - 35)) | (1 << (Java20Parser.INT - 35)) | (1 << (Java20Parser.LONG - 35)) | (1 << (Java20Parser.NEW - 35)) | (1 << (Java20Parser.SHORT - 35)) | (1 << (Java20Parser.SUPER - 35)) | (1 << (Java20Parser.THIS - 35)) | (1 << (Java20Parser.VOID - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 1931;
				this.forInit();
				}
			}

			this.state = 1934;
			this.match(Java20Parser.SEMI);
			this.state = 1936;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 1935;
				this.expression();
				}
			}

			this.state = 1938;
			this.match(Java20Parser.SEMI);
			this.state = 1940;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 1939;
				this.forUpdate();
				}
			}

			this.state = 1942;
			this.match(Java20Parser.RPAREN);
			this.state = 1943;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, Java20Parser.RULE_forInit);
		try {
			this.state = 1947;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1945;
				this.statementExpressionList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1946;
				this.localVariableDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, Java20Parser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1949;
			this.statementExpressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementExpressionList(): StatementExpressionListContext {
		let _localctx: StatementExpressionListContext = new StatementExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, Java20Parser.RULE_statementExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1951;
			this.statementExpression();
			this.state = 1956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.COMMA) {
				{
				{
				this.state = 1952;
				this.match(Java20Parser.COMMA);
				this.state = 1953;
				this.statementExpression();
				}
				}
				this.state = 1958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForStatement(): EnhancedForStatementContext {
		let _localctx: EnhancedForStatementContext = new EnhancedForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, Java20Parser.RULE_enhancedForStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1959;
			this.match(Java20Parser.FOR);
			this.state = 1960;
			this.match(Java20Parser.LPAREN);
			this.state = 1961;
			this.localVariableDeclaration();
			this.state = 1962;
			this.match(Java20Parser.COLON);
			this.state = 1963;
			this.expression();
			this.state = 1964;
			this.match(Java20Parser.RPAREN);
			this.state = 1965;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext {
		let _localctx: EnhancedForStatementNoShortIfContext = new EnhancedForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, Java20Parser.RULE_enhancedForStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1967;
			this.match(Java20Parser.FOR);
			this.state = 1968;
			this.match(Java20Parser.LPAREN);
			this.state = 1969;
			this.localVariableDeclaration();
			this.state = 1970;
			this.match(Java20Parser.COLON);
			this.state = 1971;
			this.expression();
			this.state = 1972;
			this.match(Java20Parser.RPAREN);
			this.state = 1973;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, Java20Parser.RULE_breakStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1975;
			this.match(Java20Parser.BREAK);
			this.state = 1977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD))) !== 0) || _la === Java20Parser.Identifier) {
				{
				this.state = 1976;
				this.identifier();
				}
			}

			this.state = 1979;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, Java20Parser.RULE_continueStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1981;
			this.match(Java20Parser.CONTINUE);
			this.state = 1983;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD))) !== 0) || _la === Java20Parser.Identifier) {
				{
				this.state = 1982;
				this.identifier();
				}
			}

			this.state = 1985;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, Java20Parser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1987;
			this.match(Java20Parser.RETURN);
			this.state = 1989;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 1988;
				this.expression();
				}
			}

			this.state = 1991;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, Java20Parser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1993;
			this.match(Java20Parser.THROW);
			this.state = 1994;
			this.expression();
			this.state = 1995;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public synchronizedStatement(): SynchronizedStatementContext {
		let _localctx: SynchronizedStatementContext = new SynchronizedStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, Java20Parser.RULE_synchronizedStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1997;
			this.match(Java20Parser.SYNCHRONIZED);
			this.state = 1998;
			this.match(Java20Parser.LPAREN);
			this.state = 1999;
			this.expression();
			this.state = 2000;
			this.match(Java20Parser.RPAREN);
			this.state = 2001;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, Java20Parser.RULE_tryStatement);
		let _la: number;
		try {
			this.state = 2019;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2003;
				this.match(Java20Parser.TRY);
				this.state = 2004;
				this.block();
				this.state = 2005;
				this.catches();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2007;
				this.match(Java20Parser.TRY);
				this.state = 2008;
				this.block();
				this.state = 2009;
				this.finallyBlock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2011;
				this.match(Java20Parser.TRY);
				this.state = 2012;
				this.block();
				this.state = 2014;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.CATCH) {
					{
					this.state = 2013;
					this.catches();
					}
				}

				this.state = 2016;
				this.finallyBlock();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2018;
				this.tryWithResourcesStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catches(): CatchesContext {
		let _localctx: CatchesContext = new CatchesContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, Java20Parser.RULE_catches);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2021;
			this.catchClause();
			this.state = 2025;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.CATCH) {
				{
				{
				this.state = 2022;
				this.catchClause();
				}
				}
				this.state = 2027;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, Java20Parser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2028;
			this.match(Java20Parser.CATCH);
			this.state = 2029;
			this.match(Java20Parser.LPAREN);
			this.state = 2030;
			this.catchFormalParameter();
			this.state = 2031;
			this.match(Java20Parser.RPAREN);
			this.state = 2032;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchFormalParameter(): CatchFormalParameterContext {
		let _localctx: CatchFormalParameterContext = new CatchFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, Java20Parser.RULE_catchFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.FINAL || _la === Java20Parser.AT) {
				{
				{
				this.state = 2034;
				this.variableModifier();
				}
				}
				this.state = 2039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2040;
			this.catchType();
			this.state = 2041;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, Java20Parser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2043;
			this.unannClassType();
			this.state = 2048;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.BITOR) {
				{
				{
				this.state = 2044;
				this.match(Java20Parser.BITOR);
				this.state = 2045;
				this.classType();
				}
				}
				this.state = 2050;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, Java20Parser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2051;
			this.match(Java20Parser.FINALLY);
			this.state = 2052;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryWithResourcesStatement(): TryWithResourcesStatementContext {
		let _localctx: TryWithResourcesStatementContext = new TryWithResourcesStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, Java20Parser.RULE_tryWithResourcesStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2054;
			this.match(Java20Parser.TRY);
			this.state = 2055;
			this.resourceSpecification();
			this.state = 2056;
			this.block();
			this.state = 2058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.CATCH) {
				{
				this.state = 2057;
				this.catches();
				}
			}

			this.state = 2061;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.FINALLY) {
				{
				this.state = 2060;
				this.finallyBlock();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, Java20Parser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2063;
			this.match(Java20Parser.LPAREN);
			this.state = 2064;
			this.resourceList();
			this.state = 2066;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.SEMI) {
				{
				this.state = 2065;
				this.match(Java20Parser.SEMI);
				}
			}

			this.state = 2068;
			this.match(Java20Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceList(): ResourceListContext {
		let _localctx: ResourceListContext = new ResourceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, Java20Parser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2070;
			this.resource();
			this.state = 2075;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2071;
					this.match(Java20Parser.SEMI);
					this.state = 2072;
					this.resource();
					}
					}
				}
				this.state = 2077;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, Java20Parser.RULE_resource);
		try {
			this.state = 2080;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2078;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2079;
				this.variableAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableAccess(): VariableAccessContext {
		let _localctx: VariableAccessContext = new VariableAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, Java20Parser.RULE_variableAccess);
		try {
			this.state = 2084;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 226, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2082;
				this.expressionName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2083;
				this.fieldAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yieldStatement(): YieldStatementContext {
		let _localctx: YieldStatementContext = new YieldStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, Java20Parser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2086;
			this.match(Java20Parser.YIELD);
			this.state = 2087;
			this.expression();
			this.state = 2088;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, Java20Parser.RULE_pattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2090;
			this.typePattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePattern(): TypePatternContext {
		let _localctx: TypePatternContext = new TypePatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, Java20Parser.RULE_typePattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2092;
			this.localVariableDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, Java20Parser.RULE_expression);
		try {
			this.state = 2096;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2094;
				this.lambdaExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2095;
				this.assignmentExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, Java20Parser.RULE_primary);
		try {
			this.state = 2100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2098;
				this.primaryNoNewArray();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2099;
				this.arrayCreationExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray(): PrimaryNoNewArrayContext {
		let _localctx: PrimaryNoNewArrayContext = new PrimaryNoNewArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, Java20Parser.RULE_primaryNoNewArray);
		let _la: number;
		try {
			this.state = 2319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2102;
				this.literal();
				this.state = 2104;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
				case 1:
					{
					this.state = 2103;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2106;
				this.classLiteral();
				this.state = 2108;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
				case 1:
					{
					this.state = 2107;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2110;
				this.match(Java20Parser.THIS);
				this.state = 2112;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
				case 1:
					{
					this.state = 2111;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2114;
				this.typeName();
				this.state = 2115;
				this.match(Java20Parser.DOT);
				this.state = 2116;
				this.match(Java20Parser.THIS);
				this.state = 2118;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 232, this._ctx) ) {
				case 1:
					{
					this.state = 2117;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2120;
				this.match(Java20Parser.LPAREN);
				this.state = 2121;
				this.expression();
				this.state = 2122;
				this.match(Java20Parser.RPAREN);
				this.state = 2124;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 2123;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2126;
				this.unqualifiedClassInstanceCreationExpression();
				this.state = 2128;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 234, this._ctx) ) {
				case 1:
					{
					this.state = 2127;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2130;
				this.expressionName();
				this.state = 2131;
				this.match(Java20Parser.DOT);
				this.state = 2132;
				this.unqualifiedClassInstanceCreationExpression();
				this.state = 2134;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 235, this._ctx) ) {
				case 1:
					{
					this.state = 2133;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2136;
				this.arrayCreationExpression();
				this.state = 2137;
				this.match(Java20Parser.DOT);
				this.state = 2138;
				this.unqualifiedClassInstanceCreationExpression();
				this.state = 2140;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
				case 1:
					{
					this.state = 2139;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2142;
				this.arrayCreationExpression();
				this.state = 2143;
				this.match(Java20Parser.DOT);
				this.state = 2144;
				this.identifier();
				this.state = 2146;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
				case 1:
					{
					this.state = 2145;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2148;
				this.match(Java20Parser.SUPER);
				this.state = 2149;
				this.match(Java20Parser.DOT);
				this.state = 2150;
				this.identifier();
				this.state = 2152;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
				case 1:
					{
					this.state = 2151;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2154;
				this.typeName();
				this.state = 2155;
				this.match(Java20Parser.DOT);
				this.state = 2156;
				this.match(Java20Parser.SUPER);
				this.state = 2157;
				this.match(Java20Parser.DOT);
				this.state = 2158;
				this.identifier();
				this.state = 2160;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
				case 1:
					{
					this.state = 2159;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2162;
				this.expressionName();
				this.state = 2163;
				this.match(Java20Parser.LBRACK);
				this.state = 2164;
				this.expression();
				this.state = 2165;
				this.match(Java20Parser.RBRACK);
				this.state = 2167;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
				case 1:
					{
					this.state = 2166;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2169;
				this.arrayCreationExpressionWithInitializer();
				this.state = 2170;
				this.match(Java20Parser.LBRACK);
				this.state = 2171;
				this.expression();
				this.state = 2172;
				this.match(Java20Parser.RBRACK);
				this.state = 2174;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
				case 1:
					{
					this.state = 2173;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2176;
				this.methodName();
				this.state = 2177;
				this.match(Java20Parser.LPAREN);
				this.state = 2179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2178;
					this.argumentList();
					}
				}

				this.state = 2181;
				this.match(Java20Parser.RPAREN);
				this.state = 2183;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 243, this._ctx) ) {
				case 1:
					{
					this.state = 2182;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2185;
				this.typeName();
				this.state = 2186;
				this.match(Java20Parser.DOT);
				this.state = 2188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2187;
					this.typeArguments();
					}
				}

				this.state = 2190;
				this.identifier();
				this.state = 2191;
				this.match(Java20Parser.LPAREN);
				this.state = 2193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2192;
					this.argumentList();
					}
				}

				this.state = 2195;
				this.match(Java20Parser.RPAREN);
				this.state = 2197;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
				case 1:
					{
					this.state = 2196;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2199;
				this.expressionName();
				this.state = 2200;
				this.match(Java20Parser.DOT);
				this.state = 2202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2201;
					this.typeArguments();
					}
				}

				this.state = 2204;
				this.identifier();
				this.state = 2205;
				this.match(Java20Parser.LPAREN);
				this.state = 2207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2206;
					this.argumentList();
					}
				}

				this.state = 2209;
				this.match(Java20Parser.RPAREN);
				this.state = 2211;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
				case 1:
					{
					this.state = 2210;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2213;
				this.arrayCreationExpression();
				this.state = 2214;
				this.match(Java20Parser.DOT);
				this.state = 2216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2215;
					this.typeArguments();
					}
				}

				this.state = 2218;
				this.identifier();
				this.state = 2219;
				this.match(Java20Parser.LPAREN);
				this.state = 2221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2220;
					this.argumentList();
					}
				}

				this.state = 2223;
				this.match(Java20Parser.RPAREN);
				this.state = 2225;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 2224;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2227;
				this.match(Java20Parser.SUPER);
				this.state = 2228;
				this.match(Java20Parser.DOT);
				this.state = 2230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2229;
					this.typeArguments();
					}
				}

				this.state = 2232;
				this.identifier();
				this.state = 2233;
				this.match(Java20Parser.LPAREN);
				this.state = 2235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2234;
					this.argumentList();
					}
				}

				this.state = 2237;
				this.match(Java20Parser.RPAREN);
				this.state = 2239;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 255, this._ctx) ) {
				case 1:
					{
					this.state = 2238;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2241;
				this.typeName();
				this.state = 2242;
				this.match(Java20Parser.DOT);
				this.state = 2243;
				this.match(Java20Parser.SUPER);
				this.state = 2244;
				this.match(Java20Parser.DOT);
				this.state = 2246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2245;
					this.typeArguments();
					}
				}

				this.state = 2248;
				this.identifier();
				this.state = 2249;
				this.match(Java20Parser.LPAREN);
				this.state = 2251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2250;
					this.argumentList();
					}
				}

				this.state = 2253;
				this.match(Java20Parser.RPAREN);
				this.state = 2255;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
				case 1:
					{
					this.state = 2254;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 2257;
				this.expressionName();
				this.state = 2258;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2259;
					this.typeArguments();
					}
				}

				this.state = 2262;
				this.identifier();
				this.state = 2264;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 260, this._ctx) ) {
				case 1:
					{
					this.state = 2263;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 2266;
				this.arrayCreationExpression();
				this.state = 2267;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2268;
					this.typeArguments();
					}
				}

				this.state = 2271;
				this.identifier();
				this.state = 2273;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
				case 1:
					{
					this.state = 2272;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 2275;
				this.referenceType();
				this.state = 2276;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2277;
					this.typeArguments();
					}
				}

				this.state = 2280;
				this.identifier();
				this.state = 2282;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
				case 1:
					{
					this.state = 2281;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 2284;
				this.match(Java20Parser.SUPER);
				this.state = 2285;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2286;
					this.typeArguments();
					}
				}

				this.state = 2289;
				this.identifier();
				this.state = 2291;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
				case 1:
					{
					this.state = 2290;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 2293;
				this.typeName();
				this.state = 2294;
				this.match(Java20Parser.DOT);
				this.state = 2295;
				this.match(Java20Parser.SUPER);
				this.state = 2296;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2297;
					this.typeArguments();
					}
				}

				this.state = 2300;
				this.identifier();
				this.state = 2302;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 268, this._ctx) ) {
				case 1:
					{
					this.state = 2301;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 2304;
				this.classType();
				this.state = 2305;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2306;
					this.typeArguments();
					}
				}

				this.state = 2309;
				this.match(Java20Parser.NEW);
				this.state = 2311;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
				case 1:
					{
					this.state = 2310;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 2313;
				this.arrayType();
				this.state = 2314;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2315;
				this.match(Java20Parser.NEW);
				this.state = 2317;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
				case 1:
					{
					this.state = 2316;
					this.pNNA();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pNNA(): PNNAContext {
		let _localctx: PNNAContext = new PNNAContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, Java20Parser.RULE_pNNA);
		let _la: number;
		try {
			this.state = 2358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2321;
				this.match(Java20Parser.DOT);
				this.state = 2322;
				this.unqualifiedClassInstanceCreationExpression();
				this.state = 2324;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 273, this._ctx) ) {
				case 1:
					{
					this.state = 2323;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2326;
				this.match(Java20Parser.DOT);
				this.state = 2327;
				this.identifier();
				this.state = 2329;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
				case 1:
					{
					this.state = 2328;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2331;
				this.match(Java20Parser.LBRACK);
				this.state = 2332;
				this.expression();
				this.state = 2333;
				this.match(Java20Parser.RBRACK);
				this.state = 2335;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
				case 1:
					{
					this.state = 2334;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2337;
				this.match(Java20Parser.DOT);
				this.state = 2339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2338;
					this.typeArguments();
					}
				}

				this.state = 2341;
				this.identifier();
				this.state = 2342;
				this.match(Java20Parser.LPAREN);
				this.state = 2344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2343;
					this.argumentList();
					}
				}

				this.state = 2346;
				this.match(Java20Parser.RPAREN);
				this.state = 2348;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
				case 1:
					{
					this.state = 2347;
					this.pNNA();
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2350;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2351;
					this.typeArguments();
					}
				}

				this.state = 2354;
				this.identifier();
				this.state = 2356;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
				case 1:
					{
					this.state = 2355;
					this.pNNA();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classLiteral(): ClassLiteralContext {
		let _localctx: ClassLiteralContext = new ClassLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, Java20Parser.RULE_classLiteral);
		let _la: number;
		try {
			this.state = 2395;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.EXPORTS:
			case Java20Parser.MODULE:
			case Java20Parser.NONSEALED:
			case Java20Parser.OPEN:
			case Java20Parser.OPENS:
			case Java20Parser.PERMITS:
			case Java20Parser.PROVIDES:
			case Java20Parser.RECORD:
			case Java20Parser.REQUIRES:
			case Java20Parser.SEALED:
			case Java20Parser.TO:
			case Java20Parser.TRANSITIVE:
			case Java20Parser.USES:
			case Java20Parser.VAR:
			case Java20Parser.WITH:
			case Java20Parser.YIELD:
			case Java20Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2360;
				this.typeName();
				this.state = 2365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.LBRACK) {
					{
					{
					this.state = 2361;
					this.match(Java20Parser.LBRACK);
					this.state = 2362;
					this.match(Java20Parser.RBRACK);
					}
					}
					this.state = 2367;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2368;
				this.match(Java20Parser.DOT);
				this.state = 2369;
				this.match(Java20Parser.CLASS);
				}
				break;
			case Java20Parser.BYTE:
			case Java20Parser.CHAR:
			case Java20Parser.DOUBLE:
			case Java20Parser.FLOAT:
			case Java20Parser.INT:
			case Java20Parser.LONG:
			case Java20Parser.SHORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2371;
				this.numericType();
				this.state = 2376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.LBRACK) {
					{
					{
					this.state = 2372;
					this.match(Java20Parser.LBRACK);
					this.state = 2373;
					this.match(Java20Parser.RBRACK);
					}
					}
					this.state = 2378;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2379;
				this.match(Java20Parser.DOT);
				this.state = 2380;
				this.match(Java20Parser.CLASS);
				}
				break;
			case Java20Parser.BOOLEAN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2382;
				this.match(Java20Parser.BOOLEAN);
				this.state = 2387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.LBRACK) {
					{
					{
					this.state = 2383;
					this.match(Java20Parser.LBRACK);
					this.state = 2384;
					this.match(Java20Parser.RBRACK);
					}
					}
					this.state = 2389;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2390;
				this.match(Java20Parser.DOT);
				this.state = 2391;
				this.match(Java20Parser.CLASS);
				}
				break;
			case Java20Parser.VOID:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2392;
				this.match(Java20Parser.VOID);
				this.state = 2393;
				this.match(Java20Parser.DOT);
				this.state = 2394;
				this.match(Java20Parser.CLASS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext {
		let _localctx: ClassInstanceCreationExpressionContext = new ClassInstanceCreationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, Java20Parser.RULE_classInstanceCreationExpression);
		try {
			this.state = 2406;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2397;
				this.unqualifiedClassInstanceCreationExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2398;
				this.expressionName();
				this.state = 2399;
				this.match(Java20Parser.DOT);
				this.state = 2400;
				this.unqualifiedClassInstanceCreationExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2402;
				this.primary();
				this.state = 2403;
				this.match(Java20Parser.DOT);
				this.state = 2404;
				this.unqualifiedClassInstanceCreationExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unqualifiedClassInstanceCreationExpression(): UnqualifiedClassInstanceCreationExpressionContext {
		let _localctx: UnqualifiedClassInstanceCreationExpressionContext = new UnqualifiedClassInstanceCreationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, Java20Parser.RULE_unqualifiedClassInstanceCreationExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2408;
			this.match(Java20Parser.NEW);
			this.state = 2410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.LT) {
				{
				this.state = 2409;
				this.typeArguments();
				}
			}

			this.state = 2412;
			this.classOrInterfaceTypeToInstantiate();
			this.state = 2413;
			this.match(Java20Parser.LPAREN);
			this.state = 2415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
				{
				this.state = 2414;
				this.argumentList();
				}
			}

			this.state = 2417;
			this.match(Java20Parser.RPAREN);
			this.state = 2419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 289, this._ctx) ) {
			case 1:
				{
				this.state = 2418;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceTypeToInstantiate(): ClassOrInterfaceTypeToInstantiateContext {
		let _localctx: ClassOrInterfaceTypeToInstantiateContext = new ClassOrInterfaceTypeToInstantiateContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, Java20Parser.RULE_classOrInterfaceTypeToInstantiate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 2421;
				this.annotation();
				}
				}
				this.state = 2426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2427;
			this.identifier();
			this.state = 2438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.DOT) {
				{
				{
				this.state = 2428;
				this.match(Java20Parser.DOT);
				this.state = 2432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.AT) {
					{
					{
					this.state = 2429;
					this.annotation();
					}
					}
					this.state = 2434;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2435;
				this.identifier();
				}
				}
				this.state = 2440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java20Parser.OACA || _la === Java20Parser.LT) {
				{
				this.state = 2441;
				this.typeArgumentsOrDiamond();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, Java20Parser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 2446;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.LT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2444;
				this.typeArguments();
				}
				break;
			case Java20Parser.OACA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2445;
				this.match(Java20Parser.OACA);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreationExpression(): ArrayCreationExpressionContext {
		let _localctx: ArrayCreationExpressionContext = new ArrayCreationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, Java20Parser.RULE_arrayCreationExpression);
		try {
			this.state = 2450;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2448;
				this.arrayCreationExpressionWithoutInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2449;
				this.arrayCreationExpressionWithInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreationExpressionWithoutInitializer(): ArrayCreationExpressionWithoutInitializerContext {
		let _localctx: ArrayCreationExpressionWithoutInitializerContext = new ArrayCreationExpressionWithoutInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, Java20Parser.RULE_arrayCreationExpressionWithoutInitializer);
		try {
			this.state = 2464;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2452;
				this.match(Java20Parser.NEW);
				this.state = 2453;
				this.primitiveType();
				this.state = 2454;
				this.dimExprs();
				this.state = 2456;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
				case 1:
					{
					this.state = 2455;
					this.dims();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2458;
				this.match(Java20Parser.NEW);
				this.state = 2459;
				this.classType();
				this.state = 2460;
				this.dimExprs();
				this.state = 2462;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 297, this._ctx) ) {
				case 1:
					{
					this.state = 2461;
					this.dims();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreationExpressionWithInitializer(): ArrayCreationExpressionWithInitializerContext {
		let _localctx: ArrayCreationExpressionWithInitializerContext = new ArrayCreationExpressionWithInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, Java20Parser.RULE_arrayCreationExpressionWithInitializer);
		try {
			this.state = 2476;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2466;
				this.match(Java20Parser.NEW);
				this.state = 2467;
				this.primitiveType();
				this.state = 2468;
				this.dims();
				this.state = 2469;
				this.arrayInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2471;
				this.match(Java20Parser.NEW);
				this.state = 2472;
				this.classOrInterfaceType();
				this.state = 2473;
				this.dims();
				this.state = 2474;
				this.arrayInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimExprs(): DimExprsContext {
		let _localctx: DimExprsContext = new DimExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, Java20Parser.RULE_dimExprs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2478;
			this.dimExpr();
			this.state = 2482;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2479;
					this.dimExpr();
					}
					}
				}
				this.state = 2484;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimExpr(): DimExprContext {
		let _localctx: DimExprContext = new DimExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, Java20Parser.RULE_dimExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.AT) {
				{
				{
				this.state = 2485;
				this.annotation();
				}
				}
				this.state = 2490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2491;
			this.match(Java20Parser.LBRACK);
			this.state = 2492;
			this.expression();
			this.state = 2493;
			this.match(Java20Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayAccess(): ArrayAccessContext {
		let _localctx: ArrayAccessContext = new ArrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, Java20Parser.RULE_arrayAccess);
		try {
			this.state = 2510;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 302, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2495;
				this.expressionName();
				this.state = 2496;
				this.match(Java20Parser.LBRACK);
				this.state = 2497;
				this.expression();
				this.state = 2498;
				this.match(Java20Parser.RBRACK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2500;
				this.primaryNoNewArray();
				this.state = 2501;
				this.match(Java20Parser.LBRACK);
				this.state = 2502;
				this.expression();
				this.state = 2503;
				this.match(Java20Parser.RBRACK);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2505;
				this.arrayCreationExpressionWithInitializer();
				this.state = 2506;
				this.match(Java20Parser.LBRACK);
				this.state = 2507;
				this.expression();
				this.state = 2508;
				this.match(Java20Parser.RBRACK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldAccess(): FieldAccessContext {
		let _localctx: FieldAccessContext = new FieldAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, Java20Parser.RULE_fieldAccess);
		try {
			this.state = 2525;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 303, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2512;
				this.primary();
				this.state = 2513;
				this.match(Java20Parser.DOT);
				this.state = 2514;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2516;
				this.match(Java20Parser.SUPER);
				this.state = 2517;
				this.match(Java20Parser.DOT);
				this.state = 2518;
				this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2519;
				this.typeName();
				this.state = 2520;
				this.match(Java20Parser.DOT);
				this.state = 2521;
				this.match(Java20Parser.SUPER);
				this.state = 2522;
				this.match(Java20Parser.DOT);
				this.state = 2523;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodInvocation(): MethodInvocationContext {
		let _localctx: MethodInvocationContext = new MethodInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, Java20Parser.RULE_methodInvocation);
		let _la: number;
		try {
			this.state = 2596;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 315, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2527;
				this.methodName();
				this.state = 2528;
				this.match(Java20Parser.LPAREN);
				this.state = 2530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2529;
					this.argumentList();
					}
				}

				this.state = 2532;
				this.match(Java20Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2534;
				this.typeName();
				this.state = 2535;
				this.match(Java20Parser.DOT);
				this.state = 2537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2536;
					this.typeArguments();
					}
				}

				this.state = 2539;
				this.identifier();
				this.state = 2540;
				this.match(Java20Parser.LPAREN);
				this.state = 2542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2541;
					this.argumentList();
					}
				}

				this.state = 2544;
				this.match(Java20Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2546;
				this.expressionName();
				this.state = 2547;
				this.match(Java20Parser.DOT);
				this.state = 2549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2548;
					this.typeArguments();
					}
				}

				this.state = 2551;
				this.identifier();
				this.state = 2552;
				this.match(Java20Parser.LPAREN);
				this.state = 2554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2553;
					this.argumentList();
					}
				}

				this.state = 2556;
				this.match(Java20Parser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2558;
				this.primary();
				this.state = 2559;
				this.match(Java20Parser.DOT);
				this.state = 2561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2560;
					this.typeArguments();
					}
				}

				this.state = 2563;
				this.identifier();
				this.state = 2564;
				this.match(Java20Parser.LPAREN);
				this.state = 2566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2565;
					this.argumentList();
					}
				}

				this.state = 2568;
				this.match(Java20Parser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2570;
				this.match(Java20Parser.SUPER);
				this.state = 2571;
				this.match(Java20Parser.DOT);
				this.state = 2573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2572;
					this.typeArguments();
					}
				}

				this.state = 2575;
				this.identifier();
				this.state = 2576;
				this.match(Java20Parser.LPAREN);
				this.state = 2578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2577;
					this.argumentList();
					}
				}

				this.state = 2580;
				this.match(Java20Parser.RPAREN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2582;
				this.typeName();
				this.state = 2583;
				this.match(Java20Parser.DOT);
				this.state = 2584;
				this.match(Java20Parser.SUPER);
				this.state = 2585;
				this.match(Java20Parser.DOT);
				this.state = 2587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2586;
					this.typeArguments();
					}
				}

				this.state = 2589;
				this.identifier();
				this.state = 2590;
				this.match(Java20Parser.LPAREN);
				this.state = 2592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java20Parser.FLOAT - 37)) | (1 << (Java20Parser.INT - 37)) | (1 << (Java20Parser.LONG - 37)) | (1 << (Java20Parser.NEW - 37)) | (1 << (Java20Parser.SHORT - 37)) | (1 << (Java20Parser.SUPER - 37)) | (1 << (Java20Parser.SWITCH - 37)) | (1 << (Java20Parser.THIS - 37)) | (1 << (Java20Parser.VOID - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java20Parser.IntegerLiteral - 69)) | (1 << (Java20Parser.FloatingPointLiteral - 69)) | (1 << (Java20Parser.BooleanLiteral - 69)) | (1 << (Java20Parser.CharacterLiteral - 69)) | (1 << (Java20Parser.StringLiteral - 69)) | (1 << (Java20Parser.TextBlock - 69)) | (1 << (Java20Parser.NullLiteral - 69)) | (1 << (Java20Parser.LPAREN - 69)) | (1 << (Java20Parser.AT - 69)) | (1 << (Java20Parser.BANG - 69)) | (1 << (Java20Parser.TILDE - 69)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java20Parser.INC - 102)) | (1 << (Java20Parser.DEC - 102)) | (1 << (Java20Parser.ADD - 102)) | (1 << (Java20Parser.SUB - 102)) | (1 << (Java20Parser.Identifier - 102)))) !== 0)) {
					{
					this.state = 2591;
					this.argumentList();
					}
				}

				this.state = 2594;
				this.match(Java20Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, Java20Parser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2598;
			this.expression();
			this.state = 2603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java20Parser.COMMA) {
				{
				{
				this.state = 2599;
				this.match(Java20Parser.COMMA);
				this.state = 2600;
				this.expression();
				}
				}
				this.state = 2605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodReference(): MethodReferenceContext {
		let _localctx: MethodReferenceContext = new MethodReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, Java20Parser.RULE_methodReference);
		let _la: number;
		try {
			this.state = 2653;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 323, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2606;
				this.expressionName();
				this.state = 2607;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2608;
					this.typeArguments();
					}
				}

				this.state = 2611;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2613;
				this.primary();
				this.state = 2614;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2615;
					this.typeArguments();
					}
				}

				this.state = 2618;
				this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2620;
				this.referenceType();
				this.state = 2621;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2622;
					this.typeArguments();
					}
				}

				this.state = 2625;
				this.identifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2627;
				this.match(Java20Parser.SUPER);
				this.state = 2628;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2629;
					this.typeArguments();
					}
				}

				this.state = 2632;
				this.identifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2633;
				this.typeName();
				this.state = 2634;
				this.match(Java20Parser.DOT);
				this.state = 2635;
				this.match(Java20Parser.SUPER);
				this.state = 2636;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2637;
					this.typeArguments();
					}
				}

				this.state = 2640;
				this.identifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2642;
				this.classType();
				this.state = 2643;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java20Parser.LT) {
					{
					this.state = 2644;
					this.typeArguments();
					}
				}

				this.state = 2647;
				this.match(Java20Parser.NEW);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2649;
				this.arrayType();
				this.state = 2650;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2651;
				this.match(Java20Parser.NEW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 434, Java20Parser.RULE_postfixExpression);
		try {
			this.state = 2663;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 326, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2655;
				this.primary();
				this.state = 2657;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 324, this._ctx) ) {
				case 1:
					{
					this.state = 2656;
					this.pfE();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2659;
				this.expressionName();
				this.state = 2661;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 325, this._ctx) ) {
				case 1:
					{
					this.state = 2660;
					this.pfE();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pfE(): PfEContext {
		let _localctx: PfEContext = new PfEContext(this._ctx, this.state);
		this.enterRule(_localctx, 436, Java20Parser.RULE_pfE);
		try {
			this.state = 2673;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.INC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2665;
				this.match(Java20Parser.INC);
				this.state = 2667;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 327, this._ctx) ) {
				case 1:
					{
					this.state = 2666;
					this.pfE();
					}
					break;
				}
				}
				break;
			case Java20Parser.DEC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2669;
				this.match(Java20Parser.DEC);
				this.state = 2671;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 328, this._ctx) ) {
				case 1:
					{
					this.state = 2670;
					this.pfE();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postIncrementExpression(): PostIncrementExpressionContext {
		let _localctx: PostIncrementExpressionContext = new PostIncrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 438, Java20Parser.RULE_postIncrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2675;
			this.postfixExpression();
			this.state = 2676;
			this.match(Java20Parser.INC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postDecrementExpression(): PostDecrementExpressionContext {
		let _localctx: PostDecrementExpressionContext = new PostDecrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 440, Java20Parser.RULE_postDecrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2678;
			this.postfixExpression();
			this.state = 2679;
			this.match(Java20Parser.DEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 442, Java20Parser.RULE_unaryExpression);
		try {
			this.state = 2688;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.INC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2681;
				this.preIncrementExpression();
				}
				break;
			case Java20Parser.DEC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2682;
				this.preDecrementExpression();
				}
				break;
			case Java20Parser.ADD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2683;
				this.match(Java20Parser.ADD);
				this.state = 2684;
				this.unaryExpression();
				}
				break;
			case Java20Parser.SUB:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2685;
				this.match(Java20Parser.SUB);
				this.state = 2686;
				this.unaryExpression();
				}
				break;
			case Java20Parser.EXPORTS:
			case Java20Parser.MODULE:
			case Java20Parser.NONSEALED:
			case Java20Parser.OPEN:
			case Java20Parser.OPENS:
			case Java20Parser.PERMITS:
			case Java20Parser.PROVIDES:
			case Java20Parser.RECORD:
			case Java20Parser.REQUIRES:
			case Java20Parser.SEALED:
			case Java20Parser.TO:
			case Java20Parser.TRANSITIVE:
			case Java20Parser.USES:
			case Java20Parser.VAR:
			case Java20Parser.WITH:
			case Java20Parser.YIELD:
			case Java20Parser.BOOLEAN:
			case Java20Parser.BYTE:
			case Java20Parser.CHAR:
			case Java20Parser.DOUBLE:
			case Java20Parser.FLOAT:
			case Java20Parser.INT:
			case Java20Parser.LONG:
			case Java20Parser.NEW:
			case Java20Parser.SHORT:
			case Java20Parser.SUPER:
			case Java20Parser.SWITCH:
			case Java20Parser.THIS:
			case Java20Parser.VOID:
			case Java20Parser.IntegerLiteral:
			case Java20Parser.FloatingPointLiteral:
			case Java20Parser.BooleanLiteral:
			case Java20Parser.CharacterLiteral:
			case Java20Parser.StringLiteral:
			case Java20Parser.TextBlock:
			case Java20Parser.NullLiteral:
			case Java20Parser.LPAREN:
			case Java20Parser.AT:
			case Java20Parser.BANG:
			case Java20Parser.TILDE:
			case Java20Parser.Identifier:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2687;
				this.unaryExpressionNotPlusMinus();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public preIncrementExpression(): PreIncrementExpressionContext {
		let _localctx: PreIncrementExpressionContext = new PreIncrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 444, Java20Parser.RULE_preIncrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2690;
			this.match(Java20Parser.INC);
			this.state = 2691;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public preDecrementExpression(): PreDecrementExpressionContext {
		let _localctx: PreDecrementExpressionContext = new PreDecrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 446, Java20Parser.RULE_preDecrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2693;
			this.match(Java20Parser.DEC);
			this.state = 2694;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		let _localctx: UnaryExpressionNotPlusMinusContext = new UnaryExpressionNotPlusMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 448, Java20Parser.RULE_unaryExpressionNotPlusMinus);
		try {
			this.state = 2703;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 331, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2696;
				this.postfixExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2697;
				this.match(Java20Parser.TILDE);
				this.state = 2698;
				this.unaryExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2699;
				this.match(Java20Parser.BANG);
				this.state = 2700;
				this.unaryExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2701;
				this.castExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2702;
				this.switchExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 450, Java20Parser.RULE_castExpression);
		let _la: number;
		try {
			this.state = 2732;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 334, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2705;
				this.match(Java20Parser.LPAREN);
				this.state = 2706;
				this.primitiveType();
				this.state = 2707;
				this.match(Java20Parser.RPAREN);
				this.state = 2708;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2710;
				this.match(Java20Parser.LPAREN);
				this.state = 2711;
				this.referenceType();
				this.state = 2715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.BITAND) {
					{
					{
					this.state = 2712;
					this.additionalBound();
					}
					}
					this.state = 2717;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2718;
				this.match(Java20Parser.RPAREN);
				this.state = 2719;
				this.unaryExpressionNotPlusMinus();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2721;
				this.match(Java20Parser.LPAREN);
				this.state = 2722;
				this.referenceType();
				this.state = 2726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.BITAND) {
					{
					{
					this.state = 2723;
					this.additionalBound();
					}
					}
					this.state = 2728;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2729;
				this.match(Java20Parser.RPAREN);
				this.state = 2730;
				this.lambdaExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = _localctx;
		let _startState: number = 452;
		this.enterRecursionRule(_localctx, 452, Java20Parser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2735;
			this.unaryExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2748;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 336, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2746;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 335, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_multiplicativeExpression);
						this.state = 2737;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2738;
						this.match(Java20Parser.MUL);
						this.state = 2739;
						this.unaryExpression();
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_multiplicativeExpression);
						this.state = 2740;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2741;
						this.match(Java20Parser.DIV);
						this.state = 2742;
						this.unaryExpression();
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_multiplicativeExpression);
						this.state = 2743;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2744;
						this.match(Java20Parser.MOD);
						this.state = 2745;
						this.unaryExpression();
						}
						break;
					}
					}
				}
				this.state = 2750;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 336, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = _localctx;
		let _startState: number = 454;
		this.enterRecursionRule(_localctx, 454, Java20Parser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2752;
			this.multiplicativeExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2762;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 338, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2760;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 337, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_additiveExpression);
						this.state = 2754;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2755;
						this.match(Java20Parser.ADD);
						this.state = 2756;
						this.multiplicativeExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_additiveExpression);
						this.state = 2757;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2758;
						this.match(Java20Parser.SUB);
						this.state = 2759;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2764;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 338, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public shiftExpression(): ShiftExpressionContext;
	public shiftExpression(_p: number): ShiftExpressionContext;
	// @RuleVersion(0)
	public shiftExpression(_p?: number): ShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, _parentState);
		let _prevctx: ShiftExpressionContext = _localctx;
		let _startState: number = 456;
		this.enterRecursionRule(_localctx, 456, Java20Parser.RULE_shiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2766;
			this.additiveExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2783;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 340, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2781;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 339, this._ctx) ) {
					case 1:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_shiftExpression);
						this.state = 2768;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2769;
						this.match(Java20Parser.LT);
						this.state = 2770;
						this.match(Java20Parser.LT);
						this.state = 2771;
						this.additiveExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_shiftExpression);
						this.state = 2772;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2773;
						this.match(Java20Parser.GT);
						this.state = 2774;
						this.match(Java20Parser.GT);
						this.state = 2775;
						this.additiveExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_shiftExpression);
						this.state = 2776;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2777;
						this.match(Java20Parser.GT);
						this.state = 2778;
						this.match(Java20Parser.GT);
						this.state = 2779;
						this.match(Java20Parser.GT);
						this.state = 2780;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2785;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 340, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = _localctx;
		let _startState: number = 458;
		this.enterRecursionRule(_localctx, 458, Java20Parser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2787;
			this.shiftExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2809;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 343, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2807;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 342, this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_relationalExpression);
						this.state = 2789;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 2790;
						this.match(Java20Parser.LT);
						this.state = 2791;
						this.shiftExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_relationalExpression);
						this.state = 2792;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 2793;
						this.match(Java20Parser.GT);
						this.state = 2794;
						this.shiftExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_relationalExpression);
						this.state = 2795;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2796;
						this.match(Java20Parser.LE);
						this.state = 2797;
						this.shiftExpression(0);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_relationalExpression);
						this.state = 2798;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2799;
						this.match(Java20Parser.GE);
						this.state = 2800;
						this.shiftExpression(0);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_relationalExpression);
						this.state = 2801;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2802;
						this.match(Java20Parser.INSTANCEOF);
						this.state = 2805;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 341, this._ctx) ) {
						case 1:
							{
							this.state = 2803;
							this.referenceType();
							}
							break;

						case 2:
							{
							this.state = 2804;
							this.pattern();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 2811;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 343, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = _localctx;
		let _startState: number = 460;
		this.enterRecursionRule(_localctx, 460, Java20Parser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2813;
			this.relationalExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2823;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 345, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2821;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 344, this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_equalityExpression);
						this.state = 2815;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2816;
						this.match(Java20Parser.EQUAL);
						this.state = 2817;
						this.relationalExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_equalityExpression);
						this.state = 2818;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2819;
						this.match(Java20Parser.NOTEQUAL);
						this.state = 2820;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2825;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 345, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	// @RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, _parentState);
		let _prevctx: AndExpressionContext = _localctx;
		let _startState: number = 462;
		this.enterRecursionRule(_localctx, 462, Java20Parser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2827;
			this.equalityExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2834;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_andExpression);
					this.state = 2829;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2830;
					this.match(Java20Parser.BITAND);
					this.state = 2831;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 2836;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public exclusiveOrExpression(): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(_p: number): ExclusiveOrExpressionContext;
	// @RuleVersion(0)
	public exclusiveOrExpression(_p?: number): ExclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ExclusiveOrExpressionContext = _localctx;
		let _startState: number = 464;
		this.enterRecursionRule(_localctx, 464, Java20Parser.RULE_exclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2838;
			this.andExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2845;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 347, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_exclusiveOrExpression);
					this.state = 2840;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2841;
					this.match(Java20Parser.CARET);
					this.state = 2842;
					this.andExpression(0);
					}
					}
				}
				this.state = 2847;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 347, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public inclusiveOrExpression(): InclusiveOrExpressionContext;
	public inclusiveOrExpression(_p: number): InclusiveOrExpressionContext;
	// @RuleVersion(0)
	public inclusiveOrExpression(_p?: number): InclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: InclusiveOrExpressionContext = _localctx;
		let _startState: number = 466;
		this.enterRecursionRule(_localctx, 466, Java20Parser.RULE_inclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2849;
			this.exclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2856;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 348, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_inclusiveOrExpression);
					this.state = 2851;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2852;
					this.match(Java20Parser.BITOR);
					this.state = 2853;
					this.exclusiveOrExpression(0);
					}
					}
				}
				this.state = 2858;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 348, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public conditionalAndExpression(): ConditionalAndExpressionContext;
	public conditionalAndExpression(_p: number): ConditionalAndExpressionContext;
	// @RuleVersion(0)
	public conditionalAndExpression(_p?: number): ConditionalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalAndExpressionContext = new ConditionalAndExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalAndExpressionContext = _localctx;
		let _startState: number = 468;
		this.enterRecursionRule(_localctx, 468, Java20Parser.RULE_conditionalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2860;
			this.inclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2867;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 349, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalAndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_conditionalAndExpression);
					this.state = 2862;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2863;
					this.match(Java20Parser.AND);
					this.state = 2864;
					this.inclusiveOrExpression(0);
					}
					}
				}
				this.state = 2869;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 349, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public conditionalOrExpression(): ConditionalOrExpressionContext;
	public conditionalOrExpression(_p: number): ConditionalOrExpressionContext;
	// @RuleVersion(0)
	public conditionalOrExpression(_p?: number): ConditionalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalOrExpressionContext = new ConditionalOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalOrExpressionContext = _localctx;
		let _startState: number = 470;
		this.enterRecursionRule(_localctx, 470, Java20Parser.RULE_conditionalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2871;
			this.conditionalAndExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2878;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 350, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java20Parser.RULE_conditionalOrExpression);
					this.state = 2873;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2874;
					this.match(Java20Parser.OR);
					this.state = 2875;
					this.conditionalAndExpression(0);
					}
					}
				}
				this.state = 2880;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 350, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 472, Java20Parser.RULE_conditionalExpression);
		try {
			this.state = 2894;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 351, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2881;
				this.conditionalOrExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2882;
				this.conditionalOrExpression(0);
				this.state = 2883;
				this.match(Java20Parser.QUESTION);
				this.state = 2884;
				this.expression();
				this.state = 2885;
				this.match(Java20Parser.COLON);
				this.state = 2886;
				this.conditionalExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2888;
				this.conditionalOrExpression(0);
				this.state = 2889;
				this.match(Java20Parser.QUESTION);
				this.state = 2890;
				this.expression();
				this.state = 2891;
				this.match(Java20Parser.COLON);
				this.state = 2892;
				this.lambdaExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 474, Java20Parser.RULE_assignmentExpression);
		try {
			this.state = 2898;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 352, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2896;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2897;
				this.assignment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 476, Java20Parser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2900;
			this.leftHandSide();
			this.state = 2901;
			this.assignmentOperator();
			this.state = 2902;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public leftHandSide(): LeftHandSideContext {
		let _localctx: LeftHandSideContext = new LeftHandSideContext(this._ctx, this.state);
		this.enterRule(_localctx, 478, Java20Parser.RULE_leftHandSide);
		try {
			this.state = 2907;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 353, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2904;
				this.expressionName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2905;
				this.fieldAccess();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2906;
				this.arrayAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 480, Java20Parser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2909;
			_la = this._input.LA(1);
			if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (Java20Parser.ASSIGN - 88)) | (1 << (Java20Parser.ADD_ASSIGN - 88)) | (1 << (Java20Parser.SUB_ASSIGN - 88)) | (1 << (Java20Parser.MUL_ASSIGN - 88)) | (1 << (Java20Parser.DIV_ASSIGN - 88)) | (1 << (Java20Parser.AND_ASSIGN - 88)) | (1 << (Java20Parser.OR_ASSIGN - 88)) | (1 << (Java20Parser.XOR_ASSIGN - 88)) | (1 << (Java20Parser.MOD_ASSIGN - 88)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (Java20Parser.LSHIFT_ASSIGN - 120)) | (1 << (Java20Parser.RSHIFT_ASSIGN - 120)) | (1 << (Java20Parser.URSHIFT_ASSIGN - 120)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 482, Java20Parser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2911;
			this.lambdaParameters();
			this.state = 2912;
			this.match(Java20Parser.ARROW);
			this.state = 2913;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 484, Java20Parser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 2921;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2915;
				this.match(Java20Parser.LPAREN);
				this.state = 2917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java20Parser.EXPORTS) | (1 << Java20Parser.MODULE) | (1 << Java20Parser.NONSEALED) | (1 << Java20Parser.OPEN) | (1 << Java20Parser.OPENS) | (1 << Java20Parser.PERMITS) | (1 << Java20Parser.PROVIDES) | (1 << Java20Parser.RECORD) | (1 << Java20Parser.REQUIRES) | (1 << Java20Parser.SEALED) | (1 << Java20Parser.TO) | (1 << Java20Parser.TRANSITIVE) | (1 << Java20Parser.USES) | (1 << Java20Parser.VAR) | (1 << Java20Parser.WITH) | (1 << Java20Parser.YIELD) | (1 << Java20Parser.BOOLEAN) | (1 << Java20Parser.BYTE) | (1 << Java20Parser.CHAR) | (1 << Java20Parser.DOUBLE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java20Parser.FINAL - 35)) | (1 << (Java20Parser.FLOAT - 35)) | (1 << (Java20Parser.INT - 35)) | (1 << (Java20Parser.LONG - 35)) | (1 << (Java20Parser.SHORT - 35)))) !== 0) || _la === Java20Parser.AT || _la === Java20Parser.Identifier) {
					{
					this.state = 2916;
					this.lambdaParameterList();
					}
				}

				this.state = 2919;
				this.match(Java20Parser.RPAREN);
				}
				break;
			case Java20Parser.EXPORTS:
			case Java20Parser.MODULE:
			case Java20Parser.NONSEALED:
			case Java20Parser.OPEN:
			case Java20Parser.OPENS:
			case Java20Parser.PERMITS:
			case Java20Parser.PROVIDES:
			case Java20Parser.RECORD:
			case Java20Parser.REQUIRES:
			case Java20Parser.SEALED:
			case Java20Parser.TO:
			case Java20Parser.TRANSITIVE:
			case Java20Parser.USES:
			case Java20Parser.VAR:
			case Java20Parser.WITH:
			case Java20Parser.YIELD:
			case Java20Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2920;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameterList(): LambdaParameterListContext {
		let _localctx: LambdaParameterListContext = new LambdaParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 486, Java20Parser.RULE_lambdaParameterList);
		let _la: number;
		try {
			this.state = 2939;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 358, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2923;
				this.lambdaParameter();
				this.state = 2928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.COMMA) {
					{
					{
					this.state = 2924;
					this.match(Java20Parser.COMMA);
					this.state = 2925;
					this.lambdaParameter();
					}
					}
					this.state = 2930;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2931;
				this.identifier();
				this.state = 2936;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.COMMA) {
					{
					{
					this.state = 2932;
					this.match(Java20Parser.COMMA);
					this.state = 2933;
					this.identifier();
					}
					}
					this.state = 2938;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameter(): LambdaParameterContext {
		let _localctx: LambdaParameterContext = new LambdaParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 488, Java20Parser.RULE_lambdaParameter);
		let _la: number;
		try {
			this.state = 2951;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 360, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2944;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java20Parser.FINAL || _la === Java20Parser.AT) {
					{
					{
					this.state = 2941;
					this.variableModifier();
					}
					}
					this.state = 2946;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2947;
				this.lambdaParameterType();
				this.state = 2948;
				this.variableDeclaratorId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2950;
				this.variableArityParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameterType(): LambdaParameterTypeContext {
		let _localctx: LambdaParameterTypeContext = new LambdaParameterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 490, Java20Parser.RULE_lambdaParameterType);
		try {
			this.state = 2955;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 361, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2953;
				this.unannType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2954;
				this.match(Java20Parser.VAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 492, Java20Parser.RULE_lambdaBody);
		try {
			this.state = 2959;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java20Parser.EXPORTS:
			case Java20Parser.MODULE:
			case Java20Parser.NONSEALED:
			case Java20Parser.OPEN:
			case Java20Parser.OPENS:
			case Java20Parser.PERMITS:
			case Java20Parser.PROVIDES:
			case Java20Parser.RECORD:
			case Java20Parser.REQUIRES:
			case Java20Parser.SEALED:
			case Java20Parser.TO:
			case Java20Parser.TRANSITIVE:
			case Java20Parser.USES:
			case Java20Parser.VAR:
			case Java20Parser.WITH:
			case Java20Parser.YIELD:
			case Java20Parser.BOOLEAN:
			case Java20Parser.BYTE:
			case Java20Parser.CHAR:
			case Java20Parser.DOUBLE:
			case Java20Parser.FLOAT:
			case Java20Parser.INT:
			case Java20Parser.LONG:
			case Java20Parser.NEW:
			case Java20Parser.SHORT:
			case Java20Parser.SUPER:
			case Java20Parser.SWITCH:
			case Java20Parser.THIS:
			case Java20Parser.VOID:
			case Java20Parser.IntegerLiteral:
			case Java20Parser.FloatingPointLiteral:
			case Java20Parser.BooleanLiteral:
			case Java20Parser.CharacterLiteral:
			case Java20Parser.StringLiteral:
			case Java20Parser.TextBlock:
			case Java20Parser.NullLiteral:
			case Java20Parser.LPAREN:
			case Java20Parser.AT:
			case Java20Parser.BANG:
			case Java20Parser.TILDE:
			case Java20Parser.INC:
			case Java20Parser.DEC:
			case Java20Parser.ADD:
			case Java20Parser.SUB:
			case Java20Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2957;
				this.expression();
				}
				break;
			case Java20Parser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2958;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchExpression(): SwitchExpressionContext {
		let _localctx: SwitchExpressionContext = new SwitchExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 494, Java20Parser.RULE_switchExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2961;
			this.match(Java20Parser.SWITCH);
			this.state = 2962;
			this.match(Java20Parser.LPAREN);
			this.state = 2963;
			this.expression();
			this.state = 2964;
			this.match(Java20Parser.RPAREN);
			this.state = 2965;
			this.switchBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 496, Java20Parser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2967;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 226:
			return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);

		case 227:
			return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

		case 228:
			return this.shiftExpression_sempred(_localctx as ShiftExpressionContext, predIndex);

		case 229:
			return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

		case 230:
			return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

		case 231:
			return this.andExpression_sempred(_localctx as AndExpressionContext, predIndex);

		case 232:
			return this.exclusiveOrExpression_sempred(_localctx as ExclusiveOrExpressionContext, predIndex);

		case 233:
			return this.inclusiveOrExpression_sempred(_localctx as InclusiveOrExpressionContext, predIndex);

		case 234:
			return this.conditionalAndExpression_sempred(_localctx as ConditionalAndExpressionContext, predIndex);

		case 235:
			return this.conditionalOrExpression_sempred(_localctx as ConditionalOrExpressionContext, predIndex);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftExpression_sempred(_localctx: ShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 3);

		case 6:
			return this.precpred(this._ctx, 2);

		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 5);

		case 9:
			return this.precpred(this._ctx, 4);

		case 10:
			return this.precpred(this._ctx, 3);

		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(_localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveOrExpression_sempred(_localctx: ExclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveOrExpression_sempred(_localctx: InclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalAndExpression_sempred(_localctx: ConditionalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalOrExpression_sempred(_localctx: ConditionalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x80\u0B9C\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC" +
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1" +
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6" +
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB" +
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0" +
		"\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5" +
		"\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA" +
		"\x04\xEB\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x04\xEE\t\xEE\x04\xEF\t\xEF" +
		"\x04\xF0\t\xF0\x04\xF1\t\xF1\x04\xF2\t\xF2\x04\xF3\t\xF3\x04\xF4\t\xF4" +
		"\x04\xF5\t\xF5\x04\xF6\t\xF6\x04\xF7\t\xF7\x04\xF8\t\xF8\x04\xF9\t\xF9" +
		"\x04\xFA\t\xFA\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u01FA\n" +
		"\x03\x03\x04\x03\x04\x05\x04\u01FE\n\x04\x03\x05\x03\x05\x05\x05\u0202" +
		"\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x07" +
		"\n\u020D\n\n\f\n\x0E\n\u0210\v\n\x03\n\x03\n\x05\n\u0214\n\n\x03\v\x03" +
		"\v\x05\v\u0218\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u0221\n\x0E\x03\x0F\x03\x0F\x07\x0F\u0225\n\x0F\f\x0F\x0E\x0F\u0228" +
		"\v\x0F\x03\x0F\x03\x0F\x05\x0F\u022C\n\x0F\x03\x0F\x05\x0F\u022F\n\x0F" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u0234\n\x10\x03\x10\x07\x10\u0237\n\x10" +
		"\f\x10\x0E\x10\u023A\v\x10\x03\x10\x03\x10\x05\x10\u023E\n\x10\x03\x10" +
		"\x05\x10\u0241\n\x10\x03\x11\x07\x11\u0244\n\x11\f\x11\x0E\x11\u0247\v" +
		"\x11\x03\x11\x03\x11\x05\x11\u024B\n\x11\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\u0250\n\x11\f\x11\x0E\x11\u0253\v\x11\x03\x11\x03\x11\x05\x11\u0257\n" +
		"\x11\x03\x11\x03\x11\x03\x11\x07\x11\u025C\n\x11\f\x11\x0E\x11\u025F\v" +
		"\x11\x03\x11\x03\x11\x05\x11\u0263\n\x11\x05\x11\u0265\n\x11\x03\x12\x03" +
		"\x12\x03\x13\x07\x13\u026A\n\x13\f\x13\x0E\x13\u026D\v\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x05\x14\u027A\n\x14\x03\x15\x07\x15\u027D\n\x15\f\x15\x0E\x15\u0280" +
		"\v\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0285\n\x15\f\x15\x0E\x15\u0288" +
		"\v\x15\x03\x15\x03\x15\x07\x15\u028C\n\x15\f\x15\x0E\x15\u028F\v\x15\x03" +
		"\x16\x07\x16\u0292\n\x16\f\x16\x0E\x16\u0295\v\x16\x03\x16\x03\x16\x05" +
		"\x16\u0299\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18" +
		"\u02A1\n\x18\f\x18\x0E\x18\u02A4\v\x18\x05\x18\u02A6\n\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07" +
		"\x1B\u02B2\n\x1B\f\x1B\x0E\x1B\u02B5\v\x1B\x03\x1C\x03\x1C\x05\x1C\u02B9" +
		"\n\x1C\x03\x1D\x07\x1D\u02BC\n\x1D\f\x1D\x0E\x1D\u02BF\v\x1D\x03\x1D\x03" +
		"\x1D\x05\x1D\u02C3\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u02C9" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02CE\n\x1F\x03 \x03 \x03 \x05" +
		" \u02D3\n \x03!\x03!\x03!\x05!\u02D8\n!\x03\"\x03\"\x03\"\x05\"\u02DD" +
		"\n\"\x03#\x03#\x03#\x05#\u02E2\n#\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x05" +
		"%\u02EB\n%\x03&\x03&\x05&\u02EF\n&\x03\'\x05\'\u02F2\n\'\x03\'\x07\'\u02F5" +
		"\n\'\f\'\x0E\'\u02F8\v\'\x03\'\x07\'\u02FB\n\'\f\'\x0E\'\u02FE\v\'\x03" +
		"(\x07(\u0301\n(\f(\x0E(\u0304\v(\x03(\x03(\x03)\x07)\u0309\n)\f)\x0E)" +
		"\u030C\v)\x03)\x03)\x03)\x03)\x07)\u0312\n)\f)\x0E)\u0315\v)\x03)\x03" +
		")\x03*\x03*\x03+\x03+\x03+\x03+\x05+\u031F\n+\x03,\x03,\x03,\x03,\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x050\u033C\n0\x031\x071\u033F" +
		"\n1\f1\x0E1\u0342\v1\x031\x051\u0345\n1\x031\x031\x031\x031\x071\u034B" +
		"\n1\f1\x0E1\u034E\v1\x031\x031\x071\u0352\n1\f1\x0E1\u0355\v1\x031\x03" +
		"1\x032\x032\x072\u035B\n2\f2\x0E2\u035E\v2\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x072\u0369\n2\f2\x0E2\u036C\v2\x052\u036E\n2\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x072\u0378\n2\f2\x0E2\u037B\v2\x052\u037D" +
		"\n2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x072\u038B" +
		"\n2\f2\x0E2\u038E\v2\x032\x032\x052\u0392\n2\x033\x033\x034\x034\x034" +
		"\x054\u0399\n4\x035\x075\u039C\n5\f5\x0E5\u039F\v5\x035\x035\x035\x05" +
		"5\u03A4\n5\x035\x055\u03A7\n5\x035\x055\u03AA\n5\x035\x055\u03AD\n5\x03" +
		"5\x035\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x056\u03BB\n" +
		"6\x037\x037\x037\x037\x038\x038\x038\x078\u03C4\n8\f8\x0E8\u03C7\v8\x03" +
		"9\x039\x039\x03:\x03:\x03:\x03;\x03;\x03;\x07;\u03D2\n;\f;\x0E;\u03D5" +
		"\v;\x03<\x03<\x03<\x03<\x07<\u03DB\n<\f<\x0E<\u03DE\v<\x03=\x03=\x07=" +
		"\u03E2\n=\f=\x0E=\u03E5\v=\x03=\x03=\x03>\x03>\x03>\x03>\x05>\u03ED\n" +
		">\x03?\x03?\x03?\x03?\x03?\x05?\u03F4\n?\x03@\x07@\u03F7\n@\f@\x0E@\u03FA" +
		"\v@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u0408" +
		"\nA\x03B\x03B\x03B\x07B\u040D\nB\fB\x0EB\u0410\vB\x03C\x03C\x03C\x05C" +
		"\u0415\nC\x03D\x03D\x05D\u0419\nD\x03E\x03E\x05E\u041D\nE\x03F\x03F\x05" +
		"F\u0421\nF\x03G\x03G\x05G\u0425\nG\x03H\x03H\x03H\x05H\u042A\nH\x03I\x03" +
		"I\x03I\x07I\u042F\nI\fI\x0EI\u0432\vI\x05I\u0434\nI\x03I\x03I\x05I\u0438" +
		"\nI\x03I\x05I\u043B\nI\x03J\x03J\x07J\u043F\nJ\fJ\x0EJ\u0442\vJ\x03J\x03" +
		"J\x05J\u0446\nJ\x03J\x05J\u0449\nJ\x03K\x03K\x05K\u044D\nK\x03K\x03K\x05" +
		"K\u0451\nK\x03K\x03K\x07K\u0455\nK\fK\x0EK\u0458\vK\x03K\x03K\x05K\u045C" +
		"\nK\x05K\u045E\nK\x03L\x03L\x03M\x03M\x03N\x03N\x03N\x05N\u0467\nN\x03" +
		"N\x03N\x03O\x07O\u046C\nO\fO\x0EO\u046F\vO\x03O\x03O\x03O\x03P\x03P\x03" +
		"P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u047E\nP\x03Q\x03Q\x07Q\u0482" +
		"\nQ\fQ\x0EQ\u0485\vQ\x05Q\u0487\nQ\x03Q\x03Q\x03Q\x05Q\u048C\nQ\x03R\x03" +
		"R\x05R\u0490\nR\x03S\x03S\x03S\x03S\x03S\x05S\u0497\nS\x03S\x05S\u049A" +
		"\nS\x03S\x03S\x05S\u049E\nS\x03T\x07T\u04A1\nT\fT\x0ET\u04A4\vT\x03T\x03" +
		"T\x03T\x03T\x05T\u04AA\nT\x03T\x03T\x03U\x03U\x03U\x07U\u04B1\nU\fU\x0E" +
		"U\u04B4\vU\x03V\x07V\u04B7\nV\fV\x0EV\u04BA\vV\x03V\x03V\x03V\x03V\x05" +
		"V\u04C0\nV\x03W\x07W\u04C3\nW\fW\x0EW\u04C6\vW\x03W\x03W\x07W\u04CA\n" +
		"W\fW\x0EW\u04CD\vW\x03W\x03W\x03W\x03X\x03X\x05X\u04D4\nX\x03Y\x03Y\x03" +
		"Y\x03Z\x03Z\x03Z\x07Z\u04DC\nZ\fZ\x0EZ\u04DF\vZ\x03[\x03[\x05[\u04E3\n" +
		"[\x03\\\x03\\\x05\\\u04E7\n\\\x03]\x03]\x03^\x03^\x03^\x03_\x07_\u04EF" +
		"\n_\f_\x0E_\u04F2\v_\x03_\x03_\x05_\u04F6\n_\x03_\x03_\x03`\x03`\x03`" +
		"\x03`\x05`\u04FE\n`\x03a\x05a\u0501\na\x03a\x03a\x03a\x03a\x03a\x05a\u0508" +
		"\na\x03a\x05a\u050B\na\x03a\x03a\x03b\x03b\x03c\x03c\x05c\u0513\nc\x03" +
		"c\x05c\u0516\nc\x03c\x03c\x03d\x05d\u051B\nd\x03d\x03d\x03d\x05d\u0520" +
		"\nd\x03d\x03d\x03d\x03d\x05d\u0526\nd\x03d\x03d\x05d\u052A\nd\x03d\x03" +
		"d\x03d\x05d\u052F\nd\x03d\x03d\x03d\x05d\u0534\nd\x03e\x07e\u0537\ne\f" +
		"e\x0Ee\u053A\ve\x03e\x03e\x03e\x05e\u053F\ne\x03e\x03e\x03f\x03f\x05f" +
		"\u0545\nf\x03f\x05f\u0548\nf\x03f\x05f\u054B\nf\x03f\x03f\x03g\x03g\x03" +
		"g\x07g\u0552\ng\fg\x0Eg\u0555\vg\x03h\x07h\u0558\nh\fh\x0Eh\u055B\vh\x03" +
		"h\x03h\x03h\x05h\u0560\nh\x03h\x05h\u0563\nh\x03h\x05h\u0566\nh\x03i\x03" +
		"i\x03j\x03j\x07j\u056C\nj\fj\x0Ej\u056F\vj\x03k\x07k\u0572\nk\fk\x0Ek" +
		"\u0575\vk\x03k\x03k\x03k\x05k\u057A\nk\x03k\x03k\x05k\u057E\nk\x03k\x03" +
		"k\x03l\x03l\x05l\u0584\nl\x03l\x03l\x03m\x03m\x03m\x07m\u058B\nm\fm\x0E" +
		"m\u058E\vm\x03n\x07n\u0591\nn\fn\x0En\u0594\vn\x03n\x03n\x03n\x03n\x05" +
		"n\u059A\nn\x03o\x07o\u059D\no\fo\x0Eo\u05A0\vo\x03o\x03o\x07o\u05A4\n" +
		"o\fo\x0Eo\u05A7\vo\x03o\x03o\x03o\x03p\x03p\x03q\x03q\x07q\u05B0\nq\f" +
		"q\x0Eq\u05B3\vq\x03q\x03q\x03r\x03r\x05r\u05B9\nr\x03s\x07s\u05BC\ns\f" +
		"s\x0Es\u05BF\vs\x03s\x03s\x03s\x03t\x03t\x05t\u05C6\nt\x03u\x07u\u05C9" +
		"\nu\fu\x0Eu\u05CC\vu\x03u\x03u\x03u\x05u\u05D1\nu\x03u\x05u\u05D4\nu\x03" +
		"u\x05u\u05D7\nu\x03u\x03u\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x03" +
		"v\x05v\u05E4\nv\x03w\x03w\x03w\x03x\x03x\x03x\x03x\x07x\u05ED\nx\fx\x0E" +
		"x\u05F0\vx\x03y\x03y\x07y\u05F4\ny\fy\x0Ey\u05F7\vy\x03y\x03y\x03z\x03" +
		"z\x03z\x03z\x03z\x05z\u0600\nz\x03{\x07{\u0603\n{\f{\x0E{\u0606\v{\x03" +
		"{\x03{\x03{\x03{\x03|\x03|\x03|\x03|\x05|\u0610\n|\x03}\x07}\u0613\n}" +
		"\f}\x0E}\u0616\v}\x03}\x03}\x03}\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x05" +
		"~\u0622\n~\x03\x7F\x07\x7F\u0625\n\x7F\f\x7F\x0E\x7F\u0628\v\x7F\x03\x7F" +
		"\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x07\x80\u0631\n\x80\f" +
		"\x80\x0E\x80\u0634\v\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03\x81" +
		"\x03\x81\x05\x81\u063D\n\x81\x03\x82\x07\x82\u0640\n\x82\f\x82\x0E\x82" +
		"\u0643\v\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82\u064A\n\x82" +
		"\x03\x82\x05\x82\u064D\n\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83\x05" +
		"\x83\u0654\n\x83\x03\x84\x03\x84\x03\x84\x03\x85\x03\x85\x03\x85\x05\x85" +
		"\u065C\n\x85\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0662\n\x86\x03\x86" +
		"\x03\x86\x03\x87\x03\x87\x03\x87\x07\x87\u0669\n\x87\f\x87\x0E\x87\u066C" +
		"\v\x87\x03\x88\x03\x88\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x05\x89" +
		"\u0675\n\x89\x03\x8A\x03\x8A\x05\x8A\u0679\n\x8A\x03\x8A\x05\x8A\u067C" +
		"\n\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8B\x07\x8B\u0683\n\x8B\f\x8B" +
		"\x0E\x8B\u0686\v\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8D\x03" +
		"\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x05\x8E\u0693\n\x8E\x03\x8E\x05\x8E" +
		"\u0696\n\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x07\x8F\u069D\n\x8F" +
		"\f\x8F\x0E\x8F\u06A0\v\x8F\x03\x90\x03\x90\x05\x90\u06A4\n\x90\x03\x90" +
		"\x03\x90\x03\x91\x03\x91\x07\x91\u06AA\n\x91\f\x91\x0E\x91\u06AD\v\x91" +
		"\x03\x92\x03\x92\x03\x92\x05\x92\u06B2\n\x92\x03\x93\x03\x93\x05\x93\u06B6" +
		"\n\x93\x03\x94\x07\x94\u06B9\n\x94\f\x94\x0E\x94\u06BC\v\x94\x03\x94\x03" +
		"\x94\x05\x94\u06C0\n\x94\x03\x95\x03\x95\x05\x95\u06C4\n\x95\x03\x96\x03" +
		"\x96\x03\x96\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x05\x97\u06CF" +
		"\n\x97\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x05\x98\u06D6\n\x98\x03" +
		"\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03" +
		"\x99\x03\x99\x03\x99\x03\x99\x05\x99\u06E5\n\x99\x03\x9A\x03\x9A\x03\x9B" +
		"\x03\x9B\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9D\x03\x9D" +
		"\x03\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x05\x9E" +
		"\u06FB\n\x9E\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\xA0\x03" +
		"\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03" +
		"\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03\xA2\x03" +
		"\xA2\x05\xA2\u0717\n\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA3" +
		"\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA4\x07\xA4\u0724\n\xA4\f\xA4\x0E" +
		"\xA4\u0727\v\xA4\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x07\xA4\u072D\n\xA4\f" +
		"\xA4\x0E\xA4\u0730\v\xA4\x03\xA4\x03\xA4\x03\xA4\x07\xA4\u0735\n\xA4\f" +
		"\xA4\x0E\xA4\u0738\v\xA4\x03\xA4\x05\xA4\u073B\n\xA4\x03\xA5\x03\xA5\x03" +
		"\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x05\xA5\u0744\n\xA5\x03\xA6\x03\xA6" +
		"\x03\xA6\x03\xA6\x03\xA6\x07\xA6\u074B\n\xA6\f\xA6\x0E\xA6\u074E\v\xA6" +
		"\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x07\xA7\u0756\n\xA7\f" +
		"\xA7\x0E\xA7\u0759\v\xA7\x03\xA7\x05\xA7\u075C\n\xA7\x03\xA8\x03\xA8\x03" +
		"\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAA\x03" +
		"\xAA\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03" +
		"\xAB\x03\xAB\x03\xAC\x03\xAC\x05\xAC\u0776\n\xAC\x03\xAD\x03\xAD\x05\xAD" +
		"\u077A\n\xAD\x03\xAE\x03\xAE\x03\xAE\x05\xAE\u077F\n\xAE\x03\xAE\x03\xAE" +
		"\x05\xAE\u0783\n\xAE\x03\xAE\x03\xAE\x05\xAE\u0787\n\xAE\x03\xAE\x03\xAE" +
		"\x03\xAE\x03\xAF\x03\xAF\x03\xAF\x05\xAF\u078F\n\xAF\x03\xAF\x03\xAF\x05" +
		"\xAF\u0793\n\xAF\x03\xAF\x03\xAF\x05\xAF\u0797\n\xAF\x03\xAF\x03\xAF\x03" +
		"\xAF\x03\xB0\x03\xB0\x05\xB0\u079E\n\xB0\x03\xB1\x03\xB1\x03\xB2\x03\xB2" +
		"\x03\xB2\x07\xB2\u07A5\n\xB2\f\xB2\x0E\xB2\u07A8\v\xB2\x03\xB3\x03\xB3" +
		"\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4" +
		"\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB5\x03\xB5\x05\xB5\u07BC" +
		"\n\xB5\x03\xB5\x03\xB5\x03\xB6\x03\xB6\x05\xB6\u07C2\n\xB6\x03\xB6\x03" +
		"\xB6\x03\xB7\x03\xB7\x05\xB7\u07C8\n\xB7\x03\xB7\x03\xB7\x03\xB8\x03\xB8" +
		"\x03\xB8\x03\xB8\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xBA" +
		"\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA" +
		"\x03\xBA\x05\xBA\u07E1\n\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u07E6\n\xBA" +
		"\x03\xBB\x03\xBB\x07\xBB\u07EA\n\xBB\f\xBB\x0E\xBB\u07ED\v\xBB\x03\xBC" +
		"\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBD\x07\xBD\u07F6\n\xBD\f" +
		"\xBD\x0E\xBD\u07F9\v\xBD\x03\xBD\x03\xBD\x03\xBD\x03\xBE\x03\xBE\x03\xBE" +
		"\x07\xBE\u0801\n\xBE\f\xBE\x0E\xBE\u0804\v\xBE\x03\xBF\x03\xBF\x03\xBF" +
		"\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x05\xC0\u080D\n\xC0\x03\xC0\x05\xC0\u0810" +
		"\n\xC0\x03\xC1\x03\xC1\x03\xC1\x05\xC1\u0815\n\xC1\x03\xC1\x03\xC1\x03" +
		"\xC2\x03\xC2\x03\xC2\x07\xC2\u081C\n\xC2\f\xC2\x0E\xC2\u081F\v\xC2\x03" +
		"\xC3\x03\xC3\x05\xC3\u0823\n\xC3\x03\xC4\x03\xC4\x05\xC4\u0827\n\xC4\x03" +
		"\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC6\x03\xC6\x03\xC7\x03\xC7\x03\xC8\x03" +
		"\xC8\x05\xC8\u0833\n\xC8\x03\xC9\x03\xC9\x05\xC9\u0837\n\xC9\x03\xCA\x03" +
		"\xCA\x05\xCA\u083B\n\xCA\x03\xCA\x03\xCA\x05\xCA\u083F\n\xCA\x03\xCA\x03" +
		"\xCA\x05\xCA\u0843\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u0849" +
		"\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u084F\n\xCA\x03\xCA\x03" +
		"\xCA\x05\xCA\u0853\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u0859" +
		"\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u085F\n\xCA\x03\xCA\x03" +
		"\xCA\x03\xCA\x03\xCA\x05\xCA\u0865\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA" +
		"\x05\xCA\u086B\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05" +
		"\xCA\u0873\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u087A" +
		"\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u0881\n\xCA\x03" +
		"\xCA\x03\xCA\x03\xCA\x05\xCA\u0886\n\xCA\x03\xCA\x03\xCA\x05\xCA\u088A" +
		"\n\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u088F\n\xCA\x03\xCA\x03\xCA\x03" +
		"\xCA\x05\xCA\u0894\n\xCA\x03\xCA\x03\xCA\x05\xCA\u0898\n\xCA\x03\xCA\x03" +
		"\xCA\x03\xCA\x05\xCA\u089D\n\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u08A2" +
		"\n\xCA\x03\xCA\x03\xCA\x05\xCA\u08A6\n\xCA\x03\xCA\x03\xCA\x03\xCA\x05" +
		"\xCA\u08AB\n\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u08B0\n\xCA\x03\xCA\x03" +
		"\xCA\x05\xCA\u08B4\n\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u08B9\n\xCA\x03" +
		"\xCA\x03\xCA\x03\xCA\x05\xCA\u08BE\n\xCA\x03\xCA\x03\xCA\x05\xCA\u08C2" +
		"\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u08C9\n\xCA\x03" +
		"\xCA\x03\xCA\x03\xCA\x05\xCA\u08CE\n\xCA\x03\xCA\x03\xCA\x05\xCA\u08D2" +
		"\n\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u08D7\n\xCA\x03\xCA\x03\xCA\x05" +
		"\xCA\u08DB\n\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u08E0\n\xCA\x03\xCA\x03" +
		"\xCA\x05\xCA\u08E4\n\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u08E9\n\xCA\x03" +
		"\xCA\x03\xCA\x05\xCA\u08ED\n\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u08F2" +
		"\n\xCA\x03\xCA\x03\xCA\x05\xCA\u08F6\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03" +
		"\xCA\x03\xCA\x05\xCA\u08FD\n\xCA\x03\xCA\x03\xCA\x05\xCA\u0901\n\xCA\x03" +
		"\xCA\x03\xCA\x03\xCA\x05\xCA\u0906\n\xCA\x03\xCA\x03\xCA\x05\xCA\u090A" +
		"\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u0910\n";
	private static readonly _serializedATNSegment1: string =
		"\xCA\x05\xCA\u0912\n\xCA\x03\xCB\x03\xCB\x03\xCB\x05\xCB\u0917\n\xCB\x03" +
		"\xCB\x03\xCB\x03\xCB\x05\xCB\u091C\n\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB" +
		"\x05\xCB\u0922\n\xCB\x03\xCB\x03\xCB\x05\xCB\u0926\n\xCB\x03\xCB\x03\xCB" +
		"\x03\xCB\x05\xCB\u092B\n\xCB\x03\xCB\x03\xCB\x05\xCB\u092F\n\xCB\x03\xCB" +
		"\x03\xCB\x05\xCB\u0933\n\xCB\x03\xCB\x03\xCB\x05\xCB\u0937\n\xCB\x05\xCB" +
		"\u0939\n\xCB\x03\xCC\x03\xCC\x03\xCC\x07\xCC\u093E\n\xCC\f\xCC\x0E\xCC" +
		"\u0941\v\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x07\xCC\u0949" +
		"\n\xCC\f\xCC\x0E\xCC\u094C\v\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC" +
		"\x03\xCC\x07\xCC\u0954\n\xCC\f\xCC\x0E\xCC\u0957\v\xCC\x03\xCC\x03\xCC" +
		"\x03\xCC\x03\xCC\x03\xCC\x05\xCC\u095E\n\xCC\x03\xCD\x03\xCD\x03\xCD\x03" +
		"\xCD\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u0969\n\xCD\x03\xCE" +
		"\x03\xCE\x05\xCE\u096D\n\xCE\x03\xCE\x03\xCE\x03\xCE\x05\xCE\u0972\n\xCE" +
		"\x03\xCE\x03\xCE\x05\xCE\u0976\n\xCE\x03\xCF\x07\xCF\u0979\n\xCF\f\xCF" +
		"\x0E\xCF\u097C\v\xCF\x03\xCF\x03\xCF\x03\xCF\x07\xCF\u0981\n\xCF\f\xCF" +
		"\x0E\xCF\u0984\v\xCF\x03\xCF\x07\xCF\u0987\n\xCF\f\xCF\x0E\xCF\u098A\v" +
		"\xCF\x03\xCF\x05\xCF\u098D\n\xCF\x03\xD0\x03\xD0\x05\xD0\u0991\n\xD0\x03" +
		"\xD1\x03\xD1\x05\xD1\u0995\n\xD1\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x05\xD2" +
		"\u099B\n\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x05\xD2\u09A1\n\xD2\x05\xD2" +
		"\u09A3\n\xD2\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03" +
		"\xD3\x03\xD3\x03\xD3\x05\xD3\u09AF\n\xD3\x03\xD4\x03\xD4\x07\xD4\u09B3" +
		"\n\xD4\f\xD4\x0E\xD4\u09B6\v\xD4\x03\xD5\x07\xD5\u09B9\n\xD5\f\xD5\x0E" +
		"\xD5\u09BC\v\xD5\x03\xD5\x03\xD5\x03\xD5\x03\xD5\x03\xD6\x03\xD6\x03\xD6" +
		"\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD6" +
		"\x03\xD6\x03\xD6\x03\xD6\x05\xD6\u09D1\n\xD6\x03\xD7\x03\xD7\x03\xD7\x03" +
		"\xD7\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x03" +
		"\xD7\x05\xD7\u09E0\n\xD7\x03\xD8\x03\xD8\x03\xD8\x05\xD8\u09E5\n\xD8\x03" +
		"\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x05\xD8\u09EC\n\xD8\x03\xD8\x03\xD8" +
		"\x03\xD8\x05\xD8\u09F1\n\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x05" +
		"\xD8\u09F8\n\xD8\x03\xD8\x03\xD8\x03\xD8\x05\xD8\u09FD\n\xD8\x03\xD8\x03" +
		"\xD8\x03\xD8\x03\xD8\x03\xD8\x05\xD8\u0A04\n\xD8\x03\xD8\x03\xD8\x03\xD8" +
		"\x05\xD8\u0A09\n\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x05\xD8\u0A10" +
		"\n\xD8\x03\xD8\x03\xD8\x03\xD8\x05\xD8\u0A15\n\xD8\x03\xD8\x03\xD8\x03" +
		"\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x05\xD8\u0A1E\n\xD8\x03\xD8\x03\xD8" +
		"\x03\xD8\x05\xD8\u0A23\n\xD8\x03\xD8\x03\xD8\x05\xD8\u0A27\n\xD8\x03\xD9" +
		"\x03\xD9\x03\xD9\x07\xD9\u0A2C\n\xD9\f\xD9\x0E\xD9\u0A2F\v\xD9\x03\xDA" +
		"\x03\xDA\x03\xDA\x05\xDA\u0A34\n\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03" +
		"\xDA\x05\xDA\u0A3B\n\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x05\xDA" +
		"\u0A42\n\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x05\xDA\u0A49\n\xDA" +
		"\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x05\xDA\u0A51\n\xDA\x03" +
		"\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x05\xDA\u0A58\n\xDA\x03\xDA\x03\xDA" +
		"\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x05\xDA\u0A60\n\xDA\x03\xDB\x03\xDB\x05" +
		"\xDB\u0A64\n\xDB\x03\xDB\x03\xDB\x05\xDB\u0A68\n\xDB\x05\xDB\u0A6A\n\xDB" +
		"\x03\xDC\x03\xDC\x05\xDC\u0A6E\n\xDC\x03\xDC\x03\xDC\x05\xDC\u0A72\n\xDC" +
		"\x05\xDC\u0A74\n\xDC\x03\xDD\x03\xDD\x03\xDD\x03\xDE\x03\xDE\x03\xDE\x03" +
		"\xDF\x03\xDF\x03\xDF\x03\xDF\x03\xDF\x03\xDF\x03\xDF\x05\xDF\u0A83\n\xDF" +
		"\x03\xE0\x03\xE0\x03\xE0\x03\xE1\x03\xE1\x03\xE1\x03\xE2\x03\xE2\x03\xE2" +
		"\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x05\xE2\u0A92\n\xE2\x03\xE3\x03\xE3\x03" +
		"\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x07\xE3\u0A9C\n\xE3\f\xE3" +
		"\x0E\xE3\u0A9F\v\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x07" +
		"\xE3\u0AA7\n\xE3\f\xE3\x0E\xE3\u0AAA\v\xE3\x03\xE3\x03\xE3\x03\xE3\x05" +
		"\xE3\u0AAF\n\xE3\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4" +
		"\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x07\xE4\u0ABD\n\xE4\f\xE4\x0E" +
		"\xE4\u0AC0\v\xE4\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5" +
		"\x03\xE5\x03\xE5\x07\xE5\u0ACB\n\xE5\f\xE5\x0E\xE5\u0ACE\v\xE5\x03\xE6" +
		"\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6" +
		"\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x07\xE6\u0AE0\n\xE6\f" +
		"\xE6\x0E\xE6\u0AE3\v\xE6\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7" +
		"\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7" +
		"\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x05\xE7\u0AF8\n\xE7\x07\xE7\u0AFA\n\xE7" +
		"\f\xE7\x0E\xE7\u0AFD\v\xE7\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03" +
		"\xE8\x03\xE8\x03\xE8\x03\xE8\x07\xE8\u0B08\n\xE8\f\xE8\x0E\xE8\u0B0B\v" +
		"\xE8\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x07\xE9\u0B13\n\xE9" +
		"\f\xE9\x0E\xE9\u0B16\v\xE9\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03" +
		"\xEA\x07\xEA\u0B1E\n\xEA\f\xEA\x0E\xEA\u0B21\v\xEA\x03\xEB\x03\xEB\x03" +
		"\xEB\x03\xEB\x03\xEB\x03\xEB\x07\xEB\u0B29\n\xEB\f\xEB\x0E\xEB\u0B2C\v" +
		"\xEB\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x07\xEC\u0B34\n\xEC" +
		"\f\xEC\x0E\xEC\u0B37\v\xEC\x03\xED\x03\xED\x03\xED\x03\xED\x03\xED\x03" +
		"\xED\x07\xED\u0B3F\n\xED\f\xED\x0E\xED\u0B42\v\xED\x03\xEE\x03\xEE\x03" +
		"\xEE\x03\xEE\x03\xEE\x03\xEE\x03\xEE\x03\xEE\x03\xEE\x03\xEE\x03\xEE\x03" +
		"\xEE\x03\xEE\x05\xEE\u0B51\n\xEE\x03\xEF\x03\xEF\x05\xEF\u0B55\n\xEF\x03" +
		"\xF0\x03\xF0\x03\xF0\x03\xF0\x03\xF1\x03\xF1\x03\xF1\x05\xF1\u0B5E\n\xF1" +
		"\x03\xF2\x03\xF2\x03\xF3\x03\xF3\x03\xF3\x03\xF3\x03\xF4\x03\xF4\x05\xF4" +
		"\u0B68\n\xF4\x03\xF4\x03\xF4\x05\xF4\u0B6C\n\xF4\x03\xF5\x03\xF5\x03\xF5" +
		"\x07\xF5\u0B71\n\xF5\f\xF5\x0E\xF5\u0B74\v\xF5\x03\xF5\x03\xF5\x03\xF5" +
		"\x07\xF5\u0B79\n\xF5\f\xF5\x0E\xF5\u0B7C\v\xF5\x05\xF5\u0B7E\n\xF5\x03" +
		"\xF6\x07\xF6\u0B81\n\xF6\f\xF6\x0E\xF6\u0B84\v\xF6\x03\xF6\x03\xF6\x03" +
		"\xF6\x03\xF6\x05\xF6\u0B8A\n\xF6\x03\xF7\x03\xF7\x05\xF7\u0B8E\n\xF7\x03" +
		"\xF8\x03\xF8\x05\xF8\u0B92\n\xF8\x03\xF9\x03\xF9\x03\xF9\x03\xF9\x03\xF9" +
		"\x03\xF9\x03\xFA\x03\xFA\x03\xFA\x02\x02\f\u01C6\u01C8\u01CA\u01CC\u01CE" +
		"\u01D0\u01D2\u01D4\u01D6\u01D8\xFB\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
		"\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
		"\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02" +
		"\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02" +
		"\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
		"\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
		"\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
		"\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E" +
		"\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C" +
		"\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A" +
		"\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158" +
		"\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166" +
		"\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174" +
		"\x02\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182" +
		"\x02\u0184\x02\u0186\x02\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190" +
		"\x02\u0192\x02\u0194\x02\u0196\x02\u0198\x02\u019A\x02\u019C\x02\u019E" +
		"\x02\u01A0\x02\u01A2\x02\u01A4\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC" +
		"\x02\u01AE\x02\u01B0\x02\u01B2\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA" +
		"\x02\u01BC\x02\u01BE\x02\u01C0\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8" +
		"\x02\u01CA\x02\u01CC\x02\u01CE\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6" +
		"\x02\u01D8\x02\u01DA\x02\u01DC\x02\u01DE\x02\u01E0\x02\u01E2\x02\u01E4" +
		"\x02\u01E6\x02\u01E8\x02\u01EA\x02\u01EC\x02\u01EE\x02\u01F0\x02\u01F2" +
		"\x02\x02\v\x04\x02\x03\x05\x07\x13\b\x02\x03\x05\x07\b\n\n\f\f\x0E\x10" +
		"\x12\x12\x04\x02\x03\x05\x07\x12\x03\x02GM\x07\x02\x18\x18\x1B\x1B..0" +
		"088\x04\x02!!\'\'\x04\x02\x0F\x0F99\x04\x02;;>>\x04\x02ZZr|\x02\u0C9F" +
		"\x02\u01F4\x03\x02\x02\x02\x04\u01F9\x03\x02\x02\x02\x06\u01FD\x03\x02" +
		"\x02\x02\b\u0201\x03\x02\x02\x02\n\u0203\x03\x02\x02\x02\f\u0205\x03\x02" +
		"\x02\x02\x0E\u0207\x03\x02\x02\x02\x10\u0209\x03\x02\x02\x02\x12\u020E" +
		"\x03\x02\x02\x02\x14\u0217\x03\x02\x02\x02\x16\u0219\x03\x02\x02\x02\x18" +
		"\u021B\x03\x02\x02\x02\x1A\u0220\x03\x02\x02\x02\x1C\u0222\x03\x02\x02" +
		"\x02\x1E\u0233\x03\x02\x02\x02 \u0264\x03\x02\x02\x02\"\u0266\x03\x02" +
		"\x02\x02$\u026B\x03\x02\x02\x02&\u0279\x03\x02\x02\x02(\u027E\x03\x02" +
		"\x02\x02*\u0293\x03\x02\x02\x02,\u029A\x03\x02\x02\x02.\u029C\x03\x02" +
		"\x02\x020\u02A7\x03\x02\x02\x022\u02AA\x03\x02\x02\x024\u02AE\x03\x02" +
		"\x02\x026\u02B8\x03\x02\x02\x028\u02BD\x03\x02\x02\x02:\u02C8\x03\x02" +
		"\x02\x02<\u02CA\x03\x02\x02\x02>\u02CF\x03\x02\x02\x02@\u02D4\x03\x02" +
		"\x02\x02B\u02D9\x03\x02\x02\x02D\u02E1\x03\x02\x02\x02F\u02E5\x03\x02" +
		"\x02\x02H\u02E7\x03\x02\x02\x02J\u02EE\x03\x02\x02\x02L\u02F1\x03\x02" +
		"\x02\x02N\u0302\x03\x02\x02\x02P\u030A\x03\x02\x02\x02R\u0318\x03\x02" +
		"\x02\x02T\u031E\x03\x02\x02\x02V\u0320\x03\x02\x02\x02X\u0324\x03\x02" +
		"\x02\x02Z\u032A\x03\x02\x02\x02\\\u0331\x03\x02\x02\x02^\u033B\x03\x02" +
		"\x02\x02`\u0340\x03\x02\x02\x02b\u0391\x03\x02\x02\x02d\u0393\x03\x02" +
		"\x02\x02f\u0398\x03\x02\x02\x02h\u039D\x03\x02\x02\x02j\u03BA\x03\x02" +
		"\x02\x02l\u03BC\x03\x02\x02\x02n\u03C0\x03\x02\x02\x02p\u03C8\x03\x02" +
		"\x02\x02r\u03CB\x03\x02\x02\x02t\u03CE\x03\x02\x02\x02v\u03D6\x03\x02" +
		"\x02\x02x\u03DF\x03\x02\x02\x02z\u03EC\x03\x02\x02\x02|\u03F3\x03\x02" +
		"\x02\x02~\u03F8\x03\x02\x02\x02\x80\u0407\x03\x02\x02\x02\x82\u0409\x03" +
		"\x02\x02\x02\x84\u0411\x03\x02\x02\x02\x86\u0416\x03\x02\x02\x02\x88\u041C" +
		"\x03\x02\x02\x02\x8A\u0420\x03\x02\x02\x02\x8C\u0424\x03\x02\x02\x02\x8E" +
		"\u0429\x03\x02\x02\x02\x90\u0433\x03\x02\x02\x02\x92\u043C\x03\x02\x02" +
		"\x02\x94\u045D\x03\x02\x02\x02\x96\u045F\x03\x02\x02\x02\x98\u0461\x03" +
		"\x02\x02\x02\x9A\u0466\x03\x02\x02\x02\x9C\u046D\x03\x02\x02\x02\x9E\u047D" +
		"\x03\x02\x02\x02\xA0\u0486\x03\x02\x02\x02\xA2\u048F\x03\x02\x02\x02\xA4" +
		"\u0491\x03\x02\x02\x02\xA6\u04A2\x03\x02\x02\x02\xA8\u04AD\x03\x02\x02" +
		"\x02\xAA\u04BF\x03\x02\x02\x02\xAC\u04C4\x03\x02\x02\x02\xAE\u04D3\x03" +
		"\x02\x02\x02\xB0\u04D5\x03\x02\x02\x02\xB2\u04D8\x03\x02\x02\x02\xB4\u04E2" +
		"\x03\x02\x02\x02\xB6\u04E6\x03\x02\x02\x02\xB8\u04E8\x03\x02\x02\x02\xBA" +
		"\u04EA\x03\x02\x02\x02\xBC\u04F0\x03\x02\x02\x02\xBE\u04FD\x03\x02\x02" +
		"\x02\xC0\u0500\x03\x02\x02\x02\xC2\u050E\x03\x02\x02\x02\xC4\u0510\x03" +
		"\x02\x02\x02\xC6\u0533\x03\x02\x02\x02\xC8\u0538\x03\x02\x02\x02\xCA\u0542" +
		"\x03\x02\x02\x02\xCC\u054E\x03\x02\x02\x02\xCE\u0559\x03\x02\x02\x02\xD0" +
		"\u0567\x03\x02\x02\x02\xD2\u0569\x03\x02\x02\x02\xD4\u0573\x03\x02\x02" +
		"\x02\xD6\u0581\x03\x02\x02\x02\xD8\u0587\x03\x02\x02\x02\xDA\u0599\x03" +
		"\x02\x02\x02\xDC\u059E\x03\x02\x02\x02\xDE\u05AB\x03\x02\x02\x02\xE0\u05AD" +
		"\x03\x02\x02\x02\xE2\u05B8\x03\x02\x02\x02\xE4\u05BD\x03\x02\x02\x02\xE6" +
		"\u05C5\x03\x02\x02\x02\xE8\u05CA\x03\x02\x02\x02\xEA\u05E3\x03\x02\x02" +
		"\x02\xEC\u05E5\x03\x02\x02\x02\xEE\u05E8\x03\x02\x02\x02\xF0\u05F1\x03" +
		"\x02\x02\x02\xF2\u05FF\x03\x02\x02\x02\xF4\u0604\x03\x02\x02\x02\xF6\u060F" +
		"\x03\x02\x02\x02\xF8\u0614\x03\x02\x02\x02\xFA\u0621\x03\x02\x02\x02\xFC" +
		"\u0626\x03\x02\x02\x02\xFE\u062E\x03\x02\x02\x02\u0100\u063C\x03\x02\x02" +
		"\x02\u0102\u0641\x03\x02\x02\x02\u0104\u0653\x03\x02\x02\x02\u0106\u0655" +
		"\x03\x02\x02\x02\u0108\u065B\x03\x02\x02\x02\u010A\u065D\x03\x02\x02\x02" +
		"\u010C\u0665\x03\x02\x02\x02\u010E\u066D\x03\x02\x02\x02\u0110\u0674\x03" +
		"\x02\x02\x02\u0112\u0676\x03\x02\x02\x02\u0114\u067F\x03\x02\x02\x02\u0116" +
		"\u0687\x03\x02\x02\x02\u0118\u068A\x03\x02\x02\x02\u011A\u0690\x03\x02" +
		"\x02\x02\u011C\u0699\x03\x02\x02\x02\u011E\u06A1\x03\x02\x02\x02\u0120" +
		"\u06A7\x03\x02\x02\x02\u0122\u06B1\x03\x02\x02\x02\u0124\u06B5\x03\x02" +
		"\x02\x02\u0126\u06BA\x03\x02\x02\x02\u0128\u06C3\x03\x02\x02\x02\u012A" +
		"\u06C5\x03\x02\x02\x02\u012C\u06CE\x03\x02\x02\x02\u012E\u06D5\x03\x02" +
		"\x02\x02\u0130\u06E4\x03\x02\x02\x02\u0132\u06E6\x03\x02\x02\x02\u0134" +
		"\u06E8\x03\x02\x02\x02\u0136\u06EC\x03\x02\x02\x02\u0138\u06F0\x03\x02" +
		"\x02\x02\u013A\u06FA\x03\x02\x02\x02\u013C\u06FC\x03\x02\x02\x02\u013E" +
		"\u0702\x03\x02\x02\x02\u0140\u070A\x03\x02\x02\x02\u0142\u0712\x03\x02" +
		"\x02\x02\u0144\u071A\x03\x02\x02\x02\u0146\u073A\x03\x02\x02\x02\u0148" +
		"\u073C\x03\x02\x02\x02\u014A\u0745\x03\x02\x02\x02\u014C\u075B\x03\x02" +
		"\x02\x02\u014E\u075D\x03\x02\x02\x02\u0150\u075F\x03\x02\x02\x02\u0152" +
		"\u0765\x03\x02\x02\x02\u0154\u076B\x03\x02\x02\x02\u0156\u0775\x03\x02" +
		"\x02\x02\u0158\u0779\x03\x02\x02\x02\u015A\u077B\x03\x02\x02\x02\u015C" +
		"\u078B\x03\x02\x02\x02\u015E\u079D\x03\x02\x02\x02\u0160\u079F\x03\x02" +
		"\x02\x02\u0162\u07A1\x03\x02\x02\x02\u0164\u07A9\x03\x02\x02\x02\u0166" +
		"\u07B1\x03\x02\x02\x02\u0168\u07B9\x03\x02\x02\x02\u016A\u07BF\x03\x02" +
		"\x02\x02\u016C\u07C5\x03\x02\x02\x02\u016E\u07CB\x03\x02\x02\x02\u0170" +
		"\u07CF\x03\x02\x02\x02\u0172\u07E5\x03\x02\x02\x02\u0174\u07E7\x03\x02" +
		"\x02\x02\u0176\u07EE\x03\x02\x02\x02\u0178\u07F7\x03\x02\x02\x02\u017A" +
		"\u07FD\x03\x02\x02\x02\u017C\u0805\x03\x02\x02\x02\u017E\u0808\x03\x02" +
		"\x02\x02\u0180\u0811\x03\x02\x02\x02\u0182\u0818\x03\x02\x02\x02\u0184" +
		"\u0822\x03\x02\x02\x02\u0186\u0826\x03\x02\x02\x02\u0188\u0828\x03\x02" +
		"\x02\x02\u018A\u082C\x03\x02\x02\x02\u018C\u082E\x03\x02\x02\x02\u018E" +
		"\u0832\x03\x02\x02\x02\u0190\u0836\x03\x02\x02\x02\u0192\u0911\x03\x02" +
		"\x02\x02\u0194\u0938\x03\x02\x02\x02\u0196\u095D\x03\x02\x02\x02\u0198" +
		"\u0968\x03\x02\x02\x02\u019A\u096A\x03\x02\x02\x02\u019C\u097A\x03\x02" +
		"\x02\x02\u019E\u0990\x03\x02\x02\x02\u01A0\u0994\x03\x02\x02\x02\u01A2" +
		"\u09A2\x03\x02\x02\x02\u01A4\u09AE\x03\x02\x02\x02\u01A6\u09B0\x03\x02" +
		"\x02\x02\u01A8\u09BA\x03\x02\x02\x02\u01AA\u09D0\x03\x02\x02\x02\u01AC" +
		"\u09DF\x03\x02\x02\x02\u01AE\u0A26\x03\x02\x02\x02\u01B0\u0A28\x03\x02" +
		"\x02\x02\u01B2\u0A5F\x03\x02\x02\x02\u01B4\u0A69\x03\x02\x02\x02\u01B6" +
		"\u0A73\x03\x02\x02\x02\u01B8\u0A75\x03\x02\x02\x02\u01BA\u0A78\x03\x02" +
		"\x02\x02\u01BC\u0A82\x03\x02\x02\x02\u01BE\u0A84\x03\x02\x02\x02\u01C0" +
		"\u0A87\x03\x02\x02\x02\u01C2\u0A91\x03\x02\x02\x02\u01C4\u0AAE\x03\x02" +
		"\x02\x02\u01C6\u0AB0\x03\x02\x02\x02\u01C8\u0AC1\x03\x02\x02\x02\u01CA" +
		"\u0ACF\x03\x02\x02\x02\u01CC\u0AE4\x03\x02\x02\x02\u01CE\u0AFE\x03\x02" +
		"\x02\x02\u01D0\u0B0C\x03\x02\x02\x02\u01D2\u0B17\x03\x02\x02\x02\u01D4" +
		"\u0B22\x03\x02\x02\x02\u01D6\u0B2D\x03\x02\x02\x02\u01D8\u0B38\x03\x02" +
		"\x02\x02\u01DA\u0B50\x03\x02\x02\x02\u01DC\u0B54\x03\x02\x02\x02\u01DE" +
		"\u0B56\x03\x02\x02\x02\u01E0\u0B5D\x03\x02\x02\x02\u01E2\u0B5F\x03\x02" +
		"\x02\x02\u01E4\u0B61\x03\x02\x02\x02\u01E6\u0B6B\x03\x02\x02\x02\u01E8" +
		"\u0B7D\x03\x02\x02\x02\u01EA\u0B89\x03\x02\x02\x02\u01EC\u0B8D\x03\x02" +
		"\x02\x02\u01EE\u0B91\x03\x02\x02\x02\u01F0\u0B93\x03\x02\x02\x02\u01F2" +
		"\u0B99\x03\x02\x02\x02\u01F4\u01F5\x05J&\x02\u01F5\u01F6\x07\x02\x02\x03" +
		"\u01F6\x03\x03\x02\x02\x02\u01F7\u01FA\x07}\x02\x02\u01F8\u01FA\x05\n" +
		"\x06\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01FA" +
		"\x05\x03\x02\x02\x02\u01FB\u01FE\x07}\x02\x02\u01FC\u01FE\x05\f\x07\x02" +
		"\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FE\x07\x03" +
		"\x02\x02\x02\u01FF\u0202\x07}\x02\x02\u0200\u0202\x05\x0E\b\x02\u0201" +
		"\u01FF\x03\x02\x02\x02\u0201\u0200\x03\x02\x02\x02\u0202\t\x03\x02\x02" +
		"\x02\u0203\u0204\t\x02\x02\x02\u0204\v\x03\x02\x02\x02\u0205\u0206\t\x03" +
		"\x02\x02\u0206\r\x03\x02\x02\x02\u0207\u0208\t\x04\x02\x02\u0208\x0F\x03" +
		"\x02\x02\x02\u0209\u020A\t\x05\x02\x02\u020A\x11\x03\x02\x02\x02\u020B" +
		"\u020D\x05\u0108\x85\x02\u020C\u020B\x03\x02\x02\x02\u020D\u0210\x03\x02" +
		"\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F" +
		"\u0213\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0214\x05\x14" +
		"\v\x02\u0212\u0214\x07\x16\x02\x02\u0213\u0211\x03\x02\x02\x02\u0213\u0212" +
		"\x03\x02\x02\x02\u0214\x13\x03\x02\x02\x02\u0215\u0218\x05\x16\f\x02\u0216" +
		"\u0218\x05\x18\r\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0216\x03\x02\x02" +
		"\x02\u0218\x15\x03\x02\x02\x02\u0219\u021A\t\x06\x02\x02\u021A\x17\x03" +
		"\x02\x02\x02\u021B\u021C\t\x07\x02\x02\u021C\x19\x03\x02\x02\x02\u021D" +
		"\u0221\x05\x1E\x10\x02\u021E\u0221\x05$\x13\x02\u021F\u0221\x05&\x14\x02" +
		"\u0220\u021D\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220\u021F\x03" +
		"\x02\x02\x02\u0221\x1B\x03\x02\x02\x02\u0222\u0226\x07V\x02\x02\u0223" +
		"\u0225\x05\u0108\x85\x02\u0224\u0223\x03\x02\x02\x02\u0225\u0228\x03\x02" +
		"\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227" +
		"\u0229\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0229\u022B\x05\x06" +
		"\x04\x02\u022A\u022C\x052\x1A\x02\u022B\u022A\x03\x02\x02\x02\u022B\u022C" +
		"\x03\x02\x02\x02\u022C\u022E\x03\x02\x02\x02\u022D\u022F\x05\x1C\x0F\x02" +
		"\u022E\u022D\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\x1D\x03" +
		"\x02\x02\x02\u0230\u0231\x05> \x02\u0231\u0232\x07V\x02\x02\u0232\u0234" +
		"\x03\x02\x02\x02\u0233\u0230\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02" +
		"\u0234\u0238\x03\x02\x02\x02\u0235\u0237\x05\u0108\x85\x02\u0236\u0235" +
		"\x03\x02\x02\x02\u0237\u023A\x03\x02\x02\x02\u0238\u0236\x03\x02\x02\x02" +
		"\u0238\u0239\x03\x02\x02\x02\u0239\u023B\x03\x02\x02\x02\u023A\u0238\x03" +
		"\x02\x02\x02\u023B\u023D\x05\x06\x04\x02\u023C\u023E\x052\x1A\x02\u023D" +
		"\u023C\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u0240\x03\x02" +
		"\x02\x02\u023F\u0241\x05\x1C\x0F\x02\u0240\u023F\x03\x02\x02\x02\u0240" +
		"\u0241\x03\x02\x02\x02\u0241\x1F\x03\x02\x02\x02\u0242\u0244\x05\u0108" +
		"\x85\x02\u0243\u0242\x03\x02\x02\x02\u0244\u0247\x03\x02\x02\x02\u0245" +
		"\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0248\x03\x02" +
		"\x02\x02\u0247\u0245\x03\x02\x02\x02\u0248\u024A\x05\x06\x04\x02\u0249" +
		"\u024B\x052\x1A\x02\u024A\u0249\x03\x02\x02\x02\u024A\u024B\x03\x02\x02" +
		"\x02\u024B\u0265\x03\x02\x02\x02\u024C\u024D\x05> \x02\u024D\u0251\x07" +
		"V\x02\x02\u024E\u0250\x05\u0108\x85\x02\u024F\u024E\x03\x02\x02\x02\u0250" +
		"\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02" +
		"\x02\x02\u0252\u0254\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0254" +
		"\u0256\x05\x06\x04\x02\u0255\u0257\x052\x1A\x02\u0256\u0255\x03\x02\x02" +
		"\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0265\x03\x02\x02\x02\u0258\u0259" +
		"\x05\x1E\x10\x02\u0259\u025D\x07V\x02\x02\u025A\u025C\x05\u0108\x85\x02" +
		"\u025B\u025A\x03\x02\x02\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025B\x03" +
		"\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u0260\x03\x02\x02\x02\u025F" +
		"\u025D\x03\x02\x02\x02\u0260\u0262\x05\x06\x04\x02\u0261\u0263\x052\x1A" +
		"\x02\u0262\u0261\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0265" +
		"\x03\x02\x02\x02\u0264\u0245\x03\x02\x02\x02\u0264\u024C\x03\x02\x02\x02" +
		"\u0264\u0258\x03\x02\x02\x02\u0265!\x03\x02\x02\x02\u0266\u0267\x05 \x11" +
		"\x02\u0267#\x03\x02\x02\x02\u0268\u026A\x05\u0108\x85\x02\u0269\u0268" +
		"\x03\x02\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02" +
		"\u026B\u026C\x03\x02\x02\x02\u026C\u026E\x03\x02\x02\x02\u026D\u026B\x03" +
		"\x02\x02\x02\u026E\u026F\x05\x06\x04\x02\u026F%\x03\x02\x02\x02\u0270" +
		"\u0271\x05\x12\n\x02\u0271\u0272\x05(\x15\x02\u0272\u027A\x03\x02\x02" +
		"\x02\u0273\u0274\x05 \x11\x02\u0274\u0275\x05(\x15\x02\u0275\u027A\x03" +
		"\x02\x02\x02\u0276\u0277\x05$\x13\x02\u0277\u0278\x05(\x15\x02\u0278\u027A" +
		"\x03\x02\x02\x02\u0279\u0270\x03\x02\x02\x02\u0279\u0273\x03\x02\x02\x02" +
		"\u0279\u0276\x03\x02\x02\x02\u027A\'\x03\x02\x02\x02\u027B\u027D\x05\u0108" +
		"\x85\x02\u027C\u027B\x03\x02\x02\x02\u027D\u0280\x03\x02\x02\x02\u027E" +
		"\u027C\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0281\x03\x02" +
		"\x02\x02\u0280\u027E\x03\x02\x02\x02\u0281\u0282\x07R\x02\x02\u0282\u028D" +
		"\x07S\x02\x02\u0283\u0285\x05\u0108\x85\x02\u0284\u0283\x03\x02\x02\x02" +
		"\u0285\u0288\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0286\u0287\x03" +
		"\x02\x02\x02\u0287\u0289\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0289" +
		"\u028A\x07R\x02\x02\u028A\u028C\x07S\x02\x02\u028B\u0286\x03\x02\x02\x02" +
		"\u028C\u028F\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03" +
		"\x02\x02\x02\u028E)\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u0290" +
		"\u0292\x05,\x17\x02\u0291\u0290\x03\x02\x02\x02\u0292\u0295\x03\x02\x02" +
		"\x02\u0293\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0296" +
		"\x03\x02\x02\x02\u0295\u0293\x03\x02\x02\x02\u0296\u0298\x05\x06\x04\x02" +
		"\u0297\u0299\x05.\x18\x02\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03" +
		"\x02\x02\x02\u0299+\x03\x02\x02\x02\u029A\u029B\x05\u0108\x85\x02\u029B" +
		"-\x03\x02\x02\x02\u029C\u02A5\x07$\x02\x02\u029D\u02A6\x05$\x13\x02\u029E" +
		"\u02A2\x05\x1E\x10\x02\u029F\u02A1\x050\x19\x02\u02A0\u029F\x03\x02\x02" +
		"\x02\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A3" +
		"\x03\x02\x02\x02\u02A3\u02A6\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02" +
		"\u02A5\u029D\x03\x02\x02\x02\u02A5\u029E\x03\x02\x02\x02\u02A6/\x03\x02" +
		"\x02\x02\u02A7\u02A8\x07n\x02\x02\u02A8\u02A9\x05\"\x12\x02\u02A91\x03" +
		"\x02\x02\x02\u02AA\u02AB\x07\\\x02\x02\u02AB\u02AC\x054\x1B\x02\u02AC" +
		"\u02AD\x07[\x02\x02\u02AD3\x03\x02\x02\x02\u02AE\u02B3\x056\x1C\x02\u02AF" +
		"\u02B0\x07U\x02\x02\u02B0\u02B2\x056\x1C\x02\u02B1\u02AF\x03\x02\x02\x02" +
		"\u02B2\u02B5\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03" +
		"\x02\x02\x02\u02B45\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B6" +
		"\u02B9\x05\x1A\x0E\x02\u02B7\u02B9\x058\x1D\x02\u02B8\u02B6\x03\x02\x02" +
		"\x02\u02B8\u02B7\x03\x02\x02\x02\u02B97\x03\x02\x02\x02\u02BA\u02BC\x05" +
		"\u0108\x85\x02\u02BB\u02BA\x03\x02\x02\x02\u02BC\u02BF\x03\x02\x02\x02" +
		"\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02C0\x03" +
		"\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0\u02C2\x07_\x02\x02\u02C1" +
		"\u02C3\x05:\x1E\x02\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02" +
		"\x02\u02C39\x03\x02\x02\x02\u02C4\u02C5\x07$\x02\x02\u02C5\u02C9\x05\x1A" +
		"\x0E\x02\u02C6\u02C7\x07;\x02\x02\u02C7\u02C9\x05\x1A\x0E\x02\u02C8\u02C4" +
		"\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C9;\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u02CA\u02CD\x05\x04\x03\x02\u02CB\u02CC\x07V\x02\x02\u02CC\u02CE" +
		"\x05<\x1F\x02\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02" +
		"\u02CE=\x03\x02\x02\x02\u02CF\u02D2\x05\x04\x03\x02\u02D0\u02D1\x07V\x02" +
		"\x02\u02D1\u02D3\x05> \x02\u02D2\u02D0\x03\x02\x02\x02\u02D2\u02D3\x03" +
		"\x02\x02\x02\u02D3?\x03\x02\x02\x02\u02D4\u02D7\x05> \x02\u02D5\u02D6" +
		"\x07V\x02\x02\u02D6\u02D8\x05\x06\x04\x02\u02D7\u02D5\x03\x02\x02\x02" +
		"\u02D7\u02D8\x03\x02\x02\x02\u02D8A\x03\x02\x02\x02\u02D9\u02DC\x05\x04" +
		"\x03\x02\u02DA\u02DB\x07V\x02\x02\u02DB\u02DD\x05B\"\x02\u02DC\u02DA\x03" +
		"\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DDC\x03\x02\x02\x02\u02DE" +
		"\u02DF\x05H%\x02\u02DF\u02E0\x07V\x02\x02\u02E0\u02E2\x03\x02\x02\x02" +
		"\u02E1\u02DE\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E3\x03" +
		"\x02\x02\x02\u02E3\u02E4\x05\x04\x03\x02\u02E4E\x03\x02\x02\x02\u02E5" +
		"\u02E6\x05\b\x05\x02\u02E6G\x03\x02\x02\x02\u02E7\u02EA\x05\x04\x03\x02" +
		"\u02E8\u02E9\x07V\x02\x02\u02E9\u02EB\x05H%\x02\u02EA\u02E8\x03\x02\x02" +
		"\x02\u02EA\u02EB\x03\x02\x02\x02\u02EBI\x03\x02\x02\x02\u02EC\u02EF\x05" +
		"L\'\x02\u02ED\u02EF\x05N(\x02\u02EE\u02EC\x03\x02\x02\x02\u02EE\u02ED" +
		"\x03\x02\x02\x02\u02EFK\x03\x02\x02\x02\u02F0\u02F2\x05P)\x02\u02F1\u02F0" +
		"\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F6\x03\x02\x02\x02" +
		"\u02F3\u02F5\x05T+\x02\u02F4\u02F3\x03\x02\x02\x02\u02F5\u02F8\x03\x02" +
		"\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7" +
		"\u02FC\x03\x02\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F9\u02FB\x05^0\x02" +
		"\u02FA\u02F9\x03\x02\x02\x02\u02FB\u02FE\x03\x02\x02\x02\u02FC\u02FA\x03" +
		"\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FDM\x03\x02\x02\x02\u02FE" +
		"\u02FC\x03\x02\x02\x02\u02FF\u0301\x05T+\x02\u0300\u02FF\x03\x02\x02\x02" +
		"\u0301\u0304\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0303\x03" +
		"\x02\x02\x02\u0303\u0305\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0305" +
		"\u0306\x05`1\x02\u0306O\x03\x02\x02\x02\u0307\u0309\x05R*\x02\u0308\u0307" +
		"\x03\x02\x02\x02\u0309\u030C\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02" +
		"\u030A\u030B\x03\x02\x02\x02\u030B\u030D\x03\x02\x02\x02\u030C\u030A\x03" +
		"\x02\x02\x02\u030D\u030E\x073\x02\x02\u030E\u0313\x05\x04\x03\x02\u030F" +
		"\u0310\x07V\x02\x02\u0310\u0312\x05\x04\x03\x02\u0311\u030F\x03\x02\x02" +
		"\x02\u0312\u0315\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0313\u0314" +
		"\x03\x02\x02\x02\u0314\u0316\x03\x02\x02\x02\u0315\u0313\x03\x02\x02\x02" +
		"\u0316\u0317\x07T\x02\x02\u0317Q\x03\x02\x02\x02\u0318\u0319\x05\u0108" +
		"\x85\x02\u0319S\x03\x02\x02\x02\u031A\u031F\x05V,\x02\u031B\u031F\x05" +
		"X-\x02\u031C\u031F\x05Z.\x02\u031D\u031F\x05\\/\x02\u031E\u031A\x03\x02" +
		"\x02\x02\u031E\u031B\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031E" +
		"\u031D\x03\x02\x02\x02\u031FU\x03\x02\x02\x02\u0320\u0321\x07,\x02\x02" +
		"\u0321\u0322\x05@!\x02\u0322\u0323\x07T\x02\x02\u0323W\x03\x02\x02\x02" +
		"\u0324\u0325\x07,\x02\x02\u0325\u0326\x05B\"\x02\u0326\u0327\x07V\x02" +
		"\x02\u0327\u0328\x07l\x02\x02\u0328\u0329\x07T\x02\x02\u0329Y\x03\x02" +
		"\x02\x02\u032A\u032B\x07,\x02\x02\u032B\u032C\x079\x02\x02\u032C\u032D" +
		"\x05@!\x02\u032D\u032E\x07V\x02\x02\u032E\u032F\x05\x04\x03\x02\u032F" +
		"\u0330\x07T\x02\x02\u0330[\x03\x02\x02\x02\u0331\u0332\x07,\x02\x02\u0332" +
		"\u0333\x079\x02\x02\u0333\u0334\x05@!\x02\u0334\u0335\x07V\x02\x02\u0335" +
		"\u0336\x07l\x02\x02\u0336\u0337\x07T\x02\x02\u0337]\x03\x02\x02\x02\u0338" +
		"\u033C\x05f4\x02\u0339\u033C\x05\xE6t\x02\u033A\u033C\x07T\x02\x02\u033B" +
		"\u0338\x03\x02\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033A\x03\x02" +
		"\x02\x02\u033C_\x03\x02\x02\x02\u033D\u033F\x05\u0108\x85\x02\u033E\u033D" +
		"\x03\x02\x02\x02\u033F\u0342\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02" +
		"\u0340\u0341\x03\x02\x02\x02\u0341\u0344\x03\x02\x02\x02\u0342\u0340\x03" +
		"\x02\x02\x02\u0343\u0345\x07\x07\x02\x02\u0344\u0343\x03\x02\x02\x02\u0344" +
		"\u0345\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0347\x07\x04" +
		"\x02\x02\u0347\u034C\x05\x04\x03\x02\u0348\u0349\x07V\x02\x02\u0349\u034B" +
		"\x05\x04\x03\x02\u034A\u0348\x03\x02\x02\x02\u034B\u034E\x03\x02\x02\x02" +
		"\u034C\u034A\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034F\x03" +
		"\x02\x02\x02\u034E\u034C\x03\x02\x02\x02\u034F\u0353\x07P\x02\x02\u0350" +
		"\u0352\x05b2\x02\u0351\u0350\x03\x02\x02\x02\u0352\u0355\x03\x02\x02\x02" +
		"\u0353\u0351\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\u0356\x03" +
		"\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0356\u0357\x07Q\x02\x02\u0357" +
		"a\x03\x02\x02\x02\u0358\u035C\x07\f\x02\x02\u0359\u035B\x05d3\x02\u035A" +
		"\u0359\x03\x02\x02\x02\u035B\u035E\x03\x02\x02\x02\u035C\u035A\x03\x02" +
		"\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035F\x03\x02\x02\x02\u035E" +
		"\u035C\x03\x02\x02\x02\u035F\u0360\x05<\x1F\x02\u0360\u0361\x07T\x02\x02" +
		"\u0361\u0392\x03\x02\x02\x02\u0362\u0363\x07\x03\x02\x02\u0363\u036D\x05" +
		"> \x02\u0364\u0365\x07\x0E\x02\x02\u0365\u036A\x05<\x1F\x02\u0366\u0367" +
		"\x07U\x02\x02\u0367\u0369\x05<\x1F\x02\u0368\u0366\x03\x02\x02\x02\u0369" +
		"\u036C\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036A\u036B\x03\x02" +
		"\x02\x02\u036B\u036E\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02\u036D" +
		"\u0364\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u036F\x03\x02" +
		"\x02\x02\u036F\u0370\x07T\x02\x02\u0370\u0392\x03\x02\x02\x02\u0371\u0372" +
		"\x07\b\x02\x02\u0372\u037C\x05> \x02\u0373\u0374\x07\x0E\x02\x02\u0374" +
		"\u0379\x05<\x1F\x02\u0375\u0376\x07U\x02\x02\u0376\u0378\x05<\x1F\x02" +
		"\u0377\u0375\x03\x02\x02\x02\u0378\u037B\x03\x02\x02\x02\u0379\u0377\x03" +
		"\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037D\x03\x02\x02\x02\u037B" +
		"\u0379\x03\x02\x02\x02\u037C\u0373\x03\x02\x02\x02\u037C\u037D\x03\x02" +
		"\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u037F\x07T\x02\x02\u037F\u0392" +
		"\x03\x02\x02\x02\u0380\u0381\x07\x10\x02\x02\u0381\u0382\x05@!\x02\u0382" +
		"\u0383\x07T\x02\x02\u0383\u0392\x03\x02\x02\x02\u0384\u0385\x07\n\x02" +
		"\x02\u0385\u0386\x05@!\x02\u0386\u0387\x07\x12\x02\x02\u0387\u038C\x05" +
		"@!\x02\u0388\u0389\x07U\x02\x02\u0389\u038B\x05@!\x02\u038A\u0388\x03" +
		"\x02\x02\x02\u038B\u038E\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038C" +
		"\u038D\x03\x02\x02\x02\u038D\u038F\x03\x02\x02\x02\u038E\u038C\x03\x02" +
		"\x02\x02\u038F\u0390\x07T\x02\x02\u0390\u0392\x03\x02\x02\x02\u0391\u0358" +
		"\x03\x02\x02\x02\u0391\u0362\x03\x02\x02\x02\u0391\u0371\x03\x02\x02\x02" +
		"\u0391\u0380\x03\x02\x02\x02\u0391\u0384\x03\x02\x02\x02\u0392c\x03\x02" +
		"\x02\x02\u0393\u0394\t\b\x02\x02\u0394e\x03\x02\x02\x02\u0395\u0399\x05" +
		"h5\x02\u0396\u0399\x05\xC8e\x02\u0397\u0399\x05\xD4k\x02\u0398\u0395\x03" +
		"\x02\x02\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0397\x03\x02\x02\x02\u0399" +
		"g\x03\x02\x02\x02\u039A\u039C\x05j6\x02\u039B\u039A\x03\x02\x02\x02\u039C" +
		"\u039F\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02\u039D\u039E\x03\x02" +
		"\x02\x02\u039E\u03A0\x03\x02\x02\x02\u039F\u039D\x03\x02\x02\x02\u03A0" +
		"\u03A1\x07\x1C\x02\x02\u03A1\u03A3\x05\x06\x04\x02\u03A2\u03A4\x05l7\x02" +
		"\u03A3\u03A2\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A6\x03" +
		"\x02\x02\x02\u03A5\u03A7\x05p9\x02\u03A6\u03A5\x03\x02\x02\x02\u03A6\u03A7" +
		"\x03\x02\x02\x02\u03A7\u03A9\x03\x02\x02\x02\u03A8\u03AA\x05r:\x02\u03A9" +
		"\u03A8\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AC\x03\x02" +
		"\x02\x02\u03AB\u03AD\x05v<\x02\u03AC\u03AB\x03\x02\x02\x02\u03AC\u03AD" +
		"\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03AF\x05x=\x02\u03AF" +
		"i\x03\x02\x02\x02\u03B0\u03BB\x05\u0108\x85\x02\u03B1\u03BB\x076\x02\x02" +
		"\u03B2\u03BB\x075\x02\x02\u03B3\u03BB\x074\x02\x02\u03B4\u03BB\x07\x14" +
		"\x02\x02\u03B5\u03BB\x079\x02\x02\u03B6\u03BB\x07%\x02\x02\u03B7\u03BB" +
		"\x07\r\x02\x02\u03B8\u03BB\x07\x05\x02\x02\u03B9\u03BB\x07:\x02\x02\u03BA" +
		"\u03B0\x03\x02\x02\x02\u03BA\u03B1\x03\x02\x02\x02\u03BA\u03B2\x03\x02" +
		"\x02\x02\u03BA\u03B3\x03\x02\x02\x02\u03BA\u03B4\x03\x02\x02\x02\u03BA" +
		"\u03B5\x03\x02\x02\x02\u03BA\u03B6\x03\x02\x02\x02\u03BA\u03B7\x03\x02" +
		"\x02\x02\u03BA\u03B8\x03\x02\x02\x02\u03BA\u03B9\x03\x02\x02\x02\u03BB" +
		"k\x03\x02\x02\x02\u03BC\u03BD\x07\\\x02\x02\u03BD\u03BE\x05n8\x02\u03BE" +
		"\u03BF\x07[\x02\x02\u03BFm\x03\x02\x02\x02\u03C0\u03C5\x05*\x16\x02\u03C1" +
		"\u03C2\x07U\x02\x02\u03C2\u03C4\x05*\x16\x02\u03C3\u03C1\x03\x02\x02\x02" +
		"\u03C4\u03C7\x03\x02\x02\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5\u03C6\x03" +
		"\x02\x02\x02\u03C6o\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02\x02\u03C8" +
		"\u03C9\x07$\x02\x02\u03C9\u03CA\x05 \x11\x02\u03CAq\x03\x02\x02\x02\u03CB" +
		"\u03CC\x07+\x02\x02\u03CC\u03CD\x05t;\x02\u03CDs\x03\x02\x02\x02\u03CE" +
		"\u03D3\x05\"\x12\x02\u03CF\u03D0\x07U\x02\x02\u03D0\u03D2\x05\"\x12\x02" +
		"\u03D1\u03CF\x03\x02\x02\x02\u03D2\u03D5\x03\x02\x02\x02\u03D3\u03D1\x03" +
		"\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4u\x03\x02\x02\x02\u03D5" +
		"\u03D3\x03\x02\x02\x02\u03D6\u03D7\x07\t\x02\x02\u03D7\u03DC\x05@!\x02" +
		"\u03D8\u03D9\x07U\x02\x02\u03D9\u03DB\x05@!\x02\u03DA\u03D8\x03\x02\x02" +
		"\x02\u03DB\u03DE\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DD" +
		"\x03\x02\x02\x02\u03DDw\x03\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DF" +
		"\u03E3\x07P\x02\x02\u03E0\u03E2\x05z>\x02\u03E1\u03E0\x03\x02\x02\x02" +
		"\u03E2\u03E5\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02\u03E3\u03E4\x03" +
		"\x02\x02\x02\u03E4\u03E6\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E6" +
		"\u03E7\x07Q\x02\x02\u03E7y\x03\x02\x02\x02\u03E8\u03ED\x05|?\x02\u03E9" +
		"\u03ED\x05\xB8]\x02\u03EA\u03ED\x05\xBA^\x02\u03EB\u03ED\x05\xBC_\x02" +
		"\u03EC\u03E8\x03\x02\x02\x02\u03EC\u03E9\x03\x02\x02\x02\u03EC\u03EA\x03" +
		"\x02\x02\x02\u03EC\u03EB\x03\x02\x02\x02\u03ED{\x03\x02\x02\x02\u03EE" +
		"\u03F4\x05~@\x02\u03EF\u03F4\x05\x9CO\x02\u03F0\u03F4\x05f4\x02\u03F1" +
		"\u03F4\x05\xE6t\x02\u03F2\u03F4\x07T\x02\x02\u03F3\u03EE\x03\x02\x02\x02" +
		"\u03F3\u03EF\x03\x02\x02\x02\u03F3\u03F0\x03\x02\x02\x02\u03F3\u03F1\x03" +
		"\x02\x02\x02\u03F3\u03F2\x03\x02\x02\x02\u03F4}\x03\x02\x02\x02\u03F5" +
		"\u03F7\x05\x80A\x02\u03F6\u03F5\x03\x02\x02\x02\u03F7\u03FA\x03\x02\x02" +
		"\x02\u03F8\u03F6\x03\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9\u03FB" +
		"\x03\x02\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FB\u03FC\x05\x8AF\x02" +
		"\u03FC\u03FD\x05\x82B\x02\u03FD\u03FE\x07T\x02\x02\u03FE\x7F\x03\x02\x02" +
		"\x02\u03FF\u0408\x05\u0108\x85\x02\u0400\u0408\x076\x02\x02\u0401\u0408" +
		"\x075\x02\x02\u0402\u0408\x074\x02\x02\u0403\u0408\x079\x02\x02\u0404" +
		"\u0408\x07%\x02\x02\u0405\u0408\x07A\x02\x02\u0406\u0408\x07D\x02\x02" +
		"\u0407\u03FF\x03\x02\x02\x02\u0407\u0400\x03\x02\x02\x02\u0407\u0401\x03" +
		"\x02\x02\x02\u0407\u0402\x03\x02\x02\x02\u0407\u0403\x03\x02\x02\x02\u0407" +
		"\u0404\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02\u0407\u0406\x03\x02" +
		"\x02\x02\u0408\x81\x03\x02\x02\x02\u0409\u040E\x05\x84C\x02\u040A\u040B" +
		"\x07U\x02\x02\u040B\u040D\x05\x84C\x02\u040C\u040A\x03\x02\x02\x02\u040D" +
		"\u0410\x03\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040E\u040F\x03\x02" +
		"\x02\x02\u040F\x83\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0411\u0414" +
		"\x05\x86D\x02\u0412\u0413\x07Z\x02\x02\u0413\u0415\x05\x88E\x02\u0414" +
		"\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\x85\x03\x02\x02" +
		"\x02\u0416\u0418\x05\x04\x03\x02\u0417\u0419\x05(\x15\x02\u0418\u0417" +
		"\x03\x02\x02\x02\u0418\u0419\x03\x02\x02\x02\u0419\x87\x03\x02\x02\x02" +
		"\u041A\u041D\x05\u018E\xC8\x02\u041B\u041D\x05\u011A\x8E\x02\u041C\u041A" +
		"\x03\x02\x02\x02\u041C\u041B\x03\x02\x02\x02\u041D\x89\x03\x02\x02\x02" +
		"\u041E\u0421\x05\x8CG\x02\u041F\u0421\x05\x8EH\x02\u0420\u041E\x03\x02" +
		"\x02\x02\u0420\u041F\x03\x02\x02\x02\u0421\x8B\x03\x02\x02\x02\u0422\u0425" +
		"\x05\x14\v\x02\u0423\u0425\x07\x16\x02\x02\u0424\u0422\x03\x02\x02\x02" +
		"\u0424\u0423\x03\x02\x02\x02\u0425\x8D\x03\x02\x02\x02\u0426\u042A\x05" +
		"\x90I\x02\u0427\u042A\x05\x98M\x02\u0428\u042A\x05\x9AN\x02\u0429\u0426" +
		"\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u0429\u0428\x03\x02\x02\x02" +
		"\u042A\x8F\x03\x02\x02\x02\u042B\u042C\x05> \x02\u042C\u0430\x07V\x02" +
		"\x02\u042D\u042F\x05\u0108\x85\x02\u042E\u042D\x03\x02\x02\x02\u042F\u0432" +
		"\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02" +
		"\u0431\u0434\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0433\u042B\x03" +
		"\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435" +
		"\u0437\x05\x06\x04\x02\u0436\u0438\x052\x1A\x02\u0437\u0436\x03\x02\x02" +
		"\x02\u0437\u0438\x03\x02\x02\x02\u0438\u043A\x03\x02\x02\x02\u0439\u043B" +
		"\x05\x92J\x02\u043A\u0439\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02" +
		"\u043B\x91\x03\x02\x02\x02\u043C\u0440\x07V\x02\x02\u043D\u043F\x05\u0108" +
		"\x85\x02\u043E\u043D\x03\x02\x02\x02\u043F\u0442\x03\x02\x02\x02\u0440" +
		"\u043E\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441\u0443\x03\x02" +
		"\x02\x02\u0442\u0440\x03\x02\x02\x02\u0443\u0445\x05\x06\x04\x02\u0444" +
		"\u0446\x052\x1A\x02\u0445\u0444\x03\x02\x02\x02\u0445\u0446\x03\x02\x02" +
		"\x02\u0446\u0448\x03\x02\x02\x02\u0447\u0449\x05\x92J\x02\u0448\u0447" +
		"\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449\x93\x03\x02\x02\x02" +
		"\u044A\u044C\x05\x06\x04\x02\u044B\u044D\x052\x1A\x02\u044C\u044B\x03" +
		"\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D\u045E\x03\x02\x02\x02\u044E" +
		"\u0451\x05> \x02\u044F\u0451\x05\x90I\x02\u0450\u044E\x03\x02\x02\x02" +
		"\u0450\u044F\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\u0456\x07" +
		"V\x02\x02\u0453\u0455\x05\u0108\x85\x02\u0454\u0453\x03\x02\x02\x02\u0455" +
		"\u0458\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456\u0457\x03\x02" +
		"\x02\x02\u0457\u0459\x03\x02\x02\x02\u0458\u0456\x03\x02\x02\x02\u0459" +
		"\u045B\x05\x06\x04\x02\u045A\u045C\x052\x1A\x02\u045B\u045A\x03\x02\x02" +
		"\x02\u045B\u045C\x03\x02\x02\x02\u045C\u045E\x03\x02\x02\x02\u045D\u044A" +
		"\x03\x02\x02\x02\u045D\u0450\x03\x02\x02\x02\u045E\x95\x03\x02\x02\x02" +
		"\u045F\u0460\x05\x94K\x02\u0460\x97\x03\x02\x02\x02\u0461\u0462\x05\x06" +
		"\x04\x02\u0462\x99\x03\x02\x02\x02\u0463\u0467\x05\x8CG\x02\u0464\u0467" +
		"\x05\x90I\x02\u0465\u0467\x05\x98M\x02\u0466\u0463\x03\x02\x02\x02\u0466" +
		"\u0464\x03\x02\x02\x02\u0466\u0465\x03\x02\x02\x02\u0467\u0468\x03\x02" +
		"\x02\x02\u0468\u0469\x05(\x15\x02\u0469\x9B\x03\x02\x02\x02\u046A\u046C" +
		"\x05\x9EP\x02\u046B\u046A\x03\x02\x02\x02\u046C\u046F\x03\x02\x02\x02" +
		"\u046D\u046B\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u0470\x03" +
		"\x02\x02\x02\u046F\u046D\x03\x02\x02\x02\u0470\u0471\x05\xA0Q\x02\u0471" +
		"\u0472\x05\xB6\\\x02\u0472\x9D\x03\x02\x02\x02\u0473\u047E\x05\u0108\x85" +
		"\x02\u0474\u047E\x076\x02\x02\u0475\u047E\x075\x02\x02\u0476\u047E\x07" +
		"4\x02\x02\u0477\u047E\x07\x14\x02\x02\u0478\u047E\x079\x02\x02\u0479\u047E" +
		"\x07%\x02\x02\u047A\u047E\x07=\x02\x02\u047B\u047E\x071\x02\x02\u047C" +
		"\u047E\x07:\x02\x02\u047D\u0473\x03\x02\x02\x02\u047D\u0474\x03\x02\x02" +
		"\x02\u047D\u0475\x03\x02\x02\x02\u047D\u0476\x03\x02\x02\x02\u047D\u0477" +
		"\x03\x02\x02\x02\u047D\u0478\x03\x02\x02\x02\u047D\u0479\x03\x02\x02\x02" +
		"\u047D\u047A\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02\u047D\u047C\x03" +
		"\x02\x02\x02\u047E\x9F\x03\x02\x02\x02\u047F\u0483\x05l7\x02\u0480\u0482" +
		"\x05\u0108\x85\x02\u0481\u0480\x03\x02\x02\x02\u0482\u0485\x03\x02\x02" +
		"\x02\u0483\u0481\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484\u0487" +
		"\x03\x02\x02\x02\u0485\u0483\x03\x02\x02\x02\u0486\u047F\x03\x02\x02\x02" +
		"\u0486\u0487\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u0489\x05" +
		"\xA2R\x02\u0489\u048B\x05\xA4S\x02\u048A\u048C\x05\xB0Y\x02\u048B\u048A" +
		"\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02\u048C\xA1\x03\x02\x02\x02" +
		"\u048D\u0490\x05\x8AF\x02\u048E\u0490\x07C\x02\x02\u048F\u048D\x03\x02" +
		"\x02\x02\u048F\u048E\x03\x02\x02\x02\u0490\xA3\x03\x02\x02\x02\u0491\u0492" +
		"\x05\x04\x03\x02\u0492\u0496\x07N\x02\x02\u0493\u0494\x05\xA6T\x02\u0494" +
		"\u0495\x07U\x02\x02\u0495\u0497\x03\x02\x02\x02\u0496\u0493\x03\x02\x02" +
		"\x02\u0496\u0497\x03\x02\x02\x02\u0497\u0499\x03\x02\x02\x02\u0498\u049A" +
		"\x05\xA8U\x02\u0499\u0498\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02" +
		"\u049A\u049B\x03\x02\x02\x02\u049B\u049D\x07O\x02\x02\u049C\u049E\x05" +
		"(\x15\x02\u049D\u049C\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E" +
		"\xA5\x03\x02\x02\x02\u049F\u04A1\x05\u0108\x85\x02\u04A0\u049F\x03\x02" +
		"\x02\x02\u04A1\u04A4\x03\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A2" +
		"\u04A3\x03\x02\x02\x02\u04A3\u04A5\x03\x02\x02\x02\u04A4\u04A2\x03\x02" +
		"\x02\x02\u04A5\u04A9\x05\x8AF\x02\u04A6\u04A7\x05\x04\x03\x02\u04A7\u04A8" +
		"\x07V\x02\x02\u04A8\u04AA\x03\x02\x02\x02\u04A9\u04A6\x03\x02\x02\x02" +
		"\u04A9\u04AA\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04AC\x07" +
		">\x02\x02\u04AC\xA7\x03\x02\x02\x02\u04AD\u04B2\x05\xAAV\x02\u04AE\u04AF" +
		"\x07U\x02\x02\u04AF\u04B1\x05\xAAV\x02\u04B0\u04AE\x03\x02\x02\x02\u04B1" +
		"\u04B4\x03\x02\x02\x02\u04B2\u04B0\x03\x02\x02\x02\u04B2\u04B3\x03\x02" +
		"\x02\x02\u04B3\xA9\x03\x02\x02\x02\u04B4\u04B2\x03\x02\x02\x02\u04B5\u04B7" +
		"\x05\xAEX\x02\u04B6\u04B5\x03\x02\x02\x02\u04B7\u04BA\x03\x02\x02\x02" +
		"\u04B8\u04B6\x03\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9\u04BB\x03" +
		"\x02\x02\x02\u04BA\u04B8\x03\x02\x02\x02\u04BB\u04BC\x05\x8AF\x02\u04BC" +
		"\u04BD\x05\x86D\x02\u04BD\u04C0\x03\x02\x02\x02\u04BE\u04C0\x05\xACW\x02" +
		"\u04BF\u04B8\x03\x02\x02\x02\u04BF\u04BE\x03\x02\x02\x02\u04C0\xAB\x03" +
		"\x02\x02\x02\u04C1\u04C3\x05\xAEX\x02\u04C2\u04C1\x03\x02\x02\x02\u04C3" +
		"\u04C6\x03\x02\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C4\u04C5\x03\x02" +
		"\x02\x02\u04C5\u04C7\x03\x02\x02\x02\u04C6\u04C4\x03\x02\x02\x02\u04C7" +
		"\u04CB\x05\x8AF\x02\u04C8\u04CA\x05\u0108\x85\x02\u04C9\u04C8\x03\x02" +
		"\x02\x02\u04CA\u04CD\x03\x02\x02\x02\u04CB\u04C9\x03\x02\x02\x02\u04CB" +
		"\u04CC\x03\x02\x02\x02\u04CC\u04CE\x03\x02\x02\x02\u04CD\u04CB\x03\x02" +
		"\x02\x02\u04CE\u04CF\x07W\x02\x02\u04CF\u04D0\x05\x04\x03\x02\u04D0\xAD" +
		"\x03\x02\x02\x02\u04D1\u04D4\x05\u0108\x85\x02\u04D2\u04D4\x07%\x02\x02" +
		"\u04D3\u04D1\x03\x02\x02\x02\u04D3\u04D2\x03\x02\x02\x02\u04D4\xAF\x03" +
		"\x02\x02\x02\u04D5\u04D6\x07@\x02\x02\u04D6\u04D7\x05\xB2Z\x02\u04D7\xB1" +
		"\x03\x02\x02\x02\u04D8\u04DD\x05\xB4[\x02\u04D9\u04DA\x07U\x02\x02\u04DA" +
		"\u04DC\x05\xB4[\x02\u04DB\u04D9\x03\x02\x02\x02\u04DC\u04DF\x03\x02\x02" +
		"\x02\u04DD\u04DB\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE\xB3" +
		"\x03\x02\x02\x02\u04DF\u04DD\x03\x02\x02\x02\u04E0\u04E3\x05 \x11\x02" +
		"\u04E1\u04E3\x05$\x13\x02\u04E2\u04E0\x03\x02\x02\x02\u04E2\u04E1\x03" +
		"\x02\x02\x02\u04E3\xB5\x03\x02\x02\x02\u04E4\u04E7\x05\u011E\x90\x02\u04E5" +
		"\u04E7\x07T\x02\x02\u04E6\u04E4\x03\x02\x02\x02\u04E6\u04E5\x03\x02\x02" +
		"\x02\u04E7\xB7\x03\x02\x02\x02\u04E8\u04E9\x05\u011E\x90\x02\u04E9\xB9" +
		"\x03\x02\x02\x02\u04EA\u04EB\x079\x02\x02\u04EB\u04EC\x05\u011E\x90\x02" +
		"\u04EC\xBB\x03\x02\x02\x02\u04ED\u04EF\x05\xBE`\x02\u04EE\u04ED\x03\x02" +
		"\x02\x02\u04EF\u04F2\x03\x02\x02\x02\u04F0\u04EE\x03\x02\x02\x02\u04F0" +
		"\u04F1\x03\x02\x02\x02\u04F1\u04F3\x03\x02\x02\x02\u04F2\u04F0\x03\x02" +
		"\x02\x02\u04F3\u04F5\x05\xC0a\x02\u04F4\u04F6\x05\xB0Y\x02\u04F5\u04F4" +
		"\x03\x02\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6\u04F7\x03\x02\x02\x02" +
		"\u04F7\u04F8\x05\xC4c\x02\u04F8\xBD\x03\x02\x02\x02\u04F9\u04FE\x05\u0108" +
		"\x85\x02\u04FA\u04FE\x076\x02\x02\u04FB\u04FE\x075\x02\x02\u04FC\u04FE" +
		"\x074\x02\x02\u04FD\u04F9\x03\x02\x02\x02\u04FD\u04FA\x03\x02\x02\x02" +
		"\u04FD\u04FB\x03\x02\x02\x02\u04FD\u04FC\x03\x02\x02\x02\u04FE\xBF\x03" +
		"\x02\x02\x02\u04FF\u0501\x05l7\x02\u0500\u04FF\x03\x02\x02\x02\u0500\u0501" +
		"\x03\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\u0503\x05\xC2b\x02" +
		"\u0503\u0507\x07N\x02\x02\u0504\u0505\x05\xA6T\x02\u0505\u0506\x07U\x02" +
		"\x02\u0506\u0508\x03\x02\x02\x02\u0507\u0504\x03\x02\x02\x02\u0507\u0508" +
		"\x03\x02\x02\x02\u0508\u050A\x03\x02\x02\x02\u0509\u050B\x05\xA8U\x02" +
		"\u050A\u0509\x03\x02\x02\x02\u050A\u050B\x03\x02\x02\x02\u050B\u050C\x03" +
		"\x02\x02\x02\u050C\u050D\x07O\x02\x02\u050D\xC1\x03\x02\x02\x02\u050E" +
		"\u050F\x05\x06\x04\x02\u050F\xC3\x03\x02\x02\x02\u0510\u0512\x07P\x02" +
		"\x02\u0511\u0513\x05\xC6d\x02\u0512\u0511\x03\x02\x02\x02\u0512\u0513" +
		"\x03\x02\x02\x02\u0513\u0515\x03\x02\x02\x02\u0514\u0516\x05\u0120\x91" +
		"\x02\u0515\u0514\x03\x02\x02\x02\u0515\u0516\x03\x02\x02\x02\u0516\u0517" +
		"\x03\x02\x02\x02\u0517\u0518\x07Q\x02\x02\u0518\xC5\x03\x02\x02\x02\u0519" +
		"\u051B\x052\x1A\x02\u051A\u0519\x03\x02\x02\x02\u051A\u051B\x03\x02\x02" +
		"\x02\u051B\u051C\x03\x02\x02\x02\u051C\u051D\t\t\x02\x02\u051D\u051F\x07" +
		"N\x02\x02\u051E\u0520\x05\u01B0\xD9\x02\u051F\u051E\x03\x02\x02\x02\u051F" +
		"\u0520\x03\x02\x02\x02\u0520\u0521\x03\x02\x02\x02\u0521\u0522\x07O\x02" +
		"\x02\u0522\u0534\x07T\x02\x02\u0523\u0526\x05D#\x02\u0524\u0526\x05\u0190" +
		"\xC9\x02\u0525\u0523\x03\x02\x02\x02\u0525\u0524\x03\x02\x02\x02\u0526" +
		"\u0527\x03\x02\x02\x02\u0527\u0529\x07V\x02\x02\u0528\u052A\x052\x1A\x02" +
		"\u0529\u0528\x03\x02\x02\x02\u0529\u052A\x03\x02\x02\x02\u052A\u052B\x03" +
		"\x02\x02\x02\u052B\u052C\x07;\x02\x02\u052C\u052E\x07N\x02\x02\u052D\u052F" +
		"\x05\u01B0\xD9\x02\u052E\u052D\x03\x02\x02\x02\u052E\u052F\x03\x02\x02" +
		"\x02\u052F\u0530\x03\x02\x02\x02\u0530\u0531\x07O\x02\x02\u0531\u0532" +
		"\x07T\x02\x02\u0532\u0534\x03\x02\x02\x02\u0533\u051A\x03\x02\x02\x02" +
		"\u0533\u0525\x03\x02\x02\x02\u0534\xC7\x03\x02\x02\x02\u0535\u0537\x05" +
		"j6\x02\u0536\u0535\x03\x02\x02\x02\u0537\u053A\x03\x02\x02\x02\u0538\u0536" +
		"\x03\x02\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539\u053B\x03\x02\x02\x02" +
		"\u053A\u0538\x03\x02\x02\x02\u053B\u053C\x07#\x02\x02\u053C\u053E\x05" +
		"\x06\x04\x02\u053D\u053F\x05r:\x02\u053E\u053D\x03\x02\x02\x02\u053E\u053F" +
		"\x03\x02\x02\x02\u053F\u0540\x03\x02\x02\x02\u0540\u0541\x05\xCAf\x02" +
		"\u0541\xC9\x03\x02\x02\x02\u0542\u0544\x07P\x02\x02\u0543\u0545\x05\xCC" +
		"g\x02\u0544\u0543\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545\u0547" +
		"\x03\x02\x02\x02\u0546\u0548\x07U\x02\x02\u0547\u0546\x03\x02\x02\x02" +
		"\u0547\u0548\x03\x02\x02\x02\u0548\u054A\x03\x02\x02\x02\u0549\u054B\x05" +
		"\xD2j\x02\u054A\u0549\x03\x02\x02\x02\u054A\u054B\x03\x02\x02\x02\u054B" +
		"\u054C\x03\x02\x02\x02\u054C\u054D\x07Q\x02\x02\u054D\xCB\x03\x02\x02" +
		"\x02\u054E\u0553\x05\xCEh\x02\u054F\u0550\x07U\x02\x02\u0550\u0552\x05" +
		"\xCEh\x02\u0551\u054F\x03\x02\x02\x02\u0552\u0555\x03\x02\x02\x02\u0553" +
		"\u0551\x03\x02\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554\xCD\x03\x02\x02" +
		"\x02\u0555\u0553\x03\x02\x02\x02\u0556\u0558\x05\xD0i\x02\u0557\u0556" +
		"\x03\x02\x02\x02\u0558\u055B\x03\x02\x02\x02\u0559\u0557\x03\x02\x02\x02" +
		"\u0559\u055A\x03\x02\x02\x02\u055A\u055C\x03\x02\x02\x02\u055B\u0559\x03" +
		"\x02\x02\x02\u055C\u0562\x05\x04\x03\x02\u055D\u055F\x07N\x02\x02\u055E" +
		"\u0560\x05\u01B0\xD9\x02\u055F\u055E\x03\x02\x02\x02\u055F\u0560\x03\x02" +
		"\x02\x02\u0560\u0561\x03\x02\x02\x02\u0561\u0563\x07O\x02\x02\u0562\u055D" +
		"\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563\u0565\x03\x02\x02\x02" +
		"\u0564\u0566\x05x=\x02\u0565\u0564\x03\x02\x02\x02\u0565\u0566\x03\x02" +
		"\x02\x02\u0566\xCF\x03\x02\x02\x02\u0567\u0568\x05\u0108\x85\x02\u0568" +
		"\xD1\x03\x02\x02\x02\u0569\u056D\x07T\x02\x02\u056A\u056C\x05z>\x02\u056B" +
		"\u056A\x03\x02\x02\x02\u056C\u056F\x03\x02\x02\x02\u056D\u056B\x03\x02" +
		"\x02\x02\u056D\u056E\x03\x02\x02\x02\u056E\xD3\x03\x02\x02\x02\u056F\u056D" +
		"\x03\x02\x02\x02\u0570\u0572\x05j6\x02\u0571\u0570\x03\x02\x02\x02\u0572" +
		"\u0575\x03\x02\x02\x02\u0573\u0571\x03\x02\x02\x02\u0573\u0574\x03\x02" +
		"\x02\x02\u0574\u0576\x03\x02\x02\x02\u0575\u0573\x03\x02\x02\x02\u0576" +
		"\u0577\x07\v\x02\x02\u0577\u0579\x05\x06\x04\x02\u0578\u057A\x05l7\x02" +
		"\u0579\u0578\x03\x02\x02\x02\u0579";
	private static readonly _serializedATNSegment3: string =
		"\u057A\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02\u057B\u057D\x05\xD6" +
		"l\x02\u057C\u057E\x05r:\x02\u057D\u057C\x03\x02\x02\x02\u057D\u057E\x03" +
		"\x02\x02\x02\u057E\u057F\x03\x02\x02\x02\u057F\u0580\x05\xE0q\x02\u0580" +
		"\xD5\x03\x02\x02\x02\u0581\u0583\x07N\x02\x02\u0582\u0584\x05\xD8m\x02" +
		"\u0583\u0582\x03\x02\x02\x02\u0583\u0584\x03\x02\x02\x02\u0584\u0585\x03" +
		"\x02\x02\x02\u0585\u0586\x07O\x02\x02\u0586\xD7\x03\x02\x02\x02\u0587" +
		"\u058C\x05\xDAn\x02\u0588\u0589\x07U\x02\x02\u0589\u058B\x05\xDAn\x02" +
		"\u058A\u0588\x03\x02\x02\x02\u058B\u058E\x03\x02\x02\x02\u058C\u058A\x03" +
		"\x02\x02\x02\u058C\u058D\x03\x02\x02\x02\u058D\xD9\x03\x02\x02\x02\u058E" +
		"\u058C\x03\x02\x02\x02\u058F\u0591\x05\xDEp\x02\u0590\u058F\x03\x02\x02" +
		"\x02\u0591\u0594\x03\x02\x02\x02\u0592\u0590\x03\x02\x02\x02\u0592\u0593" +
		"\x03\x02\x02\x02\u0593\u0595\x03\x02\x02\x02\u0594\u0592\x03\x02\x02\x02" +
		"\u0595\u0596\x05\x8AF\x02\u0596\u0597\x05\x04\x03\x02\u0597\u059A\x03" +
		"\x02\x02\x02\u0598\u059A\x05\xDCo\x02\u0599\u0592\x03\x02\x02\x02\u0599" +
		"\u0598\x03\x02\x02\x02\u059A\xDB\x03\x02\x02\x02\u059B\u059D\x05\xDEp" +
		"\x02\u059C\u059B\x03\x02\x02\x02\u059D\u05A0\x03\x02\x02\x02\u059E\u059C" +
		"\x03\x02\x02\x02\u059E\u059F\x03\x02\x02\x02\u059F\u05A1\x03\x02\x02\x02" +
		"\u05A0\u059E\x03\x02\x02\x02\u05A1\u05A5\x05\x8AF\x02\u05A2\u05A4\x05" +
		"\u0108\x85\x02\u05A3\u05A2\x03\x02\x02\x02\u05A4\u05A7\x03\x02\x02\x02" +
		"\u05A5\u05A3\x03\x02\x02\x02\u05A5\u05A6\x03\x02\x02\x02\u05A6\u05A8\x03" +
		"\x02\x02\x02\u05A7\u05A5\x03\x02\x02\x02\u05A8\u05A9\x07W\x02\x02\u05A9" +
		"\u05AA\x05\x04\x03\x02\u05AA\xDD\x03\x02\x02\x02\u05AB\u05AC\x05\u0108" +
		"\x85\x02\u05AC\xDF\x03\x02\x02\x02\u05AD\u05B1\x07P\x02\x02\u05AE\u05B0" +
		"\x05\xE2r\x02\u05AF\u05AE\x03\x02\x02\x02\u05B0\u05B3\x03\x02\x02\x02" +
		"\u05B1\u05AF\x03\x02\x02\x02\u05B1\u05B2\x03\x02\x02\x02\u05B2\u05B4\x03" +
		"\x02\x02\x02\u05B3\u05B1\x03\x02\x02\x02\u05B4\u05B5\x07Q\x02\x02\u05B5" +
		"\xE1\x03\x02\x02\x02\u05B6\u05B9\x05z>\x02\u05B7\u05B9\x05\xE4s\x02\u05B8" +
		"\u05B6\x03\x02\x02\x02\u05B8\u05B7\x03\x02\x02\x02\u05B9\xE3\x03\x02\x02" +
		"\x02\u05BA\u05BC\x05\xBE`\x02\u05BB\u05BA\x03\x02\x02\x02\u05BC\u05BF" +
		"\x03\x02\x02\x02\u05BD\u05BB\x03\x02\x02\x02\u05BD\u05BE\x03\x02\x02\x02" +
		"\u05BE\u05C0\x03\x02\x02\x02\u05BF\u05BD\x03\x02\x02\x02\u05C0\u05C1\x05" +
		"\xC2b\x02\u05C1\u05C2\x05\xC4c\x02\u05C2\xE5\x03\x02\x02\x02\u05C3\u05C6" +
		"\x05\xE8u\x02\u05C4\u05C6\x05\xFC\x7F\x02\u05C5\u05C3\x03\x02\x02\x02" +
		"\u05C5\u05C4\x03\x02\x02\x02\u05C6\xE7\x03\x02\x02\x02\u05C7\u05C9\x05" +
		"\xEAv\x02\u05C8\u05C7\x03\x02\x02\x02\u05C9\u05CC\x03\x02\x02\x02\u05CA" +
		"\u05C8\x03\x02\x02\x02\u05CA\u05CB\x03\x02\x02\x02\u05CB\u05CD\x03\x02" +
		"\x02\x02\u05CC\u05CA\x03\x02\x02\x02\u05CD\u05CE\x07/\x02\x02\u05CE\u05D0" +
		"\x05\x06\x04\x02\u05CF\u05D1\x05l7\x02\u05D0\u05CF\x03\x02\x02\x02\u05D0" +
		"\u05D1\x03\x02\x02\x02\u05D1\u05D3\x03\x02\x02\x02\u05D2\u05D4\x05\xEC" +
		"w\x02\u05D3\u05D2\x03\x02\x02\x02\u05D3\u05D4\x03\x02\x02\x02\u05D4\u05D6" +
		"\x03\x02\x02\x02\u05D5\u05D7\x05\xEEx\x02\u05D6\u05D5\x03\x02\x02\x02" +
		"\u05D6\u05D7\x03\x02\x02\x02\u05D7\u05D8\x03\x02\x02\x02\u05D8\u05D9\x05" +
		"\xF0y\x02\u05D9\xE9\x03\x02\x02\x02\u05DA\u05E4\x05\u0108\x85\x02\u05DB" +
		"\u05E4\x076\x02\x02\u05DC\u05E4\x075\x02\x02\u05DD\u05E4\x074\x02\x02" +
		"\u05DE\u05E4\x07\x14\x02\x02\u05DF\u05E4\x079\x02\x02\u05E0\u05E4\x07" +
		"\r\x02\x02\u05E1\u05E4\x07\x05\x02\x02\u05E2\u05E4\x07:\x02\x02\u05E3" +
		"\u05DA\x03\x02\x02\x02\u05E3\u05DB\x03\x02\x02\x02\u05E3\u05DC\x03\x02" +
		"\x02\x02\u05E3\u05DD\x03\x02\x02\x02\u05E3\u05DE\x03\x02\x02\x02\u05E3" +
		"\u05DF\x03\x02\x02\x02\u05E3\u05E0\x03\x02\x02\x02\u05E3\u05E1\x03\x02" +
		"\x02\x02\u05E3\u05E2\x03\x02\x02\x02\u05E4\xEB\x03\x02\x02\x02\u05E5\u05E6" +
		"\x07$\x02\x02\u05E6\u05E7\x05t;\x02\u05E7\xED\x03\x02\x02\x02\u05E8\u05E9" +
		"\x07\t\x02\x02\u05E9\u05EE\x05@!\x02\u05EA\u05EB\x07U\x02\x02\u05EB\u05ED" +
		"\x05@!\x02\u05EC\u05EA\x03\x02\x02\x02\u05ED\u05F0\x03\x02\x02\x02\u05EE" +
		"\u05EC\x03\x02\x02\x02\u05EE\u05EF\x03\x02\x02\x02\u05EF\xEF\x03\x02\x02" +
		"\x02\u05F0\u05EE\x03\x02\x02\x02\u05F1\u05F5\x07P\x02\x02\u05F2\u05F4" +
		"\x05\xF2z\x02\u05F3\u05F2\x03\x02\x02\x02\u05F4\u05F7\x03\x02\x02\x02" +
		"\u05F5\u05F3\x03\x02\x02\x02\u05F5\u05F6\x03\x02\x02\x02\u05F6\u05F8\x03" +
		"\x02\x02\x02\u05F7\u05F5\x03\x02\x02\x02\u05F8\u05F9\x07Q\x02\x02\u05F9" +
		"\xF1\x03\x02\x02\x02\u05FA\u0600\x05\xF4{\x02\u05FB\u0600\x05\xF8}\x02" +
		"\u05FC\u0600\x05f4\x02\u05FD\u0600\x05\xE6t\x02\u05FE\u0600\x07T\x02\x02" +
		"\u05FF\u05FA\x03\x02\x02\x02\u05FF\u05FB\x03\x02\x02\x02\u05FF\u05FC\x03" +
		"\x02\x02\x02\u05FF\u05FD\x03\x02\x02\x02\u05FF\u05FE\x03\x02\x02\x02\u0600" +
		"\xF3\x03\x02\x02\x02\u0601\u0603\x05\xF6|\x02\u0602\u0601\x03\x02\x02" +
		"\x02\u0603\u0606\x03\x02\x02\x02\u0604\u0602\x03\x02\x02\x02\u0604\u0605" +
		"\x03\x02\x02\x02\u0605\u0607\x03\x02\x02\x02\u0606\u0604\x03\x02\x02\x02" +
		"\u0607\u0608\x05\x8AF\x02\u0608\u0609\x05\x82B\x02\u0609\u060A\x07T\x02" +
		"\x02\u060A\xF5\x03\x02\x02\x02\u060B\u0610\x05\u0108\x85\x02\u060C\u0610" +
		"\x076\x02\x02\u060D\u0610\x079\x02\x02\u060E\u0610\x07%\x02\x02\u060F" +
		"\u060B\x03\x02\x02\x02\u060F\u060C\x03\x02\x02\x02\u060F\u060D\x03\x02" +
		"\x02\x02\u060F\u060E\x03\x02\x02\x02\u0610\xF7\x03\x02\x02\x02\u0611\u0613" +
		"\x05\xFA~\x02\u0612\u0611\x03\x02\x02\x02\u0613\u0616\x03\x02\x02\x02" +
		"\u0614\u0612\x03\x02\x02\x02\u0614\u0615\x03\x02\x02\x02\u0615\u0617\x03" +
		"\x02\x02\x02\u0616\u0614\x03\x02\x02\x02\u0617\u0618\x05\xA0Q\x02\u0618" +
		"\u0619\x05\xB6\\\x02\u0619\xF9\x03\x02\x02\x02\u061A\u0622\x05\u0108\x85" +
		"\x02\u061B\u0622\x076\x02\x02\u061C\u0622\x074\x02\x02\u061D\u0622\x07" +
		"\x14\x02\x02\u061E\u0622\x07\x1F\x02\x02\u061F\u0622\x079\x02\x02\u0620" +
		"\u0622\x07:\x02\x02\u0621\u061A\x03\x02\x02\x02\u0621\u061B\x03\x02\x02" +
		"\x02\u0621\u061C\x03\x02\x02\x02\u0621\u061D\x03\x02\x02\x02\u0621\u061E" +
		"\x03\x02\x02\x02\u0621\u061F\x03\x02\x02\x02\u0621\u0620\x03\x02\x02\x02" +
		"\u0622\xFB\x03\x02\x02\x02\u0623\u0625\x05\xEAv\x02\u0624\u0623\x03\x02" +
		"\x02\x02\u0625\u0628\x03\x02\x02\x02\u0626\u0624\x03\x02\x02\x02\u0626" +
		"\u0627\x03\x02\x02\x02\u0627\u0629\x03\x02\x02\x02\u0628\u0626\x03\x02" +
		"\x02\x02\u0629\u062A\x07X\x02\x02\u062A\u062B\x07/\x02\x02\u062B\u062C" +
		"\x05\x06\x04\x02\u062C\u062D\x05\xFE\x80\x02\u062D\xFD\x03\x02\x02\x02" +
		"\u062E\u0632\x07P\x02\x02\u062F\u0631\x05\u0100\x81\x02\u0630\u062F\x03" +
		"\x02\x02\x02\u0631\u0634\x03\x02\x02\x02\u0632\u0630\x03\x02\x02\x02\u0632" +
		"\u0633\x03\x02\x02\x02\u0633\u0635\x03\x02\x02\x02\u0634\u0632\x03\x02" +
		"\x02\x02\u0635\u0636\x07Q\x02\x02\u0636\xFF\x03\x02\x02\x02\u0637\u063D" +
		"\x05\u0102\x82\x02\u0638\u063D\x05\xF4{\x02\u0639\u063D\x05f4\x02\u063A" +
		"\u063D\x05\xE6t\x02\u063B\u063D\x07T\x02\x02\u063C\u0637\x03\x02\x02\x02" +
		"\u063C\u0638\x03\x02\x02\x02\u063C\u0639\x03\x02\x02\x02\u063C\u063A\x03" +
		"\x02\x02\x02\u063C\u063B\x03\x02\x02\x02\u063D\u0101\x03\x02\x02\x02\u063E" +
		"\u0640\x05\u0104\x83\x02\u063F\u063E\x03\x02\x02\x02\u0640\u0643\x03\x02" +
		"\x02\x02\u0641\u063F\x03\x02\x02\x02\u0641\u0642\x03\x02\x02\x02\u0642" +
		"\u0644\x03\x02\x02\x02\u0643\u0641\x03\x02\x02\x02\u0644\u0645\x05\x8A" +
		"F\x02\u0645\u0646\x05\x04\x03\x02\u0646\u0647\x07N\x02\x02\u0647\u0649" +
		"\x07O\x02\x02\u0648\u064A\x05(\x15\x02\u0649\u0648\x03\x02\x02\x02\u0649" +
		"\u064A\x03\x02\x02\x02\u064A\u064C\x03\x02\x02\x02\u064B\u064D\x05\u0106" +
		"\x84\x02\u064C\u064B\x03\x02\x02\x02\u064C\u064D\x03\x02\x02\x02\u064D" +
		"\u064E\x03\x02\x02\x02\u064E\u064F\x07T\x02\x02\u064F\u0103\x03\x02\x02" +
		"\x02\u0650\u0654\x05\u0108\x85\x02\u0651\u0654\x076\x02\x02\u0652\u0654" +
		"\x07\x14\x02\x02\u0653\u0650\x03\x02\x02\x02\u0653\u0651\x03\x02\x02\x02" +
		"\u0653\u0652\x03\x02\x02\x02\u0654\u0105\x03\x02\x02\x02\u0655\u0656\x07" +
		"\x1F\x02\x02\u0656\u0657\x05\u0110\x89\x02\u0657\u0107\x03\x02\x02\x02" +
		"\u0658\u065C\x05\u010A\x86\x02\u0659\u065C\x05\u0116\x8C\x02\u065A\u065C" +
		"\x05\u0118\x8D\x02\u065B\u0658\x03\x02\x02\x02\u065B\u0659\x03\x02\x02" +
		"\x02\u065B\u065A\x03\x02\x02\x02\u065C\u0109\x03\x02\x02\x02\u065D\u065E" +
		"\x07X\x02\x02\u065E\u065F\x05@!\x02\u065F\u0661\x07N\x02\x02\u0660\u0662" +
		"\x05\u010C\x87\x02\u0661\u0660\x03\x02\x02\x02\u0661\u0662\x03\x02\x02" +
		"\x02\u0662\u0663\x03\x02\x02\x02\u0663\u0664\x07O\x02\x02\u0664\u010B" +
		"\x03\x02\x02\x02\u0665\u066A\x05\u010E\x88\x02\u0666\u0667\x07U\x02\x02" +
		"\u0667\u0669\x05\u010E\x88\x02\u0668\u0666\x03\x02\x02\x02\u0669\u066C" +
		"\x03\x02\x02\x02\u066A\u0668\x03\x02\x02\x02\u066A\u066B\x03\x02\x02\x02" +
		"\u066B\u010D\x03\x02\x02\x02\u066C\u066A\x03\x02\x02\x02\u066D\u066E\x05" +
		"\x04\x03\x02\u066E\u066F\x07Z\x02\x02\u066F\u0670\x05\u0110\x89\x02\u0670" +
		"\u010F\x03\x02\x02\x02\u0671\u0675\x05\u01DA\xEE\x02\u0672\u0675\x05\u0112" +
		"\x8A\x02\u0673\u0675\x05\u0108\x85\x02\u0674\u0671\x03\x02\x02\x02\u0674" +
		"\u0672\x03\x02\x02\x02\u0674\u0673\x03\x02\x02\x02\u0675\u0111\x03\x02" +
		"\x02\x02\u0676\u0678\x07P\x02\x02\u0677\u0679\x05\u0114\x8B\x02\u0678" +
		"\u0677\x03\x02\x02\x02\u0678\u0679\x03\x02\x02\x02\u0679\u067B\x03\x02" +
		"\x02\x02\u067A\u067C\x07U\x02\x02\u067B\u067A\x03\x02\x02\x02\u067B\u067C" +
		"\x03\x02\x02\x02\u067C\u067D\x03\x02\x02\x02\u067D\u067E\x07Q\x02\x02" +
		"\u067E\u0113\x03\x02\x02\x02\u067F\u0684\x05\u0110\x89\x02\u0680\u0681" +
		"\x07U\x02\x02\u0681\u0683\x05\u0110\x89\x02\u0682\u0680\x03\x02\x02\x02" +
		"\u0683\u0686\x03\x02\x02\x02\u0684\u0682\x03\x02\x02\x02\u0684\u0685\x03" +
		"\x02\x02\x02\u0685\u0115\x03\x02\x02\x02\u0686\u0684\x03\x02\x02\x02\u0687" +
		"\u0688\x07X\x02\x02\u0688\u0689\x05@!\x02\u0689\u0117\x03\x02\x02\x02" +
		"\u068A\u068B\x07X\x02\x02\u068B\u068C\x05@!\x02\u068C\u068D\x07N\x02\x02" +
		"\u068D\u068E\x05\u0110\x89\x02\u068E\u068F\x07O\x02\x02\u068F\u0119\x03" +
		"\x02\x02\x02\u0690\u0692\x07P\x02\x02\u0691\u0693\x05\u011C\x8F\x02\u0692" +
		"\u0691\x03\x02\x02\x02\u0692\u0693\x03\x02\x02\x02\u0693\u0695\x03\x02" +
		"\x02\x02\u0694\u0696\x07U\x02\x02\u0695\u0694\x03\x02\x02\x02\u0695\u0696" +
		"\x03\x02\x02\x02\u0696\u0697\x03\x02\x02\x02\u0697\u0698\x07Q\x02\x02" +
		"\u0698\u011B\x03\x02\x02\x02\u0699\u069E\x05\x88E\x02\u069A\u069B\x07" +
		"U\x02\x02\u069B\u069D\x05\x88E\x02\u069C\u069A\x03\x02\x02\x02\u069D\u06A0" +
		"\x03\x02\x02\x02\u069E\u069C\x03\x02\x02\x02\u069E\u069F\x03\x02\x02\x02" +
		"\u069F\u011D\x03\x02\x02\x02\u06A0\u069E\x03\x02\x02\x02\u06A1\u06A3\x07" +
		"P\x02\x02\u06A2\u06A4\x05\u0120\x91\x02\u06A3\u06A2\x03\x02\x02\x02\u06A3" +
		"\u06A4\x03\x02\x02\x02\u06A4\u06A5\x03\x02\x02\x02\u06A5\u06A6\x07Q\x02" +
		"\x02\u06A6\u011F\x03\x02\x02\x02\u06A7\u06AB\x05\u0122\x92\x02\u06A8\u06AA" +
		"\x05\u0122\x92\x02\u06A9\u06A8\x03\x02\x02\x02\u06AA\u06AD\x03\x02\x02" +
		"\x02\u06AB\u06A9\x03\x02\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC\u0121" +
		"\x03\x02\x02\x02\u06AD\u06AB\x03\x02\x02\x02\u06AE\u06B2\x05\u0124\x93" +
		"\x02\u06AF\u06B2\x05\u012A\x96\x02\u06B0\u06B2\x05\u012C\x97\x02\u06B1" +
		"\u06AE\x03\x02\x02\x02\u06B1\u06AF\x03\x02\x02\x02\u06B1\u06B0\x03\x02" +
		"\x02\x02\u06B2\u0123\x03\x02\x02\x02\u06B3\u06B6\x05f4\x02\u06B4\u06B6" +
		"\x05\xE8u\x02\u06B5\u06B3\x03\x02\x02\x02\u06B5\u06B4\x03\x02\x02\x02" +
		"\u06B6\u0125\x03\x02\x02\x02\u06B7\u06B9\x05\xAEX\x02\u06B8\u06B7\x03" +
		"\x02\x02\x02\u06B9\u06BC\x03\x02\x02\x02\u06BA\u06B8\x03\x02\x02\x02\u06BA" +
		"\u06BB\x03\x02\x02\x02\u06BB\u06BD\x03\x02\x02\x02\u06BC\u06BA\x03\x02" +
		"\x02\x02\u06BD\u06BF\x05\u0128\x95\x02\u06BE\u06C0\x05\x82B\x02\u06BF" +
		"\u06BE\x03\x02\x02\x02\u06BF\u06C0\x03\x02\x02\x02\u06C0\u0127\x03\x02" +
		"\x02\x02\u06C1\u06C4\x05\x8AF\x02\u06C2\u06C4\x07\x11\x02\x02\u06C3\u06C1" +
		"\x03\x02\x02\x02\u06C3\u06C2\x03\x02\x02\x02\u06C4\u0129\x03\x02\x02\x02" +
		"\u06C5\u06C6\x05\u0126\x94\x02\u06C6\u06C7\x07T\x02\x02\u06C7\u012B\x03" +
		"\x02\x02\x02\u06C8\u06CF\x05\u0130\x99\x02\u06C9\u06CF\x05\u0134\x9B\x02" +
		"\u06CA\u06CF\x05\u013C\x9F\x02\u06CB\u06CF\x05\u013E\xA0\x02\u06CC\u06CF" +
		"\x05\u0150\xA9\x02\u06CD\u06CF\x05\u0156\xAC\x02\u06CE\u06C8\x03\x02\x02" +
		"\x02\u06CE\u06C9\x03\x02\x02\x02\u06CE\u06CA\x03\x02\x02\x02\u06CE\u06CB" +
		"\x03\x02\x02\x02\u06CE\u06CC\x03\x02\x02\x02\u06CE\u06CD\x03\x02\x02\x02" +
		"\u06CF\u012D\x03\x02\x02\x02\u06D0\u06D6\x05\u0130\x99\x02\u06D1\u06D6" +
		"\x05\u0136\x9C\x02\u06D2\u06D6\x05\u0140\xA1\x02\u06D3\u06D6\x05\u0152" +
		"\xAA\x02\u06D4\u06D6\x05\u0158\xAD\x02\u06D5\u06D0\x03\x02\x02\x02\u06D5" +
		"\u06D1\x03\x02\x02\x02\u06D5\u06D2\x03\x02\x02\x02\u06D5\u06D3\x03\x02" +
		"\x02\x02\u06D5\u06D4\x03\x02\x02\x02\u06D6\u012F\x03\x02\x02\x02\u06D7" +
		"\u06E5\x05\u011E\x90\x02\u06D8\u06E5\x05\u0132\x9A\x02\u06D9\u06E5\x05" +
		"\u0138\x9D\x02\u06DA\u06E5\x05\u0142\xA2\x02\u06DB\u06E5\x05\u0144\xA3" +
		"\x02\u06DC\u06E5\x05\u0154\xAB\x02\u06DD\u06E5\x05\u0168\xB5\x02\u06DE" +
		"\u06E5\x05\u016A\xB6\x02\u06DF\u06E5\x05\u016C\xB7\x02\u06E0\u06E5\x05" +
		"\u0170\xB9\x02\u06E1\u06E5\x05\u016E\xB8\x02\u06E2\u06E5\x05\u0172\xBA" +
		"\x02\u06E3\u06E5\x05\u0188\xC5\x02\u06E4\u06D7\x03\x02\x02\x02\u06E4\u06D8" +
		"\x03\x02\x02\x02\u06E4\u06D9\x03\x02\x02\x02\u06E4\u06DA\x03\x02\x02\x02" +
		"\u06E4\u06DB\x03\x02\x02\x02\u06E4\u06DC\x03\x02\x02\x02\u06E4\u06DD\x03" +
		"\x02\x02\x02\u06E4\u06DE\x03\x02\x02\x02\u06E4\u06DF\x03\x02\x02\x02\u06E4" +
		"\u06E0\x03\x02\x02\x02\u06E4\u06E1\x03\x02\x02\x02\u06E4\u06E2\x03\x02" +
		"\x02\x02\u06E4\u06E3\x03\x02\x02\x02\u06E5\u0131\x03\x02\x02\x02\u06E6" +
		"\u06E7\x07T\x02\x02\u06E7\u0133\x03\x02\x02\x02\u06E8\u06E9\x05\x04\x03" +
		"\x02\u06E9\u06EA\x07`\x02\x02\u06EA\u06EB\x05\u012C\x97\x02\u06EB\u0135" +
		"\x03\x02\x02\x02\u06EC\u06ED\x05\x04\x03\x02\u06ED\u06EE\x07`\x02\x02" +
		"\u06EE\u06EF\x05\u012E\x98\x02\u06EF\u0137\x03\x02\x02\x02\u06F0\u06F1" +
		"\x05\u013A\x9E\x02\u06F1\u06F2\x07T\x02\x02\u06F2\u0139\x03\x02\x02\x02" +
		"\u06F3\u06FB\x05\u01DE\xF0\x02\u06F4\u06FB\x05\u01BE\xE0\x02\u06F5\u06FB" +
		"\x05\u01C0\xE1\x02\u06F6\u06FB\x05\u01B8\xDD\x02\u06F7\u06FB\x05\u01BA" +
		"\xDE\x02\u06F8\u06FB\x05\u01AE\xD8\x02\u06F9\u06FB\x05\u0198\xCD\x02\u06FA" +
		"\u06F3\x03\x02\x02\x02\u06FA\u06F4\x03\x02\x02\x02\u06FA\u06F5\x03\x02" +
		"\x02\x02\u06FA\u06F6\x03\x02\x02\x02\u06FA\u06F7\x03\x02\x02\x02\u06FA" +
		"\u06F8\x03\x02\x02\x02\u06FA\u06F9\x03\x02\x02\x02\u06FB\u013B\x03\x02" +
		"\x02\x02\u06FC\u06FD\x07)\x02\x02\u06FD\u06FE\x07N\x02\x02\u06FE\u06FF" +
		"\x05\u018E\xC8\x02\u06FF\u0700\x07O\x02\x02\u0700\u0701\x05\u012C\x97" +
		"\x02\u0701\u013D\x03\x02\x02\x02\u0702\u0703\x07)\x02\x02\u0703\u0704" +
		"\x07N\x02\x02\u0704\u0705\x05\u018E\xC8\x02\u0705\u0706\x07O\x02\x02\u0706" +
		"\u0707\x05\u012E\x98\x02\u0707\u0708\x07\"\x02\x02\u0708\u0709\x05\u012C" +
		"\x97\x02\u0709\u013F\x03\x02\x02\x02\u070A\u070B\x07)\x02\x02\u070B\u070C" +
		"\x07N\x02\x02\u070C\u070D\x05\u018E\xC8\x02\u070D\u070E\x07O\x02\x02\u070E" +
		"\u070F\x05\u012E\x98\x02\u070F\u0710\x07\"\x02\x02\u0710\u0711\x05\u012E" +
		"\x98\x02\u0711\u0141\x03\x02\x02\x02\u0712\u0713\x07\x15\x02\x02\u0713" +
		"\u0716\x05\u018E\xC8\x02\u0714\u0715\x07`\x02\x02\u0715\u0717\x05\u018E" +
		"\xC8\x02\u0716\u0714\x03\x02\x02\x02\u0716\u0717\x03\x02\x02\x02\u0717" +
		"\u0718\x03\x02\x02\x02\u0718\u0719\x07T\x02\x02\u0719\u0143\x03\x02\x02" +
		"\x02\u071A\u071B\x07<\x02\x02\u071B\u071C\x07N\x02\x02\u071C\u071D\x05" +
		"\u018E\xC8\x02\u071D\u071E\x07O\x02\x02\u071E\u071F\x05\u0146\xA4\x02" +
		"\u071F\u0145\x03\x02\x02\x02\u0720\u0721\x07P\x02\x02\u0721\u0725\x05" +
		"\u0148\xA5\x02\u0722\u0724\x05\u0148\xA5\x02\u0723\u0722\x03\x02\x02\x02" +
		"\u0724\u0727\x03\x02\x02\x02\u0725\u0723\x03\x02\x02\x02\u0725\u0726\x03" +
		"\x02\x02\x02\u0726\u0728\x03\x02\x02\x02\u0727\u0725\x03\x02\x02\x02\u0728" +
		"\u0729\x07Q\x02\x02\u0729\u073B\x03\x02\x02\x02\u072A\u072E\x07P\x02\x02" +
		"\u072B\u072D\x05\u014A\xA6\x02\u072C\u072B\x03\x02\x02\x02\u072D\u0730" +
		"\x03\x02\x02\x02\u072E\u072C\x03\x02\x02\x02\u072E\u072F\x03\x02\x02\x02" +
		"\u072F\u0736\x03\x02\x02\x02\u0730\u072E\x03\x02\x02\x02\u0731\u0732\x05" +
		"\u014C\xA7\x02\u0732\u0733\x07`\x02\x02\u0733\u0735\x03\x02\x02\x02\u0734" +
		"\u0731\x03\x02\x02\x02\u0735\u0738\x03\x02\x02\x02\u0736\u0734\x03\x02" +
		"\x02\x02\u0736\u0737\x03\x02\x02\x02\u0737\u0739\x03\x02\x02\x02\u0738" +
		"\u0736\x03\x02\x02\x02\u0739\u073B\x07Q\x02\x02\u073A\u0720\x03\x02\x02" +
		"\x02\u073A\u072A\x03\x02\x02\x02\u073B\u0147\x03\x02\x02\x02\u073C\u073D" +
		"\x05\u014C\xA7\x02\u073D\u0743\x07a\x02\x02\u073E\u073F\x05\u018E\xC8" +
		"\x02\u073F\u0740\x07T\x02\x02\u0740\u0744\x03\x02\x02\x02\u0741\u0744" +
		"\x05\u011E\x90\x02\u0742\u0744\x05\u016E\xB8\x02\u0743\u073E\x03\x02\x02" +
		"\x02\u0743\u0741\x03\x02\x02\x02\u0743\u0742\x03\x02\x02\x02\u0744\u0149" +
		"\x03\x02\x02\x02\u0745\u0746\x05\u014C\xA7\x02\u0746\u074C\x07`\x02\x02" +
		"\u0747\u0748\x05\u014C\xA7\x02\u0748\u0749\x07`\x02\x02\u0749\u074B\x03" +
		"\x02\x02\x02\u074A\u0747\x03\x02\x02\x02\u074B\u074E\x03\x02\x02\x02\u074C" +
		"\u074A\x03\x02\x02\x02\u074C\u074D\x03\x02\x02\x02\u074D\u074F\x03\x02" +
		"\x02\x02\u074E\u074C\x03\x02\x02\x02\u074F\u0750\x05\u0120\x91\x02\u0750" +
		"\u014B\x03\x02\x02\x02\u0751\u0752\x07\x19\x02\x02\u0752\u0757\x05\u014E" +
		"\xA8\x02\u0753\u0754\x07U\x02\x02\u0754\u0756\x05\u014E\xA8\x02\u0755" +
		"\u0753\x03\x02\x02\x02\u0756\u0759\x03\x02\x02\x02\u0757\u0755\x03\x02" +
		"\x02\x02\u0757\u0758\x03\x02\x02\x02\u0758\u075C\x03\x02\x02\x02\u0759" +
		"\u0757\x03\x02\x02\x02\u075A\u075C\x07\x1F\x02\x02\u075B\u0751\x03\x02" +
		"\x02\x02\u075B\u075A\x03\x02\x02\x02\u075C\u014D\x03\x02\x02\x02\u075D" +
		"\u075E\x05\u01DA\xEE\x02\u075E\u014F\x03\x02\x02\x02\u075F\u0760\x07E" +
		"\x02\x02\u0760\u0761\x07N\x02\x02\u0761\u0762\x05\u018E\xC8\x02\u0762" +
		"\u0763\x07O\x02\x02\u0763\u0764\x05\u012C\x97\x02\u0764\u0151\x03\x02" +
		"\x02\x02\u0765\u0766\x07E\x02\x02\u0766\u0767\x07N\x02\x02\u0767\u0768" +
		"\x05\u018E\xC8\x02\u0768\u0769\x07O\x02\x02\u0769\u076A\x05\u012E\x98" +
		"\x02\u076A\u0153\x03\x02\x02\x02\u076B\u076C\x07 \x02\x02\u076C\u076D" +
		"\x05\u012C\x97\x02\u076D\u076E\x07E\x02\x02\u076E\u076F\x07N\x02\x02\u076F" +
		"\u0770\x05\u018E\xC8\x02\u0770\u0771\x07O\x02\x02\u0771\u0772\x07T\x02" +
		"\x02\u0772\u0155\x03\x02\x02\x02\u0773\u0776\x05\u015A\xAE\x02\u0774\u0776" +
		"\x05\u0164\xB3\x02\u0775\u0773\x03\x02\x02\x02\u0775\u0774\x03\x02\x02" +
		"\x02\u0776\u0157\x03\x02\x02\x02\u0777\u077A\x05\u015C\xAF\x02\u0778\u077A" +
		"\x05\u0166\xB4\x02\u0779\u0777\x03\x02\x02\x02\u0779\u0778\x03\x02\x02" +
		"\x02\u077A\u0159\x03\x02\x02\x02\u077B\u077C\x07(\x02\x02\u077C\u077E" +
		"\x07N\x02\x02\u077D\u077F\x05\u015E\xB0\x02\u077E\u077D\x03\x02\x02\x02" +
		"\u077E\u077F\x03\x02\x02\x02\u077F\u0780\x03\x02\x02\x02\u0780\u0782\x07" +
		"T\x02\x02\u0781\u0783\x05\u018E\xC8\x02\u0782\u0781\x03\x02\x02\x02\u0782" +
		"\u0783\x03\x02\x02\x02\u0783\u0784\x03\x02\x02\x02\u0784\u0786\x07T\x02" +
		"\x02\u0785\u0787\x05\u0160\xB1\x02\u0786\u0785\x03\x02\x02\x02\u0786\u0787" +
		"\x03\x02\x02\x02\u0787\u0788\x03\x02\x02\x02\u0788\u0789\x07O\x02\x02" +
		"\u0789\u078A\x05\u012C\x97\x02\u078A\u015B\x03\x02\x02\x02\u078B\u078C" +
		"\x07(\x02\x02\u078C\u078E\x07N\x02\x02\u078D\u078F\x05\u015E\xB0\x02\u078E" +
		"\u078D\x03\x02\x02\x02\u078E\u078F\x03\x02\x02\x02\u078F\u0790\x03\x02" +
		"\x02\x02\u0790\u0792\x07T\x02\x02\u0791\u0793\x05\u018E\xC8\x02\u0792" +
		"\u0791\x03\x02\x02\x02\u0792\u0793\x03\x02\x02\x02\u0793\u0794\x03\x02" +
		"\x02\x02\u0794\u0796\x07T\x02\x02\u0795\u0797\x05\u0160\xB1\x02\u0796" +
		"\u0795\x03\x02\x02\x02\u0796\u0797\x03\x02\x02\x02\u0797\u0798\x03\x02" +
		"\x02\x02\u0798\u0799\x07O\x02\x02\u0799\u079A\x05\u012E\x98\x02\u079A" +
		"\u015D\x03\x02\x02\x02\u079B\u079E\x05\u0162\xB2\x02\u079C\u079E\x05\u0126" +
		"\x94\x02\u079D\u079B\x03\x02\x02\x02\u079D\u079C\x03\x02\x02\x02\u079E" +
		"\u015F\x03\x02\x02\x02\u079F\u07A0\x05\u0162\xB2\x02\u07A0\u0161\x03\x02" +
		"\x02\x02\u07A1\u07A6\x05\u013A\x9E\x02\u07A2\u07A3\x07U\x02\x02\u07A3" +
		"\u07A5\x05\u013A\x9E\x02\u07A4\u07A2\x03\x02\x02\x02\u07A5\u07A8\x03\x02" +
		"\x02\x02\u07A6\u07A4\x03\x02\x02\x02\u07A6\u07A7\x03\x02\x02\x02\u07A7" +
		"\u0163\x03\x02\x02\x02\u07A8\u07A6\x03\x02\x02\x02\u07A9\u07AA\x07(\x02" +
		"\x02\u07AA\u07AB\x07N\x02\x02\u07AB\u07AC\x05\u0126\x94\x02\u07AC\u07AD" +
		"\x07`\x02\x02\u07AD\u07AE\x05\u018E\xC8\x02\u07AE\u07AF\x07O\x02\x02\u07AF" +
		"\u07B0\x05\u012C\x97\x02\u07B0\u0165\x03\x02\x02\x02\u07B1\u07B2\x07(" +
		"\x02\x02\u07B2\u07B3\x07N\x02\x02\u07B3\u07B4\x05\u0126\x94\x02\u07B4" +
		"\u07B5\x07`\x02\x02\u07B5\u07B6\x05\u018E\xC8\x02\u07B6\u07B7\x07O\x02" +
		"\x02\u07B7\u07B8\x05\u012E\x98\x02\u07B8\u0167\x03\x02\x02\x02\u07B9\u07BB" +
		"\x07\x17\x02\x02\u07BA\u07BC\x05\x04\x03\x02\u07BB\u07BA\x03\x02\x02\x02" +
		"\u07BB\u07BC\x03\x02\x02\x02\u07BC\u07BD\x03\x02\x02\x02\u07BD\u07BE\x07" +
		"T\x02\x02\u07BE\u0169\x03\x02\x02\x02\u07BF\u07C1\x07\x1E\x02\x02\u07C0" +
		"\u07C2\x05\x04\x03\x02\u07C1\u07C0\x03\x02\x02\x02\u07C1\u07C2\x03\x02" +
		"\x02\x02\u07C2\u07C3\x03\x02\x02\x02\u07C3\u07C4\x07T\x02\x02\u07C4\u016B" +
		"\x03\x02\x02\x02\u07C5\u07C7\x077\x02\x02\u07C6\u07C8\x05\u018E\xC8\x02" +
		"\u07C7\u07C6\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8\u07C9\x03" +
		"\x02\x02\x02\u07C9\u07CA\x07T\x02\x02\u07CA\u016D\x03\x02\x02\x02\u07CB" +
		"\u07CC\x07?\x02\x02\u07CC\u07CD\x05\u018E\xC8\x02\u07CD\u07CE\x07T\x02" +
		"\x02\u07CE\u016F\x03\x02\x02\x02\u07CF\u07D0\x07=\x02\x02\u07D0\u07D1" +
		"\x07N\x02\x02\u07D1\u07D2\x05\u018E\xC8\x02\u07D2\u07D3\x07O\x02\x02\u07D3" +
		"\u07D4\x05\u011E\x90\x02\u07D4\u0171\x03\x02\x02\x02\u07D5\u07D6\x07B" +
		"\x02\x02\u07D6\u07D7\x05\u011E\x90\x02\u07D7\u07D8\x05\u0174\xBB\x02\u07D8" +
		"\u07E6\x03\x02\x02\x02\u07D9\u07DA\x07B\x02\x02\u07DA\u07DB\x05\u011E" +
		"\x90\x02\u07DB\u07DC\x05\u017C\xBF\x02\u07DC\u07E6\x03\x02\x02\x02\u07DD" +
		"\u07DE\x07B\x02\x02\u07DE\u07E0\x05\u011E\x90\x02\u07DF\u07E1\x05\u0174" +
		"\xBB\x02\u07E0\u07DF\x03\x02\x02\x02\u07E0\u07E1\x03\x02\x02\x02\u07E1" +
		"\u07E2\x03\x02\x02\x02\u07E2\u07E3\x05\u017C\xBF\x02\u07E3\u07E6\x03\x02" +
		"\x02\x02\u07E4\u07E6\x05\u017E\xC0\x02\u07E5\u07D5\x03\x02\x02\x02\u07E5" +
		"\u07D9\x03\x02\x02\x02\u07E5\u07DD\x03\x02\x02\x02\u07E5\u07E4\x03\x02" +
		"\x02\x02\u07E6\u0173\x03\x02\x02\x02\u07E7\u07EB\x05\u0176\xBC\x02\u07E8" +
		"\u07EA\x05\u0176\xBC\x02\u07E9\u07E8\x03\x02\x02\x02\u07EA\u07ED\x03\x02" +
		"\x02\x02\u07EB\u07E9\x03\x02\x02\x02\u07EB\u07EC\x03\x02\x02\x02\u07EC" +
		"\u0175\x03\x02\x02\x02\u07ED\u07EB\x03\x02\x02\x02\u07EE\u07EF\x07\x1A" +
		"\x02\x02\u07EF\u07F0\x07N\x02\x02\u07F0\u07F1\x05\u0178\xBD\x02\u07F1" +
		"\u07F2\x07O\x02\x02\u07F2\u07F3\x05\u011E\x90\x02\u07F3\u0177\x03\x02" +
		"\x02\x02\u07F4\u07F6\x05\xAEX\x02\u07F5\u07F4\x03\x02\x02\x02\u07F6\u07F9" +
		"\x03\x02\x02\x02\u07F7\u07F5\x03\x02\x02\x02\u07F7\u07F8\x03\x02\x02\x02" +
		"\u07F8\u07FA\x03\x02\x02\x02\u07F9\u07F7\x03\x02\x02\x02\u07FA\u07FB\x05" +
		"\u017A\xBE\x02\u07FB\u07FC\x05\x86D\x02\u07FC\u0179\x03\x02\x02\x02\u07FD" +
		"\u0802\x05\x94K\x02\u07FE\u07FF\x07o\x02\x02\u07FF\u0801\x05 \x11\x02" +
		"\u0800\u07FE\x03\x02\x02\x02\u0801\u0804\x03\x02\x02\x02\u0802\u0800\x03" +
		"\x02\x02\x02\u0802\u0803\x03\x02\x02\x02\u0803\u017B\x03\x02\x02\x02\u0804" +
		"\u0802\x03\x02\x02\x02\u0805\u0806\x07&\x02\x02\u0806\u0807\x05\u011E" +
		"\x90\x02\u0807\u017D\x03\x02\x02\x02\u0808\u0809\x07B\x02\x02\u0809\u080A" +
		"\x05\u0180\xC1\x02\u080A\u080C\x05\u011E\x90\x02\u080B\u080D\x05\u0174" +
		"\xBB\x02\u080C\u080B\x03\x02\x02\x02\u080C\u080D\x03\x02\x02\x02\u080D" +
		"\u080F\x03\x02\x02\x02\u080E\u0810\x05\u017C\xBF\x02\u080F\u080E\x03\x02" +
		"\x02\x02\u080F\u0810\x03\x02\x02\x02\u0810\u017F\x03\x02\x02\x02\u0811" +
		"\u0812\x07N\x02\x02\u0812\u0814\x05\u0182\xC2\x02\u0813\u0815\x07T\x02" +
		"\x02\u0814\u0813\x03\x02\x02\x02\u0814\u0815\x03\x02\x02\x02\u0815\u0816" +
		"\x03\x02\x02\x02\u0816\u0817\x07O\x02\x02\u0817\u0181\x03\x02\x02\x02" +
		"\u0818\u081D\x05\u0184\xC3\x02\u0819\u081A\x07T\x02\x02\u081A\u081C\x05" +
		"\u0184\xC3\x02\u081B\u0819\x03\x02\x02\x02\u081C\u081F\x03\x02\x02\x02" +
		"\u081D\u081B\x03\x02\x02\x02\u081D\u081E\x03\x02\x02\x02\u081E\u0183\x03" +
		"\x02\x02\x02\u081F\u081D\x03\x02\x02\x02\u0820\u0823\x05\u0126\x94\x02" +
		"\u0821\u0823\x05\u0186\xC4\x02\u0822\u0820\x03\x02\x02\x02\u0822\u0821" +
		"\x03\x02\x02\x02\u0823\u0185\x03\x02\x02\x02\u0824\u0827\x05D#\x02\u0825" +
		"\u0827\x05\u01AC\xD7\x02\u0826\u0824\x03\x02\x02\x02\u0826\u0825\x03\x02" +
		"\x02\x02\u0827\u0187\x03\x02\x02\x02\u0828\u0829\x07\x13\x02\x02\u0829" +
		"\u082A\x05\u018E\xC8\x02\u082A\u082B\x07T\x02\x02\u082B\u0189\x03\x02" +
		"\x02\x02\u082C\u082D\x05\u018C\xC7\x02\u082D\u018B\x03\x02\x02\x02\u082E" +
		"\u082F\x05\u0126\x94\x02\u082F\u018D\x03\x02\x02\x02\u0830\u0833\x05\u01E4" +
		"\xF3\x02\u0831\u0833\x05\u01DC\xEF\x02\u0832\u0830\x03\x02\x02\x02\u0832" +
		"\u0831\x03\x02\x02\x02\u0833\u018F\x03";
	private static readonly _serializedATNSegment4: string =
		"\x02\x02\x02\u0834\u0837\x05\u0192\xCA\x02\u0835\u0837\x05\u01A0\xD1\x02" +
		"\u0836\u0834\x03\x02\x02\x02\u0836\u0835\x03\x02\x02\x02\u0837\u0191\x03" +
		"\x02\x02\x02\u0838\u083A\x05\x10\t\x02\u0839\u083B\x05\u0194\xCB\x02\u083A" +
		"\u0839\x03\x02\x02\x02\u083A\u083B\x03\x02\x02\x02\u083B\u0912\x03\x02" +
		"\x02\x02\u083C\u083E\x05\u0196\xCC\x02\u083D\u083F\x05\u0194\xCB\x02\u083E" +
		"\u083D\x03\x02\x02\x02\u083E\u083F\x03\x02\x02\x02\u083F\u0912\x03\x02" +
		"\x02\x02\u0840\u0842\x07>\x02\x02\u0841\u0843\x05\u0194\xCB\x02\u0842" +
		"\u0841\x03\x02\x02\x02\u0842\u0843\x03\x02\x02\x02\u0843\u0912\x03\x02" +
		"\x02\x02\u0844\u0845\x05@!\x02\u0845\u0846\x07V\x02\x02\u0846\u0848\x07" +
		">\x02\x02\u0847\u0849\x05\u0194\xCB\x02\u0848\u0847\x03\x02\x02\x02\u0848" +
		"\u0849\x03\x02\x02\x02\u0849\u0912\x03\x02\x02\x02\u084A\u084B\x07N\x02" +
		"\x02\u084B\u084C\x05\u018E\xC8\x02\u084C\u084E\x07O\x02\x02\u084D\u084F" +
		"\x05\u0194\xCB\x02\u084E\u084D\x03\x02\x02\x02\u084E\u084F\x03\x02\x02" +
		"\x02\u084F\u0912\x03\x02\x02\x02\u0850\u0852\x05\u019A\xCE\x02\u0851\u0853" +
		"\x05\u0194\xCB\x02\u0852\u0851\x03\x02\x02\x02\u0852\u0853\x03\x02\x02" +
		"\x02\u0853\u0912\x03\x02\x02\x02\u0854\u0855\x05D#\x02\u0855\u0856\x07" +
		"V\x02\x02\u0856\u0858\x05\u019A\xCE\x02\u0857\u0859\x05\u0194\xCB\x02" +
		"\u0858\u0857\x03\x02\x02\x02\u0858\u0859\x03\x02\x02\x02\u0859\u0912\x03" +
		"\x02\x02\x02\u085A\u085B\x05\u01A0\xD1\x02\u085B\u085C\x07V\x02\x02\u085C" +
		"\u085E\x05\u019A\xCE\x02\u085D\u085F\x05\u0194\xCB\x02\u085E\u085D\x03" +
		"\x02\x02\x02\u085E\u085F\x03\x02\x02\x02\u085F\u0912\x03\x02\x02\x02\u0860" +
		"\u0861\x05\u01A0\xD1\x02\u0861\u0862\x07V\x02\x02\u0862\u0864\x05\x04" +
		"\x03\x02\u0863\u0865\x05\u0194\xCB\x02\u0864\u0863\x03\x02\x02\x02\u0864" +
		"\u0865\x03\x02\x02\x02\u0865\u0912\x03\x02\x02\x02\u0866\u0867\x07;\x02" +
		"\x02\u0867\u0868\x07V\x02\x02\u0868\u086A\x05\x04\x03\x02\u0869\u086B" +
		"\x05\u0194\xCB\x02\u086A\u0869\x03\x02\x02\x02\u086A\u086B\x03\x02\x02" +
		"\x02\u086B\u0912\x03\x02\x02\x02\u086C\u086D\x05@!\x02\u086D\u086E\x07" +
		"V\x02\x02\u086E\u086F\x07;\x02\x02\u086F\u0870\x07V\x02\x02\u0870\u0872" +
		"\x05\x04\x03\x02\u0871\u0873\x05\u0194\xCB\x02\u0872\u0871\x03\x02\x02" +
		"\x02\u0872\u0873\x03\x02\x02\x02\u0873\u0912\x03\x02\x02\x02\u0874\u0875" +
		"\x05D#\x02\u0875\u0876\x07R\x02\x02\u0876\u0877\x05\u018E\xC8\x02\u0877" +
		"\u0879\x07S\x02\x02\u0878\u087A\x05\u0194\xCB\x02\u0879\u0878\x03\x02" +
		"\x02\x02\u0879\u087A\x03\x02\x02\x02\u087A\u0912\x03\x02\x02\x02\u087B" +
		"\u087C\x05\u01A4\xD3\x02\u087C\u087D\x07R\x02\x02\u087D\u087E\x05\u018E" +
		"\xC8\x02\u087E\u0880\x07S\x02\x02\u087F\u0881\x05\u0194\xCB\x02\u0880" +
		"\u087F\x03\x02\x02\x02\u0880\u0881\x03\x02\x02\x02\u0881\u0912\x03\x02" +
		"\x02\x02\u0882\u0883\x05F$\x02\u0883\u0885\x07N\x02\x02\u0884\u0886\x05" +
		"\u01B0\xD9\x02\u0885\u0884\x03\x02\x02\x02\u0885\u0886\x03\x02\x02\x02" +
		"\u0886\u0887\x03\x02\x02\x02\u0887\u0889\x07O\x02\x02\u0888\u088A\x05" +
		"\u0194\xCB\x02\u0889\u0888\x03\x02\x02\x02\u0889\u088A\x03\x02\x02\x02" +
		"\u088A\u0912\x03\x02\x02\x02\u088B\u088C\x05@!\x02\u088C\u088E\x07V\x02" +
		"\x02\u088D\u088F\x052\x1A\x02\u088E\u088D\x03\x02\x02\x02\u088E\u088F" +
		"\x03\x02\x02\x02\u088F\u0890\x03\x02\x02\x02\u0890\u0891\x05\x04\x03\x02" +
		"\u0891\u0893\x07N\x02\x02\u0892\u0894\x05\u01B0\xD9\x02\u0893\u0892\x03" +
		"\x02\x02\x02\u0893\u0894\x03\x02\x02\x02\u0894\u0895\x03\x02\x02\x02\u0895" +
		"\u0897\x07O\x02\x02\u0896\u0898\x05\u0194\xCB\x02\u0897\u0896\x03\x02" +
		"\x02\x02\u0897\u0898\x03\x02\x02\x02\u0898\u0912\x03\x02\x02\x02\u0899" +
		"\u089A\x05D#\x02\u089A\u089C\x07V\x02\x02\u089B\u089D\x052\x1A\x02\u089C" +
		"\u089B\x03\x02\x02\x02\u089C\u089D\x03\x02\x02\x02\u089D\u089E\x03\x02" +
		"\x02\x02\u089E\u089F\x05\x04\x03\x02\u089F\u08A1\x07N\x02\x02\u08A0\u08A2" +
		"\x05\u01B0\xD9\x02\u08A1\u08A0\x03\x02\x02\x02\u08A1\u08A2\x03\x02\x02" +
		"\x02\u08A2\u08A3\x03\x02\x02\x02\u08A3\u08A5\x07O\x02\x02\u08A4\u08A6" +
		"\x05\u0194\xCB\x02\u08A5\u08A4\x03\x02\x02\x02\u08A5\u08A6\x03\x02\x02" +
		"\x02\u08A6\u0912\x03\x02\x02\x02\u08A7\u08A8\x05\u01A0\xD1\x02\u08A8\u08AA" +
		"\x07V\x02\x02\u08A9\u08AB\x052\x1A\x02\u08AA\u08A9\x03\x02\x02\x02\u08AA" +
		"\u08AB\x03\x02\x02\x02\u08AB\u08AC\x03\x02\x02\x02\u08AC\u08AD\x05\x04" +
		"\x03\x02\u08AD\u08AF\x07N\x02\x02\u08AE\u08B0\x05\u01B0\xD9\x02\u08AF" +
		"\u08AE\x03\x02\x02\x02\u08AF\u08B0\x03\x02\x02\x02\u08B0\u08B1\x03\x02" +
		"\x02\x02\u08B1\u08B3\x07O\x02\x02\u08B2\u08B4\x05\u0194\xCB\x02\u08B3" +
		"\u08B2\x03\x02\x02\x02\u08B3\u08B4\x03\x02\x02\x02\u08B4\u0912\x03\x02" +
		"\x02\x02\u08B5\u08B6\x07;\x02\x02\u08B6\u08B8\x07V\x02\x02\u08B7\u08B9" +
		"\x052\x1A\x02\u08B8\u08B7\x03\x02\x02\x02\u08B8\u08B9\x03\x02\x02\x02" +
		"\u08B9\u08BA\x03\x02\x02\x02\u08BA\u08BB\x05\x04\x03\x02\u08BB\u08BD\x07" +
		"N\x02\x02\u08BC\u08BE\x05\u01B0\xD9\x02\u08BD\u08BC\x03\x02\x02\x02\u08BD" +
		"\u08BE\x03\x02\x02\x02\u08BE\u08BF\x03\x02\x02\x02\u08BF\u08C1\x07O\x02" +
		"\x02\u08C0\u08C2\x05\u0194\xCB\x02\u08C1\u08C0\x03\x02\x02\x02\u08C1\u08C2" +
		"\x03\x02\x02\x02\u08C2\u0912\x03\x02\x02\x02\u08C3\u08C4\x05@!\x02\u08C4" +
		"\u08C5\x07V\x02\x02\u08C5\u08C6\x07;\x02\x02\u08C6\u08C8\x07V\x02\x02" +
		"\u08C7\u08C9\x052\x1A\x02\u08C8\u08C7\x03\x02\x02\x02\u08C8\u08C9\x03" +
		"\x02\x02\x02\u08C9\u08CA\x03\x02\x02\x02\u08CA\u08CB\x05\x04\x03\x02\u08CB" +
		"\u08CD\x07N\x02\x02\u08CC\u08CE\x05\u01B0\xD9\x02\u08CD\u08CC\x03\x02" +
		"\x02\x02\u08CD\u08CE\x03\x02\x02\x02\u08CE\u08CF\x03\x02\x02\x02\u08CF" +
		"\u08D1\x07O\x02\x02\u08D0\u08D2\x05\u0194\xCB\x02\u08D1\u08D0\x03\x02" +
		"\x02\x02\u08D1\u08D2\x03\x02\x02\x02\u08D2\u0912\x03\x02\x02\x02\u08D3" +
		"\u08D4\x05D#\x02\u08D4\u08D6\x07Y\x02\x02\u08D5\u08D7\x052\x1A\x02\u08D6" +
		"\u08D5\x03\x02\x02\x02\u08D6\u08D7\x03\x02\x02\x02\u08D7\u08D8\x03\x02" +
		"\x02\x02\u08D8\u08DA\x05\x04\x03\x02\u08D9\u08DB\x05\u0194\xCB\x02\u08DA" +
		"\u08D9\x03\x02\x02\x02\u08DA\u08DB\x03\x02\x02\x02\u08DB\u0912\x03\x02" +
		"\x02\x02\u08DC\u08DD\x05\u01A0\xD1\x02\u08DD\u08DF\x07Y\x02\x02\u08DE" +
		"\u08E0\x052\x1A\x02\u08DF\u08DE\x03\x02\x02\x02\u08DF\u08E0\x03\x02\x02" +
		"\x02\u08E0\u08E1\x03\x02\x02\x02\u08E1\u08E3\x05\x04\x03\x02\u08E2\u08E4" +
		"\x05\u0194\xCB\x02\u08E3\u08E2\x03\x02\x02\x02\u08E3\u08E4\x03\x02\x02" +
		"\x02\u08E4\u0912\x03\x02\x02\x02\u08E5\u08E6\x05\x1A\x0E\x02\u08E6\u08E8" +
		"\x07Y\x02\x02\u08E7\u08E9\x052\x1A\x02\u08E8\u08E7\x03\x02\x02\x02\u08E8" +
		"\u08E9\x03\x02\x02\x02\u08E9\u08EA\x03\x02\x02\x02\u08EA\u08EC\x05\x04" +
		"\x03\x02\u08EB\u08ED\x05\u0194\xCB\x02\u08EC\u08EB\x03\x02\x02\x02\u08EC" +
		"\u08ED\x03\x02\x02\x02\u08ED\u0912\x03\x02\x02\x02\u08EE\u08EF\x07;\x02" +
		"\x02\u08EF\u08F1\x07Y\x02\x02\u08F0\u08F2\x052\x1A\x02\u08F1\u08F0\x03" +
		"\x02\x02\x02\u08F1\u08F2\x03\x02\x02\x02\u08F2\u08F3\x03\x02\x02\x02\u08F3" +
		"\u08F5\x05\x04\x03\x02\u08F4\u08F6\x05\u0194\xCB\x02\u08F5\u08F4\x03\x02" +
		"\x02\x02\u08F5\u08F6\x03\x02\x02\x02\u08F6\u0912\x03\x02\x02\x02\u08F7" +
		"\u08F8\x05@!\x02\u08F8\u08F9\x07V\x02\x02\u08F9\u08FA\x07;\x02\x02\u08FA" +
		"\u08FC\x07Y\x02\x02\u08FB\u08FD\x052\x1A\x02\u08FC\u08FB\x03\x02\x02\x02" +
		"\u08FC\u08FD\x03\x02\x02\x02\u08FD\u08FE\x03\x02\x02\x02\u08FE\u0900\x05" +
		"\x04\x03\x02\u08FF\u0901\x05\u0194\xCB\x02\u0900\u08FF\x03\x02\x02\x02" +
		"\u0900\u0901\x03\x02\x02\x02\u0901\u0912\x03\x02\x02\x02\u0902\u0903\x05" +
		" \x11\x02\u0903\u0905\x07Y\x02\x02\u0904\u0906\x052\x1A\x02\u0905\u0904" +
		"\x03\x02\x02\x02\u0905\u0906\x03\x02\x02\x02\u0906\u0907\x03\x02\x02\x02" +
		"\u0907\u0909\x072\x02\x02\u0908\u090A\x05\u0194\xCB\x02\u0909\u0908\x03" +
		"\x02\x02\x02\u0909\u090A\x03\x02\x02\x02\u090A\u0912\x03\x02\x02\x02\u090B" +
		"\u090C\x05&\x14\x02\u090C\u090D\x07Y\x02\x02\u090D\u090F\x072\x02\x02" +
		"\u090E\u0910\x05\u0194\xCB\x02\u090F\u090E\x03\x02\x02\x02\u090F\u0910" +
		"\x03\x02\x02\x02\u0910\u0912\x03\x02\x02\x02\u0911\u0838\x03\x02\x02\x02" +
		"\u0911\u083C\x03\x02\x02\x02\u0911\u0840\x03\x02\x02\x02\u0911\u0844\x03" +
		"\x02\x02\x02\u0911\u084A\x03\x02\x02\x02\u0911\u0850\x03\x02\x02\x02\u0911" +
		"\u0854\x03\x02\x02\x02\u0911\u085A\x03\x02\x02\x02\u0911\u0860\x03\x02" +
		"\x02\x02\u0911\u0866\x03\x02\x02\x02\u0911\u086C\x03\x02\x02\x02\u0911" +
		"\u0874\x03\x02\x02\x02\u0911\u087B\x03\x02\x02\x02\u0911\u0882\x03\x02" +
		"\x02\x02\u0911\u088B\x03\x02\x02\x02\u0911\u0899\x03\x02\x02\x02\u0911" +
		"\u08A7\x03\x02\x02\x02\u0911\u08B5\x03\x02\x02\x02\u0911\u08C3\x03\x02" +
		"\x02\x02\u0911\u08D3\x03\x02\x02\x02\u0911\u08DC\x03\x02\x02\x02\u0911" +
		"\u08E5\x03\x02\x02\x02\u0911\u08EE\x03\x02\x02\x02\u0911\u08F7\x03\x02" +
		"\x02\x02\u0911\u0902\x03\x02\x02\x02\u0911\u090B\x03\x02\x02\x02\u0912" +
		"\u0193\x03\x02\x02\x02\u0913\u0914\x07V\x02\x02\u0914\u0916\x05\u019A" +
		"\xCE\x02\u0915\u0917\x05\u0194\xCB\x02\u0916\u0915\x03\x02\x02\x02\u0916" +
		"\u0917\x03\x02\x02\x02\u0917\u0939\x03\x02\x02\x02\u0918\u0919\x07V\x02" +
		"\x02\u0919\u091B\x05\x04\x03\x02\u091A\u091C\x05\u0194\xCB\x02\u091B\u091A" +
		"\x03\x02\x02\x02\u091B\u091C\x03\x02\x02\x02\u091C\u0939\x03\x02\x02\x02" +
		"\u091D\u091E\x07R\x02\x02\u091E\u091F\x05\u018E\xC8\x02\u091F\u0921\x07" +
		"S\x02\x02\u0920\u0922\x05\u0194\xCB\x02\u0921\u0920\x03\x02\x02\x02\u0921" +
		"\u0922\x03\x02\x02\x02\u0922\u0939\x03\x02\x02\x02\u0923\u0925\x07V\x02" +
		"\x02\u0924\u0926\x052\x1A\x02\u0925\u0924\x03\x02\x02\x02\u0925\u0926" +
		"\x03\x02\x02\x02\u0926\u0927\x03\x02\x02\x02\u0927\u0928\x05\x04\x03\x02" +
		"\u0928\u092A\x07N\x02\x02\u0929\u092B\x05\u01B0\xD9\x02\u092A\u0929\x03" +
		"\x02\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B\u092C\x03\x02\x02\x02\u092C" +
		"\u092E\x07O\x02\x02\u092D\u092F\x05\u0194\xCB\x02\u092E\u092D\x03\x02" +
		"\x02\x02\u092E\u092F\x03\x02\x02\x02\u092F\u0939\x03\x02\x02\x02\u0930" +
		"\u0932\x07Y\x02\x02\u0931\u0933\x052\x1A\x02\u0932\u0931\x03\x02\x02\x02" +
		"\u0932\u0933\x03\x02\x02\x02\u0933\u0934\x03\x02\x02\x02\u0934\u0936\x05" +
		"\x04\x03\x02\u0935\u0937\x05\u0194\xCB\x02\u0936\u0935\x03\x02\x02\x02" +
		"\u0936\u0937\x03\x02\x02\x02\u0937\u0939\x03\x02\x02\x02\u0938\u0913\x03" +
		"\x02\x02\x02\u0938\u0918\x03\x02\x02\x02\u0938\u091D\x03\x02\x02\x02\u0938" +
		"\u0923\x03\x02\x02\x02\u0938\u0930\x03\x02\x02\x02\u0939\u0195\x03\x02" +
		"\x02\x02\u093A\u093F\x05@!\x02\u093B\u093C\x07R\x02\x02\u093C\u093E\x07" +
		"S\x02\x02\u093D\u093B\x03\x02\x02\x02\u093E\u0941\x03\x02\x02\x02\u093F" +
		"\u093D\x03\x02\x02\x02\u093F\u0940\x03\x02\x02\x02\u0940\u0942\x03\x02" +
		"\x02\x02\u0941\u093F\x03\x02\x02\x02\u0942\u0943\x07V\x02\x02\u0943\u0944" +
		"\x07\x1C\x02\x02\u0944\u095E\x03\x02\x02\x02\u0945\u094A\x05\x14\v\x02" +
		"\u0946\u0947\x07R\x02\x02\u0947\u0949\x07S\x02\x02\u0948\u0946\x03\x02" +
		"\x02\x02\u0949\u094C\x03\x02\x02\x02\u094A\u0948\x03\x02\x02\x02\u094A" +
		"\u094B\x03\x02\x02\x02\u094B\u094D\x03\x02\x02\x02\u094C\u094A\x03\x02" +
		"\x02\x02\u094D\u094E\x07V\x02\x02\u094E\u094F\x07\x1C\x02\x02\u094F\u095E" +
		"\x03\x02\x02\x02\u0950\u0955\x07\x16\x02\x02\u0951\u0952\x07R\x02\x02" +
		"\u0952\u0954\x07S\x02\x02\u0953\u0951\x03\x02\x02\x02\u0954\u0957\x03" +
		"\x02\x02\x02\u0955\u0953\x03\x02\x02\x02\u0955\u0956\x03\x02\x02\x02\u0956" +
		"\u0958\x03\x02\x02\x02\u0957\u0955\x03\x02\x02\x02\u0958\u0959\x07V\x02" +
		"\x02\u0959\u095E\x07\x1C\x02\x02\u095A\u095B\x07C\x02\x02\u095B\u095C" +
		"\x07V\x02\x02\u095C\u095E\x07\x1C\x02\x02\u095D\u093A\x03\x02\x02\x02" +
		"\u095D\u0945\x03\x02\x02\x02\u095D\u0950\x03\x02\x02\x02\u095D\u095A\x03" +
		"\x02\x02\x02\u095E\u0197\x03\x02\x02\x02\u095F\u0969\x05\u019A\xCE\x02" +
		"\u0960\u0961\x05D#\x02\u0961\u0962\x07V\x02\x02\u0962\u0963\x05\u019A" +
		"\xCE\x02\u0963\u0969\x03\x02\x02\x02\u0964\u0965\x05\u0190\xC9\x02\u0965" +
		"\u0966\x07V\x02\x02\u0966\u0967\x05\u019A\xCE\x02\u0967\u0969\x03\x02" +
		"\x02\x02\u0968\u095F\x03\x02\x02\x02\u0968\u0960\x03\x02\x02\x02\u0968" +
		"\u0964\x03\x02\x02\x02\u0969\u0199\x03\x02\x02\x02\u096A\u096C\x072\x02" +
		"\x02\u096B\u096D\x052\x1A\x02\u096C\u096B\x03\x02\x02\x02\u096C\u096D" +
		"\x03\x02\x02\x02\u096D\u096E\x03\x02\x02\x02\u096E\u096F\x05\u019C\xCF" +
		"\x02\u096F\u0971\x07N\x02\x02\u0970\u0972\x05\u01B0\xD9\x02\u0971\u0970" +
		"\x03\x02\x02\x02\u0971\u0972\x03\x02\x02\x02\u0972\u0973\x03\x02\x02\x02" +
		"\u0973\u0975\x07O\x02\x02\u0974\u0976\x05x=\x02\u0975\u0974\x03\x02\x02" +
		"\x02\u0975\u0976\x03\x02\x02\x02\u0976\u019B\x03\x02\x02\x02\u0977\u0979" +
		"\x05\u0108\x85\x02\u0978\u0977\x03\x02\x02\x02\u0979\u097C\x03\x02\x02" +
		"\x02\u097A\u0978\x03\x02\x02\x02\u097A\u097B\x03\x02\x02\x02\u097B\u097D" +
		"\x03\x02\x02\x02\u097C\u097A\x03\x02\x02\x02\u097D\u0988\x05\x04\x03\x02" +
		"\u097E\u0982\x07V\x02\x02\u097F\u0981\x05\u0108\x85\x02\u0980\u097F\x03" +
		"\x02\x02\x02\u0981\u0984\x03\x02\x02\x02\u0982\u0980\x03\x02\x02\x02\u0982" +
		"\u0983\x03\x02\x02\x02\u0983\u0985\x03\x02\x02\x02\u0984\u0982\x03\x02" +
		"\x02\x02\u0985\u0987\x05\x04\x03\x02\u0986\u097E\x03\x02\x02\x02\u0987" +
		"\u098A\x03\x02\x02\x02\u0988\u0986\x03\x02\x02\x02\u0988\u0989\x03\x02" +
		"\x02\x02\u0989\u098C\x03\x02\x02\x02\u098A\u0988\x03\x02\x02\x02\u098B" +
		"\u098D\x05\u019E\xD0\x02\u098C\u098B\x03\x02\x02\x02\u098C\u098D\x03\x02" +
		"\x02\x02\u098D\u019D\x03\x02\x02\x02\u098E\u0991\x052\x1A\x02\u098F\u0991" +
		"\x07\x06\x02\x02\u0990\u098E\x03\x02\x02\x02\u0990\u098F\x03\x02\x02\x02" +
		"\u0991\u019F\x03\x02\x02\x02\u0992\u0995\x05\u01A2\xD2\x02\u0993\u0995" +
		"\x05\u01A4\xD3\x02\u0994\u0992\x03\x02\x02\x02\u0994\u0993\x03\x02\x02" +
		"\x02\u0995\u01A1\x03\x02\x02\x02\u0996\u0997\x072\x02\x02\u0997\u0998" +
		"\x05\x12\n\x02\u0998\u099A\x05\u01A6\xD4\x02\u0999\u099B\x05(\x15\x02" +
		"\u099A\u0999\x03\x02\x02\x02\u099A\u099B\x03\x02\x02\x02\u099B\u09A3\x03" +
		"\x02\x02\x02\u099C\u099D\x072\x02\x02\u099D\u099E\x05 \x11\x02\u099E\u09A0" +
		"\x05\u01A6\xD4\x02\u099F\u09A1\x05(\x15\x02\u09A0\u099F\x03\x02\x02\x02" +
		"\u09A0\u09A1\x03\x02\x02\x02\u09A1\u09A3\x03\x02\x02\x02\u09A2\u0996\x03" +
		"\x02\x02\x02\u09A2\u099C\x03\x02\x02\x02\u09A3\u01A3\x03\x02\x02\x02\u09A4" +
		"\u09A5\x072\x02\x02\u09A5\u09A6\x05\x12\n\x02\u09A6\u09A7\x05(\x15\x02" +
		"\u09A7\u09A8\x05\u011A\x8E\x02\u09A8\u09AF\x03\x02\x02\x02\u09A9\u09AA" +
		"\x072\x02\x02\u09AA\u09AB\x05\x1E\x10\x02\u09AB\u09AC\x05(\x15\x02\u09AC" +
		"\u09AD\x05\u011A\x8E\x02\u09AD\u09AF\x03\x02\x02\x02\u09AE\u09A4\x03\x02" +
		"\x02\x02\u09AE\u09A9\x03\x02\x02\x02\u09AF\u01A5\x03\x02\x02\x02\u09B0" +
		"\u09B4\x05\u01A8\xD5\x02\u09B1\u09B3\x05\u01A8\xD5\x02\u09B2\u09B1\x03" +
		"\x02\x02\x02\u09B3\u09B6\x03\x02\x02\x02\u09B4\u09B2\x03\x02\x02\x02\u09B4" +
		"\u09B5\x03\x02\x02\x02\u09B5\u01A7\x03\x02\x02\x02\u09B6\u09B4\x03\x02" +
		"\x02\x02\u09B7\u09B9\x05\u0108\x85\x02\u09B8\u09B7\x03\x02\x02\x02\u09B9" +
		"\u09BC\x03\x02\x02\x02\u09BA\u09B8\x03\x02\x02\x02\u09BA\u09BB\x03\x02" +
		"\x02\x02\u09BB\u09BD\x03\x02\x02\x02\u09BC\u09BA\x03\x02\x02\x02\u09BD" +
		"\u09BE\x07R\x02\x02\u09BE\u09BF\x05\u018E\xC8\x02\u09BF\u09C0\x07S\x02" +
		"\x02\u09C0\u01A9\x03\x02\x02\x02\u09C1\u09C2\x05D#\x02\u09C2\u09C3\x07" +
		"R\x02\x02\u09C3\u09C4\x05\u018E\xC8\x02\u09C4\u09C5\x07S\x02\x02\u09C5" +
		"\u09D1\x03\x02\x02\x02\u09C6\u09C7\x05\u0192\xCA\x02\u09C7\u09C8\x07R" +
		"\x02\x02\u09C8\u09C9\x05\u018E\xC8\x02\u09C9\u09CA\x07S\x02\x02\u09CA" +
		"\u09D1\x03\x02\x02\x02\u09CB\u09CC\x05\u01A4\xD3\x02\u09CC\u09CD\x07R" +
		"\x02\x02\u09CD\u09CE\x05\u018E\xC8\x02\u09CE\u09CF\x07S\x02\x02\u09CF" +
		"\u09D1\x03\x02\x02\x02\u09D0\u09C1\x03\x02\x02\x02\u09D0\u09C6\x03\x02" +
		"\x02\x02\u09D0\u09CB\x03\x02\x02\x02\u09D1\u01AB\x03\x02\x02\x02\u09D2" +
		"\u09D3\x05\u0190\xC9\x02\u09D3\u09D4\x07V\x02\x02\u09D4\u09D5\x05\x04" +
		"\x03\x02\u09D5\u09E0\x03\x02\x02\x02\u09D6\u09D7\x07;\x02\x02\u09D7\u09D8" +
		"\x07V\x02\x02\u09D8\u09E0\x05\x04\x03\x02\u09D9\u09DA\x05@!\x02\u09DA" +
		"\u09DB\x07V\x02\x02\u09DB\u09DC\x07;\x02\x02\u09DC\u09DD\x07V\x02\x02" +
		"\u09DD\u09DE\x05\x04\x03\x02\u09DE\u09E0\x03\x02\x02\x02\u09DF\u09D2\x03" +
		"\x02\x02\x02\u09DF\u09D6\x03\x02\x02\x02\u09DF\u09D9\x03\x02\x02\x02\u09E0" +
		"\u01AD\x03\x02\x02\x02\u09E1\u09E2\x05F$\x02\u09E2\u09E4\x07N\x02\x02" +
		"\u09E3\u09E5\x05\u01B0\xD9\x02\u09E4\u09E3\x03\x02\x02\x02\u09E4\u09E5" +
		"\x03\x02\x02\x02\u09E5\u09E6\x03\x02\x02\x02\u09E6\u09E7\x07O\x02\x02" +
		"\u09E7\u0A27\x03\x02\x02\x02\u09E8\u09E9\x05@!\x02\u09E9\u09EB\x07V\x02" +
		"\x02\u09EA\u09EC\x052\x1A\x02\u09EB\u09EA\x03\x02\x02\x02\u09EB\u09EC" +
		"\x03\x02\x02\x02\u09EC\u09ED\x03\x02\x02\x02\u09ED\u09EE\x05\x04\x03\x02" +
		"\u09EE\u09F0\x07N\x02\x02\u09EF\u09F1\x05\u01B0\xD9\x02\u09F0\u09EF\x03" +
		"\x02\x02\x02\u09F0\u09F1\x03\x02\x02\x02\u09F1\u09F2\x03\x02\x02\x02\u09F2" +
		"\u09F3\x07O\x02\x02\u09F3\u0A27\x03\x02\x02\x02\u09F4\u09F5\x05D#\x02" +
		"\u09F5\u09F7\x07V\x02\x02\u09F6\u09F8\x052\x1A\x02\u09F7\u09F6\x03\x02" +
		"\x02\x02\u09F7\u09F8\x03\x02\x02\x02\u09F8\u09F9\x03\x02\x02\x02\u09F9" +
		"\u09FA\x05\x04\x03\x02\u09FA\u09FC\x07N\x02\x02\u09FB\u09FD\x05\u01B0" +
		"\xD9\x02\u09FC\u09FB\x03\x02\x02\x02\u09FC\u09FD\x03\x02\x02\x02\u09FD" +
		"\u09FE\x03\x02\x02\x02\u09FE\u09FF\x07O\x02\x02\u09FF\u0A27\x03\x02\x02" +
		"\x02\u0A00\u0A01\x05\u0190\xC9\x02\u0A01\u0A03\x07V\x02\x02\u0A02\u0A04" +
		"\x052\x1A\x02\u0A03\u0A02\x03\x02\x02\x02\u0A03\u0A04\x03\x02\x02\x02" +
		"\u0A04\u0A05\x03\x02\x02\x02\u0A05\u0A06\x05\x04\x03\x02\u0A06\u0A08\x07" +
		"N\x02\x02\u0A07\u0A09\x05\u01B0\xD9\x02\u0A08\u0A07\x03\x02\x02\x02\u0A08" +
		"\u0A09\x03\x02\x02\x02\u0A09\u0A0A\x03\x02\x02\x02\u0A0A\u0A0B\x07O\x02" +
		"\x02\u0A0B\u0A27\x03\x02\x02\x02\u0A0C\u0A0D\x07;\x02\x02\u0A0D\u0A0F" +
		"\x07V\x02\x02\u0A0E\u0A10\x052\x1A\x02\u0A0F\u0A0E\x03\x02\x02\x02\u0A0F" +
		"\u0A10\x03\x02\x02\x02\u0A10\u0A11\x03\x02\x02\x02\u0A11\u0A12\x05\x04" +
		"\x03\x02\u0A12\u0A14\x07N\x02\x02\u0A13\u0A15\x05\u01B0\xD9\x02\u0A14" +
		"\u0A13\x03\x02\x02\x02\u0A14\u0A15\x03\x02\x02\x02\u0A15\u0A16\x03\x02" +
		"\x02\x02\u0A16\u0A17\x07O\x02\x02\u0A17\u0A27\x03\x02\x02\x02\u0A18\u0A19" +
		"\x05@!\x02\u0A19\u0A1A\x07V\x02\x02\u0A1A\u0A1B\x07;\x02\x02\u0A1B\u0A1D" +
		"\x07V\x02\x02\u0A1C\u0A1E\x052\x1A\x02\u0A1D\u0A1C\x03\x02\x02\x02\u0A1D" +
		"\u0A1E\x03\x02\x02\x02\u0A1E\u0A1F\x03\x02\x02\x02\u0A1F\u0A20\x05\x04" +
		"\x03\x02\u0A20\u0A22\x07N\x02\x02\u0A21\u0A23\x05\u01B0\xD9\x02\u0A22" +
		"\u0A21\x03\x02\x02\x02\u0A22\u0A23\x03\x02\x02\x02\u0A23\u0A24\x03\x02" +
		"\x02\x02\u0A24\u0A25\x07O\x02\x02\u0A25\u0A27\x03\x02\x02\x02\u0A26\u09E1" +
		"\x03\x02\x02\x02\u0A26\u09E8\x03\x02\x02\x02\u0A26\u09F4\x03\x02\x02\x02" +
		"\u0A26\u0A00\x03\x02\x02\x02\u0A26\u0A0C\x03\x02\x02\x02\u0A26\u0A18\x03" +
		"\x02\x02\x02\u0A27\u01AF\x03\x02\x02\x02\u0A28\u0A2D\x05\u018E\xC8\x02" +
		"\u0A29\u0A2A\x07U\x02\x02\u0A2A\u0A2C\x05\u018E\xC8\x02\u0A2B\u0A29\x03" +
		"\x02\x02\x02\u0A2C\u0A2F\x03\x02\x02\x02\u0A2D\u0A2B\x03\x02\x02\x02\u0A2D" +
		"\u0A2E\x03\x02\x02\x02\u0A2E\u01B1\x03\x02\x02\x02\u0A2F\u0A2D\x03\x02" +
		"\x02\x02\u0A30\u0A31\x05D#\x02\u0A31\u0A33\x07Y\x02\x02\u0A32\u0A34\x05" +
		"2\x1A\x02\u0A33\u0A32\x03\x02\x02\x02\u0A33\u0A34\x03\x02\x02\x02\u0A34" +
		"\u0A35\x03\x02\x02\x02\u0A35\u0A36\x05\x04\x03\x02\u0A36\u0A60\x03\x02" +
		"\x02\x02\u0A37\u0A38\x05\u0190\xC9\x02\u0A38\u0A3A\x07Y\x02\x02\u0A39" +
		"\u0A3B\x052\x1A\x02\u0A3A\u0A39\x03\x02\x02\x02\u0A3A\u0A3B\x03\x02\x02" +
		"\x02\u0A3B\u0A3C\x03\x02\x02\x02\u0A3C\u0A3D\x05\x04\x03\x02\u0A3D\u0A60" +
		"\x03\x02\x02\x02\u0A3E\u0A3F\x05\x1A\x0E\x02\u0A3F\u0A41\x07Y\x02\x02" +
		"\u0A40\u0A42\x052\x1A\x02\u0A41\u0A40\x03\x02\x02\x02\u0A41\u0A42\x03" +
		"\x02\x02\x02\u0A42\u0A43\x03\x02\x02\x02\u0A43\u0A44\x05\x04\x03\x02\u0A44" +
		"\u0A60\x03\x02\x02\x02\u0A45\u0A46\x07;\x02\x02\u0A46\u0A48\x07Y\x02\x02" +
		"\u0A47\u0A49\x052\x1A\x02\u0A48\u0A47\x03\x02\x02\x02\u0A48\u0A49\x03" +
		"\x02\x02\x02\u0A49\u0A4A\x03\x02\x02\x02\u0A4A\u0A60\x05\x04\x03\x02\u0A4B" +
		"\u0A4C\x05@!\x02\u0A4C\u0A4D\x07V\x02\x02\u0A4D\u0A4E\x07;\x02\x02\u0A4E" +
		"\u0A50\x07Y\x02\x02\u0A4F\u0A51\x052\x1A\x02\u0A50\u0A4F\x03\x02\x02\x02" +
		"\u0A50\u0A51\x03\x02\x02\x02\u0A51\u0A52\x03\x02\x02\x02\u0A52\u0A53\x05" +
		"\x04\x03\x02\u0A53\u0A60\x03\x02\x02\x02\u0A54\u0A55\x05 \x11\x02\u0A55" +
		"\u0A57\x07Y\x02\x02\u0A56\u0A58\x052\x1A\x02\u0A57\u0A56\x03\x02\x02\x02" +
		"\u0A57\u0A58\x03\x02\x02\x02\u0A58\u0A59\x03\x02\x02\x02\u0A59\u0A5A\x07" +
		"2\x02\x02\u0A5A\u0A60\x03\x02\x02\x02\u0A5B\u0A5C\x05&\x14\x02\u0A5C\u0A5D" +
		"\x07Y\x02\x02\u0A5D\u0A5E\x072\x02\x02\u0A5E\u0A60\x03\x02\x02\x02\u0A5F" +
		"\u0A30\x03\x02\x02\x02\u0A5F\u0A37\x03\x02\x02\x02\u0A5F\u0A3E\x03\x02" +
		"\x02\x02\u0A5F\u0A45\x03\x02\x02\x02\u0A5F\u0A4B\x03\x02\x02\x02\u0A5F" +
		"\u0A54\x03\x02\x02\x02\u0A5F\u0A5B\x03\x02\x02\x02\u0A60\u01B3\x03\x02" +
		"\x02\x02\u0A61\u0A63\x05\u0190\xC9\x02\u0A62\u0A64\x05\u01B6\xDC\x02\u0A63" +
		"\u0A62\x03\x02\x02\x02\u0A63\u0A64\x03\x02\x02\x02\u0A64\u0A6A\x03\x02" +
		"\x02\x02\u0A65\u0A67\x05D#\x02\u0A66\u0A68\x05\u01B6\xDC\x02\u0A67\u0A66" +
		"\x03\x02\x02\x02\u0A67\u0A68\x03\x02\x02\x02\u0A68\u0A6A\x03\x02\x02\x02" +
		"\u0A69\u0A61\x03\x02\x02\x02\u0A69\u0A65\x03\x02\x02\x02\u0A6A\u01B5\x03" +
		"\x02\x02\x02\u0A6B\u0A6D\x07h\x02\x02\u0A6C\u0A6E\x05\u01B6\xDC\x02\u0A6D" +
		"\u0A6C\x03\x02\x02\x02\u0A6D\u0A6E\x03\x02\x02\x02\u0A6E\u0A74\x03\x02" +
		"\x02\x02\u0A6F\u0A71\x07i\x02\x02\u0A70\u0A72\x05\u01B6\xDC\x02\u0A71" +
		"\u0A70\x03\x02\x02\x02\u0A71\u0A72\x03\x02\x02\x02\u0A72\u0A74\x03\x02" +
		"\x02\x02\u0A73\u0A6B\x03\x02\x02\x02\u0A73\u0A6F\x03\x02\x02\x02\u0A74" +
		"\u01B7\x03\x02\x02\x02\u0A75\u0A76\x05\u01B4\xDB\x02\u0A76\u0A77\x07h" +
		"\x02\x02\u0A77\u01B9\x03\x02\x02\x02\u0A78\u0A79\x05\u01B4\xDB\x02\u0A79" +
		"\u0A7A\x07i\x02\x02\u0A7A\u01BB\x03\x02\x02\x02\u0A7B\u0A83\x05\u01BE" +
		"\xE0\x02\u0A7C\u0A83\x05\u01C0\xE1\x02\u0A7D\u0A7E\x07j\x02\x02\u0A7E" +
		"\u0A83\x05\u01BC\xDF\x02\u0A7F\u0A80\x07k\x02\x02\u0A80\u0A83\x05\u01BC" +
		"\xDF\x02\u0A81\u0A83\x05\u01C2\xE2\x02\u0A82\u0A7B\x03\x02\x02\x02\u0A82" +
		"\u0A7C\x03\x02\x02\x02\u0A82\u0A7D\x03\x02\x02\x02\u0A82\u0A7F\x03\x02" +
		"\x02\x02\u0A82\u0A81\x03\x02\x02\x02\u0A83\u01BD\x03\x02\x02\x02\u0A84" +
		"\u0A85\x07h\x02\x02\u0A85\u0A86\x05\u01BC\xDF\x02\u0A86\u01BF\x03\x02" +
		"\x02\x02\u0A87\u0A88\x07i\x02\x02\u0A88\u0A89\x05\u01BC\xDF\x02\u0A89" +
		"\u01C1\x03\x02\x02\x02\u0A8A\u0A92\x05\u01B4\xDB\x02\u0A8B\u0A8C\x07^" +
		"\x02\x02\u0A8C\u0A92\x05\u01BC\xDF\x02\u0A8D\u0A8E\x07]\x02\x02\u0A8E" +
		"\u0A92\x05\u01BC\xDF\x02\u0A8F\u0A92\x05\u01C4\xE3\x02\u0A90\u0A92\x05" +
		"\u01F0\xF9\x02\u0A91\u0A8A\x03\x02\x02\x02\u0A91\u0A8B\x03\x02\x02\x02" +
		"\u0A91\u0A8D\x03\x02\x02\x02\u0A91\u0A8F\x03\x02\x02\x02\u0A91\u0A90\x03" +
		"\x02\x02\x02\u0A92\u01C3\x03\x02\x02\x02\u0A93\u0A94\x07N\x02\x02\u0A94" +
		"\u0A95\x05\x12\n\x02\u0A95\u0A96\x07O\x02\x02\u0A96\u0A97\x05\u01BC\xDF" +
		"\x02\u0A97\u0AAF\x03\x02\x02\x02\u0A98\u0A99\x07N\x02\x02\u0A99\u0A9D" +
		"\x05\x1A\x0E\x02\u0A9A\u0A9C\x050\x19\x02\u0A9B\u0A9A\x03\x02\x02\x02" +
		"\u0A9C\u0A9F\x03\x02\x02\x02\u0A9D\u0A9B\x03\x02\x02\x02\u0A9D\u0A9E\x03" +
		"\x02\x02\x02\u0A9E\u0AA0\x03\x02\x02\x02\u0A9F\u0A9D\x03\x02\x02\x02\u0AA0" +
		"\u0AA1\x07O\x02\x02\u0AA1\u0AA2\x05\u01C2\xE2\x02\u0AA2\u0AAF\x03\x02" +
		"\x02\x02\u0AA3\u0AA4\x07N\x02\x02\u0AA4\u0AA8\x05\x1A\x0E\x02\u0AA5\u0AA7" +
		"\x050\x19\x02\u0AA6\u0AA5\x03\x02\x02\x02\u0AA7\u0AAA\x03\x02\x02\x02" +
		"\u0AA8\u0AA6\x03\x02\x02\x02\u0AA8\u0AA9\x03\x02\x02\x02\u0AA9\u0AAB\x03" +
		"\x02\x02\x02\u0AAA\u0AA8\x03\x02\x02\x02\u0AAB\u0AAC\x07O\x02\x02\u0AAC" +
		"\u0AAD\x05\u01E4\xF3\x02\u0AAD\u0AAF\x03\x02\x02\x02\u0AAE\u0A93\x03\x02" +
		"\x02\x02\u0AAE\u0A98\x03\x02\x02\x02\u0AAE\u0AA3\x03\x02\x02\x02\u0AAF" +
		"\u01C5\x03\x02\x02\x02\u0AB0\u0AB1\b\xE4\x01\x02\u0AB1\u0AB2\x05\u01BC" +
		"\xDF\x02\u0AB2\u0ABE\x03\x02\x02\x02\u0AB3\u0AB4\f\x05\x02\x02\u0AB4\u0AB5" +
		"\x07l\x02\x02\u0AB5\u0ABD\x05\u01BC\xDF\x02\u0AB6\u0AB7\f\x04\x02\x02" +
		"\u0AB7\u0AB8\x07m\x02\x02\u0AB8\u0ABD\x05\u01BC\xDF\x02\u0AB9\u0ABA\f" +
		"\x03\x02\x02\u0ABA\u0ABB\x07q\x02\x02\u0ABB\u0ABD\x05\u01BC\xDF\x02\u0ABC" +
		"\u0AB3\x03\x02\x02\x02\u0ABC\u0AB6\x03\x02\x02\x02\u0ABC\u0AB9\x03\x02" +
		"\x02\x02\u0ABD\u0AC0\x03\x02\x02\x02\u0ABE\u0ABC\x03\x02\x02\x02\u0ABE" +
		"\u0ABF\x03\x02\x02\x02\u0ABF\u01C7\x03\x02\x02\x02\u0AC0\u0ABE\x03\x02" +
		"\x02\x02\u0AC1\u0AC2\b\xE5\x01\x02\u0AC2\u0AC3\x05\u01C6\xE4\x02\u0AC3" +
		"\u0ACC\x03\x02\x02\x02\u0AC4\u0AC5\f\x04\x02\x02\u0AC5\u0AC6\x07j\x02" +
		"\x02\u0AC6\u0ACB\x05\u01C6\xE4\x02\u0AC7\u0AC8\f\x03\x02\x02\u0AC8\u0AC9" +
		"\x07k\x02\x02\u0AC9\u0ACB\x05\u01C6\xE4\x02\u0ACA\u0AC4\x03\x02\x02\x02" +
		"\u0ACA\u0AC7\x03\x02\x02\x02\u0ACB\u0ACE\x03\x02\x02\x02\u0ACC\u0ACA\x03" +
		"\x02\x02\x02\u0ACC\u0ACD\x03\x02\x02\x02\u0ACD\u01C9\x03\x02\x02\x02\u0ACE" +
		"\u0ACC\x03\x02\x02\x02\u0ACF\u0AD0\b\xE6\x01\x02\u0AD0\u0AD1\x05\u01C8" +
		"\xE5\x02\u0AD1\u0AE1\x03\x02\x02\x02\u0AD2\u0AD3\f\x05\x02\x02\u0AD3\u0AD4" +
		"\x07\\\x02\x02\u0AD4\u0AD5\x07\\\x02";
	private static readonly _serializedATNSegment5: string =
		"\x02\u0AD5\u0AE0\x05\u01C8\xE5\x02\u0AD6\u0AD7\f\x04\x02\x02\u0AD7\u0AD8" +
		"\x07[\x02\x02\u0AD8\u0AD9\x07[\x02\x02\u0AD9\u0AE0\x05\u01C8\xE5\x02\u0ADA" +
		"\u0ADB\f\x03\x02\x02\u0ADB\u0ADC\x07[\x02\x02\u0ADC\u0ADD\x07[\x02\x02" +
		"\u0ADD\u0ADE\x07[\x02\x02\u0ADE\u0AE0\x05\u01C8\xE5\x02\u0ADF\u0AD2\x03" +
		"\x02\x02\x02\u0ADF\u0AD6\x03\x02\x02\x02\u0ADF\u0ADA\x03\x02\x02\x02\u0AE0" +
		"\u0AE3\x03\x02\x02\x02\u0AE1\u0ADF\x03\x02\x02\x02\u0AE1\u0AE2\x03\x02" +
		"\x02\x02\u0AE2\u01CB\x03\x02\x02\x02\u0AE3\u0AE1\x03\x02\x02\x02\u0AE4" +
		"\u0AE5\b\xE7\x01\x02\u0AE5\u0AE6\x05\u01CA\xE6\x02\u0AE6\u0AFB\x03\x02" +
		"\x02\x02\u0AE7\u0AE8\f\x07\x02\x02\u0AE8\u0AE9\x07\\\x02\x02\u0AE9\u0AFA" +
		"\x05\u01CA\xE6\x02\u0AEA\u0AEB\f\x06\x02\x02\u0AEB\u0AEC\x07[\x02\x02" +
		"\u0AEC\u0AFA\x05\u01CA\xE6\x02\u0AED\u0AEE\f\x05\x02\x02\u0AEE\u0AEF\x07" +
		"c\x02\x02\u0AEF\u0AFA\x05\u01CA\xE6\x02\u0AF0\u0AF1\f\x04\x02\x02\u0AF1" +
		"\u0AF2\x07d\x02\x02\u0AF2\u0AFA\x05\u01CA\xE6\x02\u0AF3\u0AF4\f\x03\x02" +
		"\x02\u0AF4\u0AF7\x07-\x02\x02\u0AF5\u0AF8\x05\x1A\x0E\x02\u0AF6\u0AF8" +
		"\x05\u018A\xC6\x02\u0AF7\u0AF5\x03\x02\x02\x02\u0AF7\u0AF6\x03\x02\x02" +
		"\x02\u0AF8\u0AFA\x03\x02\x02\x02\u0AF9\u0AE7\x03\x02\x02\x02\u0AF9\u0AEA" +
		"\x03\x02\x02\x02\u0AF9\u0AED\x03\x02\x02\x02\u0AF9\u0AF0\x03\x02\x02\x02" +
		"\u0AF9\u0AF3\x03\x02\x02\x02\u0AFA\u0AFD\x03\x02\x02\x02\u0AFB\u0AF9\x03" +
		"\x02\x02\x02\u0AFB\u0AFC\x03\x02\x02\x02\u0AFC\u01CD\x03\x02\x02\x02\u0AFD" +
		"\u0AFB\x03\x02\x02\x02\u0AFE\u0AFF\b\xE8\x01\x02\u0AFF\u0B00\x05\u01CC" +
		"\xE7\x02\u0B00\u0B09\x03\x02\x02\x02\u0B01\u0B02\f\x04\x02\x02\u0B02\u0B03" +
		"\x07b\x02\x02\u0B03\u0B08\x05\u01CC\xE7\x02\u0B04\u0B05\f\x03\x02\x02" +
		"\u0B05\u0B06\x07e\x02\x02\u0B06\u0B08\x05\u01CC\xE7\x02\u0B07\u0B01\x03" +
		"\x02\x02\x02\u0B07\u0B04\x03\x02\x02\x02\u0B08\u0B0B\x03\x02\x02\x02\u0B09" +
		"\u0B07\x03\x02\x02\x02\u0B09\u0B0A\x03\x02\x02\x02\u0B0A\u01CF\x03\x02" +
		"\x02\x02\u0B0B\u0B09\x03\x02\x02\x02\u0B0C\u0B0D\b\xE9\x01\x02\u0B0D\u0B0E" +
		"\x05\u01CE\xE8\x02\u0B0E\u0B14\x03\x02\x02\x02\u0B0F\u0B10\f\x03\x02\x02" +
		"\u0B10\u0B11\x07n\x02\x02\u0B11\u0B13\x05\u01CE\xE8\x02\u0B12\u0B0F\x03" +
		"\x02\x02\x02\u0B13\u0B16\x03\x02\x02\x02\u0B14\u0B12\x03\x02\x02\x02\u0B14" +
		"\u0B15\x03\x02\x02\x02\u0B15\u01D1\x03\x02\x02\x02\u0B16\u0B14\x03\x02" +
		"\x02\x02\u0B17\u0B18\b\xEA\x01\x02\u0B18\u0B19\x05\u01D0\xE9\x02\u0B19" +
		"\u0B1F\x03\x02\x02\x02\u0B1A\u0B1B\f\x03\x02\x02\u0B1B\u0B1C\x07p\x02" +
		"\x02\u0B1C\u0B1E\x05\u01D0\xE9\x02\u0B1D\u0B1A\x03\x02\x02\x02\u0B1E\u0B21" +
		"\x03\x02\x02\x02\u0B1F\u0B1D\x03\x02\x02\x02\u0B1F\u0B20\x03\x02\x02\x02" +
		"\u0B20\u01D3\x03\x02\x02\x02\u0B21\u0B1F\x03\x02\x02\x02\u0B22\u0B23\b" +
		"\xEB\x01\x02\u0B23\u0B24\x05\u01D2\xEA\x02\u0B24\u0B2A\x03\x02\x02\x02" +
		"\u0B25\u0B26\f\x03\x02\x02\u0B26\u0B27\x07o\x02\x02\u0B27\u0B29\x05\u01D2" +
		"\xEA\x02\u0B28\u0B25\x03\x02\x02\x02\u0B29\u0B2C\x03\x02\x02\x02\u0B2A" +
		"\u0B28\x03\x02\x02\x02\u0B2A\u0B2B\x03\x02\x02\x02\u0B2B\u01D5\x03\x02" +
		"\x02\x02\u0B2C\u0B2A\x03\x02\x02\x02\u0B2D\u0B2E\b\xEC\x01\x02\u0B2E\u0B2F" +
		"\x05\u01D4\xEB\x02\u0B2F\u0B35\x03\x02\x02\x02\u0B30\u0B31\f\x03\x02\x02" +
		"\u0B31\u0B32\x07f\x02\x02\u0B32\u0B34\x05\u01D4\xEB\x02\u0B33\u0B30\x03" +
		"\x02\x02\x02\u0B34\u0B37\x03\x02\x02\x02\u0B35\u0B33\x03\x02\x02\x02\u0B35" +
		"\u0B36\x03\x02\x02\x02\u0B36\u01D7\x03\x02\x02\x02\u0B37\u0B35\x03\x02" +
		"\x02\x02\u0B38\u0B39\b\xED\x01\x02\u0B39\u0B3A\x05\u01D6\xEC\x02\u0B3A" +
		"\u0B40\x03\x02\x02\x02\u0B3B\u0B3C\f\x03\x02\x02\u0B3C\u0B3D\x07g\x02" +
		"\x02\u0B3D\u0B3F\x05\u01D6\xEC\x02\u0B3E\u0B3B\x03\x02\x02\x02\u0B3F\u0B42" +
		"\x03\x02\x02\x02\u0B40\u0B3E\x03\x02\x02\x02\u0B40\u0B41\x03\x02\x02\x02" +
		"\u0B41\u01D9\x03\x02\x02\x02\u0B42\u0B40\x03\x02\x02\x02\u0B43\u0B51\x05" +
		"\u01D8\xED\x02\u0B44\u0B45\x05\u01D8\xED\x02\u0B45\u0B46\x07_\x02\x02" +
		"\u0B46\u0B47\x05\u018E\xC8\x02\u0B47\u0B48\x07`\x02\x02\u0B48\u0B49\x05" +
		"\u01DA\xEE\x02\u0B49\u0B51\x03\x02\x02\x02\u0B4A\u0B4B\x05\u01D8\xED\x02" +
		"\u0B4B\u0B4C\x07_\x02\x02\u0B4C\u0B4D\x05\u018E\xC8\x02\u0B4D\u0B4E\x07" +
		"`\x02\x02\u0B4E\u0B4F\x05\u01E4\xF3\x02\u0B4F\u0B51\x03\x02\x02\x02\u0B50" +
		"\u0B43\x03\x02\x02\x02\u0B50\u0B44\x03\x02\x02\x02\u0B50\u0B4A\x03\x02" +
		"\x02\x02\u0B51\u01DB\x03\x02\x02\x02\u0B52\u0B55\x05\u01DA\xEE\x02\u0B53" +
		"\u0B55\x05\u01DE\xF0\x02\u0B54\u0B52\x03\x02\x02\x02\u0B54\u0B53\x03\x02" +
		"\x02\x02\u0B55\u01DD\x03\x02\x02\x02\u0B56\u0B57\x05\u01E0\xF1\x02\u0B57" +
		"\u0B58\x05\u01E2\xF2\x02\u0B58\u0B59\x05\u018E\xC8\x02\u0B59\u01DF\x03" +
		"\x02\x02\x02\u0B5A\u0B5E\x05D#\x02\u0B5B\u0B5E\x05\u01AC\xD7\x02\u0B5C" +
		"\u0B5E\x05\u01AA\xD6\x02\u0B5D\u0B5A\x03\x02\x02\x02\u0B5D\u0B5B\x03\x02" +
		"\x02\x02\u0B5D\u0B5C\x03\x02\x02\x02\u0B5E\u01E1\x03\x02\x02\x02\u0B5F" +
		"\u0B60\t\n\x02\x02\u0B60\u01E3\x03\x02\x02\x02\u0B61\u0B62\x05\u01E6\xF4" +
		"\x02\u0B62\u0B63\x07a\x02\x02\u0B63\u0B64\x05\u01EE\xF8\x02\u0B64\u01E5" +
		"\x03\x02\x02\x02\u0B65\u0B67\x07N\x02\x02\u0B66\u0B68\x05\u01E8\xF5\x02" +
		"\u0B67\u0B66\x03\x02\x02\x02\u0B67\u0B68\x03\x02\x02\x02\u0B68\u0B69\x03" +
		"\x02\x02\x02\u0B69\u0B6C\x07O\x02\x02\u0B6A\u0B6C\x05\x04\x03\x02\u0B6B" +
		"\u0B65\x03\x02\x02\x02\u0B6B\u0B6A\x03\x02\x02\x02\u0B6C\u01E7\x03\x02" +
		"\x02\x02\u0B6D\u0B72\x05\u01EA\xF6\x02\u0B6E\u0B6F\x07U\x02\x02\u0B6F" +
		"\u0B71\x05\u01EA\xF6\x02\u0B70\u0B6E\x03\x02\x02\x02\u0B71\u0B74\x03\x02" +
		"\x02\x02\u0B72\u0B70\x03\x02\x02\x02\u0B72\u0B73\x03\x02\x02\x02\u0B73" +
		"\u0B7E\x03\x02\x02\x02\u0B74\u0B72\x03\x02\x02\x02\u0B75\u0B7A\x05\x04" +
		"\x03\x02\u0B76\u0B77\x07U\x02\x02\u0B77\u0B79\x05\x04\x03\x02\u0B78\u0B76" +
		"\x03\x02\x02\x02\u0B79\u0B7C\x03\x02\x02\x02\u0B7A\u0B78\x03\x02\x02\x02" +
		"\u0B7A\u0B7B\x03\x02\x02\x02\u0B7B\u0B7E\x03\x02\x02\x02\u0B7C\u0B7A\x03" +
		"\x02\x02\x02\u0B7D\u0B6D\x03\x02\x02\x02\u0B7D\u0B75\x03\x02\x02\x02\u0B7E" +
		"\u01E9\x03\x02\x02\x02\u0B7F\u0B81\x05\xAEX\x02\u0B80\u0B7F\x03\x02\x02" +
		"\x02\u0B81\u0B84\x03\x02\x02\x02\u0B82\u0B80\x03\x02\x02\x02\u0B82\u0B83" +
		"\x03\x02\x02\x02\u0B83\u0B85\x03\x02\x02\x02\u0B84\u0B82\x03\x02\x02\x02" +
		"\u0B85\u0B86\x05\u01EC\xF7\x02\u0B86\u0B87\x05\x86D\x02\u0B87\u0B8A\x03" +
		"\x02\x02\x02\u0B88\u0B8A\x05\xACW\x02\u0B89\u0B82\x03\x02\x02\x02\u0B89" +
		"\u0B88\x03\x02\x02\x02\u0B8A\u01EB\x03\x02\x02\x02\u0B8B\u0B8E\x05\x8A" +
		"F\x02\u0B8C\u0B8E\x07\x11\x02\x02\u0B8D\u0B8B\x03\x02\x02\x02\u0B8D\u0B8C" +
		"\x03\x02\x02\x02\u0B8E\u01ED\x03\x02\x02\x02\u0B8F\u0B92\x05\u018E\xC8" +
		"\x02\u0B90\u0B92\x05\u011E\x90\x02\u0B91\u0B8F\x03\x02\x02\x02\u0B91\u0B90" +
		"\x03\x02\x02\x02\u0B92\u01EF\x03\x02\x02\x02\u0B93\u0B94\x07<\x02\x02" +
		"\u0B94\u0B95\x07N\x02\x02\u0B95\u0B96\x05\u018E\xC8\x02\u0B96\u0B97\x07" +
		"O\x02\x02\u0B97\u0B98\x05\u0146\xA4\x02\u0B98\u01F1\x03\x02\x02\x02\u0B99" +
		"\u0B9A\x05\u018E\xC8\x02\u0B9A\u01F3\x03\x02\x02\x02\u016D\u01F9\u01FD" +
		"\u0201\u020E\u0213\u0217\u0220\u0226\u022B\u022E\u0233\u0238\u023D\u0240" +
		"\u0245\u024A\u0251\u0256\u025D\u0262\u0264\u026B\u0279\u027E\u0286\u028D" +
		"\u0293\u0298\u02A2\u02A5\u02B3\u02B8\u02BD\u02C2\u02C8\u02CD\u02D2\u02D7" +
		"\u02DC\u02E1\u02EA\u02EE\u02F1\u02F6\u02FC\u0302\u030A\u0313\u031E\u033B" +
		"\u0340\u0344\u034C\u0353\u035C\u036A\u036D\u0379\u037C\u038C\u0391\u0398" +
		"\u039D\u03A3\u03A6\u03A9\u03AC\u03BA\u03C5\u03D3\u03DC\u03E3\u03EC\u03F3" +
		"\u03F8\u0407\u040E\u0414\u0418\u041C\u0420\u0424\u0429\u0430\u0433\u0437" +
		"\u043A\u0440\u0445\u0448\u044C\u0450\u0456\u045B\u045D\u0466\u046D\u047D" +
		"\u0483\u0486\u048B\u048F\u0496\u0499\u049D\u04A2\u04A9\u04B2\u04B8\u04BF" +
		"\u04C4\u04CB\u04D3\u04DD\u04E2\u04E6\u04F0\u04F5\u04FD\u0500\u0507\u050A" +
		"\u0512\u0515\u051A\u051F\u0525\u0529\u052E\u0533\u0538\u053E\u0544\u0547" +
		"\u054A\u0553\u0559\u055F\u0562\u0565\u056D\u0573\u0579\u057D\u0583\u058C" +
		"\u0592\u0599\u059E\u05A5\u05B1\u05B8\u05BD\u05C5\u05CA\u05D0\u05D3\u05D6" +
		"\u05E3\u05EE\u05F5\u05FF\u0604\u060F\u0614\u0621\u0626\u0632\u063C\u0641" +
		"\u0649\u064C\u0653\u065B\u0661\u066A\u0674\u0678\u067B\u0684\u0692\u0695" +
		"\u069E\u06A3\u06AB\u06B1\u06B5\u06BA\u06BF\u06C3\u06CE\u06D5\u06E4\u06FA" +
		"\u0716\u0725\u072E\u0736\u073A\u0743\u074C\u0757\u075B\u0775\u0779\u077E" +
		"\u0782\u0786\u078E\u0792\u0796\u079D\u07A6\u07BB\u07C1\u07C7\u07E0\u07E5" +
		"\u07EB\u07F7\u0802\u080C\u080F\u0814\u081D\u0822\u0826\u0832\u0836\u083A" +
		"\u083E\u0842\u0848\u084E\u0852\u0858\u085E\u0864\u086A\u0872\u0879\u0880" +
		"\u0885\u0889\u088E\u0893\u0897\u089C\u08A1\u08A5\u08AA\u08AF\u08B3\u08B8" +
		"\u08BD\u08C1\u08C8\u08CD\u08D1\u08D6\u08DA\u08DF\u08E3\u08E8\u08EC\u08F1" +
		"\u08F5\u08FC\u0900\u0905\u0909\u090F\u0911\u0916\u091B\u0921\u0925\u092A" +
		"\u092E\u0932\u0936\u0938\u093F\u094A\u0955\u095D\u0968\u096C\u0971\u0975" +
		"\u097A\u0982\u0988\u098C\u0990\u0994\u099A\u09A0\u09A2\u09AE\u09B4\u09BA" +
		"\u09D0\u09DF\u09E4\u09EB\u09F0\u09F7\u09FC\u0A03\u0A08\u0A0F\u0A14\u0A1D" +
		"\u0A22\u0A26\u0A2D\u0A33\u0A3A\u0A41\u0A48\u0A50\u0A57\u0A5F\u0A63\u0A67" +
		"\u0A69\u0A6D\u0A71\u0A73\u0A82\u0A91\u0A9D\u0AA8\u0AAE\u0ABC\u0ABE\u0ACA" +
		"\u0ACC\u0ADF\u0AE1\u0AF7\u0AF9\u0AFB\u0B07\u0B09\u0B14\u0B1F\u0B2A\u0B35" +
		"\u0B40\u0B50\u0B54\u0B5D\u0B67\u0B6B\u0B72\u0B7A\u0B7D\u0B82\u0B89\u0B8D" +
		"\u0B91";
	public static readonly _serializedATN: string = Utils.join(
		[
			Java20Parser._serializedATNSegment0,
			Java20Parser._serializedATNSegment1,
			Java20Parser._serializedATNSegment2,
			Java20Parser._serializedATNSegment3,
			Java20Parser._serializedATNSegment4,
			Java20Parser._serializedATNSegment5,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Java20Parser.__ATN) {
			Java20Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Java20Parser._serializedATN));
		}

		return Java20Parser.__ATN;
	}

}

export class Start_Context extends ParserRuleContext {
	public compilationUnit(): CompilationUnitContext {
		return this.getRuleContext(0, CompilationUnitContext);
	}
	public EOF(): TerminalNode { return this.getToken(Java20Parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_start_; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterStart_) {
			listener.enterStart_(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitStart_) {
			listener.exitStart_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStart_) {
			return visitor.visitStart_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.Identifier, 0); }
	public contextualKeyword(): ContextualKeywordContext | undefined {
		return this.tryGetRuleContext(0, ContextualKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_identifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeIdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.Identifier, 0); }
	public contextualKeywordMinusForTypeIdentifier(): ContextualKeywordMinusForTypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ContextualKeywordMinusForTypeIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeIdentifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeIdentifier) {
			listener.enterTypeIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeIdentifier) {
			listener.exitTypeIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeIdentifier) {
			return visitor.visitTypeIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnqualifiedMethodIdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.Identifier, 0); }
	public contextualKeywordMinusForUnqualifiedMethodIdentifier(): ContextualKeywordMinusForUnqualifiedMethodIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ContextualKeywordMinusForUnqualifiedMethodIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unqualifiedMethodIdentifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnqualifiedMethodIdentifier) {
			listener.enterUnqualifiedMethodIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnqualifiedMethodIdentifier) {
			listener.exitUnqualifiedMethodIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnqualifiedMethodIdentifier) {
			return visitor.visitUnqualifiedMethodIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContextualKeywordContext extends ParserRuleContext {
	public EXPORTS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.EXPORTS, 0); }
	public MODULE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.MODULE, 0); }
	public NONSEALED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.NONSEALED, 0); }
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.OPEN, 0); }
	public OPENS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.OPENS, 0); }
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PERMITS, 0); }
	public PROVIDES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PROVIDES, 0); }
	public RECORD(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.RECORD, 0); }
	public REQUIRES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.REQUIRES, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SEALED, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TO, 0); }
	public TRANSITIVE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TRANSITIVE, 0); }
	public USES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.USES, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.VAR, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.WITH, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.YIELD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_contextualKeyword; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterContextualKeyword) {
			listener.enterContextualKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitContextualKeyword) {
			listener.exitContextualKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitContextualKeyword) {
			return visitor.visitContextualKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContextualKeywordMinusForTypeIdentifierContext extends ParserRuleContext {
	public EXPORTS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.EXPORTS, 0); }
	public MODULE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.MODULE, 0); }
	public NONSEALED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.NONSEALED, 0); }
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.OPEN, 0); }
	public OPENS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.OPENS, 0); }
	public PROVIDES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PROVIDES, 0); }
	public REQUIRES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.REQUIRES, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TO, 0); }
	public TRANSITIVE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TRANSITIVE, 0); }
	public USES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.USES, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.WITH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_contextualKeywordMinusForTypeIdentifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterContextualKeywordMinusForTypeIdentifier) {
			listener.enterContextualKeywordMinusForTypeIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitContextualKeywordMinusForTypeIdentifier) {
			listener.exitContextualKeywordMinusForTypeIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitContextualKeywordMinusForTypeIdentifier) {
			return visitor.visitContextualKeywordMinusForTypeIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContextualKeywordMinusForUnqualifiedMethodIdentifierContext extends ParserRuleContext {
	public EXPORTS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.EXPORTS, 0); }
	public MODULE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.MODULE, 0); }
	public NONSEALED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.NONSEALED, 0); }
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.OPEN, 0); }
	public OPENS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.OPENS, 0); }
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PERMITS, 0); }
	public PROVIDES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PROVIDES, 0); }
	public RECORD(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.RECORD, 0); }
	public REQUIRES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.REQUIRES, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SEALED, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TO, 0); }
	public TRANSITIVE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TRANSITIVE, 0); }
	public USES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.USES, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.VAR, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.WITH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_contextualKeywordMinusForUnqualifiedMethodIdentifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterContextualKeywordMinusForUnqualifiedMethodIdentifier) {
			listener.enterContextualKeywordMinusForUnqualifiedMethodIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitContextualKeywordMinusForUnqualifiedMethodIdentifier) {
			listener.exitContextualKeywordMinusForUnqualifiedMethodIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitContextualKeywordMinusForUnqualifiedMethodIdentifier) {
			return visitor.visitContextualKeywordMinusForUnqualifiedMethodIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.IntegerLiteral, 0); }
	public FloatingPointLiteral(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.FloatingPointLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.BooleanLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.CharacterLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.StringLiteral, 0); }
	public TextBlock(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TextBlock, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.NullLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_literal; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.BOOLEAN, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericTypeContext extends ParserRuleContext {
	public integralType(): IntegralTypeContext | undefined {
		return this.tryGetRuleContext(0, IntegralTypeContext);
	}
	public floatingPointType(): FloatingPointTypeContext | undefined {
		return this.tryGetRuleContext(0, FloatingPointTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_numericType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterNumericType) {
			listener.enterNumericType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitNumericType) {
			listener.exitNumericType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitNumericType) {
			return visitor.visitNumericType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegralTypeContext extends ParserRuleContext {
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.LONG, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_integralType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterIntegralType) {
			listener.enterIntegralType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitIntegralType) {
			listener.exitIntegralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitIntegralType) {
			return visitor.visitIntegralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatingPointTypeContext extends ParserRuleContext {
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_floatingPointType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterFloatingPointType) {
			listener.enterFloatingPointType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitFloatingPointType) {
			listener.exitFloatingPointType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFloatingPointType) {
			return visitor.visitFloatingPointType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_referenceType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterReferenceType) {
			listener.enterReferenceType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitReferenceType) {
			listener.exitReferenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitReferenceType) {
			return visitor.visitReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CoitContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Java20Parser.DOT, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public coit(): CoitContext | undefined {
		return this.tryGetRuleContext(0, CoitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_coit; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterCoit) {
			listener.enterCoit(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitCoit) {
			listener.exitCoit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCoit) {
			return visitor.visitCoit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public packageName(): PackageNameContext | undefined {
		return this.tryGetRuleContext(0, PackageNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public coit(): CoitContext | undefined {
		return this.tryGetRuleContext(0, CoitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classOrInterfaceType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public packageName(): PackageNameContext | undefined {
		return this.tryGetRuleContext(0, PackageNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassType) {
			listener.enterClassType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassType) {
			listener.exitClassType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassType) {
			return visitor.visitClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_interfaceType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInterfaceType) {
			listener.enterInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInterfaceType) {
			listener.exitInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType) {
			return visitor.visitInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeVariableContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeVariable; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeVariable) {
			listener.enterTypeVariable(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeVariable) {
			listener.exitTypeVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeVariable) {
			return visitor.visitTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public dims(): DimsContext {
		return this.getRuleContext(0, DimsContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_arrayType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimsContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.LBRACK);
		} else {
			return this.getToken(Java20Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.RBRACK);
		} else {
			return this.getToken(Java20Parser.RBRACK, i);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_dims; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterDims) {
			listener.enterDims(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitDims) {
			listener.exitDims(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitDims) {
			return visitor.visitDims(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public typeParameterModifier(): TypeParameterModifierContext[];
	public typeParameterModifier(i: number): TypeParameterModifierContext;
	public typeParameterModifier(i?: number): TypeParameterModifierContext | TypeParameterModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterModifierContext);
		} else {
			return this.getRuleContext(i, TypeParameterModifierContext);
		}
	}
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeParameterModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeParameterModifier) {
			listener.enterTypeParameterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeParameterModifier) {
			listener.exitTypeParameterModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterModifier) {
			return visitor.visitTypeParameterModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(Java20Parser.EXTENDS, 0); }
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public additionalBound(): AdditionalBoundContext[];
	public additionalBound(i: number): AdditionalBoundContext;
	public additionalBound(i?: number): AdditionalBoundContext | AdditionalBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionalBoundContext);
		} else {
			return this.getRuleContext(i, AdditionalBoundContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeBound; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditionalBoundContext extends ParserRuleContext {
	public BITAND(): TerminalNode { return this.getToken(Java20Parser.BITAND, 0); }
	public interfaceType(): InterfaceTypeContext {
		return this.getRuleContext(0, InterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_additionalBound; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAdditionalBound) {
			listener.enterAdditionalBound(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAdditionalBound) {
			listener.exitAdditionalBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAdditionalBound) {
			return visitor.visitAdditionalBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Java20Parser.LT, 0); }
	public typeArgumentList(): TypeArgumentListContext {
		return this.getRuleContext(0, TypeArgumentListContext);
	}
	public GT(): TerminalNode { return this.getToken(Java20Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentListContext extends ParserRuleContext {
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeArgumentList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeArgumentList) {
			listener.enterTypeArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeArgumentList) {
			listener.exitTypeArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentList) {
			return visitor.visitTypeArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public wildcard(): WildcardContext | undefined {
		return this.tryGetRuleContext(0, WildcardContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardContext extends ParserRuleContext {
	public QUESTION(): TerminalNode { return this.getToken(Java20Parser.QUESTION, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public wildcardBounds(): WildcardBoundsContext | undefined {
		return this.tryGetRuleContext(0, WildcardBoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_wildcard; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterWildcard) {
			listener.enterWildcard(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitWildcard) {
			listener.exitWildcard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitWildcard) {
			return visitor.visitWildcard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardBoundsContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.EXTENDS, 0); }
	public referenceType(): ReferenceTypeContext {
		return this.getRuleContext(0, ReferenceTypeContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_wildcardBounds; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterWildcardBounds) {
			listener.enterWildcardBounds(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitWildcardBounds) {
			listener.exitWildcardBounds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitWildcardBounds) {
			return visitor.visitWildcardBounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public moduleName(): ModuleNameContext | undefined {
		return this.tryGetRuleContext(0, ModuleNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_moduleName; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterModuleName) {
			listener.enterModuleName(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitModuleName) {
			listener.exitModuleName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitModuleName) {
			return visitor.visitModuleName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public packageName(): PackageNameContext | undefined {
		return this.tryGetRuleContext(0, PackageNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_packageName; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPackageName) {
			listener.enterPackageName(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPackageName) {
			listener.exitPackageName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPackageName) {
			return visitor.visitPackageName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public packageName(): PackageNameContext {
		return this.getRuleContext(0, PackageNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeName; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageOrTypeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public packageOrTypeName(): PackageOrTypeNameContext | undefined {
		return this.tryGetRuleContext(0, PackageOrTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_packageOrTypeName; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPackageOrTypeName) {
			listener.enterPackageOrTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPackageOrTypeName) {
			listener.exitPackageOrTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPackageOrTypeName) {
			return visitor.visitPackageOrTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ambiguousName(): AmbiguousNameContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_expressionName; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterExpressionName) {
			listener.enterExpressionName(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitExpressionName) {
			listener.exitExpressionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExpressionName) {
			return visitor.visitExpressionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodNameContext extends ParserRuleContext {
	public unqualifiedMethodIdentifier(): UnqualifiedMethodIdentifierContext {
		return this.getRuleContext(0, UnqualifiedMethodIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_methodName; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterMethodName) {
			listener.enterMethodName(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitMethodName) {
			listener.exitMethodName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodName) {
			return visitor.visitMethodName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public ambiguousName(): AmbiguousNameContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_ambiguousName; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAmbiguousName) {
			listener.enterAmbiguousName(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAmbiguousName) {
			listener.exitAmbiguousName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAmbiguousName) {
			return visitor.visitAmbiguousName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	public ordinaryCompilationUnit(): OrdinaryCompilationUnitContext | undefined {
		return this.tryGetRuleContext(0, OrdinaryCompilationUnitContext);
	}
	public modularCompilationUnit(): ModularCompilationUnitContext | undefined {
		return this.tryGetRuleContext(0, ModularCompilationUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrdinaryCompilationUnitContext extends ParserRuleContext {
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public topLevelClassOrInterfaceDeclaration(): TopLevelClassOrInterfaceDeclarationContext[];
	public topLevelClassOrInterfaceDeclaration(i: number): TopLevelClassOrInterfaceDeclarationContext;
	public topLevelClassOrInterfaceDeclaration(i?: number): TopLevelClassOrInterfaceDeclarationContext | TopLevelClassOrInterfaceDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelClassOrInterfaceDeclarationContext);
		} else {
			return this.getRuleContext(i, TopLevelClassOrInterfaceDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_ordinaryCompilationUnit; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterOrdinaryCompilationUnit) {
			listener.enterOrdinaryCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitOrdinaryCompilationUnit) {
			listener.exitOrdinaryCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitOrdinaryCompilationUnit) {
			return visitor.visitOrdinaryCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModularCompilationUnitContext extends ParserRuleContext {
	public moduleDeclaration(): ModuleDeclarationContext {
		return this.getRuleContext(0, ModuleDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_modularCompilationUnit; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterModularCompilationUnit) {
			listener.enterModularCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitModularCompilationUnit) {
			listener.exitModularCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitModularCompilationUnit) {
			return visitor.visitModularCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(Java20Parser.PACKAGE, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	public packageModifier(): PackageModifierContext[];
	public packageModifier(i: number): PackageModifierContext;
	public packageModifier(i?: number): PackageModifierContext | PackageModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageModifierContext);
		} else {
			return this.getRuleContext(i, PackageModifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.DOT);
		} else {
			return this.getToken(Java20Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_packageDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_packageModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPackageModifier) {
			listener.enterPackageModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPackageModifier) {
			listener.exitPackageModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPackageModifier) {
			return visitor.visitPackageModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SingleTypeImportDeclarationContext);
	}
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeImportOnDemandDeclarationContext);
	}
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SingleStaticImportDeclarationContext);
	}
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticImportOnDemandDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleTypeImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Java20Parser.IMPORT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_singleTypeImportDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterSingleTypeImportDeclaration) {
			listener.enterSingleTypeImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitSingleTypeImportDeclaration) {
			listener.exitSingleTypeImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSingleTypeImportDeclaration) {
			return visitor.visitSingleTypeImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeImportOnDemandDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Java20Parser.IMPORT, 0); }
	public packageOrTypeName(): PackageOrTypeNameContext {
		return this.getRuleContext(0, PackageOrTypeNameContext);
	}
	public DOT(): TerminalNode { return this.getToken(Java20Parser.DOT, 0); }
	public MUL(): TerminalNode { return this.getToken(Java20Parser.MUL, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeImportOnDemandDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeImportOnDemandDeclaration) {
			listener.enterTypeImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeImportOnDemandDeclaration) {
			listener.exitTypeImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeImportOnDemandDeclaration) {
			return visitor.visitTypeImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStaticImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Java20Parser.IMPORT, 0); }
	public STATIC(): TerminalNode { return this.getToken(Java20Parser.STATIC, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode { return this.getToken(Java20Parser.DOT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_singleStaticImportDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterSingleStaticImportDeclaration) {
			listener.enterSingleStaticImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitSingleStaticImportDeclaration) {
			listener.exitSingleStaticImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSingleStaticImportDeclaration) {
			return visitor.visitSingleStaticImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticImportOnDemandDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Java20Parser.IMPORT, 0); }
	public STATIC(): TerminalNode { return this.getToken(Java20Parser.STATIC, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode { return this.getToken(Java20Parser.DOT, 0); }
	public MUL(): TerminalNode { return this.getToken(Java20Parser.MUL, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_staticImportOnDemandDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterStaticImportOnDemandDeclaration) {
			listener.enterStaticImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitStaticImportOnDemandDeclaration) {
			listener.exitStaticImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStaticImportOnDemandDeclaration) {
			return visitor.visitStaticImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelClassOrInterfaceDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_topLevelClassOrInterfaceDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTopLevelClassOrInterfaceDeclaration) {
			listener.enterTopLevelClassOrInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTopLevelClassOrInterfaceDeclaration) {
			listener.exitTopLevelClassOrInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTopLevelClassOrInterfaceDeclaration) {
			return visitor.visitTopLevelClassOrInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDeclarationContext extends ParserRuleContext {
	public MODULE(): TerminalNode { return this.getToken(Java20Parser.MODULE, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public LBRACE(): TerminalNode { return this.getToken(Java20Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java20Parser.RBRACE, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.OPEN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.DOT);
		} else {
			return this.getToken(Java20Parser.DOT, i);
		}
	}
	public moduleDirective(): ModuleDirectiveContext[];
	public moduleDirective(i: number): ModuleDirectiveContext;
	public moduleDirective(i?: number): ModuleDirectiveContext | ModuleDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleDirectiveContext);
		} else {
			return this.getRuleContext(i, ModuleDirectiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_moduleDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterModuleDeclaration) {
			listener.enterModuleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitModuleDeclaration) {
			listener.exitModuleDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitModuleDeclaration) {
			return visitor.visitModuleDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDirectiveContext extends ParserRuleContext {
	public REQUIRES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.REQUIRES, 0); }
	public moduleName(): ModuleNameContext[];
	public moduleName(i: number): ModuleNameContext;
	public moduleName(i?: number): ModuleNameContext | ModuleNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleNameContext);
		} else {
			return this.getRuleContext(i, ModuleNameContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	public requiresModifier(): RequiresModifierContext[];
	public requiresModifier(i: number): RequiresModifierContext;
	public requiresModifier(i?: number): RequiresModifierContext | RequiresModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequiresModifierContext);
		} else {
			return this.getRuleContext(i, RequiresModifierContext);
		}
	}
	public EXPORTS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.EXPORTS, 0); }
	public packageName(): PackageNameContext | undefined {
		return this.tryGetRuleContext(0, PackageNameContext);
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TO, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	public OPENS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.OPENS, 0); }
	public USES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.USES, 0); }
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	public PROVIDES(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PROVIDES, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.WITH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_moduleDirective; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterModuleDirective) {
			listener.enterModuleDirective(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitModuleDirective) {
			listener.exitModuleDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitModuleDirective) {
			return visitor.visitModuleDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequiresModifierContext extends ParserRuleContext {
	public TRANSITIVE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TRANSITIVE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.STATIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_requiresModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterRequiresModifier) {
			listener.enterRequiresModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitRequiresModifier) {
			listener.exitRequiresModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRequiresModifier) {
			return visitor.visitRequiresModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public normalClassDeclaration(): NormalClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public recordDeclaration(): RecordDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RecordDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(Java20Parser.CLASS, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public classExtends(): ClassExtendsContext | undefined {
		return this.tryGetRuleContext(0, ClassExtendsContext);
	}
	public classImplements(): ClassImplementsContext | undefined {
		return this.tryGetRuleContext(0, ClassImplementsContext);
	}
	public classPermits(): ClassPermitsContext | undefined {
		return this.tryGetRuleContext(0, ClassPermitsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_normalClassDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterNormalClassDeclaration) {
			listener.enterNormalClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitNormalClassDeclaration) {
			listener.exitNormalClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitNormalClassDeclaration) {
			return visitor.visitNormalClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PRIVATE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.ABSTRACT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.FINAL, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SEALED, 0); }
	public NONSEALED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.NONSEALED, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassModifier) {
			listener.enterClassModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassModifier) {
			listener.exitClassModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassModifier) {
			return visitor.visitClassModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Java20Parser.LT, 0); }
	public typeParameterList(): TypeParameterListContext {
		return this.getRuleContext(0, TypeParameterListContext);
	}
	public GT(): TerminalNode { return this.getToken(Java20Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterListContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeParameterList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeParameterList) {
			listener.enterTypeParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeParameterList) {
			listener.exitTypeParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterList) {
			return visitor.visitTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassExtendsContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(Java20Parser.EXTENDS, 0); }
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classExtends; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassExtends) {
			listener.enterClassExtends(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassExtends) {
			listener.exitClassExtends(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassExtends) {
			return visitor.visitClassExtends(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassImplementsContext extends ParserRuleContext {
	public IMPLEMENTS(): TerminalNode { return this.getToken(Java20Parser.IMPLEMENTS, 0); }
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getRuleContext(0, InterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classImplements; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassImplements) {
			listener.enterClassImplements(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassImplements) {
			listener.exitClassImplements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassImplements) {
			return visitor.visitClassImplements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeListContext extends ParserRuleContext {
	public interfaceType(): InterfaceTypeContext[];
	public interfaceType(i: number): InterfaceTypeContext;
	public interfaceType(i?: number): InterfaceTypeContext | InterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceTypeContext);
		} else {
			return this.getRuleContext(i, InterfaceTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_interfaceTypeList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInterfaceTypeList) {
			listener.enterInterfaceTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInterfaceTypeList) {
			listener.exitInterfaceTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceTypeList) {
			return visitor.visitInterfaceTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassPermitsContext extends ParserRuleContext {
	public PERMITS(): TerminalNode { return this.getToken(Java20Parser.PERMITS, 0); }
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classPermits; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassPermits) {
			listener.enterClassPermits(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassPermits) {
			listener.exitClassPermits(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassPermits) {
			return visitor.visitClassPermits(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java20Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java20Parser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classBody; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public classMemberDeclaration(): ClassMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassMemberDeclarationContext);
	}
	public instanceInitializer(): InstanceInitializerContext | undefined {
		return this.tryGetRuleContext(0, InstanceInitializerContext);
	}
	public staticInitializer(): StaticInitializerContext | undefined {
		return this.tryGetRuleContext(0, StaticInitializerContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassMemberDeclarationContext extends ParserRuleContext {
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classMemberDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassMemberDeclaration) {
			listener.enterClassMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassMemberDeclaration) {
			listener.exitClassMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassMemberDeclaration) {
			return visitor.visitClassMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	public fieldModifier(): FieldModifierContext[];
	public fieldModifier(i: number): FieldModifierContext;
	public fieldModifier(i?: number): FieldModifierContext | FieldModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldModifierContext);
		} else {
			return this.getRuleContext(i, FieldModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.FINAL, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.VOLATILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_fieldModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterFieldModifier) {
			listener.enterFieldModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitFieldModifier) {
			listener.exitFieldModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFieldModifier) {
			return visitor.visitFieldModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorListContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_variableDeclaratorList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterVariableDeclaratorList) {
			listener.enterVariableDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitVariableDeclaratorList) {
			listener.exitVariableDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorList) {
			return visitor.visitVariableDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_variableDeclaratorId; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeContext extends ParserRuleContext {
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public unannReferenceType(): UnannReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unannType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnannType) {
			listener.enterUnannType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnannType) {
			listener.exitUnannType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannType) {
			return visitor.visitUnannType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannPrimitiveTypeContext extends ParserRuleContext {
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unannPrimitiveType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnannPrimitiveType) {
			listener.enterUnannPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnannPrimitiveType) {
			listener.exitUnannPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannPrimitiveType) {
			return visitor.visitUnannPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannReferenceTypeContext extends ParserRuleContext {
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public unannTypeVariable(): UnannTypeVariableContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeVariableContext);
	}
	public unannArrayType(): UnannArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unannReferenceType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnannReferenceType) {
			listener.enterUnannReferenceType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnannReferenceType) {
			listener.exitUnannReferenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannReferenceType) {
			return visitor.visitUnannReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassOrInterfaceTypeContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public packageName(): PackageNameContext | undefined {
		return this.tryGetRuleContext(0, PackageNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public uCOIT(): UCOITContext | undefined {
		return this.tryGetRuleContext(0, UCOITContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unannClassOrInterfaceType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnannClassOrInterfaceType) {
			listener.enterUnannClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnannClassOrInterfaceType) {
			listener.exitUnannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassOrInterfaceType) {
			return visitor.visitUnannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UCOITContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Java20Parser.DOT, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public uCOIT(): UCOITContext | undefined {
		return this.tryGetRuleContext(0, UCOITContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_uCOIT; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUCOIT) {
			listener.enterUCOIT(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUCOIT) {
			listener.exitUCOIT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUCOIT) {
			return visitor.visitUCOIT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassTypeContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public packageName(): PackageNameContext | undefined {
		return this.tryGetRuleContext(0, PackageNameContext);
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unannClassType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnannClassType) {
			listener.enterUnannClassType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnannClassType) {
			listener.exitUnannClassType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassType) {
			return visitor.visitUnannClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceTypeContext extends ParserRuleContext {
	public unannClassType(): UnannClassTypeContext {
		return this.getRuleContext(0, UnannClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unannInterfaceType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnannInterfaceType) {
			listener.enterUnannInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnannInterfaceType) {
			listener.exitUnannInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannInterfaceType) {
			return visitor.visitUnannInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeVariableContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unannTypeVariable; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnannTypeVariable) {
			listener.enterUnannTypeVariable(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnannTypeVariable) {
			listener.exitUnannTypeVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannTypeVariable) {
			return visitor.visitUnannTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannArrayTypeContext extends ParserRuleContext {
	public dims(): DimsContext {
		return this.getRuleContext(0, DimsContext);
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public unannTypeVariable(): UnannTypeVariableContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unannArrayType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnannArrayType) {
			listener.enterUnannArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnannArrayType) {
			listener.exitUnannArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannArrayType) {
			return visitor.visitUnannArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public methodModifier(): MethodModifierContext[];
	public methodModifier(i: number): MethodModifierContext;
	public methodModifier(i?: number): MethodModifierContext | MethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodModifierContext);
		} else {
			return this.getRuleContext(i, MethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PRIVATE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.ABSTRACT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.FINAL, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SYNCHRONIZED, 0); }
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.NATIVE, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_methodModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterMethodModifier) {
			listener.enterMethodModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitMethodModifier) {
			listener.exitMethodModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodModifier) {
			return visitor.visitMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodHeaderContext extends ParserRuleContext {
	public result(): ResultContext {
		return this.getRuleContext(0, ResultContext);
	}
	public methodDeclarator(): MethodDeclaratorContext {
		return this.getRuleContext(0, MethodDeclaratorContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public throwsT(): ThrowsTContext | undefined {
		return this.tryGetRuleContext(0, ThrowsTContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_methodHeader; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterMethodHeader) {
			listener.enterMethodHeader(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitMethodHeader) {
			listener.exitMethodHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodHeader) {
			return visitor.visitMethodHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_result; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterResult) {
			listener.enterResult(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitResult) {
			listener.exitResult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public receiverParameter(): ReceiverParameterContext | undefined {
		return this.tryGetRuleContext(0, ReceiverParameterContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.COMMA, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_methodDeclarator; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterMethodDeclarator) {
			listener.enterMethodDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitMethodDeclarator) {
			listener.exitMethodDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclarator) {
			return visitor.visitMethodDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiverParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public THIS(): TerminalNode { return this.getToken(Java20Parser.THIS, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_receiverParameter; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterReceiverParameter) {
			listener.enterReceiverParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitReceiverParameter) {
			listener.exitReceiverParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitReceiverParameter) {
			return visitor.visitReceiverParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public variableArityParameter(): VariableArityParameterContext | undefined {
		return this.tryGetRuleContext(0, VariableArityParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableArityParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public ELLIPSIS(): TerminalNode { return this.getToken(Java20Parser.ELLIPSIS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_variableArityParameter; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterVariableArityParameter) {
			listener.enterVariableArityParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitVariableArityParameter) {
			listener.exitVariableArityParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableArityParameter) {
			return visitor.visitVariableArityParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.FINAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_variableModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowsTContext extends ParserRuleContext {
	public THROWS(): TerminalNode { return this.getToken(Java20Parser.THROWS, 0); }
	public exceptionTypeList(): ExceptionTypeListContext {
		return this.getRuleContext(0, ExceptionTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_throwsT; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterThrowsT) {
			listener.enterThrowsT(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitThrowsT) {
			listener.exitThrowsT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitThrowsT) {
			return visitor.visitThrowsT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeListContext extends ParserRuleContext {
	public exceptionType(): ExceptionTypeContext[];
	public exceptionType(i: number): ExceptionTypeContext;
	public exceptionType(i?: number): ExceptionTypeContext | ExceptionTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExceptionTypeContext);
		} else {
			return this.getRuleContext(i, ExceptionTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_exceptionTypeList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterExceptionTypeList) {
			listener.enterExceptionTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitExceptionTypeList) {
			listener.exitExceptionTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExceptionTypeList) {
			return visitor.visitExceptionTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_exceptionType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterExceptionType) {
			listener.enterExceptionType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitExceptionType) {
			listener.exitExceptionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExceptionType) {
			return visitor.visitExceptionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_methodBody; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterMethodBody) {
			listener.enterMethodBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitMethodBody) {
			listener.exitMethodBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceInitializerContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_instanceInitializer; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInstanceInitializer) {
			listener.enterInstanceInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInstanceInitializer) {
			listener.exitInstanceInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInstanceInitializer) {
			return visitor.visitInstanceInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticInitializerContext extends ParserRuleContext {
	public STATIC(): TerminalNode { return this.getToken(Java20Parser.STATIC, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_staticInitializer; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterStaticInitializer) {
			listener.enterStaticInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitStaticInitializer) {
			listener.exitStaticInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStaticInitializer) {
			return visitor.visitStaticInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public constructorDeclarator(): ConstructorDeclaratorContext {
		return this.getRuleContext(0, ConstructorDeclaratorContext);
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getRuleContext(0, ConstructorBodyContext);
	}
	public constructorModifier(): ConstructorModifierContext[];
	public constructorModifier(i: number): ConstructorModifierContext;
	public constructorModifier(i?: number): ConstructorModifierContext | ConstructorModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstructorModifierContext);
		} else {
			return this.getRuleContext(i, ConstructorModifierContext);
		}
	}
	public throwsT(): ThrowsTContext | undefined {
		return this.tryGetRuleContext(0, ThrowsTContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_constructorDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_constructorModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterConstructorModifier) {
			listener.enterConstructorModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitConstructorModifier) {
			listener.exitConstructorModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstructorModifier) {
			return visitor.visitConstructorModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclaratorContext extends ParserRuleContext {
	public simpleTypeName(): SimpleTypeNameContext {
		return this.getRuleContext(0, SimpleTypeNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public receiverParameter(): ReceiverParameterContext | undefined {
		return this.tryGetRuleContext(0, ReceiverParameterContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.COMMA, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_constructorDeclarator; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterConstructorDeclarator) {
			listener.enterConstructorDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitConstructorDeclarator) {
			listener.exitConstructorDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclarator) {
			return visitor.visitConstructorDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeNameContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_simpleTypeName; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterSimpleTypeName) {
			listener.enterSimpleTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitSimpleTypeName) {
			listener.exitSimpleTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSimpleTypeName) {
			return visitor.visitSimpleTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java20Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java20Parser.RBRACE, 0); }
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitConstructorInvocationContext);
	}
	public blockStatements(): BlockStatementsContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_constructorBody; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterConstructorBody) {
			listener.enterConstructorBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitConstructorBody) {
			listener.exitConstructorBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstructorBody) {
			return visitor.visitConstructorBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitConstructorInvocationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SUPER, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_explicitConstructorInvocation; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterExplicitConstructorInvocation) {
			listener.enterExplicitConstructorInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitExplicitConstructorInvocation) {
			listener.exitExplicitConstructorInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExplicitConstructorInvocation) {
			return visitor.visitExplicitConstructorInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(Java20Parser.ENUM, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public classImplements(): ClassImplementsContext | undefined {
		return this.tryGetRuleContext(0, ClassImplementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java20Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java20Parser.RBRACE, 0); }
	public enumConstantList(): EnumConstantListContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.COMMA, 0); }
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_enumBody; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterEnumBody) {
			listener.enterEnumBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitEnumBody) {
			listener.exitEnumBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantListContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_enumConstantList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterEnumConstantList) {
			listener.enterEnumConstantList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitEnumConstantList) {
			listener.exitEnumConstantList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantList) {
			return visitor.visitEnumConstantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public enumConstantModifier(): EnumConstantModifierContext[];
	public enumConstantModifier(i: number): EnumConstantModifierContext;
	public enumConstantModifier(i?: number): EnumConstantModifierContext | EnumConstantModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantModifierContext);
		} else {
			return this.getRuleContext(i, EnumConstantModifierContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.RPAREN, 0); }
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_enumConstantModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterEnumConstantModifier) {
			listener.enterEnumConstantModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitEnumConstantModifier) {
			listener.exitEnumConstantModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantModifier) {
			return visitor.visitEnumConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_enumBodyDeclarations; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterEnumBodyDeclarations) {
			listener.enterEnumBodyDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitEnumBodyDeclarations) {
			listener.exitEnumBodyDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) {
			return visitor.visitEnumBodyDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordDeclarationContext extends ParserRuleContext {
	public RECORD(): TerminalNode { return this.getToken(Java20Parser.RECORD, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public recordHeader(): RecordHeaderContext {
		return this.getRuleContext(0, RecordHeaderContext);
	}
	public recordBody(): RecordBodyContext {
		return this.getRuleContext(0, RecordBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public classImplements(): ClassImplementsContext | undefined {
		return this.tryGetRuleContext(0, ClassImplementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_recordDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterRecordDeclaration) {
			listener.enterRecordDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitRecordDeclaration) {
			listener.exitRecordDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordDeclaration) {
			return visitor.visitRecordDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordHeaderContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public recordComponentList(): RecordComponentListContext | undefined {
		return this.tryGetRuleContext(0, RecordComponentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_recordHeader; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterRecordHeader) {
			listener.enterRecordHeader(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitRecordHeader) {
			listener.exitRecordHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordHeader) {
			return visitor.visitRecordHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordComponentListContext extends ParserRuleContext {
	public recordComponent(): RecordComponentContext[];
	public recordComponent(i: number): RecordComponentContext;
	public recordComponent(i?: number): RecordComponentContext | RecordComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordComponentContext);
		} else {
			return this.getRuleContext(i, RecordComponentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_recordComponentList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterRecordComponentList) {
			listener.enterRecordComponentList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitRecordComponentList) {
			listener.exitRecordComponentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordComponentList) {
			return visitor.visitRecordComponentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordComponentContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public recordComponentModifier(): RecordComponentModifierContext[];
	public recordComponentModifier(i: number): RecordComponentModifierContext;
	public recordComponentModifier(i?: number): RecordComponentModifierContext | RecordComponentModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordComponentModifierContext);
		} else {
			return this.getRuleContext(i, RecordComponentModifierContext);
		}
	}
	public variableArityRecordComponent(): VariableArityRecordComponentContext | undefined {
		return this.tryGetRuleContext(0, VariableArityRecordComponentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_recordComponent; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterRecordComponent) {
			listener.enterRecordComponent(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitRecordComponent) {
			listener.exitRecordComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordComponent) {
			return visitor.visitRecordComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableArityRecordComponentContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public ELLIPSIS(): TerminalNode { return this.getToken(Java20Parser.ELLIPSIS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public recordComponentModifier(): RecordComponentModifierContext[];
	public recordComponentModifier(i: number): RecordComponentModifierContext;
	public recordComponentModifier(i?: number): RecordComponentModifierContext | RecordComponentModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordComponentModifierContext);
		} else {
			return this.getRuleContext(i, RecordComponentModifierContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_variableArityRecordComponent; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterVariableArityRecordComponent) {
			listener.enterVariableArityRecordComponent(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitVariableArityRecordComponent) {
			listener.exitVariableArityRecordComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableArityRecordComponent) {
			return visitor.visitVariableArityRecordComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordComponentModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_recordComponentModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterRecordComponentModifier) {
			listener.enterRecordComponentModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitRecordComponentModifier) {
			listener.exitRecordComponentModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordComponentModifier) {
			return visitor.visitRecordComponentModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java20Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java20Parser.RBRACE, 0); }
	public recordBodyDeclaration(): RecordBodyDeclarationContext[];
	public recordBodyDeclaration(i: number): RecordBodyDeclarationContext;
	public recordBodyDeclaration(i?: number): RecordBodyDeclarationContext | RecordBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, RecordBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_recordBody; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterRecordBody) {
			listener.enterRecordBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitRecordBody) {
			listener.exitRecordBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordBody) {
			return visitor.visitRecordBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordBodyDeclarationContext extends ParserRuleContext {
	public classBodyDeclaration(): ClassBodyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyDeclarationContext);
	}
	public compactConstructorDeclaration(): CompactConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, CompactConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_recordBodyDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterRecordBodyDeclaration) {
			listener.enterRecordBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitRecordBodyDeclaration) {
			listener.exitRecordBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordBodyDeclaration) {
			return visitor.visitRecordBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompactConstructorDeclarationContext extends ParserRuleContext {
	public simpleTypeName(): SimpleTypeNameContext {
		return this.getRuleContext(0, SimpleTypeNameContext);
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getRuleContext(0, ConstructorBodyContext);
	}
	public constructorModifier(): ConstructorModifierContext[];
	public constructorModifier(i: number): ConstructorModifierContext;
	public constructorModifier(i?: number): ConstructorModifierContext | ConstructorModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstructorModifierContext);
		} else {
			return this.getRuleContext(i, ConstructorModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_compactConstructorDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterCompactConstructorDeclaration) {
			listener.enterCompactConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitCompactConstructorDeclaration) {
			listener.exitCompactConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCompactConstructorDeclaration) {
			return visitor.visitCompactConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalInterfaceDeclarationContext);
	}
	public annotationInterfaceDeclaration(): AnnotationInterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationInterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_interfaceDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalInterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(Java20Parser.INTERFACE, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public interfaceModifier(): InterfaceModifierContext[];
	public interfaceModifier(i: number): InterfaceModifierContext;
	public interfaceModifier(i?: number): InterfaceModifierContext | InterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public interfaceExtends(): InterfaceExtendsContext | undefined {
		return this.tryGetRuleContext(0, InterfaceExtendsContext);
	}
	public interfacePermits(): InterfacePermitsContext | undefined {
		return this.tryGetRuleContext(0, InterfacePermitsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_normalInterfaceDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterNormalInterfaceDeclaration) {
			listener.enterNormalInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitNormalInterfaceDeclaration) {
			listener.exitNormalInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitNormalInterfaceDeclaration) {
			return visitor.visitNormalInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PRIVATE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.ABSTRACT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.STATIC, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SEALED, 0); }
	public NONSEALED(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.NONSEALED, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_interfaceModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInterfaceModifier) {
			listener.enterInterfaceModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInterfaceModifier) {
			listener.exitInterfaceModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceModifier) {
			return visitor.visitInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceExtendsContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(Java20Parser.EXTENDS, 0); }
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getRuleContext(0, InterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_interfaceExtends; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInterfaceExtends) {
			listener.enterInterfaceExtends(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInterfaceExtends) {
			listener.exitInterfaceExtends(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceExtends) {
			return visitor.visitInterfaceExtends(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfacePermitsContext extends ParserRuleContext {
	public PERMITS(): TerminalNode { return this.getToken(Java20Parser.PERMITS, 0); }
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_interfacePermits; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInterfacePermits) {
			listener.enterInterfacePermits(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInterfacePermits) {
			listener.exitInterfacePermits(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfacePermits) {
			return visitor.visitInterfacePermits(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java20Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java20Parser.RBRACE, 0); }
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext[];
	public interfaceMemberDeclaration(i: number): InterfaceMemberDeclarationContext;
	public interfaceMemberDeclaration(i?: number): InterfaceMemberDeclarationContext | InterfaceMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceMemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_interfaceBody; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constantDeclaration(): ConstantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_interfaceMemberDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInterfaceMemberDeclaration) {
			listener.enterInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInterfaceMemberDeclaration) {
			listener.exitInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) {
			return visitor.visitInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	public constantModifier(): ConstantModifierContext[];
	public constantModifier(i: number): ConstantModifierContext;
	public constantModifier(i?: number): ConstantModifierContext | ConstantModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantModifierContext);
		} else {
			return this.getRuleContext(i, ConstantModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_constantDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterConstantDeclaration) {
			listener.enterConstantDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitConstantDeclaration) {
			listener.exitConstantDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstantDeclaration) {
			return visitor.visitConstantDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PUBLIC, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.FINAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_constantModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterConstantModifier) {
			listener.enterConstantModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitConstantModifier) {
			listener.exitConstantModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstantModifier) {
			return visitor.visitConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public interfaceMethodModifier(): InterfaceMethodModifierContext[];
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
	public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_interfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInterfaceMethodDeclaration) {
			listener.enterInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInterfaceMethodDeclaration) {
			listener.exitInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PUBLIC, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PRIVATE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.ABSTRACT, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DEFAULT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_interfaceMethodModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInterfaceMethodModifier) {
			listener.enterInterfaceMethodModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInterfaceMethodModifier) {
			listener.exitInterfaceMethodModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodModifier) {
			return visitor.visitInterfaceMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationInterfaceDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Java20Parser.AT, 0); }
	public INTERFACE(): TerminalNode { return this.getToken(Java20Parser.INTERFACE, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public annotationInterfaceBody(): AnnotationInterfaceBodyContext {
		return this.getRuleContext(0, AnnotationInterfaceBodyContext);
	}
	public interfaceModifier(): InterfaceModifierContext[];
	public interfaceModifier(i: number): InterfaceModifierContext;
	public interfaceModifier(i?: number): InterfaceModifierContext | InterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_annotationInterfaceDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAnnotationInterfaceDeclaration) {
			listener.enterAnnotationInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAnnotationInterfaceDeclaration) {
			listener.exitAnnotationInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationInterfaceDeclaration) {
			return visitor.visitAnnotationInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationInterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java20Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java20Parser.RBRACE, 0); }
	public annotationInterfaceMemberDeclaration(): AnnotationInterfaceMemberDeclarationContext[];
	public annotationInterfaceMemberDeclaration(i: number): AnnotationInterfaceMemberDeclarationContext;
	public annotationInterfaceMemberDeclaration(i?: number): AnnotationInterfaceMemberDeclarationContext | AnnotationInterfaceMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationInterfaceMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationInterfaceMemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_annotationInterfaceBody; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAnnotationInterfaceBody) {
			listener.enterAnnotationInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAnnotationInterfaceBody) {
			listener.exitAnnotationInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationInterfaceBody) {
			return visitor.visitAnnotationInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationInterfaceMemberDeclarationContext extends ParserRuleContext {
	public annotationInterfaceElementDeclaration(): AnnotationInterfaceElementDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationInterfaceElementDeclarationContext);
	}
	public constantDeclaration(): ConstantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_annotationInterfaceMemberDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAnnotationInterfaceMemberDeclaration) {
			listener.enterAnnotationInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAnnotationInterfaceMemberDeclaration) {
			listener.exitAnnotationInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationInterfaceMemberDeclaration) {
			return visitor.visitAnnotationInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationInterfaceElementDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	public annotationInterfaceElementModifier(): AnnotationInterfaceElementModifierContext[];
	public annotationInterfaceElementModifier(i: number): AnnotationInterfaceElementModifierContext;
	public annotationInterfaceElementModifier(i?: number): AnnotationInterfaceElementModifierContext | AnnotationInterfaceElementModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationInterfaceElementModifierContext);
		} else {
			return this.getRuleContext(i, AnnotationInterfaceElementModifierContext);
		}
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_annotationInterfaceElementDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAnnotationInterfaceElementDeclaration) {
			listener.enterAnnotationInterfaceElementDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAnnotationInterfaceElementDeclaration) {
			listener.exitAnnotationInterfaceElementDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationInterfaceElementDeclaration) {
			return visitor.visitAnnotationInterfaceElementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationInterfaceElementModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.PUBLIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.ABSTRACT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_annotationInterfaceElementModifier; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAnnotationInterfaceElementModifier) {
			listener.enterAnnotationInterfaceElementModifier(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAnnotationInterfaceElementModifier) {
			listener.exitAnnotationInterfaceElementModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationInterfaceElementModifier) {
			return visitor.visitAnnotationInterfaceElementModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(Java20Parser.DEFAULT, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_defaultValue; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterDefaultValue) {
			listener.enterDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitDefaultValue) {
			listener.exitDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public normalAnnotation(): NormalAnnotationContext | undefined {
		return this.tryGetRuleContext(0, NormalAnnotationContext);
	}
	public markerAnnotation(): MarkerAnnotationContext | undefined {
		return this.tryGetRuleContext(0, MarkerAnnotationContext);
	}
	public singleElementAnnotation(): SingleElementAnnotationContext | undefined {
		return this.tryGetRuleContext(0, SingleElementAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_annotation; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalAnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Java20Parser.AT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public elementValuePairList(): ElementValuePairListContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_normalAnnotation; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterNormalAnnotation) {
			listener.enterNormalAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitNormalAnnotation) {
			listener.exitNormalAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitNormalAnnotation) {
			return visitor.visitNormalAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairListContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_elementValuePairList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterElementValuePairList) {
			listener.enterElementValuePairList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitElementValuePairList) {
			listener.exitElementValuePairList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairList) {
			return visitor.visitElementValuePairList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Java20Parser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_elementValue; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java20Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java20Parser.RBRACE, 0); }
	public elementValueList(): ElementValueListContext | undefined {
		return this.tryGetRuleContext(0, ElementValueListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueListContext extends ParserRuleContext {
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_elementValueList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterElementValueList) {
			listener.enterElementValueList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitElementValueList) {
			listener.exitElementValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitElementValueList) {
			return visitor.visitElementValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MarkerAnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Java20Parser.AT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_markerAnnotation; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterMarkerAnnotation) {
			listener.enterMarkerAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitMarkerAnnotation) {
			listener.exitMarkerAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMarkerAnnotation) {
			return visitor.visitMarkerAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleElementAnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Java20Parser.AT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_singleElementAnnotation; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterSingleElementAnnotation) {
			listener.enterSingleElementAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitSingleElementAnnotation) {
			listener.exitSingleElementAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSingleElementAnnotation) {
			return visitor.visitSingleElementAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java20Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java20Parser.RBRACE, 0); }
	public variableInitializerList(): VariableInitializerListContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerListContext extends ParserRuleContext {
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_variableInitializerList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterVariableInitializerList) {
			listener.enterVariableInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitVariableInitializerList) {
			listener.exitVariableInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializerList) {
			return visitor.visitVariableInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java20Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java20Parser.RBRACE, 0); }
	public blockStatements(): BlockStatementsContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_block; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementsContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_blockStatements; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterBlockStatements) {
			listener.enterBlockStatements(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitBlockStatements) {
			listener.exitBlockStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBlockStatements) {
			return visitor.visitBlockStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public localClassOrInterfaceDeclaration(): LocalClassOrInterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalClassOrInterfaceDeclarationContext);
	}
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalClassOrInterfaceDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalInterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_localClassOrInterfaceDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLocalClassOrInterfaceDeclaration) {
			listener.enterLocalClassOrInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLocalClassOrInterfaceDeclaration) {
			listener.exitLocalClassOrInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLocalClassOrInterfaceDeclaration) {
			return visitor.visitLocalClassOrInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public localVariableType(): LocalVariableTypeContext {
		return this.getRuleContext(0, LocalVariableTypeContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public variableDeclaratorList(): VariableDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableTypeContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_localVariableType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLocalVariableType) {
			listener.enterLocalVariableType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLocalVariableType) {
			listener.exitLocalVariableType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableType) {
			return visitor.visitLocalVariableType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_localVariableDeclarationStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLocalVariableDeclarationStatement) {
			listener.enterLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLocalVariableDeclarationStatement) {
			listener.exitLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) {
			return visitor.visitLocalVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext | undefined {
		return this.tryGetRuleContext(0, StatementWithoutTrailingSubstatementContext);
	}
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public ifThenStatement(): IfThenStatementContext | undefined {
		return this.tryGetRuleContext(0, IfThenStatementContext);
	}
	public ifThenElseStatement(): IfThenElseStatementContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_statement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementNoShortIfContext extends ParserRuleContext {
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext | undefined {
		return this.tryGetRuleContext(0, StatementWithoutTrailingSubstatementContext);
	}
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementNoShortIfContext);
	}
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStatementNoShortIfContext);
	}
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementNoShortIfContext);
	}
	public forStatementNoShortIf(): ForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, ForStatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_statementNoShortIf; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterStatementNoShortIf) {
			listener.enterStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitStatementNoShortIf) {
			listener.exitStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStatementNoShortIf) {
			return visitor.visitStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementWithoutTrailingSubstatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public emptyStatement_(): EmptyStatement_Context | undefined {
		return this.tryGetRuleContext(0, EmptyStatement_Context);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public assertStatement(): AssertStatementContext | undefined {
		return this.tryGetRuleContext(0, AssertStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public synchronizedStatement(): SynchronizedStatementContext | undefined {
		return this.tryGetRuleContext(0, SynchronizedStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public yieldStatement(): YieldStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_statementWithoutTrailingSubstatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterStatementWithoutTrailingSubstatement) {
			listener.enterStatementWithoutTrailingSubstatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitStatementWithoutTrailingSubstatement) {
			listener.exitStatementWithoutTrailingSubstatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStatementWithoutTrailingSubstatement) {
			return visitor.visitStatementWithoutTrailingSubstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_emptyStatement_; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterEmptyStatement_) {
			listener.enterEmptyStatement_(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitEmptyStatement_) {
			listener.exitEmptyStatement_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement_) {
			return visitor.visitEmptyStatement_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(Java20Parser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_labeledStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLabeledStatement) {
			listener.enterLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLabeledStatement) {
			listener.exitLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementNoShortIfContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(Java20Parser.COLON, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_labeledStatementNoShortIf; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLabeledStatementNoShortIf) {
			listener.enterLabeledStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLabeledStatementNoShortIf) {
			listener.exitLabeledStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatementNoShortIf) {
			return visitor.visitLabeledStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext {
		return this.getRuleContext(0, StatementExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public preIncrementExpression(): PreIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreIncrementExpressionContext);
	}
	public preDecrementExpression(): PreDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementExpressionContext);
	}
	public postIncrementExpression(): PostIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostIncrementExpressionContext);
	}
	public postDecrementExpression(): PostDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostDecrementExpressionContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_statementExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterStatementExpression) {
			listener.enterStatementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitStatementExpression) {
			listener.exitStatementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStatementExpression) {
			return visitor.visitStatementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Java20Parser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_ifThenStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterIfThenStatement) {
			listener.enterIfThenStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitIfThenStatement) {
			listener.exitIfThenStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitIfThenStatement) {
			return visitor.visitIfThenStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Java20Parser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public ELSE(): TerminalNode { return this.getToken(Java20Parser.ELSE, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_ifThenElseStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterIfThenElseStatement) {
			listener.enterIfThenElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitIfThenElseStatement) {
			listener.exitIfThenElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitIfThenElseStatement) {
			return visitor.visitIfThenElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementNoShortIfContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Java20Parser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext[];
	public statementNoShortIf(i: number): StatementNoShortIfContext;
	public statementNoShortIf(i?: number): StatementNoShortIfContext | StatementNoShortIfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementNoShortIfContext);
		} else {
			return this.getRuleContext(i, StatementNoShortIfContext);
		}
	}
	public ELSE(): TerminalNode { return this.getToken(Java20Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_ifThenElseStatementNoShortIf; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterIfThenElseStatementNoShortIf) {
			listener.enterIfThenElseStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitIfThenElseStatementNoShortIf) {
			listener.exitIfThenElseStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitIfThenElseStatementNoShortIf) {
			return visitor.visitIfThenElseStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertStatementContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(Java20Parser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_assertStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAssertStatement) {
			listener.enterAssertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAssertStatement) {
			listener.exitAssertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAssertStatement) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(Java20Parser.SWITCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public switchBlock(): SwitchBlockContext {
		return this.getRuleContext(0, SwitchBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java20Parser.LBRACE, 0); }
	public switchRule(): SwitchRuleContext[];
	public switchRule(i: number): SwitchRuleContext;
	public switchRule(i?: number): SwitchRuleContext | SwitchRuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchRuleContext);
		} else {
			return this.getRuleContext(i, SwitchRuleContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(Java20Parser.RBRACE, 0); }
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COLON);
		} else {
			return this.getToken(Java20Parser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_switchBlock; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterSwitchBlock) {
			listener.enterSwitchBlock(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitSwitchBlock) {
			listener.exitSwitchBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlock) {
			return visitor.visitSwitchBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchRuleContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext {
		return this.getRuleContext(0, SwitchLabelContext);
	}
	public ARROW(): TerminalNode { return this.getToken(Java20Parser.ARROW, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_switchRule; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterSwitchRule) {
			listener.enterSwitchRule(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitSwitchRule) {
			listener.exitSwitchRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchRule) {
			return visitor.visitSwitchRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COLON);
		} else {
			return this.getToken(Java20Parser.COLON, i);
		}
	}
	public blockStatements(): BlockStatementsContext {
		return this.getRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.CASE, 0); }
	public caseConstant(): CaseConstantContext[];
	public caseConstant(i: number): CaseConstantContext;
	public caseConstant(i?: number): CaseConstantContext | CaseConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseConstantContext);
		} else {
			return this.getRuleContext(i, CaseConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseConstantContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_caseConstant; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterCaseConstant) {
			listener.enterCaseConstant(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitCaseConstant) {
			listener.exitCaseConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCaseConstant) {
			return visitor.visitCaseConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(Java20Parser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementNoShortIfContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(Java20Parser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_whileStatementNoShortIf; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterWhileStatementNoShortIf) {
			listener.enterWhileStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitWhileStatementNoShortIf) {
			listener.exitWhileStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitWhileStatementNoShortIf) {
			return visitor.visitWhileStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoStatementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(Java20Parser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(Java20Parser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_doStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public basicForStatement(): BasicForStatementContext | undefined {
		return this.tryGetRuleContext(0, BasicForStatementContext);
	}
	public enhancedForStatement(): EnhancedForStatementContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_forStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementNoShortIfContext extends ParserRuleContext {
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, BasicForStatementNoShortIfContext);
	}
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForStatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_forStatementNoShortIf; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterForStatementNoShortIf) {
			listener.enterForStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitForStatementNoShortIf) {
			listener.exitForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitForStatementNoShortIf) {
			return visitor.visitForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Java20Parser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.SEMI);
		} else {
			return this.getToken(Java20Parser.SEMI, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_basicForStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterBasicForStatement) {
			listener.enterBasicForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitBasicForStatement) {
			listener.exitBasicForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBasicForStatement) {
			return visitor.visitBasicForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementNoShortIfContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Java20Parser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.SEMI);
		} else {
			return this.getToken(Java20Parser.SEMI, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_basicForStatementNoShortIf; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterBasicForStatementNoShortIf) {
			listener.enterBasicForStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitBasicForStatementNoShortIf) {
			listener.exitBasicForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBasicForStatementNoShortIf) {
			return visitor.visitBasicForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public statementExpressionList(): StatementExpressionListContext | undefined {
		return this.tryGetRuleContext(0, StatementExpressionListContext);
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_forInit; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	public statementExpressionList(): StatementExpressionListContext {
		return this.getRuleContext(0, StatementExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_forUpdate; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionListContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext[];
	public statementExpression(i: number): StatementExpressionContext;
	public statementExpression(i?: number): StatementExpressionContext | StatementExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementExpressionContext);
		} else {
			return this.getRuleContext(i, StatementExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_statementExpressionList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterStatementExpressionList) {
			listener.enterStatementExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitStatementExpressionList) {
			listener.exitStatementExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStatementExpressionList) {
			return visitor.visitStatementExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Java20Parser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	public COLON(): TerminalNode { return this.getToken(Java20Parser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_enhancedForStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterEnhancedForStatement) {
			listener.enterEnhancedForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitEnhancedForStatement) {
			listener.exitEnhancedForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForStatement) {
			return visitor.visitEnhancedForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementNoShortIfContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Java20Parser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	public COLON(): TerminalNode { return this.getToken(Java20Parser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_enhancedForStatementNoShortIf; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterEnhancedForStatementNoShortIf) {
			listener.enterEnhancedForStatementNoShortIf(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitEnhancedForStatementNoShortIf) {
			listener.exitEnhancedForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForStatementNoShortIf) {
			return visitor.visitEnhancedForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(Java20Parser.BREAK, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(Java20Parser.CONTINUE, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(Java20Parser.RETURN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(Java20Parser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SynchronizedStatementContext extends ParserRuleContext {
	public SYNCHRONIZED(): TerminalNode { return this.getToken(Java20Parser.SYNCHRONIZED, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_synchronizedStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterSynchronizedStatement) {
			listener.enterSynchronizedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitSynchronizedStatement) {
			listener.exitSynchronizedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSynchronizedStatement) {
			return visitor.visitSynchronizedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TRY, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public tryWithResourcesStatement(): TryWithResourcesStatementContext | undefined {
		return this.tryGetRuleContext(0, TryWithResourcesStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchesContext extends ParserRuleContext {
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_catches; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterCatches) {
			listener.enterCatches(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitCatches) {
			listener.exitCatches(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCatches) {
			return visitor.visitCatches(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(Java20Parser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public catchFormalParameter(): CatchFormalParameterContext {
		return this.getRuleContext(0, CatchFormalParameterContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_catchClause; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchFormalParameterContext extends ParserRuleContext {
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_catchFormalParameter; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterCatchFormalParameter) {
			listener.enterCatchFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitCatchFormalParameter) {
			listener.exitCatchFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCatchFormalParameter) {
			return visitor.visitCatchFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public unannClassType(): UnannClassTypeContext {
		return this.getRuleContext(0, UnannClassTypeContext);
	}
	public BITOR(): TerminalNode[];
	public BITOR(i: number): TerminalNode;
	public BITOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.BITOR);
		} else {
			return this.getToken(Java20Parser.BITOR, i);
		}
	}
	public classType(): ClassTypeContext[];
	public classType(i: number): ClassTypeContext;
	public classType(i?: number): ClassTypeContext | ClassTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassTypeContext);
		} else {
			return this.getRuleContext(i, ClassTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_catchType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(Java20Parser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryWithResourcesStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(Java20Parser.TRY, 0); }
	public resourceSpecification(): ResourceSpecificationContext {
		return this.getRuleContext(0, ResourceSpecificationContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_tryWithResourcesStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTryWithResourcesStatement) {
			listener.enterTryWithResourcesStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTryWithResourcesStatement) {
			listener.exitTryWithResourcesStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTryWithResourcesStatement) {
			return visitor.visitTryWithResourcesStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public resourceList(): ResourceListContext {
		return this.getRuleContext(0, ResourceListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_resourceSpecification; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterResourceSpecification) {
			listener.enterResourceSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitResourceSpecification) {
			listener.exitResourceSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitResourceSpecification) {
			return visitor.visitResourceSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceListContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.SEMI);
		} else {
			return this.getToken(Java20Parser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_resourceList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterResourceList) {
			listener.enterResourceList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitResourceList) {
			listener.exitResourceList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitResourceList) {
			return visitor.visitResourceList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public variableAccess(): VariableAccessContext | undefined {
		return this.tryGetRuleContext(0, VariableAccessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_resource; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableAccessContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_variableAccess; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterVariableAccess) {
			listener.enterVariableAccess(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitVariableAccess) {
			listener.exitVariableAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableAccess) {
			return visitor.visitVariableAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(Java20Parser.YIELD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java20Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_yieldStatement; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	public typePattern(): TypePatternContext {
		return this.getRuleContext(0, TypePatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_pattern; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPattern) {
			listener.enterPattern(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPattern) {
			listener.exitPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPattern) {
			return visitor.visitPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePatternContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typePattern; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypePattern) {
			listener.enterTypePattern(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypePattern) {
			listener.exitTypePattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypePattern) {
			return visitor.visitTypePattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_expression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public primaryNoNewArray(): PrimaryNoNewArrayContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArrayContext);
	}
	public arrayCreationExpression(): ArrayCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreationExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_primary; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArrayContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public pNNA(): PNNAContext | undefined {
		return this.tryGetRuleContext(0, PNNAContext);
	}
	public classLiteral(): ClassLiteralContext | undefined {
		return this.tryGetRuleContext(0, ClassLiteralContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.THIS, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.DOT);
		} else {
			return this.getToken(Java20Parser.DOT, i);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.RPAREN, 0); }
	public unqualifiedClassInstanceCreationExpression(): UnqualifiedClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnqualifiedClassInstanceCreationExpressionContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public arrayCreationExpression(): ArrayCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreationExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SUPER, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.RBRACK, 0); }
	public arrayCreationExpressionWithInitializer(): ArrayCreationExpressionWithInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreationExpressionWithInitializerContext);
	}
	public methodName(): MethodNameContext | undefined {
		return this.tryGetRuleContext(0, MethodNameContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.COLONCOLON, 0); }
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.NEW, 0); }
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_primaryNoNewArray; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPrimaryNoNewArray) {
			listener.enterPrimaryNoNewArray(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPrimaryNoNewArray) {
			listener.exitPrimaryNoNewArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray) {
			return visitor.visitPrimaryNoNewArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PNNAContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public unqualifiedClassInstanceCreationExpression(): UnqualifiedClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnqualifiedClassInstanceCreationExpressionContext);
	}
	public pNNA(): PNNAContext | undefined {
		return this.tryGetRuleContext(0, PNNAContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.LBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.RBRACK, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.RPAREN, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.COLONCOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_pNNA; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPNNA) {
			listener.enterPNNA(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPNNA) {
			listener.exitPNNA(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPNNA) {
			return visitor.visitPNNA(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassLiteralContext extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode { return this.getToken(Java20Parser.DOT, 0); }
	public CLASS(): TerminalNode { return this.getToken(Java20Parser.CLASS, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.LBRACK);
		} else {
			return this.getToken(Java20Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.RBRACK);
		} else {
			return this.getToken(Java20Parser.RBRACK, i);
		}
	}
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.BOOLEAN, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classLiteral; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassLiteral) {
			listener.enterClassLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassLiteral) {
			listener.exitClassLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassLiteral) {
			return visitor.visitClassLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpressionContext extends ParserRuleContext {
	public unqualifiedClassInstanceCreationExpression(): UnqualifiedClassInstanceCreationExpressionContext {
		return this.getRuleContext(0, UnqualifiedClassInstanceCreationExpressionContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classInstanceCreationExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassInstanceCreationExpression) {
			listener.enterClassInstanceCreationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassInstanceCreationExpression) {
			listener.exitClassInstanceCreationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression) {
			return visitor.visitClassInstanceCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnqualifiedClassInstanceCreationExpressionContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(Java20Parser.NEW, 0); }
	public classOrInterfaceTypeToInstantiate(): ClassOrInterfaceTypeToInstantiateContext {
		return this.getRuleContext(0, ClassOrInterfaceTypeToInstantiateContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unqualifiedClassInstanceCreationExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnqualifiedClassInstanceCreationExpression) {
			listener.enterUnqualifiedClassInstanceCreationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnqualifiedClassInstanceCreationExpression) {
			listener.exitUnqualifiedClassInstanceCreationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnqualifiedClassInstanceCreationExpression) {
			return visitor.visitUnqualifiedClassInstanceCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeToInstantiateContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.DOT);
		} else {
			return this.getToken(Java20Parser.DOT, i);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_classOrInterfaceTypeToInstantiate; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterClassOrInterfaceTypeToInstantiate) {
			listener.enterClassOrInterfaceTypeToInstantiate(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitClassOrInterfaceTypeToInstantiate) {
			listener.exitClassOrInterfaceTypeToInstantiate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceTypeToInstantiate) {
			return visitor.visitClassOrInterfaceTypeToInstantiate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public OACA(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.OACA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterTypeArgumentsOrDiamond) {
			listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitTypeArgumentsOrDiamond) {
			listener.exitTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreationExpressionContext extends ParserRuleContext {
	public arrayCreationExpressionWithoutInitializer(): ArrayCreationExpressionWithoutInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreationExpressionWithoutInitializerContext);
	}
	public arrayCreationExpressionWithInitializer(): ArrayCreationExpressionWithInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreationExpressionWithInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_arrayCreationExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterArrayCreationExpression) {
			listener.enterArrayCreationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitArrayCreationExpression) {
			listener.exitArrayCreationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayCreationExpression) {
			return visitor.visitArrayCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreationExpressionWithoutInitializerContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(Java20Parser.NEW, 0); }
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public dimExprs(): DimExprsContext {
		return this.getRuleContext(0, DimExprsContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_arrayCreationExpressionWithoutInitializer; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterArrayCreationExpressionWithoutInitializer) {
			listener.enterArrayCreationExpressionWithoutInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitArrayCreationExpressionWithoutInitializer) {
			listener.exitArrayCreationExpressionWithoutInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayCreationExpressionWithoutInitializer) {
			return visitor.visitArrayCreationExpressionWithoutInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreationExpressionWithInitializerContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(Java20Parser.NEW, 0); }
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public dims(): DimsContext {
		return this.getRuleContext(0, DimsContext);
	}
	public arrayInitializer(): ArrayInitializerContext {
		return this.getRuleContext(0, ArrayInitializerContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_arrayCreationExpressionWithInitializer; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterArrayCreationExpressionWithInitializer) {
			listener.enterArrayCreationExpressionWithInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitArrayCreationExpressionWithInitializer) {
			listener.exitArrayCreationExpressionWithInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayCreationExpressionWithInitializer) {
			return visitor.visitArrayCreationExpressionWithInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprsContext extends ParserRuleContext {
	public dimExpr(): DimExprContext[];
	public dimExpr(i: number): DimExprContext;
	public dimExpr(i?: number): DimExprContext | DimExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimExprContext);
		} else {
			return this.getRuleContext(i, DimExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_dimExprs; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterDimExprs) {
			listener.enterDimExprs(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitDimExprs) {
			listener.exitDimExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitDimExprs) {
			return visitor.visitDimExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Java20Parser.LBRACK, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Java20Parser.RBRACK, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_dimExpr; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterDimExpr) {
			listener.enterDimExpr(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitDimExpr) {
			listener.exitDimExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitDimExpr) {
			return visitor.visitDimExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccessContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(Java20Parser.LBRACK, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Java20Parser.RBRACK, 0); }
	public primaryNoNewArray(): PrimaryNoNewArrayContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArrayContext);
	}
	public arrayCreationExpressionWithInitializer(): ArrayCreationExpressionWithInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreationExpressionWithInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_arrayAccess; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterArrayAccess) {
			listener.enterArrayAccess(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitArrayAccess) {
			listener.exitArrayAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayAccess) {
			return visitor.visitArrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccessContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.DOT);
		} else {
			return this.getToken(Java20Parser.DOT, i);
		}
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SUPER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_fieldAccess; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterFieldAccess) {
			listener.enterFieldAccess(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitFieldAccess) {
			listener.exitFieldAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFieldAccess) {
			return visitor.visitFieldAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocationContext extends ParserRuleContext {
	public methodName(): MethodNameContext | undefined {
		return this.tryGetRuleContext(0, MethodNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.DOT);
		} else {
			return this.getToken(Java20Parser.DOT, i);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_methodInvocation; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterMethodInvocation) {
			listener.enterMethodInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitMethodInvocation) {
			listener.exitMethodInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodInvocation) {
			return visitor.visitMethodInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_argumentList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReferenceContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public COLONCOLON(): TerminalNode { return this.getToken(Java20Parser.COLONCOLON, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SUPER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DOT, 0); }
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.NEW, 0); }
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_methodReference; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterMethodReference) {
			listener.enterMethodReference(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitMethodReference) {
			listener.exitMethodReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodReference) {
			return visitor.visitMethodReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public pfE(): PfEContext | undefined {
		return this.tryGetRuleContext(0, PfEContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PfEContext extends ParserRuleContext {
	public INC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.INC, 0); }
	public pfE(): PfEContext | undefined {
		return this.tryGetRuleContext(0, PfEContext);
	}
	public DEC(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DEC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_pfE; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPfE) {
			listener.enterPfE(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPfE) {
			listener.exitPfE(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPfE) {
			return visitor.visitPfE(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostIncrementExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public INC(): TerminalNode { return this.getToken(Java20Parser.INC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_postIncrementExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostDecrementExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public DEC(): TerminalNode { return this.getToken(Java20Parser.DEC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_postDecrementExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPostDecrementExpression) {
			listener.enterPostDecrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPostDecrementExpression) {
			listener.exitPostDecrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPostDecrementExpression) {
			return visitor.visitPostDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public preIncrementExpression(): PreIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreIncrementExpressionContext);
	}
	public preDecrementExpression(): PreDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementExpressionContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.ADD, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public SUB(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SUB, 0); }
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionNotPlusMinusContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreIncrementExpressionContext extends ParserRuleContext {
	public INC(): TerminalNode { return this.getToken(Java20Parser.INC, 0); }
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_preIncrementExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreDecrementExpressionContext extends ParserRuleContext {
	public DEC(): TerminalNode { return this.getToken(Java20Parser.DEC, 0); }
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_preDecrementExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterPreDecrementExpression) {
			listener.enterPreDecrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitPreDecrementExpression) {
			listener.exitPreDecrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPreDecrementExpression) {
			return visitor.visitPreDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionNotPlusMinusContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.TILDE, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.BANG, 0); }
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	public switchExpression(): SwitchExpressionContext | undefined {
		return this.tryGetRuleContext(0, SwitchExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_unaryExpressionNotPlusMinus; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterUnaryExpressionNotPlusMinus) {
			listener.enterUnaryExpressionNotPlusMinus(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitUnaryExpressionNotPlusMinus) {
			listener.exitUnaryExpressionNotPlusMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpressionNotPlusMinus) {
			return visitor.visitUnaryExpressionNotPlusMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionNotPlusMinusContext);
	}
	public additionalBound(): AdditionalBoundContext[];
	public additionalBound(i: number): AdditionalBoundContext;
	public additionalBound(i?: number): AdditionalBoundContext | AdditionalBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionalBoundContext);
		} else {
			return this.getRuleContext(i, AdditionalBoundContext);
		}
	}
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_castExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeExpressionContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	public additiveExpression(): AdditiveExpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveExpressionContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.LT);
		} else {
			return this.getToken(Java20Parser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.GT);
		} else {
			return this.getToken(Java20Parser.GT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	public relationalExpression(): RelationalExpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalExpressionContext);
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.GT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.GE, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.INSTANCEOF, 0); }
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public equalityExpression(): EqualityExpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityExpressionContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.NOTEQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	public andExpression(): AndExpressionContext | undefined {
		return this.tryGetRuleContext(0, AndExpressionContext);
	}
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.BITAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_andExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext {
		return this.getRuleContext(0, AndExpressionContext);
	}
	public exclusiveOrExpression(): ExclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveOrExpressionContext);
	}
	public CARET(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.CARET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_exclusiveOrExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterExclusiveOrExpression) {
			listener.enterExclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitExclusiveOrExpression) {
			listener.exitExclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExclusiveOrExpression) {
			return visitor.visitExclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		return this.getRuleContext(0, ExclusiveOrExpressionContext);
	}
	public inclusiveOrExpression(): InclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, InclusiveOrExpressionContext);
	}
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.BITOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_inclusiveOrExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterInclusiveOrExpression) {
			listener.enterInclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitInclusiveOrExpression) {
			listener.exitInclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInclusiveOrExpression) {
			return visitor.visitInclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		return this.getRuleContext(0, InclusiveOrExpressionContext);
	}
	public conditionalAndExpression(): ConditionalAndExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalAndExpressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_conditionalAndExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterConditionalAndExpression) {
			listener.enterConditionalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitConditionalAndExpression) {
			listener.exitConditionalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConditionalAndExpression) {
			return visitor.visitConditionalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOrExpressionContext extends ParserRuleContext {
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		return this.getRuleContext(0, ConditionalAndExpressionContext);
	}
	public conditionalOrExpression(): ConditionalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalOrExpressionContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_conditionalOrExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterConditionalOrExpression) {
			listener.enterConditionalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitConditionalOrExpression) {
			listener.exitConditionalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConditionalOrExpression) {
			return visitor.visitConditionalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getRuleContext(0, ConditionalOrExpressionContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.QUESTION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.COLON, 0); }
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_assignmentExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public leftHandSide(): LeftHandSideContext {
		return this.getRuleContext(0, LeftHandSideContext);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_assignment; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LeftHandSideContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_leftHandSide; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLeftHandSide) {
			listener.enterLeftHandSide(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLeftHandSide) {
			listener.exitLeftHandSide(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLeftHandSide) {
			return visitor.visitLeftHandSide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.MOD_ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.SUB_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.LSHIFT_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.URSHIFT_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.AND_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.XOR_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.OR_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public lambdaParameters(): LambdaParametersContext {
		return this.getRuleContext(0, LambdaParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(Java20Parser.ARROW, 0); }
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_lambdaExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.RPAREN, 0); }
	public lambdaParameterList(): LambdaParameterListContext | undefined {
		return this.tryGetRuleContext(0, LambdaParameterListContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_lambdaParameters; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLambdaParameters) {
			listener.enterLambdaParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLambdaParameters) {
			listener.exitLambdaParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameters) {
			return visitor.visitLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParameterListContext extends ParserRuleContext {
	public lambdaParameter(): LambdaParameterContext[];
	public lambdaParameter(i: number): LambdaParameterContext;
	public lambdaParameter(i?: number): LambdaParameterContext | LambdaParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LambdaParameterContext);
		} else {
			return this.getRuleContext(i, LambdaParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java20Parser.COMMA);
		} else {
			return this.getToken(Java20Parser.COMMA, i);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_lambdaParameterList; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLambdaParameterList) {
			listener.enterLambdaParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLambdaParameterList) {
			listener.exitLambdaParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameterList) {
			return visitor.visitLambdaParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParameterContext extends ParserRuleContext {
	public lambdaParameterType(): LambdaParameterTypeContext | undefined {
		return this.tryGetRuleContext(0, LambdaParameterTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public variableArityParameter(): VariableArityParameterContext | undefined {
		return this.tryGetRuleContext(0, VariableArityParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_lambdaParameter; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLambdaParameter) {
			listener.enterLambdaParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLambdaParameter) {
			listener.exitLambdaParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameter) {
			return visitor.visitLambdaParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParameterTypeContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(Java20Parser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_lambdaParameterType; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLambdaParameterType) {
			listener.enterLambdaParameterType(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLambdaParameterType) {
			listener.exitLambdaParameterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameterType) {
			return visitor.visitLambdaParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_lambdaBody; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterLambdaBody) {
			listener.enterLambdaBody(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitLambdaBody) {
			listener.exitLambdaBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchExpressionContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(Java20Parser.SWITCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java20Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java20Parser.RPAREN, 0); }
	public switchBlock(): SwitchBlockContext {
		return this.getRuleContext(0, SwitchBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_switchExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterSwitchExpression) {
			listener.enterSwitchExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitSwitchExpression) {
			listener.exitSwitchExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchExpression) {
			return visitor.visitSwitchExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java20Parser.RULE_constantExpression; }
	// @Override
	public enterRule(listener: Java20ParserListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Java20ParserListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


