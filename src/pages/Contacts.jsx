const Contacts = () => {
	return (
		<main className='section'>
			<div className='container'>
				<h1 className='title-1'>Contacts</h1>

				<ul className='content-list'>
					<li className='content-list__item'>
						<h2 className='title-2'>Location</h2>
						<p>Saint Petersburg, Russia</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Telegram</h2>
						<p>
							<a href='https://telegram.me/pavelleshkevich'>@pavelleshkevich</a>
						</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Email</h2>
						<p>
							<a href='mailto:paul8paul8@mail.ru'>paul8paul8@mail.ru</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	)
}

export default Contacts
