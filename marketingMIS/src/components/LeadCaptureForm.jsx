// LeadCaptureForm.jsx
import React, { useState } from 'react';
import { Rocket, Send, AlertCircle } from 'lucide-react';
import Button from './Button'; // Changed from { Button }
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select';
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
    isSubmitting: false,
    isSubmitted: false,
    error: null
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childGrade: '',
      });
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Something went wrong. Please try again.'
      });
    }
  };

  const grades = [
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Rocket className="w-8 h-8 text-[#8A2E88]" />
          <h2 className="text-3xl font-bold text-[#264653]">
            Secure Your Child's Spot
          </h2>
        </div>
        <p className="text-lg text-gray-600">
          Fill out the form & our admissions team will contact you shortly
        </p>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-[#264653]">Admission Enquiry</CardTitle>
          <CardDescription>
            Limited seats available for Academic Year 2024-25
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="parentName">Parent's Name</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="childGrade">Child's Grade</Label>
                <Select 
                  value={formData.childGrade}
                  onValueChange={handleGradeChange}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {grades.map((grade) => (
                      <SelectItem key={grade} value={grade.toLowerCase()}>
                        {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {formStatus.error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {formStatus.error}
                </AlertDescription>
              </Alert>
            )}

            {formStatus.isSubmitted && (
              <Alert className="bg-green-50 border-green-200">
                <AlertDescription className="text-green-800">
                  Thank you for your interest! Our admissions team will contact you shortly.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex flex-col items-center gap-4">
              <Button 
                type="submit" 
                className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white w-full md:w-auto"
                disabled={formStatus.isSubmitting}
              >
                <Send className="w-4 h-4 mr-2" />
                {formStatus.isSubmitting ? 'Submitting...' : 'Submit & Get More Info'}
              </Button>
              
              <p className="text-sm text-gray-500 italic">
                "Seats are filling fast! Secure your child's future today!"
              </p>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Visit Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Monday to Saturday<br />
              9:00 AM - 4:00 PM
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Call Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              +91 XXXXXXXXXX<br />
              +91 XXXXXXXXXX
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Email Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              admissions@mis.edu<br />
              info@mis.edu
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadCaptureForm;