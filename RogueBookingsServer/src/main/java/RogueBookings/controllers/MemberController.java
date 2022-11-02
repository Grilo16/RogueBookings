package RogueBookings.controllers;


import RogueBookings.models.Member;
import RogueBookings.services.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:3000/")
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

    @PostMapping(path = "/{userId}/business/{businessId}")
    public void addMemberToBusiness(@PathVariable Long userId, @PathVariable Long businessId){
        memberService.addMemberToBusiness(userId, businessId);
    }

    @PutMapping(path = "/{memberId}/leave")
    public void removeMemberFromBusiness(@PathVariable Long memberId){
        memberService.removeMemberFromBusiness(memberId);
    }
}
