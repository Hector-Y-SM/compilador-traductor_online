// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ArrayInitVisitor from './ArrayInitVisitor.js';

const serializedATN = [4,1,12,41,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,0,1,0,1,1,4,1,17,8,1,11,1,12,1,18,1,1,4,1,22,8,1,11,1,12,1,
23,3,1,26,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,3,4,39,8,4,1,4,
0,0,5,0,2,4,6,8,0,0,40,0,10,1,0,0,0,2,25,1,0,0,0,4,27,1,0,0,0,6,30,1,0,0,
0,8,38,1,0,0,0,10,11,5,1,0,0,11,12,5,2,0,0,12,13,3,2,1,0,13,14,5,3,0,0,14,
1,1,0,0,0,15,17,3,4,2,0,16,15,1,0,0,0,17,18,1,0,0,0,18,16,1,0,0,0,18,19,
1,0,0,0,19,26,1,0,0,0,20,22,3,6,3,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,
0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,16,1,0,0,0,25,21,1,0,0,0,26,3,1,0,0,
0,27,28,5,5,0,0,28,29,5,9,0,0,29,5,1,0,0,0,30,31,5,5,0,0,31,32,5,9,0,0,32,
33,5,4,0,0,33,34,3,8,4,0,34,7,1,0,0,0,35,39,5,10,0,0,36,39,5,11,0,0,37,39,
5,9,0,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,39,9,1,0,0,0,4,18,23,25,
38];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ArrayInitParser extends antlr4.Parser {

    static grammarFileName = "ArrayInit.g4";
    static literalNames = [ null, "'TPG'", "'{'", "'}'", "'='", null, "'int'", 
                            "'float'", "'char'" ];
    static symbolicNames = [ null, null, null, null, null, "PR", "INT", 
                             "FLOAT", "CHAR", "ID", "NUM", "DEC", "WS" ];
    static ruleNames = [ "init", "contenido", "declaraciones", "asignaciones", 
                         "valores" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ArrayInitParser.ruleNames;
        this.literalNames = ArrayInitParser.literalNames;
        this.symbolicNames = ArrayInitParser.symbolicNames;
    }



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ArrayInitParser.RULE_init);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(ArrayInitParser.T__0);
	        this.state = 11;
	        this.match(ArrayInitParser.T__1);
	        this.state = 12;
	        this.contenido();
	        this.state = 13;
	        this.match(ArrayInitParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contenido() {
	    let localctx = new ContenidoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ArrayInitParser.RULE_contenido);
	    var _la = 0;
	    try {
	        this.state = 25;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PrintDeclaracionesContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 16; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 15;
	                this.declaraciones();
	                this.state = 18; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===5);
	            break;

	        case 2:
	            localctx = new PrintAsignacionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 20;
	                this.asignaciones();
	                this.state = 23; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===5);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaraciones() {
	    let localctx = new DeclaracionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ArrayInitParser.RULE_declaraciones);
	    try {
	        localctx = new IndefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(ArrayInitParser.PR);
	        this.state = 28;
	        this.match(ArrayInitParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignaciones() {
	    let localctx = new AsignacionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ArrayInitParser.RULE_asignaciones);
	    try {
	        localctx = new DefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(ArrayInitParser.PR);
	        this.state = 31;
	        this.match(ArrayInitParser.ID);
	        this.state = 32;
	        this.match(ArrayInitParser.T__3);
	        this.state = 33;
	        this.valores();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valores() {
	    let localctx = new ValoresContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ArrayInitParser.RULE_valores);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            localctx = new NumeroContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.match(ArrayInitParser.NUM);
	            break;
	        case 11:
	            localctx = new DecimalContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.match(ArrayInitParser.DEC);
	            break;
	        case 9:
	            localctx = new IdContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.match(ArrayInitParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ArrayInitParser.EOF = antlr4.Token.EOF;
ArrayInitParser.T__0 = 1;
ArrayInitParser.T__1 = 2;
ArrayInitParser.T__2 = 3;
ArrayInitParser.T__3 = 4;
ArrayInitParser.PR = 5;
ArrayInitParser.INT = 6;
ArrayInitParser.FLOAT = 7;
ArrayInitParser.CHAR = 8;
ArrayInitParser.ID = 9;
ArrayInitParser.NUM = 10;
ArrayInitParser.DEC = 11;
ArrayInitParser.WS = 12;

ArrayInitParser.RULE_init = 0;
ArrayInitParser.RULE_contenido = 1;
ArrayInitParser.RULE_declaraciones = 2;
ArrayInitParser.RULE_asignaciones = 3;
ArrayInitParser.RULE_valores = 4;

class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_init;
    }

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContenidoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_contenido;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrintDeclaracionesContext extends ContenidoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	declaraciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionesContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionesContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitPrintDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.PrintDeclaracionesContext = PrintDeclaracionesContext;

class PrintAsignacionContext extends ContenidoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	asignaciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AsignacionesContext);
	    } else {
	        return this.getTypedRuleContext(AsignacionesContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitPrintAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.PrintAsignacionContext = PrintAsignacionContext;

class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_declaraciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IndefinidoContext extends DeclaracionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PR() {
	    return this.getToken(ArrayInitParser.PR, 0);
	};

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitIndefinido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.IndefinidoContext = IndefinidoContext;

class AsignacionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_asignaciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DefinidoContext extends AsignacionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PR() {
	    return this.getToken(ArrayInitParser.PR, 0);
	};

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	valores() {
	    return this.getTypedRuleContext(ValoresContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitDefinido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.DefinidoContext = DefinidoContext;

class ValoresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_valores;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NumeroContext extends ValoresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(ArrayInitParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.NumeroContext = NumeroContext;

class IdContext extends ValoresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.IdContext = IdContext;

class DecimalContext extends ValoresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEC() {
	    return this.getToken(ArrayInitParser.DEC, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitDecimal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.DecimalContext = DecimalContext;


ArrayInitParser.InitContext = InitContext; 
ArrayInitParser.ContenidoContext = ContenidoContext; 
ArrayInitParser.DeclaracionesContext = DeclaracionesContext; 
ArrayInitParser.AsignacionesContext = AsignacionesContext; 
ArrayInitParser.ValoresContext = ValoresContext; 
