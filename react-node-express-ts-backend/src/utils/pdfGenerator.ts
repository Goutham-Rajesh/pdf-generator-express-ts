export const generatePOPdf = (poData: any): any => {
    return {
      content: [
        { text: 'Purchase Order', style: 'header' },
        `PO Number: ${poData.poNumber}`,
        `Description: ${poData.description}`,
        `Total Amount: ${poData.totalAmount}`,
        `Date: ${poData.date}`,
      ],
    };
  };
