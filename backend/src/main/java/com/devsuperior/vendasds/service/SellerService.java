package com.devsuperior.vendasds.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.vendasds.dto.SellerDTO;
import com.devsuperior.vendasds.entities.Seller;
import com.devsuperior.vendasds.repositories.SellerRepository;

// Metodo para retornar uma lista de Seller
@Service
public class SellerService {
	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll() {
		List<Seller> result = repository.findAll();
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	} 
}
