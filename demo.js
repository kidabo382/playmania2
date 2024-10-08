// =============================================== //

// - Remove any active classes (yellow boxes)

// - Add active class to the clicked example box

// - Destroy any pervious Kast

// - On example box click, call Kast

// =============================================== //





// Handle: All Example boxes

$('.card-content').click(function () {

    $('.card-content').removeClass('active');

    $(this).addClass('active');

    

    // Destroy any pervious Kast

    // before we call a new Kast

    $.kast('destroy')    

})



// Handle: Example 3 click function

//$('#demo-3').click(function () {

    $.kast({

        host: '143.208.11.100',

        port: 8426,
        
        version: 2,

        colors: 'dynamic',

        theme: 'dynamic',
		
		autoPlay: true,

        continuous: true,

		played: false,

		minimizeMaximize: true,

		startTemplate: 'maximized',

		betaProxies: true,
	       
	        mobileCare: ['ultra','900px'],
	    
		direct: true,
	          defaultArtwork: ['https://i.imgur.com/wm7TAh4.png'],



    })

//})


