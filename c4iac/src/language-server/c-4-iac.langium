grammar C4Iac

entry Model:
    (greetings+=Greeting )*
    SoftwareSystem+
    ;

Person:
    'person' name=ID '{'
    'description' description=STRING
    'location' location=Location
    '}'
    ;

SoftwareSystem:
    'softwaresystem' name=ID '{' 
        'description' description=STRING
        'location' location=Location
        'version' version=STRING
        persons+=Person*
        containers+=Container*
    '}'
    ;

Container:
    'container' name=ID '{'
       'description' description=STRING 
       'technology' technology=STRING
        'version' version=STRING
        easts+=East+
        relationships+=RelationShip*
    '}'
    ;    

East:
    'east' name=ID 'port' port=INT 'protocol' ('tcp'|'udp'|'mcast') 
    ;


RelationShip:
        'relation' name=ID '{'
           'description' description=STRING 
           relationtype=RelationType            
        '}'
    ;

RelationType:
        North | South | West 
    ;

North: 
    'north' name=ID 'port' port=INT 'protocol' ('tcp'|'udp'|'mcast') 'from' (person=[Person:ID] /*| softwaresystem=[SoftwareSystem:ID]*/)
    ;

South: 
    'south' name=ID 'port' port=INT 'protocol' ('tcp'|'udp'|'mcast') 'to' to=[SoftwareSystem:ID]
    ;

West:
    'west' name=ID 'to' eastingress=[East:ID]
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
