grammar C4Iac

entry Model:
    (persons+=Person | greetings+=Greeting )*
    SoftwareSystem?
    ;

Person:
    'person' name=ID 
    'description' description=STRING
    'location' location=Location
    ;

SoftwareSystem:
    'softwaresystem' name=ID '{' 
        'description' description=STRING
        'location' location=Location
        containers+=Container+
    '}'
    ;

Container:
    'container' name=ID '{'
       'description' description=STRING 
       'technology' technology=STRING
    '}'
    ;    

Greeting:
    'Hello' person=[Person:ID] '!';


terminal Location: 'internal' | 'external';

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal STRING: /"[^"]*"|'[^']*'/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
