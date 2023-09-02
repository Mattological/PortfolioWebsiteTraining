import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css'
import '../styles/utils.css';
/*basically we are importing css files in the main.js and then importing the m
ain.js as a script into our html file*/
//we will have the utils.css last as it needs highest priority
/*note: the modern normalize styles folder is imported first and the utils css imported last
this tells me that 
1) stylesheets for defaults are imported first and this allows for customisations to override them where they overlap
2)stylesheets with high customization imported last so that they are not overrided*/