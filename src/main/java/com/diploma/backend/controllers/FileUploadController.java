package com.diploma.backend.controllers;

import com.diploma.backend.dto.FileModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.FileCopyUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletContext;
import java.io.File;
import java.io.IOException;

@Controller
public class FileUploadController {

    @Autowired
    ServletContext context;

    @RequestMapping(value = "/fileUploadPage", method = RequestMethod.GET)
    public ModelAndView fileUploadPage() {
        FileModel file = new FileModel();
        ModelAndView modelAndView = new ModelAndView("fileUpload", "command", file);
        return modelAndView;
    }

    @RequestMapping(value = "/fileUploadPage", method = RequestMethod.POST)
    public String fileUpload(@Validated FileModel file, BindingResult result, ModelMap model) throws IOException {
        if (result.hasErrors()) {
            System.out.println("validation errors");
            return "fileUploadPage";
        } else {
            System.out.println("Fetching file");
            MultipartFile multipartFile = file.getFile();
            String uploadPath1 = "C:\\Users\\Артем\\Desktop\\Diploma\\Практика\\Github Online Classifieds\\diploma\\diploma\\src\\main\\resources\\static\\img\\";
            String uploadPath2 = "C:\\Users\\Артем\\Desktop\\Diploma\\Практика\\Github Online Classifieds\\diploma\\diploma\\target\\classes\\static\\img\\";
            FileCopyUtils.copy(file.getFile().getBytes(), new File(uploadPath1 + file.getFile().getOriginalFilename()));
            FileCopyUtils.copy(file.getFile().getBytes(), new File(uploadPath2 + file.getFile().getOriginalFilename()));
            String fileName1 = multipartFile.getOriginalFilename();
            String fileName2 = multipartFile.getOriginalFilename();
            model.addAttribute("fileName", fileName1);
            model.addAttribute("fileName", fileName2);
            return "success";
        }
    }
}