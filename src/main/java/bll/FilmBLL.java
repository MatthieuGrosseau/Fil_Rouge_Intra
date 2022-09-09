package bll;

import java.util.List;

import bo.film.Film;
import dal.FilmDAO;
import dal.FilmDAOHibernateImpl;

public class FilmBLL {
	private FilmDAO dao;
	
	public FilmBLL() {
		dao = new FilmDAOHibernateImpl();
	}
	
	public List<Film> selectAll() {
		return dao.selectAll();
	}

	public Film selectById(int noFilm) {
		return dao.selectById(noFilm);
	}

	public void insert(Film film) {
		dao.insert(film);
		
	}

	public void update(Film film) {
		dao.update(film);
		
	}

	public void deleteById(int noFilm) {
		dao.deleteById(noFilm);
		
	}

}
