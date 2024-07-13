
function deleteProduct(id){
    const result = confirm("Do you really want to delete the product?");
    if(result){
        fetch("/delete-product/"+id, {
            method: "POST"
        }).then( res => {
            if(res.ok){
                location.reload();
            }
        })

    }
}