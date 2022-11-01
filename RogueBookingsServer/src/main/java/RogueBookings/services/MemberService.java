package RogueBookings.services;

import RogueBookings.models.Business;
import RogueBookings.models.Member;
import RogueBookings.models.User;
import RogueBookings.repositories.BusinessRepository;
import RogueBookings.repositories.MemberRepository;
import RogueBookings.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    private MemberRepository memberRepository;
    private UserRepository userRepository;
    private BusinessRepository businessRepository;


    @Autowired
    public MemberService(MemberRepository memberRepository, UserRepository userRepository, BusinessRepository businessRepository) {
        this.memberRepository = memberRepository;
        this.userRepository = userRepository;
        this.businessRepository = businessRepository;
    }


    public List<Member> getAllBusinessMembers() {
        return memberRepository.findAll();
    }

    public void addMemberToBusiness(Long memberId, Long businessId) {
        User user = userRepository.findById(memberId).get();
        Business business = businessRepository.findById(businessId).get();
        Member member = new Member();
        member.setMember(user);
        member.setBusiness(business);
        memberRepository.save(member);
    }

    public void removeMemberFromBusiness(Long memberId) {
        Member member = memberRepository.findById(memberId).get();
        memberRepository.delete(member);
    }
}
