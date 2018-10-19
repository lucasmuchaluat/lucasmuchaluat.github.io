document.addEventListener('DOMContentLoaded', function() {

	let db = connect('https://portfolio-f1d2f.firebaseio.com/')

	let params = extract()

	let url = '/' + params['categoria'] + '/curso/' + params['curso']


	db.download(url, function(data) {

		replace('body', {
    		'nome': data['nome'],
    		'descricao': data['descricao'],
    		'competencias': data['competencias'],
    		'imagem': data['imagem'],
    		'passo_a_passo': data['passo_a_passo'],
    	})

    	let documento = document.querySelector('.hidden')

    	documento.classList.add('hidden')

    	setTimeout(function() {documento.classList.remove('hidden') }, 50);
  	})
})