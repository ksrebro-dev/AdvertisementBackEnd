const Advertisement = require('../models/Advertisement');

// Pobranie wszystkich ogłoszeń z paginacją
exports.getAdvertisements = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const advertisements = await Advertisement.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const total = await Advertisement.countDocuments();
    res.json({ data: advertisements, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Pobranie pojedynczego ogłoszenia
exports.getAdvertisement = async (req, res) => {
  try {
    const advertisement = await Advertisement.findById(req.params.id);
    if (!advertisement) {
      return res.status(404).json({ message: 'Advertisement not found' });
    }
    res.json(advertisement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Dodanie nowego ogłoszenia
exports.createAdvertisement = async (req, res) => {
  const { title, content, category, author, contact, image } = req.body;
  try {
    const newAdvertisement = new Advertisement({
      title,
      content,
      category,
      author,
      contact,
      image
    });
    await newAdvertisement.save();
    res.status(201).json(newAdvertisement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Edycja ogłoszenia
exports.updateAdvertisement = async (req, res) => {
  try {
    const advertisement = await Advertisement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!advertisement) {
      return res.status(404).json({ message: 'Advertisement not found' });
    }
    res.json(advertisement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Usunięcie ogłoszenia
exports.deleteAdvertisement = async (req, res) => {
  try {
    const advertisement = await Advertisement.findByIdAndDelete(req.params.id);
    if (!advertisement) {
      return res.status(404).json({ message: 'Advertisement not found' });
    }
    res.json({ message: 'Advertisement deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
