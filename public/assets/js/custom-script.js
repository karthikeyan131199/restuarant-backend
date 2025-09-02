$(document).on('click', '.destroy', function (event) {
    var url     = $(this).attr('data-route');
    var type    = "single";
    $.confirm( {
        columnClass: 'small', containerFluid: true,
        title: 'Are you sure?', content: 'Are you sure want to delete this entry?', 
        type: 'blue',
        typeAnimated: true,  buttons: {
            Delete: {
                text: 'Yes, delete it!', btnClass: 'btn-danger', action: function() {
                    $.ajax({
                        url: url,
                        type: 'DELETE',
                        data: {type:type},
                        beforeSend: function(){
                            $('#loading-image').removeClass('d-none');
                        },
                        success: function(response){
                            if (response.status) {
                                toastr.success(response.message);
                            } else {
                                toastr.error(response.message);
                            }
                            $('#scroll-vertical').DataTable().ajax.reload()
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                            toastr.error(errorThrown);
                            $('#scroll-vertical').DataTable().ajax.reload()
                        }
                    });
                }
            }, cancel: {
                text: 'Cancel', btnClass: 'btn-primary', action: function () {},
            }
        }
    });
});

$(document).on('click', '.approval', function (event) {
    var url     = $(this).attr('data-route');
    var type    = "single";
    $.confirm( {
        columnClass: 'small', containerFluid: true,
        title: 'Are you sure?', content: '',
        type: 'blue',
        typeAnimated: true, 
        buttons: {
            Delete: {
                text: 'Yes', btnClass: 'btn-primary', action: function() {
                    $.ajax({
                        url: url,
                        type: 'GET',
                        data: {type:type},
                        beforeSend: function(){
                            $('#loading-image').removeClass('d-none');
                        },
                        success: function(response){
                            if (response.status) {
                                toastr.success(response.message);
                            } else {
                                toastr.error(response.message);
                            }
                            $('#scroll-vertical').DataTable().ajax.reload()
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                            toastr.error(errorThrown);
                            $('#scroll-vertical').DataTable().ajax.reload()
                        }   
                    });
                }
            }, cancel: {
                text: 'Cancel', btnClass: 'btn-danger', action: function () {
                    $('#scroll-vertical').DataTable().ajax.reload()
                }   
            }
        }
    });
});

$(document).on('click',  '.approval-status', function (event) {
    var url     = $(this).attr('data-route');
    var tableId = $(this).attr('data-table-id');
    $.confirm( {
        columnClass: 'small', containerFluid: true,
        title: 'Are you sure?', content: '',
        type: 'blue',
        typeAnimated: true, 
        buttons: {
            Delete: {
                text: 'Yes', btnClass: 'btn-primary', action: function() {
                    $.ajax({
                        url: url,
                        type: 'POST',
                        success: function(response){
                            if (response.status) {
                                toastr.success(response.message);
                            } else {
                                toastr.error(response.message);
                            }
                            $('#scroll-vertical-pending').DataTable().ajax.reload();
                            $('#scroll-vertical-inprogress').DataTable().ajax.reload();
                            $('#scroll-vertical-completed').DataTable().ajax.reload();
                            $('#scroll-vertical-cancelled').DataTable().ajax.reload();
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                            toastr.error(errorThrown);
                            $('#'+tableId).DataTable().ajax.reload();
                        }   
                    });
                }
            }, cancel: {
                text: 'Cancel', btnClass: 'btn-danger', action: function () {
                    $('#'+tableId).DataTable().ajax.reload();
                },   
            }
        }
    });
});

