# C4IAC
C4 Model for IaC in CICD pipelines

## Overview
This DSL is an implementation of the [C4 model](https://c4model.com) 

## Elements and relationships

| Element type | Parent	| Properties|
|--------------|--------|-----------|
|Person	|None |	 Name* <br/>Description <br/>Location (Internal or External)|
|Software System	|None	| Name* <br/>Description <br/>Location (Internal or External) <br/>The set of containers that make up the software system|
|Container	|A software system	| Name* <br/>Description <br/>Technology <br/>The set of components within the container|
|Component	|A container	| Name* <br/>Description <br/>Technology <br/>The set of code elements (e.g. classes, interfaces, etc) that the component is implemented by|
|Code Element	|A component|	Name* Description Fully qualified type|
|Relationship**	||Description  <br/>Technology|
