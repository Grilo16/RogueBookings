package com.example.roguemageyogav3.tryingout;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/")
public class Controller {

    @Autowired
    BusinessRepository businessRepository;


    @GetMapping
    public List<Business> findAll() {
        return businessRepository.findAll();
    }


    @PostMapping
    public <S extends Business> S save(S entity) {
        return businessRepository.save(entity);
    }
}
