package com.example.roguemageyogav3.services;

import com.example.roguemageyogav3.models.member.BusinessesMember;
import com.example.roguemageyogav3.repositories.BusinessesMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessMemberService {

    BusinessesMemberRepository businessesMemberRepository;

    @Autowired
    public BusinessMemberService(BusinessesMemberRepository businessesMemberRepository) {
        this.businessesMemberRepository = businessesMemberRepository;
    }

    public List<BusinessesMember> getAllBusinessMembers() {
        return businessesMemberRepository.findAll();
    }

    public void addMemberToBusiness(Long memberId, Long businessId) {
        businessesMemberRepository.addMemberToBusiness(memberId, businessId);
    }
}
