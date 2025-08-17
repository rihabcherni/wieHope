const Donation = require('../models/DonationModel');
const School = require('../models/SchoolModel'); 
const Donor = require('../models/DonorModel'); 

    const createDonation = async (req, res) => {
    try {
        const schoolId = req.body.school;
        const donorId = req.body.donor;
        const school = await School.findById(schoolId);
        if (!school) {
        return res.status(404).json({ success: false, error: 'School not found' });
        }

        const donor = await Donor.findById(donorId);
        if (!donor) {
        return res.status(404).json({ success: false, error: 'Donor not found' });
        }

        const donation = await Donation.create({
        ...req.body,
        school: schoolId,
        });

        res.status(201).json({ success: true, data: donation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
    };
    const getAllDonations = async (req, res) => {
        try {
          const donations = await Donation.find()
          .populate('school', 'name address governorate nbr_student nbr_teachers nbr_classes type_needs needs')
          .populate('donor', 'firstName lastName email photo').sort({ dateDonation: -1 }); 
          res.status(200).json({ success: true, data: donations });
        } catch (error) {
          res.status(500).json({ success: false, error: error.message });
        }
    };
    const getAllDonationsByDonor = async (req, res) => {
        const donorId = req.params.Donor;    
        try {
            const donations = await Donation.find({ donor: donorId })    
            .populate('school', 'name address governorate nbr_student nbr_teachers nbr_classes type_needs needs')
            .populate('donor', 'firstName lastName email photo')
            .sort({ dateDonation: -1 }); 
          res.status(200).json({ success: true, data: donations });
        } catch (error) {
          res.status(500).json({ success: false, error: error.message });
        }
    };
    
    const getAllDonationsBySchool = async (req, res) => {
        const schoolId = req.params.school;    
        try {
            const donations = await Donation.find({ school: schoolId })    
            .populate('school', 'name address governorate nbr_student nbr_teachers nbr_classes type_needs needs')
            .populate('donor', 'firstName lastName email photo')
            .sort({ dateDonation: -1 }); 
          res.status(200).json({ success: true, data: donations });
        } catch (error) {
          res.status(500).json({ success: false, error: error.message });
        }
    };
    const getAllDonorBySchool = async (req, res) => {
        try {
            const schoolId = req.params.schoolId;
            const donations = await Donation.find({ school: schoolId })    
                .populate('school', 'name address governorate nbr_student nbr_teachers nbr_classes type_needs needs')
                .populate('donor', 'firstName lastName email photo')
                .sort({ dateDonation: -1 });
    
            const uniqueDonors = [];
            donations.forEach((donation) => {
                const donorEmail = donation.donor.email;
                const firstName = donation.donor.firstName;
                const lastName = donation.donor.lastName;
                const photo = donation.donor.photo;
                const isUnique = !uniqueDonors.some((uniqueDonor) => uniqueDonor.email === donorEmail);
                if (isUnique) {
                    uniqueDonors.push({
                        email: donorEmail,
                        firstName: firstName,
                        lastName: lastName,
                        photo: photo,
                    });
                }
            });
    
            const data = {
                uniqueDonors: uniqueDonors,
            };
    
            res.status(200).json({ success: true, data: data });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    };
    
    const getDonationById = async (req, res) => {
        try {
        const donation = await Donation.findById(req.params.id);
        if (!donation) {
            return res.status(404).json({ success: false, error: 'Donation not found' });
        }
        res.status(200).json({ success: true, data: donation });
        } catch (error) {
        res.status(500).json({ success: false, error: error.message });
        }
    };
    const updateDonationById = async (req, res) => {
        try {
        const donation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!donation) {
            return res.status(404).json({ success: false, error: 'Donation not found' });
        }
        res.status(200).json({ success: true, data: donation });
        } catch (error) {
        res.status(500).json({ success: false, error: error.message });
        }
    };
    const deleteDonationById = async (req, res) => {
        try {
        const donation = await Donation.findByIdAndDelete(req.params.id);
        if (!donation) {
            return res.status(404).json({ success: false, error: 'Donation not found' });
        }
        res.status(200).json({ success: true, data: {} });
        } catch (error) {
        res.status(500).json({ success: false, error: error.message });
        }
    };
    const getlastDonationsBySchool = async (req, res) => {
        const schoolId = req.params.school;  
        try {
            const last8Donations = await Donation.find({ school: schoolId })
            .populate('school', 'name')
            .populate('donor', 'firstName lastName governorate').sort({ dateDonation: -1 }).limit(8); 

            res.json(last8Donations);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
module.exports = {
    createDonation,
    getAllDonations,
    getDonationById,
    updateDonationById,
    deleteDonationById,
    getAllDonationsByDonor,
    getAllDonationsBySchool,
    getAllDonorBySchool,
    getlastDonationsBySchool
};