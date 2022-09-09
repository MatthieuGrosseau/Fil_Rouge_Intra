package bll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bo.film.FilmVersion;
import dal.FilmVersionDAO;

@Service
public class FilmVersionBLL {
	@Autowired
	private FilmVersionDAO dao;
	
	public List<FilmVersion> selectAll() {
		return dao.findAll();
	}
	
	public FilmVersion selectById(String id) {
		return dao.findById(id).get();
	}
	
	public void save(FilmVersion v) {
		dao.save(v);
	}
	
	public void delete(FilmVersion v) {
		dao.delete(v);
	}
	
	public void deleteById(String id) {
		dao.deleteById(id);
	}
	
	public boolean contains(String id) {
		return dao.existsById(id);
	}

}
