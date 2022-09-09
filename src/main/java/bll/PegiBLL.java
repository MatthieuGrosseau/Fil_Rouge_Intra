package bll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bo.film.Pegi;
import dal.PegiDAO;

@Service
public class PegiBLL {
	@Autowired
	private PegiDAO dao;
	
	public List<Pegi> selectAll() {
		return dao.findAll();
	}
	
	public Pegi selectById(int id) {
		return dao.findById(id).get();
	}
	
	public void save(Pegi p) {
		dao.save(p);
	}
	
	public void delete(Pegi p) {
		dao.delete(p);
	}
	
	public void deleteById(int id) {
		dao.deleteById(id);
	}
	
	public boolean contains(int id) {
		return dao.existsById(id);
	}

}
