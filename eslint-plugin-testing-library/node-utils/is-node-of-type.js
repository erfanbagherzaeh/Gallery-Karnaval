"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunctionExpression = exports.isReturnStatement = exports.isProperty = exports.isObjectPattern = exports.isObjectExpression = exports.isNewExpression = exports.isMemberExpression = exports.isLiteral = exports.isJSXAttribute = exports.isImportSpecifier = exports.isImportNamespaceSpecifier = exports.isImportDefaultSpecifier = exports.isImportDeclaration = exports.isSequenceExpression = exports.isAssignmentExpression = exports.isVariableDeclaration = exports.isExpressionStatement = exports.isCallExpression = exports.isBlockStatement = exports.isArrowFunctionExpression = exports.isArrayExpression = void 0;
const utils_1 = require("@typescript-eslint/utils");
exports.isArrayExpression = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.ArrayExpression);
exports.isArrowFunctionExpression = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.ArrowFunctionExpression);
exports.isBlockStatement = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.BlockStatement);
exports.isCallExpression = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.CallExpression);
exports.isExpressionStatement = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.ExpressionStatement);
exports.isVariableDeclaration = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.VariableDeclaration);
exports.isAssignmentExpression = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.AssignmentExpression);
exports.isSequenceExpression = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.SequenceExpression);
exports.isImportDeclaration = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.ImportDeclaration);
exports.isImportDefaultSpecifier = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.ImportDefaultSpecifier);
exports.isImportNamespaceSpecifier = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.ImportNamespaceSpecifier);
exports.isImportSpecifier = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.ImportSpecifier);
exports.isJSXAttribute = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.JSXAttribute);
exports.isLiteral = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.Literal);
exports.isMemberExpression = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.MemberExpression);
exports.isNewExpression = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.NewExpression);
exports.isObjectExpression = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.ObjectExpression);
exports.isObjectPattern = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.ObjectPattern);
exports.isProperty = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.Property);
exports.isReturnStatement = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.ReturnStatement);
exports.isFunctionExpression = utils_1.ASTUtils.isNodeOfType(utils_1.AST_NODE_TYPES.FunctionExpression);