$(document).on('click', '.reject', function (event) {
    var url     = $(this).attr('data-route');
    var type    = "single";
    $.confirm( {
        columnClass: 'small', containerFluid: true,
        title: 'Are you sure?', content: 'Are you sure want to reject this customer?',
        type: 'red',
        typeAnimated: true, 
        buttons: {
            Delete: {
                text: 'Yes', btnClass: 'btn-danger', action: function() {
                    $.ajax({
                        url: url,
                        type: 'GET',
                        data: {type:type},
                        beforeSend: function(){
                            $('#loading-image').removeClass('d-none');
                        },
                        success: function(response){
                            if (response.status) {
                                toastr.success(response.message);
                            } else {
                                toastr.error(response.message);
                            }
                            $('#loading-image').addClass('d-none');
                            location.reload();
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                            toastr.error(errorThrown);
                            $('#loading-image').addClass('d-none');
                            location.reload();
                        }
                    });
                }
            }, cancel: {
                text: 'Cancel', btnClass: 'btn-primary', action: function () {},
            }
        }
    });
});

$( function() {
    
    $(document).on('click', '.status', function (event) {
        var url     = $(this).attr('data-route');
        var type    = "single";
        $.confirm( {
            columnClass: 'small', containerFluid: true,
            title: 'Are you sure?', content: 'Are you sure want to change this entry?', 
            type: 'green',
            typeAnimated: true, 
             buttons: {
                Delete: {
                    text: 'Yes, change it!', btnClass: 'btn-primary', action: function() {
                        $.ajax({
                            url: url,
                            type: 'GET',
                            data: {type:type},
                            beforeSend: function(){
                                $('#loading-image').removeClass('d-none');
                            },
                            success: function(response){
                                if (response.status) {
                                    toastr.success(response.message);
                                } else {
                                    toastr.error(response.message);
                                }
                                $('#loading-image').addClass('d-none');
                                location.reload();
                            },
                            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                                toastr.error(errorThrown);
                                $('#loading-image').addClass('d-none');
                                location.reload();
                            }   
                        });
                    }
                }, cancel: {
                    text: 'Cancel', btnClass: 'btn-danger', action: function () {},
                }
            }
        });
    });

} );
$(document).on('click', '.remove', function (event) {
    var url     = $(this).attr('data-route');
    var type    = "single";

    $.confirm( {
        columnClass: 'small', containerFluid: true,
        title: 'Are you sure?', content: 'Are you sure want to delete this entry?', 
        type: 'blue',
        typeAnimated: true,  buttons: {
            Delete: {
                text: 'Yes, delete it!', btnClass: 'btn-danger', action: function() {
                    $.ajax({
                        url: url,
                        type: 'DELETE',
                        data: {type:type},
                        beforeSend: function(){
                            $('#loading-image').removeClass('d-none');
                        },
                        success: function(response){
                            if (response.status) {
                                toastr.success(response.message);
                            } else {
                                toastr.error(response.message);
                            }
                            $('#loading-image').addClass('d-none');
                            location.reload();
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                            toastr.error(errorThrown);
                            $('#loading-image').addClass('d-none');
                            location.reload();
                        }   
                    });
                }
            }, cancel: {
                text: 'Cancel', btnClass: 'btn-primary', action: function () {},
            }
        }
    });
});

$(document).on('click','.common_model',function() {
    let url   = $(this).data('url');
    let title = $(this).data('title');
    let size  =  $(this).data('size') ? 'modal-dialog ' + $(this).data('size') : 'modal-dialog modal-md';
    $.ajax({
        type: "GET",
        url: url,
        beforeSend: function () {
            $("#loading-image1").removeClass("d-none");
            $('.common_model_content').parent().parent().parent().attr('class','');
        },
        success: function (data) {
            $('.common_model_content').html(data);
            $('.common_model_content').parent().parent().find('#exampleModalLabel').text(title);
            $('.common_model_content').parent().parent().parent().addClass(size);
            $('#common_model').modal('show');
        },
        complete: function (){
            $("#loading-image1").addClass("d-none");
        },
        error: function ( XMLHttpRequest, textStatus, errorThrown ) {
            $("#loading-image1").addClass("d-none");
        },
    });
});
$(document).on('click','.notification',function() {
    let url   = $(this).data('url');
    
    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            $('.get_notification').html(data);
        },
        error: function ( XMLHttpRequest, textStatus, errorThrown ) {
            $("#loading-image1").addClass("d-none");
        },
    });
});