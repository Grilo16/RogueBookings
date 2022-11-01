package RogueBookings.controllers;


import RogueBookings.models.Member;
import RogueBookings.services.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "members")
public class MemberController {

    MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping
    public List<Member> getAllBusinessMembers(){

        return memberService.getAllBusinessMembers();
    }

    @PostMapping(path = "/{memberId}/business/{businessId}")
    public void addMemberToBusiness(@PathVariable Long memberId, @PathVariable Long businessId){
        memberService.addMemberToBusiness(memberId, businessId);
    }
}
