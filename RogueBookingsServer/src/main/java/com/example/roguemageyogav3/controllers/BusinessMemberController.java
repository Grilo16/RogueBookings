package com.example.roguemageyogav3.controllers;


import com.example.roguemageyogav3.models.member.BusinessesMember;
import com.example.roguemageyogav3.services.BusinessMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "members")
public class BusinessMemberController {

    BusinessMemberService businessMemberService;

    @Autowired
    public BusinessMemberController(BusinessMemberService businessMemberService) {
        this.businessMemberService = businessMemberService;
    }

    @GetMapping
    public List<BusinessesMember> getAllBusinessMembers(){

        return businessMemberService.getAllBusinessMembers();
    }

    @PostMapping(path = "/{memberId}/business/{businessId}")
    public void addMemberToBusiness(@PathVariable Long memberId, @PathVariable Long businessId){
        businessMemberService.addMemberToBusiness(memberId, businessId);
    }
}
