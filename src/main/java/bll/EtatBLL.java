package bll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bo.film.Etat;
import dal.EtatDAO;

@Service
public class EtatBLL {
	@Autowired
	private EtatDAO dao;
	
	public List<Etat> selectAll() {
		return dao.findAll();
	}
	
	public Etat selectById(String id) {
		return dao.findById(id).get();
	}
	
	public void save(Etat e) {
		dao.save(e);
	}
	
	public void delete(Etat e) {
		dao.delete(e);
	}
	
	public void deleteById(String id) {
		dao.deleteById(id);
	}
	
	public boolean contains(String id) {
		return dao.existsById(id);
	}

}
