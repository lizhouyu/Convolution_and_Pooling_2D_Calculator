const input_height = document.getElementById('input_height');
const input_width = document.getElementById('input_width');
const input_kernel_size = document.getElementById('input_kernel_size');
const input_stride = document.getElementById('input_stride');
const input_padding = document.getElementById('input_padding');
const btn_conv = document.getElementById('btn_conv');
const btn_pool = document.getElementById('btn_pool');
const btn_convTrans = document.getElementById('btn_convTrans');
const input_output_height = document.getElementById('input_output_height');
const input_output_width = document.getElementById('input_output_width');
const btn_refill = document.getElementById('btn_refill');
const btn_clear = document.getElementById('btn_clear');

function btnConvClick() {
    var height = parseInt(input_height.value);
    var width = parseInt(input_width.value);
    var kernel_size = parseInt(input_kernel_size.value);
    var stride = parseInt(input_stride.value);
    var padding = parseInt(input_padding.value);
    if (height < 0 || width < 0 || kernel_size < 0 || stride < 0 || padding < 0) 
    { 
        alert("Wrong parameters: parameters should not be negtive!"); 
    }
    else 
    {
        var output_height = Math.floor((height + 2 * padding - kernel_size) / stride) + 1;
        var output_width = Math.floor((width + 2 * padding - kernel_size) / stride) + 1;
        if (output_height <= 0 || output_width <= 0)
        {
            alert("Wrong Parameters: output is not positive!");
        } 
        else {
            input_output_height.value = output_height;
            input_output_width.value = output_width;
        }
    }

}

function btnPoolClick() {
    var height = parseInt(input_height.value);
    var width = parseInt(input_width.value);
    var kernel_size = parseInt(input_kernel_size.value);
    var stride = parseInt(input_stride.value);
    var padding = parseInt(input_padding.value);
    if (height < 0 || width < 0 || kernel_size < 0 || stride < 0 || padding < 0) 
    { 
        alert("Wrong parameters: parameters should not be negtive!"); 
    }
    else 
    {
        var output_height = Math.floor((height + 2 * padding - kernel_size) / stride) + 1;
        var output_width = Math.floor((width + 2 * padding - kernel_size) / stride) + 1;
        if (output_height <= 0 || output_width <= 0) alert("Wrong Parameters: output is not positive.");
        else {
            input_output_height.value = output_height;
            input_output_width.value = output_width;
        }
    }

}

function btnConvTransClick() {
    var height = parseInt(input_height.value);
    var width = parseInt(input_width.value);
    var kernel_size = parseInt(input_kernel_size.value);
    var stride = parseInt(input_stride.value);
    var padding = parseInt(input_padding.value);
    if (height < 0 || width < 0 || kernel_size < 0 || stride < 0 || padding < 0) 
    { 
        alert("Wrong parameters: parameters should not be negtive!"); 
    }
    else
    {
        var output_height = (height - 1) * stride - 2 * padding + kernel_size;
        var output_width = (width - 1) * stride - 2 * padding + kernel_size;
        input_output_height.value = output_height;
        input_output_width.value = output_width;
    }
}

function btnRefillClick() {
    if(input_output_height.value.length > 0 && input_output_width.value.length>0)
    {
        input_height.value = input_output_height.value;
        input_width.value = input_output_width.value;
        input_output_height.value = "";
        input_output_width.value = "";
    }
    else
    {
        alert("Cannot refill with empty value");
    }
}

function btnClearClick() {
    if(confirm("Are you sure to clear all the values?"))
    {
        input_height.value = "";
        input_width.value = "";
        input_kernel_size.value = "";
        input_stride.value = "";
        input_padding.value = "";
        input_output_height.value = "";
        input_output_width.value = "";
    }
}

btn_conv.addEventListener('click', btnConvClick);
btn_pool.addEventListener('click', btnPoolClick);
btn_convTrans.addEventListener('click', btnConvTransClick);
btn_refill.addEventListener('click', btnRefillClick);
btn_clear.addEventListener('click', btnClearClick);