package RogueBookings.models;

import javax.persistence.*;

@Entity
@Table(name = "user_layout")
public class UserLayout {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_layout_seq")
    @SequenceGenerator(name = "user_layout_seq")
    @Column(name = "id", nullable = false)
    private Long id;


    public UserLayout() {
    }

    public UserLayout(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}