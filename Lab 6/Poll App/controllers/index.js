let get = (req, res) => {
	res.render('index', { title: 'Express' });
}

module.exports.get = get;