package com.devsuperior.vendasds.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.vendasds.dto.SaleDTO;
import com.devsuperior.vendasds.entities.Sale;
import com.devsuperior.vendasds.repositories.SaleRepository;
import com.devsuperior.vendasds.repositories.SellerRepository;

// Metodo para retornar uma lista de Seller
@Service
public class SaleService {
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellerRepository.findAll();
		Page<Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
		
	} 
}
