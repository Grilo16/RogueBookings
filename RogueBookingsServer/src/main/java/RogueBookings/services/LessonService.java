package RogueBookings.services;

import RogueBookings.converters.DTOConverter;
import RogueBookings.dataTransferObjects.LessonDTO;
import RogueBookings.dataTransferObjects.UserDTO;
import RogueBookings.models.business.Business;
import RogueBookings.models.Lesson.Lesson;
import RogueBookings.models.user.User;
import RogueBookings.repositories.BusinessRepository;
import RogueBookings.repositories.LessonRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class LessonService {

    LessonRepository lessonRepository;
    BusinessRepository businessRepository;

    ModelMapper modelMapper;


    DTOConverter<LessonDTO, Lesson> dtoConverter;
    Type lessonDTOType = new TypeToken<LessonDTO>() {}.getType();
    Type lessonType = new TypeToken<Lesson>() {}.getType();

    @Autowired
    public LessonService(LessonRepository lessonRepository, BusinessRepository businessRepository, DTOConverter<LessonDTO, Lesson> dtoConverter) {
        this.lessonRepository = lessonRepository;
        this.businessRepository = businessRepository;
        this.dtoConverter = dtoConverter;
        this.modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setSkipNullEnabled(true);
    }

    public List<LessonDTO> getAllLessons(){
        return dtoConverter.entityToDTO(lessonRepository.findAll(), lessonDTOType);
    }

    public void createNewLesson(Long businessId, Lesson lesson) {
        Business business = businessRepository.findById(businessId).get();
        lesson.setBusiness(business);
        lessonRepository.save(lesson);
    }

    public void deleteLessonById(Long lessonId) {
        lessonRepository.deleteById(lessonId);
    }

    public Lesson editLesson(LessonDTO lessonDTO, Long lessonId) {
        Lesson patchObj = dtoConverter.DTOtoEntity(lessonDTO, lessonType);
        Lesson lesson = lessonRepository.findById(lessonId).get();
        modelMapper.map(patchObj, lesson);
        lessonRepository.save(lesson);
        return lesson;
    }
}


