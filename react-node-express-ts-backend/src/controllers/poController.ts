import { Request, Response } from 'express';
import PurchaseOrder from '../models/purchaseOrder';  // Correct import of the model
import { generatePOPdf } from '../utils/pdfGenerator';
import pdfMake from 'pdfmake';

// Create a new Purchase Order and generate PDF
export const createPO = async (req: Request, res: Response) => {
  const { poNumber, description, totalAmount } = req.body;
  try {
    const po = await PurchaseOrder.create({ poNumber, description, totalAmount });

    // Generate PDF using purchase order data
    const documentDefinition = generatePOPdf(po);

    const pdfDoc = pdfMake.createPdf(documentDefinition);
    pdfDoc.getBase64((data: string) => {
      res.setHeader('Content-Disposition', 'attachment; filename="purchase_order.pdf"');
      res.setHeader('Content-Type', 'application/pdf');
      res.send(Buffer.from(data, 'base64'));
    });
  } catch (error) {
    res.status(500).json({ error: 'Error creating PO' });
  }
};

export const getAllPOs = async (req: Request, res: Response) => {
    try {
      const pos = await PurchaseOrder.findAll();  // Fetch all POs from the database
      res.status(200).json(pos);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching POs' });
    }
  };
