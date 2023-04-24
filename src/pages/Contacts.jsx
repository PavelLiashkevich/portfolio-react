const Contacts = () => {
	return (
		<main class='section'>
			<div class='container'>
				<h1 class='title-1'>Contacts</h1>

				<ul class='content-list'>
					<li class='content-list__item'>
						<h2 class='title-2'>Location</h2>
						<p>Saint Petersburg, Russia</p>
					</li>
					<li class='content-list__item'>
						<h2 class='title-2'>Telegram / WhatsApp</h2>
						<p>
							<a href='tel:+79051234567'>+7 (977) 888-50-07</a>
						</p>
					</li>
					<li class='content-list__item'>
						<h2 class='title-2'>Email</h2>
						<p>
							<a href='mailto:webdev@protonmail.com'>paul8paul8@mail.ru</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	)
}

export default Contacts
