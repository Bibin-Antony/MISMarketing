// LeadCaptureForm.jsx
import React, { useState } from 'react';
import parent from "../assets/images/parent.png";
import { 
  Rocket, 
  Send, 
  AlertCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';
import { Input } from './Input';
import { Label } from './Label';
import { Alert, AlertDescription } from './Alert';

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childGrade: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitted: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGradeChange = (value) => {
    setFormData(prev => ({
      ...prev,
      childGrade: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    alert("Form submitted! We'll handle the backend logic later.");
    
    // Reset form
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childGrade: '',
    });
  };

  const grades = [
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'
  ];

  const benefits = [
    "World-class facilities with modern infrastructure",
    "Experienced faculty dedicated to excellence",
    "Balanced focus on academics, sports & leadership",
    "Safe and nurturing environment for growth",
    "Limited seats ensure personalized attention"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="lead-capture" className="w-[100vw] bg-white py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center bg-[#8A2E88]/10 px-6 py-2 rounded-full mb-2">
            <Rocket className="w-5 h-5 text-[#8A2E88] mr-2" />
            <span className="text-[#8A2E88] font-semibold">Limited Seats Available</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#264653]">
            Secure Your Child's Spot at<br />Mysore International School!
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form & our admissions team will contact you shortly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl rounded-xl overflow-hidden border-0">
              <div className="h-2 bg-gradient-to-r from-[#8A2E88] to-[#E76F51]"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-[#264653]">Admission Enquiry</CardTitle>
                <CardDescription className="text-base">
                  Limited seats available for Academic Year 2024-25
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName" className="text-[#264653] font-medium">
                        🔹 Parent's Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="focus:border-[#8A2E88] focus:ring-[#8A2E88]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#264653] font-medium">
                        🔹 Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="focus:border-[#8A2E88] focus:ring-[#8A2E88]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#264653] font-medium">
                        🔹 Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="focus:border-[#8A2E88] focus:ring-[#8A2E88]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childGrade" className="text-[#264653] font-medium">
                        🔹 Child's Grade Applying For <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="childGrade"
                        name="childGrade"
                        value={formData.childGrade}
                        onChange={(e) => handleGradeChange(e.target.value)}
                        className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8A2E88] focus:ring-[#8A2E88] focus:outline-none"
                        required
                      >
                        <option value="" disabled>Select grade</option>
                        {grades.map((grade) => (
                          <option key={grade} value={grade.toLowerCase()}>
                            {grade}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {formStatus.isSubmitted && (
                    <Alert className="bg-green-50 border-green-200">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Thank you for your interest! Our admissions team will contact you shortly.
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="pt-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white w-full text-lg py-6 rounded-lg shadow-md"
                      >
                        <Send className="w-5 h-5 mr-2" />
                         Submit & Get More Info
                      </Button>
                    </motion.div>
                    
                    <p className="text-center text-[#E76F51] font-semibold mt-4">
                      📢 "Seats are filling fast! Secure your child's future today!"
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Cards - Now displayed vertically */}
            <motion.div 
              className="grid grid-cols-1 gap-4 mt-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gray-50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-[#8A2E88]/10 p-2 rounded-full">
                      <Clock className="w-5 h-5 text-[#8A2E88]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#264653] mb-1">Visit Us</h3>
                      <p className="text-gray-600 text-sm">
                        Monday to Saturday<br />
                        9:00 AM - 4:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gray-50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-[#8A2E88]/10 p-2 rounded-full">
                      <Phone className="w-5 h-5 text-[#8A2E88]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#264653] mb-1">Call Us</h3>
                      <p className="text-gray-600 text-sm">
                        0821 2971010<br />
                        +91 8884 300 400

                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gray-50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-[#8A2E88]/10 p-2 rounded-full">
                      <Mail className="w-5 h-5 text-[#8A2E88]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#264653] mb-1">Email Us</h3>
                      <p className="text-gray-600 text-sm">
                      admissions@mysoreinternationalschool.com <br />
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Info & Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Why Choose Us */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden bg-gradient-to-br from-[#8A2E88] to-[#6A1B67] text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl">Why Choose Mysore International School?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <div className="bg-[#8A2E88]/40 px-6 py-4">
                <p className="text-sm text-purple-100">
                  Join the 1000+ families who've trusted us with their children's education
                </p>
              </div>
            </Card>
            
            {/* Google Maps Embed - Replaced static image */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-3">
                  <div className="bg-[#8A2E88]/10 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-[#8A2E88]" />
                  </div>
                  <CardTitle className="text-xl text-[#264653]">Find Us Here</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <div className="aspect-[4/3] rounded-b-xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15575.25982728258!2d76.5866804!3d12.2290059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf644f7358cc0d%3A0xe4fb32672e467b68!2sMysore%20International%20School!5e0!3m2!1sen!2sin!4v1708608743857!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mysore International School Google Map"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;