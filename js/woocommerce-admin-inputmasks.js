jQuery(document).ready(function(e){    
    handlePriceMasks();
});

function getPriceInputs(woocommerceVariationBoxes){
    var inputs=[];
    for(var i=0;i<woocommerceVariationBoxes;i++){
        inputs.push(jQuery('input[name="variable_regular_price['+i+']"]'));
        inputs.push(jQuery('input[name="variable_price['+i+']"]'));
        inputs.push(jQuery('input[name="variable_sale_price['+i+']"]'));
    }
    inputs.push(jQuery('input[name="_regular_price"]'));
    inputs.push(jQuery('input[name="_sale_price"]'));
    return inputs;
}

function cloneInputs(inputs){
    var editedPriceInputs=[];
    
    for(var i in inputs){
        var inputInfs = new Object();
        
        if(!inputs[i].hasClass('original')){
            inputs[i].addClass('original');
            inputs[i].addClass('id'+i);
            inputs[i].attr('bound','id'+i);
            inputs[i].addClass('priceInput');
			//inputs[i].attr('type','text');
            
            var originalPriceInput = inputs[i];
            var cloned = originalPriceInput.clone();
			cloned.attr('type','text');
            cloned.removeClass('original');
            cloned.addClass('cloned');
            cloned.removeAttr('name');
            cloned.insertAfter(originalPriceInput);
            inputInfs.original = originalPriceInput;
            inputInfs.cloned = cloned;
        }
        
        editedPriceInputs[i]=inputInfs;
    }
    return editedPriceInputs;
}

String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
};

/*function configMasks(editedPriceInputs){    
   function onClonedKeyup(cloned,original){
        var unMasked = cloned.unmask();
		
		var editedValue = unMasked.splice(unMasked.length-admin_inputmasks_vars.woocommerce_price_num_decimals,0,'.')
		original.attr('value',editedValue)
        //original.attr('value',unMasked)
    }
    
    for(var i in editedPriceInputs){
        var cloned = editedPriceInputs[i].cloned;
        var originalPriceInput = editedPriceInputs[i].original;
        
        if(cloned){
			//alert(admin_inputmasks_vars.woocommerce_price_num_decimals)
            cloned.priceFormat({
                thousandsSeparator:admin_inputmasks_vars.woocommerce_price_thousand_sep,
                centsSeparator:admin_inputmasks_vars.woocommerce_price_decimal_sep,
				centsLimit: admin_inputmasks_vars.woocommerce_price_num_decimals,
                prefix:''
            }); 

            cloned.on('keyup',function(){
                var bound = jQuery(this).attr('bound');
                var originalPriceInput = jQuery('.priceInput[bound="'+bound+'"]').not(jQuery(this))           
                onClonedKeyup(jQuery(this),originalPriceInput);                        
            })        
        }
    }
}*/

function configMasks(editedPriceInputs){    
    function onClonedKeyup(cloned,original){
        var unMasked = cloned.autoNumeric('get')
        original.attr('value',unMasked)
    }
    
    for(var i in editedPriceInputs){
        var cloned = editedPriceInputs[i].cloned;
        var originalPriceInput = editedPriceInputs[i].original;
        
        if(cloned){
            cloned.autoNumeric('init',{
                aSep:admin_inputmasks_vars.woocommerce_price_thousand_sep,
                aDec:admin_inputmasks_vars.woocommerce_price_decimal_sep,
                aSign:'',
                mDec:admin_inputmasks_vars.woocommerce_price_num_decimals,
                pSign:''
            });

            cloned.on('keyup',function(){
                var bound = jQuery(this).attr('bound');
                var originalPriceInput = jQuery('.priceInput[bound="'+bound+'"]').not(jQuery(this));
                onClonedKeyup(jQuery(this),originalPriceInput);
            });
        }
    }
}

/**
 * Gerencia as mascaras dos inputs (preco, datas, etc...)
 */
function handlePriceMasks(){
    
    function realHandlePriceMasks(){        
        var woocommerceVariation=jQuery(".woocommerce_variation.wc-metabox");        
        var originalPriceinputs=getPriceInputs(woocommerceVariation.length);
        var editedPriceInputs = cloneInputs(originalPriceinputs);
        jQuery('.priceInput.original').hide();
        configMasks(editedPriceInputs);
    }
    
    jQuery(".woocommerce_variation.wc-metabox").livequery(function(){
       realHandlePriceMasks();
    });
    realHandlePriceMasks();
    
}