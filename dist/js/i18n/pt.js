/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/pt",[],function(){return{errorLoading:function(){return"Os resultados não puderam ser carregados."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Por favor apague "+t+" ";return n+=t!=1?"caracteres":"carácter",n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Introduza "+t+" ou mais caracteres";return n},loadingMore:function(){return"A carregar mais resultados…"},maximumSelected:function(e){var t="Apenas pode seleccionar "+e.maximum+" ";return t+=e.maximum!=1?"itens":"item",t},noResults:function(){return"Sem resultados"},searching:function(){return"A procurar…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();