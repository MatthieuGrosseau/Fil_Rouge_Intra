package bll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bo.film.Categorie;
import dal.CategorieDAO;

@Service
public class CategorieBLL {
	@Autowired
	private CategorieDAO dao;
	
	public List<Categorie> selectAll() {
		return dao.findAll();
	}
	
	public Categorie selectById(String id) {
		return dao.findById(id).get();
	}
	
	public void save(Categorie c) {
		dao.save(c);
	}
	
	public void delete(Categorie c) {
		dao.delete(c);
	}
	
	public void deleteById(String id) {
		dao.deleteById(id);
	}
	
	public boolean contains(String id) {
		return dao.existsById(id);
	}
	
}
