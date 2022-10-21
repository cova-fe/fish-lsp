import Parser from "web-tree-sitter";
import { Analyzer } from "./analyze";
import { Completion } from "./completion";
import { InitializeParams, ServerCapabilities, TextDocumentPositionParams, Connection, CompletionList, CompletionItem } from "vscode-languageserver/node";
import { DocumentManager } from './document';
export default class FishServer {
    static initialize(connection: Connection, { capabilities }: InitializeParams): Promise<FishServer>;
    private connection;
    private console;
    private parser;
    private analyzer;
    private docs;
    private completion;
    constructor(connection: Connection, parser: Parser, analyzer: Analyzer, docs: DocumentManager, completion: Completion);
    capabilities(): ServerCapabilities;
    register(): void;
    onCompletion(completionParams: TextDocumentPositionParams): Promise<CompletionList | null>;
    onCompletionResolve(item: CompletionItem): Promise<CompletionItem>;
}
//# sourceMappingURL=server.d.ts.map